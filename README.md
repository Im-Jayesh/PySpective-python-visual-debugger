# PySpective: Next-Gen Visual Python Debugger 🐍🔍
PySpective (pronounced pie-spective) is a modern, web-based visual debugger for Python designed by Jayesh Suthar. It helps developers see code execution step by step, visualizing variables and data structures (lists, dicts, sets, tuples, custom objects) in real-time. PySpective is built for students and beginners who have trouble understanding how code works underneath the hood.

This section is part of a larger university project developed by a four-person team, but this specific part has been entirely created by me. I have been working on this project on and off due to studies and have a lot of little bugs.

## Tech Stack
PySpective is powered by a modern full-stack architecture:
Frontend: React for building dynamic, component-driven interfaces
Backend: Node.js + Express for handling routes and API logic
Execution Engine: Python 3.x using sys.settrace() for line-by-line execution tracking
This combination enables a smooth developer experience with powerful debugging capabilities.

## Demo

<!-- If you commit `demo.mp4` into your repo’s `assets` folder -->
[![Demo Video](.frontend/assets/demo-thumbnail.png)](https://www.linkedin.com/posts/jayesh-suthar-07a1322b5_python-debugger-visualdebugger-activity-7313880885492097024--qed?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEuo3N4BqmQEjrw4C3BoDk7O6MMicA6Wgvc)

(https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7313880775408422912?collapsed=1)

```
Pawsitive
├─ backend
│  ├─ .env
│  ├─ controllers
│  │  └─ vis.controller.js
│  ├─ dbconfig
│  │  └─ dbconfig.js
│  ├─ models
│  │  └─ user.model.js
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ public
│  ├─ routes
│  │  └─ visualization.js
│  └─ server.js
└─ frontend
   ├─ package-lock.json
   ├─ package.json
   ├─ public
   │  ├─ favicon.ico
   │  ├─ index.html
   │  ├─ logo192.png
   │  ├─ logo512.png
   │  ├─ manifest.json
   │  └─ robots.txt
   ├─ README.md
   └─ src
      ├─ App.css
      ├─ App.jsx
      ├─ App.test.js
      ├─ assets
      │  └─ css
      │     ├─ compiler.css
      │     ├─ local-frame.css
      │     ├─ nav-css.css
      │     ├─ py-components-css
      │     │  └─ dict.css
      │     └─ visualization.css
      ├─ components
      │  ├─ Dict_component.jsx
      │  ├─ List_component.jsx
      │  ├─ Local_vars_frame.jsx
      │  ├─ Nav.jsx
      │  ├─ PythonObjectVisualizer.jsx
      │  ├─ Set_component.jsx
      │  ├─ Tuples_component.jsx
      │  └─ Visualization.jsx
      ├─ index.css
      ├─ index.js
      ├─ pages
      │  └─ Compiler.jsx
      ├─ reportWebVitals.js
      └─ setupTests.js

```
