const products =[
    {
        id:"pst01.c19",
        name:"Colt 1911 M45a1",
        description:"Esta réplica del clásico Colt 1911, utilizado por las fuerzas armadas de EE.UU., ofrece una estética robusta y un diseño icónico. Su construcción en metal le otorga una sensación realista al manejarla, mientras que su precisión es ideal para jugadores que buscan una experiencia auténtica. Con su diseño ergonómico y su funcionalidad fiable, es perfecta para coleccionistas y entusiastas de Airsoft que aprecian las réplicas militares.",
        stock:13,
        price:50,
        image:"https://www.reborn.com.ar/wp-content/uploads/sites/2/2020/11/39.png",
        category:"Pistolas",
    },
    {
        id:"pst02.g19",
        name:"Glock-19c",
        description:"Réplica compacta y ligera del popular modelo Glock 19c, conocido por su uso en fuerzas policiales de todo el mundo. Esta réplica semiautomática está diseñada para ofrecer maniobrabilidad en escenarios cerrados, con un sistema de retroceso que simula el disparo real. Gracias a su tamaño reducido y su diseño táctico, es ideal para jugadores que buscan rapidez y agilidad en el campo de batalla de Airsoft.",
        stock:10,
        price:60,
        image:"https://cdn11.bigcommerce.com/s-50c7cl/images/stencil/1280x1280/products/5537/27186/GLUG1959203_1_HR__34319.1675958171.jpg?c=2?imbypass=on",
        category:"Pistolas",
    },
    {
        id:"pst03.57",
        name:"Fn Five-Seven",
        description:"La FN Five-Seven es una réplica fiel de la pistola famosa por su capacidad de disparar munición de alta velocidad. Esta réplica de Airsoft captura la ergonomía y la estética de la original, con detalles tácticos que la hacen destacar. Su diseño ligero y su bajo retroceso hacen que sea una excelente opción tanto para juegos dinámicos como para coleccionistas.",
        stock:7,
        price:90,
        image:"https://fnamerica.com/wp-content/uploads/2016/10/five-seven-360-028.jpg",
        category:"Pistolas",
    },
    {
        id:"pst04.p32",
        name:"Sig Sauer P320",
        description:"Réplica detallada del modelo Sig Sauer P320, que ha sido adoptado por varias fuerzas militares y policiales a nivel mundial. Esta réplica cuenta con un cuerpo robusto y un sistema de disparo semiautomático preciso, lo que la convierte en una excelente opción para jugadores de Airsoft que buscan un arma confiable y realista. Su diseño modular permite personalizarla para diferentes estilos de juego.",
        stock:11,
        price:65,
        image:"https://acdn.mitiendanube.com/stores/123/378/products/sig-320c-9-b-31-b7fced25021ca7852316217866537705-640-0.jpg",
        category:"Pistolas",
    },
    {
        id:"pst05.m17",
        name:"Sig Sauer M17",
        description:"Esta réplica del Sig Sauer M17, el arma estándar del ejército de EEUU, ofrece una construcción de alta calidad con acabados fieles al modelo original. Con un diseño ergonómico, cargador de gran capacidad y excelente precisión, esta réplica es ideal tanto para aficionados al Airsoft como para quienes buscan una réplica auténtica para su colección.",
        stock:3,
        price:70,
        image:"https://www.armeriacanigo.com.ar/wp-content/uploads/6995_1.jpg",
        category:"Pistolas",
    },
    {
        id:"rfl01.m14",
        name:"MK-14 EBR",
        description:"Réplica del rifle de tirador designado MK-14 EBR, diseñado para disparos de precisión a largas distancias. Esta réplica de Airsoft destaca por su robustez y su diseño táctico, ideal para escenarios de combate donde la precisión es clave. Con un cañón largo y un sistema de disparo semiautomático, es una excelente opción para jugadores que desempeñan roles de francotirador o tirador en partidas de Airsoft.",
        stock:2,
        price:230,
        image:"https://onestrikemall.co.id/wp-content/uploads/2023/08/WE-GBB-M14EBR_1-600x600.png",
        category:"Rifles",
    },
    {
        id:"rfl02.mrgs",
        name:"MRGG-S",
        description:"Réplica de un rifle táctico semiautomático con un diseño moderno y robusto. Esta arma es perfecta para jugadores que buscan una combinación de potencia y precisión en sus partidas de Airsoft. Su construcción resistente y su diseño ergonómico permiten un uso cómodo durante largas sesiones de juego. Ideal para entornos tácticos y de combate en equipos.",
        stock:3,
        price:200,
        image:"https://cdn4.volusion.store/esqkj-rqypt/v/vspfiles/photos/LTH65C-22-K-BLK-2.jpg?v-cache=1696514510",
        category:"Rifles",
    },
    {
        id:"rfl03.m24",
        name:"M24",
        description:"Réplica fiel del legendario rifle de francotirador M24, ampliamente utilizado por las fuerzas armadas. Esta réplica de Airsoft ofrece una alta precisión, ideal para quienes desempeñan el rol de francotirador en partidas largas. Su construcción de alta calidad y su diseño realista brindan una experiencia inmersiva, siendo una opción excelente para jugadores avanzados.",
        stock:4,
        price:195,
        image:"https://http2.mlstatic.com/D_664522-MLA75701278666_042024-C.jpg",
        category:"Rifles",
    },
    {
        id:"rfl04.scrh",
        name:"FN SCAR-H PR",
        description:"Réplica del SCAR-H, un fusil de asalto utilizado por unidades de operaciones especiales. Este modelo de Airsoft ofrece una gran versatilidad gracias a su diseño modular y su capacidad para adaptarse a diferentes entornos de combate. Con una gran precisión y potencia, es perfecto para jugadores de Airsoft que buscan un rifle versátil para medio y largo alcance.",
        stock:6,
        price:240,
        image:"https://www.evike.com/images/cybergun-26746-sm.jpg",
        category:"Rifles",
    },
    {
        id:"ar01.fal",
        name:"FN Fal",
        description:"Réplica del icónico fusil de batalla FN FAL o 'Fusil Argentino', que ha sido utilizado por numerosos ejércitos alrededor del mundo. Este modelo de Airsoft destaca por su durabilidad y potencia, siendo una excelente opción para partidas de medio y largo alcance. Su diseño clásico y su construcción robusta lo convierten en una de las réplicas más apreciadas por los jugadores que buscan autenticidad y rendimiento en el campo de juego.",
        stock:7,
        price:240,
        image:"https://photo.weaponsystems.net/image/s-carousel/n-fa_ar_fal_p04.jpg/--/img/ws/fa_ar_fal_p04.jpg",
        category:"AR",
    },
    {
        id:"ar02.g36",
        name:"HK G36 C",
        description:"Réplica compacta del fusil de asalto alemán HK G36 C, conocido por su precisión y su ligereza. Este modelo de Airsoft es ideal para partidas en entornos cerrados y de combate rápido. Su diseño ergonómico y su sistema de disparo semiautomático ofrecen un gran control y precisión, lo que la convierte en una excelente elección para jugadores que buscan movilidad y efectividad.",
        stock:4,
        price:235,
        image:"https://gispack.com.mx/wp-content/uploads/2019/07/HKG36cv1.jpg",
        category:"AR",
    },
    {
        id:"ar03.ar15",
        name:"BAR15",
        description:"Réplica moderna del AR-15 producido bajo licencia por la empresa argentina BERSA, conocida por su rendimiento confiable y su capacidad táctica. Este modelo de Airsoft es ideal para jugadores que buscan un arma versátil para combate a corta y media distancia. Con múltiples opciones de personalización y un diseño ergonómico, el BAR15 es perfecto para aquellos que valoran tanto la potencia como la maniobrabilidad.",
        stock:8,
        price:210,
        image:"https://www.zona-militar.com/wp-content/smush-webp/2024/09/bersa_ar15.jpg.webp",
        category:"AR",
    },
    {
        id:"ar04.ak74",
        name:"AK-74M",
        description:"Fusil de asalto clasico kalashnikov, famoso por su durabilidad y fiabilidad en cualquier condición. Esta réplica de Airsoft captura a la perfección el diseño robusto y el rendimiento eficiente del modelo original. Ideal para jugadores que buscan un arma con alto impacto visual y funcionalidad en el campo de batalla.",
        stock:3,
        price:200,
        image:"https://img.kalashnikovgroup.ru/2120,fit/https://cdn.kalashnikovgroup.ru/static/images/a/k/7/ak74m-d019134-3kh2-13363-1080.jpg",
        category:"AR",
    },
    {
        id:"ar05.gala",
        name:"GALIL ACE 22",
        description:"Réplica fiel del fusil israelí, diseñado para brindar durabilidad y rendimiento en combate. Esta réplica de Airsoft captura la robustez y ergonomía del modelo original, ofreciendo una gran precisión a medio y largo alcance. Ideal para jugadores que buscan un arma confiable con un diseño táctico.",
        stock:10,
        price:205,
        image:"https://preview.redd.it/ly8zts91koa51.jpg?auto=webp&s=c38cde177f4e0fc28d23f8eafb91d0868bb9d203",
        category:"AR",
    },
    {
        id:"ar06.416",
        name:"HK 416",
        description:"Réplica detallada del fusil de asalto HK 416, ampliamente utilizado por fuerzas especiales. Con un diseño robusto y modular, esta réplica de Airsoft ofrece precisión y potencia en combates de medio y corto alcance. Es perfecta para jugadores que buscan versatilidad y adaptabilidad en diferentes escenarios tácticos.",
        stock:2,
        price:225,
        image:"https://res.cloudinary.com/tmh-trading-gmbh/image/private/s--zUwnXTCt--/webshop/media/4e/6c/2a/1703312230/112372060_1.jpg?_a=AAFIKBs",
        category:"AR",
    },
    {
        id:"smg01.mp7",
        name:"MP7",
        description:"Réplica de la subametralladora alemana MP7, conocida por su diseño compacto y ligero. Esta réplica de Airsoft es ideal para combates en espacios cerrados, ofreciendo gran movilidad y rapidez de disparo. Perfecta para jugadores que necesitan velocidad y maniobrabilidad en el campo de batalla.",
        stock:4,
        price:150,
        image:"https://watint.com.au/cdn/shop/collections/2258873.webp?v=1679900241",
        category:"SMG",
    },
    {
        id:"smg02.tmp",
        name:"TMP",
        description:"Réplica de la subametralladora TMP (Tactical Machine Pistol), diseñada para disparos rápidos y precisos. Su tamaño compacto y ligero la hacen ideal para enfrentamientos en entornos cerrados o urbanos. Es una excelente opción para jugadores que buscan una subametralladora de alta velocidad en partidas de Airsoft.",
        stock:7,
        price:105,
        image:"https://static1.gunfire.com/spa_pl_Ametralladora-de-airsoft-MP9-A1-negro-1152196255_2.webp",
        category:"SMG",
    },
    {
        id:"smg03.um45",
        name:"HK UMP-45",
        description:"Réplica fiel de la UMP-45 (Universelle Maschinen Pistole «subfusil universal»), una subametralladora utilizada por varias fuerzas de seguridad alrededor del mundo. Esta réplica de Airsoft destaca por su diseño táctico y su potencia de disparo. Con una construcción robusta y gran capacidad de munición, es ideal para jugadores que prefieren un estilo de combate más agresivo.",
        stock:1,
        price:125,
        image:"https://www.airsoftclub.gr/wp-content/uploads/2009/08/products-vf2-lump-bk01_r2-1.jpg",
        category:"SMG",
    },    {
        id:"smg04.mp5",
        name:"MP5",
        description:" Réplica de la clásica subametralladora MP5, famosa por su uso en operaciones tácticas y policiales como el S.A.S britanico. Esta réplica de Airsoft ofrece un disparo preciso y suave, con un diseño compacto ideal para combate cercano. Perfecta para jugadores que buscan una mezcla de velocidad y control en sus partidas.",
        stock:3,
        price:125,
        image:"https://igunairsoft.com/product_image/images/%E7%84%A1%E5%93%81%E7%89%8C%E6%A7%8D%E5%9E%8B/%E9%95%B7%E6%A7%8D/BOLTE050SWB%20BOLT%20MP5%20TACTICAL%20RAIL%20%E8%A1%9D%E9%8B%92%E6%A7%8D%20EBB%20AEG%20%E9%9B%BB%E5%8B%95%E6%A7%8D%20%E9%BB%91.jpg",
        category:"SMG",
    },
    {
        id:"smg05.pp19",
        name:"PP-19 Bizzon",
        description:"Réplica de la subametralladora rusa PP-19 Bizon, conocida por su cargador helicoidal de alta capacidad. Esta réplica de Airsoft es ideal para combates prolongados, ofreciendo una gran capacidad de munición y disparo rápido. Perfecta para jugadores que buscan una subametralladora eficiente y fiable.",
        stock:4,
        price:120,
        image:"https://item-shopping.c.yimg.jp/i/z/airsoftclub_pps-aeg-pp19-03",
        category:"SMG",
    },
    {
        id:"smg06.pp20",
        name:"PP-2000",
        description:"Réplica de la subametralladora rusa PP-2000, famosa por su diseño compacto y su facilidad de uso. Esta réplica de Airsoft es ideal para enfrentamientos en espacios reducidos, ofreciendo rapidez de disparo y una excelente maniobrabilidad. Es perfecta para jugadores que necesitan un arma ligera y versátil.",
        stock:14,
        price:100,
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs1nhS9HkCnlEsNqXD3OIAGbznrx37-FEhRWAISEv0CQXu0FOdNq1xJzPfiy0OGrqEJ5c&usqp=CAU",
        category:"SMG",
    },
    {
        id:"smg07.fn90",
        name:"FN P90",
        description:"Réplica del icónico FN P90, un arma futurista y compacta ampliamente utilizada en fuerzas especiales. Su diseño bullpup permite una gran maniobrabilidad en combate cercano, mientras que su alta cadencia de disparo la convierte en una opción eficaz en el campo de Airsoft. Ideal para jugadores que buscan una estética única y rendimiento ágil.",
        stock:9,
        price:110,
        image:"https://m.media-amazon.com/images/I/713ScMV8dYL._AC_SL1500_.jpg",
        category:"SMG",
    },
    {
        id:"smg08.krsv",
        name:"KRISS Vector",
        description:"Réplica de la subametralladora KRISS Vector, famosa por su innovador diseño de retroceso reducido. Esta réplica de Airsoft ofrece una precisión superior y estabilidad en disparos rápidos, siendo ideal para partidas en espacios cerrados. Su diseño moderno y táctico la hace popular entre los jugadores que buscan rendimiento y estilo.",
        stock:6,
        price:130,
        image:"https://media-cdn.redwolfairsoft.com/catalog/product/cache/92109b5bc73ebc41f4ba08fbd08f8f55/K/T/KTGBB-VSMGF-FDE02-1L.jpg",
        category:"SMG",
    },
    {
        id:"stg01.sps12",
        name:"SPAS 12",
        description:"Réplica de la legendaria escopeta SPAS-12, conocida por su uso en operaciones tácticas. Esta réplica de Airsoft captura la potencia y el diseño intimidante de la original, ofreciendo un disparo devastador a corta distancia. Ideal para jugadores que prefieren el combate agresivo y cercano en partidas de Airsoft.",
        stock:3,
        price:135,
        image:"https://www.airsoftgi.com/images/airsoft-asg-franchi-spas12-c.jpg",
        category:"Escopetas",
    },
    {
        id:"stg02.ms50",
        name:"Mossberg 500",
        description:"Réplica de la clásica escopeta Mossberg 500, ampliamente utilizada por fuerzas de seguridad y cazadores. Esta réplica de Airsoft ofrece un disparo potente y fiable, siendo ideal para escenarios de combate a corta distancia. Perfecta para jugadores que buscan una escopeta táctica y resistente.",
        stock:4,
        price:120,
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/PEO_Mossberg_590A1.jpg/1200px-PEO_Mossberg_590A1.jpg",
        category:"Escopetas",
    },
    {
        id:"stg03.aa12",
        name:"AA-12",
        description:"Réplica de la escopeta automática AA-12, famosa por su capacidad de disparo completamente automático y su uso en entornos de combate intenso. Esta réplica de Airsoft destaca por su potencia de fuego y capacidad de disparo rápido, ideal para jugadores que buscan un arma devastadora a corta distancia. Su diseño robusto y su capacidad para disparar una gran cantidad de munición sin interrupciones la convierten en una excelente opción para partidas agresivas y tácticas.",
        stock:4,
        price:150,
        image:"https://i.redd.it/4o1kcqp20wob1.jpg",
        category:"Escopetas",
    },
    {
        id:"stg04.sg12",
        name:"Saiga 12",
        description:"Réplica del fusil semiautomático Saiga 12, basado en el diseño del AK-47 pero adaptado para munición de escopeta. Esta réplica de Airsoft ofrece una gran capacidad de disparo y potencia a corta distancia, siendo ideal para jugadores que prefieren un estilo de juego más agresivo y cercano.",
        stock:5,
        price:160,
        image:"https://www.evike.com/images/large/tm-115513.jpg",
        category:"Escopetas",
    },
    {
        id:"stg05.bt12",
        name:"BTS 12",
        description:"Réplica de la escopeta BTS 12, diseñada para combate cercano y táctico. Esta réplica de Airsoft ofrece un disparo rápido y potente, ideal para escenarios de combate cerrados donde la velocidad y la contundencia son esenciales. Su diseño moderno la convierte en una excelente opción para jugadores avanzados.",
        stock:2,
        price:150,
        image:"https://www.armeriacanigo.com.ar/wp-content/uploads/11925_2-416x416.jpg",
        category:"Escopetas",
    },
    {
        id:"ammo01.crg",
        name:"Cargador De Bbs",
        description:"Utilizado para agilizar las cargas de Mags",
        stock:24,
        price:10,
        image:"https://http2.mlstatic.com/D_NQ_NP_849009-MLA50221830156_062022-O.webp",
        category:"Municion",
    },
    {
        id:"ammo02.6mm",
        name:"BBs 6mm",
        description:"Municion plastica 6mm ",
        stock:126,
        price:5,
        image:"https://http2.mlstatic.com/D_602918-MLA76423761875_052024-C.jpg",
        category:"Municion",
    },
    {
        id:"ammo03.6bio",
        name:"BBs 6mm Biodegradables",
        description:"Municion plastica 6mm biodegradables por agua",
        stock:73,
        price:7,
        image:"https://m.media-amazon.com/images/I/61kTvKUjhJL.jpg",
        category:"Municion",
    },
    {
        id:"ammo04.gg6",
        name:"Garrafa GreenGas 600ml",
        description:"GreenGas",
        stock:78,
        price:3,
        image:"https://http2.mlstatic.com/D_680109-MLA48109794666_112021-C.jpg",
        category:"Municion",
    },
    {
        id:"ammo05.gg1",
        name:"Garrafa GreenGas 1000ml",
        description:"GreenGas",
        stock:57,
        price:6,
        image:"https://www.taiwangun.com/img/product_media/15001-16000/green-gas-asg-airsoft-green-gaz-800ml-pro-tech-guns-15471(1-1).jpg",
        category:"Municion",
    },
    {
        id:"Txtl01.hmt",
        name:"Casco Tactico",
        description:"Casco estilo NAVY SEAL, Plastico ABS de tamaño ajustable.",
        stock:12,
        price:101,
        image:"https://www.airsoftquimera.com/productos/imagenes/img_15253_0dc9a621aba25b16bcdeb80d216de428_1.jpg",
        category:"Indumentaria",
    },
    {
        id:"Txtl02.clv",
        name:"Guante Tactico",
        description:"Guante tactico dedos cortados",
        stock:35,
        price:12,
        image:"https://http2.mlstatic.com/D_NQ_NP_811003-MLA54965832906_042023-O.webp",
        category:"Indumentaria",
    },
    {
        id:"Txtl03.thr",
        name:"Pantalon Cargo",
        description:"Pantalon de carga tactico",
        stock:23,
        price:40,
        image:"https://http2.mlstatic.com/D_NQ_NP_910762-MLA72019702444_102023-O.webp",
        category:"Indumentaria",
    },
    {
        id:"Txtl04.ufr",
        name:"Uniforme",
        description:"Camiseta bajo chaleco",
        stock:43,
        price:23,
        image:"https://http2.mlstatic.com/D_NQ_NP_910439-MLA73194944491_122023-O.webp",
        category:"Indumentaria",
    },
    {
        id:"Txtl06.chc",
        name:"Chaleco PortaPlaca",
        description:"Chaleco de proteccion estelo SEAL",
        stock:18,
        price:25,
        image:"https://http2.mlstatic.com/D_NQ_NP_943825-MLM74724643245_022024-O.webp",
        category:"Indumentaria",
    },
    {
        id:"Txtl07.kve",
        name:"Cuchillo Utileria",
        description:"Cuchillo de combate estilo karambit",
        stock:32,
        price:10,
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNYNFi92fuVTqc0yd-9z4WYOtTD4yH1nK2b2uA8iQ63573xMBM45FXhPR5gXwEcQ_ZBK4&usqp=CAU",
        category:"Indumentaria",
    },
    {
        id:"Txtl08.atj",
        name:"Anteojos de proteccion",
        description:"Proteccion ocular obligatoria",
        stock:47,
        price:12,
        image:"https://http2.mlstatic.com/D_NQ_NP_608518-MLA48691035217_122021-O.webp",
        category:"Indumentaria",
    },
    {
        id:"Txtl09.cbm",
        name:"Cubre Miras",
        description:"Placa de plastico para proteger opticas",
        stock:16,
        price:9,
        image:"https://http2.mlstatic.com/D_NQ_NP_862436-MLM45641500104_042021-O.webp",
        category:"Indumentaria",
    },
    {
        id:"Txtl10.cyr",
        name:"Coderas y Rodilleras",
        description:"proteccion de articulaciones extra",
        stock:43,
        price:17,
        image:"https://www.bomberomania.com.ar/wp-content/uploads/productos/Kit-de-Rodilleras-y-Coderas-Reforzado-Profesional-Bomberomania-1.jpg",
        category:"Indumentaria",
    },
    {
        id:"Txtl11.bcv",
        name:"Balaclava",
        description:"pasamontañas negro",
        stock:102,
        price:5,
        image:"https://acdn.mitiendanube.com/stores/001/487/623/products/balaclava-negra1-8dc1333886a00250e516214518303053-1024-1024.jpg",
        category:"Indumentaria",
    },
    {
        id:"Txtl12.mcr",
        name:"Mascarilla Proteccion",
        description:"proteccion facial",
        stock:53,
        price:4,
        image:"https://ae01.alicdn.com/kf/H5af685b81f4c4274b342461188ac1a16M.jpg?width=800&height=678&hash=1478",
        category:"Indumentaria",
    },
    {
        id:"Txtl13.bts",
        name:"Borsegos",
        description:"Borsegos tipo militar",
        stock:13,
        price:40,
        image:"https://http2.mlstatic.com/D_649478-MLA53482785422_012023-O.jpg",
        category:"Indumentaria",
    },
    {
        id:"Txtl14.bag",
        name:"Mochila",
        description:"Mochila tipo militar",
        stock:15,
        price:15,
        image:"https://www.digital-storeweb.com.ar/wp-content/uploads/sites/18/2020/09/6-1.jpg",
        category:"Indumentaria",
    },
]

const getProducts = () =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 2000);
    })
}

export { getProducts }