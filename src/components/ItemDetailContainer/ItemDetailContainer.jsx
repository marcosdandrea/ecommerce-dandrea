import React from 'react'
import { Box } from '@mui/material';
import { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { getFetch } from '../../data/Database'

export default function ItemDetailContainer({ itemID }) {

  const [CurrentItem, setCurrentItem] = useState([])

  useEffect(() => {
    getFetch
      .then((res) => {
        setCurrentItem(res.find(item => item.id === itemID))
      })
  }, [])



  return (
    <Box
      sx={{
        display: 'flex',
        alignSelf: 'center',
        width: '30rem',
        overflow: 'hidden'
      }}
    >
      <ItemDetail
        itemData={CurrentItem}
      />
    </Box>
  )
}
