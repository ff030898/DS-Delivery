import React, { useEffect, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import AsyncSelect from 'react-select/async';
import Image from "../../assets/pizzacalabresaacebolada 1.svg";
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { fetchLocalMapBox } from '../../services/api';
import mapIcon from '../../utils/mapIcon';
import './style.css';

type Place = {
    label?: string;
    value?: string;
    position: {
        lat: number;
        lng: number;
    }
}

type OrderLocationData = {
    latitude: number;
    longitude: number;
    address?: string;
}


function OrderFood() {

    const [count, setCount] = useState(0);
    const [sum, setSum] = useState(0);

    //const [product, setProduct] = useState([]);

    const [selectedProducts, setSelectedProducts] = useState<number[]>([]);

    const [address, setAddress] = useState<Place>({
        position: {
            lat: 0,
            lng: 0
        }
    });

    const [orderLocation, setOrdemLocation] = useState<OrderLocationData>();

    const dataFake = [
        { id: 1, name: "Portuguesa", image: Image, price: 35, description: "Uma deliciosa combinação de Linguiça Calabresa, rodelas de cebolas frescas, azeitonas pretas, mussarela, polpa de tomate, orégano e massa especial." },
        { id: 2, name: "Peperone", image: "https://go.hurb.com/wp-content/uploads/2020/03/Pizzaria-cria-cadeiras-para-combinar-com-a-mesa-que-vem-nas-caixas-de-pizza-7.png", price: 35, description: "Uma deliciosa combinação de Linguiça Calabresa, rodelas de cebolas frescas, azeitonas pretas, mussarela, polpa de tomate, orégano e massa especial." },
        { id: 3, name: "Calabresa c/ Catupiry", image: "https://i.ytimg.com/vi/qmoCVX19W_o/maxresdefault.jpg", price: 35, description: "Uma deliciosa combinação de Linguiça Calabresa, rodelas de cebolas frescas, azeitonas pretas, mussarela, polpa de tomate, orégano e massa especial." },
        { id: 4, name: "Frango c/ Catupiry", image: "https://www.receitasnestle.com.br/images/default-source/recipes/receita_11_pizza-de-liquidificador-de-frango-com-milho.tmb-customthum.jpg", price: 35, description: "Uma deliciosa combinação de Linguiça Calabresa, rodelas de cebolas frescas, azeitonas pretas, mussarela, polpa de tomate, orégano e massa especial." },
        { id: 5, name: "Portuguesa", image: Image, price: 35, description: "Uma deliciosa combinação de Linguiça Calabresa, rodelas de cebolas frescas, azeitonas pretas, mussarela, polpa de tomate, orégano e massa especial." },
        { id: 6, name: "Portuguesa", image: Image, price: 35, description: "Uma deliciosa combinação de Linguiça Calabresa, rodelas de cebolas frescas, azeitonas pretas, mussarela, polpa de tomate, orégano e massa especial." },
        { id: 7, name: "Portuguesa", image: Image, price: 35, description: "Uma deliciosa combinação de Linguiça Calabresa, rodelas de cebolas frescas, azeitonas pretas, mussarela, polpa de tomate, orégano e massa especial." },
        { id: 8, name: "Portuguesa", image: Image, price: 35, description: "Uma deliciosa combinação de Linguiça Calabresa, rodelas de cebolas frescas, azeitonas pretas, mussarela, polpa de tomate, orégano e massa especial." },
        { id: 9, name: "Portuguesa", image: Image, price: 35, description: "Uma deliciosa combinação de Linguiça Calabresa, rodelas de cebolas frescas, azeitonas pretas, mussarela, polpa de tomate, orégano e massa especial." },
        { id: 10, name: "Portuguesa", image: Image, price: 35, description: "Uma deliciosa combinação de Linguiça Calabresa, rodelas de cebolas frescas, azeitonas pretas, mussarela, polpa de tomate, orégano e massa especial." },
        { id: 11, name: "Portuguesa", image: Image, price: 35, description: "Uma deliciosa combinação de Linguiça Calabresa, rodelas de cebolas frescas, azeitonas pretas, mussarela, polpa de tomate, orégano e massa especial." },
        { id: 12, name: "Portuguesa", image: Image, price: 45, description: "Uma deliciosa combinação de Linguiça Calabresa, rodelas de cebolas frescas, azeitonas pretas, mussarela, polpa de tomate, orégano e massa especial." }

    ]

    //setProduct(dataFake);

    function formatPrice(price: number) {
        const formatter = new Intl.NumberFormat("pt-BR", {
            style: 'currency',
            currency: 'BRL'
        });

        return formatter.format(price);
    }

    function handleSelectedProduct(id: number, price: number) {

        //verifica se item já está no array se tiver desmarca
        const alreadySelected = selectedProducts.findIndex(item => item === id);
        if (alreadySelected >= 0) {
            const filteredItems = selectedProducts.filter(item => item !== id);
            setSelectedProducts(filteredItems);
            setCount(count - 1);
            setSum(sum - price);

        } else {
            setSelectedProducts([...selectedProducts, id]);
            setCount(count + 1);
            setSum(sum + price);

        }

    }


    useEffect(() => {


        //recupera localização de usuário
        navigator.geolocation.getCurrentPosition(async position => {

            const location = position.coords;

            const positionNow: Place = {
                label: "Você está aqui",
                value: "Sua localização",
                position: {
                    lat: location.latitude,
                    lng: location.longitude
                }
            }

            setAddress(positionNow);

            handleChangeSelect(positionNow)

        });


    }, []);


    function handleAlert() {

        const currentPosition: OrderLocationData = {

            latitude: address.position.lat,
            longitude: address.position.lng,
            address: address.label,
        }

        setOrdemLocation(currentPosition);


        if (count <= 0) {
            alert("Nenhum produto foi selecionado!");
            return;
        }

        if (!orderLocation || address.label === "Você está aqui") {
            alert("Selecione o endereço de entrega no mapa abaixo!");
            return;
        }

        alert("Pedido cadastrado com sucesso! \nEntrega: " + address.label);
        setCount(0);
        setSum(0);
        setSelectedProducts([0]);
        //recupera localização de usuário
        navigator.geolocation.getCurrentPosition(async position => {

            const location = position.coords;

            const positionNow: Place = {
                label: "Você está aqui",
                value: "Sua localização",
                position: {
                    lat: location.latitude,
                    lng: location.longitude
                }
            }

            setAddress(positionNow);

        });

    }

    const loadOptions = async (inputValue: string, callback: (places: Place[]) => void) => {
        const response = await fetchLocalMapBox(inputValue);

        const places = response.data.features.map((item: any) => {
            return ({
                label: item.place_name,
                value: item.place_name,
                position: {
                    lat: item.center[1],
                    lng: item.center[0]
                },
                place: item.place_name,
            });
        });

        callback(places);
    };

    const handleChangeSelect = (place: Place) => {
        setAddress(place);
    };


    return (
        <>
            <Header />
            <main className="main-order-container">
                <div className="details-order">
                    <h1 className="title-order">SIGA AS <br /> ETAPAS</h1>
                    <div className="etapes-order">
                        <p><span>1</span>  Selecione os produtos e localização.</p>
                        <p className="send-order"><span>2</span>  Depois clique em <span className="send">“FAZER PEDIDO”</span></p>
                    </div>
                </div>

                <article className="main-order-container-page">

                    <div className="main-order-price-container">

                        <div className="order-infomations">
                            <p className="count-products"><span>{count}</span>PRODUTOS SELECIONADOS</p>
                            <p className="price"><span>{formatPrice(sum)}</span>VALOR TOTAL</p>
                        </div>


                        <button className="btn-order" onClick={handleAlert}>
                            FAZER PEDIDO
                        </button>


                    </div>

                    <div className="main-items-container">

                        <ul>

                            {dataFake.map(product => (

                                <li>
                                    <article key={product.id}
                                        onClick={() => handleSelectedProduct(product.id, product.price)}
                                        className={selectedProducts.includes(product.id) ? 'product-item-selected' : 'product-item'}>
                                        <header>
                                            <h1>{product.name}</h1>
                                            <img src={product.image} alt={product.name} />
                                        </header>

                                        <main>
                                            <strong>{formatPrice(product.price)}</strong>
                                        </main>
                                        <footer>
                                            <h2>Descrição</h2>
                                            <p>{product.description}</p>
                                        </footer>
                                    </article>
                                </li>
                            ))}

                        </ul>

                    </div>


                    <div className="main-location-container">
                        <h1>Selecione onde o pedido deve ser entregue:</h1>

                        <div className="map-container">

                            <div className="input-search">

                                <AsyncSelect
                                    placeholder="Pesquise o seu endereço e o número para confirmar o destino"
                                    className="filter"
                                    loadOptions={loadOptions}
                                    onChange={value => handleChangeSelect(value as Place)}
                                />

                            </div>

                            <MapContainer
                                center={address.position}
                                zoom={13}
                                scrollWheelZoom={false}
                                key={address.position.lat}
                                style={{ width: '100%', height: 485, borderRadius: 10, marginTop: 20, zIndex: 0 }}
                                dragging={true}
                                touchZoom={true}
                                zoomControl={true}
                                doubleClickZoom={true}>


                                <TileLayer
                                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                <Marker interactive={true} icon={mapIcon} position={address.position} key={address.position.lat}>
                                    <Popup key={address.position.lat}>
                                        {address.label}
                                    </Popup>
                                </Marker>

                            </MapContainer>


                        </div>
                    </div>


                </article>


            </main>

            <Footer />
        </>
    );
}

export default OrderFood;
