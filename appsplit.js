// ==========================================================================
// SYSTEM ASSET LOGO MAPPING
// ==========================================================================
const ASSET_LOGOS = {
  "UCL": "Logos/UCL_logo.png",        
  "LSF": "Logos/LSFC-logo.jpg",        
  "IHS": "Logos/icknield-logo.jpg",        
  "CL": "Logos/clarity-logo.jpg",         
  "IN": "Logos/inetec-logo.png",         
  "VC": "Logos/vc-logo.jpg",         
  "FOBE": "Logos/fobe-logo.png",        
  "MM": "Logos/marvellousminds-logo.png",
  "ER": "Logos/Extend-logo.png"
};

// ==========================================================================
// SYSTEM DATA CONFIGURATION LAYER
// ==========================================================================
const DATA = {
  experience: [
    {
      id: "exp-fobe-group",
      company: "Friends Of Bright Eyes",
      monogram: "FOBE",
      startDate: "Jan 2024",
      endDate: "Present",
      location: "Luton, England, United Kingdom · On-site",
      roles: [
        {
          title: "Supervisor",
          startDate: "Jul 2026", // Set this to the month you stepped into the role
          endDate: "Present",
          bullets: [
            "Ensure the care center is fully free of operational risks by executing rigorous environmental safety checks.",
            "Manage administrative coordination, overseeing accurate up-to-date attendance registers.",
            "Provide vital clear-channel communications between the charity board and parents of the children to align care objectives."
          ],
        },
        {
          title: "Senior Care Worker",
          startDate: "Sep 2024",
          endDate: "Present",
          bullets: [
            "Assisted children with disabilities in educational, recreational, and therapeutic activities, fostering an inclusive and supportive environment."
          ],
        },
        {
          title: "Center Maintenance Worker",
          startDate: "Nov 2025",
          endDate: "Present",
          bullets: [
            "Maintain cleanliness and safety of outdoor areas to ensure a secure environment for kids with various disabilities."
          ],
        },
        {
          title: "Winter Scheme Session Lead",
          startDate: "Nov 2025",
          endDate: "Dec 2025",
          bullets: [
            "Promoted to Session Lead for the Winter Scheme, leading a team of 4 to orchestrate and execute a two-day activity programme for over 50 attendees."
          ],
        },
        {
          title: "Volunteer",
          startDate: "Jan 2024",
          endDate: "Sep 2024",
          bullets: [
            "Supported children with disabilities in educational and recreational activities, developing core communication and interpersonal skills."
          ],
        }
      ]
    },
    {
      id:"exp-extend-robotics",
      company: "Extend Robotics",
      monogram: "ER",
      startDate: "Feb 2026",
      endDate: "Jun 2026",
      location: "Reading, England, United Kingdom · On-site",
      roles: [
        // potentially intern question mark. soon come 
        {
          title: "Development Teleoperations Intern",
          startDate: "Jul 2026",
          endDate: "Sep 2026",
          bullets: [
            "Carried out Raas operations as a teleoperator to ensure consistency and high success rates",
            "Worked in teams of 2 to ensure smooth handover and effective teleoperation over a long period of time",
            "Displayed over 200 successful grasps during a live demo event with Google DeepMind"
          ],
        },
        {
          title: "Industry Placement Student",
          startDate: "Feb 2026",
          endDate: "Jun 2026",
          bullets: [
            "Done as part of UCL's industrial project module",
            "Worked on developing VLA models to autonomously pick and place objects",
            "Gathered data through teleoperation and processed it to allow for VLA training"
          ],
        }
      ]
    },
    {
      id: "exp-marvellous",
      company: "Marvellous Minds",
      monogram: "MM",
      startDate: "Jun 2025",
      endDate: "Jun 2026",
      location: "Bedford, England, United Kingdom · On-site",
      roles: [
        {
          title: "Senior Invigilator",
          startDate: "May 2026",
          endDate: "Jun 2026",
          bullets: [
            "Took on enhanced accountability for exam compliance and resource distribution.",
            "Ensure papers are kept secure and organised following examination guidelines."
          ],
        },
        {
          title: "Invigilator",
          startDate: "Jun 2025",
          endDate: "Jun 2025",
          bullets: [
            "Supervised classrooms during GCSE and A-Level exams, ensuring students remained focused and followed exam regulations.",
            "Demonstrated strong observation skills and responsibility while assisting with student queries and reporting any concerns to supervisors",
            "Prepared exam materials, distributed papers, and enforced time limits according to exam regulations"
          ],
        }
      ]
    },
    {
      id: "exp-clarity",
      company: "Clarity (Previously Anecdote)",
      monogram: "CL",
      startDate: "Aug 2025",
      endDate: "Sep 2025",
      location: "Palo Alto, California, United States · Remote",
      roles: [
        {
          title: "Research Intern",
          startDate: "Aug 2025",
          endDate: "Sep 2025",
          bullets: [
            "Investigated human responses to AI agent latency through academic and industry literature.",
            "Authored research report: \"Latency Matters – How Response Time Shapes Trust in AI Agents\".",
            "Distilled findings into actionable design insights."
          ],
        }
      ]
    },
    {
      id: "exp-inetec",
      company: "INETEC",
      monogram: "IN",
      startDate: "Jun 2025",
      endDate: "Aug 2025",
      location: "Zagreb, Croatia · On-site",
      roles: [
        {
          title: "Robotics Intern",
          startDate: "Jun 2025",
          endDate: "Aug 2025",
          bullets: [
            "Designed and prototyped a hardware module for INETEC's Forerunner system (nuclear steam generator inspection robot).",
            "Performed engineering calculations for force and torque requirements.",
            "Worked hands-on with full-scale nuclear reactor mock-ups and non-destructive testing equipment."
          ],
        }
      ]
    },
    {
      id: "exp-venue-central",
      company: "Venue Central",
      monogram: "VC",
      startDate: "Jul 2022",
      endDate: "Apr 2024",
      location: "Luton, England, United Kingdom · On-site",
      roles: [
        {
          title: "Waiter",
          startDate: "Jul 2022",
          endDate: "Apr 2024",
          bullets: [
            "Served up to 800 guests per event in high-pressure banqueting environments.",
            "Collaborated within teams of 20–30 staff across large-scale events."
          ],
        }
      ]
    }
  ],
  education: {
    formal: [
      {
        id: "edu-ucl",
        monogram: "UCL",
        title: "MEng Robotics & Artificial Intelligence",
        institution: "University College London",
        dates: "2024 – 2028 (Ongoing)",
        grade: "Current Standing: 79%",
        tags: ["Year 1 First","Year 2 First" ,"Robotics & AI"],
        bubbleContent: `
          <p><strong>Current Standing:</strong> 82% average throughout the first academic cycle.</p>
          <p>Notable coursework & project modules:</p>
          <ul>
            <li>2D Black Hole Simulation — 95%</li>
            <li>Machine Learning for Gripper Control — 79%</li>
            <li>Forecasting Project — 86%</li>
            <li>Third place in our robotics challenge, creating an all terrain vehicle to carry out line/wall following, driving over different surfaces and using gripper to change its mode of transport.</li>
          </ul>
          <ul>Modules taken: 
            <li>Programming for robotics and AI</li>
            <li>Mathematics for robotics and AI 1 & 2</li>
            <li>Mechanical Systems</li>
            <li>Mechatronics and Making (Mechanical Arm)</li>
            <li>Electronics (Smart Automated Desk Fan)</li>
            <li>Control 1 & 2</li>
            <li>Object Oriented Programming (Machine Learning Gripper)</li>
            <li>Systems Engineering for Real Time Systems (Inverted Pendulum Cart)</li>
            <li>Sensor Fusion (Kalman Filter)</li>
            <li>Industrial Project</li>
            <li>Machine Learning and Reinforcement Learning (Forecasting and Neural Network Predictions)</li>
            <li>Modelling and Simulation (Black Hole Model)</li>
        `
      },
      {
        id: "edu-luton",
        monogram: "LSF",
        title: "A-Levels",
        institution: "Luton Sixth Form College",
        dates: "2022 – 2024",
        grade: "A* A* A A",
        tags: ["Top 5% CS"],
        bubbleContent: `
          <p><strong>Grades Achieved:</strong> Mathematics: A* | Computer Science: A* | Physics: A | EPQ: A</p>
          <ul>
            <li>Zero Gravity Scholarship recipient (£3,000) — awarded for academic excellence, STEM passion, and active peer mentorship engagement.</li>
            <li>Ranked within the top 5% metrics nationally for A-Level Computer Science performance (2024).</li>
          </ul>
          <ul>Subject Exam boards: 
            <li>Edexcel A-level Maths</li>
            <li>OCR A-level Computer Science</li>
            <li>AQA A-level Physics</li>
          <p>Created an EPQ on "To what extent is the Artemis program viable and what would it enable for future missions"</p>
        `
      },
      {
        id: "edu-icknield",
        monogram: "IHS",
        title: "GCSEs",
        institution: "Icknield High School",
        dates: "2017 – 2022",
        grade: "Grade 9 Focus",
        tags: ["UKMT Silver"],
        bubbleContent: `
          <p><strong>Key Metrics:</strong> Grade 9 profiles across core frameworks including Mathematics and Physics.</p>
          <p>UKMT Silver Award — demonstrating structured logical thinking and advanced mathematical problem-solving proficiencies.</p>
          <p>Appointed Senior Prefect handling internal organization environments.</p>
          <ul> Subjects taken: 
            <li>Mathematics: 9</li>
            <li>English Language: 7</li>
            <li>English Literature: 7</li>
            <li>Biology: 8</li>
            <li>Chemistry: 9</li>
            <li>Physics: 9</li>
            <li>Geography: 9</li>
            <li>Computer Science: 8</li>
            <li>Ethics & Philosophy: 8</li>
            <li>Design & Technology: 9</li>
            <li>Graphics & Design: 7</li>
      
        `
      }
    ],
    industry: [
      {
        id: "edu-extend-intern",
        monogram: "ER",
        title: "Development Teleoperating Intern",
        institution: "Extend Robotics",
        dates: "Jul 2026 – Sep 2026",
        grade: "Active Track",
        tags: ["On-Site", "Reading", "Teleoperation"],
        images: ["Images/Apple_Picking.mp4","Images/VRview.jpeg" ,"Images/Gilbert.mp4"], //insert images of gilbert and maybe me n yash
        bubbleContent: `
          <p>The aim of this internship was to showcase the importance and use of robots as a service. This involved teleoperating the robot from a remote location to carry out the desired task of picking defective apples on a conveyer line.</p>
          <p>I have carried out over 500 grasps as a teleoperator to showcase the use of teleoperated robots in the field. Additionally, I have been able to highlight constraints and singularities in the setup which has lead to changes and improvements to increase efficiency and also increase operator reliability.</p>
          <p>An achievement from this that I am very proud of was achiving 178 successful grasps out of 183 attempts while demonstrating to the Google DeepMind team. This comes out to a failure rate of only 2.7% </p>
          <p> For further development, we started working on collection with both arms at the same time as well as gathering metrics to develop an autonomous system</p>
        `
      },
      {
        id: "edu-extend-IXN",
        monogram: "ER",
        title: "IXN Robotics Engineering Project",
        institution: "Extend Robotics",
        dates: "Feb 2026 – Jun 2026",
        grade: "Active Track",
        tags: ["On-Site", "Reading", "VLA Models"],
        images: ["Images/ERdatagetheringclip.mp4","Images/ERdatavalidation.mp4","Images/ERvla.mp4","Images/ERdataGathering.jpeg"],
        bubbleContent: `
        <p>The scope of this project involved training a VLA model to be able to carry out pick and place tasks autonomously. This was done by tele-operating a xArm7 by using Extend Robotics own software called AMAS. This enabled us to control a digital "twin" of the robot arm and move it around.</p>
        <p>We gathered over 200 samples in total which all had to be trimmed to ensure that the start and end targets matched between all the clips. We also had to make sure that all clips were valid by using the LeRobot visualiser by Hugging face. Once all clips were checked for validity and any invalid clips were removed, we could move onto training the model.</p>
        <ul>To train the arm, we made use of three existing models
          <li>ACT (80 million parameters)</li>
          <li>SmolVL (450 million parameters)</li>
          <li>GR00T (3 billion parameters)</li>
        </ul>
          <p>Find all the code in our <a href="https://github.com/yash-joshi5379/IXN-Project-Team-Extensify" target="_blank" style="color: var(--primary-accent); text-decoration: underline; font-weight: 500;">repository.</a></p>
          <p><strong>Individual Write-up:</strong> You can <a href="Reports/COMP0218_Individual_Report.pdf" target="_blank" style="color: var(--primary-accent); text-decoration: underline; font-weight: 500;">read my individual report here</a>.</p>
          <p><strong>Technical Write-up:</strong> You can <a href="Reports/COMP0218_Final_Report.pdf" target="_blank" style="color: var(--primary-accent); text-decoration: underline; font-weight: 500;">read our group report here</a>.</p>
        `
      },
      {
        id: "edu-clarity",
        monogram: "CL",
        title: "Research Intern",
        institution: "Clarity (Previously Anecdote)",
        dates: "Aug 2025 – Sep 2025",
        grade: "Research Publication",
        tags: ["AI Trust", "Research"],
        images: ["Images/latencyfaithfulness.png","Images/Nah_with.jpeg","Images/Nah_without.jpeg","Images/Clarity.jpeg"],
        bubbleContent: `
        <p>Artificial intelligence is becoming a cornerstone of modern customer experience, pow-
            ering everything from automated service agents to enterprise copilots. While accuracy
            and personalization dominate discussions of AI quality, an equally critical factor is
            latency—the time between a user’s input and the system’s response.</p>
            <p>Response speed shapes
            how users perceive AI agents: quick replies can support seamless interaction and produc-
            tivity, but if perceived as too fast, they may appear shallow or unconsidered. Conversely,
            slight delays may foster perceptions of deliberation, yet excessive latency risks frustration
            and damage trust.</p>
            <p>This report examines how response time influences user trust in AI
            agents, drawing on insights from cognitive psychology, human-computer interaction, and
            technical performance. It explores the sources of latency within inference processes and
            the innovations addressing them, such as Groq’s low-latency processing architecture. Case
            studies with Vectorize and Athena Intelligence show how real-time inference is transform-
            ing both customer-facing experiences and enterprise analytics.</p>
            <p>Ultimately, the findings
            suggest that latency is not merely a technical performance metric, but a strategic dimension of AI adoption—central to building trust, improving engagement, and establishing
            competitive advantage.</p>
            <p>I was lucky to be 1 of 3 students selected to pick out a topic and write about it as part of Anecdote's rebranding to become Clarity</p>
        `
      },
      {
        id: "edu-inetec",
        monogram: "IN",
        title: "Robotics Intern",
        institution: "INETEC",
        dates: "Jun 2025 – Aug 2025",
        grade: "Nuclear Automation",
        tags: ["CAD", "Hardware Design","International","Nuclear"],
        images: ["Images/INETEC_ceo.jpg","Images/INETEC_forerunner2.jpg","Images/INETEC_room.jpeg","Images/INETEC_map.jpeg"],
        bubbleContent: `
          <p>INETEC is a company that is at the forefront of developing leading-edge technologies and services for the nuclear industry.</p>
          <p>I was lucky to be 1 of 7 students to be selected as part of INETEC's first cohort of international interns and what an experience it was.</p>
          <p>As a robotics intern, I was tasked with developing a new attachment tool for the existing Forerunner system. This robot specialises in going inside reactor vessels and checking each individual steam pipe. By using eddy current technology, it can check for any cracks or deformations within the pipes. If one of these are found, the pipes can be sealed shut using a plug.</p>
          <p>However, the problem arises when maintanence teams want to remove the plug. Due to the radioactive nature of the vessel, humans are unable to enter themselves to remove the plug. Therefore, it must be done autonomously.</p>
          <p>Through repeated iterations over the course of 6 weeks, I developed a drill tool that would allow the plugs to be removed as safely as possible without damanging the pipes.</p>
          <p>I also strengthened my CAD skills as well as my problem-solving and collaborative skills. This was from being able to work with the entire INETEC team and being able to ask questions which they happily answered. By seeing all of the rules and regulations that are followed by the team, I was able to get valuable insight into the high safety and precision standards within the nuclear technology sector.</p>
        `
      }
    ]
  },
  projects: {
    university: [
      {
        id: "proj-boxonwils",
        name: "Boxonwils",
        category: "UCL Project",
        grade: "3rd Place",
        description: "4-wheeled differential drive robot navigating obstacle courses.",
        tags: ["Arduino", "Python", "Wireless", "Robotics"],
        images: ["Images/BOXONWILS_final_prototype.jpeg", "Images/LineFollowing.jpg", "Images/250605_J-TYE_UCL_358_Robot-Challenge-2025-Escape-ade_5524.jpg", "Images/250605_J-TYE_UCL_358_Robot-Challenge-2025-Escape-ade_5913.jpg"],
        detailedDescription: `
          <p>Boxonwils was a wheeled robot developed by a 4 man team designed to tackle the "Great Escape", an obstacle course developed as part of UCL Robotics & AI term 3 challenge. The robot was designed to be a multi-terrain autonomous robot capable of wall and line following, stair climbing, rough surface navigation as well as aerial cable descent.</p>
          <p>My role involved setting up the code and electronics to control the motors through the motor shield, starting on the wall following code, as well as designing and fabricating the claws used for the aerial tasks</p>
          <p>To do this, we integrated ultrasonic and reflectance sensors for autonomous perception and closed loop control; all programmed in C and Python.</p>
          <p>We developed our final prototype through full mechanical design and assembly using laser-cut and 3D printed parts. This was followed with iterative tuning and field testing under terrain variation.</p>
          <p>Overall our team placed 3rd in this competition!</p>
          <ul>Components Used:
            <li>DG01D-E motor with encoder</li>
            <li>FS90R Micro Servo</li>
            <li>Photoresistor</li>
            <li>HC-SR04 Sonar sensor</li>
            <li>Arduino Giga R1 Wifi</li>
            <li>Pololu Motoron M3S550 Motor Shield</li>
            <li>Reflectance sensors</li>
          </ul>
          <p>To look at all the code used for the challenge, check out the <a href="https://github.com/EdwinIsCoding/Boxonwils" target="_blank" style="color: var(--primary-accent); text-decoration: underline; font-weight: 500;">Boxonwils GitHub Repository</a></p>
          <p>To see images of previous prototypes, check out my Boxonwils project on <a href="https://linkedin.com/in/aayanislam" target="_blank" style="color: var(--secondary-accent); font-weight: 500;">LinkedIn</a>.</p>
        `
      },
      {
        id: "proj-bh",
        name: "Black Hole Simulation",
        category: "UCL Year 2, Term 1",
        grade: "95%",
        description: "2D simulation of a black hole, modelling gravitational physics.",
        tags: ["MATLAB", "Physics Sim", "Geodesics", "Schwarzschild metrics", "Randomness"],
        cover: "Images/light_rays.mp4",
        images: ["Images/light_rays.mp4","Images/interstellar_black_hole.jpg","Images/multionepoint2.png"], 
        detailedDescription: `
          <p>The purpose of this project is to examine how light travels around a Black Hole in a 2D world. More specifically to examine what happens to the path light takes when it closes in on the black hole and what makes light more likely to fall in or escape the black hole.</p>
          <p>To be able to do this, we had to look into the theoretical background regarding blackholes. This involved moving away from Newtonian physics and looking more at general relativity which states that light bends to follow the curvature of spacetime. To understand this mathematically, we had to use the Schwarzschild metric.</p>
          <p>This also involved learning about Geodesics and the Christoffel symbols as well as some bizarre assumption such as G = C = 1.</p>
          <p>Solving this involved looking at second order differential equations as well as accounting for stochasticity and randomness.</p>
          <p>By using MATLAB, we were able to develop a simulation that could show the path light would take around a black hole. Due to randomness, no two runs would ever be the same.</p>
          <p><strong>Open Source Code:</strong> You can <a href="https://github.com/ItzSmudge/Black-Hole-Light-Path-Simulation" target="_blank" style="color: var(--primary-accent); text-decoration: underline; font-weight: 500;">find the repository here</a>.</p>
          <p><strong>Project Demonstrations:</strong> You can <a href="https://www.youtube.com/playlist?list=PL96Bkt5ghAL7oGhMzffS_p9buiXcNjmar" target="_blank" style="color: var(--secondary-accent); text-decoration: underline; font-weight: 500;">find our videos here</a>.</p>
          <p><strong>Technical Write-up:</strong> You can <a href="Reports/Yr2_Term1_ModSim.pdf" target="_blank" style="color: var(--primary-accent); text-decoration: underline; font-weight: 500;">read the full project report here</a>.</p>
        `
      },
      {
        id: "proj-gripper",
        name: "ML Gripper Controller",
        category: "UCL Year 2, Term 1",
        grade: "79%",
        description: "Machine learning algorithm applied to robotic gripper control within a Pybullet environment.",
        tags: ["Python", "Machine Learning", "Robotics", "Pybullet"],
        images: ["Images/OOPvid.mp4","Images/ThreeFingerBox.jpg","Images/Example_result.png"],
        detailedDescription: `
          <p>This project involved using two different grippers to attempt to grasp a variety of objects from random initial positions and orientations. This was done using pybullet which was used to simulate the environment.</p>
          <p>We collected over 1000 grasps which were a collection of failures and successes. Using this data, we then created a variety of classifiers to predict the outcome of future grasps.</p>
          <ul>The models used were as follows: 
            <li>Logistic regression</li>
            <li>SVM (Support Vector Machine)</li>
            <li>Random forest</li>
            <li>Gradient boosting</li>
            <li>Neural networks</li>
          </ul>
          <p> As we had two gripper and 2 objects, we created a dataset for each possible outcome leading us to achieving an accuracy of 92%.</p>
          <p><strong>Open Source Code:</strong> You can <a href="https://github.com/ItzSmudge/Grasp-Classification-Pipeline" target="_blank" style="color: var(--primary-accent); text-decoration: underline; font-weight: 500;">find the repository here</a>.</p>

        `
      },
      {
        id: "proj-forecast",
        name: "Forecasting Project",
        category: "UCL Year 2, Term 1",
        grade: "86%",
        description: "Time-series and predictive forecasting task.",
        tags: ["Python", "Data Analysis", "Forecasting", "Numpy", "Pandas","Neural Networks"],
        images: ["Images/TimeSeries.png","Images/PCAvsTSNE_FINAL.png","Images/boxplots.png"],
        detailedDescription: `
        <p>This project was split up into two parts. The first section involved being given the fuel prices of multiple station in Austrailia between August 2016 and August 2025. To effectively work with the data, it had to be cleaned and organised. This involved removing duplicates and any outliers as well as grouping all similar entires. This data was then split into training, validation and testing data. The training data was used to train a magnitude of models including
        <ul>
          <li>Linear regression</li>
          <li>Random forest</li>
          <li>Gradient boosting</li>
          <li>Support Vector Machines (SVMs)</li>
        </ul>
        
        <p>For the second part of this project, I was tasked with predicting the local position of a robot based off WIFI signals from multiple beacons. This involved using a neural network where multiple models were trialed. This involved altering the number of layers as well as switching between Adaptive Moment estimation (ADAM) and Stochastic Gradient Descent (SGD). Dimensionality reduction was also carried out to allow the data to be easily seen by human eyes. This was done t-SNE and PCA with t-SNE being able to capture more information as it is able to work with non-linear data.</p>
        <p><strong>Open Source Code:</strong> You can <a href="https://github.com/iaayan3913/COMP214_Machine_Learning_Coursework" target="_blank" style="color: var(--primary-accent); text-decoration: underline; font-weight: 500;">find the repository here</a>.</p>

        `
      },
      {
        id: "proj-Bart",
        name: "Inverted Pendulum Cart (Bart)",
        category: "UCL Year 2, Term 2",
        grade: "60%",
        description: "Balancing an inverted pendulum using PID and LQR",
        tags: ["Python", "Simulation", "Arduino", "Control theory"],
        cover: "Images/BartIII.jpeg",
        images: ["Images/simulationvisualisation.jpeg","Images/BartII.jpeg","Images/BartIII.jpeg","Images/simulationplots.jpeg","Images/EngineeringImage.jpeg"],
        detailedDescription: `
        <p>This project involved implementing control algorithms into a real time system: The inverted pendulum. The inverted pendulum is a typical unstable, non-linear system that requires a counteractive force to keep it upright. To do this we developed <strong>Bart</strong>. A wheeled robot tasked to keep the pendulum upright.</p>
        <ul>The components used are as follows:
          <li>Metal Gearmotors (25Dx63L mm)</li>
          <li>Arduino Giga R1 WIFI </li>
          <li>Broadcom AS22 Optical Encoder</li>
          <li>Motoron M3S550 Dual Motor Drivers</li>
        </ul>
        <p>Our first control algorithm was a PID controller. This made use of the error, the rate at which the error changed as well as the cumulative error. By combining and scaling these three values, we can obtain a very simple controller to minimise error and stabilise the pendulum.<p>
        <p>Our second control algorithm was an LQR controller. This requires us to create a state space model of the cart which we can then discretise to allow it to be compatible with the discrete time system used by micro-processors. This controller allows us to minimise error of multiple states as well as state derivatives providing us with more possibilities to stabilise the pendulum.</p>
        <p>Bart went through three major iterations of development. The first was a basic wooden board with holes in it to allow us to test tolerances and check how all the components would sit on the board. For the second prototype, we moved onto acryilic as well as adding all the components required. From here, we started to remove unecessary weight and material as well as making slight adjustments to our board. This lead us to our third and final prototype which was used in our demonstrations.</p>
        <p>Whilst our cart did not perform as we had hoped, it gave us a clear insight into how real-time processing is critical in unstable systems and the stages of planning and development required to approach these sort of problems.</p>
        <p><strong>Open Source Code:</strong> You can <a href="https://github.com/ItzSmudge/Inverted-Pendulum-Control-System" target="_blank" style="color: var(--primary-accent); text-decoration: underline; font-weight: 500;">find the repository here</a>.</p>
        `
      }
    ],
    personal: [
      {
        id: "proj-homeshield",
        name: "HomeShield",
        category: "NVIDIA Hack for Impact",
        grade: "2nd place",
        description: "AI repair triage and operative routing for social housing, running entirely on an NVIDIA DGX Spark.",
        tags: ["NVIDIA DGX Spark", "cuOpt", "Nemotron", "FastAPI", "React", "TypeScript"],
        images: ["Images/HomeShield_use.mp4", "Images/HomeShield_DigitalTwin.jpeg", "Images/HomeShield_2ndplace.jpeg"],
        detailedDescription: `
          <p><strong>Turning a tenant's repair report into an approved, scheduled repair visit.</strong></p>
          <p>HomeShield was built by a team of 5 at the NVIDIA Hack for Impact, where we placed <strong>2nd</strong>. It is motivated by Awaab's Law, which requires social landlords in England to investigate and fix dangerous damp, mould and other emergency hazards within fixed time limits. Meeting those limits depends on spotting the dangerous reports quickly and getting the right person to the home fast.</p>
          <p>A resident reports a problem from their phone. AI running on an NVIDIA DGX Spark reads the photo, voice note and message and suggests the hazard and urgency. A housing officer then reviews the case on a live 3D digital twin of Sheffield, and NVIDIA cuOpt plans which operative goes where. Nothing reaches an operative until a person approves it, and the AI and tenant data never leave the Spark.</p>
          <p>My role covered cuOpt, scheduling and map data: the route optimisation, emergency re-planning and the Sheffield map data behind the digital twin. The scheduler re-plans 8 operatives and 37 jobs around a gas emergency in about 1.1 seconds, moving only one existing visit.</p>
          <ul>Key Features & Tech Stack:
            <li><strong>Multimodal Intake:</strong> Nemotron 3 Nano Omni reads a tenant's photo, voice note and message together and suggests the hazard, room and urgency</li>
            <li><strong>Agent Orchestration:</strong> Nemotron 3.5 Lightning chooses backend tools in a safe order (deadlines, then scheduling, then a request for human approval) with an audit trail</li>
            <li><strong>Route Optimisation:</strong> NVIDIA cuOpt on the Spark GPU, with OR-Tools as an automatic fallback</li>
            <li><strong>Three Apps:</strong> A resident reporting app, an operations digital twin and an operative app, built with React and TypeScript on a FastAPI backend with live updates</li>
          </ul>
          <p><strong>Open Source Code:</strong> You can <a href="https://github.com/iaayan3913/Nvidia-HomeShield" target="_blank" style="color: var(--primary-accent); text-decoration: underline; font-weight: 500;">find the repository here</a>.</p>
        `
      },
      {
        id: "proj-hearme",
        name: "HearMe",
        category: "Great Uni Hack 2026",
        grade: "Local AI",
        description: "Turns a family visit into a draft care plan in minutes, without the child's data ever leaving the building.",
        tags: ["Tether QVAC", "Local LLM", "Holepunch P2P", "YubiKey / WebAuthn", "Express", "JavaScript"],
        images: ["Images/HearMe_Usage.mp4", "Images/HearMe2.jpg", "Images/HearMe1.jpg", "Images/FOBE_facts.jpeg"],
        detailedDescription: `
          <p><strong>Turn a family visit into a draft care plan in minutes, without the child's data ever leaving the building.</strong></p>
          <p>HearMe was built in one day by a team of 3 at the Great Uni Hack 2026 (Tether track), for the charity I work at. Friends of Bright Eyes supports 100+ disabled children in Luton. Today a family worker meets parents for up to 4 hours, takes handwritten notes, then spends about 2 hours writing each care plan by hand. That is 200+ hours a year spent writing instead of listening to the family.</p>
          <p>HearMe records the visit (with consent), transcribes and translates it on the office PC, and drafts the care plan in FOBE's own format using a local LLM. It never guesses: every value must be backed by a quote from the recording or notes, and anything not clearly said is flagged as missing. The worker checks the draft, signs it off with a YubiKey tap and prints it for the secure folder.</p>
          <p>My role was the web app, the YubiKey sign-off and the integration between the AI, the database and the interface.</p>
          <ul>Key Features & Tech Stack:
            <li><strong>Local AI:</strong> Tether QVAC SDK for transcription, translation, handwritten-note OCR and care plan drafting, working with Wi-Fi off</li>
            <li><strong>Languages:</strong> English, Urdu, Hindi and Bengali, with partial support for Sylheti through Bengali</li>
            <li><strong>Peer-to-Peer Sync:</strong> Holepunch sends recordings and photos straight from the work phone to the office PC, with no email or cloud</li>
            <li><strong>Sign-off:</strong> WebAuthn with a YubiKey, recording who signed each plan and when</li>
            <li><strong>Web App:</strong> Express and vanilla JavaScript, with every library bundled locally and every version of a plan kept</li>
          </ul>
          <p><strong>Open Source Code:</strong> You can <a href="https://github.com/iaayan3913/AIM_GUH26" target="_blank" style="color: var(--primary-accent); text-decoration: underline; font-weight: 500;">find the repository here</a>.</p>
        `
      },
      {
        id: "proj-papercut",
        name: "PaperCut",
        category: "Hackathon Build",
        grade: "AI Web App",
        description: "Collaborative AI research platform turning literature reviews into an interactive swipe deck.",
        tags: ["Next.js", "Supabase", "Claude Sonnet", "OpenAlex API", "TypeScript"],
        images: ["Images/PaperCut1.png", "Images/PaperCut2.png", "Images/PaperCut3.png","Images/PaperCut4.mp4"], // Add your screenshots here, e.g. ["Images/papercut1.png"]
        detailedDescription: `
          <p><strong>Eliminate the stress of literature reviews.</strong></p>
          <p>PaperCut is an AI-powered collaborative research platform that transforms academic paper discovery into a real-time, gesture-driven swipe deck. Built with Next.js and Supabase, the platform ingests a project brief and automatically queries OpenAlex and Semantic Scholar to curate relevant literature.</p>
          <p>We integrated Anthropic's Claude Sonnet to critically evaluate each paper against the user's specific project brief, generating automated stance chips, source credibility badges, and cross-paper relationship maps.</p>
          <ul>Key Features & Tech Stack:
            <li><strong>Frontend & Backend:</strong> Next.js (App Router), TypeScript, Tailwind CSS, and Supabase (Realtime presence & group reading lists)</li>
            <li><strong>AI Engine:</strong> Claude Sonnet for brief context extraction, paper relevance evaluation, and literature review outlining</li>
            <li><strong>Academic Search:</strong> Merged citation and metadata pipelines from OpenAlex and Semantic Scholar APIs</li>
            <li><strong>Export Pipeline:</strong> Instant one-click export of curated libraries to BibTeX, LaTeX, Markdown, or CSV</li>
            <li> Implemented accessibility features to ensure usability to a wider audience
          </ul>
          <p><strong>Open Source Code:</strong> You can <a href="https://github.com/ItzSmudge/claude-hacky" target="_blank" style="color: var(--primary-accent); text-decoration: underline; font-weight: 500;">find the repository here</a>.</p>
        `
      },
      {
        id: "proj-AceIt",
        name: "AceIt! Interview Agent",
        category: "Google Hackathon",
        grade: "3rd place",
        description: "Real-time AI technical interview prep agent evaluating live code and speech.",
        tags: ["Gemini Flash", "Gemini Omni", "Real-Time AI", "Python"],
        images: ["Images/AceIt.png" , "Images/ThirdPlace.jpeg"],
        detailedDescription: `
          <p>Developed at the Google Hackathon in London, where I was selected among the top 50 participants from an applicant pool of over 900+ candidates (5.5% acceptance rate).</p>
          <p>We built <strong>AceIt!</strong>, an interactive AI technical interview preparation agent that simulates high-pressure software and engineering interviews in real time.</p>
          <ul>Key Highlights:
            <li><strong>Multimodal Evaluation:</strong> Leverages Google's Gemini Flash and Gemini Omni models to simultaneously analyse live code execution and spoken technical explanations in real time.</li>
            <li><strong>Instant Feedback Loop:</strong> Provides low-latency conversational hints, complexity analysis, and communication scoring to help candidates refine both their algorithmic thinking and vocal delivery.</li>
            <li><strong>Competition Result:</strong> Placed <strong>3rd overall</strong> out of 10 finalist teams judged by Google engineers.</li>
          </ul>
        `
      },
      {
        id: "proj-FPV",
        name: "FPV Wireless Robot",
        category: "Personal Build",
        grade: "Robotics",
        description: "A wireless control robot that allows you to see through its eyes",
        tags: ["Robotics", "Arduino","Wireless control"],
        images: ["Images/FPV_car.jpeg","Images/FPV_drive.mp4","Images/FPVcar2.mp4"],
        detailedDescription: `
        <p>Designed, modeled, and constructed a fully wireless, low-latency First-Person View (FPV) mobile robot. The system integrates a dual-motor drivetrain with real-time network streaming and decentralized control architectures. By shifting computational heavy-lifting to a host machine, the vehicle functions as an agile edge device ready for future advancements.</p>
        <ul>
            <li><strong>Dual-Core Control Stack:</strong> Features an <em>Arduino Nano ESP32</em> running embedded C++ to manage local pin routing, handling multi-channel PWM speed commands and direction state matrices seamlessly.</li>
            <li><strong>Low-Latency Network Engine:</strong> Utilizes high-speed, asynchronous <strong>UDP Socket Communication</strong> on port 9999 to stream continuous control vectors from a laptop interface, reducing execution lag.</li>
            <li><strong>Integrated FPV Cockpit:</strong> Developed a unified Python cockpit leveraging <em>Pygame</em> and <em>OpenCV</em> to simultaneously decode a live network video feed from an onboard smartphone device while tracking continuous keyboard inputs.</li>
            <li><strong>High-Efficiency Power Stage:</strong> Made use of a <em>TB6612FNG</em> H-Bridge driver powered by a stable 9.6V battery configuration, maximizing motor torque curves while preserving logic safety thresholds.</li>
        </ul>
        <p><strong>Open Source Code:</strong> You can <a href="https://github.com/iaayan3913/FPV-robot/tree/main" target="_blank" style="color: var(--primary-accent); text-decoration: underline; font-weight: 500;">find the repository here</a>.</p>

        `
      },
      {
        id: "proj-selfbalance",
        name: "Self Balancing Robot",
        category: "Personal Build",
        grade: "Robotics",
        description: "Self balancing robot using Arduino",
        tags: ["Robotics", "Real time processing", "Arduino","Control"],
        cover: "Images/PID.mp4",
        images: ["Images/OnlyP.mp4","Images/PID.mp4","Images/Disturbance.mp4"],
        detailedDescription: `
        <p>A two-wheeled inverted pendulum robot controlled by an Arduino Nano ESP32. This project demonstrates the implementation of a PID control loop, sensor fusion using a complementary filter, and real-time hardware actuation to maintain balance.</p>
        <p>Initially, the design of the robot was made in Fusion. With this, I could find where I would want to put components as well as place motors. This would also let me measure different parts of the robot to make it a reasonable size.</p>
        <p>Since I did not have access to a 3D printer, I created the model using household materials such as cardboard and straws. This proved to be helpful as it made the robot much more lightweight allowing the inexpensive hobby motors to work more effectively</p>
        <ul>The control algorithm used was a PID controller. The values used were: 
          <li>Kp = 6</li>
          <li>Ki = 0.000001</li>
          <li>Kd = 0.3</li>
        <p><strong>Open Source Code:</strong> You can <a href="https://github.com/iaayan3913/Self-Balancing-Robot" target="_blank" style="color: var(--primary-accent); text-decoration: underline; font-weight: 500;">find the repository here</a>.</p>

        `
      },
      {
        id:"proj_Hex",
        name: "Hexapod Robot",
        category: "Personal Build",
        grade: "Robotics",
        description: "4 legged spider robot",
        tags: ["Arduino", "Servo control"],
        images: ["Images/vid7.gif"],
        detailedDescription: `
        <p>This project was my first personal hardware build. The actual design of the robot was found online and I obtained 8 servos for this task.</p>
        <p>However, a problem I came to realise was that the arduino alone would not be able to produce enough current to power all 8 servos. Therefore, I bougbt myself a PWM servo motor driver. This allowed me to add external power to control the servos.</p>
        <p>I made use of premade codes that allowed the spider robot to stand up, sit down as well as wave. These individual controls taught me how to work with the pwm drivers as well as correctly mapping pwm signals to the servo angle.<p>
        <p>There were issues however, tolerances were incorrect making joints disconect as the robot moved around. This was made more apparant when trying to get the robot to walk on its own.</p>
        <p>Overall this first project gave me a satisfactory introduction into personal builds and hobby robotics</p>
        `
      },
      {
        id: "proj-swipe",
        name: "ScholarSwipe",
        category: "Personal Build",
        grade: "Web App",
        description: "A web app letting users swipe to discover and curate research papers.",
        tags: ["HTML/CSS/JS", "Perplexity API", "UX Design","24h Hackathon"],
        images: ["Images/WhatsApp Image 2025-10-20 at 10.32.25 PM.jpeg","Images/WhatsApp Image 2025-10-20 at 10.33.27 PM.jpeg", "Images/WhatsApp Image 2025-10-20 at 8.04.05 PM.jpeg"],
        detailedDescription: `
          <p><strong>Match with your next citation.</strong></p>
          <p>This project was developed at Perplexity's first ever  24 hour hackathon in London. The focus of this app is to aid students and researchers quickly find, swipe and save AI summarised academic papers from trusted sources. They are also able to export chosen papers for easy literature reviews and bibliographies to add to academic papers.</p>
          <p>The frontend consists of a standard HTML, CSS and Javascript format with the backend using fastAPI to allow for communication between the website itself and the backend script which allows access to the API.</p>
          <p>ScholarSwipe is designed to streamline the process of discovering relevant academic research. Instead of sifting through countless search results, users can input a research question and swipe through summarized papers, making the literature review process more efficient and engaging.</p>
          <ul> Tech stack: 
            <li><strong>Backend: </strong>Python 3.12, FastAPI, Uvicorn</li>
            <li><strong>API: </strong>Perplexity Sonar API</li>
            <li><strong>Frontend: </strong>JavaScript</li>
            <li><strong>Others: </strong>CSV exportt</li>
          </ul>
          <p><strong>Open Source Code:</strong> You can <a href="https://github.com/majorsaif/ScholarSwipe" target="_blank" style="color: var(--primary-accent); text-decoration: underline; font-weight: 500;">find the repository here</a>.</p>
          <p><strong>Project Demonstrations:</strong> You can <a href="https://www.youtube.com/watch?v=Zqk7BLMhx9I" target="_blank" style="color: var(--secondary-accent); text-decoration: underline; font-weight: 500;">find our video here</a>.</p>
        `
      },
      {
        id: "proj-stonks",
        name: "Pokéstonks Tracker",
        category: "Personal Build",
        grade: "Web App",
        description: "Dynamic web app tracking card prices with ARIMA forecasting.",
        tags: ["HTML/CSS/JS", "Python", "ARIMA", "REST API"],
        images: ["Images/PokestonksHomePage.jpeg","Images/resultspage.jpeg","Images/forecastpage.jpeg"],
        detailedDescription: `
          <p>PokéTracker is an AI-powered Pokémon TCG market analyst and card viewer. It allows users to search for Pokémon cards, view real-time pricing data, forecast future market trends using machine learning, and chat with an integrated AI assistant for investment recommendations.</p>
          <p>Search by Pokemon name of specific card ID using the free, open-source TCGdex API. From there, price ranges are extracted to showcase the typical selling prices of that card.</p>
          <p>The main feature of this site is that it uses ARIMA (AutoRegressive Integrated Moving Average) forecasting to predict future card prices based off historical CSV data. With this, users can see how the card is performing as well as predicted prices of the card.</p>
          <p>Choose between Anthropic's Claude or Google's Gemini to get instant, context-aware advice. The AI can analyse price trends, recommend cards as well as chat you about general Pokemon TCG knowledge.<p>
          <p><strong>Open Source Code:</strong> You can <a href="https://github.com/iaayan3913/Pokestonks-Revamped" target="_blank" style="color: var(--primary-accent); text-decoration: underline; font-weight: 500;">find the repository here</a>.</p>
        `
      },
      {
        id: "proj-tank",
        name: "Tank Assault",
        category: "A-level project Build",
        grade: "70/70",
        description: "Level-based endless tank shooter built with Unity.",
        tags: ["Unity", "C#", "Game Design"],
        images: ["Images/TA_mainpage.jpeg","Images/TA_characterselect.jpeg","Images/TA_game.jpeg"],
        detailedDescription: `
        <p>Developed a level-based endless shooter game in Unity using C# for my coursework, featuring four distinct tank classes, each with unique abilities and health regeneration mechanics.</p>
        <p>Designed a variety of enemy types and a boss battle with increasing difficulty, enhancing gameplay progression and user engagement.</p>
        <p>Gained hands-on experience with C# (including classes and object-oriented programming), game development, and basic animations — earning a full 70/70 grade for the project.</p>
        `
      }
    ]
  }
};

