interface TodoProps {
  todos: "string";
}

const Todo = ({ todos }: TodoProps) => {
  return (
    <li>
      <div>
        <p>{todos}</p>
      </div>
    </li>
  );
};

export default Todo;
