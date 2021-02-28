import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const PlayerList = (props) => {
  const { name, photo, salary } = props.players;
  const clickHandler = props.clickHandler;

  return (
    <div className="border border-warning w-75 rounded mx-auto my-2 text-center">
      <img
        style={{ height: "150px", width: "150px" }}
        className="img-thumbnail mt-1 w-50"
        src={photo}
        alt=""
      />
      <h4>Name: {name}</h4>
      <h5>Salary: ${salary}</h5>
      <button
        type="button"
        className="m-2 btn btn-primary"
        onClick={() => clickHandler(name, salary)}
      >
        <FontAwesomeIcon icon={faPlus} /> Add Me
      </button>
    </div>
  );
};

export default PlayerList;
