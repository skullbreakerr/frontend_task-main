import React, { useEffect, useState } from "react";

const InputHandler = ({ onSubmit, editMode,editing ,onEdit,setEditMode}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(()=>{
    if (editMode) {
      setEmail(editing.email);
      setName(editing.name);
    }
    else{
      setEmail("")
      setName("")
    }
  },[editMode])

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) return;  
    if(editMode){
      onEdit({name,email, id: editing.id});
      setEmail("");
      setName("");
      setEditMode(!editMode);
    }
    onSubmit({ name, email });
    setEmail("");
    setName("");
  };

  return (
    <div className="header-box">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <button type="primary" onClick={handleSubmit}>
        {editMode ? "Edit user" : "Add user"}
      </button>
    </div>
  );
};

export default InputHandler;
