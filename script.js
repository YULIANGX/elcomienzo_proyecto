    const dishes = [
      {
        name: "Huevos benedictinos con salmón", category: "entradas", label: "Clásico de brunch", priceValue: 8900, calories: 520,
        description: "Muffin tostado, huevos pochados, salmón y salsa holandesa cremosa.",
        ingredients: ["Muffin inglés tostado", "Huevos pochados", "Salmón ahumado", "Salsa holandesa", "Cebollín fresco"],
        extras: [{ name: "Aguacate", price: 900 }, { name: "Papas rústicas", price: 700 }],
        image: "assets/carta-v2-01.webp", model: "models/huevos-benedictinos.glb", usdz: "models/huevos-benedictinos.usdz", alt: "Huevos benedictinos con salmón y salsa holandesa"
      },
      {
        name: "Hongos frescos de estación", category: "entradas", label: "Producto fresco", priceValue: 7600, calories: 35,
        description: "Selección de hongos frescos de estación, con distintas formas y tamaños.",
        ingredients: ["Hongos frescos de estación"],
        extras: [{ name: "Ajo y aceite de oliva", price: 600 }, { name: "Perejil fresco", price: 400 }],
        image: "assets/carta-v2-02.webp", model: "models/hongos.glb", usdz: "models/hongos.usdz", alt: "Selección de hongos frescos de estación"
      },
      {
        name: "Arepa de plátano maduro rellena", category: "entradas", label: "Sabor del Quindío", priceValue: 17500, calories: 680,
        description: "Arepa dulce de plátano maduro, rellena de carne desmechada con hogao y queso costeño, gratinada con mozzarella.",
        ingredients: ["Plátano maduro", "Carne desmechada", "Hogao", "Queso costeño", "Mozzarella gratinada"],
        extras: [{ name: "Aguacate", price: 1500 }, { name: "Hogao adicional", price: 700 }, { name: "Queso costeño extra", price: 1200 }],
        image: "assets/carta-v2-03.webp", model: "models/arepa-platano-rellena.glb", usdz: "models/arepa-platano-rellena.usdz", alt: "Arepa de plátano maduro rellena de carne, hogao y quesos gratinados"
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
        image: "assets/carta-v2-04.webp", alt: "Aborrajados de plátano maduro rellenos de queso y guayaba"
      },
      {
        name: "Papas chorreadas con quesos regionales", category: "entradas", label: "Quesos colombianos", priceValue: 14500, calories: 430,
        description: "Papas criollas bañadas en hogao cremoso, terminadas con queso Paipa y queso pera fundidos.",
        ingredients: ["Papa criolla", "Hogao", "Queso Paipa", "Queso pera"],
        extras: [{ name: "Queso Paipa extra", price: 1200 }, { name: "Queso pera extra", price: 1000 }, { name: "Chicharrón crocante", price: 1800 }],
        image: "assets/carta-v2-05.webp", model: "models/papas-chorreadas.glb", usdz: "models/papas-chorreadas.usdz", alt: "Papas chorreadas con hogao y quesos Paipa y pera"
      },
      {
        name: "Carimañolas caribeñas", category: "entradas", label: "Tradición costeña", priceValue: 13900, calories: 520,
        description: "Croquetas doradas de masa de yuca, rellenas de carne molida guisada y servidas con suero costeño.",
        ingredients: ["Masa de yuca", "Carne molida guisada", "Suero costeño"],
        extras: [{ name: "Suero costeño extra", price: 900 }, { name: "Ají de la casa", price: 500 }, { name: "Hogao adicional", price: 700 }],
        image: "assets/carta-v2-06.webp", model: "models/carimanolas-caribenas.glb", usdz: "models/carimanolas-caribenas.usdz", alt: "Carimañolas de yuca doradas entre frituras tradicionales de la costa"
      },
      {
        name: "Patacones con toppings", category: "entradas", label: "Arma tu combinación", priceValue: 12900, calories: 390,
        description: "Patacones de plátano verde con hogao de la casa; puedes sumar guacamole o carnes desmechadas.",
        ingredients: ["Patacones de plátano verde", "Hogao de la casa"],
        extras: [{ name: "Guacamole", price: 1400 }, { name: "Carne desmechada", price: 2800 }, { name: "Cerdo desmechado", price: 2800 }, { name: "Queso costeño", price: 1000 }],
        image: "assets/carta-v2-07.webp", model: "models/patacones-toppings.glb", usdz: "models/patacones-toppings.usdz", alt: "Patacones colombianos servidos con queso costeño"
      },
      {
        name: "Salmón a la plancha con vegetales", category: "principales", label: "A la plancha", priceValue: 18500, calories: 480,
        description: "Filete de salmón dorado, acompañado de vegetales verdes y zanahoria.",
        ingredients: ["Salmón a la plancha", "Vegetales verdes", "Zanahoria", "Limón"],
        extras: [{ name: "Espárragos extra", price: 1100 }, { name: "Salsa cítrica", price: 600 }],
        image: "assets/carta-v2-08.webp", model: "models/pesca.glb", usdz: "models/pesca.usdz", alt: "Salmón a la plancha con vegetales verdes y zanahoria"
      },
      {
        name: "Thali indio de curries", category: "principales", label: "Para compartir", priceValue: 21000, calories: 680,
        description: "Selección de curries y guisos especiados, servidos con arroz y pan plano.",
        ingredients: ["Arroz", "Curries especiados", "Vegetales y legumbres", "Pan plano"],
        extras: [{ name: "Porción extra de arroz", price: 1200 }, { name: "Raita de yogur", price: 700 }],
        image: "assets/carta-v2-09.webp", model: "models/thali.glb", usdz: "models/thali.usdz", alt: "Thali indio con arroz, curries y pan plano"
      },
      {
        name: "Risotto cremoso", category: "principales", label: "Vegetariano", priceValue: 14800, calories: 520,
        description: "Arroz cremoso con queso rallado y hierbas frescas.",
        ingredients: ["Arroz carnaroli", "Caldo", "Queso parmesano", "Manteca", "Perejil"],
        extras: [{ name: "Queso parmesano extra", price: 800 }, { name: "Hongos salteados", price: 1300 }],
        image: "assets/carta-v2-10.webp", model: "models/risotto.glb", usdz: "models/risotto.usdz", alt: "Risotto cremoso con queso y hierbas frescas"
      },
      {
        name: "Tarta de frutos rojos y crema", category: "postres", label: "De la casa", priceValue: 6200, calories: 430,
        description: "Bizcocho en capas con crema, frutos rojos y frambuesas frescas.",
        ingredients: ["Bizcocho", "Crema", "Mermelada de frutos rojos", "Frambuesas frescas"],
        extras: [{ name: "Frambuesas extra", price: 900 }, { name: "Crema inglesa", price: 600 }],
        image: "assets/carta-v2-11.webp", model: "models/tarta.glb", usdz: "models/tarta.usdz", alt: "Tarta en capas con crema y frambuesas frescas"
      },
      {
        name: "Café tinto colombiano", category: "bebidas", label: "Clásico colombiano", priceValue: 6000, calories: 5,
        description: "Café colombiano de origen, servido negro y recién preparado.",
        ingredients: ["Café colombiano de origen", "Agua caliente"],
        extras: [{ name: "Shot adicional de espresso", price: 1800 }, { name: "Panela", price: 700 }],
        image: "assets/carta-v2-12.webp", model: "models/cafe-tinto-colombiano.glb", usdz: "models/cafe-tinto-colombiano.usdz", alt: "Taza de café colombiano recién preparado"
      },
      {
        name: "Café campesino con panela", category: "bebidas", label: "Con panela", priceValue: 6500, calories: 45,
        description: "Café colombiano endulzado con panela, una preparación cálida y tradicional.",
        ingredients: ["Café colombiano", "Panela", "Agua caliente"],
        extras: [{ name: "Leche", price: 1000 }, { name: "Shot adicional de café", price: 1500 }],
        image: "assets/carta-v2-13.webp", model: "models/cafe-campesino.glb", usdz: "models/cafe-campesino.usdz", alt: "Café servido en una taza sobre una mesa"
      },
      {
        name: "Café con leche", category: "bebidas", label: "Caliente", priceValue: 7500, calories: 110,
        description: "Café colombiano equilibrado con leche vaporizada.",
        ingredients: ["Café colombiano", "Leche vaporizada"],
        extras: [{ name: "Shot adicional de espresso", price: 1800 }, { name: "Canela", price: 500 }],
        image: "assets/carta-v2-14.webp", model: "models/cafe-con-leche.glb", usdz: "models/cafe-con-leche.usdz", alt: "Café con leche vaporizada"
      },
      {
        name: "Milo frío", category: "bebidas", label: "Fría", priceValue: 8500, calories: 240,
        description: "Milo preparado con leche fría y hielo, ideal para refrescarse.",
        ingredients: ["Milo", "Leche fría", "Hielo"],
        extras: [{ name: "Crema batida", price: 1000 }, { name: "Porción extra de Milo", price: 800 }],
        image: "assets/carta-v2-15.webp", model: "models/milo-frio.glb", usdz: "models/milo-frio.usdz", alt: "Malteada fría de chocolate con crema"
      },
      {
        name: "Limonada natural", category: "bebidas", label: "Refrescante", priceValue: 7500, calories: 120,
        description: "Limonada fresca preparada al momento con limón, agua, panela y hielo.",
        ingredients: ["Limón", "Agua", "Panela", "Hielo"],
        extras: [{ name: "Hierbabuena", price: 500 }, { name: "Jengibre", price: 500 }, { name: "Preparar con soda", price: 1000 }],
        image: "assets/carta-v2-16.webp", model: "models/limonada-natural.glb", usdz: "models/limonada-natural.usdz", alt: "Limonada con rodajas de limón y hierbabuena"
      },
      {
        name: "Limonada de coco", category: "bebidas", label: "De la casa", priceValue: 10500, calories: 260,
        description: "Limonada cremosa con coco y hielo, de sabor tropical.",
        ingredients: ["Limón", "Leche de coco", "Hielo"],
        extras: [{ name: "Coco rallado extra", price: 700 }, { name: "Leche condensada", price: 800 }],
        image: "assets/carta-v2-17.webp", model: "models/limonada-coco.glb", usdz: "models/limonada-coco.usdz", alt: "Bebida fría de coco con una rodaja de limón"
      },
      {
        name: "Cerveza nacional", category: "bebidas", label: "330 ml", priceValue: 9000, calories: 145,
        description: "Cerveza lager nacional servida bien fría.",
        ingredients: ["Cerveza lager nacional", "Malta", "Lúpulo"],
        extras: [{ name: "Rodaja de limón", price: 500 }, { name: "Preparación michelada", price: 1200 }],
        image: "assets/carta-v2-18.webp", model: "models/cerveza.glb", usdz: "models/cerveza.usdz", alt: "Vaso de cerveza fría"
      },
      {
        name: "Gaseosa", category: "bebidas", label: "350 ml", priceValue: 5000, calories: 140,
        description: "Gaseosa fría en presentación individual de 350 ml.",
        ingredients: ["Gaseosa fría"],
        extras: [{ name: "Vaso con hielo", price: 500 }, { name: "Rodaja de limón", price: 500 }],
        image: "assets/carta-v2-19.webp", model: "models/gaseosa.glb", usdz: "models/gaseosa.usdz", alt: "Gaseosa fría servida con hielo"
      },
      {
        name: "Agua sin gas", category: "bebidas", label: "500 ml", priceValue: 4000, calories: 0,
        description: "Agua natural embotellada, servida fría.",
        ingredients: ["Agua natural embotellada"],
        extras: [{ name: "Rodajas de limón", price: 500 }, { name: "Vaso con hielo", price: 500 }],
        image: "assets/carta-v2-20.webp", model: "models/agua-sin-gas.glb", usdz: "models/agua-sin-gas.usdz", alt: "Agua fresca servida en un vaso"
      },
      {
        name: "Agua con gas", category: "bebidas", label: "500 ml", priceValue: 5000, calories: 0,
        description: "Agua con gas embotellada, servida fría.",
        ingredients: ["Agua con gas embotellada"],
        extras: [{ name: "Rodajas de limón", price: 500 }, { name: "Hierbabuena", price: 500 }],
        image: "assets/carta-v2-21.webp", model: "models/agua-con-gas.glb", usdz: "models/agua-con-gas.usdz", alt: "Agua con gas fría con limón"
      },
      {
        name: "Aguapanela de la casa", category: "bebidas", label: "Tradicional", priceValue: 5500, calories: 110,
        description: "Panela de caña disuelta lentamente en agua caliente, con un delicado toque cítrico.",
        ingredients: ["Panela artesanal", "Agua caliente", "Limón"],
        extras: [{ name: "Queso campesino", price: 1200 }, { name: "Jengibre fresco", price: 500 }, { name: "Limón extra", price: 400 }],
        image: "assets/carta-v2-22.webp", model: "models/aguapanela.glb", usdz: "models/aguapanela.usdz", alt: "Aguapanela colombiana acompañada de queso y pan"
      },
      {
        name: "Chocolate caliente de la casa", category: "bebidas", label: "Cacao y canela", priceValue: 8500, calories: 230,
        description: "Chocolate de mesa fundido en leche, espumado al momento y perfumado con canela.",
        ingredients: ["Chocolate de mesa", "Leche", "Canela"],
        extras: [{ name: "Queso campesino", price: 1200 }, { name: "Crema batida", price: 1000 }, { name: "Chocolate rallado", price: 700 }],
        image: "assets/carta-v2-23.webp", model: "models/chocolate-caliente.glb", usdz: "models/chocolate-caliente.usdz", alt: "Chocolate caliente colombiano espumado, servido con queso y pan"
      },
      {
        name: "Lulada quindiana", category: "bebidas", label: "Fruta fresca", priceValue: 8500, calories: 180,
        description: "Lulo fresco macerado con limón, panela y hielo picado; una bebida vibrante del Eje Cafetero.",
        ingredients: ["Lulo fresco", "Limón", "Panela", "Hielo picado"],
        extras: [{ name: "Pulpa extra de lulo", price: 900 }, { name: "Hierbabuena", price: 500 }, { name: "Preparar con soda", price: 1000 }],
        image: "assets/carta-v2-24.webp", model: "models/lulada.glb", usdz: "models/lulada.usdz", alt: "Lulada de lulo con pulpa fresca, hielo triturado y limón"
      },
      {
        name: "Avena colombiana artesanal", category: "bebidas", label: "Cremosa y fría", priceValue: 7500, calories: 260,
        description: "Avena cocida a fuego lento con leche, panela y canela, servida fría con textura sedosa.",
        ingredients: ["Avena", "Leche", "Panela", "Canela"],
        extras: [{ name: "Canela adicional", price: 400 }, { name: "Avena tostada", price: 700 }, { name: "Leche condensada", price: 800 }],
        image: "assets/carta-v2-25.webp", model: "models/avena-colombiana.glb", usdz: "models/avena-colombiana.usdz", alt: "Avena colombiana fría y cremosa con avena y canela"
      },
      {
        name: "Chicha de maíz", category: "bebidas", label: "Receta tradicional", priceValue: 7500, calories: 150,
        description: "Bebida tradicional de maíz y panela, reposada con especias y servida fría.",
        ingredients: ["Maíz", "Panela", "Canela", "Clavo de olor"],
        extras: [{ name: "Canela adicional", price: 400 }, { name: "Limón", price: 400 }, { name: "Panela extra", price: 500 }],
        image: "assets/carta-v2-26.webp", model: "models/chicha.glb", usdz: "models/chicha.usdz", alt: "Chicha de maíz servida tradicionalmente en una totuma"
      },
      {
        name: "Masato de arroz y canela", category: "bebidas", label: "Fermentación suave", priceValue: 7000, calories: 180,
        description: "Arroz cocido con panela y especias, reposado hasta lograr un sabor suave y refrescante.",
        ingredients: ["Arroz", "Panela", "Canela", "Clavo de olor"],
        extras: [{ name: "Canela adicional", price: 400 }, { name: "Panela extra", price: 500 }, { name: "Hielo", price: 300 }],
        image: "assets/carta-v2-27.webp", model: "models/masato.glb", usdz: "models/masato.usdz", alt: "Masato de arroz servido con canela"
      },
      {
        name: "Lomo de res en salsa de café", category: "principales", label: "Especialidad de la casa", priceValue: 28900, calories: 650,
        description: "Lomo de res sellado con reducción de café colombiano, acompañado de puré cremoso de papa.",
        ingredients: ["Lomo de res", "Café colombiano", "Papa", "Mantequilla", "Crema de leche"],
        extras: [{ name: "Vegetales salteados", price: 3500 }, { name: "Puré adicional", price: 2500 }],
        image: "assets/carta-v2-28.webp", model: "models/lomo-salsa-cafe.glb", usdz: "models/lomo-salsa-cafe.usdz", alt: "Lomo de res en salsa de café con puré de papa"
      },
      {
        name: "Trucha al ajillo", category: "principales", label: "Sabor de la región", priceValue: 26900, calories: 540,
        description: "Filete de trucha dorado con mantequilla de ajo y hierbas, acompañado de papas rústicas.",
        ingredients: ["Trucha", "Ajo", "Mantequilla", "Papas", "Hierbas frescas", "Limón"],
        extras: [{ name: "Papas adicionales", price: 2500 }, { name: "Vegetales", price: 3000 }],
        image: "assets/carta-v2-29.webp", model: "models/trucha-ajillo.glb", usdz: "models/trucha-ajillo.usdz", alt: "Trucha al ajillo con papas y hierbas"
      },
      {
        name: "Cerdo glaseado en guayaba", category: "principales", label: "Fusión colombiana", priceValue: 25900, calories: 710,
        description: "Panceta de cerdo dorada con glaseado de guayaba sobre puré suave de plátano maduro.",
        ingredients: ["Panceta de cerdo", "Guayaba", "Plátano maduro", "Panela", "Especias"],
        extras: [{ name: "Glaseado adicional", price: 1500 }, { name: "Ensalada fresca", price: 3000 }],
        image: "assets/carta-v2-30.webp", model: "models/cerdo-guayaba.glb", usdz: "models/cerdo-guayaba.usdz", alt: "Cerdo glaseado en guayaba sobre puré"
      },
      {
        name: "Pollo en salsa de hongos", category: "principales", label: "Cremoso y aromático", priceValue: 22900, calories: 590,
        description: "Pechuga de pollo a la plancha con salsa cremosa de hongos y papas doradas.",
        ingredients: ["Pechuga de pollo", "Hongos", "Crema de leche", "Ajo", "Papas"],
        extras: [{ name: "Hongos adicionales", price: 2500 }, { name: "Papas extra", price: 2500 }],
        image: "assets/carta-v2-31.webp", model: "models/pollo-hongos.glb", usdz: "models/pollo-hongos.usdz", alt: "Pollo con salsa cremosa de hongos y papas"
      },
      {
        name: "Cheesecake de café colombiano", category: "postres", label: "Dulce de la casa", priceValue: 9900, calories: 420,
        description: "Cheesecake cremoso de café colombiano con base de galleta y un toque de caramelo.",
        ingredients: ["Queso crema", "Café colombiano", "Galleta", "Mantequilla", "Azúcar", "Crema de leche"],
        extras: [{ name: "Salsa de caramelo", price: 1200 }, { name: "Crema batida", price: 1000 }],
        image: "assets/carta-v2-32.webp", model: "models/cheesecake-cafe.glb", usdz: "models/cheesecake-cafe.usdz", alt: "Porción de cheesecake de café con caramelo"
      },
      {
        name: "Oblea artesanal de arequipe", category: "postres", label: "Tradición dulce", priceValue: 7900, calories: 380,
        description: "Obleas crujientes rellenas de arequipe, acompañadas de fresas frescas.",
        ingredients: ["Obleas", "Arequipe", "Fresas", "Azúcar pulverizada"],
        extras: [{ name: "Arequipe adicional", price: 1200 }, { name: "Fresas extra", price: 1500 }],
        image: "assets/carta-v2-33.webp", model: "models/oblea-arequipe.glb", usdz: "models/oblea-arequipe.usdz", alt: "Oblea de arequipe con fresas"
      },
      {
        name: "Yuca crocante de la casa", category: "acompanamientos", label: "Crujiente", priceValue: 6900, calories: 310,
        description: "Bastones de yuca dorados con hierbas y salsa de ajo de la casa.",
        ingredients: ["Yuca", "Aceite vegetal", "Ajo", "Perejil", "Sal"],
        extras: [{ name: "Salsa de ajo extra", price: 900 }, { name: "Ají de la casa", price: 700 }],
        image: "assets/carta-v2-34.webp", model: "models/yuca-crocante.glb", usdz: "models/yuca-crocante.usdz", alt: "Bastones de yuca crocante con salsa"
      },
      {
        name: "Papas criollas al romero", category: "acompanamientos", label: "Aromáticas", priceValue: 6500, calories: 290,
        description: "Papas criollas doradas con romero, ajo y mantequilla.",
        ingredients: ["Papa criolla", "Romero", "Ajo", "Mantequilla", "Sal"],
        extras: [{ name: "Queso rallado", price: 1200 }, { name: "Salsa de la casa", price: 900 }],
        image: "assets/carta-v2-35.webp", model: "models/papas-romero.glb", usdz: "models/papas-romero.usdz", alt: "Papas criollas doradas al romero"
      },
      {"name": "Mini arepas de maíz ancestral", "category": "entradas", "label": "Colombia de autor", "priceValue": 14900, "calories": 440, "description": "Arepas artesanales con carne desmechada, crema de aguacate, cebolla encurtida y reducción de hogao.", "ingredients": ["Maíz", "Carne de res", "Aguacate", "Cebolla encurtida", "Hogao"], "extras": [{"name": "Aguacate", "price": 1500}, {"name": "Hogao", "price": 1500}], "image": "assets/carta-v2-36.webp", "model": "models/mini-arepas.glb", "usdz": "models/mini-arepas.usdz", "alt": "Mini arepas de maíz ancestral"},
      {"name": "Chicharrón crocante al maracuyá", "category": "entradas", "label": "Colombia de autor", "priceValue": 19900, "calories": 590, "description": "Panceta de cocción lenta con piel crocante, reducción de maracuyá y ají.", "ingredients": ["Panceta de cerdo", "Maracuyá", "Ají", "Panela"], "extras": [{"name": "Salsa de maracuyá", "price": 1500}, {"name": "Ají", "price": 1500}], "image": "assets/carta-v2-37.webp", "model": "models/chicharron-maracuya.glb", "usdz": "models/chicharron-maracuya.usdz", "alt": "Chicharrón crocante al maracuyá"},
      {"name": "Empanadas de autor", "category": "entradas", "label": "Colombia de autor", "priceValue": 13900, "calories": 490, "description": "Empanadas de maíz amarillo con costilla braseada y ají de lulo.", "ingredients": ["Maíz amarillo", "Costilla de res", "Lulo", "Ají", "Aceite"], "extras": [{"name": "Ají de lulo", "price": 1500}, {"name": "Hogao", "price": 1500}], "image": "assets/carta-v2-38.webp", "model": "models/empanadas-autor.glb", "usdz": "models/empanadas-autor.usdz", "alt": "Empanadas de autor"},
      {"name": "Ceviche del Pacífico", "category": "entradas", "label": "Colombia de autor", "priceValue": 23900, "calories": 350, "description": "Camarones cocidos marinados en cítricos, coco, mango biche y crocantes de plátano.", "ingredients": ["Camarones", "Limón", "Leche de coco", "Mango biche", "Cilantro", "Plátano"], "extras": [{"name": "Crocantes de plátano", "price": 1500}, {"name": "Mango", "price": 1500}], "image": "assets/carta-v2-39.webp", "model": "models/ceviche-pacifico.glb", "usdz": "models/ceviche-pacifico.usdz", "alt": "Ceviche del Pacífico"},
      {"name": "Bandeja paisa de autor", "category": "principales", "label": "Colombia de autor", "priceValue": 39900, "calories": 980, "description": "Cremoso de fríjoles, chicharrón, res braseada, huevo de codorniz, arroz, aguacate y plátano.", "ingredients": ["Fríjoles", "Chicharrón", "Carne de res", "Huevo de codorniz", "Arroz", "Aguacate", "Plátano"], "extras": [{"name": "Aguacate", "price": 1500}, {"name": "Chicharrón", "price": 1500}], "image": "assets/carta-v2-40.webp", "model": "models/bandeja-autor.glb", "usdz": "models/bandeja-autor.usdz", "alt": "Bandeja paisa de autor"},
      {"name": "Ajiaco contemporáneo", "category": "principales", "label": "Colombia de autor", "priceValue": 29900, "calories": 570, "description": "Crema de tres papas con guascas, pollo, mazorca, alcaparras y espuma de crema de leche.", "ingredients": ["Papa criolla", "Papa pastusa", "Papa sabanera", "Guascas", "Pollo", "Mazorca", "Alcaparras", "Crema de leche"], "extras": [{"name": "Alcaparras", "price": 1500}, {"name": "Crema de leche", "price": 1500}], "image": "assets/carta-v2-41.webp", "model": "models/ajiaco-contemporaneo.glb", "usdz": "models/ajiaco-contemporaneo.usdz", "alt": "Ajiaco contemporáneo"},
      {"name": "Lechona de autor", "category": "principales", "label": "Colombia de autor", "priceValue": 32900, "calories": 760, "description": "Cerdo de cocción lenta, cremoso de arveja amarilla, piel crocante y reducción de sus jugos.", "ingredients": ["Cerdo", "Arveja amarilla", "Piel de cerdo", "Cebolla", "Especias"], "extras": [{"name": "Piel crocante", "price": 1500}, {"name": "Arvejas", "price": 1500}], "image": "assets/carta-v2-42.webp", "model": "models/lechona-autor.glb", "usdz": "models/lechona-autor.usdz", "alt": "Lechona de autor"},
      {"name": "Cazuela del Pacífico", "category": "principales", "label": "Colombia de autor", "priceValue": 42900, "calories": 640, "description": "Pescado, camarones y mejillones en salsa cremosa de coco con hierbas y plátano crocante.", "ingredients": ["Pescado", "Camarones", "Mejillones", "Leche de coco", "Hierbas", "Plátano verde"], "extras": [{"name": "Camarones", "price": 1500}, {"name": "Patacones", "price": 1500}], "image": "assets/carta-v2-43.webp", "model": "models/cazuela-pacifico.glb", "usdz": "models/cazuela-pacifico.usdz", "alt": "Cazuela del Pacífico"},
      {"name": "Costilla braseada en panela", "category": "principales", "label": "Colombia de autor", "priceValue": 36900, "calories": 810, "description": "Costilla de res braseada, glaseado de panela y café, puré de yuca y vegetales asados.", "ingredients": ["Costilla de res", "Panela", "Café", "Yuca", "Zanahoria", "Mantequilla"], "extras": [{"name": "Puré de yuca", "price": 1500}, {"name": "Vegetales", "price": 1500}], "image": "assets/carta-v2-44.webp", "model": "models/costilla-panela.glb", "usdz": "models/costilla-panela.usdz", "alt": "Costilla braseada en panela"},
      {"name": "Tamal colombiano deconstruido", "category": "principales", "label": "Colombia de autor", "priceValue": 28900, "calories": 650, "description": "Cremoso de maíz, pollo y cerdo confitados, vegetales, hogao y hoja de plátano.", "ingredients": ["Maíz", "Pollo", "Cerdo", "Zanahoria", "Arvejas", "Hogao", "Hoja de plátano"], "extras": [{"name": "Hogao", "price": 1500}, {"name": "Cerdo", "price": 1500}], "image": "assets/carta-v2-45.webp", "model": "models/tamal-deconstruido.glb", "usdz": "models/tamal-deconstruido.usdz", "alt": "Tamal colombiano deconstruido"},
      {"name": "Pargo dorado del Caribe", "category": "principales", "label": "Colombia de autor", "priceValue": 38900, "calories": 680, "description": "Filete de pargo con piel crocante, arroz de coco, patacón y emulsión de cilantro.", "ingredients": ["Pargo", "Arroz", "Leche de coco", "Plátano verde", "Cilantro", "Limón"], "extras": [{"name": "Arroz de coco", "price": 1500}, {"name": "Patacón", "price": 1500}], "image": "assets/carta-v2-46.webp", "model": "models/pargo-caribe.glb", "usdz": "models/pargo-caribe.usdz", "alt": "Pargo dorado del Caribe"},
      {"name": "Tres leches del Eje Cafetero", "category": "postres", "label": "Colombia de autor", "priceValue": 13900, "calories": 480, "description": "Bizcocho bañado en tres leches con café, caramelo de panela y crema batida.", "ingredients": ["Harina de trigo", "Huevo", "Leche", "Leche condensada", "Crema de leche", "Café", "Panela"], "extras": [{"name": "Caramelo", "price": 1500}, {"name": "Crema batida", "price": 1500}], "image": "assets/carta-v2-47.webp", "model": "models/tres-leches-cafe.glb", "usdz": "models/tres-leches-cafe.usdz", "alt": "Tres leches del Eje Cafetero"},
      {"name": "Suspiro de guayaba y queso", "category": "postres", "label": "Colombia de autor", "priceValue": 12900, "calories": 380, "description": "Mousse de queso campesino con corazón de bocadillo veleño y crumble.", "ingredients": ["Queso campesino", "Bocadillo veleño", "Crema de leche", "Galleta de trigo"], "extras": [{"name": "Bocadillo", "price": 1500}, {"name": "Crumble", "price": 1500}], "image": "assets/carta-v2-48.webp", "model": "models/suspiro-guayaba.glb", "usdz": "models/suspiro-guayaba.usdz", "alt": "Suspiro de guayaba y queso"},
      {"name": "Arroz con leche brûlée", "category": "postres", "label": "Colombia de autor", "priceValue": 11900, "calories": 390, "description": "Arroz con leche y coco, canela y capa crocante de panela caramelizada.", "ingredients": ["Arroz", "Leche", "Coco", "Canela", "Panela"], "extras": [{"name": "Coco", "price": 1500}, {"name": "Canela", "price": 1500}], "image": "assets/carta-v2-49.webp", "model": "models/arroz-leche-brulee.glb", "usdz": "models/arroz-leche-brulee.usdz", "alt": "Arroz con leche brûlée"},
      {"name": "Tentación de plátano maduro", "category": "postres", "label": "Colombia de autor", "priceValue": 13900, "calories": 460, "description": "Plátano caramelizado con panela y canela, helado de vainilla y crocante de queso.", "ingredients": ["Plátano maduro", "Panela", "Canela", "Helado de vainilla", "Queso"], "extras": [{"name": "Helado", "price": 1500}, {"name": "Queso crocante", "price": 1500}], "image": "assets/carta-v2-50.webp", "model": "models/tentacion-maduro.glb", "usdz": "models/tentacion-maduro.usdz", "alt": "Tentación de plátano maduro"},
      {"name": "Lulo silvestre", "category": "bebidas", "label": "Colombia de autor", "priceValue": 10900, "calories": 145, "description": "Lulo fresco, agua gasificada, almíbar de romero y limón.", "ingredients": ["Lulo", "Agua gasificada", "Romero", "Azúcar", "Limón"], "extras": [{"name": "Lulo", "price": 900}, {"name": "Limón", "price": 900}], "image": "assets/carta-v2-51.webp", "model": "models/lulo-silvestre.glb", "usdz": "models/lulo-silvestre.usdz", "alt": "Lulo silvestre"},
      {"name": "Origen cafetero", "category": "bebidas", "label": "Colombia de autor", "priceValue": 12900, "calories": 95, "description": "Cold brew de café del Quindío, agua tónica y piel de naranja.", "ingredients": ["Café", "Agua tónica", "Naranja", "Hielo"], "extras": [{"name": "Café extra", "price": 900}, {"name": "Naranja", "price": 900}], "image": "assets/carta-v2-52.webp", "model": "models/origen-cafetero.glb", "usdz": "models/origen-cafetero.usdz", "alt": "Origen cafetero"},
      {"name": "Panela dorada", "category": "bebidas", "label": "Colombia de autor", "priceValue": 8900, "calories": 120, "description": "Infusión fría de panela, jengibre, limón y espuma cítrica.", "ingredients": ["Panela", "Jengibre", "Limón", "Agua", "Hielo"], "extras": [{"name": "Jengibre", "price": 900}, {"name": "Limón", "price": 900}], "image": "assets/carta-v2-53.webp", "model": "models/panela-dorada.glb", "usdz": "models/panela-dorada.usdz", "alt": "Panela dorada"},
      {"name": "Atardecer andino", "category": "bebidas", "label": "Colombia de autor", "priceValue": 11900, "calories": 210, "description": "Mora de Castilla, crema de coco, hierbabuena y reducción de frutos rojos.", "ingredients": ["Mora", "Crema de coco", "Hierbabuena", "Frutos rojos", "Azúcar"], "extras": [{"name": "Mora", "price": 900}, {"name": "Crema de coco", "price": 900}], "image": "assets/carta-v2-54.webp", "model": "models/atardecer-andino.glb", "usdz": "models/atardecer-andino.usdz", "alt": "Atardecer andino"},
      {"name": "Arroz cremoso de coco", "category": "acompanamientos", "label": "Colombia de autor", "priceValue": 7900, "calories": 310, "description": "Arroz cremoso con leche de coco y coco tostado.", "ingredients": ["Arroz", "Leche de coco", "Coco tostado", "Sal"], "extras": [{"name": "Coco tostado", "price": 1500}, {"name": "Arroz extra", "price": 1500}], "image": "assets/carta-v2-55.webp", "model": "models/arroz-coco.glb", "usdz": "models/arroz-coco.usdz", "alt": "Arroz cremoso de coco"},
      {"name": "Patacones con emulsión de aguacate", "category": "acompanamientos", "label": "Colombia de autor", "priceValue": 8900, "calories": 340, "description": "Plátano verde crocante con emulsión de aguacate y limón.", "ingredients": ["Plátano verde", "Aguacate", "Limón", "Aceite"], "extras": [{"name": "Emulsión de aguacate", "price": 1500}, {"name": "Hogao", "price": 1500}], "image": "assets/carta-v2-56.webp", "model": "models/patacones-aguacate.glb", "usdz": "models/patacones-aguacate.usdz", "alt": "Patacones con emulsión de aguacate"},
      {"name": "Maduros glaseados en panela", "category": "acompanamientos", "label": "Colombia de autor", "priceValue": 6900, "calories": 290, "description": "Plátano maduro dorado con glaseado de panela.", "ingredients": ["Plátano maduro", "Panela", "Aceite"], "extras": [{"name": "Glaseado", "price": 1500}, {"name": "Queso", "price": 1500}], "image": "assets/carta-v2-57.webp", "model": "models/maduros-panela.glb", "usdz": "models/maduros-panela.usdz", "alt": "Maduros glaseados en panela"},
      {"name": "Arepas con queso ahumado", "category": "acompanamientos", "label": "Colombia de autor", "priceValue": 7900, "calories": 350, "description": "Arepas de maíz blanco rellenas de queso ahumado.", "ingredients": ["Maíz blanco", "Queso ahumado", "Mantequilla"], "extras": [{"name": "Queso ahumado", "price": 1500}, {"name": "Mantequilla", "price": 1500}], "image": "assets/carta-v2-58.webp", "model": "models/arepas-ahumadas.glb", "usdz": "models/arepas-ahumadas.usdz", "alt": "Arepas con queso ahumado"}
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
    const cartStorageKey = "el-comienzo-cart-v1";
    let cart = loadCart();

    const normalizeText = value => String(value).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    const favoriteKey = "el-comienzo-favorites-v1";
    let favorites = new Set();
    try { const saved = JSON.parse(localStorage.getItem(favoriteKey) || "[]"); if (Array.isArray(saved)) favorites = new Set(saved.filter(n => dishes.some(d => d.name === n))); } catch {}
    const macroEstimates = [
      [25,35,31],[4,4,0],[30,75,29],[18,65,32],[15,46,21],[20,59,23],[4,55,17],[36,19,29],[20,100,22],[16,70,20],[6,54,21],[0,1,0],[0,11,0],[5,9,6],[8,38,6],[0,30,0],[2,29,15],null,[0,35,0],[0,0,0],[0,0,0],[0,28,0],[8,35,6],[1,44,0],[8,43,6],null,null,[45,44,32],[37,40,26],[25,63,40],[43,40,29],[7,39,26],[5,72,8],[2,49,12],[4,40,13],[18,48,20],[22,20,47],[20,52,23],[25,35,12],[48,100,43],[32,68,19],[40,40,49],[39,52,30],[40,55,48],[34,65,28],[40,75,24],[10,66,19],[8,42,21],[8,62,12],[8,66,18],[1,35,0],[0,24,0],[0,30,0],[1,38,6],[4,45,13],[4,48,15],[2,60,5],[11,40,16]
    ];
    const variantsMacros = [[18,65,32],[12,60,21]];
    const patterns = {milk:/queso|mozzarella|parmesano|mantequilla|manteca|suero|yogur|arequipe|holandesa|helado|\bcrema\b|\bleche\b/,wheat:/trigo|muffin|pan plano|bizcocho|galleta|oblea|crumble|malta|avena|milo/,egg:/huevo|holandesa|bizcocho|crema inglesa/,fish:/salmon|trucha|pescado|pargo/,shell:/camaron|camarones|mejillon|marisco/,nuts:/almendra|avellana|nuez|pinon|mani|pistacho/};
    const animal = /carne|cerdo|res\b|pollo|panceta|chicharron|costilla|salmon|trucha|pescado|pargo|camaron|camarones|mejillon|marisco|piel crocante|fondo de res|caldo/;
    function declared(d) { return [...d.ingredients,...(d.variants || []).flatMap(v=>v.ingredients || [])].map(i=>normalizeText(i).replace(/leche de coco|crema de coco/g,"coco")).join(" "); }
    function matchesPreferences(d) {
      const text=declared(d), diet=document.querySelector("#diet-filter").value, limit=document.querySelector("#calorie-filter").value, allergen=document.querySelector("#allergen-filter").value;
      if(diet!=="all" && animal.test(text)) return false;
      if(diet==="plant" && (patterns.milk.test(text)||patterns.egg.test(text)||/miel|bizcocho|galleta|oblea|milo|chocolate de mesa/.test(text))) return false;
      if(limit!=="all" && Math.max(d.calories,...(d.variants||[]).map(v=>v.calories))>Number(limit)) return false;
      return allergen==="all" || !patterns[allergen].test(text);
    }
    function updateFavoriteButton() { const b=document.querySelector("#detail-favorite"); if(!activeDish)return; const saved=favorites.has(activeDish.name); b.textContent=saved?"♥ Quitar favorito":"♡ Guardar favorito";b.setAttribute("aria-pressed",String(saved)); }
    function toggleFavorite(d) { if(!d)return; if(favorites.has(d.name))favorites.delete(d.name);else favorites.add(d.name);try{localStorage.setItem(favoriteKey,JSON.stringify([...favorites]));}catch{} renderMenuTabs();renderMenu(activeMenuFilter);updateFavoriteButton(); }
    function nutritionTotals(items) { return items.reduce((t,i)=>{const d=dishes.find(x=>x.name===i.name); if(!d)return t;const vi=d.variants?.findIndex(v=>v.name===i.variant)??-1;const v=d.variants?.[vi];const m=vi>=0?variantsMacros[vi]:macroEstimates[dishes.indexOf(d)];t.kcal+=(v?.calories??d.calories)*i.quantity;if(m){m.forEach((n,j)=>t.macros[j]+=n*i.quantity);}else t.unknown+=i.quantity;if(i.extras.length||i.ingredients.length!==d.ingredients.length+(v?.ingredients?.length||0))t.custom=true;return t;},{kcal:0,macros:[0,0,0],unknown:0,custom:false}); }
    function renderNutrition(){const n=nutritionTotals(cart);document.querySelector("#cart-nutrition").innerHTML=[["Energía",n.kcal+" kcal"],["Proteínas",n.macros[0]+" g"],["Carbohidratos",n.macros[1]+" g"],["Grasas",n.macros[2]+" g"]].map(([a,b])=>`<div><small>${a}</small><strong>${b}</strong></div>`).join("");document.querySelector("#nutrition-warning").textContent=[n.unknown?`Macros parciales: ${n.unknown} porción(es) sin estimación disponible (bebidas fermentadas).`:"",n.custom?"Tu selección contiene personalizaciones que no se reflejan en este cálculo.":""].filter(Boolean).join(" ");}
    const pairingRules = {sea:[38,54,50,47],meat:[35,34,50,31],veg:[6,55,15,48],sweet:[11,51,19],drink:[35,27,31]};
    function pairings(anchor,excluded=[]){const text=anchor?declared(anchor):"";const key=!anchor?"meat":anchor.category==="postres"?"sweet":anchor.category==="bebidas"?"drink":patterns.fish.test(text)||patterns.shell.test(text)?"sea":animal.test(text)?"meat":"veg";const used=new Set(excluded.map(d=>d.name)); if(anchor)used.add(anchor.name);const categories=anchor?.category==="postres"?["bebidas"]:anchor?.category==="bebidas"?["entradas","principales","postres"]:["entradas","acompanamientos","bebidas","postres"];const all=[...pairingRules[key].map(i=>dishes[i]),...dishes];return categories.filter(cat=>cat!==anchor?.category&&!excluded.some(d=>d.category===cat)).map(cat=>all.find(d=>d.category===cat&&!used.has(d.name)&&matchesPreferences(d))).filter(Boolean).slice(0,3);}
    function renderPairings(target,anchor,excluded=[]){const list=pairings(anchor,excluded);document.querySelector(target).innerHTML=list.length?list.map(d=>`<button type="button" class="pairing-item" data-pairing="${dishes.indexOf(d)}"><img src="${d.image}" alt="" loading="lazy"><span>${d.name}<small>${formatPrice(d.priceValue)} · ${d.category}</small></span><span aria-hidden="true">→</span></button>`).join(""):'<p class="smart-note">No hay sugerencias adicionales con tus filtros actuales.</p>';}

    function loadCart() {
      try {
        const saved = JSON.parse(localStorage.getItem(cartStorageKey) || "[]");
        if (!Array.isArray(saved)) return [];
        return saved.flatMap(item => {
          if (!item || !Number.isInteger(item.quantity) || item.quantity < 1) return [];
          const dish = dishes.find(d => d.name === item.name);
          if (!dish) return [];
          const variant = dish.variants?.find(v => v.name === item.variant);
          if (dish.variants?.length && !variant) return [];
          const ingredients = [...dish.ingredients, ...(variant?.ingredients || [])].filter(i => Array.isArray(item.ingredients) && item.ingredients.includes(i));
          const extras = dish.extras.filter(e => Array.isArray(item.extras) && item.extras.includes(e.name));
          const names = extras.map(e => e.name);
          return [{key: JSON.stringify([dish.name, variant?.name || "", [...ingredients].sort(), [...names].sort()]), name:dish.name, variant:variant?.name || "", ingredients, extras:names, quantity:Math.min(99,item.quantity), unitPrice:(variant?.priceValue ?? dish.priceValue)+extras.reduce((a,e)=>a+e.price,0)}];
        });
      } catch { return []; }
    }
    function saveCart() { try { localStorage.setItem(cartStorageKey, JSON.stringify(cart)); } catch {} }
    function cartSummary() {
      return ["EL COMIENZO — Mi selección", ...cart.map(i => `${i.quantity} × ${i.name}${i.variant ? ' ('+i.variant+')' : ''} — ${formatPrice(i.unitPrice*i.quantity)}\nIncluye: ${i.ingredients.join(', ') || 'Sin ingredientes incluidos'}${i.extras.length ? '\nExtras: '+i.extras.join(', ') : ''}`), `Total estimado: ${formatPrice(cart.reduce((a,i)=>a+i.unitPrice*i.quantity,0))}`, "Simulación: no se envía a cocina ni genera cobro."].join("\n\n");
    }

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
      saveCart();
      renderNutrition();
      const ordered=cart.map(i=>dishes.find(d=>d.name===i.name)).filter(Boolean);
      renderPairings("#cart-pairings",ordered.find(d=>d.category==="principales")||ordered[0],ordered);
      const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
      const total = cart.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
      cartCount.textContent = String(itemCount);
      document.querySelector("#float-count").textContent=itemCount;
      document.querySelector("#float-total").textContent=formatPrice(total);
      document.querySelector("#floating-order").hidden=!itemCount;
      document.querySelector("#cart-image").disabled=!itemCount;
      document.querySelector("#cart-open").setAttribute("aria-label", `Abrir pedido, ${itemCount} productos`);
      cartTotal.textContent = formatPrice(total);
      document.querySelector("#cart-clear").disabled = cart.length === 0;
      document.querySelector("#cart-confirm").disabled = cart.length === 0;

      cartItems.innerHTML = cart.length ? cart.map((item, index) => `
        <article class="cart-item">
          <div class="cart-item-heading">
            <img class="cart-thumb" src="${dishes.find(d => d.name === item.name)?.image || ""}" alt="" loading="lazy">
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
            <div class="cart-line-price"><small>${formatPrice(item.unitPrice)} / unidad</small><strong>${formatPrice(item.unitPrice * item.quantity)}</strong></div>
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
        existingItem.quantity = Math.min(99, existingItem.quantity + 1);
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
      document.querySelector("#detail-cart").hidden=false; pulseCart();
      document.querySelector("#cart-feedback").textContent = `${activeDish.name}${variantName ? ` (${variantName})` : ""} se agregó a Mi pedido.`;
    }

    function resetModelCamera() {
      dishModel.setAttribute("camera-orbit", "0deg 65deg 0.9m");
      if (typeof dishModel.jumpCameraToGoal === "function") dishModel.jumpCameraToGoal();
    }

    function loadActiveDishModel(load = !document.querySelector("#dish-3d").hidden) {
      const modelAsset = currentDishModel();
      const hasModel = Boolean(modelAsset.model && modelAsset.usdz);
      document.querySelector(".dialog-view-switch").hidden = !hasModel;
      if (hasModel && load) {
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

    const dishHistory = [];
    function updateDishHistory() {
      const previous = dishHistory[dishHistory.length - 1];
      document.querySelector("#dish-history-bar").hidden = !previous;
      document.querySelector("#dish-back-label").textContent = previous?.cart ? "Volver a mi pedido" : previous ? `Volver a ${dishes[previous.index].name}` : "Volver";
    }
    function captureDish() {
      return { index: dishes.indexOf(activeDish), variant: selectedVariantIndex,
        ingredients: [...selectedIngredients], extras: [...selectedExtras], scroll: dialog.scrollTop,
        tab: detailTab, view: document.querySelector("#dish-3d").hidden ? "photo" : "3d" };
    }
    document.querySelector("#dish-back").addEventListener("click", () => {
      const previous = dishHistory.pop();
      if (!previous) return;
      if (previous.cart) {
        dialog.close();
        renderCart();
        cartDialog.showModal();
        cartDialog.scrollTop = previous.scroll;
        return;
      }
      openDishDialog(previous.index, previous);
      document.querySelector("#dish-back").focus({preventScroll:true});
      dialog.scrollTop = previous.scroll;
    });
    function openDishDialog(dishIndex, restore = null) {
      activeDish = dishes[dishIndex];
      selectedVariantIndex = restore?.variant ?? 0;
      selectedIngredients = new Set(restore?.ingredients ?? currentDishIngredients());
      selectedExtras = new Set(restore?.extras ?? []);
      const hasModel = loadActiveDishModel(false);
      setDetailTab(restore?.tab || "description");
      document.querySelector("#detail-cart").hidden = true;
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
      if (restore) {
        dialogIngredients.querySelectorAll("[data-ingredient-index]").forEach(input => {
          const ingredient = currentDishIngredients()[Number(input.dataset.ingredientIndex)];
          input.checked = selectedIngredients.has(ingredient);
          input.setAttribute("aria-label", `${input.checked ? "Quitar" : "Volver a incluir"} ${ingredient}`);
          input.parentElement.classList.toggle("is-selected", input.checked);
          input.parentElement.querySelector(".custom-option-status").textContent = input.checked ? "Incluido" : "Quitado";
        });
        dialogExtras.querySelectorAll("[data-extra-index]").forEach(input => {
          const index = Number(input.dataset.extraIndex), extra = activeDish.extras[index];
          input.checked = selectedExtras.has(index);
          input.setAttribute("aria-label", `${input.checked ? "Quitar" : "Agregar"} ${extra.name}`);
          input.parentElement.classList.toggle("is-selected", input.checked);
          input.parentElement.querySelector(".custom-option-status").textContent = input.checked ? "Sumado" : formatPrice(extra.price);
        });
      }
      updateDishPreview();
      setDetailTab(detailTab);
      modelStatus.hidden = true;
      setDialogView(hasModel && restore?.view === "3d" ? "3d" : "photo");
      dialog.classList.remove("is-closing");
      window.clearTimeout(dialogCloseTimer);
      updateFavoriteButton();
      renderPairings("#dish-pairings",activeDish);
      updateDishHistory();
      if (!dialog.open) dialog.showModal();
      dialog.scrollTop = restore?.scroll ?? 0;
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
      if(show3d) loadActiveDishModel(true);
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
        setDetailTab(detailTab);
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
      if (!dialog.open) { dishHistory.length = 0; updateDishHistory(); }
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
          item.quantity = Math.min(99, Math.max(1, item.quantity + Number(quantityButton.dataset.cartQuantity)));
          cartMessage.hidden = true;
          cartMessage.textContent = "";
          renderCart();
        }
        return;
      }

      const removeButton = event.target.closest("[data-cart-remove]");
      if (removeButton) {
        const index = Number(removeButton.dataset.cartRemove);
        if (!cart[index]) return;
        rememberRemoval([cart[index]], false);
        cart.splice(index, 1);
        cartMessage.hidden = true;
        cartMessage.textContent = "";
        renderCart();
      }
    });
    document.querySelector("#cart-clear").addEventListener("click", () => {
      if (!cart.length) return;
      rememberRemoval(cart, true);
      cart = [];
      cartMessage.hidden = true;
      cartMessage.textContent = "";
      renderCart();
    });
    document.querySelector("#cart-confirm").addEventListener("click", async () => {
      if (!cart.length) return;
      const summary = cartSummary();
      try {
        await navigator.clipboard.writeText(summary);
        cartMessage.textContent = "Selección copiada. Puedes mostrarla al mesero. No se ha enviado ningún pedido.";
      } catch {
        cartMessage.textContent = summary;
      }
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
        { id: "favoritos", label: "♥ Favoritos", count: favorites.size },
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
      const normalize = value => value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
      const query = normalize(document.querySelector("#menu-search").value.trim());
      let visibleDishes = dishes.filter(dish => (filter === "todos" || (filter === "favoritos" ? favorites.has(dish.name) : dish.category === filter)) && matchesPreferences(dish) && normalize([dish.name, dish.description, ...dish.ingredients].join(" ")).includes(query));
      const max = document.querySelector("#price-filter").value;
      if(max!=="") visibleDishes=visibleDishes.filter(d=>d.priceValue<=Number(max));
      const sort=document.querySelector("#price-sort").value;
      if(sort!=="default") visibleDishes.sort((a,b)=>(a.priceValue-b.priceValue)*(sort==="asc"?1:-1));
      document.querySelector("#menu-results").textContent = `${visibleDishes.length} productos`;
      if (!visibleDishes.length) { grid.innerHTML = '<p class="cart-empty">No encontramos platos con esa búsqueda. <button type="button" data-reset-empty>Quitar filtros</button></p>'; return; }
      grid.innerHTML = visibleDishes.map((dish, index) => {
        const dishIndex = dishes.indexOf(dish);
        return `
          <article class="dish-card reveal" data-dish-index="${dishIndex}" style="transition-delay:${Math.min(index, 6) * 70}ms">
            <div class="dish-photo">
              <img src="${dish.image}" alt="${dish.alt}" loading="lazy">
              ${dish.imageCredit ? `<a class="photo-credit" href="${dish.imageCredit.source}" target="_blank" rel="noopener noreferrer">Foto: ${dish.imageCredit.author} · ${dish.imageCredit.license}</a>` : ""}
              <span class="dish-badge">${dish.label}</span><button class="favorite-button" type="button" data-favorite="${dishIndex}" aria-label="Favorito: ${dish.name}" aria-pressed="${favorites.has(dish.name)}">${favorites.has(dish.name)?"♥":"♡"}</button>
            </div>
            <div class="dish-body">
              <div class="dish-title-row"><h3>${dish.name}</h3><span class="dish-price">${dish.pricePrefix || ""}${formatPrice(dish.priceValue)}</span></div>
              <p class="dish-desc">${dish.description}</p>
              <div class="dish-meta">
                <span class="calories"><strong>${dish.caloriesLabel || dish.calories} kcal est.</strong> · por porción</span>
                <button class="details-button" type="button" data-details="${dishIndex}">Ver detalles +</button><button type="button" class="quick-add" data-quick="${dishIndex}" aria-label="Agregar ${dish.name}">+ Agregar</button>
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
      if(event.target.closest("[data-reset-empty]")){document.querySelector("#reset-filters").click();return;}
      const quick=event.target.closest("[data-quick]");if(quick){quickAdd(Number(quick.dataset.quick));return;}
      const fav=event.target.closest("[data-favorite]"); if(fav){toggleFavorite(dishes[Number(fav.dataset.favorite)]);return;}
      const button = event.target.closest("[data-details]");
      if (!button) return;
      dishHistory.length = 0;
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

    document.querySelector("#menu-search").addEventListener("input", () => renderMenu(activeMenuFilter));
    document.querySelector("#detail-favorite").addEventListener("click",()=>toggleFavorite(activeDish));
    ["#diet-filter","#calorie-filter","#allergen-filter"].forEach(id=>document.querySelector(id).addEventListener("change",()=>{renderMenu(activeMenuFilter);renderCart();}));
    document.querySelector("#reset-filters").addEventListener("click",()=>{["#diet-filter","#calorie-filter","#allergen-filter"].forEach(id=>document.querySelector(id).value="all");document.querySelector("#price-filter").value="";document.querySelector("#price-sort").value="default";document.querySelector("#menu-search").value="";activeMenuFilter="todos";renderMenuTabs();renderMenu();renderCart();});
    ["#dish-pairings","#cart-pairings"].forEach(id=>document.querySelector(id).addEventListener("click",e=>{const b=e.target.closest("[data-pairing]");if(!b)return;if(cartDialog.open){dishHistory.length=0;dishHistory.push({cart:true,scroll:cartDialog.scrollTop});cartDialog.close();}else if(dialog.open && activeDish){dishHistory.push(captureDish());}openDishDialog(Number(b.dataset.pairing));dialog.scrollTop=0;document.querySelector("#dish-back").focus({preventScroll:true});}));
    let detailTab="description", undoSnapshot=null, undoTimer, noticeTimer, returnDish=null;
    const $=id=>document.getElementById(id);
    function setDetailTab(tab){detailTab=tab; for(const t of ["description","ingredients","nutrition"]){$("detail-"+t).hidden=t!==tab;document.querySelector(`[data-detail-tab="${t}"]`).setAttribute("aria-pressed",String(t===tab));} if(activeDish){const v=currentDishVariant();const m=activeDish.variants?variantsMacros[selectedVariantIndex]:macroEstimates[dishes.indexOf(activeDish)];$("detail-macros").textContent=`${v?.calories??activeDish.calories} kcal · ${m?`Proteínas ${m[0]} g · Carbohidratos ${m[1]} g · Grasas ${m[2]} g`:"Macronutrientes no disponibles"}`;}}
    document.querySelectorAll("[data-detail-tab]").forEach(b=>b.onclick=()=>setDetailTab(b.dataset.detailTab));
    function pulseCart(){cartCount.animate?.([{transform:"scale(1)"},{transform:"scale(1.25)"},{transform:"scale(1)"}],{duration:matchMedia("(prefers-reduced-motion: reduce)").matches?0:300});}
    function quickAdd(i){const d=dishes[i];if(d.variants?.length){dishHistory.length=0;openDishDialog(i);setDetailTab("ingredients");return;}const ingredients=[...d.ingredients],key=JSON.stringify([d.name,"",[...ingredients].sort(),[]]);const existing=cart.find(x=>x.key===key);if(existing)existing.quantity=Math.min(99,existing.quantity+1);else cart.push({key,name:d.name,variant:"",ingredients,extras:[],unitPrice:d.priceValue,quantity:1});renderCart();pulseCart();$("quick-notice").textContent=d.name+" agregado a tu pedido";$("quick-notice").hidden=false;clearTimeout(noticeTimer);noticeTimer=setTimeout(()=>$("quick-notice").hidden=true,3500);}
    let restoreTimer;
    function hideRestore(){
      clearTimeout(restoreTimer);
      $("restore-anchor").hidden=true;
      $("restore-panel").classList.remove("is-running","is-leaving");
    }
    function showRestore(){
      hideRestore();
      const panel=$("restore-panel");
      $("restore-anchor").hidden=false;
      void panel.offsetWidth;
      panel.classList.add("is-running");
      restoreTimer=setTimeout(()=>{panel.classList.add("is-leaving");restoreTimer=setTimeout(hideRestore,180);},2820);
    }
    function hideUndo(){
      clearTimeout(undoTimer);
      undoSnapshot=null;
      $("undo-panel").classList.add("is-leaving");
      undoTimer=setTimeout(()=>{$("undo-anchor").hidden=true;},180);
    }
    function rememberRemoval(items, cleared){
      hideRestore();
      clearTimeout(undoTimer);
      undoSnapshot=JSON.parse(JSON.stringify(items));
      $("undo-message").textContent=cleared?"Pedido vaciado":"Producto eliminado";
      const panel=$("undo-panel");
      $("undo-anchor").hidden=false;
      panel.classList.remove("is-leaving","is-running");
      void panel.offsetWidth;
      panel.classList.add("is-running");
      undoTimer=setTimeout(hideUndo,6000);
    }
    $("undo-cart").onclick=()=>{
      if(!undoSnapshot)return;
      for(const item of undoSnapshot){
        const existing=cart.find(entry=>entry.key===item.key);
        if(existing)existing.quantity=Math.min(99,existing.quantity+item.quantity);
        else cart.push(item);
      }
      clearTimeout(undoTimer);undoSnapshot=null;$("undo-anchor").hidden=true;
      renderCart();
      cartMessage.textContent="";cartMessage.hidden=true;
      showRestore();
      document.querySelector("[data-cart-close]").focus({preventScroll:true});
    };
    cartDialog.addEventListener("close",()=>{if(undoSnapshot)hideUndo();hideRestore();});
    function openOrder(){if(!cartDialog.open)$("cart-open").click();}
    $("floating-order").onclick=openOrder;$("dock-cart").onclick=openOrder;
    $("detail-cart").onclick=()=>{returnDish=captureDish();openOrder();};
    document.querySelector("[data-continue]").onclick=()=>closeCartDialog();
    cartDialog.addEventListener("close",()=>{if(returnDish){const snapshot=returnDish;returnDish=null;if(dialog.open){setDetailTab(snapshot.tab);dialog.scrollTop=snapshot.scroll;}}});
    $("dock-favorites").onclick=()=>{activeMenuFilter="favoritos";renderMenuTabs();renderMenu(activeMenuFilter);$("menu").scrollIntoView();};
    ["price-filter","price-sort"].forEach(id=>$(id).addEventListener(id==="price-filter"?"input":"change",()=>renderMenu(activeMenuFilter)));
    $("text-size").onclick=()=>{const large=document.documentElement.classList.toggle("large-text");$("text-size").setAttribute("aria-pressed",String(large));try{localStorage.setItem("ec-large",String(large));}catch{}};
    try{if(localStorage.getItem("ec-large")==="true"){document.documentElement.classList.add("large-text");$("text-size").setAttribute("aria-pressed","true");}}catch{}
    $("help-open").onclick=()=>$("help-dialog").showModal();$("help-close").onclick=()=>{$("help-dialog").close();};
    try{if(!localStorage.getItem("ec-help-seen")){localStorage.setItem("ec-help-seen","1");$("help-dialog").showModal();}}catch{}
    $("cart-image").onclick=()=>{if(!cart.length)return;const canvas=document.createElement("canvas"),ctx=canvas.getContext("2d");const lines=[];ctx.font="22px Arial";for(const paragraph of cartSummary().split("\n")){let line="";for(const w of paragraph.split(" ")){if(ctx.measureText(line+" "+w).width>650&&line){lines.push(line);line=w;}else line+=(line?" ":"")+w;}lines.push(line);}canvas.width=740;canvas.height=100+lines.length*32;ctx.fillStyle="#11110f";ctx.fillRect(0,0,canvas.width,canvas.height);ctx.font="22px Arial";lines.forEach((l,i)=>{ctx.fillStyle=i===0?"#c5a46d":"#f1eee6";ctx.fillText(l,42,55+i*32);});canvas.toBlob(blob=>{if(!blob)return;const url=URL.createObjectURL(blob),a=document.createElement("a");a.href=url;a.download="El-Comienzo-seleccion.png";a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);});};
    renderMenuTabs(); renderCart(); renderMenu(); observeReveals();
