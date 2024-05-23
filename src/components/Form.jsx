
import React, { useState } from 'react'
import styled from 'styled-components'

function Form(props) {
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [date, setDate] = useState('')

  const textHandler = (el)=>{
    setTitle(el.target.value)
  }

  const numberHandler = (el)=>{
    setPrice(el.target.value)
  }

  const dateHandler = (el)=>{
    setDate(el.target.value)
  }

  const addHandler = ()=>{
    const obj = {
      title: title,
      price,
      id : Math.random(),
      date : date === "" ? new Date() : new Date(date)
    }
    setPrice("")
    setTitle("")
    setDate("")
    props.onGetObj(obj)

  }


  return (
  <FormST>
    <p>Expense</p>
      <input value={title} onChange={textHandler} type="text" />
      <input value={price} onChange={numberHandler} type="number" />
      <input value={date} onChange={dateHandler} type="date" />
    <ButtonContoners>
      <button onClick={props.onCloseHandle}>CLOSE</button>
      <button onClick={addHandler}>ADD</button>
    </ButtonContoners>
  </FormST>
  )
}

export default Form

const FormST = styled.div`
  width: 300px;
  height: 300px;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  padding: 10px 50px;
  margin: auto;
  margin-top: 2em;
  border-radius: 15px;
  background: rgb(238,174,202);
  background: radial-gradient(circle, 
    rgba(238,174,202,1) 0%, 
    rgba(148,187,233,1) 100%);
    
    input {
      width: 100%;
      padding: 10px 10px;
      margin-top: 20px;
      background-color: #ffffff6b ;
      border-radius: 10px;
      border: none;
      cursor: pointer;
  }

`

const ButtonContoners = styled.div`
  display: flex;
  width: 318px;
  justify-content: space-between;
  margin-top: 1em;
  button{
    padding: 8px 25px;
    border: none;
    border-radius: 10px;
    background-color: #2828fca4;
    cursor: pointer;
    color: white;

  }
  button:hover{
    background-color: #0000ff9e ;
  }
`