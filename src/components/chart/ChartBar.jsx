import React from 'react'
import styled from 'styled-components'

function ChartBar(props) {

    const expense = 20000

    const prosent = props.rashod*100/expense

  return (
    <ChartbarStyl>
        <Shkala>
            <InnerShkala style={{height: prosent + '%'}}></InnerShkala>
        </Shkala>
        <span>{props.month}</span>
    </ChartbarStyl>
  )
}

export default ChartBar

const ChartbarStyl = styled.div`
    display: inline-block;
    color: white;
`

const Shkala = styled.div`
    border: 1px solid;
    width: 3.5em;
    height: 15em;
    display: flex;
    flex-direction: column-reverse;
    background-color: white;
    border-radius: 2.5em;
    overflow : hidden;
    border: none;
`

const InnerShkala = styled.div`
    background-color: red;
`