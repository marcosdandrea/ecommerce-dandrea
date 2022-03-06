import Box from '@mui/material/Box';

import ItemList from '../Item/ItemList';

const shopItems = ["item 1", "item 2", "item 3", "item 4", "item 5"];

export default function HomeSection(props){

    const onAdd = (selectedAmount) => {
        props.onAdd(selectedAmount)
    }

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
        
        <ItemList onAdd={onAdd}/>
    </Box>
    )   
}