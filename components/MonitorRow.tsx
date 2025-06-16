import { Employee } from "@/types/EmployeeType";
import { CiCircleChevDown, CiCircleRemove } from "react-icons/ci";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";

export default function MonitorRow({ employee }: { employee: Employee }) {
  return (
    <div className="sm:grid grid-cols-8 px-4 py-3 text-sm text-gray-500 hidden">
      <div className="hidden sm:block">{employee.name}</div>
      <div className="hidden sm:block">{employee.lastName}</div>
      <div className="hidden sm:block">{employee.email}</div>
      <div className="hidden sm:block">{employee.age}</div>
      <div className="hidden sm:block">{employee.department}</div>
      <div className="hidden sm:block">
        {employee.homeOffice ? (
          <CiCircleChevDown className="text-green-600 font-bold text-2xl" />
        ) : (
          <CiCircleRemove className="text-red-600 font-bold text-2xl" />
        )}
      </div>
      <div className="flex flex-row space-x-8">
        <EditButton id={employee.id} /> 
        <DeleteButton id={employee.id} /> 
      </div>
    </div>
  );
}
