const perfumes = [
    {
        id: 1,
        name: "Chanel No. 5",
        type: "Floral",
        mode: "EDP",
        price: 150,
        description: "Un chef-d'œuvre floral iconique, une étincelle d'aldéhydes crémeux et soyeux.",
        image: "assets/images/miss dior.jpg"
    },
    {
        id: 2,
        name: "Dior Sauvage",
        type: "Woody",
        mode: "EDT",
        price: 120,
        description: "Une ouverture d'agrumes frais qui laisse place à un sillage boisé chaud.",
        image: "assets/images/jasmin.jpg"
    },
    {
        id: 3,
        name: "Tom Ford Oud Wood",
        type: "Oriental",
        mode: "EDP",
        price: 285,
        description: "Une profondeur d'oud luxueuse, enveloppée d'épices sombres et de bois lisses.",
        image: "assets/images/good girl.jpg"
    },
    {
        id: 4,
        name: "Creed Aventus",
        type: "Fruity",
        mode: "EDP",
        price: 350,
        description: "Une énergie d'ananas éclatante qui se transforme en bois fumé et en finale nette.",
        image: "assets/images/la bobma.jpg"
    },
    {
        id: 5,
        name: "La Vie Est Belle",
        type: "Floral",
        mode: "EDP",
        price: 135,
        description: "L'iris poudré et des notes gourmandes sucrées pour une humeur lumineuse et assurée.",
        image: "assets/images/libre yves.jpg"
    },
    {
        id: 6,
        name: "Bleu de Chanel",
        type: "Woody",
        mode: "EDP",
        price: 140,
        description: "Une élégante progression des agrumes vers le cèdre, raffinée et résolument moderne.",
        image: "assets/images/my way.jpg"
    },
    {
        id: 7,
        name: "Black Opium",
        type: "Gourmand",
        mode: "EDP",
        price: 110,
        description: "Une douceur au café, un cœur floral fumé pour les soirées qui s'allument.",
        image: "assets/images/prada.jpg"
    },
    {
        id: 8,
        name: "Acqua di Gio",
        type: "Aquatic",
        mode: "EDT",
        price: 95,
        description: "La fraîcheur d'une brise marine, des notes minérales et des bois délicats.",
        image: "https://www.fragrantica.com/perfume-images/Giorgio-Armani-Acqua-di-Giò-Pour-Homme-1.jpg"
    },
    {
        id: 9,
        name: "Good Girl",
        type: "Oriental",
        mode: "EDP",
        price: 125,
        description: "Une touche florale espiègle, la chaleur du cacao et un contraste irrésistible.",
        image: "https://www.fragrantica.com/perfume-images/Carolina-Herrera-Good-Girl-1.jpg"
    },
    {
        id: 10,
        name: "YSL Y",
        type: "Fresh",
        mode: "EDP",
        price: 115,
        description: "Une fraîcheur claire et nette, des bois aromatiques et un style sans effort.",
        image: "https://www.fragrantica.com/perfume-images/Yves-Saint-Laurent-Y-EDP-1.jpg"
    },
    {
        id: 11,
        name: "Light Blue",
        type: "Citrus",
        mode: "EDT",
        price: 85,
        description: "Des agrumes baignés de soleil et une pomme fraîche, équilibrés par des bois aériens.",
        image: "https://www.fragrantica.com/perfume-images/Dolce-Gabbana-Light-Blue-1.jpg"
    },
    {
        id: 12,
        name: "Mon Paris",
        type: "Fruity",
        mode: "EDP",
        price: 105,
        description: "Une étincelle romantique de fruits rouges qui se fond dans des bois doux et crémeux.",
        image: "https://www.fragrantica.com/perfume-images/Lancôme-Mon-Paris-1.jpg"
    },
    {
        id: 13,
        name: "Terre d'Hermès",
        type: "Woody",
        mode: "EDT",
        price: 130,
        description: "Un pamplemousse terreux et des tonalités minérales qui se posent sur le cèdre chaud.",
        image: "https://www.fragrantica.com/perfume-images/Hermès-Terre-d-Hermès-1.jpg"
    },
    {
        id: 14,
        name: "Si",
        type: "Floral",
        mode: "EDP",
        price: 145,
        description: "L'élégance veloutée du cassis noir, avec une lueur rose-vanille toute en douceur.",
        image: "https://www.fragrantica.com/perfume-images/Armani-Sì-1.jpg"
    },
    {
        id: 15,
        name: "Prada Luna Rossa",
        type: "Fresh",
        mode: "EDT",
        price: 98,
        description: "Une fraîcheur mentholée qui mène vers des bois aromatiques et une note cuir aérienne.",
        image: "https://www.fragrantica.com/perfume-images/Prada-Luna-Rossa-Carbon-1.jpg"
    },
    {
        id: 16,
        name: "Angel",
        type: "Gourmand",
        mode: "EDP",
        price: 160,
        description: "Des ailes gourmandes célestes : vanille veloutée et profondeur de patchouli, riches et chaudes.",
        image: "https://www.fragrantica.com/perfume-images/Mugler-Angel-1.jpg"
    },
    // Added 8 more premium perfumes with official bottle images
    {
        id: 17,
        name: "Jo Malone English Pear & Freesia",
        type: "Fruity Floral",
        mode: "EDP",
        price: 165,
        description: "Poires mûres et freesia délicate dans un sillage soyeux d'ambre.",
        image: "https://www.fragrantica.com/perfume-images/Jo-Malone-London-English-Pear-Freesia-1.jpg"
    },
    {
        id: 18,
        name: "Versace Eros",
        type: "Oriental Fougère",
        mode: "EDT",
        price: 95,
        description: "Menthe fraîche, pomme et vanille tonka pour une séduction magnétique.",
        image: "https://www.fragrantica.com/perfume-images/Versace-Eros-1.jpg"
    },
    {
        id: 19,
        name: "Maison Francis Kurkdjian Baccarat Rouge 540",
        type: "Oriental Floral",
        mode: "EDP",
        price: 325,
        description: "Safran brûlé, amande aigre-douce et jasmin aérien dans une explosion ambrée.",
        image: "https://www.fragrantica.com/perfume-images/Maison-Francis-Kurkdjian-Baccarat-Rouge-540-1.jpg"
    },
    {
        id: 20,
        name: "Byredo Gypsy Water",
        type: "Woody",
        mode: "EDP",
        price: 195,
        description: "Baies de genièvre, pin sylvestre et bois de santal pour une liberté boisée.",
        image: "https://www.fragrantica.com/perfume-images/Byredo-Gypsy-Water-1.jpg"
    },
    {
        id: 21,
        name: "Le Labo Santal 33",
        type: "Woody Spicy",
        mode: "EDP",
        price: 210,
        description: "Santal crémeux, cuir végétal et épices irisées dans une signature culte.",
        image: "https://www.fragrantica.com/perfume-images/Le-Labo-Santal-33-1.jpg"
    },
    {
        id: 22,
        name: "Diptyque Philosykos",
        type: "Fruity Green",
        mode: "EDP",
        price: 185,
        description: "Figue juteuse et feuilles vertes cueillies à la perfection méditerranéenne.",
        image: "https://www.fragrantica.com/perfume-images/Diptyque-Philosykos-1.jpg"
    },
    {
        id: 23,
        name: "Frederic Malle Musc Ravageur",
        type: "Oriental",
        mode: "EDP",
        price: 295,
        description: "Musc vanillé sensuel et animalique, une chaleur addictive et sophistiquée.",
        image: "https://www.fragrantica.com/perfume-images/Frederic-Malle-Musc-Ravageur-1.jpg"
    },
    {
        id: 24,
        name: "Amouage Interlude Man",
        type: "Oriental Fougère",
        mode: "EDP",
        price: 320,
        description: "Oud fumé, encens mystique et bergamote dans un tourbillon oriental épique.",
        image: "https://www.fragrantica.com/perfume-images/Amouage-Interlude-Man-1.jpg"
    }
];

