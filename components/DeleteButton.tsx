import Link from "next/link";
import { CiTrash } from "react-icons/ci";

export default function DeleteButton({ id }: { id: number }) {
  return (
    <Link
      href={`/edit/${id}`}
      className="sm:w-auto sm:m-0" // Ajustes para pantallas grandes
    >
      <div className="flex flex-row items-center justify-center sm:block mobile-button">
        <CiTrash className="text-xl sm:text-2xl text-black font-bold mr-2 sm:mr-0" />
        <p className="font-bold sm:hidden">Eliminar</p>
      </div>
    </Link>
  );
}
