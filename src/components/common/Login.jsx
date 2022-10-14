import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmitLogin = (dataLogin) => {
        console.log(dataLogin);
        console.log("prueba desde submit login");
        //una vez todo validado enviamos la peticion a la API
    };
    return (
        <Container className="mainSection my-3">
            <Row className="justify-content-center">
                <Col sm={12} md={8} lg={5}>
                    <Form onSubmit={handleSubmit(onSubmitLogin)} noValidate className="border rounded p-3 shadow ">
                        <Form.Group className="mb-3" controlId="formLoginEmail">
                            <Form.Label>Usuario</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Ingrese su email"
                                {...register("email", {
                                    required: "Ingrese su email",
                                    //Solo deberiamos validar que el e-mail se encuentre registrado , de lo contrario enviar un mensaje de error "email no registrado"
                                })}
                            />
                            <Form.Text className="text-danger">{errors.email?.message}</Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formLoginPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Ingrese su constraseña"
                                {...register("password", {
                                    required: "Ingrese su contraseña",
                                    //Solo deberiamos validar que la contraseña sea correcta aqui no daria pistas..."su usuario o contraseña no son correctos"
                                })}
                            />
                        </Form.Group>
                        <Button variant="danger" type="submit">
                            Ingresar
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;
