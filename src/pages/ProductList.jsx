import React, { useEffect, useState } from "react";
import {
  TableRow,
  TableHeaderCell,
  TableHeader,
  TableFooter,
  TableCell,
  TableBody,
  MenuItem,
  Icon,
  Menu,
  Table,
  Button,
} from "semantic-ui-react";
import ProductService from "../services/productService";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCard } from "../store/actions/cardActions";

function ProductList() {
  const [products, setproducts] = useState([]);

  const dispatch = useDispatch()

  useEffect(() => {
    axiosGet();
  }, []);

  const axiosGet = async () => {
    let productService = new ProductService();
    productService
      .getProducts()
      .then((result) => setproducts(result.data.products));
  };

  const handleAddToCard = (product) => {
    dispatch(addToCard(product))
  }
  return (
    <div>
      <Table celled>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Ürün adı</TableHeaderCell>
            <TableHeaderCell>Birim fiyatı</TableHeaderCell>
            <TableHeaderCell>Stok adedi</TableHeaderCell>
            <TableHeaderCell>Açıklama</TableHeaderCell>
            <TableHeaderCell>Kategori</TableHeaderCell>
            <TableHeaderCell></TableHeaderCell>
          </TableRow>
        </TableHeader>

        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell>
                <Link to={`/products/${product.id}`}>{product.title}</Link>
              </TableCell>
              <TableCell>{product.price}</TableCell>
              <TableCell>{product.stock}</TableCell>
              <TableCell>{product.description}</TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell>
                <Button onClick={() => handleAddToCard(product)}>
                  Sepete Ekle
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>

        <TableFooter>
          <TableRow>
            <TableHeaderCell colSpan="5">
              <Menu floated="right" pagination>
                <MenuItem as="a" icon>
                  <Icon name="chevron left" />
                </MenuItem>
                <MenuItem as="a">1</MenuItem>
                <MenuItem as="a">2</MenuItem>
                <MenuItem as="a">3</MenuItem>
                <MenuItem as="a">4</MenuItem>
                <MenuItem as="a" icon>
                  <Icon name="chevron right" />
                </MenuItem>
              </Menu>
            </TableHeaderCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}

export default ProductList;
