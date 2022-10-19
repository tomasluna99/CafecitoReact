const URL = process.env.REACT_APP_API_CAFECITO;
const URLU = process.env.REACT_APP_API_USUARIOS;
//peticion GET (para recibir informacion)
export const consultarAPI = async () => {
    try {
        const respuesta = await fetch(URL);
        const listaProductos = await respuesta.json();
        return listaProductos;
    } catch (error) {
        console.log(error);
        return false;
    }
};

//peticion POST (para agregar un producto al servidor)// en el login tambien se usa para enviar datos
export const crearProductoAPI = async (producto) => {
    try {
        const respuesta = await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(producto),
        });
        return respuesta;
    } catch (error) {
        console.log(error);
        return false;
    }
};

//peticion DELETE (para borrar)
export const borrarProductoAPI = async (id) => {
    try {
        const respuesta = await fetch(URL + "/" + id, {
            method: "DELETE",
        });
        return respuesta;
    } catch (error) {
        console.log(error);
        return false;
    }
};

//peticion PUT (para Editar)
export const obtenerProductoAPI = async (id) => {
    try {
        const respuesta = await fetch(URL + "/" + id);
        const producto = {
            dato: await respuesta.json(),
            status: respuesta.status,
        };
        return producto;
    } catch (error) {
        console.log(error);
        return false;
    }
};

//peticion POST (para agregar un USUARIO al servidor)//
export const crearUsuarioAPI = async (usuario) => {
    try {
        const respuesta = await fetch(URLU, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(usuario),
        });
        return respuesta;
    } catch (error) {
        console.log(error);
        return false;
    }
};
