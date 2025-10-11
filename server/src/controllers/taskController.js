import { responseMessage } from "../responseMessage.js";
import * as taskService from "../services/taskService.js";

export const createTask = async (req, res) => {
    try {
        const { taskName, taskDescription, taskStatus } = req.body;
        const task = await taskService.createTask(taskName, taskDescription, taskStatus);
        res.status(200).json({ message: responseMessage.createTask, task });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getAllTasks = async (req, res) => {
    try {
        const tasks = await taskService.getAllTasks();
        res.status(200).json({ message: responseMessage.getAllTasks, tasks });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const deleteTask = async (req, res) => {
    try {
        const { id } = req.query;
        const task = await taskService.deleteTask(id);
        res.status(200).json({ message: responseMessage.deleteTask, task });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}