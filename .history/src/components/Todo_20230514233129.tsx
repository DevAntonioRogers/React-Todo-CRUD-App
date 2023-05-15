import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";

interface TodoProps {
  todos: string;
}

const Todo = ({ todos, toggleComplete }: TodoProps) => {
  return (
    <li className="p-2 bg-teal-300 my-2 rounded-md uppercase shadow-sm">
      <div className="flex items-center justify-between">
        <p
          className={
            todos.completed ? "text-gray-700 cursor-pointer line-through opacity-20" : "text-gray-700 cursor-pointer"
          }
        >
          {todos.text}
        </p>
        <div className="flex gap-3">
          <button onClick={() => toggleComplete(todos)}>
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