// ==========================================================================
// AUTOMATED DURATION MATHEMATICS ENGINE
// ==========================================================================
function parseDateString(dateStr) {
  if (!dateStr || dateStr.trim().toLowerCase() === 'present') {
    return new Date();
  }
  const months = {
    jan:0, feb:1, mar:2, apr:3, may:4, jun:5, 
    jul:6, aug:7, sep:8, oct:9, nov:10, dec:11
  };
  const parts = dateStr.trim().split(/\s+/);
  if (parts.length === 2) {
    const m = months[parts[0].toLowerCase().substring(0, 3)];
    const y = parseInt(parts[1], 10);
    return new Date(y, m, 1);
  }
  return new Date();
}

function calculateDurationText(startStr, endStr) {
  const startDate = parseDateString(startStr);
  const endDate = parseDateString(endStr);
  let totalMonths = (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth()) + 1;
  if (totalMonths <= 0) totalMonths = 1;

  const years = Math.floor(totalMonths / 12);
  const remainingMonths = totalMonths % 12;

  let durationText = "";
  if (years > 0) durationText += `${years} yr${years > 1 ? 's' : ''}`;
  if (remainingMonths > 0) {
    if (durationText.length > 0) durationText += " ";
    durationText += `${remainingMonths} mo${remainingMonths > 1 ? 's' : ''}`;
  }
  return `${startStr} – ${endStr} · ${durationText}`;
}

