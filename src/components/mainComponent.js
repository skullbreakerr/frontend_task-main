import React, { useEffect, useState } from "react";
import InputHandler from "./commonInput";
import SimpleTable from "./simpleTable";

function MainComponent(props) {
  const { getUsers, userState, addUser, deleteUser, editUser } = props;

  const [editMode,setEditMode] = useState(false)
  const [editingUser, setEditingUser] = useState(null);
  const handleSubmit = ({ name, email }) => {
    addUser({ name, email });
  };

  const handleDelete = (id)=>{
    const permission = confirm("Are you sure you want to delete ?");
    if(permission){
      deleteUser(id);
    }
  }
  
  const handleEdit = (payload)=>{
    setEditMode(prev=> !prev);
    setEditingUser(payload);
  } 
  const onEdit = (payload) =>{
    editUser(payload);
  }
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div id="main-container-wrapper">
      <InputHandler onSubmit={handleSubmit} onEdit={onEdit} setEditMode={setEditMode} editing={editingUser} editMode={editMode} />
      <SimpleTable dataSource={userState.users} onDelete={handleDelete} onGetID={handleEdit} />
    </div>
  );
}

export default MainComponent;
