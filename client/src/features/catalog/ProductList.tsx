import { Product } from "../../app/models/product";
import ProductCard from "./ProductCard";
import Grid from '@mui/material/Grid2';

interface Props {
    products: Product[];
}

function ProductList({ products }: Props) {
    return (
        /**
         * <Grid container spacing={4}>: Grid system, divide page into 12 columns. The space of child item is 4.
         * <Grid size={3}>: A child item of grid container. Every item occupies 3/12 columns.
         */
        <Grid container spacing={4}>
            {products.map((product) => (
                <Grid size={3} key={product.id}>
                    <ProductCard product={product} />
                </Grid>
            ))}
        </Grid>
    )
}

export default ProductList