import React, { useState, useEffect, useRef } from "react";
import data from "./components/header/companies_data.json"; // Import JSON data

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
    <div ref={searchRef} style={{ width: "500px", }}>
      <input
        placeholder="Search here"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onFocus={() => setIsDropdownVisible(true)}
      />

      {
        isDropdownVisible && (
          <div className="searchlist">
            {Object.keys(groupedData).map((category) => (
              <div key={category}>
                <div>{category}</div>
                <ul>
                  {groupedData[category].map((item) => (
                    <li key={item.id}>
                      <a href={`details/${item.id}`}>
                        <p>{item.companyName}</p>
                        <span>{item.established}, {item.address}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )
      }
    </div >
  );
};

export default NewPage;
