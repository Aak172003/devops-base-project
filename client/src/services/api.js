
const API_BASE_URL = import.meta.env.VITE_API_URL;

export const taskAPI = {
    createTask: async (taskData) => {
        const response = await fetch(`${API_BASE_URL}/task/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(taskData),
        });

        return response.json();
    },

    getAllTasks: async () => {
        const response = await fetch(`${API_BASE_URL}/task/`);
        return response.json();
    },

    deleteTask: async (taskId) => {
        const response = await fetch(`${API_BASE_URL}/task/delete?id=${taskId}`, {
            method: 'DELETE',
        });
        return response.json();
    },
};
