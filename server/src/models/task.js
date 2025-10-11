import mongoose, { Schema } from 'mongoose';

const taskEnums = ['pending', 'completed'];

const taskSchema = new Schema(
  {
    taskName: {
      type: String,
      trim: true,
    },
    taskDescription: {
      type: String,
      trim: true,
    },
    taskStatus: {
      type: String,
      trim: true,
      enum: taskEnums,
      default: 'pending',
    },
  },
  {
    timestamps: true,
  },
);

export const TaskModel = mongoose.model('Task', taskSchema);
