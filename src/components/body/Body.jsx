import Box from '@mui/material/Box';
import ItemCount from './ItemCount';
import ItemListContainer from './ItemListContainer';

const shopItems = ["item 1", "item 2", "item 3", "item 4", "item 5"];

export default function Body({ changeAmount }){

    return (
    <Box
        sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100vw',
            height: '100vh'
        }}
    >
        <ItemCount stock={5} changeAmount={changeAmount}/> 
        <ItemListContainer/>
    </Box>
    )   
}