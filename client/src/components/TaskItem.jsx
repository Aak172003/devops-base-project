import { useState } from 'react';
import './TaskItem.css';

const TaskItem = ({ task, onTaskDeleted }) => {
    const [isDeleting, setIsDeleting] = useState(false);
    const [error, setError] = useState('');

    const handleDelete = async () => {
        if (!window.confirm('Are you sure you want to delete this task?')) {
            return;
        }

        setIsDeleting(true);
        setError('');

        try {
            const { taskAPI } = await import('../services/api.js');
            await taskAPI.deleteTask(task._id);
            onTaskDeleted(task._id);
        } catch (err) {
            setError(err.message);
        } finally {
            setIsDeleting(false);
        }
    };

    const getStatusClass = (status) => {
        return status === 'completed' ? 'status-completed' : 'status-pending';
    };

    const getStatusIcon = (status) => {
        return status === 'completed' ? '✅' : '⏳';
    };

    return (
        <div className="task-item">
            <div className="task-header">
                <div className="task-title">
                    <span className="status-icon">{getStatusIcon(task.taskStatus)}</span>
                    <h3>{task.taskName}</h3>
                </div>
                <div className="task-actions">
                    <span className={`status-badge ${getStatusClass(task.taskStatus)}`}>
                        {task.taskStatus}
                    </span>
                    <button
                        onClick={handleDelete}
                        disabled={isDeleting}
                        className="delete-btn"
                        title="Delete task"
                    >
                        {isDeleting ? '⏳' : '🗑️'}
                    </button>
                </div>
            </div>

            {task.taskDescription && (
                <div className="task-description">
                    <p>{task.taskDescription}</p>
                </div>
            )}

            <div className="task-meta">
                <small>Created: {new Date(task.createdAt).toLocaleDateString()}</small>
            </div>

            {error && <div className="error-message">{error}</div>}
        </div>
    );
};

export default TaskItem;
