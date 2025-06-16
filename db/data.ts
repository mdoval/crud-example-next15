import { Employee } from "@/types/EmployeeType";

export const employees: Employee[] = [
    { id: 0, name: "Juan", lastName: "Perez", email: "juanperez@gmail.com", age: 35, department: 'IT', homeOffice: true },
    { id: 1, name: "Martin", lastName: "Rodriguez", email: "juanperez@gmail.com", age: 45, department: 'Vendedor', homeOffice: false },
    { id: 2, name: "Andres", lastName: "Gomez", email: "juanperez@gmail.com", age: 33, department: 'RRHH', homeOffice: true },
    { id: 3, name: "Jose", lastName: "Bonamassa", email: "juanperez@gmail.com", age: 29, department: 'Vendedor', homeOffice: false },
    { id: 4, name: "Ana", lastName: "Brown", email: "juanperez@gmail.com", age: 46, department: 'IT', homeOffice: true },
    { id: 5, name: "Pedro", lastName: "Pascal", email: "juanperez@gmail.com", age: 55, department: 'Vendedor', homeOffice: false },
    { id: 6, name: "Benjamin", lastName: "Nieto", email: "juanperez@gmail.com", age: 23, department: 'Administrativo', homeOffice: true },
    { id: 7, name: "Jack", lastName: "Bells", email: "juanperez@gmail.com", age: 47, department: 'RRHH', homeOffice: true }
]

let nextId = employees.length > 0 ? Math.max(...employees.map(e => e.id)) + 1 : 0;

export const generateNextId = (): number => {
    return nextId++;
};