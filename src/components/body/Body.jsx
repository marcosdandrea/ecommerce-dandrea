import ShoppingList from './ShoppingList';
import Box from '@mui/material/Box';

const shopItems = ["item 1", "item 2", "item 3", "item 4", "item 5"];

export default function Body(){
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
        <ShoppingList shopItems={shopItems}/>
    </Box>
    )   
}