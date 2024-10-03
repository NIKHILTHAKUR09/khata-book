import React, { useEffect, useState } from "react";

const Form = ({ addTransaction , edit , updateTransaction }) => {


const [text, setText] = useState("");
const [amount, setAmount] = useState("");



  const handleSubmit = (e) => {
    e.preventDefault();
    edit.isEdit ? updateTransaction({
      id:edit.transaction.id,
      text:text,
      amount:+amount
    }) : addTransaction(text, amount);
    setText(""),
    setAmount("")

  };

  useEffect(()=>{
setText(edit.transaction.text);
setAmount(edit.transaction.amount)
  },[edit])
  return (
    <>
      <div className="card p-3 my-3 d-flex">
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="number"
            placeholder="Enter Amount"
            className="form-control my-3 w-50"
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
            required
          />
          <input
            type="text"
            placeholder="Enter Transaction"
            className="form-control my-3 w-50"
            onChange={(e) => setText(e.target.value)}
            value={text}
            required
          />
          <button className="btn btn-success w-100">Save Transaction</button>
        </form>
      </div>
    </>
  );
};

export default Form;
