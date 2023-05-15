import AddCircleIcon from "@mui/icons-material/AddCircle";

const Form = () => {
  return (
    <form className="flex justify-between bg-teal-300 p-4 rounded-lg items-center">
      <input className="w-full text-lg rounded-lg p-[3px]" type="text" placeholder="Plans for today" />
      <button className="ml-2 p-1 bg-gray-700 px-3 rounded-lg text-white">
        <AddCircleIcon />
      </button>
    </form>
  );
};

export default Form;
