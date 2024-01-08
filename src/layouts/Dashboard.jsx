import React from "react";
import Categories from "./Categories";
import ProductList from "../pages/ProductList";
import { GridRow, GridColumn, Grid } from "semantic-ui-react";
import { Route, Routes } from "react-router-dom";
import ProductDetail from "../pages/ProductDetail";
import CartDetail from "../pages/CartDetail";

function Dashboard() {
  return (
    <div>
      <Grid>
        <GridRow>
          <GridColumn width={4}>
            <Categories />
          </GridColumn>
          <GridColumn width={12}>
            <Routes>
              <Route exact path="/" element={<ProductList/>} />
              <Route exact path="/products/:id" element={<ProductDetail/>} />
              <Route exact path="/cart" element={<CartDetail/>} />
            </Routes>
          </GridColumn>
        </GridRow>
      </Grid>
    </div>
  );
}

export default Dashboard;
