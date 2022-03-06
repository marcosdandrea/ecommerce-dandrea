import Navbar from "./navbar/navbar.jsx"

export default function Header(props){

    return (
        <Navbar 
        itemsInCart={props.itemsInCart}/>
    )
}
