import React, { useState } from 'react';
import './ProductScreen.css';
import image1 from "./../../src/assets/D23.9cdfd73e93cab187eaa0.jpg";
import image2 from "./../../src/assets/D23.9cdfd73e93cab187eaa0.jpg";
import image3 from "./../../src/assets/D23.9cdfd73e93cab187eaa0.jpg";
import image4 from "./../../src/assets/D23.9cdfd73e93cab187eaa0.jpg";
import image5 from "./../../src/assets/D23.9cdfd73e93cab187eaa0.jpg";
import image6 from "./../../src/assets/D23.9cdfd73e93cab187eaa0.jpg";
import image7 from "./../../src/assets/D23.9cdfd73e93cab187eaa0.jpg";
import image8 from "./../../src/assets/D23.9cdfd73e93cab187eaa0.jpg";

// Sample product data
const products = [
    {
        id: 1,
        name: 'COMPLETE PIER WITH PIER CAP NAGER BAZAR FLYOVER.A/C SENBO',
        image: image1
    },
    {
        id: 2,
        name: 'BRIDGE GIRDER. FOR FLYOVER',
        image: image2
    },
    {
        id: 3,
        name: 'POT ROOM DUCT FOR HINDALCO ALUMINIUM A/C ALSTOM PROJECTS INDIA',
        image: image3
    },
    {
        id: 4,
        name: 'POT ROOM DUCT FOR HINDALCO ALUMINIUM A/C ALSTOM PROJECTS INDIA',
        image: image4
    },
    {
        id: 5,
        name: 'MACHINED FINISHED BLOCK FOR LADLE',
        image: image5
    },
    {
        id: 6,
        name: 'LADLE ASSEMBLY',
        image: image6
    },
    {
        id: 7,
        name: 'SEGMENT OF STAR COLUMN (63 METRE)',
        image: image7
    },
    {
        id: 8,
        name: 'BOTTOM PART OF STAR COLUMN',
        image: image8
    }
];

function ProductScreen() {
    const [selectedProduct, setSelectedProduct] = useState(products[0]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleProductClick = (product) => {
        setSelectedProduct(product);
        document.getElementById('product-details').scrollIntoView({ behavior: 'smooth' });
    };

    const handleImageClick = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="product-container">
            <div className="product-list">
                <h2>Products</h2>
                <ul>
                    {products.map(product => (
                        <li key={product.id} onClick={() => handleProductClick(product)}>
                            {product.name}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="product-details" id="product-details">
                <h2>{selectedProduct.name}</h2>
                <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="product-image"
                    onClick={handleImageClick}
                />
            </div>

            {isModalOpen && (
                <div className="modal" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <span className="close-button" onClick={closeModal}>&times;</span>
                        <img src={selectedProduct.image} alt={selectedProduct.name} className="modal-image" />
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProductScreen;
