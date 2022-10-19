import { useEffect, useState } from "react";
import { Card, Badge } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { obtenerProductoAPI } from "../../helpers/queries";
const DetalleProducto = () => {
    const { id } = useParams();
    const [producto, setProducto] = useState({});

    useEffect(() => {
        obtenerProductoAPI(id).then((respuesta) => {
            if (respuesta.status === 200) {
                console.log(respuesta);
                setProducto(respuesta.dato);
            }
        });
    }, []);
    return (
        <>
            <Card className="container border rounded my-3 flex-row">
                <Card.Img className="anchoFotoProducto" variant="start" src={producto.imagen} />
                <Card.Body>
                    <div className="anchoDetalleProducto">
                        <Card.Title>{producto.nombreProducto}</Card.Title>
                        <hr />
                        <Badge bg="success">{producto.categoria}</Badge>
                        <Card.Text className="mt-3 fw-bold">Precio: ${producto.precio}</Card.Text>
                    </div>
                </Card.Body>
            </Card>
        </>
    );
};

export default DetalleProducto;
