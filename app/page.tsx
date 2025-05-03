import { getClients } from "@/actions/db-actions";
import AddButton from "@/components/AddButton";
import MobileRow from "@/components/MobileRow";
import MonitorRow from "@/components/MonitorRow";
import { Client } from "@/types/ClientsType";

export default async function Home() {
  const clients: Client[] = await getClients();

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
        </div>
        <div className="md:hidden text-center p-4 bg-gray-300">Tabla</div>
      </div>
      <div>
        {clients.map((cliente, index) => {
          return (
            <div key={index} >
              <MobileRow cliente={cliente} />
              <MonitorRow cliente={cliente} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
