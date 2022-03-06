import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Box from '@mui/material/Box';
import StyledBadge from '../../../assets/badge'

export default function CartButton(props) {


  const countItemsInCart = () => {
    let acumulator = 0;
      props.itemsInCart.forEach(item => {
        acumulator += item.itemAmount;
      })
      return(acumulator)
  }


  return (
    <Box
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: '3em'
      }}
      display={{
        xs: "none",
        sm: "none",
        md: "flex"
      }}
    >
      <IconButton aria-label="cart">
        <StyledBadge badgeContent={countItemsInCart()} color="success">
          <ShoppingCartIcon />
        </StyledBadge>
      </IconButton>
    </Box>
  );
}