import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
const CardProducto = ({ producto }) => {
    return (
        <>
            <Col className="my-3">
                <Card className="anchoCardProducto">
                    <Card.Img className="altoCardImageProducto" variant="top" src={producto.imagen} />
                    <Card.Body>
                        <Card.Title>{producto.nombreProducto}</Card.Title>
                        <Card.Text>Precio: ${producto.precio}</Card.Text>
                        <hr />
                        <Link className="btn btn-danger" to={`/administrar/detalle/${producto._id}`}>
                            Ver mas
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
};

export default CardProducto;
