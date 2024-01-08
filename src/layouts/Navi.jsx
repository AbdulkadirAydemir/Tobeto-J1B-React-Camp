import React from "react";
import { MenuMenu, MenuItem, Menu, Container } from "semantic-ui-react";
import CartSummary from "./CartSummary";
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";

function Navi() {
  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <MenuItem name="home" />
          <MenuItem name="messages" />

          <MenuMenu position="right">
            <CartSummary />
            <SignedOut />
            <SignedIn />
          </MenuMenu>
        </Container>
      </Menu>
    </div>
  );
}

export default Navi;
