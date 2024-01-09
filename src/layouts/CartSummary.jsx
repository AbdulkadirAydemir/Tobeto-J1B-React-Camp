import React from "react";
import { NavLink } from "react-router-dom";
import { Dropdown, DropdownItem, DropdownMenu, Label } from "semantic-ui-react";
import { useSelector } from "react-redux";

function CartSummary() {
  const { cardItems } = useSelector(state => state.card);
  return (
    <div>
      <Dropdown item text="Sepetiniz">
        <DropdownMenu>
          {cardItems.map((cardItem) => (
            <DropdownItem key={cardItem.product.id}>
              {cardItem.product.title}
              <Label style={{ marginLeft: 8 }}>{cardItem.quantity}</Label>
            </DropdownItem>
          ))}
          <Dropdown.Divider />
          <DropdownItem as={NavLink} to="/cart">
            Sepete Git
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

export default CartSummary;
