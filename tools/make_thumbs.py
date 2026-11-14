"""Regenerate Images/thumbs/ (web-sized JPEGs + video poster frames).

Run from the repo root after adding media to Images/:  python tools/make_thumbs.py
Needs Pillow (pip install pillow) and ffmpeg on PATH.
"""
import os, sys, subprocess
from PIL import Image, ImageOps
src, out = "Images", "Images/thumbs"
os.makedirs(out, exist_ok=True)
for f in sorted(os.listdir(src)):
    p = os.path.join(src, f); base, ext = os.path.splitext(f); ext = ext.lower()
    if not os.path.isfile(p): continue
    dst = os.path.join(out, base + ".jpg")
    if ext == ".mp4":
        subprocess.run(["ffmpeg","-y","-loglevel","error","-ss","1","-i",p,"-frames:v","1","-vf","scale='min(1100,iw)':-2","-q:v","4",dst], check=False)
        if not os.path.exists(dst):
            subprocess.run(["ffmpeg","-y","-loglevel","error","-i",p,"-frames:v","1","-vf","scale='min(1100,iw)':-2","-q:v","4",dst])
        continue
    if ext not in (".jpg",".jpeg",".png",".gif"): continue
    im = Image.open(p)
    if ext == ".gif": im.seek(0)
    im = ImageOps.exif_transpose(im)
    if im.mode in ("RGBA","LA","P"):
        im = im.convert("RGBA"); bg = Image.new("RGBA", im.size, (255,255,255,255) if base!="Logo" else (10,12,11,255)); bg.alpha_composite(im); im = bg
    im = im.convert("RGB"); im.thumbnail((1100,1100), Image.LANCZOS)
    im.save(dst, "JPEG", quality=80, optimize=True, progressive=True)
