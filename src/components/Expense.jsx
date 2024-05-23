import React, { useState } from 'react'
import Form from './Form'
import Headers from './Header'
import ExpensItem from './ExpensItem'
import Chart from './chart/Chart'
import styled from 'styled-components'

const expenses = [
  // {
  //   title : 'Taxi',
  //   price : 500,
  //   id : '1s'
  // },
  // {
  //   title : 'obed',
  //   price : 500,
  //   id : '2s'
  // }
]
function Expense() {
    const [form , setForm] = useState(false)
    const [products , setProducts] = useState(expenses)
    const [filterDate , setFilterDate] = useState("2024")
    console.log(filterDate);

    const showHandle = () => {
      setForm(true)
    }
    const closeHandle = () => {
      setForm(false)
    }

    const getObj = (obj) => {
      setProducts([...products, obj])
    }


    const selectValue = (e) =>{
      setFilterDate(e.target.value)
    }


    const totalExpense = products.reduce((a,el)=>{
      return a + +el.price;
    }, 0);


    const filteredByYear = products.filter((el)=>{
      const year = el.date.getFullYear() 
      return year === +filterDate
    })


    const totalThisExpense = filteredByYear.reduce((a,el)=>{
      return a + +el.price;
    }, 0);



  return (
    <div>
        <Headers onShowHandle = {showHandle} />
        <br />
       { form === true ? <Form onGetObj = {getObj} onCloseHandle = {closeHandle}/> : '' }
       <br /><br /><br />
          <Chart product = {filteredByYear}/>
          <br />
          <Select onChange={selectValue}>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
          </Select>
       {
        filteredByYear.map((el)=>(
          
          <ExpensItem  key = {el.id}  title = {el.title} price = {el.price} date = {el.date}/>
        ))
       }
        <h1>Итого This Year: {totalThisExpense}</h1>
        <h1>Итого All Year: {totalExpense}</h1>
    </div>
  )
}

export default Expense

const Select = styled.select`
  padding: 15px;
  border-radius: 5px;
`