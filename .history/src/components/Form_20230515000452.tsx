import AddCircleIcon from "@mui/icons-material/AddCircle";

const Form = ({ createTodo, input, setInput }) => {
  return (
    <form onSubmit={createTodo} className="flex justify-between bg-teal-300 p-4 rounded-lg items-center">
      <input value={input} className="w-full text-lg rounded-lg p-[3px]" type="text" placeholder="Plans for today" />
      <button className="ml-2 rounded-lg text-gray-800">
        <AddCircleIcon />
      </button>
    </form>
  );
};

export default Form;
