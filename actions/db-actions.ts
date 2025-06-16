// app/actions.ts
'use server'; // ¡Importante! Declara este archivo como un Server Component

import { employees, generateNextId } from '@/db/data';
import { Employee, FormState } from '@/types/EmployeeType';
import { revalidatePath } from 'next/cache';

// Acción para agregar un nuevo empleado
export async function addEmployee(initialState: FormState | null, formData: FormData) {
  const newEmployee: Employee = {
    id: generateNextId(),
    name: formData.get('name') as string,
    lastName: formData.get('lastName') as string,
    email: formData.get('email') as string,
    age: parseInt(formData.get('age') as string),
    department: formData.get('department') as "IT" | "RRHH",
    homeOffice: formData.get('homeOffice') === 'on', // Checkbox value
  };

  employees.push(newEmployee);
  console.log('Empleado agregado:', newEmployee);
  return {error: "Hola"}

  // Vuelve a validar la ruta para que los datos actualizados se muestren
  revalidatePath('/');
}

// Acción para eliminar un empleado por ID
export async function deleteEmployee(id: number) {
  const initialLength = employees.length;
  // Filtramos el array para eliminar el empleado con el ID dado
  const updatedEmployees = employees.filter(emp => emp.id !== id);

  // Asegurarse de que 'employees' se actualice con la nueva referencia del array
  // para que los cambios persistan en el ámbito del servidor
  employees.splice(0, employees.length, ...updatedEmployees);

  if (employees.length < initialLength) {
    console.log(`Empleado con ID ${id} eliminado.`);
  } else {
    console.log(`No se encontró empleado con ID ${id}.`);
  }

  // Vuelve a validar la ruta para que los datos actualizados se muestren
  revalidatePath('/');
}

// Acción para obtener todos los empleados (esto lo podrías usar directamente en un Server Component)
export async function getEmployees(): Promise<Employee[]> {
  return employees;
}
