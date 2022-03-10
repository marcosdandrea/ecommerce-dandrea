import { Box, Stack } from '@mui/material';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
const shopItems = ["item 1", "item 2", "item 3", "item 4", "item 5"];

export default function HomeSection(props) {

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
                overflow: 'hidden'
            }}
        >
            <Stack
                direction="column"
            >
                <ItemListContainer onAdd={onAdd} />
                <ItemDetailContainer
                    itemID={1}
                />
            </Stack>
        </Box>
    )
}