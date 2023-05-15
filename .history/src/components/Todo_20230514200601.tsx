import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";

interface TodoProps {
  todos: string;
}

const Todo = ({ todos }: TodoProps) => {
  return (
    <li className="p-2 bg-teal-300 my-2 rounded-md uppercase shadow-sm">
      <div className="flex items-center justify-between">
        <p className="text-white shadow-lg">{todos}</p>
        <div className="flex gap-2">
          <button className="bg-green-400 w-full rounded">
            <CheckIcon />
          </button>
          <button className="bg-red-400 w-full rounded">
            <DeleteIcon />
          </button>
        </div>
      </div>
    </li>
  );
};

export default Todo;
