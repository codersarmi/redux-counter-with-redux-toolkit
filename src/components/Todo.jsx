import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "../Store/reducer/todo";
import "./Todo.css";

const Todo = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.data);
  const isLoading = useSelector((state) => state.todo.isLoading);
  const getTodoHandler = () => {
    dispatch(getTodos());
  };

  return (
    <>
      <button className="todo_btn" onClick={getTodoHandler}>
        Get Todo
      </button>
      <section className="todo_description">
        {isLoading && <p>Getting Todos....</p>}
        {!isLoading && todos.map((todo) => <p>{todo.title}</p>)}
        {!isLoading && todos.length < 1 && (
          <p>Press Get Todo button to get your todos.</p>
        )}
      </section>
    </>
  );
};

export default Todo;
