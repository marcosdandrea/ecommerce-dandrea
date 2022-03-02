import { useEffect, useState } from 'react'
import Item from './Item'
import { getFetch } from '../../data/Database'
import itemListContainer from './itemListContainer.css'

export default function ItemListContainer() {

    const [prods, setProds] = useState([])

    useEffect(() => {
        getFetch
            .then((res) => { setProds(res) })
    }, [])

    console.log(prods)

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
                            <Item key={prod.id} title={prod.title} paragraph={prod.paragraph} image={prod.image} altImg={prod.altImg} />
                        )
                    })}
                </div>
            )
        }
    }

}
