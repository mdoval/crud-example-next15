import { getClients } from "@/actions/db-actions";
import AddButton from "@/components/AddButton";
import MobileRow from "@/components/MobileRow";
import MonitorRow from "@/components/MonitorRow";
import { Employee } from "@/types/EmployeeType";

export default async function Home() {
  const employees: Employee[] = await getClients();

  return (
    <div>
      <AddButton />
      <div className="w-full">
        <div className="hidden sm:grid grid-cols-8 px-4 py-2 bg-gray-200 text-xs text-gray-800 uppercase tracking-wider">
          <div>Nombre</div>
          <div>Apellido</div>
          <div>Email</div>
          <div>Edad</div>
          <div>Departamento</div>
          <div>Home Office?</div>
          <div>Acciones</div>
        </div>
        <div className="md:hidden text-center p-4 bg-gray-300">Tabla</div>
      </div>
      <div>
        {employees.map((employee, index) => {
          return (
            <div key={index} >
              <MobileRow employee={employee} />
              <MonitorRow employee={employee} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
