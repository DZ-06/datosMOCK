const url = "https://5fe2c2347a94870017682886.mockapi.io";

export const getCategorias = async () =>{
    let peticion = await fetch(`${url}/categoria`)
    let data = await peticion.json();
    return data;
}

export const getProductos = async () => {
    let peticion = await fetch(`${url}/producto`)
    let data = await peticion.json();
    return data;
}