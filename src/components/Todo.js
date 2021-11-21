import React from "react";
import { connect } from "react-redux";
import { deleteTodo, editTodo } from "./redux/action/addTodos.action";

const Todo = ({ todo, idx, deleteTodo, editTodo, selected, text }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        border: "1px solid black",
        padding: "5px",
        cursor: "pointer",
        marginTop: '5px',
        fontSize: '1.3rem'
      }}
    >
      <div onClick={() => editTodo(idx)}>{selected === idx ? text : todo}</div>
      <div style={{
           cursor: "pointer",
           color: '#E01313',
           fontSize: '1.3rem'
           }} onClick={() => deleteTodo(idx)}>
        x
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  deleteTodo: key => dispatch(deleteTodo(key)),
  editTodo: key => dispatch(editTodo(key))
});

const mapStateToProps = ({ text, selected }) => ({
  text,
  selected
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);