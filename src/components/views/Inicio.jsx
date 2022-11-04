import { Row } from "react-bootstrap";
import CardProducto from "./producto/CardProducto";
import "./inicio.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useEffect, useState } from "react";
import { consultarAPI } from "../helpers/queries";

const Inicio = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        consultarAPI().then((respuestaListaProductos) => {
            //const prueba =consultarAPI(); para obtener el return
            setProductos(respuestaListaProductos);
        });
    }, []);
    return (
        <main className="container mainSection">
            <h1 className="display-3 text-center">Bienvenidos</h1>
            <hr />
            <Row>
                {productos.map((producto) => (
                    <CardProducto key={producto.id} producto={producto} />
                ))}
            </Row>
        </main>
    );
};

export default Inicio;
