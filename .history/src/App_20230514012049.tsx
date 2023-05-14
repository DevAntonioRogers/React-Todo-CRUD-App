import Form from "./components/Form";

const App = () => {
  return (
    <div className="h-screen w-screen p-4 bg-teal-700">
      <div className="bg-slate-200 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 p-2">A DEV'S TODO LIST</h1>
        <Form />
      </div>
    </div>
  );
};

export default App;
