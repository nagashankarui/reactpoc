import React, { useState, useEffect, useRef } from "react";
import data from "./companies_data.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import Accordion from 'react-bootstrap/Accordion';

const NewPage = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredData, setFilteredData] = useState(data);
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const searchRef = useRef(null);

    // Filter the data based on the search term
    useEffect(() => {
        if (searchTerm.trim() === "") {
            setFilteredData(data); // Reset to full data when input is cleared
        } else {
            const searchResults = data.filter((item) =>
                item.companyName.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredData(searchResults);
        }
    }, [searchTerm]);

    // Hide dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setIsDropdownVisible(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Group products by category
    const groupByCategory = (products) => {
        return products.reduce((acc, item) => {
            const category = item.organizationStructure;
            if (!acc[category]) acc[category] = [];
            acc[category].push(item);
            return acc;
        }, {});
    };

    const groupedData = groupByCategory(filteredData);

    return (
        <div ref={searchRef} className="position-relative">
            <input
                placeholder="Search here"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onFocus={() => setIsDropdownVisible(true)}
                className="main-search-input"
            />

            {
                isDropdownVisible && (
                    <Accordion className="searchlist" defaultActiveKey="0" alwaysOpen>
                        {Object.keys(groupedData).map((category) => (
                            <Accordion.Item eventKey={category} key={category}>
                                <Accordion.Header>{category}</Accordion.Header>
                                <Accordion.Body>
                                    <ul>
                                        {groupedData[category].map((item) => (
                                            <li key={item.id}>
                                                <FontAwesomeIcon icon={faBuilding} />
                                                <a href={`details/${item.id}`}>
                                                    <p>{item.companyName}</p>
                                                    <span>{item.established}, {item.address}</span>
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                        ))}
                    </Accordion >
                )
            }
        </div >
        // <Accordion defaultActiveKey="0">
        //     <Accordion.Item eventKey="0">
        //         <Accordion.Header>Accordion Item #1</Accordion.Header>
        //         <Accordion.Body>
        //             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        //             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        //             minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        //             aliquip ex ea commodo consequat. Duis aute irure dolor in
        //             reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        //             pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        //             culpa qui officia deserunt mollit anim id est laborum.
        //         </Accordion.Body>
        //     </Accordion.Item>
        //     <Accordion.Item eventKey="1">
        //         <Accordion.Header>Accordion Item #2</Accordion.Header>
        //         <Accordion.Body>
        //             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        //             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        //             minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        //             aliquip ex ea commodo consequat. Duis aute irure dolor in
        //             reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        //             pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        //             culpa qui officia deserunt mollit anim id est laborum.
        //         </Accordion.Body>
        //     </Accordion.Item>
        // </Accordion>
    );
};

export default NewPage;
