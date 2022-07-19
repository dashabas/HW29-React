import React from 'react';
import EmployeesTable from './components/EmployeesTable';
import './components/Employees.css';

let employees = [
    {id: 1, name: 'Roger', lastName: 'Federer', daysWorked: 5, paydayRate: 20},
    {id: 2, name: 'Rafael', lastName: 'Nadal', daysWorked: 7, paydayRate: 22},
    {id: 3, name: 'Andre', lastName: 'Agassi', daysWorked: 8, paydayRate: 18}
]

function App() {
  return (
      <EmployeesTable employees={employees}/>
  );
}

export default App;