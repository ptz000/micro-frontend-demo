import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ErrorBoundary from "../../components/ErrorBoundary";

const Products = React.lazy(
  // @ts-ignore
  () => import("PRODUCTS/ProductsList")
);
const Cart = React.lazy(
  // @ts-ignore
  () => import("CART/Cart")
);

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, textAlign: "center" }}
          >
            Shop Name
          </Typography>
          <ErrorBoundary>
            <React.Suspense fallback="Loading Cart...">
              <Cart />
            </React.Suspense>
          </ErrorBoundary>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export const Product = () => {
  return (
    <div style={{ margin: "10px", border: "1px solid black" }}>
      <Header />
      <h1>Products</h1>
      <div>
        <ErrorBoundary>
          <React.Suspense fallback="Loading Products...">
            <Products />
          </React.Suspense>
        </ErrorBoundary>
      </div>
    </div>
  );
};

export default Product;
