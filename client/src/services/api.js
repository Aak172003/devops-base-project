const API_BASE_URL = 'http://localhost:8080/api/v1';

export const taskAPI = {
    // Create a new task
    createTask: async (taskData) => {
        const response = await fetch(`${API_BASE_URL}/task/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(taskData),
        });

        if (!response.ok) {
            throw new Error('Failed to create task');
        }

        return response.json();
    },

    // Get all tasks
    getAllTasks: async () => {
        const response = await fetch(`${API_BASE_URL}/task/`);

        if (!response.ok) {
            throw new Error('Failed to fetch tasks');
        }

        return response.json();
    },

    // Delete a task
    deleteTask: async (taskId) => {
        const response = await fetch(`${API_BASE_URL}/task/delete?id=${taskId}`, {
            method: 'DELETE',
        });

        if (!response.ok) {
            throw new Error('Failed to delete task');
        }

        return response.json();
    },
};
