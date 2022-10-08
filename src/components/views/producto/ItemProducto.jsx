import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const ItemProducto = ({ producto }) => {
    //para desestructurar aun mas
    const { id, nombreProducto, precio, imagen, categoria } = { ...producto };
    return (
        <>
            <tr>
                <td>{id}</td>
                <td>{nombreProducto}</td>
                <td>${precio}</td>
                <td>{imagen}</td>
                <td>{categoria}</td>
                <td className="text-center">
                    <Link className="btn btn-outline-light me-1" to={`/administrar/editar/:id`}>
                        <i className="bi bi-arrow-clockwise text-warning"></i>
                    </Link>
                    <Button variant="outline-light">
                        <i className="bi bi-x-lg text-danger"></i>
                    </Button>
                </td>
            </tr>
        </>
    );
};

export default ItemProducto;
