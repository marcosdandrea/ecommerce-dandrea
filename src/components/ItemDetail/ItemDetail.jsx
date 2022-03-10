import React from 'react'
import { Typography, Stack, CardMedia, Paper } from '@mui/material';
import './itemDetail.css'

export default function ItemDetail(props) {

    const currentItem = props.itemData;

    return (

        <Stack
            direction="column"
            spacing={2}
            className="itemDetail"
        >
            <Typography
                variant="h4"
                component="h2"
                className="header"
            >Detalles del Producto</Typography>
            <CardMedia
                component="img"
                width="100%"
                height="100%"
                image={currentItem.image}
                alt={currentItem.altImg}
            />
            <Stack
                direction="column"
                spacing={2}
            >
                <Stack
                    direction="row"
                    spacing={2}
                    alignItems="center"
                    justifyContent="space-around"
                    className="productTitle"
                >
                    <Typography
                        className="productName"
                    >{currentItem.title}</Typography>
                    <Typography
                        className="productPrice"

                    >$  {currentItem.price}</Typography>

                </Stack>
                <Stack
                    direction="column"
                    spacing={2}
                >
                    <Typography
                        component="p"
                    >{currentItem.paragraph}</Typography>
                </Stack>
            </Stack>
        </Stack>

    )
}
