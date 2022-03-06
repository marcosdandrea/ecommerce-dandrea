import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ItemAmountSelector from './ItemAmountSelector/ItemAmountSelector';
import { CardActionArea } from '@mui/material';
import "./item.css"

export default function Item(itemProperties) {

  const onAdd = (selectedAmount) => {
    itemProperties.onAdd(
      {
        "itemName": itemProperties.title,
        "itemAmount": selectedAmount
      }
    )
  }

  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardActionArea>
        <Typography
          className={itemProperties.stock === 0 ? "noStock" : "stockAvailable"}
        >SIN STOCK</Typography>
        <CardMedia
          component="img"
          height="140"
          image={itemProperties.image}
          alt={itemProperties.altImg}
        />
        <CardContent>

          <Typography
            gutterBottom
            variant="h5"
            component="div"
          >{itemProperties.title}</Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            className="paragraph"
          >{itemProperties.paragraph}</Typography>

        </CardContent>

      </CardActionArea>
      <ItemAmountSelector
        initialValue={0}
        stock={itemProperties.stock}
        onAdd={onAdd}
      />
    </Card>
  )
}
