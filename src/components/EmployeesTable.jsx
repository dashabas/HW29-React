import React from 'react';
import EmployeeItem from './EmployeeItem';

function EmployeesTable(props) {
    return (
        <table>
            <tbody>
            {props.employees.map((employee) => {
                return <EmployeeItem employee={employee} key={employee.id}/>
            })}
            </tbody>
        </table>
    )
}

export default EmployeesTable;