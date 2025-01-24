import React from 'react';

const TaskFilter = ({
  filterPriority,
  setFilterPriority,
  filterStatus,
  setFilterStatus,
}) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-md mb-4 flex flex-col sm:flex-row sm:space-x-4">
      <div className="mb-3 sm:mb-0">
        <label className="block mb-1 font-medium">Filter by Priority</label>
        <select
          className="border border-gray-300 rounded w-full p-2"
          value={filterPriority}
          onChange={(e) => setFilterPriority(e.target.value)}
        >
          <option value="all">All</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
      <div>
        <label className="block mb-1 font-medium">Filter by Status</label>
        <select
          className="border border-gray-300 rounded w-full p-2"
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
        >
          <option value="all">All</option>
          <option value="pending">Pending</option>
          <option value="in progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>
    </div>
  );
};

export default TaskFilter;
