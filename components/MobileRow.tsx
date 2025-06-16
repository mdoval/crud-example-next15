"use client";

import { Employee } from "@/types/EmployeeType";
import { useState } from "react";
import { CiCircleChevDown, CiCircleRemove } from "react-icons/ci";
import { FaArrowAltCircleDown, FaArrowAltCircleUp } from "react-icons/fa";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";

export default function MobileRow({ employee }: { employee: Employee }) {
  const [expand, setExpand] = useState(true);

  function open() {
    setExpand(!expand)
  }

  return (
    <div className="mobile-row p-4 border border-gray-200 sm:hidden">
      <div className="mobile-title flex items-center font-bold hover:text-blue-700 cursor-pointer sm:hidden" onClick={() => open()} >
        {
          expand?
          <FaArrowAltCircleUp className="mr-2" />
          :
          <FaArrowAltCircleDown className="mr-2" />
        }
        {employee.name} {employee.lastName}
      </div>
      <div className={`mobile-detail ${expand ? "hidden" : ""} p-3 bg-gray-100 shadow` }>
        <div className="sm:hidden"><b>Email:</b> {employee.email}</div>
        <div className="sm:hidden"><b>Edad:</b> {employee.age}</div>
        <div className="sm:hidden"><b>Departamento:</b> {employee.department}</div>
        <div className="sm:hidden"><div className="flex flex-row items-center space-x-4"><b>Home Office?</b> {employee.homeOffice? <CiCircleChevDown className="text-green-600 font-bold text-2xl" />: <CiCircleRemove className="text-red-600 font-bold text-2xl" />}</div></div>
        <div className="space-x-4 sm:hidden flex flex-row justify-end"><DeleteButton id={employee.id} /><EditButton id={employee.id} /></div>
      </div>
    </div>
  );
}