// ==========================================================================
// RENDERING EXECUTION CONTROLLER (PAGE-AWARE SAFE INTERCEPTORS)
// ==========================================================================
// Projects surfaced on the home page (ids from DATA.projects)
const FEATURED_PROJECT_IDS = ["proj-homeshield", "proj-hearme", "proj-papercut"];

document.addEventListener("DOMContentLoaded", () => {
  // Target hooks check page existence prior to appending loops
  if (document.getElementById("experience-timeline")) renderExperience();
  if (document.getElementById("formal-edu-grid")) renderEducation();
  if (document.getElementById("university-panel")) renderProjects();
  if (document.getElementById("featured-grid")) renderFeatured();

  setupStickyNav();
  setupMobileMenu();
  if (document.getElementById("tab-university")) setupTabSwitchers();
  if (document.getElementById("bubble-modal")) {
    setupModalListeners();
    openModalFromHash();
  }
  if (document.getElementById("ticker-text")) startKeywordTicker();
  if (document.getElementById("pendulum-canvas")) setupPendulum();
  setupPageFadeIns();
  setupScrollReveal();
});

// --------------------------------------------------------------------------
// Media helpers
// --------------------------------------------------------------------------
function isVideo(src) {
  return src.toLowerCase().endsWith(".mp4");
}

