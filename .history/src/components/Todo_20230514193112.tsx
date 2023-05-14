const Todo = ({ todos }: { todos: "string" }) => {
  return (
    <li>
      <div>
        <p>{todos}</p>
      </div>
    </li>
  );
};

export default Todo;
