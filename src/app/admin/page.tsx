"use client";

import { FaPlus } from "react-icons/fa";
import { useState } from "react";

import AddUserModal from "../modals/AddUserModal";

export default function Admin() {
  const [modal, setModal] = useState(false);

  return (
    <div className="vertical-content">
      <div className="add-user">
        <button
          onClick={(e) => {
            e.preventDefault();
            setModal(true);

            // if data inputs are valid
            // send data to server

            // then
            // emit event to server
            console.log("event user created");

            // catch error
            // emit error event to server
          }}
        >
          <FaPlus />
        </button>
      </div>
      {modal ? <AddUserModal closeModal={setModal} /> : null}
    </div>
  );
}