// Every file in Images/ has a web-sized JPEG (or video poster frame) in Images/thumbs/
function thumbPath(src) {
  const file = src.split("/").pop();
  const base = file.substring(0, file.lastIndexOf("."));
  return encodeURI(`Images/thumbs/${base}.jpg`);
}

function pickCover(item) {
  if (item.cover) return item.cover;
  const images = item.images || [];
  return images.find(src => !isVideo(src)) || images[0] || null;
}

function getLogoMarkup(monogramString) {
  const imageHref = ASSET_LOGOS[monogramString];
  if (imageHref && imageHref.trim() !== "") {
    return `<img src="${imageHref}" alt="${monogramString} Logo" class="logo-image-render">`;
  }
  return `<div class="monogram-fallback">${monogramString}</div>`;
}

// --------------------------------------------------------------------------
// Experience
// --------------------------------------------------------------------------
function renderExperience() {
  const container = document.getElementById("experience-timeline");
  container.innerHTML = DATA.experience.map(item => `
    <div class="timeline-item reveal">
      <div class="timeline-dot main-company-dot"></div>
      <div class="experience-card structured-group-card">
        <div class="company-header-block">
          <div class="company-logo-frame">${getLogoMarkup(item.monogram)}</div>
          <div class="company-header-meta">
            <h3>${item.company}</h3>
            <div class="company-sub-row">${calculateDurationText(item.startDate, item.endDate)}</div>
            <div class="company-loc-row">${item.location}</div>
          </div>
        </div>
        <div class="roles-nest-container">
          ${item.roles.map(role => `
            <div class="role-nested-node">
              <div class="role-inner-dot"></div>
              <div class="role-nested-content">
                <div class="role-nested-title">${role.title}</div>
                <div class="role-nested-date">${calculateDurationText(role.startDate, role.endDate)}</div>
                <ul class="role-nested-bullets">
                  ${role.bullets.map(b => `<li>${b}</li>`).join('')}
                </ul>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

// --------------------------------------------------------------------------
// Education
// --------------------------------------------------------------------------
function educationCard(item, sub) {
  const cover = pickCover(item);
  return `
    <article class="interactive-card edu-card reveal" tabindex="0" role="button" data-modal-type="education" data-sub-type="${sub}" data-id="${item.id}">
      ${cover ? `<div class="card-cover edu-cover"><img src="${thumbPath(cover)}" alt="" loading="lazy"></div>` : ""}
      <div class="edu-card-content">
        <div class="monogram-avatar">${getLogoMarkup(item.monogram)}</div>
        <div class="edu-info">
          <h4>${item.title}</h4>
          <div class="edu-inst">${item.institution}</div>
          <div class="edu-meta-tags">
            <span class="tag">${item.dates}</span>
            <span class="tag badge-secondary">${item.grade}</span>
          </div>
        </div>
        <span class="card-arrow" aria-hidden="true">↗</span>
      </div>
    </article>`;
}

function renderEducation() {
  document.getElementById("formal-edu-grid").innerHTML =
    DATA.education.formal.map(item => educationCard(item, "formal")).join('');
  document.getElementById("industry-edu-grid").innerHTML =
    DATA.education.industry.map(item => educationCard(item, "industry")).join('');
}

// --------------------------------------------------------------------------
// Projects
// --------------------------------------------------------------------------
function projectCard(proj, sub, asLink) {
  const cover = pickCover(proj);
  const hasVideo = (proj.images || []).some(isVideo);
  const open = asLink
    ? `<a class="interactive-card project-card reveal" href="projectssplit.html#${proj.id}">`
    : `<article class="interactive-card project-card reveal" tabindex="0" role="button" data-modal-type="projects" data-sub-type="${sub}" data-id="${proj.id}">`;
  return `
    ${open}
      <div class="card-cover">
        ${cover ? `<img src="${thumbPath(cover)}" alt="" loading="lazy">` : ""}
        <span class="cover-badge">${proj.grade}</span>
        ${hasVideo ? `<span class="cover-play" aria-hidden="true">▶</span>` : ""}
      </div>
      <div class="proj-body">
        <div class="proj-top">
          <div class="proj-eyebrow">${proj.category}</div>
          <h4>${proj.name}</h4>
          <div class="proj-desc">${proj.description}</div>
        </div>
        <div class="proj-tags">
          ${proj.tags.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
      </div>
    ${asLink ? "</a>" : "</article>"}`;
}

function renderProjects() {
  document.getElementById("university-panel").innerHTML =
    DATA.projects.university.map(proj => projectCard(proj, "university", false)).join('');
  document.getElementById("personal-panel").innerHTML =
    DATA.projects.personal.map(proj => projectCard(proj, "personal", false)).join('');
}

function renderFeatured() {
  const all = [...DATA.projects.personal, ...DATA.projects.university];
  document.getElementById("featured-grid").innerHTML = FEATURED_PROJECT_IDS
    .map(id => all.find(p => p.id === id))
    .filter(Boolean)
    .map(proj => projectCard(proj, "", true))
    .join('');
}

function setupTabSwitchers() {
  document.getElementById("tab-university").addEventListener("click", () => switchPanel("university"));
  document.getElementById("tab-personal").addEventListener("click", () => switchPanel("personal"));
}

function switchPanel(type) {
  document.querySelectorAll(".tab-btn").forEach(btn => {
    const on = btn.id === `tab-${type}`;
    btn.classList.toggle("active", on);
    btn.setAttribute("aria-selected", on ? "true" : "false");
  });
  document.querySelectorAll(".project-panel").forEach(p => p.classList.remove("active"));
  document.getElementById(`${type}-panel`).classList.add("active");
}

// --------------------------------------------------------------------------
// Modal
// --------------------------------------------------------------------------
let lastFocusedCard = null;
let galleryState = { items: [], title: "" };

function setupModalListeners() {
  document.addEventListener("click", (e) => {
    const card = e.target.closest(".interactive-card[data-modal-type]");
    if (!card) return;
    lastFocusedCard = card;
    openModal(card.getAttribute("data-modal-type"), card.getAttribute("data-sub-type"), card.getAttribute("data-id"));
  });
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Enter" && e.key !== " ") return;
    const card = e.target.closest && e.target.closest(".interactive-card[data-modal-type]");
    if (!card || e.target !== card) return;
    e.preventDefault();
    card.click();
  });
  document.getElementById("modal-close-trigger").addEventListener("click", closeModal);
  document.getElementById("bubble-modal").addEventListener("click", (e) => {
    if (e.target.id === "bubble-modal") closeModal();
    const thumb = e.target.closest(".gallery-thumb");
    if (thumb) showGalleryItem(parseInt(thumb.getAttribute("data-index"), 10));
  });
  window.addEventListener("keydown", (e) => {
    const modal = document.getElementById("bubble-modal");
    if (!modal.classList.contains("active")) return;
    if (e.key === "Escape") closeModal();
    if (galleryState.items.length > 1 && e.target.tagName !== "VIDEO") {
      if (e.key === "ArrowRight") showGalleryItem((galleryState.index + 1) % galleryState.items.length);
      if (e.key === "ArrowLeft") showGalleryItem((galleryState.index - 1 + galleryState.items.length) % galleryState.items.length);
    }
  });
}

