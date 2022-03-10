import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ItemAmountSelector from '../ItemAmountSelector/ItemAmountSelector';
import { CardActionArea } from '@mui/material';
import "./item.css"

export default function Item(props) {

  const onAdd = (selectedAmount) => {
    props.onAdd(
      {
        "itemName": props.title,
        "itemAmount": selectedAmount
      }
    )
  }
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardActionArea>
        <Typography
          className={props.stock === 0 ? "noStock" : "stockAvailable"}
        >SIN STOCK</Typography>
        <CardMedia
          component="img"
          height="140"
          image={props.image}
          alt={props.altImg}
        />
        <CardContent>

          <Typography
            gutterBottom
            variant="h5"
            component="div"
          >{props.title}</Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            className="paragraph"
          >{props.paragraph}</Typography>

        </CardContent>

      </CardActionArea>
      <ItemAmountSelector
        initialValue={0}
        stock={props.stock}
        onAdd={onAdd}
      />
    </Card>
  )
}
