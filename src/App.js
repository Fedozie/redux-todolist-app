import React, { useEffect } from "react";
import "./index.css";
import InputField from "./components/InputField";
import TodosList from "./components/TodosList";
import { deleteAll, persistTodos } from "./components/redux/action/addTodos.action";
import { connect } from "react-redux";

const App = ({ deleteAll, persistTodos }) => {
  useEffect(() => {
    persistTodos();
  }, [persistTodos]);
  return (
    <div className="App">
      <h1> Todolist App</h1>
      <InputField />
      <TodosList />
      <div>
        <p className="alert">To edit each todo, click on the todo.</p>
        <button
          style={{ marginTop: "20px", cursor: "pointer" }}
          onClick={deleteAll}
        >
          {" "}
          Delete All
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  deleteAll: () => dispatch(deleteAll()),
  persistTodos: () => dispatch(persistTodos())
});
export default connect(
  null,
  mapDispatchToProps
)(App);