function openModalFromHash() {
  const id = decodeURIComponent(window.location.hash.replace("#", ""));
  if (!id) return;
  if (document.getElementById("university-panel")) {
    for (const sub of Object.keys(DATA.projects)) {
      if (DATA.projects[sub].some(x => x.id === id)) {
        switchPanel(sub);
        openModal("projects", sub, id);
        return;
      }
    }
  }
  if (document.getElementById("formal-edu-grid")) {
    for (const sub of Object.keys(DATA.education)) {
      if (DATA.education[sub].some(x => x.id === id)) {
        openModal("education", sub, id);
        return;
      }
    }
  }
}

function galleryMarkup(images) {
  if (!images || images.length === 0) {
    return `<div class="project-media-showcase"><div class="project-media-frame asset-placeholder-grid"><span>📷 [Media Placeholder Slot]</span></div></div>`;
  }
  return `
    <div class="project-media-showcase">
      <div class="project-media-frame" id="gallery-stage"></div>
      ${images.length > 1 ? `
        <div class="gallery-strip">
          ${images.map((src, i) => `
            <button type="button" class="gallery-thumb" data-index="${i}" aria-label="Show media ${i + 1} of ${images.length}">
              <img src="${thumbPath(src)}" alt="" loading="lazy">
              ${isVideo(src) ? `<span class="gallery-thumb-play" aria-hidden="true">▶</span>` : ""}
            </button>`).join('')}
        </div>` : ""}
    </div>`;
}

