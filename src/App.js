import logo from "./logo.svg";
import "./App.css";
import AddTodo from "./components/todo/AddTodo";
import Todos from "./components/todo/Todos";

function App() {
  return (
    <div className="App">
      <h2 className="mt-10 space-x-3 ">
        Deputy Director (Admin), Head Office, Patiala
      </h2>
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;
