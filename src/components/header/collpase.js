import React, { useState } from "react";
// import './collpase.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight, faAnglesLeft } from "@fortawesome/free-solid-svg-icons";

const LayoutToggling = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const layoutCollapse = () => {
        if (isCollapsed) {
            document.body.classList.remove("sidenav-collapsed");
        } else {
            document.body.classList.add("sidenav-collapsed");
        }
        setIsCollapsed(!isCollapsed);
    };

    return (
        <button onClick={layoutCollapse} className="collpase-btn">
            {isCollapsed ? (
                <FontAwesomeIcon icon={faAnglesRight} />
            ) : (
                <FontAwesomeIcon icon={faAnglesLeft} />
            )}
        </button>
    );
};

export default LayoutToggling;
