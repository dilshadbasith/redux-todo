import React from "react";
import { addTodos } from "../redux/Reducers/TodoReducer";
import { useDispatch } from "react-redux";

function Form() {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.add.value;
    dispatch(addTodos(value));
    e.target.reset();
  };

  return (
    <div>
      <form className="form-group custom-form" onSubmit={handleSubmit} required>
        <label>Add your Todo Items</label>
        <div className="input-and-btn">
          <input type="text" className="form-control1" id="add" required />
          <button type="submit" className="btn btn-secondary btn-md">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
