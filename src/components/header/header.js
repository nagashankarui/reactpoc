import React from "react";
import { Dropdown } from "react-bootstrap";
import LayoutToggling from "./collpase";
import CompanyList from './search';

const Header = () => {



    return (
        <header>
            <div>
                <LayoutToggling />
            </div>
            <CompanyList />
            <div>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="user-dropdown">
                        Admin
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="user-details-main">
                        <div className="user-details">
                            <h2>Naga Shankar</h2>
                            <p>shankar@supplier.io</p>
                        </div>
                        <Dropdown.Item href="#">My Profile</Dropdown.Item>
                        <Dropdown.Item href="#">Another action</Dropdown.Item>
                        <Dropdown.Item href="#">Signout</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </header>
    )
}

export default Header