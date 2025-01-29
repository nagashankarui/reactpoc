import React from "react";
import data from './sidenav.json';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGauge,
    faFileInvoiceDollar,
    faFileShield,
    faChartColumn,
    faBuildingColumns,
    faList,
    faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

// Map icon strings from JSON to imported FontAwesome icons
const mapIcon = {
    faGauge,
    faFileInvoiceDollar,
    faFileShield,
    faChartColumn,
    faBuildingColumns,
    faList,
    faMagnifyingGlass,
};

const SideNav = () => {
    return (
        <aside>
            <div className="logo">
                <span>Expl</span>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <span>rer</span>
            </div>
            <nav id="sideNav">
                <ul>
                    {data.map((item) => (
                        <li key={item.id}>
                            <a href={item.link}>
                                <FontAwesomeIcon icon={mapIcon[item.icon]} />
                                <span>{item.name}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
};

export default SideNav;
