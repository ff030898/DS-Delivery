import React from 'react';
import { Link } from "react-router-dom";
import Image from "../../assets/Landing.svg";
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import './style.css';

function Home() {
    return (

        <>
            <Header />
            <main className="main-container">
                <div className="grid-container">
                    <div className="grid-actions">
                        <h1 className="title">Faça seu pedido <br /> que entregamos <br /> pra você!!!</h1>
                        <h2 className="subtitle">Escolha o seu pedido e em poucos minutos <br /> levaremos na sua porta</h2>
                        <Link to="/order">
                            <button className="btn-order">
                                FAZER PEDIDO
                            </button>
                        </Link>
                    </div>
                    <div className="grid-image">
                        <img src={Image} alt="DS Delivery" />
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Home;
