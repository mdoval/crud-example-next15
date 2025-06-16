"use client";

import { useActionState } from "react";
import BackButton from "./BackButton";
import SubmitButton from "./SubmitButton";
import { addEmployee } from "@/actions/db-actions";

export default function EmployeForm() {
  let initialState: FormData | null = null

  const [state, submit, isPending] = useActionState(addEmployee, initialState);

  return (
    <form className="formulario" action={submit}>
      <h1 className="text-3xl m-4">Formulario de Empleados</h1>
      <hr className="mb-4" />

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Nombre
        </label>
        <input
          className="control-input"
          id="name"
          type="text"
          placeholder="Ej. Nombre"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Apellido
        </label>
        <input
          className="control-input"
          id="lastName"
          type="text"
          placeholder="Ej. Perez"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Email
        </label>
        <input
          className="control-input"
          id="email"
          type="text"
          placeholder="Ej. juan@example.com"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Edad
        </label>
        <input
          className="control-input-small"
          id="age"
          type="number"
          placeholder="Ej. 35"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Sector
        </label>
        <select name="department" id="department" className="control-select">
          <option value="IT">IT - Area de Tecnologia</option>
          <option value="RRHH">RRHH - Recursos Humanos</option>
          <option value="Vendedor">Vendor - Area de ventas</option>
          <option value="Administrativo">
            Administrativo - Sector de Administracion
          </option>
        </select>
      </div>

      <div className="mb-4 flex flex-row space-x-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Home Office?
        </label>
        <input
          className="control-checkbox"
          type="checkbox"
          name="homeOffice"
          value="true"
        />
      </div>

      <SubmitButton />
      <BackButton />
    </form>
  );
}
