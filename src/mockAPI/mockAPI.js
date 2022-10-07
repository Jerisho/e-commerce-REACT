const data = [
        {
            id: 1,
            title: "Motorola G42 4+64GB Verde Atlantico", 
            img: "https://images.rappi.com/products/c13919f9-9347-4620-b89a-bff3887d1855.png?d=200x200&e=webp",
            detail: "",
            price: 58999,
            stock: 10,
            category: "cellphone",
            type: "motorola"
        },

        {
            id: 2,
            title: "Motorola G22 128GB Negro", 
            img: "https://images.rappi.com/products/2e7e4998-dab7-4a60-9d69-cddfd40b8b9e.png?d=200x200&e=webp", 
            price: 47999,
            detail: "",
            stock: 5,
            category: "cellphone",
            type: "motorola"
        },
        
        {
            id: 3,
            title: "Motorola Moto G52 128GB Azul", 
            img: "https://img.olx.com.br/thumbs256x256/39/393283925823030.jpg", 
            price: 59999,
            detail: "",
            stock: 3,
            category: "cellphone",
            type: "motorola"
        },
        
        {
            id: 4,
            title: "Samsung Galaxy A03 Core 32GB Ceramic Black", 
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbusSsoRqgGsEgYThpQQiKr4ZgpR6MKOwK_r-IHEhueD2sU4U_0DDNPObr_yDe_sGHnbs&usqp=CAU", 
            price: 31499,
            detail: "",
            stock: 7,
            category: "cellphone",
            type: "samsung"
        },
        
        {
            id: 5,
            title: "Samsung Galaxy A13 128GB Negro", 
            img: "https://www.otec.com.uy/imgs/productos/productos31_47615.jpg", 
            price: 60999,
            detail: "",
            stock: 6,
            category: "cellphone",
            type: "samsung"
        },
        
        {
            id: 6,
            title: "IPhone 11 128 GB Blanco",
            img: "https://cuyodigital.com/cuyo/wp-content/uploads/2021/05/iphone-11-128gb-4gb-pantalla-6_1-camara-dual-12mp-lila-nnet-67240-31.jpeg",
            price: 269999,
            detail: "",
            stock: 11,
            category: "cellphone",
            type: "iphone"
        },

        {
            id: 7,
            title: "Moto E 32 (Hawaii) GRIS 4+64GB",
            img: "https://specs-tech.com/wp-content/uploads/2022/04/Motorola-Moto-E32-5.jpg",
            price: 39999,
            detail: "Descubrirás un desempeño potente y eficiente, y experimentarás la respuesta rápida del celular cada vez que lo toques, presiones y deslices gracias al procesador Octa-Core y la memoria RAM de 4 GB.",
            stock: 8,
            category: "cellphone",
            type: "motorola"
        },

        {
            id: 8,
            title: "Motorola Hawaii + G22 AZUL 4+128GB",
            img: "https://cuyodigital.com/cuyo/wp-content/uploads/2021/05/iphone-11-128gb-4gb-pantalla-6_1-camara-dual-12mp-lila-nnet-67240-31.jpeg",
            price: 47999,
            detail: "",
            stock: 9,
            category: "cellphone",
            type: "motorola",
        },

        {
            id: 9,
            title: "Samsung Galaxy A22 128GB+4GB Negro",
            img: "https://www.condorinformatica.uy/imgs/productos/productos31_11361.jpg",
            price: 64999,
            detail: "",
            stock: 15,
            category: "cellphone",
            type: "samsung"
        },

        {
            id: 10,
            title: "Samunng Galaxy A23 128GB+4GB Negro",
            img: "https://cuyodigital.com/cuyo/wp-content/uploads/2021/05/iphone-11-128gb-4gb-pantalla-6_1-camara-dual-12mp-lila-nnet-67240-31.jpeg",
            price: 269.999,
            detail: "",
            stock: 3,
            category: "cellphone",
            type: "samsung"
        },

        {
            id: 11,
            title: "Iphone 13 Mini 128GB Pink",
            img: "https://www.links.hr/content/images/thumbs/011/0112812_smartphone-apple-iphone-13-61-128gb-rozi_400.jpg",
            price: 414499,
            detail: "",
            stock: 8,
            category: "cellphone",
            type: "iphone"
        },

        {
            id: 12,
            title: "Samsung Galaxy Z FLIP3 128GB+8GB Cream 5G",
            img: "https://images.officeworks.com.au/api/2/img/https://s3-ap-southeast-2.amazonaws.com/wc-prod-pim/JPEG_1000x1000/SAMZFP31CM_.jpg/resize?size=600&auth=MjA5OTcwODkwMg__",
            price: 219999,
            detail: "",
            stock: 12,
            category: "",
            type: "samsung"
        },

        {
            id: 13,
            title: "Motorola G82 6+128GB 5G Negro",
            img: "https://http2.mlstatic.com/D_NQ_NP_740012-MLA51045207905_082022-O.jpg",
            price: 74999,
            detail: "",
            stock: 12,
            category: "cellphone",
            type: "motorola"
        },

        {
            id: 14,
            title: "Samsung Galaxy A53 5G 128+6GB Negro",
            img: "https://cuyodigital.com/cuyo/wp-content/uploads/2021/05/iphone-11-128gb-4gb-pantalla-6_1-camara-dual-12mp-lila-nnet-67240-31.jpeg",
            price: 122999,
            detail: "",
            stock: 3,
            category: "cellphone",
            type: "samsung"
        }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(data), 2000)
    })
}

export const getProductId = (id) => {
    return new Promise ((resolve) => {
        let productId = data.find( product => {
            return product.id === parseInt(id)
        })
        setTimeout(() => resolve(productId), 500)
    })
}

export const getProductCategory = (category) => {
    return new Promise ((resolve) => {
        let productCategory = data.filter( product => {
            return product.type === category
        })
        setTimeout(() => resolve(productCategory), 500)
    })
}