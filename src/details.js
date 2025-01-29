import React from "react";
import companiesData from "./components/header/companies_data.json";
import Header from "./components/header/header";
import SideNav from "./components/sidenav/sidenav";

const CompanyDetails = ({ id }) => {
    const company = companiesData.find((comp) => comp.id === id);

    if (!company) {
        return <p>Company not found!</p>;
    }

    return (
        <>
            <SideNav />
            <Header />
            <main>
                <div className="p-6 max-w-3xl mx-auto bg-white shadow-lg rounded-lg">
                    <h1 className="text-2xl font-bold mb-4">{company.companyName}</h1>
                    <p>
                        <strong>Address:</strong> {company.address}
                    </p>
                    <p>
                        <strong>Employees:</strong> {company.employees}
                    </p>
                    <p>
                        <strong>Revenues:</strong> {company.revenues}
                    </p>
                    <p>
                        <strong>Established:</strong> {company.established}
                    </p>
                    <p>
                        <strong>Contact:</strong> {company.contactNumber}
                    </p>
                    <p>
                        <strong>Website:</strong>{" "}
                        <a
                            href={company.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 underline"
                        >
                            {company.website}
                        </a>
                    </p>
                    <h2 className="text-xl font-bold mt-4">Executives</h2>
                    <ul className="list-disc list-inside">
                        {company.executives.map((exec) => (
                            <li key={exec.email}>
                                {exec.name} ({exec.designation}) - {exec.email}
                            </li>
                        ))}
                    </ul>
                    <h2 className="text-xl font-bold mt-4">Products</h2>
                    <div className="grid grid-cols-2 gap-4">
                        {company.products.map((product) => (
                            <div
                                key={product.productName}
                                className="p-4 bg-gray-100 rounded-lg shadow-md"
                            >
                                <img
                                    src={product.productImage}
                                    alt={product.productName}
                                    className="mb-2 rounded"
                                />
                                <h3 className="text-lg font-semibold">{product.productName}</h3>
                                <p>{product.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </>

    );
};

export default CompanyDetails;
