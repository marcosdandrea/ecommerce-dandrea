import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

export default function ItemCount({ stock, changeAmount }) {
    const _stockAmount = stock || 0;

    let [stockAmount, setStockAmount] = useState(_stockAmount);
    let [selectedItems, setSelectedItems] = useState(0);

    function addItems() {
        setSelectedItems(selectedItems+=1)
        console.log ("Agregando")
    }

    function substractItems() {
        setSelectedItems(selectedItems-=1)
        console.log ("Agregando")
    }

    function addToCart() {
        changeAmount(selectedItems)
        setStockAmount(stockAmount-selectedItems)
        setSelectedItems(0)        
    }


    console.log ("selectedItems", selectedItems)
    console.log ("stockAmount", stockAmount)

    return (
        <Card sx={{ minWidth: 275, maxWidth: "50%" }}>
            <CardContent>
                <Stack direction="column" spacing={2}>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Total items in Stock: {stockAmount}
                    </Typography>
                    <Stack direction="row" spacing={2}>
                        <ButtonGroup disableElevation variant="contained">
                            <Button 
                                disabled={stockAmount<=selectedItems}
                                onClick={()=>{addItems()}}
                                >Add Item
                                </Button>
                            <Button 
                                disabled={selectedItems === 0}
                                onClick={()=>{substractItems()}}
                                >Remove Item
                            </Button>
                        </ButtonGroup>

                    </Stack>
                    <Typography variant="overline" component="div">
                        total items selected: {selectedItems}
                    </Typography>

                    <Button
                        variant="contained"
                        color="success"
                        disabled={selectedItems === 0}
                        startIcon={<AddShoppingCartIcon />}
                        onClick={()=>{addToCart()}}>
                        add to cart
                    </Button>


                </Stack>
            </CardContent>
        </Card>
    )
}
