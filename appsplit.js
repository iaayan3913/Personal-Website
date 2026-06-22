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
        grade: "Current Standing: 82%",
        tags: ["Year 1 First", "Robotics & AI"],
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
        id: "edu-extend",
        monogram: "ER",
        title: "Robotics Engineering Intern",
        institution: "Extend Robotics",
        dates: "Feb 2026 – Jun 2026",
        grade: "Active Track",
        tags: ["On-Site", "Reading", "Teleoperation", "Vision Language Action models"],
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
        id: "proj-FPV",
        name: "FPV Wireless Robot",
        category: "Personal Build",
        grade: "Robotics",
        description: "A wireless control robot that allows you to see through its eyes",
        tags: ["Robotics", "Arduino","Wireless control"],
        images: ["Images/FPV_car.jpeg","Images/FPVcar1.mp4","Images/FPVcar2.mp4"],
        detailedDescription: `
        <p>WORK IN PROGRESS </p>
        <p><strong>Open Source Code:</strong> You can <a href="FILLER LINK" target="_blank" style="color: var(--primary-accent); text-decoration: underline; font-weight: 500;">find the repository here</a>.</p>

        `
      },
      {
        id: "proj-selfbalance",
        name: "Self Balancing Robot",
        category: "Personal Build",
        grade: "Robotics",
        description: "Self balancing robot using Arduino",
        tags: ["Robotics", "Real time processing", "Arduino","Control"],
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
document.addEventListener("DOMContentLoaded", () => {
  // Target hooks check page existence prior to appending loops
  if (document.getElementById("experience-timeline")) renderExperience();
  if (document.getElementById("formal-edu-grid")) renderEducation();
  if (document.getElementById("university-panel")) renderProjects();
  
  setupStickyNav();
  setupMobileMenu();
  if (document.getElementById("tab-university")) setupTabSwitchers();
  if (document.getElementById("bubble-modal")) setupModalListeners();
  if (document.getElementById("ticker-text")) startKeywordTicker();
  setupPageFadeIns();
});

function getLogoMarkup(monogramString) {
  const imageHref = ASSET_LOGOS[monogramString];
  if (imageHref && imageHref.trim() !== "") {
    return `<img src="${imageHref}" alt="${monogramString} Logo" class="logo-image-render">`;
  }
  return `<div class="monogram-fallback">${monogramString}</div>`;
}

function renderExperience() {
  const container = document.getElementById("experience-timeline");
  container.innerHTML = DATA.experience.map(item => `
    <div class="timeline-item">
      <div class="timeline-dot main-company-dot"></div>
      <div class="interactive-card experience-card structured-group-card">
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

function renderEducation() {
  document.getElementById("formal-edu-grid").innerHTML = DATA.education.formal.map(item => `
    <div class="interactive-card" data-modal-type="education" data-sub-type="formal" data-id="${item.id}">
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
      </div>
    </div>
  `).join('');

  document.getElementById("industry-edu-grid").innerHTML = DATA.education.industry.map(item => `
    <div class="interactive-card" data-modal-type="education" data-sub-type="industry" data-id="${item.id}">
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
      </div>
    </div>
  `).join('');
}

function renderProjects() {
  document.getElementById("university-panel").innerHTML = DATA.projects.university.map(proj => `
    <div class="interactive-card project-card" data-modal-type="projects" data-sub-type="university" data-id="${proj.id}">
      <div class="proj-top">
        <h4>${proj.name}</h4>
        <div class="proj-desc">${proj.description}</div>
      </div>
      <div class="proj-tags">
        <span class="tag badge-secondary">${proj.grade}</span>
        ${proj.tags.map(t => `<span class="tag">${t}</span>`).join('')}
      </div>
    </div>
  `).join('');

  document.getElementById("personal-panel").innerHTML = DATA.projects.personal.map(proj => `
    <div class="interactive-card project-card" data-modal-type="projects" data-sub-type="personal" data-id="${proj.id}">
      <div class="proj-top">
        <h4>${proj.name}</h4>
        <div class="proj-desc">${proj.description}</div>
      </div>
      <div class="proj-tags">
        <span class="tag badge-secondary">${proj.category}</span>
        ${proj.tags.map(t => `<span class="tag">${t}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

function setupTabSwitchers() {
  document.getElementById("tab-university").addEventListener("click", (e) => switchPanel(e, "university"));
  document.getElementById("tab-personal").addEventListener("click", (e) => switchPanel(e, "personal"));
}

function switchPanel(e, type) {
  document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));
  document.querySelectorAll(".project-panel").forEach(p => p.classList.remove("active"));
  e.target.classList.add("active");
  document.getElementById(`${type}-panel`).classList.add("active");
}

function setupModalListeners() {
  document.addEventListener("click", (e) => {
    const card = e.target.closest(".interactive-card[data-modal-type]");
    if (!card) return;
    openModal(card.getAttribute("data-modal-type"), card.getAttribute("data-sub-type"), card.getAttribute("data-id"));
  });
  document.getElementById("modal-close-trigger").addEventListener("click", closeModal);
  document.getElementById("bubble-modal").addEventListener("click", (e) => {
    if(e.target.id === "bubble-modal") closeModal();
  });
  window.addEventListener("keydown", (e) => {
    if(e.key === "Escape") closeModal();
  });
}

function openModal(section, sub, id) {
  let targetObj = null;
  const wrapper = document.querySelector(".modal-wrapper");
  wrapper.classList.remove("project-modal-expanded");

  if (section === 'education') {
    targetObj = DATA.education[sub].find(x => x.id === id);
    document.getElementById("modal-title").innerText = targetObj.title;
    document.getElementById("modal-subtitle").innerText = `${targetObj.institution} (${targetObj.dates})`;
    
    if (targetObj.images && targetObj.images.length > 0) {
      wrapper.classList.add("project-modal-expanded");
      let mediaMarkup = `<div class="project-media-showcase">${targetObj.images.map(src => renderMediaElement(src)).join('')}</div>`;
      document.getElementById("modal-body").innerHTML = `
        <div class="project-expanded-split-layout">
          <div class="project-left-copy">${targetObj.bubbleContent}</div>
          <div class="project-right-media">${mediaMarkup}</div>
        </div>`;
    } else {
      document.getElementById("modal-body").innerHTML = targetObj.bubbleContent;
    }
  } else if (section === 'projects') {
    wrapper.classList.add("project-modal-expanded");
    targetObj = DATA.projects[sub].find(x => x.id === id);
    document.getElementById("modal-title").innerText = targetObj.name;
    document.getElementById("modal-subtitle").innerText = `${targetObj.category} · Evaluation: ${targetObj.grade}`;
    
    let mediaMarkup = `<div class="project-media-showcase">${targetObj.images.map(src => renderMediaElement(src)).join('')}</div>`;
    if(targetObj.images.length === 0) {
      mediaMarkup = `<div class="project-media-showcase"><div class="project-media-frame asset-placeholder-grid"><span>📷 [Media Placeholder Slot]</span></div></div>`;
    }
    document.getElementById("modal-body").innerHTML = `
      <div class="project-expanded-split-layout">
        <div class="project-left-copy">${targetObj.detailedDescription}</div>
        <div class="project-right-media">${mediaMarkup}</div>
      </div>`;
  }

  if(targetObj) {
    document.getElementById("modal-tags").innerHTML = (targetObj.tags || []).map(t => `<span class="tag">${t}</span>`).join('');
    document.getElementById("bubble-modal").classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function renderMediaElement(src) {
  if (src.toLowerCase().endsWith('.mp4')) {
    return `<div class="project-media-frame"><video src="${src}" autoplay loop muted playsinline class="project-video-render"></video></div>`;
  }
  return `<div class="project-media-frame"><img src="${src}" alt="Media Resource Asset"></div>`;
}

function closeModal() {
  const modal = document.getElementById("bubble-modal");
  if (modal) modal.classList.remove("active");
  document.body.style.overflow = "auto";
}

function setupStickyNav() {
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    if(window.scrollY > 30) navbar.classList.add("scrolled");
    else navbar.classList.remove("scrolled");
  });
}

function setupMobileMenu() {
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("nav-menu");
  toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
    menu.classList.toggle("active");
  });
}

function startKeywordTicker() {
  const keywords = ["Robotics", "Artificial Intelligence", "University College London", "Ex INETEC intern", "Ex Clarity intern", "Ex Extend Robotics intern", "Friends of Bright Eyes", "Fundraising"];
  let index = 0;
  
  const displayTarget = document.getElementById("ticker-text");
  const slides = document.querySelectorAll(".hero-slide");
  
  if (!displayTarget) return;

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
    }

  }, 3000); // Transitions perfectly every 3 seconds!
}

function setupPageFadeIns() {
  // Page load fade handler for standalone sub-pages
  const targetPage = document.querySelector(".revealpage");
  if(targetPage) {
    setTimeout(() => { targetPage.classList.add("visible"); }, 50);
  }
}
