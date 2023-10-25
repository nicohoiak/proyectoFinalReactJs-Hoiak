const products = [
    {
        id: '1',
        nombre: 'Notebook VAIO',
        precio: 200000,
        catergioria: 'computadoras',
        img: 'src/components/assets/img/notebookvaio.png',
        stock: 10,
        descripcion: 'Nueva notebook vaio...'
    },
    {
        id: '2',
        nombre: 'Procesador Ryzen',
        precio: 150000,
        categoria: 'procesadores',
        img: 'src/components/assets/img/procesador.png',
        stock: 10,
        descripcion: 'Nuevo procesador Ryzen...'
    },
    {
        id: '3',
        nombre: 'Placa de Video Nvidia 1050ti',
        precio: 250000,
        categoria: 'placasdevideo',
        img: 'src/components/assets/img/placadevideo.png',
        stock: 10,
        descripcion: 'Nueva placa de video Nvidia..'
    },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 600);
    });
};

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find((prod) => prod.id === productId));
        }, 600);
    });
};

export const getProductsByCategoria = (categoriaId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter((prod) => prod.categoria === categoriaId));
        }, 600);
    });
};
export const productos = products;