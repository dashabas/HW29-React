import React from 'react';
import { useState } from 'react';

function EmployeeItem(props) {
    const [daysWorked, setDaysWorked] = useState(props.employee.daysWorked);
    const [paydayRate, setPaydayRate] = useState(props.employee.paydayRate);
    const [totalSalary, setTotalSalary] = useState(() => props.employee.daysWorked * props.employee.paydayRate);

    return (
        <tr key={props.employee.id}>
            <td>{props.employee.name}</td>
            <td>{props.employee.lastName}</td>
            <td><input type="number" value={daysWorked} onChange={(e) => {
                setDaysWorked(e.target.value)
                setTotalSalary(e.target.value * paydayRate)
            }}/></td>
            <td><input type="number" value={paydayRate} onChange={(e) => {
                setPaydayRate(e.target.value)
                setTotalSalary(e.target.value * daysWorked)
            }}/></td>
            <td>{totalSalary}</td>
        </tr>
    )
}

export default EmployeeItem;