interface TodoProps {
  todos: "string";
}

const Todo = ({ todos }: "string") => {
  return (
    <li>
      <div>
        <p>{todos}</p>
      </div>
    </li>
  );
};

export default Todo;
