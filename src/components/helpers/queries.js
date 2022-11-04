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

export const editarProductoAPI = async (id, productoEditado) => {
    try {
        const respuesta = await fetch(URL + "/" + id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(productoEditado),
        });
        return respuesta;
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
        return;
    }
};

export const login = async (usuario) => {
    try {
        //verificar si el email existe
        const respuesta = await fetch(URLU);
        const listaUsuarios = await respuesta.json();
        //buscar el usuario que tiene el email
        const usuarioBuscado = listaUsuarios.find((itemUsuario) => itemUsuario.email === usuario.email);
        if (usuarioBuscado) {
            console.log("email encontrado");
            //verificar el password
            if (usuarioBuscado.password === usuario.password) {
                return usuarioBuscado;
            }
        } else {
            console.log("el mail no existe");
            return;
        }
    } catch (error) {
        console.log("error en el login");
        return;
    }
};
