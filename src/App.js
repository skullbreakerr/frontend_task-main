import React from "react";
import "./assets/css/style.css";
import { connect } from "react-redux";
import MainComponent from "./components/mainComponent";
import { addUser, deleteUser, editUser, getUsers } from "./actions/userActions";

function App(props) {
  return (
    <div>
      <MainComponent {...props} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = {
  getUsers,
  addUser,
  deleteUser,
  editUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
