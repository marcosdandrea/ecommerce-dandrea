import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

import Button from '@mui/material/Button';

export default function ItemCount({ stock, changeAmount }) {
    const stockAmount = stock || 0;

    let [itemsAmount, setItemsAmount] = useState(0);

    function addItemsToCart() {
        if (itemsAmount == stockAmount) return
        setItemsAmount(itemsAmount + 1);
        changeAmount(itemsAmount+1)
    }

    function substractItemsToCart() {
        if (itemsAmount == 0) return
        setItemsAmount(itemsAmount - 1);
        changeAmount(itemsAmount-1)
    }

    return (
        <Card sx={{ minWidth: 275, maxWidth: "50%" }}>
            <CardContent>
                <Stack direction="column" spacing={2}>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Add or substract elements to your cart.
                    </Typography>
                    <Stack direction="row" spacing={2}>
                        <Button
                            variant="contained"
                            color="success"
                            disabled={itemsAmount==stockAmount}
                            startIcon={<AddShoppingCartIcon />}
                            onClick={addItemsToCart}>
                            add
                        </Button>

                        <Button
                            variant="contained"
                            color="error"
                            startIcon={<RemoveCircleOutlineIcon />}
                            disabled={itemsAmount==0}
                            onClick={substractItemsToCart}>
                            substract
                        </Button>
                    </Stack>
                    <Typography variant="overline" component="div">
                        total items: {itemsAmount}
                    </Typography>
                </Stack>
            </CardContent>
        </Card>
    )
}
