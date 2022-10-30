//CARGAR EL DETAIL DE LOS ITEMS//
import { initializeApp } from "firebase/app";
import { addDoc, 
        collection, 
        doc, 
        getDocs, 
        getFirestore, 
        query,
        getDoc,
        where} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD89oiBHMrenRMIdftd6sQy6iL_q12irq0",
  authDomain: "first-react-work.firebaseapp.com",
  projectId: "first-react-work",
  storageBucket: "first-react-work.appspot.com",
  messagingSenderId: "51210430588",
  appId: "1:51210430588:web:b92e4ec6b65ce697db81f9"
};

const firebaseAPI = initializeApp(firebaseConfig);
const db = getFirestore(firebaseAPI)

export const getProducts = async () => {
    const collectionProducts = collection(db, "products")
    let result = await getDocs(collectionProducts);
    let data = result.docs.map( doc =>{
        return {id: doc.id, ...doc.data()};
    })
    return data;
}

export const getProductId = async (id) => {
try {
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);
    if(docSnap.exists()){
    return {id: docSnap.id, ...docSnap.data()}
    }
    else{
        throw new Error("No se encontró el ID especificado.")
    }
    }
catch(errorMsg){
    console.error(errorMsg)
}
}

export const getProductCategory = async (categoryID) => {
    const collectionProducts = collection(db, "products");
    const queryCat = query(collectionProducts, where("type", "==", categoryID));
    let results  = await getDocs(queryCat);
    let dataCategory = results.docs.map( doc =>{
        return {id: doc.id, ...doc.data()};
    })
    return dataCategory;
} 

export const  createOrder = async (orderData) => {
    const docOrder = collection(db, "orders");
    let newOrder = await addDoc(docOrder, orderData);
    return newOrder.id;
}

 const letUpDb  = async () => {
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
            img: "https://www.megatone.net/Images/Articulos/zoom2x/209/02/KIT2232MOT_5.jpg",
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
            img: "https://romitech.com.gt/web/image/product.template/1775/image_256",
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
            img: "https://www.condorinformatica.uy/imgs/productos/productos31_11502.jpg",
            price: 122999,
            detail: "",
            stock: 3,
            category: "cellphone",
            type: "samsung"
        }
]
    const docRef = collection(db, "products")

    for(let product of data){
        delete(product.id)
        await addDoc(docRef,product);
    }
}

export default letUpDb;