import "./menu.css";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import StyledBadge from '../../../assets/badge'


const menuItems =
    [
        { itemName: "Home", Action: "home" },
        { itemName: "Products", Action: "products" },
        { itemName: "Sale", Action: "sale" },
        { itemName: "Profile", Action: "profile" }
    ]

const buildMenu = (itemName) => {
    return (
        itemName.map((item) => {
            return (

                <div className="menuItem" key={item.Action}>
                    <Typography variant="button" display="block" gutterBottom>
                        <strong>
                            {item.itemName}
                        </strong>
                    </Typography>
                </div>

            )
        })
    )
}

export default function Menu({ itemsAmount }) {
    const Items = buildMenu(menuItems);
    return (

        <Box id="menu"
            width={{
                xs: "fit-content",
                sm: "fit-content",
                md: "100%"
            }}
        >
            {/* Desktop */}
            <Box
                sx=
                {{
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: "100%",
                }}
                display=
                {{
                    xs: "none",
                    sm: "none",
                    md: "flex"
                }}>

                <div className="menu">
                    {Items}
                </div>
            </Box>

            {/* Mobile */}

            <Box
                sx=
                {{
                    position: "absolute",
                    width: "fit - content",
                    right: 0,
                    marginRight: "1em",
                }}
                display=
                {{
                    xs: "flex",
                    sm: "flex",
                    md: "none"
                }}>


                <IconButton>
                    <StyledBadge badgeContent={itemsAmount} color="success">
                        <MenuIcon />
                    </StyledBadge>
                </IconButton>
            </Box>

        </Box>


    )
}