function showGalleryItem(index) {
  const stage = document.getElementById("gallery-stage");
  if (!stage) return;
  const src = galleryState.items[index];
  galleryState.index = index;
  const url = encodeURI(src);
  if (isVideo(src)) {
    stage.innerHTML = `<video src="${url}" poster="${thumbPath(src)}" autoplay loop muted playsinline controls class="project-video-render"></video>`;
  } else {
    // GIFs must load the original to animate; photos load the web-sized copy and link to the full file
    const display = src.toLowerCase().endsWith(".gif") ? url : thumbPath(src);
    stage.innerHTML = `<a href="${url}" target="_blank" rel="noopener" class="gallery-full-link"><img src="${display}" alt="${galleryState.title} — media ${index + 1}"></a>`;
  }
  document.querySelectorAll(".gallery-thumb").forEach((btn, i) => btn.classList.toggle("active", i === index));
}

function openModal(section, sub, id) {
  let targetObj = null;
  let bodyCopy = "";
  const wrapper = document.querySelector(".modal-wrapper");
  wrapper.classList.remove("project-modal-expanded");

  if (section === 'education') {
    targetObj = DATA.education[sub].find(x => x.id === id);
    if (!targetObj) return;
    document.getElementById("modal-title").innerText = targetObj.title;
    document.getElementById("modal-subtitle").innerText = `${targetObj.institution} (${targetObj.dates})`;
    bodyCopy = targetObj.bubbleContent;
  } else if (section === 'projects') {
    targetObj = DATA.projects[sub].find(x => x.id === id);
    if (!targetObj) return;
    document.getElementById("modal-title").innerText = targetObj.name;
    document.getElementById("modal-subtitle").innerText = `${targetObj.category} · Evaluation: ${targetObj.grade}`;
    bodyCopy = targetObj.detailedDescription;
  }
  if (!targetObj) return;

  const images = targetObj.images || [];
  const hasMediaColumn = section === 'projects' || images.length > 0;
  galleryState = { items: images, title: targetObj.name || targetObj.title, index: 0 };

  if (hasMediaColumn) {
    wrapper.classList.add("project-modal-expanded");
    document.getElementById("modal-body").innerHTML = `
      <div class="project-expanded-split-layout">
        <div class="project-right-media">${galleryMarkup(images)}</div>
        <div class="project-left-copy">${bodyCopy}</div>
      </div>`;
    if (images.length > 0) showGalleryItem(0);
  } else {
    document.getElementById("modal-body").innerHTML = bodyCopy;
  }

  document.getElementById("modal-tags").innerHTML = (targetObj.tags || []).map(t => `<span class="tag">${t}</span>`).join('');
  document.getElementById("bubble-modal").classList.add("active");
  wrapper.scrollTop = 0;
  document.body.style.overflow = "hidden";
  history.replaceState(null, "", `#${id}`);
  document.getElementById("modal-close-trigger").focus({ preventScroll: true });
}

