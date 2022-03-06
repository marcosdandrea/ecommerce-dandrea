import { useEffect, useState } from 'react'
import Item from './Item'
import { getFetch } from '../../data/Database'
import itemList from './itemList.css'

export default function ItemListContainer(props) {

    const [prods, setProds] = useState([])

    useEffect(() => {
        getFetch
            .then((res) => { setProds(res) })
    }, [])

    const onAdd = (selectedAmount) =>{
        props.onAdd(selectedAmount)
    }

    {
        if (prods.length == 0) {
            return(
                <div>Loading...</div>
            )
        } else {
            return (
                <div className="itemListContainer">
                    {prods.map((prod) => {
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
    }

}
