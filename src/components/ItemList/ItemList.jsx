import React from 'react'
import { useState } from 'react'
import Item from '../Item/Item'
import './itemList.css'
export default function ItemList(props) {
    
    const onAdd = (selectedAmount) => {
        props.onAdd(selectedAmount)
    }

    return (
        <div className="itemList">
            {props.prods.map((prod) => {
                return (
                    <Item
                        key={prod.id}
                        title={prod.title}
                        paragraph={prod.paragraph}
                        image={prod.image}
                        altImg={prod.altImg}
                        stock={prod.stock}
                        onAdd={onAdd}
                    />
                )
            })}
        </div>
    )
}
