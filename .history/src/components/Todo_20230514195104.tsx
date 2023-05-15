import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";

interface TodoProps {
  todos: string;
}

const Todo = ({ todos }: TodoProps) => {
  return (
    <li>
      <div className="flex items-center justify-between w-2/4">
        <p>{todos}</p>
        <div className="flex">
          <CheckIcon />
          <DeleteIcon />
        </div>
      </div>
    </li>
  );
};

export default Todo;
