import React from "react";
import { MenuMenu, MenuItem, Menu, Container } from "semantic-ui-react";
import CartSummary from "./CartSummary";
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function Navi() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const navigate = useNavigate()

  function handleSignedOut(params){
    setIsAuthenticated(false)
    navigate("/")
  }
  
  function handleSignedIn(params){
    setIsAuthenticated(true)
  }

  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <MenuItem name="home" />
          <MenuItem name="messages" />

          <MenuMenu position="right">
            <CartSummary />
            {isAuthenticated ? <SignedIn signedOut={handleSignedOut} /> : <SignedOut  signedIn={handleSignedIn}/>}
          </MenuMenu>
        </Container>
      </Menu>
    </div>
  );
}

export default Navi;
