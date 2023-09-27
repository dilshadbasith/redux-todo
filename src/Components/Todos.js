import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodos,editTodos,saveTodos } from "../redux/Reducers/TodoReducer";

function Todos() {
  const Todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();
  const todoRef = useRef();
  const save = (id) => {
    const editedTodo = todoRef.current.value;
    dispatch(saveTodos({ id: id, value: editedTodo }));
  };

  return (
    <div>
      {Todos.map((todo, index) => (
        <div className="list-item" key={index}>
          {todo.editkey ? (
            <p>
              {todo.value}&nbsp;
              <button onClick={()=>dispatch(editTodos(todo.id))}>✒</button>&nbsp;
              <button onClick={() => dispatch(deleteTodos(todo.id))}>❌</button>
            </p>
          ) : (
            <div>
              <input type="text" ref={todoRef} placeholder={todo.value} />{" "}
              <button type="button" onClick={() => save(todo.id)}>
                Save
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Todos;
