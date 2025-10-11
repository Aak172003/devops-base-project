import { TaskModel } from "../models/task.js";

export const createTask = async (taskName, taskDescription, taskStatus) => {
    try {
        const task = await TaskModel.create({ taskName, taskDescription, taskStatus });
        return task;
    } catch (error) {
        console.log("Error in createTask", error.message);
        throw error;
    }
}

export const getAllTasks = async () => {
    try {
        const tasks = await TaskModel.find();
        return tasks;
    } catch (error) {
        console.log("Error in getAllTasks", error.message);
        throw error;
    }
}

export const deleteTask = async (id) => {
    try {
        const task = await TaskModel.findByIdAndDelete(id);
        return task;
    } catch (error) {
        console.log("Error in deleteTask", error.message);
        throw error;
    }
}