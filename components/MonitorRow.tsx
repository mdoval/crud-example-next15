import { Client } from "@/types/ClientsType";
import { CiCircleChevDown, CiCircleRemove } from "react-icons/ci";

export default function MonitorRow({ cliente }: { cliente: Client }) {
  return (
    <div className="sm:grid grid-cols-8 px-4 py-3 text-sm text-gray-500 hidden">
      <div className="hidden sm:block">{cliente.name}</div>
      <div className="hidden sm:block">{cliente.lastName}</div>
      <div className="hidden sm:block">{cliente.email}</div>
      <div className="hidden sm:block">{cliente.age}</div>
      <div className="hidden sm:block">{cliente.department}</div>
      <div className="hidden sm:block">
        {cliente.homeOffice ? (
          <CiCircleChevDown className="text-green-600 font-bold text-2xl" />
        ) : (
          <CiCircleRemove className="text-red-600 font-bold text-2xl" />
        )}
      </div>
    </div>
  );
}
