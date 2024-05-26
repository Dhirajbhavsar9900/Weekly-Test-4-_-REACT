import React, { useState } from 'react';
import EmployeeList from './EmployeeList';
import TeamList from './TeamList';

const initialEmployees = [
  { id: 1, name: 'John Doe', age: 30 },
  { id: 2, name: 'Jane Smith', age: 25 },
  { id: 3, name: 'Alice Johnson', age: 28 },
  { id: 4, name: 'Bob Brown', age: 35 },
];

function App() {
  const [employees, setEmployees] = useState(initialEmployees);
  const [team, setTeam] = useState([]);

  const addToTeam = (employee) => {
    setTeam([...team, employee]);
    setEmployees(employees.map(emp => emp.id === employee.id ? { ...emp, added: true } : emp));
  };

  const removeFromTeam = (employee) => {
    setTeam(team.filter(emp => emp.id !== employee.id));
    setEmployees(employees.map(emp => emp.id === employee.id ? { ...emp, added: false } : emp));
  };

  const calculateAverageAge = () => {
    if (team.length === 0) return 0;
    const totalAge = team.reduce((acc, emp) => acc + emp.age, 0);
    return (totalAge / team.length).toFixed(2);
  };

  const sortTeamByAge = () => {
    setTeam([...team].sort((a, b) => a.age - b.age));
  };

  return (
    <div className="flex p-4">
      <EmployeeList employees={employees} addToTeam={addToTeam} />
      <TeamList team={team} removeFromTeam={removeFromTeam} calculateAverageAge={calculateAverageAge} sortTeamByAge={sortTeamByAge} />
    </div>
  );
}

export default App;
