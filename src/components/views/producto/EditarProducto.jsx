import { useEffect } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { editarProductoAPI, obtenerProductoAPI } from "../../helpers/queries";

const EditarProducto = () => {
    const { id } = useParams();
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm();
    const navegacion = useNavigate();
    useEffect(() => {
        obtenerProductoAPI(id).then((respuesta) => {
            if (respuesta.status === 200) {
                //cargar datos en el formulario
                setValue("nombreProducto", respuesta.dato.nombreProducto);
                setValue("precio", respuesta.dato.precio);
                setValue("imagen", respuesta.dato.imagen);
                setValue("categoria", respuesta.dato.categoria);
            }
        });
    }, []);

    const onSubmitEditar = (dataProductoEditado) => {
        //una vez todo validado enviamos la peticion a la API
        editarProductoAPI(id, dataProductoEditado).then((respuesta) => {
            if (respuesta.status === 200) {
                Swal.fire("Producto modificado", "El producto fue modificado correctamente", "success");
                navegacion("/administrar");
            } else {
                Swal.fire("Ocurrió un error", "El producto no pudo modificarse", "error");
            }
        });
    };

    return (
        <>
            <Container className="mainSection">
                <section className="container my-3">
                    <h3 className="display-4">Editar Producto</h3>
                    <hr />
                </section>
                <section className="container my-3">
                    <Form onSubmit={handleSubmit(onSubmitEditar)} noValidate>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Nombre producto*</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Ej:cafe"
                                {...register("nombreProducto", {
                                    required: "El nombre del producto es obligatorio",
                                    minLength: {
                                        value: 2,
                                        message: "La cantidad mínima de caracteres debe ser 2",
                                    },
                                    maxLength: {
                                        value: 100,
                                        message: "La cantidad máxima de caracteres debe ser 100",
                                    },
                                })}
                            />
                            <Form.Text className="text-danger">{errors.nombreProducto?.message}</Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Precio*</Form.Label>
                            <Form.Control
                                required
                                type="number"
                                placeholder="Ej:50"
                                {...register("precio", {
                                    required: "El precio es un valor obligatorio",
                                    min: {
                                        value: 0,
                                        message: "El precio no puede ser menor a $0",
                                    },
                                    max: {
                                        value: 10000,
                                        message: "El precio máximo admitido es de $10.000",
                                    },
                                })}
                            />
                            <Form.Text className="text-danger">{errors.precio?.message} </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Imagen URL*</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Ej:'https://....'"
                                {...register("imagen", {
                                    required: "La url de la imagen es obligatoria",
                                    pattern: {
                                        value: /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
                                        message: "Debe ingresar una url valida",
                                    },
                                })}
                            />
                            <Form.Text className="text-danger">{errors.imagen?.message}</Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Select
                                aria-label="Default select example"
                                {...register("categoria", {
                                    required: "Debe elegir una categoría",
                                })}
                            >
                                <option value="">Seleccione una opción...</option>
                                <option value="Bebida caliente">Bebida caliente</option>
                                <option value="Bebida fria">Bebida fria</option>
                                <option value="Dulce">Dulce</option>
                                <option value="Salado">Salado</option>
                            </Form.Select>
                            <Form.Text className="text-danger">{errors.categoria?.message}</Form.Text>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Guardar
                        </Button>
                    </Form>
                </section>
            </Container>
        </>
    );
};

export default EditarProducto;
