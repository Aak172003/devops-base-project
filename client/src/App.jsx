import { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const handleTaskCreated = (newTask) => {
    // Trigger a refresh of the task list
    setRefreshTrigger(prev => prev + 1);
  };

  return (
    <div className="app">
      <header className="app-header">
        <div className="container">
          <h1>📋 Task Manager</h1>
          <p>Organize your tasks efficiently</p>
        </div>
      </header>

      <main className="app-main">
        <div className="container">
          <TaskForm onTaskCreated={handleTaskCreated} />
          <TaskList refreshTrigger={refreshTrigger} />
        </div>
      </main>

      <footer className="app-footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Task Manager. Built with React & Node.js</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
