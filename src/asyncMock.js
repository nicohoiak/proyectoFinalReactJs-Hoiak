const products = [
    {
        id: '1',
        name: 'Notebook VAIO',
        price: 200000,
        category: 'computadoras',
        img: 'src\components\assets\img\NotebookVaio.png',
        stock: 10,
        description: 'Notebook vaio...'
    },
    {
        id: '2',
        name: 'Procesador Ryzen',
        price: 150000,
        category: 'computadoras',
        img: 'src\components\assets\img\procesadorRyzen.png',
        stock: 10,
        description: 'Nuevo procesador Ryzen...'
    },
    {
        id: '3',
        name: 'Placa de Video Nvidia 1050ti',
        price: 250000,
        category: 'computadoras',
        img: 'src\components\assets\img\placadevideo.png',
        stock: 10,
        description: 'Nueva plada de video Nvidia..'
    },
]

export const getProducts = () => {
    return new Promise ((resolve) =>{
        setTimeout(()=>{
            resolve (products)
        }, 1000)
    })
}

export const getProductById =(productId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 1000)
    })
}