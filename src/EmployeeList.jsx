import React from 'react';

const EmployeeList = ({ employees, addToTeam }) => {
  return (
    <div className="w-1/2 p-4 border-r">
      <h2 className="text-lg font-bold mb-4">Employee List</h2>
      <ul>
        {employees.map(employee => (
          <li key={employee.id} className={`mb-2 p-2 ${employee.added ? 'text-gray-500' : 'text-black'}`}>
            {employee.name} (Age: {employee.age})
            {!employee.added && (
              <button className="ml-2 bg-blue-500 text-white px-2 py-1 rounded" onClick={() => addToTeam(employee)}>ADD</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
