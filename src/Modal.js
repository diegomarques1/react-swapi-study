import React, { useEffect, useState } from "react";

function ModalComponent(props) {
    const [toggleModal, setToggleModal] = useState(false);
    const [planet, setPlanet] = useState([]);
    const [loading, setLoading] = useState(true);

    const closeModal = () => {
        setToggleModal(false);
        setPlanet([]);
    }

    const getFromUrl = (planetUrl) => {
        fetch(planetUrl)
            .then(result => result.json())
            .then(result => {
                setPlanet(result);
                setLoading(false);
            })
            .catch(error => console.log(error));
    };

    useEffect(() => {
        getFromUrl(props.planetUrl);
      }, [props.planetUrl]);

    // const handleClick = () => {
    //     setToggleModal(true);
    //     getFromUrl(props.planetUrl);
    // }

    return (
        <div>
            <button type="button" className="planet-btn" onClick={() => setToggleModal(true)}>Info</button>
            {(toggleModal && (
            loading ? 
            (<div id="myModal" className="modal">
                <div className="modal-content">
                    Loading...
                </div>
            </div>) :
            (<div id="myModal" className="modal">
                <div className="modal-content">
                    <span className="close" onClick={() => closeModal()}>&times;</span>
                    <h2>Informações do planeta {planet.name}</h2>
                    <ul>
                        <li>Nome do planeta: {planet.name}</li>
                        <li>Período de rotação: {planet.rotation_period}</li>
                        <li>Diâmetro: {planet.diameter}</li>
                        <li>Clima: {planet.climate}</li>
                        <li>Gravidade: {planet.gravity}</li>
                        <li>Terreno: {planet.terrain}</li>
                        <li>População: {planet.population}</li>
                    </ul>
                </div>
            </div>)))}
        </div>
    );

}

export default ModalComponent;