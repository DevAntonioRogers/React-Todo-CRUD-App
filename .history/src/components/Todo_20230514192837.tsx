const Todo = ({ todo }: {todo}:string) => {
  return (
    <li>
      <div>
        <p>{todo}</p>
      </div>
    </li>
  );
};

export default Todo;
