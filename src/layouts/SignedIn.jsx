import React from 'react'
import { Dropdown, Menu, Image } from 'semantic-ui-react'

function SignedIn(props) {
  return (
    <div>
        <Menu.Item>
            <Image avatar spaced="right"/>
            <Dropdown pointing="top left" text='Kadir'>
            <Dropdown.Menu>
                <Dropdown.Item text="Bilgilerim" icon="info" />
                <Dropdown.Item text="Çıkış Yap" icon="signed-out" onClick={props.signedOut}/>
            </Dropdown.Menu>
            </Dropdown>
        </Menu.Item>
    </div>
  )
}

export default SignedIn