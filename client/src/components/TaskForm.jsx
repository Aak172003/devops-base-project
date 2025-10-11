import { useState } from 'react';
import './TaskForm.css';

const TaskForm = ({ onTaskCreated }) => {
  const [formData, setFormData] = useState({
    taskName: '',
    taskDescription: '',
    taskStatus: 'pending',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const { taskAPI } = await import('../services/api.js');
      const response = await taskAPI.createTask(formData);

      // Reset form
      setFormData({
        taskName: '',
        taskDescription: '',
        taskStatus: 'pending',
      });

      // Notify parent component
      onTaskCreated(response.task);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="task-form-container">
      <h2>Add New Task</h2>
      <form onSubmit={handleSubmit} className="task-form">
        <div className="form-group">
          <label htmlFor="taskName">Task Name</label>
          <input
            type="text"
            id="taskName"
            name="taskName"
            value={formData.taskName}
            onChange={handleChange}
            required
            placeholder="Enter task name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="taskDescription">Description</label>
          <textarea
            id="taskDescription"
            name="taskDescription"
            value={formData.taskDescription}
            onChange={handleChange}
            placeholder="Enter task description"
            rows="3"
          />
        </div>

        <div className="form-group">
          <label htmlFor="taskStatus">Status</label>
          <select
            id="taskStatus"
            name="taskStatus"
            value={formData.taskStatus}
            onChange={handleChange}
          >
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        {error && <div className="error-message">{error}</div>}

        <button type="submit" disabled={isLoading} className="submit-btn">
          {isLoading ? 'Adding...' : 'Add Task'}
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
