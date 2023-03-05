// Write your solution in this file!
const employee = {
   
}
function updateEmployeeWithKeyAndValue(employee, key, value){
    const employee2 ={...employee};
    employee2[key] = value;
    return employee2;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key]=value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key){
    const employeeCopy = {...employee};
    delete employeeCopy.name;   
    return employeeCopy;

}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    //console.log(employee.name);
    delete employee.name;
    return employee;
}