import React from 'react'
import ChartBar from './ChartBar'
import styled from 'styled-components'

function Chart(props) {
    const months = [
        {
            month:'Januari',
            rashod: 0,
        },
        {
            month:'Feburary',
            rashod: 0,
        },
        {
            month:'March',
            rashod: 0,
        },
        {
            month:'Aprell',
            rashod: 0,
        },
        {
            month:'May',
            rashod: 0,
        },
        {
            month:'June',
            rashod: 0,
        },
        {
            month:'July',
            rashod: 0,
        },
        {
            month:'Avgust',
            rashod: 0,
        },
        {
            month:'Ceptember',
            rashod: 0,
        },
        {
            month:'Octomber',
            rashod: 0,
        },
        {
            month:'Novomber',
            rashod: 0,
        },
        {
            month:'Dekember',
            rashod: 0,
        },
    ]


    props.product.map((el)=>{
        const month = el.date.getMonth()
        months[month].rashod = +el.price + months[month].rashod
    })



  return (
    <ChartsStyle>
        {months.map((el)=>{
            return <ChartBar key = {el.month} month = {el.month} rashod = {el.rashod}/>
        })}
    </ChartsStyle>
  )
}

export default Chart


const ChartsStyle = styled.div`
    border: 1px solid;
    display: flex;
    justify-content: space-between;
    background-color: #131313ce;
    padding: 2em;
    border-radius: 1em;
    color: white;
`