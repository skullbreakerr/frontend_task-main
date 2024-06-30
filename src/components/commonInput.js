import React, { useEffect, useState, useRef } from "react";

const InputHandler = ({ onSubmit, editMode, editing, onEdit, setEditMode }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const emailInput = useRef(null);
  useEffect(() => {
    if (editMode) {
      setEmail(editing.email);
      setName(editing.name);
    }
    else {
      setEmail("")
      setName("")
    }
  }, [editMode])

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (regex.test(email)) {
      emailInput.current.style.borderColor = "green";
      return true;
    }
    if (!regex.test(email)) {
      emailInput.current.style.borderColor = "red";
      return false;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) {
      alert("input email and name cannot be empty !!")
      return;
    };
    const isvalidMail = validateEmail(email)
    if (editMode && isvalidMail) {
      onEdit({ name, email, id: editing.id });
      setEmail("");
      setName("");
      setEditMode(!editMode);
      emailInput.current.style.borderColor = "#ccc";
    }
    else if (isvalidMail) {
      onSubmit({ name, email });
      setEmail("");
      setName("");
      emailInput.current.style.borderColor = "#ccc";
    }
  };

  return (
    <form className="header-box">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        required
      />
      <input
        type="text"
        placeholder="Email"
        ref={emailInput}
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        required
      />
      <button type="primary" onClick={handleSubmit}>
        {editMode ? "Edit user" : "Add user"}
      </button>
    </form>
  );
};

export default InputHandler;
