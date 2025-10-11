import { useState, useEffect } from 'react';
import TaskItem from './TaskItem';
import './TaskList.css';

const TaskList = ({ refreshTrigger }) => {
    const [tasks, setTasks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const [filter, setFilter] = useState('all');

    const fetchTasks = async () => {
        setIsLoading(true);
        setError('');

        try {
            const { taskAPI } = await import('../services/api.js');
            const response = await taskAPI.getAllTasks();
            setTasks(response.tasks);
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, [refreshTrigger]);

    const handleTaskDeleted = (deletedTaskId) => {
        setTasks(prevTasks => prevTasks.filter(task => task._id !== deletedTaskId));
    };

    const filteredTasks = tasks.filter(task => {
        if (filter === 'all') return true;
        return task.taskStatus === filter;
    });

    const getTaskStats = () => {
        const total = tasks.length;
        const completed = tasks.filter(task => task.taskStatus === 'completed').length;
        const pending = total - completed;
        return { total, completed, pending };
    };

    const stats = getTaskStats();

    if (isLoading) {
        return (
            <div className="task-list-container">
                <div className="loading">Loading tasks...</div>
            </div>
        );
    }

    return (
        <div className="task-list-container">
            <div className="task-list-header">
                <h2>Your Tasks</h2>
                <div className="task-stats">
                    <span className="stat-item">Total: {stats.total}</span>
                    <span className="stat-item">Pending: {stats.pending}</span>
                    <span className="stat-item">Completed: {stats.completed}</span>
                </div>
            </div>

            <div className="filter-controls">
                <button
                    className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                    onClick={() => setFilter('all')}
                >
                    All Tasks
                </button>
                <button
                    className={`filter-btn ${filter === 'pending' ? 'active' : ''}`}
                    onClick={() => setFilter('pending')}
                >
                    Pending
                </button>
                <button
                    className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
                    onClick={() => setFilter('completed')}
                >
                    Completed
                </button>
            </div>

            {error && <div className="error-message">{error}</div>}

            {filteredTasks.length === 0 ? (
                <div className="empty-state">
                    <p>
                        {filter === 'all'
                            ? "No tasks yet. Create your first task above!"
                            : `No ${filter} tasks found.`
                        }
                    </p>
                </div>
            ) : (
                <div className="tasks-grid">
                    {filteredTasks.map(task => (
                        <TaskItem
                            key={task._id}
                            task={task}
                            onTaskDeleted={handleTaskDeleted}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default TaskList;
