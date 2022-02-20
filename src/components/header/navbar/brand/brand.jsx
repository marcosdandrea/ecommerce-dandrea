import Box from '@mui/material/Box';
import brand from './media/companyLogo.svg'

import "./style.css"

export default function BrandLogo(){
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center'
            }}
        >
        <img src={brand} className="brandStyle" alt="Boring Company Logo" />
        </Box>
    )
}