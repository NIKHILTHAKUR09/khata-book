import React from "react";


const Dash = ({transaction}) => {
 
  const balance = transaction.reduce((p, c) => p + c.amount, 0);
  const income = transaction
    .filter((transaction) => transaction.amount > 0)
    .reduce((p, c) => p + c.amount, 0);
  const expense = transaction
    .filter((transaction) => transaction.amount < 0)
    .reduce((p, c) => p + c.amount, 0);
  return (
    <>
      <div className=" col-6 g-3">
        <div className=" ">
          <div className="card p-5 bg-success my-2">
            <h3>Total Income : </h3>
            <h1>{income}</h1>
          </div>
        </div>
        <div className="">
          <div className="card p-5 bg-danger my-2">
            <h3>Total Expense : </h3>
            <h1>{expense}</h1>
          </div>
        </div>
        <div className="">
          <div className="card p-5 bg-warning my-2">
            <h3>Total Balance : </h3>
            <h1>{balance}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dash;