function closeModal() {
  const modal = document.getElementById("bubble-modal");
  if (!modal || !modal.classList.contains("active")) return;
  modal.classList.remove("active");
  document.body.style.overflow = "";
  // Stop any playing video
  const stage = document.getElementById("gallery-stage");
  if (stage) stage.innerHTML = "";
  history.replaceState(null, "", window.location.pathname + window.location.search);
  if (lastFocusedCard) lastFocusedCard.focus({ preventScroll: true });
}

// --------------------------------------------------------------------------
// Navigation
// --------------------------------------------------------------------------
function setupStickyNav() {
  const navbar = document.getElementById("navbar");
  const update = () => navbar.classList.toggle("scrolled", window.scrollY > 30);
  window.addEventListener("scroll", update, { passive: true });
  update();
}

function setupMobileMenu() {
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("nav-menu");
  toggle.addEventListener("click", () => {
    const open = toggle.classList.toggle("active");
    menu.classList.toggle("active", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
}

// --------------------------------------------------------------------------
// Hero ticker + slideshow
// --------------------------------------------------------------------------
function startKeywordTicker() {
  const keywords = ["Robotics", "Artificial Intelligence", "University College London", "Ex INETEC intern", "Ex Clarity intern", "Ex Extend Robotics intern", "Friends of Bright Eyes", "Fundraising"];
  let index = 0;

  const displayTarget = document.getElementById("ticker-text");
  const slides = document.querySelectorAll(".hero-slide");
  const counter = document.getElementById("slide-counter");

  if (!displayTarget) return;

  const pad = n => String(n).padStart(2, "0");
  if (counter && slides.length > 0) counter.innerText = `${pad(1)} / ${pad(slides.length)}`;

  setInterval(() => {
    // 1. Advance the text data layer index node loop
    index = (index + 1) % keywords.length;

    // Fade out text ticker safely
    displayTarget.style.opacity = 0;

    setTimeout(() => {
      displayTarget.innerText = keywords[index];
      displayTarget.style.opacity = 1;
    }, 200);

    // 2. Synchronize your photo elements slide tracking loops
    if (slides.length > 0) {
      // De-activate the current slide item layer
      slides.forEach(slide => slide.classList.remove("active"));

      // Select the target index slide (safely handling array roll-overs if you have fewer images than text loops)
      const slideIndex = index % slides.length;
      slides[slideIndex].classList.add("active");
      if (counter) counter.innerText = `${pad(slideIndex + 1)} / ${pad(slides.length)}`;
    }

  }, 3000); // Transitions perfectly every 3 seconds!
}

// --------------------------------------------------------------------------
// Page + scroll animations
// --------------------------------------------------------------------------
function setupPageFadeIns() {
  // Page load fade handler for standalone sub-pages
  const targetPage = document.querySelector(".revealpage");
  if(targetPage) {
    setTimeout(() => { targetPage.classList.add("visible"); }, 50);
  }
}

function setupScrollReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach(el => el.classList.add("in"));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    let shown = 0;
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.style.animationDelay = `${Math.min(shown, 6) * 70}ms`;
      entry.target.classList.add("in");
      observer.unobserve(entry.target);
      shown++;
    });
  }, { rootMargin: "0px 0px -40px 0px" });
  items.forEach(el => observer.observe(el));
}

