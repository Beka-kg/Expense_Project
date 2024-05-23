
import React from 'react'
import styled from 'styled-components'
import DateFormat from './DateFormat';

function ExpensItem(props) {
  console.log(props);
  return (
    <ExpensItemStyle>
        <h1>{props.title}</h1>
        <h2>{props.price}</h2>
        <DateFormat date = {props.date}/>
    </ExpensItemStyle>
  )
}

export default ExpensItem


const ExpensItemStyle = styled.div`
    width: 70%;
    height: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: auto;
    margin-top: 2em;
    border-radius: 10px;
    background: rgb(238,174,202);
background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
`