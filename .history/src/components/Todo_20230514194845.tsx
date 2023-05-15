interface TodoProps {
  todos: string;
}

const Todo = ({ todos }: TodoProps) => {
  return (
    <li>
      <div className="flex">
        <p>{todos}</p>
      </div>
    </li>
  );
};

export default Todo;
