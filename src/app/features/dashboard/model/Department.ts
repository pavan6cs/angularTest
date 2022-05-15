export interface Department {
    id:number,
    departmentName:string,
    employee:Employee[]
                
}

export interface Employee{
        name:string,
        type:string,
        salary:number,
        reportee?:Employee[]
}

export interface EmployeeWithExpense extends Employee{
totalExpense?:number;
}