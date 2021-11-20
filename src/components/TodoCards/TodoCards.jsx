import "./TodoCards.scss";
import Card from "react-bootstrap/Card";

export default function TodoCards({ todoList }) {
  return (
    <div className="px-4">
      {todoList.map((todo) => (
        <div className="my-3" key={todo.id}>
          <Card body>{todo.text}</Card>
        </div>
      ))}
    </div>
  );
}