// ==========================================================================
// HERO INVERTED PENDULUM (live cart-pole balanced by state feedback)
// Move the cursor to set the cart's target position; click to knock the pendulum.
// ==========================================================================
function setupPendulum() {
  const canvas = document.getElementById("pendulum-canvas");
  const readout = document.getElementById("pendulum-readout");
  const ctx = canvas.getContext("2d");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const styles = getComputedStyle(document.documentElement);
  const LIME = styles.getPropertyValue("--primary-accent").trim() || "#C6F135";
  const MUTED = styles.getPropertyValue("--muted-text").trim() || "#93A096";

  const G = 9.81, L = 1;          // gravity, pendulum length (m)
  const SCALE = 78;               // pixels per metre
  const K = { th: 40, om: 12, x: 4, v: 6 }; // feedback gains
  const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));

  let W = 0, H = 0;
  let s = { x: 0, v: 0, th: 0.14, om: 0 };
  let target = 0, goal = 0, fallenAt = null, running = false, last = 0;
  const trail = [];

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = canvas.clientWidth; H = canvas.clientHeight;
    canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    draw();
  }

  function limit() { return Math.max(0.5, W / 2 / SCALE - 0.9); }

  function step(dt) {
    target += clamp(goal - target, -1.2 * dt, 1.2 * dt);
    let a;
    if (fallenAt !== null) {
      a = -6 * s.v; // brake the cart, let the pendulum drop
    } else {
      a = clamp(K.th * s.th + K.om * s.om + K.x * (s.x - target) + K.v * s.v, -30, 30);
    }
    const thdd = (G * Math.sin(s.th) - a * Math.cos(s.th)) / L - 0.05 * s.om;
    s.om += thdd * dt; s.th += s.om * dt;
    s.v += a * dt; s.x += s.v * dt;
    if (fallenAt !== null && Math.abs(s.th) >= Math.PI / 2) {
      s.th = Math.sign(s.th) * Math.PI / 2; s.om = 0;
    }
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    const groundY = H - 26;
    const cx = W / 2 + s.x * SCALE;
    const cartW = 58, cartH = 20, wheelR = 6;
    const pivotY = groundY - wheelR * 2 - cartH;
    const rod = L * SCALE;
    const bx = cx + Math.sin(s.th) * rod, by = pivotY - Math.cos(s.th) * rod;

    // rail + ticks
    ctx.lineWidth = 1;
    ctx.strokeStyle = "rgba(255,255,255,0.14)";
    ctx.beginPath(); ctx.moveTo(0, groundY + 0.5); ctx.lineTo(W, groundY + 0.5); ctx.stroke();
    ctx.strokeStyle = "rgba(255,255,255,0.10)";
    ctx.beginPath();
    for (let x = (W / 2) % 39; x < W; x += 39) { ctx.moveTo(x + 0.5, groundY); ctx.lineTo(x + 0.5, groundY + 5); }
    ctx.stroke();

    // target marker
    const tx = W / 2 + target * SCALE;
    ctx.fillStyle = MUTED;
    ctx.beginPath(); ctx.moveTo(tx, groundY + 8); ctx.lineTo(tx - 5, groundY + 16); ctx.lineTo(tx + 5, groundY + 16); ctx.closePath(); ctx.fill();

    // bob trail
    ctx.strokeStyle = "rgba(111, 211, 232, 0.35)";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    trail.forEach((p, i) => { if (i === 0) ctx.moveTo(p[0], p[1]); else ctx.lineTo(p[0], p[1]); });
    ctx.stroke();

    // cart
    ctx.strokeStyle = LIME; ctx.lineWidth = 1.5; ctx.fillStyle = "rgba(198, 241, 53, 0.08)";
    ctx.beginPath(); ctx.rect(cx - cartW / 2, pivotY, cartW, cartH); ctx.fill(); ctx.stroke();
    [-1, 1].forEach(side => {
      ctx.beginPath(); ctx.arc(cx + side * (cartW / 2 - 11), groundY - wheelR, wheelR, 0, Math.PI * 2); ctx.stroke();
    });

    // rod + bob
    ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(cx, pivotY); ctx.lineTo(bx, by); ctx.stroke();
    ctx.fillStyle = LIME;
    ctx.beginPath(); ctx.arc(cx, pivotY, 3, 0, Math.PI * 2); ctx.fill();
    ctx.shadowColor = LIME; ctx.shadowBlur = 16;
    ctx.beginPath(); ctx.arc(bx, by, 7, 0, Math.PI * 2); ctx.fill();
    ctx.shadowBlur = 0;

    return [bx, by];
  }

  function frame(now) {
    if (!running) return;
    const dt = Math.min((now - last) / 1000, 0.05); last = now;
    for (let i = 0; i < 4; i++) step(dt / 4);

    if (fallenAt === null && Math.abs(s.th) > 1.25) fallenAt = now;
    if (fallenAt !== null && now - fallenAt > 1800) {
      s = { x: s.x, v: 0, th: 0.1 * (Math.random() < 0.5 ? -1 : 1), om: 0 };
      fallenAt = null; trail.length = 0;
    }

    const bob = draw();
    trail.push(bob); if (trail.length > 45) trail.shift();
    if (readout) {
      const deg = s.th * 180 / Math.PI;
      readout.textContent = fallenAt !== null
        ? "θ  --.-°   resetting"
        : `θ ${deg >= 0 ? "+" : "−"}${Math.abs(deg).toFixed(1).padStart(4, "0")}°   x ${s.x >= 0 ? "+" : "−"}${Math.abs(s.x).toFixed(2)} m`;
    }
    requestAnimationFrame(frame);
  }

  function start() { if (running || reduceMotion) return; running = true; last = performance.now(); requestAnimationFrame(frame); }
  function stop() { running = false; }

  window.addEventListener("pointermove", (e) => {
    const rect = canvas.getBoundingClientRect();
    goal = clamp((e.clientX - rect.left - W / 2) / SCALE, -limit(), limit());
  }, { passive: true });

  canvas.addEventListener("pointerdown", (e) => {
    if (fallenAt !== null) return;
    const rect = canvas.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const bobX = W / 2 + s.x * SCALE + Math.sin(s.th) * L * SCALE;
    s.om += clickX < bobX ? 1.9 : -1.9; // push the bob away from the click
  });

  window.addEventListener("resize", () => { resize(); goal = clamp(goal, -limit(), limit()); });
  resize();

  if (reduceMotion) { s.th = 0; draw(); return; }
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(entries => entries[0].isIntersecting ? start() : stop()).observe(canvas);
  } else {
    start();
  }
}
