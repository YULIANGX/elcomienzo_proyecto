    const dishes = [
      {
        name: "Huevos benedictinos con salmón", category: "entradas", label: "Clásico de brunch", priceValue: 8900, calories: 520,
        description: "Muffin tostado, huevos pochados, salmón y salsa holandesa cremosa.",
        ingredients: ["Muffin inglés tostado", "Huevos pochados", "Salmón ahumado", "Salsa holandesa", "Cebollín fresco"],
        extras: [{ name: "Aguacate", price: 900 }, { name: "Papas rústicas", price: 700 }],
        image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&w=900&q=85", model: "models/huevos-benedictinos.glb", usdz: "models/huevos-benedictinos.usdz", alt: "Huevos benedictinos con salmón y salsa holandesa"
      },
      {
        name: "Hongos frescos de estación", category: "entradas", label: "Producto fresco", priceValue: 7600, calories: 35,
        description: "Selección de hongos frescos de estación, con distintas formas y tamaños.",
        ingredients: ["Hongos frescos de estación"],
        extras: [{ name: "Ajo y aceite de oliva", price: 600 }, { name: "Perejil fresco", price: 400 }],
        image: "https://images.unsplash.com/photo-1504545102780-26774c1bb073?auto=format&fit=crop&w=900&q=85", model: "models/hongos.glb", usdz: "models/hongos.usdz", alt: "Selección de hongos frescos de estación"
      },
      {
        name: "Arepa de plátano maduro rellena", category: "entradas", label: "Sabor del Quindío", priceValue: 17500, calories: 680,
        description: "Arepa dulce de plátano maduro, rellena de carne desmechada con hogao y queso costeño, gratinada con mozzarella.",
        ingredients: ["Plátano maduro", "Carne desmechada", "Hogao", "Queso costeño", "Mozzarella gratinada"],
        extras: [{ name: "Aguacate", price: 1500 }, { name: "Hogao adicional", price: 700 }, { name: "Queso costeño extra", price: 1200 }],
        image: "assets/arepa-platano-rellena.svg", imageType: "illustration", model: "models/arepa-platano-rellena.glb", usdz: "models/arepa-platano-rellena.usdz", alt: "Arepa de plátano maduro rellena de carne, hogao y quesos gratinados"
      },
      {
        name: "Aborrajados reinventados", category: "entradas", label: "Dos preparaciones", priceValue: 13900, pricePrefix: "Desde ",
        calories: 620, caloriesLabel: "460–620", description: "Plátano maduro con queso fundido. Elige la versión dorada con cerdo desmechado y BBQ de guayaba, o la alternativa sin freír con suero costeño.",
        ingredients: ["Plátano maduro", "Queso fundido"],
        variants: [
          { name: "Fritos con cerdo BBQ de guayaba", priceValue: 15800, calories: 620, ingredients: ["Cerdo desmechado", "Salsa BBQ de guayaba"], model: "models/aborrajados-bbq.glb", usdz: "models/aborrajados-bbq.usdz" },
          { name: "Sin freír con suero costeño", priceValue: 13900, calories: 460, ingredients: ["Suero costeño"], model: "models/aborrajados-sin-freir.glb", usdz: "models/aborrajados-sin-freir.usdz" }
        ],
        extras: [{ name: "Queso costeño extra", price: 1100 }, { name: "Hogao adicional", price: 700 }, { name: "BBQ de guayaba extra", price: 700 }],
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7b/Aborrajados_de_pl%C3%A1tano_maduro.jpg/960px-Aborrajados_de_pl%C3%A1tano_maduro.jpg", imageCredit: { author: "Ethnobotanical Historian", license: "CC BY-SA 4.0", source: "https://commons.wikimedia.org/wiki/File:Aborrajados_de_pl%C3%A1tano_maduro.jpg" }, alt: "Aborrajados de plátano maduro rellenos de queso y guayaba"
      },
      {
        name: "Papas chorreadas con quesos regionales", category: "entradas", label: "Quesos colombianos", priceValue: 14500, calories: 430,
        description: "Papas criollas bañadas en hogao cremoso, terminadas con queso Paipa y queso pera fundidos.",
        ingredients: ["Papa criolla", "Hogao", "Queso Paipa", "Queso pera"],
        extras: [{ name: "Queso Paipa extra", price: 1200 }, { name: "Queso pera extra", price: 1000 }, { name: "Chicharrón crocante", price: 1800 }],
        image: "assets/papas-chorreadas.svg", imageType: "illustration", model: "models/papas-chorreadas.glb", usdz: "models/papas-chorreadas.usdz", alt: "Papas chorreadas con hogao y quesos Paipa y pera"
      },
      {
        name: "Carimañolas caribeñas", category: "entradas", label: "Tradición costeña", priceValue: 13900, calories: 520,
        description: "Croquetas doradas de masa de yuca, rellenas de carne molida guisada y servidas con suero costeño.",
        ingredients: ["Masa de yuca", "Carne molida guisada", "Suero costeño"],
        extras: [{ name: "Suero costeño extra", price: 900 }, { name: "Ají de la casa", price: 500 }, { name: "Hogao adicional", price: 700 }],
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/be/Carima%C3%B1olas_empanadas_arepas_de_huevo.jpg/960px-Carima%C3%B1olas_empanadas_arepas_de_huevo.jpg", imageCredit: { author: "Jdvillalobos", license: "CC BY 3.0", source: "https://commons.wikimedia.org/wiki/File:Carima%C3%B1olas_empanadas_arepas_de_huevo.jpg" }, model: "models/carimanolas-caribenas.glb", usdz: "models/carimanolas-caribenas.usdz", alt: "Carimañolas de yuca doradas entre frituras tradicionales de la costa"
      },
      {
        name: "Patacones con toppings", category: "entradas", label: "Arma tu combinación", priceValue: 12900, calories: 390,
        description: "Patacones de plátano verde con hogao de la casa; puedes sumar guacamole o carnes desmechadas.",
        ingredients: ["Patacones de plátano verde", "Hogao de la casa"],
        extras: [{ name: "Guacamole", price: 1400 }, { name: "Carne desmechada", price: 2800 }, { name: "Cerdo desmechado", price: 2800 }, { name: "Queso costeño", price: 1000 }],
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3b/Patacones_con_queso_-_Barranquilla.jpg/960px-Patacones_con_queso_-_Barranquilla.jpg", imageCredit: { author: "Jdvillalobos", license: "CC BY 3.0", source: "https://commons.wikimedia.org/wiki/File:Patacones_con_queso_-_Barranquilla.jpg" }, model: "models/patacones-toppings.glb", usdz: "models/patacones-toppings.usdz", alt: "Patacones colombianos servidos con queso costeño"
      },
      {
        name: "Salmón a la plancha con vegetales", category: "principales", label: "A la plancha", priceValue: 18500, calories: 480,
        description: "Filete de salmón dorado, acompañado de vegetales verdes y zanahoria.",
        ingredients: ["Salmón a la plancha", "Vegetales verdes", "Zanahoria", "Limón"],
        extras: [{ name: "Espárragos extra", price: 1100 }, { name: "Salsa cítrica", price: 600 }],
        image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=900&q=85", model: "models/pesca.glb", usdz: "models/pesca.usdz", alt: "Salmón a la plancha con vegetales verdes y zanahoria"
      },
      {
        name: "Thali indio de curries", category: "principales", label: "Para compartir", priceValue: 21000, calories: 680,
        description: "Selección de curries y guisos especiados, servidos con arroz y pan plano.",
        ingredients: ["Arroz", "Curries especiados", "Vegetales y legumbres", "Pan plano"],
        extras: [{ name: "Porción extra de arroz", price: 1200 }, { name: "Raita de yogur", price: 700 }],
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=900&q=85", model: "models/thali.glb", usdz: "models/thali.usdz", alt: "Thali indio con arroz, curries y pan plano"
      },
      {
        name: "Risotto cremoso", category: "principales", label: "Vegetariano", priceValue: 14800, calories: 520,
        description: "Arroz cremoso con queso rallado y hierbas frescas.",
        ingredients: ["Arroz carnaroli", "Caldo", "Queso parmesano", "Manteca", "Perejil"],
        extras: [{ name: "Queso parmesano extra", price: 800 }, { name: "Hongos salteados", price: 1300 }],
        image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=900&q=85", model: "models/risotto.glb", usdz: "models/risotto.usdz", alt: "Risotto cremoso con queso y hierbas frescas"
      },
      {
        name: "Tarta de frutos rojos y crema", category: "postres", label: "De la casa", priceValue: 6200, calories: 430,
        description: "Bizcocho en capas con crema, frutos rojos y frambuesas frescas.",
        ingredients: ["Bizcocho", "Crema", "Mermelada de frutos rojos", "Frambuesas frescas"],
        extras: [{ name: "Frambuesas extra", price: 900 }, { name: "Crema inglesa", price: 600 }],
        image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=900&q=85", model: "models/tarta.glb", usdz: "models/tarta.usdz", alt: "Tarta en capas con crema y frambuesas frescas"
      },
      {
        name: "Café tinto colombiano", category: "bebidas", label: "Clásico colombiano", priceValue: 6000, calories: 5,
        description: "Café colombiano de origen, servido negro y recién preparado.",
        ingredients: ["Café colombiano de origen", "Agua caliente"],
        extras: [{ name: "Shot adicional de espresso", price: 1800 }, { name: "Panela", price: 700 }],
        image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=85", model: "models/cafe-tinto-colombiano.glb", usdz: "models/cafe-tinto-colombiano.usdz", alt: "Taza de café colombiano recién preparado"
      },
      {
        name: "Café campesino con panela", category: "bebidas", label: "Con panela", priceValue: 6500, calories: 45,
        description: "Café colombiano endulzado con panela, una preparación cálida y tradicional.",
        ingredients: ["Café colombiano", "Panela", "Agua caliente"],
        extras: [{ name: "Leche", price: 1000 }, { name: "Shot adicional de café", price: 1500 }],
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=85", model: "models/cafe-campesino.glb", usdz: "models/cafe-campesino.usdz", alt: "Café servido en una taza sobre una mesa"
      },
      {
        name: "Café con leche", category: "bebidas", label: "Caliente", priceValue: 7500, calories: 110,
        description: "Café colombiano equilibrado con leche vaporizada.",
        ingredients: ["Café colombiano", "Leche vaporizada"],
        extras: [{ name: "Shot adicional de espresso", price: 1800 }, { name: "Canela", price: 500 }],
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=85", model: "models/cafe-con-leche.glb", usdz: "models/cafe-con-leche.usdz", alt: "Café con leche vaporizada"
      },
      {
        name: "Milo frío", category: "bebidas", label: "Fría", priceValue: 8500, calories: 240,
        description: "Milo preparado con leche fría y hielo, ideal para refrescarse.",
        ingredients: ["Milo", "Leche fría", "Hielo"],
        extras: [{ name: "Crema batida", price: 1000 }, { name: "Porción extra de Milo", price: 800 }],
        image: "https://images.unsplash.com/photo-1786052598262-9c649b0d825f?auto=format&fit=crop&w=900&q=85", model: "models/milo-frio.glb", usdz: "models/milo-frio.usdz", alt: "Malteada fría de chocolate con crema"
      },
      {
        name: "Limonada natural", category: "bebidas", label: "Refrescante", priceValue: 7500, calories: 120,
        description: "Limonada fresca preparada al momento con limón, agua, panela y hielo.",
        ingredients: ["Limón", "Agua", "Panela", "Hielo"],
        extras: [{ name: "Hierbabuena", price: 500 }, { name: "Jengibre", price: 500 }, { name: "Preparar con soda", price: 1000 }],
        image: "https://images.unsplash.com/photo-1754317893261-9a0121d6954b?auto=format&fit=crop&w=900&q=85", model: "models/limonada-natural.glb", usdz: "models/limonada-natural.usdz", alt: "Limonada con rodajas de limón y hierbabuena"
      },
      {
        name: "Limonada de coco", category: "bebidas", label: "De la casa", priceValue: 10500, calories: 260,
        description: "Limonada cremosa con coco y hielo, de sabor tropical.",
        ingredients: ["Limón", "Leche de coco", "Hielo"],
        extras: [{ name: "Coco rallado extra", price: 700 }, { name: "Leche condensada", price: 800 }],
        image: "https://images.unsplash.com/photo-1583578449206-ac0980dd77b7?auto=format&fit=crop&w=900&q=85", model: "models/limonada-coco.glb", usdz: "models/limonada-coco.usdz", alt: "Bebida fría de coco con una rodaja de limón"
      },
      {
        name: "Cerveza nacional", category: "bebidas", label: "330 ml", priceValue: 9000, calories: 145,
        description: "Cerveza lager nacional servida bien fría.",
        ingredients: ["Cerveza lager nacional", "Malta", "Lúpulo"],
        extras: [{ name: "Rodaja de limón", price: 500 }, { name: "Preparación michelada", price: 1200 }],
        image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=900&q=85", model: "models/cerveza.glb", usdz: "models/cerveza.usdz", alt: "Vaso de cerveza fría"
      },
      {
        name: "Gaseosa", category: "bebidas", label: "350 ml", priceValue: 5000, calories: 140,
        description: "Gaseosa fría en presentación individual de 350 ml.",
        ingredients: ["Gaseosa fría"],
        extras: [{ name: "Vaso con hielo", price: 500 }, { name: "Rodaja de limón", price: 500 }],
        image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?auto=format&fit=crop&w=900&q=85", model: "models/gaseosa.glb", usdz: "models/gaseosa.usdz", alt: "Gaseosa fría servida con hielo"
      },
      {
        name: "Agua sin gas", category: "bebidas", label: "500 ml", priceValue: 4000, calories: 0,
        description: "Agua natural embotellada, servida fría.",
        ingredients: ["Agua natural embotellada"],
        extras: [{ name: "Rodajas de limón", price: 500 }, { name: "Vaso con hielo", price: 500 }],
        image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=900&q=85", model: "models/agua-sin-gas.glb", usdz: "models/agua-sin-gas.usdz", alt: "Agua fresca servida en un vaso"
      },
      {
        name: "Agua con gas", category: "bebidas", label: "500 ml", priceValue: 5000, calories: 0,
        description: "Agua con gas embotellada, servida fría.",
        ingredients: ["Agua con gas embotellada"],
        extras: [{ name: "Rodajas de limón", price: 500 }, { name: "Hierbabuena", price: 500 }],
        image: "https://images.unsplash.com/photo-1759692586961-af88fb3b55c7?auto=format&fit=crop&w=900&q=85", model: "models/agua-con-gas.glb", usdz: "models/agua-con-gas.usdz", alt: "Agua con gas fría con limón"
      },
      {
        name: "Aguapanela de la casa", category: "bebidas", label: "Tradicional", priceValue: 5500, calories: 110,
        description: "Panela de caña disuelta lentamente en agua caliente, con un delicado toque cítrico.",
        ingredients: ["Panela artesanal", "Agua caliente", "Limón"],
        extras: [{ name: "Queso campesino", price: 1200 }, { name: "Jengibre fresco", price: 500 }, { name: "Limón extra", price: 400 }],
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7f/Aguapanela-Colombiana-3-2.jpg/960px-Aguapanela-Colombiana-3-2.jpg", imageCredit: { author: "Mappa Stellae", license: "CC BY-SA 4.0", source: "https://commons.wikimedia.org/wiki/File:Aguapanela-Colombiana-3-2.jpg" }, model: "models/aguapanela.glb", usdz: "models/aguapanela.usdz", alt: "Aguapanela colombiana acompañada de queso y pan"
      },
      {
        name: "Chocolate caliente de la casa", category: "bebidas", label: "Cacao y canela", priceValue: 8500, calories: 230,
        description: "Chocolate de mesa fundido en leche, espumado al momento y perfumado con canela.",
        ingredients: ["Chocolate de mesa", "Leche", "Canela"],
        extras: [{ name: "Queso campesino", price: 1200 }, { name: "Crema batida", price: 1000 }, { name: "Chocolate rallado", price: 700 }],
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/48/Chocolate_caliente_con_queso_1.jpg/960px-Chocolate_caliente_con_queso_1.jpg", imageCredit: { author: "Caldobasico", license: "CC BY-SA 4.0", source: "https://commons.wikimedia.org/wiki/File:Chocolate_caliente_con_queso_1.jpg" }, model: "models/chocolate-caliente.glb", usdz: "models/chocolate-caliente.usdz", alt: "Chocolate caliente colombiano espumado, servido con queso y pan"
      },
      {
        name: "Lulada quindiana", category: "bebidas", label: "Fruta fresca", priceValue: 8500, calories: 180,
        description: "Lulo fresco macerado con limón, panela y hielo picado; una bebida vibrante del Eje Cafetero.",
        ingredients: ["Lulo fresco", "Limón", "Panela", "Hielo picado"],
        extras: [{ name: "Pulpa extra de lulo", price: 900 }, { name: "Hierbabuena", price: 500 }, { name: "Preparar con soda", price: 1000 }],
        image: "assets/lulada.svg", imageType: "illustration", model: "models/lulada.glb", usdz: "models/lulada.usdz", alt: "Lulada de lulo con pulpa fresca, hielo triturado y limón"
      },
      {
        name: "Avena colombiana artesanal", category: "bebidas", label: "Cremosa y fría", priceValue: 7500, calories: 260,
        description: "Avena cocida a fuego lento con leche, panela y canela, servida fría con textura sedosa.",
        ingredients: ["Avena", "Leche", "Panela", "Canela"],
        extras: [{ name: "Canela adicional", price: 400 }, { name: "Avena tostada", price: 700 }, { name: "Leche condensada", price: 800 }],
        image: "assets/avena-colombiana.svg", imageType: "illustration", model: "models/avena-colombiana.glb", usdz: "models/avena-colombiana.usdz", alt: "Avena colombiana fría y cremosa con avena y canela"
      },
      {
        name: "Chicha de maíz", category: "bebidas", label: "Receta tradicional", priceValue: 7500, calories: 150,
        description: "Bebida tradicional de maíz y panela, reposada con especias y servida fría.",
        ingredients: ["Maíz", "Panela", "Canela", "Clavo de olor"],
        extras: [{ name: "Canela adicional", price: 400 }, { name: "Limón", price: 400 }, { name: "Panela extra", price: 500 }],
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bb/Chicha_-_Fiesta_del_Hu%C3%A1n_-_Templo_del_Sol_-_Suamox_-_Boyac%C3%A1_-_Colombia.jpg/960px-Chicha_-_Fiesta_del_Hu%C3%A1n_-_Templo_del_Sol_-_Suamox_-_Boyac%C3%A1_-_Colombia.jpg", imageCredit: { author: "Tisquesusa", license: "CC BY 4.0", source: "https://commons.wikimedia.org/wiki/File:Chicha_-_Fiesta_del_Hu%C3%A1n_-_Templo_del_Sol_-_Suamox_-_Boyac%C3%A1_-_Colombia.jpg" }, model: "models/chicha.glb", usdz: "models/chicha.usdz", alt: "Chicha de maíz servida tradicionalmente en una totuma"
      },
      {
        name: "Masato de arroz y canela", category: "bebidas", label: "Fermentación suave", priceValue: 7000, calories: 180,
        description: "Arroz cocido con panela y especias, reposado hasta lograr un sabor suave y refrescante.",
        ingredients: ["Arroz", "Panela", "Canela", "Clavo de olor"],
        extras: [{ name: "Canela adicional", price: 400 }, { name: "Panela extra", price: 500 }, { name: "Hielo", price: 300 }],
        image: "assets/masato.svg", imageType: "illustration", model: "models/masato.glb", usdz: "models/masato.usdz", alt: "Masato de arroz servido con canela"
      }
    ];

    const grid = document.querySelector("#menu-grid");
    const menuTabs = document.querySelector(".menu-tabs");
    const dialog = document.querySelector("#dish-dialog");
    const cartDialog = document.querySelector("#cart-dialog");
    const dialogIngredients = document.querySelector("#dialog-ingredients");
    const dialogExtras = document.querySelector("#dialog-extras");
    const ingredientModel = document.querySelector("#ingredient-model");
    const dishModel = document.querySelector("#dish-model");
    const cartItems = document.querySelector("#cart-items");
    const cartCount = document.querySelector("#cart-count");
    const cartTotal = document.querySelector("#cart-total");
    const cartMessage = document.querySelector("#cart-message");
    const modelLoading = document.querySelector(".model-loading");
    const modelStatus = document.querySelector("#model-status");
    let activeDish;
    let selectedVariantIndex = 0;
    let selectedIngredients = new Set();
    let selectedExtras = new Set();
    let activeMenuFilter = "todos";
    let dialogCloseTimer;
    let cartCloseTimer;
    let cart = [];

    function ingredientEmoji(name) {
      const ingredient = name.toLocaleLowerCase("es");
      const icons = [
        ["arepa", "🫓"], ["patac", "🍌"], ["plátano", "🍌"], ["platano", "🍌"], ["yuca", "🍠"],
        ["hogao", "🍅"], ["guayaba", "🍯"], ["suero", "🥛"], ["paipa", "🧀"], ["mozzarella", "🧀"],
        ["cerdo", "🥩"], ["papa", "🥔"], ["guacamole", "🥑"], ["chicharrón", "🥓"],
        ["burrata", "🧀"], ["queso", "🧀"], ["duraz", "🍑"], ["hongo", "🍄"],
        ["huevo", "🥚"], ["salmón", "🐟"], ["muffin", "🥯"], ["aguacate", "🥑"], ["piñones", "🌰"],
        ["café", "☕"], ["espresso", "☕"], ["cafe", "☕"], ["panela", "🍯"], ["milo", "🍫"],
        ["chocolate", "🍫"], ["cacao", "🍫"], ["leche", "🥛"], ["limon", "🍋"], ["coco", "🥥"], ["cerveza", "🍺"],
        ["gaseosa", "🥤"], ["agua", "💧"], ["hielo", "🧊"], ["hierbabuena", "🌿"], ["jengibre", "🫚"],
        ["lulo", "🍈"], ["avena", "🌾"], ["maíz", "🌽"], ["maiz", "🌽"], ["canela", "✨"], ["clavo", "✦"],
        ["ferment", "🫧"], ["masato", "🥛"], ["chicha", "🥤"],
        ["coliflor", "🥦"], ["avellana", "🥜"], ["almendra", "🥜"], ["pesc", "🐟"],
        ["espárrag", "🌱"], ["limón", "🍋"], ["cítrica", "🍋"], ["alcaparra", "🫒"],
        ["bife", "🥩"], ["carne", "🥩"], ["papas", "🥔"], ["ajo", "🧄"],
        ["arroz", "🍚"], ["curry", "🍛"], ["legumbres", "🫘"], ["pan plano", "🫓"],
        ["frambuesas", "🍓"], ["frutos rojos", "🍓"], ["bizcocho", "🍰"], ["crema", "🥛"],
        ["calabaza", "🎃"], ["peras", "🍐"], ["vainilla", "🍦"],
        ["helado", "🍨"], ["manteca", "🧈"], ["miel", "🍯"], ["aceite", "🫒"],
        ["tomillo", "🌿"], ["romero", "🌿"], ["salvia", "🌿"], ["eneldo", "🌿"],
        ["albahaca", "🌿"], ["hierbas", "🌿"], ["azúcar", "✨"], ["pan ", "🍞"]
      ];
      return icons.find(([keyword]) => ingredient.includes(keyword))?.[1] || "✦";
    }

    function formatPrice(amount) {
      return new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 }).format(amount);
    }

    function currentDishVariant() {
      return activeDish.variants?.[selectedVariantIndex];
    }

    function currentDishIngredients() {
      return [...activeDish.ingredients, ...(currentDishVariant()?.ingredients || [])];
    }

    function currentDishModel() {
      const variant = currentDishVariant();
      return variant?.model && variant?.usdz ? variant : activeDish;
    }

    function renderDishIngredients() {
      dialogIngredients.innerHTML = currentDishIngredients().map((ingredient, index) => `
        <label class="custom-option is-selected">
          <input type="checkbox" data-ingredient-index="${index}" aria-label="Quitar ${ingredient}" checked>
          <span class="custom-option-icon" aria-hidden="true">${ingredientEmoji(ingredient)}</span>
          <span class="custom-option-name">${ingredient}</span>
          <span class="custom-option-status">Incluido</span>
        </label>`).join("");
    }

    function renderCustomization() {
      const variants = activeDish.variants || [];
      document.querySelector("#dialog-variants").hidden = variants.length === 0;
      document.querySelector("#dialog-variant-options").innerHTML = variants.map((variant, index) => `
        <label class="custom-option variant-option ${index === selectedVariantIndex ? "is-selected" : ""}">
          <input type="radio" name="dish-variant" data-variant-index="${index}" aria-label="Elegir ${variant.name}" ${index === selectedVariantIndex ? "checked" : ""}>
          <span class="custom-option-name">${variant.name}</span>
          <span class="custom-option-status">${formatPrice(variant.priceValue)}</span>
        </label>`).join("");

      renderDishIngredients();
      dialogExtras.innerHTML = activeDish.extras.map((extra, index) => `
        <label class="custom-option">
          <input type="checkbox" data-extra-index="${index}" aria-label="Agregar ${extra.name}">
          <span class="custom-option-icon" aria-hidden="true">${ingredientEmoji(extra.name)}</span>
          <span class="custom-option-name">${extra.name}</span>
          <span class="custom-option-status">${formatPrice(extra.price)}</span>
        </label>`).join("");
    }

    function updateDishPreview() {
      const ingredients = [
        ...selectedIngredients,
        ...[...selectedExtras].map((index) => activeDish.extras[index].name)
      ];
      ingredientModel.innerHTML = ingredients.length ? ingredients.map((ingredient) => `
        <span class="ingredient-piece">
          <span class="ingredient-piece-icon" aria-hidden="true">${ingredientEmoji(ingredient)}</span>${ingredient}
        </span>`).join("") : '<p class="scene-empty">Incluye un ingrediente para verlo en la selección.</p>';

      const extrasPrice = [...selectedExtras].reduce((total, index) => total + activeDish.extras[index].price, 0);
      const basePrice = currentDishVariant()?.priceValue ?? activeDish.priceValue;
      document.querySelector("#dialog-price").textContent = formatPrice(basePrice + extrasPrice);
    }

    function renderCart() {
      const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
      const total = cart.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
      cartCount.textContent = String(itemCount);
      document.querySelector("#cart-open").setAttribute("aria-label", `Abrir pedido, ${itemCount} productos`);
      cartTotal.textContent = formatPrice(total);
      document.querySelector("#cart-clear").disabled = cart.length === 0;
      document.querySelector("#cart-confirm").disabled = cart.length === 0;

      cartItems.innerHTML = cart.length ? cart.map((item, index) => `
        <article class="cart-item">
          <div class="cart-item-heading">
            <h3>${item.name}</h3>
            <button class="cart-remove" type="button" data-cart-remove="${index}" aria-label="Quitar ${item.name} del pedido">Quitar</button>
          </div>
          <p>Incluye: ${item.ingredients.length ? item.ingredients.join(", ") : "Sin ingredientes incluidos"}</p>
          ${item.variant ? `<p>Preparación: ${item.variant}</p>` : ""}
          ${item.extras.length ? `<p>Extras: ${item.extras.join(", ")}</p>` : ""}
          <div class="cart-item-bottom">
            <div class="cart-quantity" aria-label="Cantidad">
              <button type="button" data-cart-quantity="-1" data-cart-index="${index}" aria-label="Disminuir cantidad de ${item.name}" ${item.quantity <= 1 ? "disabled" : ""}>−</button>
              <span aria-live="polite">${item.quantity}</span>
              <button type="button" data-cart-quantity="1" data-cart-index="${index}" aria-label="Aumentar cantidad de ${item.name}">+</button>
            </div>
            <strong>${formatPrice(item.unitPrice * item.quantity)}</strong>
          </div>
        </article>`).join("") : '<p class="cart-empty">Tu pedido está vacío.</p>';
    }

    function addActiveDishToCart() {
      if (!activeDish) return;
      const ingredients = [...selectedIngredients];
      const extras = [...selectedExtras].map((index) => activeDish.extras[index]);
      const variant = currentDishVariant();
      const variantName = variant?.name || "";
      const unitPrice = (variant?.priceValue ?? activeDish.priceValue) + extras.reduce((sum, extra) => sum + extra.price, 0);
      const key = JSON.stringify([
        activeDish.name,
        variantName,
        [...ingredients].sort(),
        extras.map((extra) => extra.name).sort()
      ]);
      const existingItem = cart.find((item) => item.key === key);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cart.push({
          key,
          name: activeDish.name,
          variant: variantName,
          ingredients,
          extras: extras.map((extra) => extra.name),
          unitPrice,
          quantity: 1
        });
      }
      cartMessage.hidden = true;
      cartMessage.textContent = "";
      renderCart();
      document.querySelector("#cart-feedback").textContent = `${activeDish.name}${variantName ? ` (${variantName})` : ""} se agregó a Mi pedido.`;
    }

    function resetModelCamera() {
      dishModel.setAttribute("camera-orbit", "0deg 65deg 0.9m");
      if (typeof dishModel.jumpCameraToGoal === "function") dishModel.jumpCameraToGoal();
    }

    function loadActiveDishModel() {
      const modelAsset = currentDishModel();
      const hasModel = Boolean(modelAsset.model && modelAsset.usdz);
      document.querySelector(".dialog-view-switch").hidden = !hasModel;
      if (hasModel) {
        dishModel.setAttribute("src", modelAsset.model);
        dishModel.setAttribute("ios-src", modelAsset.usdz);
        resetModelCamera();
      } else {
        dishModel.removeAttribute("src");
        dishModel.removeAttribute("ios-src");
      }
      modelStatus.hidden = true;
      return hasModel;
    }

    function openDishDialog(dishIndex) {
      activeDish = dishes[dishIndex];
      selectedVariantIndex = 0;
      selectedIngredients = new Set(currentDishIngredients());
      selectedExtras = new Set();
      const hasModel = loadActiveDishModel();
      document.querySelector("#dialog-title").textContent = activeDish.name;
      document.querySelector("#dialog-description").textContent = activeDish.description;
      document.querySelector("#dialog-img").src = activeDish.image;
      document.querySelector("#dialog-img").alt = activeDish.alt;
      document.querySelector('[data-dialog-view="photo"]').textContent = activeDish.imageType === "illustration" ? "Ilustración" : "Foto";
      const imageCredit = document.querySelector("#dialog-image-credit");
      if (activeDish.imageCredit) {
        imageCredit.href = activeDish.imageCredit.source;
        imageCredit.textContent = `Foto: ${activeDish.imageCredit.author} · ${activeDish.imageCredit.license}`;
        imageCredit.hidden = false;
      } else {
        imageCredit.removeAttribute("href");
        imageCredit.textContent = "";
        imageCredit.hidden = true;
      }
      document.querySelector("#cart-feedback").textContent = "";
      dishModel.setAttribute("alt", activeDish.alt);
      document.querySelector("#dialog-calories").textContent = currentDishVariant()?.calories ?? activeDish.calories;
      document.querySelector("#customization-note").textContent = hasModel
        ? activeDish.variants
          ? "El modelo 3D corresponde a la preparación elegida; quitar ingredientes se guarda en el pedido y no recalcula las calorías."
          : "El modelo 3D muestra la receta base; la personalización se guarda en el carrito y no recalcula las calorías."
        : "La imagen es una referencia de presentación; los cambios se guardan en el carrito y las calorías son estimadas.";
      renderCustomization();
      updateDishPreview();
      modelStatus.hidden = true;
      setDialogView("photo");
      dialog.classList.remove("is-closing");
      window.clearTimeout(dialogCloseTimer);
      dialog.showModal();
    }

    dishModel.addEventListener("progress", (event) => {
      modelLoading.style.width = `${Math.round(event.detail.totalProgress * 100)}%`;
    });
    dishModel.addEventListener("load", () => {
      modelLoading.style.width = "0";
      modelStatus.hidden = true;
    });
    dishModel.addEventListener("error", () => {
      modelLoading.style.width = "0";
      modelStatus.textContent = "No se pudo cargar el modelo 3D. Comprueba que el archivo GLB esté disponible.";
      modelStatus.hidden = false;
    });
    document.querySelector("#model-viewer-library").addEventListener("error", () => {
      modelStatus.textContent = "No se pudo cargar el visor 3D. Revisa la conexión a internet e inténtalo de nuevo.";
      modelStatus.hidden = false;
    });
    document.querySelector("[data-model-reset]").addEventListener("click", resetModelCamera);

    function setDialogView(view) {
      const show3d = view === "3d";
      document.querySelector("#dialog-photo").hidden = show3d;
      document.querySelector("#dish-3d").hidden = !show3d;
      document.querySelectorAll("[data-dialog-view]").forEach((button) => {
        button.setAttribute("aria-pressed", String(button.dataset.dialogView === view));
      });
    }

    dialog.addEventListener("change", (event) => {
      const input = event.target;
      if (input.matches("[data-variant-index]")) {
        selectedVariantIndex = Number(input.dataset.variantIndex);
        selectedIngredients = new Set(currentDishIngredients());
        document.querySelectorAll("[data-variant-index]").forEach((radio) => {
          radio.parentElement.classList.toggle("is-selected", radio.checked);
        });
        renderDishIngredients();
        document.querySelector("#dialog-calories").textContent = currentDishVariant().calories;
        loadActiveDishModel();
        updateDishPreview();
      } else if (input.matches("[data-ingredient-index]")) {
        const ingredient = currentDishIngredients()[Number(input.dataset.ingredientIndex)];
        if (input.checked) selectedIngredients.add(ingredient);
        else selectedIngredients.delete(ingredient);
        input.setAttribute("aria-label", input.checked ? `Quitar ${ingredient}` : `Volver a incluir ${ingredient}`);
        input.parentElement.querySelector(".custom-option-status").textContent = input.checked ? "Incluido" : "Quitado";
        input.parentElement.classList.toggle("is-selected", input.checked);
        updateDishPreview();
      } else if (input.matches("[data-extra-index]")) {
        const index = Number(input.dataset.extraIndex);
        const extra = activeDish.extras[index];
        if (input.checked) selectedExtras.add(index);
        else selectedExtras.delete(index);
        input.setAttribute("aria-label", `${input.checked ? "Quitar" : "Agregar"} ${extra.name}`);
        input.parentElement.querySelector(".custom-option-status").textContent = input.checked ? "Sumado" : formatPrice(extra.price);
        input.parentElement.classList.toggle("is-selected", input.checked);
        updateDishPreview();
      }
    });

    document.querySelector(".dialog-view-switch").addEventListener("click", (event) => {
      const button = event.target.closest("[data-dialog-view]");
      if (button) setDialogView(button.dataset.dialogView);
    });

    document.querySelector(".dialog-close").addEventListener("click", closeDishDialog);
    dialog.addEventListener("cancel", (event) => {
      event.preventDefault();
      closeDishDialog();
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && (dialog.open || cartDialog.open)) {
        event.preventDefault();
        if (cartDialog.open) closeCartDialog();
        else closeDishDialog();
      }
    }, true);
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) closeDishDialog();
    });
    dialog.addEventListener("close", () => {
      window.clearTimeout(dialogCloseTimer);
      dialog.classList.remove("is-closing");
    });

    function closeDishDialog() {
      if (!dialog.open || dialog.classList.contains("is-closing")) return;
      dialog.classList.add("is-closing");
      dialogCloseTimer = window.setTimeout(() => {
        dialog.close();
        dialog.classList.remove("is-closing");
      }, 180);
    }

    document.querySelector("#add-to-cart").addEventListener("click", addActiveDishToCart);
    document.querySelector("#cart-open").addEventListener("click", () => {
      renderCart();
      cartDialog.classList.remove("is-closing");
      window.clearTimeout(cartCloseTimer);
      cartDialog.showModal();
    });
    document.querySelector("[data-cart-close]").addEventListener("click", closeCartDialog);
    cartDialog.addEventListener("cancel", (event) => {
      event.preventDefault();
      closeCartDialog();
    });
    cartDialog.addEventListener("click", (event) => {
      if (event.target === cartDialog) closeCartDialog();
    });
    cartDialog.addEventListener("close", () => {
      window.clearTimeout(cartCloseTimer);
      cartDialog.classList.remove("is-closing");
    });
    cartItems.addEventListener("click", (event) => {
      const quantityButton = event.target.closest("[data-cart-quantity]");
      if (quantityButton) {
        const item = cart[Number(quantityButton.dataset.cartIndex)];
        if (item) {
          item.quantity = Math.max(1, item.quantity + Number(quantityButton.dataset.cartQuantity));
          cartMessage.hidden = true;
          cartMessage.textContent = "";
          renderCart();
        }
        return;
      }

      const removeButton = event.target.closest("[data-cart-remove]");
      if (removeButton) {
        cart.splice(Number(removeButton.dataset.cartRemove), 1);
        cartMessage.hidden = true;
        cartMessage.textContent = "";
        renderCart();
      }
    });
    document.querySelector("#cart-clear").addEventListener("click", () => {
      cart = [];
      cartMessage.hidden = true;
      cartMessage.textContent = "";
      renderCart();
    });
    document.querySelector("#cart-confirm").addEventListener("click", () => {
      if (!cart.length) return;
      const total = cart.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
      cart = [];
      renderCart();
      cartMessage.textContent = `Pedido confirmado como demostración por ${formatPrice(total)}. No se envió a cocina ni se realizó ningún pago.`;
      cartMessage.hidden = false;
    });

    function closeCartDialog() {
      if (!cartDialog.open || cartDialog.classList.contains("is-closing")) return;
      cartDialog.classList.add("is-closing");
      cartCloseTimer = window.setTimeout(() => {
        cartDialog.close();
        cartDialog.classList.remove("is-closing");
      }, 180);
    }

    function renderMenuTabs() {
      const categories = [...new Set(dishes.map((dish) => dish.category))];
      const labels = {
        entradas: "Entradas",
        principales: "Principales",
        acompanamientos: "Acompañamientos",
        postres: "Postres",
        bebidas: "Bebidas"
      };
      const filters = [
        { id: "todos", label: "Todo", count: dishes.length },
        ...categories.map((category) => ({
          id: category,
          label: labels[category] || category.split(/[-_]/).map((part) => part.charAt(0).toLocaleUpperCase("es") + part.slice(1)).join(" "),
          count: dishes.filter((dish) => dish.category === category).length
        }))
      ];

      menuTabs.innerHTML = filters.map(({ id, label, count }) => `
        <button class="menu-tab" type="button" data-filter="${id}" aria-pressed="${id === activeMenuFilter}" aria-label="${label}, ${count} ${count === 1 ? "plato" : "platos"}">
          ${label}<span class="menu-tab-count" aria-hidden="true">${count}</span>
        </button>`).join("");
    }

    function renderMenu(filter = "todos") {
      const visibleDishes = filter === "todos" ? dishes : dishes.filter((dish) => dish.category === filter);
      grid.innerHTML = visibleDishes.map((dish, index) => {
        const dishIndex = dishes.indexOf(dish);
        return `
          <article class="dish-card reveal" data-dish-index="${dishIndex}" style="transition-delay:${index * 70}ms">
            <div class="dish-photo">
              <img src="${dish.image}" alt="${dish.alt}" loading="lazy">
              ${dish.imageCredit ? `<a class="photo-credit" href="${dish.imageCredit.source}" target="_blank" rel="noopener noreferrer">Foto: ${dish.imageCredit.author} · ${dish.imageCredit.license}</a>` : ""}
              <span class="dish-badge">${dish.label}</span>
            </div>
            <div class="dish-body">
              <div class="dish-title-row"><h3>${dish.name}</h3><span class="dish-price">${dish.pricePrefix || ""}${formatPrice(dish.priceValue)}</span></div>
              <p class="dish-desc">${dish.description}</p>
              <div class="dish-meta">
                <span class="calories"><strong>${dish.caloriesLabel || dish.calories} kcal est.</strong> · por porción</span>
                <button class="details-button" type="button" data-details="${dishIndex}">Ver detalles +</button>
              </div>
            </div>
          </article>`;
      }).join("");
      observeReveals();
    }

    menuTabs.addEventListener("click", (event) => {
      const tab = event.target.closest(".menu-tab");
      if (!tab) return;
      document.querySelectorAll(".menu-tab").forEach((button) => button.setAttribute("aria-pressed", String(button === tab)));
      activeMenuFilter = tab.dataset.filter;
      renderMenu(activeMenuFilter);
    });

    grid.addEventListener("click", (event) => {
      const button = event.target.closest("[data-details]");
      if (!button) return;
      openDishDialog(Number(button.dataset.details));
    });

    grid.addEventListener("pointermove", (event) => {
      const card = event.target.closest(".dish-card");
      if (!card || event.pointerType !== "mouse") return;
      const bounds = card.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width;
      const y = (event.clientY - bounds.top) / bounds.height;
      card.style.setProperty("--rx", `${(0.5 - y) * 7}deg`);
      card.style.setProperty("--ry", `${(x - 0.5) * 7}deg`);
    });
    grid.addEventListener("pointerout", (event) => {
      const card = event.target.closest(".dish-card");
      if (!card || card.contains(event.relatedTarget)) return;
      card.style.setProperty("--rx", "0deg");
      card.style.setProperty("--ry", "0deg");
    });

    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav-links");
    menuToggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute("aria-label", isOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación");
    });
    nav.addEventListener("click", (event) => {
      if (event.target.closest("a")) {
        nav.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menú de navegación");
      }
    });

    const now = new Date();
    document.querySelector("#booking-date").min = new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString().split("T")[0];
    document.querySelector("#current-year").textContent = new Date().getFullYear();
    document.querySelector("#reservas").addEventListener("submit", (event) => {
      event.preventDefault();
      const message = document.querySelector("#form-message");
      message.textContent = "Esta maqueta todavía no envía reservas. Conecta el formulario a un servicio o backend para confirmar disponibilidad.";
      message.style.display = "block";
    });

    let revealObserver;
    function observeReveals() {
      if (!("IntersectionObserver" in window)) {
        document.querySelectorAll(".reveal").forEach((element) => element.classList.add("is-visible"));
        return;
      }
      if (!revealObserver) {
        revealObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: .12 });
      }
      document.querySelectorAll(".reveal:not(.is-visible)").forEach((element) => revealObserver.observe(element));
    }

    renderMenuTabs();
    renderCart();
    renderMenu();
    observeReveals();
