import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";

interface TodoProps {
  todos: string;
}

const Todo = ({ todos }: TodoProps) => {
  return (
    <li className="p-2 bg-teal-700 my-2 rounded-md uppercase shadow-sm">
      <div className="flex items-center justify-between">
        <p>{todos}</p>
        <div className="flex">
          <button>
            <CheckIcon />
          </button>

          <button>
            <DeleteIcon />
          </button>
        </div>
      </div>
    </li>
  );
};

export default Todo;
