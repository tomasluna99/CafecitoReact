import { Table, Container } from "react-bootstrap";
import ItemProducto from "./producto/ItemProducto";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { consultarAPI } from "../helpers/queries";

const Administrador = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        consultarAPI().then((respuestaListaProductos) => {
            //const prueba =consultarAPI(); para obtener el return
            setProductos(respuestaListaProductos);
        });
    }, []);

    return (
        <Container className="mainSection">
            <article className="d-flex justify-content-between align-items-center ">
                <h1 className="display-3 mt-3">Productos disponibles</h1>
                <Link className="h-100 btn btn-primary" to="/administrar/crear">
                    Agregar
                </Link>
            </article>
            <hr />

            <Table responsive striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Cod</th>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>URL de imagen</th>
                        <th>Cat</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map((producto) => (
                        <ItemProducto key={producto._id} producto={producto} setProductos={setProductos} />
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default Administrador;
