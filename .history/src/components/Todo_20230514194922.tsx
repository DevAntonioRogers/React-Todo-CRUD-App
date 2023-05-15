interface TodoProps {
  todos: string;
}

const Todo = ({ todos }: TodoProps) => {
  return (
    <li>
      <div className="flex items-center justify-between">
        <p>{todos}</p>
        <div></div>
      </div>
    </li>
  );
};

export default Todo;
