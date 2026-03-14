import { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  const user = {
    name: "Aaksh",
    age: 20,
    city: "New York"
  }
  // Eslint dot-anotation fix automatically
  console.log(user["name"]);
  console.log(user.name);
  console.log(user["age"]);
  console.log(user["city"]);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const handleTaskCreated = () => {
    // Trigger a refresh of the task list
    setRefreshTrigger((prev) => prev + 1);
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
