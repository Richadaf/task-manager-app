# Task Manager App

[![Build Status](https://img.shields.io/github/actions/workflow/status/richadaf/task-manager-app/ci.yml?branch=main)](https://github.com/richadaf/task-manager-app/actions)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/richadaf/task-manager-app/blob/main/LICENSE)
![IsMaintained](https://img.shields.io/badge/Maintained%3F-no-red.svg)
![AMA](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)
![StarMe](https://img.shields.io/github/stars/richadaf/task-manager-app.svg)
![Follow](https://img.shields.io/github/followers/richadaf.svg?style=social&label=Follow&maxAge=2592000)
![IssuesFound](https://img.shields.io/github/issues/richadaf/task-manager-app.svg)

A React-based Task Manager application that allows users to **create**, **view**, **update**, and **delete** tasks. The tasks are persisted in the browser's Local Storage. The UI is styled with Tailwind CSS, and unit tests are written using Jest.

## Features
1. **Task Management**: 
   - Create new tasks (title, description, due date, priority, status).
   - Edit existing tasks.
   - Delete tasks.
   - View a list of all tasks.
2. **Local Storage**: 
   - Tasks are saved in `localStorage` to persist between sessions.
3. **Filtering**:
   - Filter tasks by priority (low, medium, high).
   - Filter tasks by status (pending, in progress, completed).
4. **Responsive UI**: 
   - Uses Tailwind CSS for a clean and responsive design.
5. **Testing**:
   - Unit tests for critical components using Jest and React Testing Library.

## Project Structure

```
task-manager-app
├── README.md
├── package.json
├── tailwind.config.js
├── yarn.lock
├── public
└── src
    ├── __tests__
    │   └── TaskManager.test.js
    ├── App.js
    ├── index.js
    ├── index.css
    └── components
        ├── TaskManager.js
        ├── TaskForm.js
        ├── TaskFilter.js
        └── TaskList.js
```

## Setup Instructions

1. **Install Dependencies**  
   ```bash
   cd task-manager-app
   yarn
   ```

2. **Run the Application**  
   ```bash
   yarn start
   ```
   - Open [http://localhost:3000](http://localhost:3000) to view in the browser.

3. **Run Tests**  
   ```bash
   yarn test
   ```
   - Launches the test runner in watch mode. Press `q` to quit.

4. **Build for Production**  
   ```bash
   yarn build
   ```
   - Builds the app for production to the `build` folder.

## Additional Information

- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- Tailwind CSS is configured via `tailwind.config.js`.
- Jest and React Testing Library are included by default with Create React App.

Feel free to customize the project as you see fit.
