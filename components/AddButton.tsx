import Link from "next/link";
import { IoMdAdd } from "react-icons/io";

export default function AddButton() {
  return (
    <Link href={"/add"} className="bg-blue-600 p-4 flex flex-row text-white font-bold items-center justify-center m-4 sm:w-1/6 cursor-pointer">
        <IoMdAdd className="text-2xl mr-4" />
        Nuevo Usuario
    </Link>
  );
}
