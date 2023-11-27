import { useState } from "react";

import modal from "./modal.module.css";

export default function AddUserModal({ closeModal }: any) {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    verifyPassword: "",
  });

  const handleChange = (e: any) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const isValidUsername = async (username: any) => {
    // Must only contain letters and be at least 5 chars
    const regex = /^[A-Za-z]{5,}$/;
  };

  return (
    <div className={modal.main}>
      <div className={modal.vertical}>
        <h1 className="h2">Add User</h1>
        <button onClick={() => closeModal(false)}> close </button>
        <div className={modal.form}>
          <label>Name</label>
          <input className={modal.input} type="text" />
          <label>Desired Salary</label>
          <input className={modal.input} type="text" />
          <label>Position Type</label>
          <input className={modal.input} type="text" />
          <label>Location</label>
          <input className={modal.input} type="text" />
          <label>Skills</label>
          <input className={modal.input} type="text" />
          <label>LinkedIn Experience</label>
          <input className={modal.input} type="textarea" />
          <label>Google Meet Link</label>
          <input className={modal.input} type="text" />
          <button>Add User</button>
        </div>
      </div>
    </div>
  );
}
