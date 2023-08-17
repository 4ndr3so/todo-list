import React, { useCallback } from 'react'
import TodoItem from "./../TodoItem"
import { connect } from 'react-redux'
const TodoList = ({list,removeItem}) => {
    //const list =[{item:"uno"},{item:"dos"},{item:"tres"}]

    const onClickRemove = useCallback((item) => {
            removeItem(item)
        },[removeItem],
    )
    return (
        <div>
            {list && list.map(i=> <TodoItem key={i.item} {...i} onClickRemove={onClickRemove}></TodoItem>)}
        </div>
    )
}
const mapdisp=dis=>{
    return {removeItem:value =>dis({type:"REMOVE_ITEM",payload:value})}
}
const mapState=state=>{
    return {
        list:state.items}
}
export default connect(mapState,mapdisp)(TodoList)