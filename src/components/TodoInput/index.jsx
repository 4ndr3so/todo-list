import React, { useState } from 'react'
import { useCallback } from 'react'
import { connect } from 'react-redux'

const TodoInput = ({addItem}) => {
    const [value,setValue]=useState("")

    const onSubmit =useCallback(
        (e) => {
            e.preventDefault()
            addItem(value)

            setValue("")
        },
        [setValue,value,addItem],
    )
    return (
        <form onSubmit={onSubmit}>
                <input vlaue={value} onChange={e=>setValue(e.target.value)}></input>
                <button>Agregar Item</button>
        </form>
    )
}

const mapDistpath=dis=>{
    return ({
        addItem:(value)=>dis({type:"ADD_ITEM",payload: {item:value}})
    })
}

export default connect(null,mapDistpath)(TodoInput)
