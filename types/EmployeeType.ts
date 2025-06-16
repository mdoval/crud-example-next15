export type Employee = { 
    id: number,
    name: string,
    lastName: string,
    email: string,
    age: number,
    department: 'IT' | "RRHH" | "Vendedor" | 'Administrativo'
    homeOffice: boolean         
}

export type FormState = {
    error: null | string
}