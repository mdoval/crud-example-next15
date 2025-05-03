export type Client = { 
    id: number,
    name: string,
    lastName: string,
    email: string,
    age: number,
    department: 'IT' | "RRHH" | "Vendedor" | 'Administrativo'
    homeOffice: boolean         
}