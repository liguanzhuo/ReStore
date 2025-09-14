import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material"
import { Product } from "../../app/models/product"
import { Link } from "react-router-dom";

interface Props {
    product: Product;
}

function ProductCard({ product }: Props) {
    return (
        /**
         * <Card>: This is a MUI component. Used to show the brief product information.
         */
        <Card>
            {/**
             * avatar is add a picture for the card.
             * slotProps: Add customized style to child part of a component.
             */}
            <CardHeader avatar={
                <Avatar sx={{bgcolor:'secondary.main'}}>
                    {product.name.charAt(0).toUpperCase()}
                </Avatar>
            }
                title={product.name}
                slotProps={{
                    title: {
                        sx: { fontWeight: 'bold', color: 'primary.main' }
                    }
                }}
            />

            <CardMedia
                sx={{ height: 140, backgroundSize: "contain", bgcolor:'primary.light' }}
                image={product.pictureUrl}
                title={product.name}
            />

            {/**
             * <Typography>: Text component.
             */}
            <CardContent>
                <Typography gutterBottom color="secondary" variant="h5">
                    ${(product.price / 100).toFixed(2)}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {product.brand} / {product.type}
                </Typography>
            </CardContent>

            <CardActions>
                <Button size="small">Add to cart</Button>
                <Button component={Link} to={`/catalog/${product.id}`} size="small" >View</Button>
            </CardActions>
        </Card>
    )
}

export default ProductCard