import React from 'react';
import CardProducts from './CardProducts/CardProducts';
import './ItemListContainer.css'
import '../../global.css'

const ItemListContainer = () => {
    return (
        <div className="container-products flex-center">
           <CardProducts title="Xiamoi Redmi 10 4/64GB GRIS 4G" img="https://www.netcomuruguay.com/imgs/productos/productos31_11366.jpg" price={63999} />
           <CardProducts title="Motorola G22 128GB Negro" img="https://images.rappi.com/products/2e7e4998-dab7-4a60-9d69-cddfd40b8b9e.png?d=200x200&e=webp" price={47.999} />
           <CardProducts title="Motorola Moto G52 128GB Azul" img="https://img.olx.com.br/thumbs256x256/39/393283925823030.jpg" price={59.999} />
           <CardProducts title="Samsung Galaxy A03 Core 32GB Ceramic Black" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbusSsoRqgGsEgYThpQQiKr4ZgpR6MKOwK_r-IHEhueD2sU4U_0DDNPObr_yDe_sGHnbs&usqp=CAU" price={31.499}/>
           <CardProducts title="Samsung Galaxy A13 128GB Negro" img="https://www.otec.com.uy/imgs/productos/productos31_47615.jpg" price={60.999} />
           <CardProducts title="IPhone 11 128 GB Blanco" img="https://cuyodigital.com/cuyo/wp-content/uploads/2021/05/iphone-11-128gb-4gb-pantalla-6_1-camara-dual-12mp-lila-nnet-67240-31.jpeg" price={269.999} />
        </div>
    );
};

export default ItemListContainer;