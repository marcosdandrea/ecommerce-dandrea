import { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { getFetch } from '../../data/Database'

export default function ItemListContainer(props) {

    const [prods, setProds] = useState([])

    useEffect(() => {
        getFetch
            .then((res) => { setProds(res) })
    }, [])

    const onAdd = (selectedAmount) => {
        props.onAdd(selectedAmount)
    }

    if (prods.length == 0) {
        return (<div>Loading...</div>)
    } else {
        return (
            <ItemList
                onAdd={onAdd} 
                prods={prods}
            >

            </ItemList>
        )
    }


}
