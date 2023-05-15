import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";

interface TodoProps {
  todos: string;
}

const Todo = ({ todos }: TodoProps) => {
  return (
    <li>
      <div className="flex items-center justify-between">
        <p>{todos}</p>
        <div>
          <CheckIcon />
          <DeleteIcon />
        </div>
      </div>
    </li>
  );
};

export default Todo;
