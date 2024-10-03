import React from 'react'

const List_group_item = ({transaction , deleteTransaction , editTransaction}) => {
  return (
    <>
       <li className={transaction.amount > 0  ? "list-group-item bg-success text-light my-2" : "list-group-item bg-danger text-light my-2"}>
  <h2>{transaction.text} : {transaction.amount}</h2>
  <button onClick={()=> editTransaction(transaction)} className='btn btn-warning btn-sm my-1 float-start'>Edit</button>
  <button onClick={()=> deleteTransaction(transaction.id)}  className='btn btn-outline-light btn-sm my-1 float-end'>Delete</button>
</li>

  


    </>
  )
}

export default List_group_item