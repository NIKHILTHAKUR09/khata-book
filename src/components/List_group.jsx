import React from "react";
import List_group_item from "./List_group_item";

const List_group = ({transaction,  deleteTransaction , editTransaction}) => {
  return (
    <>
      <div className="g-2 col-6 g-3">
        <div className="card p-3">
          <h1 className="text-secondary text-center"> All Transaction :</h1>
          <ul className="list-group my-3">
            {transaction.map((transaction) => (
              <List_group_item editTransaction={editTransaction} key={transaction.id}  deleteTransaction={deleteTransaction} transaction={transaction}/>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default List_group;
