import "./App.scss";
import Header from "./components/Header/Header";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import TodoCards from "./components/TodoCards/TodoCards";
import todoService from "./services/todo.service";

function App() {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);

  const handleInputChange = (e) => {
    setTodoInput(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    todoService.addTodos(todoInput).then((response) => {
      setTodos([...todos, response]);
      setTodoInput("");
    });
  };

  useEffect(() => {
    todoService.getTodos().then((response) => {
      setTodos(response);
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <form onSubmit={submitTodoHandler}>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Text Enter"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            onChange={handleInputChange}
            value={todoInput}
          />
          <Button variant="outline-secondary" id="button-addon2" type="submit">
            Submit
          </Button>
        </InputGroup>
      </form>
      <TodoCards todoList={todos} />
    </div>
  );
}

export default App;
