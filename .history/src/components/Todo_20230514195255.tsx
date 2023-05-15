import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";

interface TodoProps {
  todos: string;
}

const Todo = ({ todos }: TodoProps) => {
  return (
    <li className="p-2 ">
      <div className="flex items-center justify-between w-3/4 m-auto bg-teal-700">
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
