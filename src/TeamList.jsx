import React from 'react';

const TeamList = ({ team, removeFromTeam, calculateAverageAge, sortTeamByAge }) => {
  return (
    <div className="w-1/2 p-4">
      <h2 className="text-lg font-bold mb-4">Team Members</h2>
      <button className="mb-4 bg-green-500 text-white px-4 py-2 rounded" onClick={sortTeamByAge}>SORT BY AGE</button>
      <ul>
        {team.map(employee => (
          <li key={employee.id} className="mb-2 p-2 text-black">
            {employee.name} (Age: {employee.age})
            <button className="ml-2 bg-red-500 text-white px-2 py-1 rounded" onClick={() => removeFromTeam(employee)}>REMOVE</button>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <strong>Average Age:</strong> {calculateAverageAge()}
      </div>
    </div>
  );
};

export default TeamList;
