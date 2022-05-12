export interface Department {
    id:number,
    departmentName:string,
    employees:Employee[]
                
}

export interface Employee{
        name:string,
        type:string,
        salary:number,
        reportee?:Employee[]
}