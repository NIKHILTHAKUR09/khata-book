import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Dash from "./components/Dash";
import List_group from "./components/List_group";

import { useState } from "react";

function App() {
  const [transaction, settransaction] = useState([
    {
      id: 1,
      text: "Salary",
      amount: 100000,
    },
    {
      id: 2,
      text: "Expense",
      amount: -15000,
    },
  ]);

  const [edit, setEdit] = useState({
    transaction: {},
    isEdit: false,
  });

  // delete transaction

  const deleTetransaction = (id) => {
    settransaction(transaction.filter((item) => item.id !== id));
  };

  // add transaction
  const addTransaction = (text, amount) => {
    settransaction([
      {
        id: crypto.randomUUID(),
        text,
        amount: parseInt(amount),
      },
      ...transaction,
    ]);
  };

  const editTransaction = (transaction) => {
    setEdit({
      transaction: transaction,
      isEdit: true,
    });
  };
  

  // updatetransaction
  const updateTransaction = (updateTransaction) => {
settransaction(transaction.map((item)=> item.id === updateTransaction.id ? updateTransaction : item))
setEdit({
  transaction:{},
  isEdit:false
})
  }
  return (
    <>
      <Navbar />

      <div className="container p-5">
        <Form
          updateTransaction={updateTransaction}
          edit={edit}
          addTransaction={addTransaction}
        />

        <div className="d-flex">
          <Dash transaction={transaction} />
          <List_group
            transaction={transaction}
            deleteTransaction={deleTetransaction}
            editTransaction={editTransaction}
          />
        </div>
      </div>
    </>
  );
}

export default App;
