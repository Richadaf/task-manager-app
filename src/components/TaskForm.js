import React, { useState } from 'react';

const TaskForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('low');
  const [status, setStatus] = useState('pending');

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!title.trim()) return;

    const newTask = {
      id: Date.now(),
      title,
      description,
      dueDate,
      priority,
      status,
    };

    onSubmit(newTask);
    
    setTitle('');
    setDescription('');
    setDueDate('');
    setPriority('low');
    setStatus('pending');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 shadow-md rounded-md mb-4">
      <h2 className="text-xl font-semibold mb-2">Add Task</h2>
      <div className="mb-3">
        <label className="block mb-1 font-medium">Title</label>
        <input
          className="border border-gray-300 rounded w-full p-2"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter task title"
          required
        />
      </div>
      <div className="mb-3">
        <label className="block mb-1 font-medium">Description</label>
        <textarea
          className="border border-gray-300 rounded w-full p-2"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Task description..."
        />
      </div>
      <div className="mb-3">
        <label className="block mb-1 font-medium">Due Date</label>
        <input
          className="border border-gray-300 rounded w-full p-2"
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mb-3">
        <div className="mb-3 sm:mb-0">
          <label className="block mb-1 font-medium">Priority</label>
          <select
            className="border border-gray-300 rounded w-full p-2"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <div>
          <label className="block mb-1 font-medium">Status</label>
          <select
            className="border border-gray-300 rounded w-full p-2"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="pending">Pending</option>
            <option value="in progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
