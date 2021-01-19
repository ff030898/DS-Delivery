import React from "react";
import Image from "../../assets/pizzacalabresaacebolada 1.svg";
import "./styles.css";

interface ProductItemProps {
    product: {
        id: number;
        name: string;
        image: string;
        price: number;
        description: string;
    };
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {

    return (
        <article className="product-item">
            <header>
                <h1>{product.name}</h1>
                <img src={Image} alt={product.name} />
            </header>

            <main>
                <strong>R$ {product.price},00</strong>
            </main>
            <footer>
                <h2>Descrição</h2>
                <p>{product.description}</p>
            </footer>


        </article>
    );
};
export default ProductItem;
