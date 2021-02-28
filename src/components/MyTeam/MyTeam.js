import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const MyTeam = (props) => {
  const budget = props.salary;
  const count = props.count;
  let total = 0;
  for (let i = 0; i < budget.length; i++) {
    const newBudget = parseFloat(budget[i]);
    total = total + newBudget;
  }
  return (
    <div className="w-50 bg-info my-5 mx-auto text-center">
      <h2 className="text-warning">Kolkata Knight Riders</h2>
      <h6>Total Players: {count.length}</h6>
      <h5>Players Name:</h5>
      <div className="w-50 mx-auto">
        <ol>
          {count.map((name) => (
            <li>{name}</li>
          ))}
        </ol>
      </div>

      <h5 className="text-warning pb-2">Total Budget: ${total}</h5>
    </div>
  );
};

export default MyTeam;
