import React from "react";

const AddTransaction = () => {
  return (
    <div>
      <h3>Add new transaction</h3>
      <form id="form">
        <div className="form-control">
          <label htmlfor="text">Text</label>
          <input type="text" placeholder="Enter text..." />
        </div>
        <div class="form-control">
          <label htmlfor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input type="number" placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;
