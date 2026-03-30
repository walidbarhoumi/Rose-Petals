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
        image: "assets/images/la bomba.jpg"
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
        image: "assets/images/aventus.jpg"
    },
    {
        id: 9,
        name: "Good Girl",
        type: "Oriental",
        mode: "EDP",
        price: 125,
        description: "Une touche florale espiègle, la chaleur du cacao et un contraste irrésistible.",
        image: "assets/images/absol.jpg"
    },
    {
        id: 10,
        name: "YSL Y",
        type: "Fresh",
        mode: "EDP",
        price: 115,
        description: "Une fraîcheur claire et nette, des bois aromatiques et un style sans effort.",
        image: "assets/images/alien.jpg"
    },
    {
        id: 11,
        name: "Light Blue",
        type: "Citrus",
        mode: "EDT",
        price: 85,
        description: "Des agrumes baignés de soleil et une pomme fraîche, équilibrés par des bois aériens.",
        image: "assets/images/altha.jpg"
    },
    {
        id: 12,
        name: "Mon Paris",
        type: "Fruity",
        mode: "EDP",
        price: 105,
        description: "Une étincelle romantique de fruits rouges qui se fond dans des bois doux et crémeux.",
        image: "assets/images/bacc.jpg"
    },
    {
        id: 13,
        name: "Terre d'Hermès",
        type: "Woody",
        mode: "EDT",
        price: 130,
        description: "Un pamplemousse terreux et des tonalités minérales qui se posent sur le cèdre chaud.",
        image: "assets/images/bella.jpg"
    },
    {
        id: 14,
        name: "Si",
        type: "Floral",
        mode: "EDP",
        price: 145,
        description: "L'élégance veloutée du cassis noir, avec une lueur rose-vanille toute en douceur.",
        image: "assets/images/bomb.jpg"
    },
    {
        id: 15,
        name: "Prada Luna Rossa",
        type: "Fresh",
        mode: "EDT",
        price: 98,
        description: "Une fraîcheur mentholée qui mène vers des bois aromatiques et une note cuir aérienne.",
        image: "assets/images/burber.jpg"
    },
    {
        id: 16,
        name: "Angel",
        type: "Gourmand",
        mode: "EDP",
        price: 160,
        description: "Des ailes gourmandes célestes : vanille veloutée et profondeur de patchouli, riches et chaudes.",
        image: "assets/images/chloe.jpg"
    },
    // Added 8 more premium perfumes with official bottle images
    {
        id: 17,
        name: "Jo Malone English Pear & Freesia",
        type: "Fruity Floral",
        mode: "EDP",
        price: 165,
        description: "Poires mûres et freesia délicate dans un sillage soyeux d'ambre.",
        image: "assets/images/coco madem.jpg"
    },
    {
        id: 18,
        name: "Versace Eros",
        type: "Oriental Fougère",
        mode: "EDT",
        price: 95,
        description: "Menthe fraîche, pomme et vanille tonka pour une séduction magnétique.",
        image: "assets/images/coco.jpg"
    },
    {
        id: 19,
        name: "Maison Francis Kurkdjian Baccarat Rouge 540",
        type: "Oriental Floral",
        mode: "EDP",
        price: 325,
        description: "Safran brûlé, amande aigre-douce et jasmin aérien dans une explosion ambrée.",
        image: "assets/images/coral.jpg"
    },
    {
        id: 20,
        name: "Byredo Gypsy Water",
        type: "Woody",
        mode: "EDP",
        price: 195,
        description: "Baies de genièvre, pin sylvestre et bois de santal pour une liberté boisée.",
        image: "assets/images/delina.jpg"
    },
    {
        id: 21,
        name: "Le Labo Santal 33",
        type: "Woody Spicy",
        mode: "EDP",
        price: 210,
        description: "Santal crémeux, cuir végétal et épices irisées dans une signature culte.",
        image: "assets/images/dior.jpg"
    },
    {
        id: 22,
        name: "Diptyque Philosykos",
        type: "Fruity Green",
        mode: "EDP",
        price: 185,
        description: "Figue juteuse et feuilles vertes cueillies à la perfection méditerranéenne.",
        image: "assets/images/dream.jpg"
    },
    {
        id: 23,
        name: "Frederic Malle Musc Ravageur",
        type: "Oriental",
        mode: "EDP",
        price: 295,
        description: "Musc vanillé sensuel et animalique, une chaleur addictive et sophistiquée.",
        image: "assets/images/eau.jpg"
    },
    {
        id: 24,
        name: "Amouage Interlude Man",
        type: "Oriental Fougère",
        mode: "EDP",
        price: 320,
        description: "Oud fumé, encens mystique et bergamote dans un tourbillon oriental épique.",
        image: "assets/images/elixir.jpg"
    },
        {
        id: 25,
        name: "Initio Parfums Oud for Greatness",
        type: "Woody Oriental",
        mode: "EDP",
        price: 330,
        description: "Un oud majestueux sublimé par le safran et la lavande, puissant et mystique.",
        image: "assets/images/empo 2.jpg"
    },
    {
        id: 26,
        name: "Parfums de Marly Layton",
        type: "Spicy Woody",
        mode: "EDP",
        price: 240,
        description: "Pomme épicée, vanille et bois nobles pour une élégance addictive.",
        image: "assets/images/empo 3.jpg"
    },
    {
        id: 27,
        name: "Xerjoff Naxos",
        type: "Sweet Tobacco",
        mode: "EDP",
        price: 275,
        description: "Miel doré, tabac et lavande dans une composition riche et chaleureuse.",
        image: "assets/images/empo 4.jpg"
    },
    {
        id: 28,
        name: "Kilian Angels' Share",
        type: "Gourmand",
        mode: "EDP",
        price: 260,
        description: "Cognac, cannelle et vanille pour une gourmandise luxueuse et enivrante.",
        image: "assets/images/empo 5.jpg"
    },
    {
        id: 29,
        name: "Maison Margiela Jazz Club",
        type: "Warm Spicy",
        mode: "EDT",
        price: 140,
        description: "Rhum, tabac blond et vanille dans une ambiance feutrée de club privé.",
        image: "assets/images/empo.jpg"
    },
    {
        id: 30,
        name: "Tom Ford Lost Cherry",
        type: "Fruity Gourmand",
        mode: "EDP",
        price: 290,
        description: "Cerise noire, amande et liqueur sucrée dans un parfum audacieux.",
        image: "assets/images/erba.jpg"
    },
    {
        id: 31,
        name: "Giorgio Armani My Way",
        type: "Floral",
        mode: "EDP",
        price: 125,
        description: "Tubéreuse lumineuse et fleur d’oranger dans une signature moderne.",
        image: "assets/images/escada.jpg"
    },
    {
        id: 32,
        name: "Valentino Donna Born in Roma",
        type: "Floral Oriental",
        mode: "EDP",
        price: 120,
        description: "Jasmin lumineux et vanille bourbon pour une féminité contemporaine.",
        image: "assets/images/escada 1.jpg"
    },
    {
        id: 33,
        name: "Jean Paul Gaultier Le Male",
        type: "Oriental Fougère",
        mode: "EDT",
        price: 95,
        description: "Lavande fraîche et vanille douce dans une signature iconique.",
        image: "assets/images/escada 2.jpg"
    },
    {
        id: 34,
        name: "Paco Rabanne 1 Million",
        type: "Spicy Leather",
        mode: "EDT",
        price: 105,
        description: "Cannelle, cuir et agrumes pour une énergie flamboyante.",
        image: "assets/images/extra.jpg"
    },
    {
        id: 35,
        name: "Burberry Her",
        type: "Fruity",
        mode: "EDP",
        price: 110,
        description: "Fruits rouges et musc blanc dans une douceur addictive.",
        image: "assets/images/familia.jpg"
    },
    {
        id: 36,
        name: "Chloé Eau de Parfum",
        type: "Floral",
        mode: "EDP",
        price: 115,
        description: "Rose fraîche et élégante avec une touche poudrée raffinée.",
        image: "assets/images/gentle.jpg"
    },
    {
        id: 37,
        name: "Gucci Bloom",
        type: "Floral",
        mode: "EDP",
        price: 120,
        description: "Un bouquet blanc riche de jasmin et tubéreuse éclatante.",
        image: "assets/images/gourmand.jpg"
    },
    {
        id: 38,
        name: "Mugler Alien",
        type: "Oriental Floral",
        mode: "EDP",
        price: 130,
        description: "Jasmin solaire et bois ambré dans une aura mystérieuse.",
        image: "assets/images/greenlay.jpg"
    },
    {
        id: 39,
        name: "Montblanc Explorer",
        type: "Woody Aromatic",
        mode: "EDP",
        price: 90,
        description: "Bergamote, vétiver et patchouli pour un esprit aventurier.",
        image: "assets/images/haltan.jpg"
    },
    {
        id: 40,
        name: "Hugo Boss Bottled",
        type: "Woody Spicy",
        mode: "EDT",
        price: 85,
        description: "Pomme, cannelle et bois pour une élégance intemporelle.",
        image: "assets/images/imag.jpg"
    },
    {
        id: 41,
        name: "Yves Saint Laurent Libre",
        type: "Floral",
        mode: "EDP",
        price: 135,
        description: "Lavande et fleur d’oranger dans une liberté brûlante.",
        image: "assets/images/intense.jpg"
    },
    {
        id: 42,
        name: "Givenchy L'Interdit",
        type: "Floral Oriental",
        mode: "EDP",
        price: 125,
        description: "Tubéreuse intense et vétiver sombre pour une dualité fascinante.",
        image: "assets/images/inter.jpg"
    },
    {
        id: 43,
        name: "Narciso Rodriguez For Her",
        type: "Musky Floral",
        mode: "EDP",
        price: 120,
        description: "Musc poudré et rose délicate pour une sensualité discrète.",
        image: "assets/images/iris.jpg"
    },
    {
        id: 44,
        name: "Bvlgari Man in Black",
        type: "Oriental Spicy",
        mode: "EDP",
        price: 130,
        description: "Rhum, cuir et épices dans une intensité charismatique.",
        image: "assets/images/kayali 2.jpg"
    },
    {
        id: 45,
        name: "Azzaro Wanted",
        type: "Woody Spicy",
        mode: "EDT",
        price: 95,
        description: "Citron, gingembre et bois pour une énergie audacieuse.",
        image: "assets/images/kayali 3.jpg"
    },
    {
        id: 46,
        name: "Calvin Klein Euphoria",
        type: "Oriental",
        mode: "EDP",
        price: 90,
        description: "Grenade, orchidée et bois pour une sensualité exotique.",
        image: "assets/images/kayali 4.jpg"
    },
    {
        id: 47,
        name: "Lancôme Idôle",
        type: "Floral",
        mode: "EDP",
        price: 115,
        description: "Rose pure et jasmin lumineux dans une modernité élégante.",
        image: "assets/images/kayali 5.jpg"
    },
    {
        id: 48,
        name: "Dolce & Gabbana The One",
        type: "Oriental",
        mode: "EDP",
        price: 110,
        description: "Vanille chaude et ambre dans une signature séduisante.",
        image: "assets/images/kayali 6.jpg"
    },
    {
        id: 49,
        name: "Versace Dylan Blue",
        type: "Fresh Woody",
        mode: "EDT",
        price: 100,
        description: "Agrumes, encens et bois pour une fraîcheur intense.",
        image: "assets/images/kayali 7.jpg"
    },
    {
        id: 50,
        name: "Maison Francis Kurkdjian Oud Satin Mood",
        type: "Oriental Woody",
        mode: "EDP",
        price: 340,
        description: "Rose veloutée, oud et vanille dans une opulence soyeuse.",
        image: "assets/images/kayali 8.jpg"
    },
        {
        id: 51,
        name: "Roja Parfums Elysium",
        type: "Fresh Citrus",
        mode: "EDP",
        price: 320,
        description: "Agrumes éclatants et notes aromatiques pour une fraîcheur sophistiquée.",
        image: "assets/images/kayali 9.jpg"
    },
    {
        id: 52,
        name: "Initio Side Effect",
        type: "Oriental Spicy",
        mode: "EDP",
        price: 300,
        description: "Rhum, cannelle et tabac dans une addiction sombre et sensuelle.",
        image: "assets/images/kayali.jpg"
    },
    {
        id: 53,
        name: "Parfums de Marly Delina",
        type: "Floral Fruity",
        mode: "EDP",
        price: 280,
        description: "Rose turque, litchi et vanille dans une élégance féminine luxueuse.",
        image: "assets/images/khamra.jpg"
    },
    {
        id: 54,
        name: "Xerjoff Erba Pura",
        type: "Fruity",
        mode: "EDP",
        price: 270,
        description: "Cocktail fruité lumineux enveloppé d’un musc doux et moderne.",
        image: "assets/images/la vie est.jpg"
    },
    {
        id: 55,
        name: "Kilian Black Phantom",
        type: "Gourmand",
        mode: "EDP",
        price: 295,
        description: "Café noir, rhum et chocolat pour une profondeur envoûtante.",
        image: "assets/images/la vie.jpg"
    },
    {
        id: 56,
        name: "Maison Margiela By the Fireplace",
        type: "Woody Gourmand",
        mode: "EDT",
        price: 140,
        description: "Châtaigne grillée, vanille et bois fumé pour un confort hivernal.",
        image: "assets/images/lhomme.jpg"
    },
    {
        id: 57,
        name: "Tom Ford Tobacco Vanille",
        type: "Sweet Spicy",
        mode: "EDP",
        price: 310,
        description: "Tabac riche et vanille crémeuse dans une chaleur enveloppante.",
        image: "assets/images/lira 1.jpg"
    },
    {
        id: 58,
        name: "Amouage Reflection Man",
        type: "Floral Woody",
        mode: "EDP",
        price: 290,
        description: "Jasmin, bois de santal et musc dans une pureté élégante.",
        image: "assets/images/lira.jpg"
    },
    {
        id: 59,
        name: "Byredo Bal d'Afrique",
        type: "Woody Floral",
        mode: "EDP",
        price: 200,
        description: "Vétiver, agrumes et fleurs pour une énergie vibrante.",
        image: "assets/images/lost.jpg"
    },
    {
        id: 60,
        name: "Diptyque Eau Duelle",
        type: "Spicy Vanilla",
        mode: "EDP",
        price: 180,
        description: "Vanille épicée et bois aromatiques pour une douceur raffinée.",
        image: "assets/images/mada.jpg"
    },
    {
        id: 61,
        name: "Frederic Malle Portrait of a Lady",
        type: "Oriental Floral",
        mode: "EDP",
        price: 330,
        description: "Rose intense, patchouli et encens dans une opulence majestueuse.",
        image: "assets/images/meteo.jpg"
    },
    {
        id: 62,
        name: "Le Labo Another 13",
        type: "Musky",
        mode: "EDP",
        price: 210,
        description: "Ambroxan pur et musc pour une signature minimaliste et addictive.",
        image: "assets/images/most.jpg"
    },
    {
        id: 63,
        name: "Jo Malone Wood Sage & Sea Salt",
        type: "Fresh Marine",
        mode: "EDP",
        price: 150,
        description: "Sel marin, sauge et bois flotté pour une liberté côtière.",
        image: "assets/images/niche.jpg"
    },
    {
        id: 64,
        name: "Maison Francis Kurkdjian Gentle Fluidity Gold",
        type: "Vanilla Musky",
        mode: "EDP",
        price: 260,
        description: "Vanille, ambre et musc dans une douceur enveloppante.",
        image: "assets/images/nuit.jpg"
    },
    {
        id: 65,
        name: "Montale Intense Cafe",
        type: "Gourmand",
        mode: "EDP",
        price: 150,
        description: "Café noir et rose dans une gourmandise élégante.",
        image: "assets/images/ombre.jpg"
    },
    {
        id: 66,
        name: "Mancera Cedrat Boise",
        type: "Citrus Woody",
        mode: "EDP",
        price: 145,
        description: "Citron, cassis et bois pour une fraîcheur raffinée.",
        image: "assets/images/oriana.jpg"
    },
    {
        id: 67,
        name: "Nishane Hacivat",
        type: "Fruity Woody",
        mode: "EDP",
        price: 280,
        description: "Ananas, mousse de chêne et bois pour une élégance moderne.",
        image: "assets/images/percival.jpg"
    },
    {
        id: 68,
        name: "Tiziana Terenzi Kirke",
        type: "Fruity",
        mode: "EDP",
        price: 250,
        description: "Fruits exotiques et musc dans une explosion sucrée.",
        image: "assets/images/prada.jpg"
    },
    {
        id: 69,
        name: "Juliette Has a Gun Not a Perfume",
        type: "Minimal",
        mode: "EDP",
        price: 120,
        description: "Ambroxan pur pour une simplicité élégante et moderne.",
        image: "assets/images/rose.jpg"
    },
    {
        id: 70,
        name: "Escentric Molecules Molecule 01",
        type: "Woody",
        mode: "EDT",
        price: 140,
        description: "Iso E Super pour une aura subtile et magnétique.",
        image: "assets/images/sauvage.jpg"
    },
    {
        id: 71,
        name: "Zadig & Voltaire This is Him",
        type: "Woody Spicy",
        mode: "EDT",
        price: 95,
        description: "Encens, vanille et bois dans un style rock élégant.",
        image: "assets/images/si.jpg"
    },
    {
        id: 72,
        name: "Zadig & Voltaire This is Her",
        type: "Gourmand",
        mode: "EDP",
        price: 100,
        description: "Vanille, chantilly et bois pour une douceur rebelle.",
        image: "assets/images/strava.jpg"
    },
    {
        id: 73,
        name: "Carolina Herrera Bad Boy",
        type: "Oriental Spicy",
        mode: "EDT",
        price: 105,
        description: "Poivre noir, cacao et fève tonka pour un contraste intense.",
        image: "assets/images/straw.jpg"
    },
    {
        id: 74,
        name: "Armani Code",
        type: "Oriental",
        mode: "EDT",
        price: 110,
        description: "Fève tonka, cuir et agrumes pour une séduction intemporelle.",
        image: "assets/images/tobacco.jpg"
    },
    {
        id: 75,
        name: "Diesel Only The Brave",
        type: "Woody",
        mode: "EDT",
        price: 85,
        description: "Citron, cuir et ambre dans une énergie audacieuse.",
        image: "assets/images/ulta.jpg"
    },
    {
        id: 76,
        name: "Hermès Twilly",
        type: "Floral Spicy",
        mode: "EDP",
        price: 120,
        description: "Gingembre, tubéreuse et santal dans une féminité espiègle.",
        image: "assets/images/vanilla kayali.jpg"
    },
    {
        id: 77,
        name: "Givenchy Gentleman",
        type: "Woody Aromatic",
        mode: "EDP",
        price: 115,
        description: "Lavande, iris et cuir pour une élégance masculine moderne.",
        image: "assets/images/vanilla.jpg"
    },
    {
        id: 78,
        name: "Boucheron Jaipur",
        type: "Oriental Spicy",
        mode: "EDP",
        price: 90,
        description: "Épices chaudes et vanille dans un style oriental classique.",
        image: "assets/images/woman.jpg"
    },
    {
        id: 79,
        name: "Cartier Declaration",
        type: "Woody Spicy",
        mode: "EDT",
        price: 100,
        description: "Cardamome, cèdre et cuir pour une signature élégante.",
        image: "assets/images/yara.jpg"
    },
    {
        id: 80,
        name: "Loewe 001 Man",
        type: "Woody",
        mode: "EDP",
        price: 130,
        description: "Bois, musc et épices pour une intimité raffinée.",
        image: "assets/images/prada 1.jpg"
    },
    {
        id: 81,
        name: "Loewe 001 Man",
        type: "Woody",
        mode: "EDP",
        price: 130,
        description: "Bois, musc et épices pour une intimité raffinée.",
        image: "assets/images/arab.jpg"
    },
    {
        id: 82,
        name: "Loewe 001 Man",
        type: "Woody",
        mode: "EDP",
        price: 130,
        description: "Bois, musc et épices pour une intimité raffinée.",
        image: "assets/images/armani.jpg"
    },
    {
        id: 83,
        name: "Loewe 001 Man",
        type: "Woody",
        mode: "EDP",
        price: 130,
        description: "Bois, musc et épices pour une intimité raffinée.",
        image: "assets/images/bottle.jpg"
    },
    {
        id: 84,
        name: "Loewe 001 Man",
        type: "Woody",
        mode: "EDP",
        price: 130,
        description: "Bois, musc et épices pour une intimité raffinée.",
        image: "assets/images/crystal.jpg"
    }
];

