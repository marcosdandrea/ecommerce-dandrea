import CartButton from "./btnShop/btnShop.jsx";
import Box from '@mui/material/Box';
import BrandLogo from './brand/brand'
import Menu from './menu/menu'

export default function Navbar (props){
    return(

    <Box 
      sx={{
        width: "100vw",
        height: "3em",
        backgroundColor: 'primary.dark',
        padding: "0.5em",
        display: "flex", 
        userSelect: "none", 
      }}
      justifyContent = {{
        xs: "center",
        sm:"center",
        md:"space-between"        
      }}>   

      <BrandLogo/>
      <Menu/>
      <CartButton 
      itemsInCart={props.itemsInCart}/>

    </Box> 

    )
}

 