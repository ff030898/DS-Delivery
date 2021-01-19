import 'leaflet/dist/leaflet.css';
import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ProductItem from '../../components/ProductItem';
import mapIcon from '../../utils/mapIcon';
import './style.css';


function OrderFood() {
    //const [product, setProduct] = useState([]);

    const dataFake = [
        { id: 1, name: "Pizza Portuguesa", image: "", price: 35, description: "Uma deliciosa combinação de Linguiça Calabresa, rodelas de cebolas frescas, azeitonas pretas, mussarela, polpa de tomate, orégano e massa especial." },
        { id: 2, name: "Pizza Portuguesa", image: "", price: 35, description: "Uma deliciosa combinação de Linguiça Calabresa, rodelas de cebolas frescas, azeitonas pretas, mussarela, polpa de tomate, orégano e massa especial." },
        { id: 3, name: "Pizza Portuguesa", image: "", price: 35, description: "Uma deliciosa combinação de Linguiça Calabresa, rodelas de cebolas frescas, azeitonas pretas, mussarela, polpa de tomate, orégano e massa especial." },
        { id: 4, name: "Pizza Portuguesa", image: "", price: 35, description: "Uma deliciosa combinação de Linguiça Calabresa, rodelas de cebolas frescas, azeitonas pretas, mussarela, polpa de tomate, orégano e massa especial." },
        { id: 5, name: "Pizza Portuguesa", image: "", price: 35, description: "Uma deliciosa combinação de Linguiça Calabresa, rodelas de cebolas frescas, azeitonas pretas, mussarela, polpa de tomate, orégano e massa especial." },
        { id: 6, name: "Pizza Portuguesa", image: "", price: 35, description: "Uma deliciosa combinação de Linguiça Calabresa, rodelas de cebolas frescas, azeitonas pretas, mussarela, polpa de tomate, orégano e massa especial." },
        { id: 7, name: "Pizza Portuguesa", image: "", price: 35, description: "Uma deliciosa combinação de Linguiça Calabresa, rodelas de cebolas frescas, azeitonas pretas, mussarela, polpa de tomate, orégano e massa especial." },
        { id: 8, name: "Pizza Portuguesa", image: "", price: 35, description: "Uma deliciosa combinação de Linguiça Calabresa, rodelas de cebolas frescas, azeitonas pretas, mussarela, polpa de tomate, orégano e massa especial." },
        { id: 9, name: "Pizza Portuguesa", image: "", price: 35, description: "Uma deliciosa combinação de Linguiça Calabresa, rodelas de cebolas frescas, azeitonas pretas, mussarela, polpa de tomate, orégano e massa especial." },
        { id: 10, name: "Pizza Portuguesa", image: "", price: 35, description: "Uma deliciosa combinação de Linguiça Calabresa, rodelas de cebolas frescas, azeitonas pretas, mussarela, polpa de tomate, orégano e massa especial." },
        { id: 11, name: "Pizza Portuguesa", image: "", price: 35, description: "Uma deliciosa combinação de Linguiça Calabresa, rodelas de cebolas frescas, azeitonas pretas, mussarela, polpa de tomate, orégano e massa especial." },
        { id: 12, name: "Pizza Portuguesa", image: "", price: 35, description: "Uma deliciosa combinação de Linguiça Calabresa, rodelas de cebolas frescas, azeitonas pretas, mussarela, polpa de tomate, orégano e massa especial." }

    ]

    function handleAlert() {
        alert("Pedido cadastrado com sucesso!");
    }

    //setProduct(dataFake);

    return (
        <>
            <Header />
            <main className="main-order-container">
                <div className="details-order">
                    <h1 className="title-order">SIGA AS <br /> ETAPAS</h1>
                    <div className="etapes-order">
                        <p><span>1</span>  Selecione os produtos e localização.</p>
                        <p><span>2</span>  Depois clique em “ENVIAR PEDIDO”</p>
                    </div>
                </div>

                <div className="main-items-container">
                    {dataFake.map(data => {
                        return (
                            <ProductItem key={data.id} product={data} />
                        );
                    })}
                </div>

                <div className="main-location-container">
                    <h1>Selecione onde o pedido deve ser entregue:</h1>

                    <div className="map-container">

                        <input className="input-search" type="text" placeholder="Pesquisar endereço"/>
                        
                        <MapContainer center={[-24.0368825, -46.642118]} zoom={13} scrollWheelZoom={false}
                            
                            style={{ width: '100%', height: 385, borderRadius: 10, opacity: 1, marginTop: 20 }}
                            dragging={true}
                            touchZoom={true}
                            zoomControl={true}
                            doubleClickZoom={true}>


                            <TileLayer
                                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker interactive={false} icon={mapIcon} position={[-24.0368825, -46.642118]}>
                                <Popup>
                                    A pretty CSS3 popup. <br /> Easily customizable.
                                </Popup>
                            </Marker>

                        </MapContainer>

                    </div>
                </div>
                <div className="main-order-price-container">

                    <div className="order-infomations">
                        <p className="count-products"><span>2</span>PRODUTOS SELECIONADOS</p>
                        <p className="price"><span>R$ 80,00</span>VALOR TOTAL</p>
                    </div>


                    <button className="btn-order" onClick={handleAlert}>
                        FAZER PEDIDO
                    </button>


                </div>
            </main>

            <Footer />
        </>
    );
}

export default OrderFood;
