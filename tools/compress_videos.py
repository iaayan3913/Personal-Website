"""Re-encode the videos in Images/ for the web.

Run from the repo root after adding a video:  python tools/compress_videos.py
Needs ffmpeg/ffprobe on PATH.

- Long side capped at 1280px (never upscaled), frame rate capped at 30fps.
- H.264 (plays everywhere), CRF quality mode, moov atom at the front so playback starts early.
- Audio kept at 96 kbps AAC when present.
- A file is only replaced when the new version is at least 10% smaller,
  so running this again on already-compressed videos changes nothing.
"""
import json
import os
import shutil
import subprocess
import sys
import tempfile

SRC = "Images"
MAX_SIDE = 1280
CRF = "26"
MIN_SAVING = 0.10


def has_audio(path):
    out = subprocess.run(
        ["ffprobe", "-v", "error", "-select_streams", "a", "-show_entries", "stream=index", "-of", "json", path],
        capture_output=True, text=True, check=True,
    ).stdout
    return bool(json.loads(out).get("streams"))


def compress(path, dst):
    scale = (f"scale='if(gte(iw,ih),min({MAX_SIDE},iw),-2)'"
             f":'if(gte(iw,ih),-2,min({MAX_SIDE},ih))'")
    cmd = ["ffmpeg", "-y", "-v", "error", "-i", path,
           "-vf", scale, "-fpsmax", "30",
           "-c:v", "libx264", "-preset", "slow", "-crf", CRF,
           "-pix_fmt", "yuv420p", "-profile:v", "high",
           "-movflags", "+faststart"]
    cmd += ["-c:a", "aac", "-b:a", "96k"] if has_audio(path) else ["-an"]
    subprocess.run(cmd + [dst], check=True)


def main():
    files = sorted(f for f in os.listdir(SRC) if f.lower().endswith(".mp4"))
    before = after = 0
    with tempfile.TemporaryDirectory() as tmp:
        for f in files:
            src = os.path.join(SRC, f)
            dst = os.path.join(tmp, f)
            old = os.path.getsize(src)
            compress(src, dst)
            new = os.path.getsize(dst)
            if new <= old * (1 - MIN_SAVING):
                shutil.move(dst, src)
                verdict = "replaced"
            else:
                new = old
                verdict = "kept original"
            before += old
            after += new
            print(f"{f:28s} {old / 1e6:6.1f} MB -> {new / 1e6:6.1f} MB  {verdict}", flush=True)
    print(f"{'TOTAL':28s} {before / 1e6:6.1f} MB -> {after / 1e6:6.1f} MB")


if __name__ == "__main__":
    sys.exit(main())
