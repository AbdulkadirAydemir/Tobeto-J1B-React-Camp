import React from "react";
import {
  DropdownMenu,
  DropdownItem,
  MenuMenu,
  MenuItem,
  Button,
  Dropdown,
  Menu,
  Container,
} from "semantic-ui-react";
import CartSummary from "./CartSummary";

function Navi() {
  return (
    <div>
      <Menu inverted fixed>
        <Container>
          <MenuItem name="home" />
          <MenuItem name="messages" />

          <MenuMenu position="right">
            <CartSummary />
            <MenuItem>
              <Button primary>Sign Up</Button>
            </MenuItem>
          </MenuMenu>
        </Container>
      </Menu>
    </div>
  );
}

export default Navi;
