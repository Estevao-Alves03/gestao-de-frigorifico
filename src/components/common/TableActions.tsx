import { FaPencil } from "react-icons/fa6";
import { IoTrashOutline } from "react-icons/io5";

interface TableActionsProps {
  onEdit?: () => void;
  onDelet?: () => void;
}

export default function TableActions({ onDelet, onEdit }: TableActionsProps) {
  return (
    <>
      <div className="flex justify-center gap-2">
        <button
          onClick={onEdit}
          className="group rounded-md p-2 transition-all duration-300 ease-in-out border border-gray-300 hover:border-white hover:bg-gray-500"
        >
          <FaPencil className="text-gray-500 group-hover:text-white duration-300 ease-in-out"/>
        </button>

        <button
          onClick={onDelet}
          className="group rounded-m p-2 transition-all duration-300 ease-in-out border border-gray-300 hover:border-white  rounded-md hover:bg-red-500"
        >
          <IoTrashOutline className="text-red-500 group-hover:text-white duration-300 ease-in-out" />
        </button>
      </div>
    </>
  );
}
