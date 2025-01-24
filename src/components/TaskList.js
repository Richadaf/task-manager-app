import React, { useState } from 'react';

const TaskList = ({ tasks, onUpdate, onDelete }) => {
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editedTitle, setEditedTitle] = useState('');
  const [editedDescription, setEditedDescription] = useState('');
  const [editedDueDate, setEditedDueDate] = useState('');
  const [editedPriority, setEditedPriority] = useState('low');
  const [editedStatus, setEditedStatus] = useState('pending');

  const handleEditClick = (task) => {
    setEditingTaskId(task.id);
    setEditedTitle(task.title);
    setEditedDescription(task.description);
    setEditedDueDate(task.dueDate);
    setEditedPriority(task.priority);
    setEditedStatus(task.status);
  };

  const handleSave = (taskId) => {
    onUpdate({
      id: taskId,
      title: editedTitle,
      description: editedDescription,
      dueDate: editedDueDate,
      priority: editedPriority,
      status: editedStatus,
    });
    setEditingTaskId(null);
  };

  const handleCancel = () => {
    setEditingTaskId(null);
  };

  return (
    <div className="bg-white p-4 shadow-md rounded-md">
      <h2 className="text-xl font-semibold mb-4">Tasks</h2>
      {tasks.length === 0 ? (
        <p className="text-gray-500">No tasks available.</p>
      ) : (
        <ul className="space-y-4">
          {tasks.map((task) => (
            <li key={task.id} className="border border-gray-200 p-4 rounded">
              {editingTaskId === task.id ? (
                <>
                  <div className="mb-2">
                    <label className="block mb-1 font-medium">Title</label>
                    <input
                      className="border border-gray-300 rounded w-full p-2"
                      type="text"
                      value={editedTitle}
                      onChange={(e) => setEditedTitle(e.target.value)}
                    />
                  </div>
                  <div className="mb-2">
                    <label className="block mb-1 font-medium">Description</label>
                    <textarea
                      className="border border-gray-300 rounded w-full p-2"
                      value={editedDescription}
                      onChange={(e) => setEditedDescription(e.target.value)}
                    />
                  </div>
                  <div className="mb-2">
                    <label className="block mb-1 font-medium">Due Date</label>
                    <input
                      className="border border-gray-300 rounded w-full p-2"
                      type="date"
                      value={editedDueDate}
                      onChange={(e) => setEditedDueDate(e.target.value)}
                    />
                  </div>
                  <div className="mb-2">
                    <label className="block mb-1 font-medium">Priority</label>
                    <select
                      className="border border-gray-300 rounded w-full p-2"
                      value={editedPriority}
                      onChange={(e) => setEditedPriority(e.target.value)}
                    >
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                    </select>
                  </div>
                  <div className="mb-2">
                    <label className="block mb-1 font-medium">Status</label>
                    <select
                      className="border border-gray-300 rounded w-full p-2"
                      value={editedStatus}
                      onChange={(e) => setEditedStatus(e.target.value)}
                    >
                      <option value="pending">Pending</option>
                      <option value="in progress">In Progress</option>
                      <option value="completed">Completed</option>
                    </select>
                  </div>
                  <div className="flex space-x-2 mt-2">
                    <button
                      onClick={() => handleSave(task.id)}
                      className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                    >
                      Save
                    </button>
                    <button
                      onClick={handleCancel}
                      className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
                    >
                      Cancel
                    </button>
                  </div>
                </>
              ) : (
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                  <div>
                    <p className="font-semibold text-lg">{task.title}</p>
                    <p className="text-gray-600">{task.description}</p>
                    <p className="text-sm text-gray-500">Due: {task.dueDate}</p>
                    <p className="text-sm">
                      Priority: <span className="font-medium">{task.priority}</span>
                    </p>
                    <p className="text-sm">
                      Status: <span className="font-medium">{task.status}</span>
                    </p>
                  </div>
                  <div className="mt-2 sm:mt-0 sm:ml-4 flex space-x-2">
                    <button
                      onClick={() => handleEditClick(task)}
                      className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => onDelete(task.id)}
                      className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
