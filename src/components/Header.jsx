import React from 'react'
import styled from 'styled-components'

function Headers(props) {
  return (
    <Hed>
        <h1>IT-DOOR</h1>
        <button onClick={props.onShowHandle}>ADD PRODUCTS</button>
    </Hed>
  )
}

export default Headers

const Hed = styled.header`
    background-color: bisque;
    padding:20px ;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: rgb(63,94,251);
background: radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(17,3,6,1) 100%);
    button {
      padding: 10px 20px;
      border-radius: 10px;
      border: none;
      background-color: #2828fca4;
      cursor: pointer;
      color: white;
  }
  button:hover{
    background-color: #0000ff9e ;
  }
    
`