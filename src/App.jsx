import React, { useState } from "react";

const logo = "/LJ_Tires_Logo.png";
const shopFront = "/shop-front.jpg";
const lobby = "/lobby.jpeg";
const counter = "/counter.jpeg";
const bay = "/service-bay.jpeg";
const koalafiFlyer = "/koalafi.png";

const mayPromoImage = "/may-specials.png";
const mayPromoImageTwo = "/may-best-deals.png";

const phone = "3059745702";
const displayPhone = "305-974-5702";
const email = "ljtiresandautocarellc@gmail.com";
const internalTextNumber = "7862805878";
const shopEmail = "ljtiresandautocarellc@gmail.com";

const mapsLink = "https://maps.app.goo.gl/u41U78RN3dC2opZo8";
const snapLink = "https://snapf.in/PZyHODR";
const instagramPromo =
  "https://www.instagram.com/p/DW4Dvp_Ebwa/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==";

const services = [
  { key: "tires", icon: "🛞", img: "/tires.png" },
  { key: "oil", icon: "🛢️", img: "/oil-change.png" },
  { key: "brakes", icon: "🛑", img: "/brakes.png" },
  { key: "alignment", icon: "⚙️", img: "/alignment.png" },
  { key: "diagnostics", icon: "🔧", img: "/diagnostics.png" },
  { key: "repair", icon: "🚗", img: "/repair.png" },
];

const galleryImages = [lobby, shopFront, counter, bay, lobby, shopFront, counter, bay];

const vehicleModels = {
  Toyota: ["Camry", "Corolla", "RAV4", "Highlander", "Tacoma", "Tundra", "4Runner", "Sienna", "Prius", "Avalon", "Venza", "C-HR", "Sequoia", "Other"],
  Honda: ["Accord", "Civic", "CR-V", "HR-V", "Pilot", "Odyssey", "Ridgeline", "Passport", "Fit", "Insight", "Other"],
  Nissan: ["Altima", "Sentra", "Maxima", "Rogue", "Murano", "Pathfinder", "Armada", "Frontier", "Titan", "Versa", "Kicks", "Other"],
  Hyundai: ["Elantra", "Sonata", "Accent", "Tucson", "Santa Fe", "Palisade", "Kona", "Venue", "Genesis", "Other"],
  Kia: ["Forte", "Optima", "K5", "Soul", "Sportage", "Sorento", "Telluride", "Rio", "Carnival", "Stinger", "Other"],
  Ford: ["F-150", "F-250", "F-350", "Escape", "Explorer", "Edge", "Expedition", "Mustang", "Fusion", "Focus", "Ranger", "Bronco", "Other"],
  Chevrolet: ["Silverado", "Malibu", "Impala", "Equinox", "Traverse", "Tahoe", "Suburban", "Camaro", "Colorado", "Trax", "Cruze", "Other"],
  Dodge: ["Charger", "Challenger", "Durango", "Journey", "Grand Caravan", "Ram 1500", "Ram 2500", "Ram 3500", "Other"],
  Jeep: ["Wrangler", "Grand Cherokee", "Cherokee", "Compass", "Renegade", "Gladiator", "Patriot", "Commander", "Other"],
  "Mercedes-Benz": ["C-Class", "E-Class", "S-Class", "CLA", "CLS", "GLA", "GLB", "GLC", "GLE", "GLS", "Sprinter", "Other"],
  BMW: ["3 Series", "5 Series", "7 Series", "X1", "X3", "X5", "X6", "X7", "M3", "M4", "M5", "Other"],
  Audi: ["A3", "A4", "A5", "A6", "A7", "A8", "Q3", "Q5", "Q7", "Q8", "RS3", "RS5", "Other"],
  Lexus: ["IS", "ES", "GS", "LS", "NX", "RX", "GX", "LX", "UX", "RC", "Other"],
  Acura: ["ILX", "TLX", "RLX", "MDX", "RDX", "Integra", "TSX", "Other"],
  Volkswagen: ["Jetta", "Passat", "Golf", "GTI", "Tiguan", "Atlas", "Beetle", "Taos", "CC", "Other"],
  Mazda: ["Mazda3", "Mazda6", "CX-3", "CX-5", "CX-7", "CX-9", "CX-30", "MX-5 Miata", "Other"],
  Subaru: ["Impreza", "Legacy", "Outback", "Forester", "Crosstrek", "Ascent", "WRX", "BRZ", "Other"],
  Other: ["Other"],
  Otro: ["Otro"],
  Lòt: ["Lòt"],
};

const translations = {
  en: {
    nav: {
      services: "Services",
      promotions: "Promotions",
      financing: "Financing",
      contact: "Contact",
    },
    buttons: {
      call: "Call Now",
      backHome: "← Back Home",
      viewPromotions: "🔥 View May Promotions",
      getDirections: "📍 Get Directions",
      openMaps: "Open Google Maps",
      sendText: "Send Request by Text",
      sendEmail: "Send Request by Email",
      readReviews: "⭐ Read More Google Reviews",
      back: "← Back",
    },
    hero: {
      badge: "Tires • Auto Repair • Financing Available",
      hero1: "Engine Light?",
      hero2: "Don’t Delay —",
      hero3: "L&J Gets You On Your Way.",
      mission:
        "Our mission is simple: honest service, quality work, and every customer driving away confident.",
      oil:
        "Oil changes starting at $79.99 for select vehicles. Come in for tire financing.",
      languageLine: "Se habla español • Nou pale kreyòl",
      desc:
        "L&J Tires & Autocare helps North Miami drivers with tires, oil changes, brakes, alignments, diagnostics, and repair work done right.",
      badgeService: "5-Star Service",
      badgeRepairs: "Honest Repairs",
      badgeFinancing: "Financing Available",
      badgeTrusted: "North Miami Trusted",
    },
    sections: {
      services: "Our Services",
      promotions: "May Promotions",
      promotionNote:
        "Click below to view our current May specials. Offers are available for a limited time and may vary by vehicle.",
      financing: "Financing Available",
      shop: "Visit The Shop",
      reviews: "Customer Reviews",
      contact: "Ready to Schedule?",
    },
    popup: {
      small: "MAY SPECIAL",
      title: "Oil Changes Starting At $79.99 + Tire Financing",
      text: "Valid for select vehicles. Ask about financing today.",
    },
    promoCards: {
      oneTitle: "View May Specials",
      oneText: "Oil changes, tire deals, and Mother’s Month offers",
      twoTitle: "Miami’s Best Deals This May",
      twoText: "Click to view the full promotion",
    },
    financing: {
      banner: "💳 TWO FINANCING OPTIONS AVAILABLE — APPLY TODAY",
      snapTitle: "SNAP FINANCING",
      snapText: "Click below to apply directly with Snap Finance.",
      koalafiTitle: "KOALAFI FINANCING",
      koalafiText: "Scan the Koalafi QR code to apply and pay over time.",
      scan: "SCAN TO APPLY",
    },
    form: {
      request: "Request",
      note:
        "Enter your contact and vehicle information. This will send the shop your request by text or email.",
      name: "Your Name",
      phone: "Phone Number",
      email: "Email Address",
      year: "Year",
      make: "Make",
      model: "Model",
      selectMakeFirst: "Select Make First",
      trim: "Trim (Optional)",
      engine: "Engine Size (Optional)",
      vin: "VIN (Optional)",
      mitchellTitle: "Specs Confirmed With Mitchell",
      mitchellText: "Not sure what oil, tire size, or fluid your vehicle needs? Send us your year, make, model, trim, engine size, or VIN. L&J will verify the correct specs using Mitchell before service.",
      mileage: "Mileage",
      issue: "Service Issue",
      message: "Anything else we should know?",
    },
    makes: [
      "Toyota",
      "Honda",
      "Nissan",
      "Hyundai",
      "Kia",
      "Ford",
      "Chevrolet",
      "Dodge",
      "Jeep",
      "Mercedes-Benz",
      "BMW",
      "Audi",
      "Lexus",
      "Acura",
      "Volkswagen",
      "Mazda",
      "Subaru",
      "Other",
    ],
    reviews: [
      "Great price and fast service. Amazing place, friendly people and fast turnaround.",
      "Very honest, friendly, and professional. They made the whole process smooth.",
      "They helped me get financed and took care of everything without stress.",
    ],
    customer: "- L&J Customer",
    serviceData: {
      tires: {
        menuTitle: "Tires",
        title: "Tire Service",
        note:
          "Need new tires, used tires, mounting, balancing, or tire financing? Send us your vehicle info.",
        boxes: [
          ["NEW / USED", "Tire Options", "Quote Required", ["New and used tires", "Mounting available", "Financing available"]],
          ["INSTALL", "Mount + Balance", "Starting at $25.99 + Tax", ["Mounting", "Balancing", "Valve stem check"]],
          ["CHECK", "Tire Inspection", "Starting at $9.99 + Tax Per Tire", ["Tread check", "Pressure check", "Uneven wear check"]],
        ],
        issues: ["Need tires", "Flat tire", "Tire pressure light", "Mount and balance", "Used tires", "New tires", "Not sure"],
      },
      oil: {
        menuTitle: "Oil Changes",
        title: "Oil Change Service",
        note:
          "Select the oil change option that fits your vehicle. Final price may depend on vehicle type, oil capacity, and filter.",
        boxes: [
          ["GOOD", "Standard Oil Change", "Starting at $65.99 + Tax", ["Oil and filter replacement", "Fluid level check", "Tire pressure check"]],
          ["BETTER", "Full Synthetic Oil Change", "Starting at $85.99 + Tax", ["Full synthetic oil", "Oil filter replacement", "Fluid and tire pressure check"]],
          ["BEST", "Mobil 1 Full Synthetic Oil Change", "Starting at $119.99 + Tax", ["Premium full synthetic oil", "Oil filter replacement", "Basic inspection for leaks, belts, and fluids"]],
        ],
        issues: ["Oil change", "Full synthetic", "High mileage oil", "Oil leak", "Maintenance light", "Not sure"],
      },
      brakes: {
        menuTitle: "Brakes",
        title: "Brake Service",
        note:
          "Brake noise, grinding, shaking, or longer stopping distance? Send us your vehicle information and we’ll contact you.",
        boxes: [
          ["INSPECTION", "Brake Check", "Priced In Store", ["Brake pad inspection", "Rotor check", "Brake fluid check"]],
          ["SERVICE", "Brake Pads", "Quote Required", ["Front or rear brake pads", "Hardware check", "Road safety inspection"]],
          ["FULL JOB", "Pads + Rotors", "Quote Required", ["Brake pads and rotors", "Noise/vibration diagnosis", "Recommended for worn rotors"]],
        ],
        issues: ["Squeaking noise", "Grinding noise", "Shaking when braking", "Brake light on", "Soft brake pedal", "Need brake pads", "Need pads and rotors", "Not sure"],
      },
      alignment: {
        menuTitle: "Alignments",
        title: "Alignment Service",
        note:
          "Vehicle pulling, uneven tire wear, or steering wheel off-center? Send us your vehicle info.",
        boxes: [
          ["CHECK", "Alignment Check", "Starting at $45.99 + Tax", ["Steering check", "Tire wear check", "Suspension look-over"]],
          ["SERVICE", "Wheel Alignment", "Quote Required", ["Alignment service", "Steering correction", "Tire wear prevention"]],
          ["PROTECT", "Tire Wear Help", "Priced In Store", ["Uneven wear diagnosis", "Suspension check", "Road feel review"]],
        ],
        issues: ["Car pulls left/right", "Steering wheel crooked", "Uneven tire wear", "After new tires", "Suspension concern", "Not sure"],
      },
      diagnostics: {
        menuTitle: "Diagnostics",
        title: "Diagnostic Service",
        note:
          "Diagnostic fee is $49.99 + Tax. If you approve the repair with us, this fee is applied to your final bill.",
        boxes: [
          ["CHECK", "Check Engine Light", "$49.99 + Tax", ["Code scan", "System check", "Applied to repair bill"]],
          ["ELECTRICAL", "Battery / Electrical", "Quote Required", ["Battery test", "Charging system check", "Electrical concern review"]],
          ["ENGINE", "Performance Issue", "Quote Required", ["Rough idle", "No start", "Warning lights"]],
        ],
        issues: ["Check engine light", "Battery light", "Car won’t start", "Rough idle", "Overheating", "Electrical issue", "Not sure"],
      },
      repair: {
        menuTitle: "General Repair",
        title: "General Repair",
        note:
          "For leaks, suspension, belts, hoses, cooling issues, and general repair needs, send us your vehicle info.",
        boxes: [
          ["INSPECTION", "General Check", "Starting at $119.99 + Tax", ["Visual inspection", "Concern verification", "Repair recommendation"]],
          ["REPAIR", "Mechanical Repair", "Quote Required", ["Suspension", "Cooling system", "Belts and hoses"]],
          ["SERVICE", "Maintenance Help", "Quote Required", ["Fluid checks", "Noise concerns", "Basic repairs"]],
        ],
        issues: ["Noise concern", "Leak", "Overheating", "Suspension issue", "Maintenance", "General repair", "Not sure"],
      },
    },
  },

  es: {
    nav: {
      services: "Servicios",
      promotions: "Promociones",
      financing: "Financiamiento",
      contact: "Contacto",
    },
    buttons: {
      call: "Llamar Ahora",
      backHome: "← Volver Al Inicio",
      viewPromotions: "🔥 Ver Promociones De Mayo",
      getDirections: "📍 Cómo Llegar",
      openMaps: "Abrir Google Maps",
      sendText: "Enviar Solicitud Por Texto",
      sendEmail: "Enviar Solicitud Por Email",
      readReviews: "⭐ Ver Más Reseñas En Google",
      back: "← Atrás",
    },
    hero: {
      badge: "Gomas • Reparación De Autos • Financiamiento Disponible",
      hero1: "¿Luz del motor?",
      hero2: "No esperes —",
      hero3: "L&J te pone en camino.",
      mission:
        "Nuestra misión es simple: servicio honesto, trabajo de calidad y que cada cliente maneje con confianza.",
      oil:
        "Cambios de aceite desde $79.99 para vehículos seleccionados. Ven al taller para financiamiento de gomas.",
      languageLine: "Se habla español • Nou pale kreyòl",
      desc:
        "L&J Tires & Autocare ayuda a conductores de North Miami con gomas, cambios de aceite, frenos, alineación, diagnóstico y reparación.",
      badgeService: "Servicio 5 Estrellas",
      badgeRepairs: "Reparaciones Honestas",
      badgeFinancing: "Financiamiento Disponible",
      badgeTrusted: "Confiado En North Miami",
    },
    sections: {
      services: "Nuestros Servicios",
      promotions: "Promociones De Mayo",
      promotionNote:
        "Haz clic abajo para ver nuestras promociones actuales de Mayo. Las ofertas son por tiempo limitado y pueden variar según el vehículo.",
      financing: "Financiamiento Disponible",
      shop: "Visita El Taller",
      reviews: "Reseñas De Clientes",
      contact: "¿Listo Para Hacer Una Cita?",
    },
    popup: {
      small: "ESPECIAL DE MAYO",
      title: "Cambio De Aceite Desde $79.99 + Financiamiento De Gomas",
      text: "Válido para vehículos seleccionados. Pregunta por financiamiento hoy.",
    },
    promoCards: {
      oneTitle: "Ver Especiales De Mayo",
      oneText: "Cambios de aceite, ofertas de gomas y especiales del mes de las madres",
      twoTitle: "Las Mejores Ofertas De Miami Este Mayo",
      twoText: "Haz clic para ver la promoción completa",
    },
    financing: {
      banner: "💳 DOS OPCIONES DE FINANCIAMIENTO DISPONIBLES — APLICA HOY",
      snapTitle: "FINANCIAMIENTO SNAP",
      snapText: "Haz clic abajo para aplicar directamente con Snap Finance.",
      koalafiTitle: "FINANCIAMIENTO KOALAFI",
      koalafiText: "Escanea el código QR de Koalafi para aplicar y pagar poco a poco.",
      scan: "ESCANEA PARA APLICAR",
    },
    form: {
      request: "Solicitar",
      note:
        "Ingrese su información de contacto y del vehículo. Esto enviará su solicitud al taller por texto o email.",
      name: "Su Nombre",
      phone: "Número De Teléfono",
      email: "Correo Electrónico",
      year: "Año",
      make: "Marca",
      model: "Modelo",
      selectMakeFirst: "Seleccione La Marca Primero",
      trim: "Trim (Opcional)",
      engine: "Motor (Opcional)",
      vin: "VIN (Opcional)",
      mitchellTitle: "Especificaciones Confirmadas Con Mitchell",
      mitchellText: "¿No sabe qué aceite, tamaño de goma o fluido necesita su vehículo? Envíenos el año, marca, modelo, trim, motor o VIN. L&J verificará las especificaciones correctas usando Mitchell antes del servicio.",
      mileage: "Millaje",
      issue: "Problema / Servicio",
      message: "¿Algo más que debamos saber?",
    },
    makes: [
      "Toyota",
      "Honda",
      "Nissan",
      "Hyundai",
      "Kia",
      "Ford",
      "Chevrolet",
      "Dodge",
      "Jeep",
      "Mercedes-Benz",
      "BMW",
      "Audi",
      "Lexus",
      "Acura",
      "Volkswagen",
      "Mazda",
      "Subaru",
      "Otro",
    ],
    reviews: [
      "Buen precio y servicio rápido. Excelente lugar, personas amables y trabajo rápido.",
      "Muy honestos, amables y profesionales. Hicieron todo el proceso fácil.",
      "Me ayudaron con financiamiento y se encargaron de todo sin estrés.",
    ],
    customer: "- Cliente De L&J",
    serviceData: {
      tires: {
        menuTitle: "Gomas",
        title: "Servicio De Gomas",
        note:
          "¿Necesita gomas nuevas, usadas, montaje, balanceo o financiamiento de gomas? Envíenos la información de su vehículo.",
        boxes: [
          ["NUEVAS / USADAS", "Opciones De Gomas", "Cotización Requerida", ["Gomas nuevas y usadas", "Montaje disponible", "Financiamiento disponible"]],
          ["INSTALACIÓN", "Montaje + Balanceo", "Desde $25.99 + Impuesto", ["Montaje", "Balanceo", "Revisión de válvula"]],
          ["REVISIÓN", "Inspección De Gomas", "Desde $9.99 + Impuesto Por Goma", ["Revisión de banda", "Revisión de presión", "Revisión de desgaste irregular"]],
        ],
        issues: ["Necesito gomas", "Goma ponchada", "Luz de presión de gomas", "Montaje y balanceo", "Gomas usadas", "Gomas nuevas", "No estoy seguro"],
      },
      oil: {
        menuTitle: "Aceite",
        title: "Servicio De Cambio De Aceite",
        note:
          "Seleccione el cambio de aceite que se ajuste a su vehículo. El precio final puede depender del tipo de vehículo, capacidad de aceite y filtro.",
        boxes: [
          ["BUENO", "Cambio De Aceite Estándar", "Desde $65.99 + Impuesto", ["Cambio de aceite y filtro", "Revisión de fluidos", "Revisión de presión de gomas"]],
          ["MEJOR", "Cambio De Aceite Full Sintético", "Desde $85.99 + Impuesto", ["Aceite full sintético", "Cambio de filtro", "Revisión de fluidos y presión de gomas"]],
          ["PREMIUM", "Cambio De Aceite Mobil 1 Full Sintético", "Desde $119.99 + Impuesto", ["Aceite full sintético premium", "Cambio de filtro", "Inspección básica de fugas, correas y fluidos"]],
        ],
        issues: ["Cambio de aceite", "Full sintético", "Aceite alto millaje", "Fuga de aceite", "Luz de mantenimiento", "No estoy seguro"],
      },
      brakes: {
        menuTitle: "Frenos",
        title: "Servicio De Frenos",
        note:
          "¿Ruido al frenar, rechinido, vibración o distancia de frenado más larga? Envíenos la información de su vehículo y le contactaremos.",
        boxes: [
          ["INSPECCIÓN", "Revisión De Frenos", "Precio En Taller", ["Inspección de pastillas", "Revisión de rotores", "Revisión de líquido de frenos"]],
          ["SERVICIO", "Pastillas De Freno", "Cotización Requerida", ["Pastillas delanteras o traseras", "Revisión de herrajes", "Inspección de seguridad"]],
          ["TRABAJO COMPLETO", "Pastillas + Rotores", "Cotización Requerida", ["Pastillas y rotores", "Diagnóstico de ruido/vibración", "Recomendado para rotores desgastados"]],
        ],
        issues: ["Ruido al frenar", "Rechinido", "Vibra cuando frena", "Luz de frenos encendida", "Pedal de freno suave", "Necesito pastillas", "Necesito pastillas y rotores", "No estoy seguro"],
      },
      alignment: {
        menuTitle: "Alineación",
        title: "Servicio De Alineación",
        note:
          "¿El vehículo se va hacia un lado, desgaste irregular de gomas o volante fuera de centro? Envíenos la información de su vehículo.",
        boxes: [
          ["REVISIÓN", "Chequeo De Alineación", "Desde $45.99 + Impuesto", ["Revisión de dirección", "Revisión de desgaste de gomas", "Chequeo básico de suspensión"]],
          ["SERVICIO", "Alineación De Ruedas", "Cotización Requerida", ["Servicio de alineación", "Corrección de dirección", "Ayuda a prevenir desgaste de gomas"]],
          ["PROTECCIÓN", "Ayuda Con Desgaste De Gomas", "Precio En Taller", ["Diagnóstico de desgaste irregular", "Revisión de suspensión", "Revisión de manejo"]],
        ],
        issues: ["El carro se va a la izquierda/derecha", "Volante torcido", "Desgaste irregular de gomas", "Después de gomas nuevas", "Problema de suspensión", "No estoy seguro"],
      },
      diagnostics: {
        menuTitle: "Diagnóstico",
        title: "Servicio De Diagnóstico",
        note:
          "El diagnóstico cuesta $49.99 + impuesto. Si aprueba la reparación con nosotros, ese cargo se aplica a la factura final.",
        boxes: [
          ["REVISIÓN", "Luz De Check Engine", "$49.99 + Impuesto", ["Escaneo de códigos", "Revisión del sistema", "Se aplica a la reparación"]],
          ["ELÉCTRICO", "Batería / Eléctrico", "Cotización Requerida", ["Prueba de batería", "Revisión del sistema de carga", "Revisión eléctrica"]],
          ["MOTOR", "Problema De Rendimiento", "Cotización Requerida", ["Motor inestable", "No prende", "Luces de advertencia"]],
        ],
        issues: ["Luz de check engine", "Luz de batería", "El carro no prende", "Motor inestable", "Sobrecalentamiento", "Problema eléctrico", "No estoy seguro"],
      },
      repair: {
        menuTitle: "Reparación",
        title: "Reparación General",
        note:
          "Para fugas, suspensión, correas, mangueras, problemas de enfriamiento y reparaciones generales, envíenos la información de su vehículo.",
        boxes: [
          ["INSPECCIÓN", "Revisión General", "Desde $119.99 + Impuesto", ["Inspección visual", "Verificación del problema", "Recomendación de reparación"]],
          ["REPARACIÓN", "Reparación Mecánica", "Cotización Requerida", ["Suspensión", "Sistema de enfriamiento", "Correas y mangueras"]],
          ["SERVICIO", "Ayuda De Mantenimiento", "Cotización Requerida", ["Revisión de fluidos", "Problemas de ruido", "Reparaciones básicas"]],
        ],
        issues: ["Ruido", "Fuga", "Sobrecalentamiento", "Problema de suspensión", "Mantenimiento", "Reparación general", "No estoy seguro"],
      },
    },
  },

  ht: {
    nav: {
      services: "Sèvis",
      promotions: "Pwomosyon",
      financing: "Finansman",
      contact: "Kontak",
    },
    buttons: {
      call: "Rele Kounye a",
      backHome: "← Tounen Lakay",
      viewPromotions: "🔥 Gade Pwomosyon Me Yo",
      getDirections: "📍 Jwenn Direksyon",
      openMaps: "Louvri Google Maps",
      sendText: "Voye Demann Pa Tèks",
      sendEmail: "Voye Demann Pa Imèl",
      readReviews: "⭐ Gade Plis Revizyon Google",
      back: "← Tounen",
    },
    hero: {
      badge: "Kawotchou • Reparasyon Machin • Finansman Disponib",
      hero1: "Limyè motè limen?",
      hero2: "Pa tann —",
      hero3: "L&J ap mete w sou wout la.",
      mission:
        "Misyon nou senp: sèvis onèt, bon kalite travay, epi chak kliyan ale ak konfyans.",
      oil:
        "Chanjman lwil kòmanse a $79.99 pou kèk machin. Pase nan boutik la pou finansman kawotchou.",
      languageLine: "Se habla español • Nou pale kreyòl",
      desc:
        "L&J Tires & Autocare ede chofè North Miami ak kawotchou, chanjman lwil, fren, aliyman, dyagnostik ak reparasyon.",
      badgeService: "Sèvis 5 Etwal",
      badgeRepairs: "Reparasyon Onèt",
      badgeFinancing: "Finansman Disponib",
      badgeTrusted: "North Miami Fè Konfyans",
    },
    sections: {
      services: "Sèvis Nou Yo",
      promotions: "Pwomosyon Me Yo",
      promotionNote:
        "Klike anba a pou wè espesyal nou yo pou mwa Me. Òf yo valab pou yon tan limite epi yo ka depann de machin nan.",
      financing: "Finansman Disponib",
      shop: "Vizite Atelye A",
      reviews: "Revizyon Kliyan Yo",
      contact: "Ou Pare Pou Pran Randevou?",
    },
    popup: {
      small: "ESPESYAL ME",
      title: "Chanjman Lwil Kòmanse A $79.99 + Finansman Kawotchou",
      text: "Valab pou kèk machin. Mande enfòmasyon sou finansman jodi a.",
    },
    promoCards: {
      oneTitle: "Gade Espesyal Me Yo",
      oneText: "Chanjman lwil, bon pri sou kawotchou, ak òf mwa manman yo",
      twoTitle: "Pi Bon Pri Miami Mwa Me Sa",
      twoText: "Klike pou wè tout pwomosyon an",
    },
    financing: {
      banner: "💳 DE OPSYON FINANSMAN DISPONIB — APLIKE JODI A",
      snapTitle: "FINANSMAN SNAP",
      snapText: "Klike anba a pou aplike dirèkteman ak Snap Finance.",
      koalafiTitle: "FINANSMAN KOALAFI",
      koalafiText: "Eskane QR Koalafi a pou aplike epi peye ti kras pa ti kras.",
      scan: "ESKANE POU APLIKE",
    },
    form: {
      request: "Mande",
      note:
        "Antre enfòmasyon kontak ou ak enfòmasyon machin nan. Sa ap voye demann nan bay boutik la pa tèks oswa imèl.",
      name: "Non Ou",
      phone: "Nimewo Telefòn",
      email: "Adrès Imèl",
      year: "Ane",
      make: "Mak",
      model: "Modèl",
      selectMakeFirst: "Chwazi Mak La Avan",
      trim: "Trim (Opsyonèl)",
      engine: "Gwosè Motè (Opsyonèl)",
      vin: "VIN (Opsyonèl)",
      mitchellTitle: "N ap Konfime Espesifikasyon Yo Ak Mitchell",
      mitchellText: "Ou pa sèten ki lwil, gwosè kawotchou, oswa likid machin ou bezwen? Voye ane, mak, modèl, trim, gwosè motè, oswa VIN. L&J ap verifye bon espesifikasyon yo ak Mitchell anvan sèvis la.",
      mileage: "Kilometraj",
      issue: "Pwoblèm / Sèvis",
      message: "Gen lòt bagay nou dwe konnen?",
    },
    makes: [
      "Toyota",
      "Honda",
      "Nissan",
      "Hyundai",
      "Kia",
      "Ford",
      "Chevrolet",
      "Dodge",
      "Jeep",
      "Mercedes-Benz",
      "BMW",
      "Audi",
      "Lexus",
      "Acura",
      "Volkswagen",
      "Mazda",
      "Subaru",
      "Lòt",
    ],
    reviews: [
      "Bon pri ak sèvis rapid. Bèl kote, moun yo janti epi travay la fèt vit.",
      "Yo onèt, yo janti, epi yo pwofesyonèl. Yo fè tout bagay fasil.",
      "Yo ede m jwenn finansman epi yo okipe tout bagay san estrès.",
    ],
    customer: "- Kliyan L&J",
    serviceData: {
      tires: {
        menuTitle: "Kawotchou",
        title: "Sèvis Kawotchou",
        note:
          "Ou bezwen kawotchou nouvo, kawotchou itilize, monte, balans, oswa finansman kawotchou? Voye enfòmasyon machin ou.",
        boxes: [
          ["NOUVO / ITILIZE", "Opsyon Kawotchou", "Bezwen Kotasyon", ["Kawotchou nouvo ak itilize", "Monte disponib", "Finansman disponib"]],
          ["ENSTALASYON", "Monte + Balans", "Kòmanse a $25.99 + Taks", ["Monte", "Balans", "Tcheke valv"]],
          ["TCHEKE", "Enspeksyon Kawotchou", "Kòmanse a $9.99 + Taks Pa Kawotchou", ["Tcheke fil kawotchou", "Tcheke presyon", "Tcheke si li ap manje mal"]],
        ],
        issues: ["Bezwen kawotchou", "Kawotchou plat", "Limyè presyon kawotchou", "Monte ak balans", "Kawotchou itilize", "Kawotchou nouvo", "Mwen pa sèten"],
      },
      oil: {
        menuTitle: "Lwil",
        title: "Sèvis Chanjman Lwil",
        note:
          "Chwazi opsyon chanjman lwil ki mache ak machin ou. Pri final la ka depann de kalite machin, kantite lwil ak filtè.",
        boxes: [
          ["BON", "Chanjman Lwil Nòmal", "Kòmanse a $65.99 + Taks", ["Chanje lwil ak filtè", "Tcheke nivo likid", "Tcheke presyon kawotchou"]],
          ["PI BON", "Chanjman Lwil Full Synthetic", "Kòmanse a $85.99 + Taks", ["Lwil full synthetic", "Chanje filtè lwil", "Tcheke likid ak presyon kawotchou"]],
          ["PREMYÒM", "Mobil 1 Full Synthetic", "Kòmanse a $119.99 + Taks", ["Lwil full synthetic kalite siperyè", "Chanje filtè lwil", "Ti enspeksyon pou flit, senti ak likid"]],
        ],
        issues: ["Chanjman lwil", "Full synthetic", "Lwil pou gwo kilomèt", "Flit lwil", "Limyè antretyen", "Mwen pa sèten"],
      },
      brakes: {
        menuTitle: "Fren",
        title: "Sèvis Fren",
        note:
          "Fren ap fè bri, ap grate, machin nan ap tranble oswa li pran plis tan pou kanpe? Voye enfòmasyon machin ou epi n ap kontakte w.",
        boxes: [
          ["ENSPEKSYON", "Tcheke Fren", "Pri Nan Boutik", ["Tcheke pad fren", "Tcheke rotor", "Tcheke likid fren"]],
          ["SÈVIS", "Pad Fren", "Bezwen Kotasyon", ["Pad fren devan oswa dèyè", "Tcheke pyès yo", "Enspeksyon sekirite"]],
          ["TRAVAY KONPLÈ", "Pad + Rotor", "Bezwen Kotasyon", ["Pad fren ak rotor", "Dyagnostik bri/tranble", "Rekòmande lè rotor yo fin vye"]],
        ],
        issues: ["Fren ap fè bri", "Fren ap grate", "Machin tranble lè m frennen", "Limyè fren limen", "Pedal fren mou", "Bezwen pad fren", "Bezwen pad ak rotor", "Mwen pa sèten"],
      },
      alignment: {
        menuTitle: "Aliyman",
        title: "Sèvis Aliyman",
        note:
          "Machin nan ap rale sou kote, kawotchou yo ap manje mal, oswa volan an pa dwat? Voye enfòmasyon machin ou.",
        boxes: [
          ["TCHEKE", "Tcheke Aliyman", "Kòmanse a $45.99 + Taks", ["Tcheke direksyon", "Tcheke kawotchou", "Ti tcheke sispansyon"]],
          ["SÈVIS", "Aliyman Wou", "Bezwen Kotasyon", ["Sèvis aliyman", "Korije direksyon", "Ede kawotchou pa fini vit"]],
          ["PWOTEKSYON", "Èd Pou Kawotchou K Ap Manje", "Pri Nan Boutik", ["Dyagnostik move manje kawotchou", "Tcheke sispansyon", "Revizyon jan machin nan kondwi"]],
        ],
        issues: ["Machin rale agoch/adwat", "Volan pa dwat", "Kawotchou ap manje mal", "Apre nouvo kawotchou", "Pwoblèm sispansyon", "Mwen pa sèten"],
      },
      diagnostics: {
        menuTitle: "Dyagnostik",
        title: "Sèvis Dyagnostik",
        note:
          "Frè dyagnostik la se $49.99 + taks. Si ou apwouve reparasyon an avèk nou, frè sa a ap aplike sou fakti final la.",
        boxes: [
          ["TCHEKE", "Limyè Check Engine", "$49.99 + Taks", ["Eskane kòd yo", "Tcheke sistèm nan", "Aplike sou reparasyon an"]],
          ["ELEKTRIK", "Batri / Elektrik", "Bezwen Kotasyon", ["Tès batri", "Tcheke sistèm chaj la", "Revizyon pwoblèm elektrik"]],
          ["MOTÈ", "Pwoblèm Pèfòmans", "Bezwen Kotasyon", ["Motè ap mache mal", "Pa demare", "Limyè avètisman"]],
        ],
        issues: ["Limyè check engine", "Limyè batri", "Machin pa demare", "Motè ap mache mal", "Ap chofe", "Pwoblèm elektrik", "Mwen pa sèten"],
      },
      repair: {
        menuTitle: "Reparasyon",
        title: "Reparasyon Jeneral",
        note:
          "Pou flit, sispansyon, senti, kawotchou dlo, pwoblèm refwadisman ak reparasyon jeneral, voye enfòmasyon machin ou.",
        boxes: [
          ["ENSPEKSYON", "Tcheke Jeneral", "Kòmanse a $119.99 + Taks", ["Enspeksyon vizyèl", "Verifye pwoblèm nan", "Rekòmandasyon reparasyon"]],
          ["REPARASYON", "Reparasyon Mekanik", "Bezwen Kotasyon", ["Sispansyon", "Sistèm refwadisman", "Senti ak kawotchou"]],
          ["SÈVIS", "Èd Antretyen", "Bezwen Kotasyon", ["Tcheke likid yo", "Pwoblèm bri", "Reparasyon debaz"]],
        ],
        issues: ["Bri", "Flit", "Ap chofe", "Pwoblèm sispansyon", "Antretyen", "Reparasyon jeneral", "Mwen pa sèten"],
      },
    },
  },
};

export default function App() {
  const [lang, setLang] = useState("en");
  const [showPopup, setShowPopup] = useState(new Date().getMonth() === 4);
  const [selectedPage, setSelectedPage] = useState("home");
  const [hoveredService, setHoveredService] = useState(null);
  const [pauseGallery, setPauseGallery] = useState(false);
  const [openGalleryImage, setOpenGalleryImage] = useState(null);

  const [serviceForm, setServiceForm] = useState({
    name: "",
    phone: "",
    email: "",
    year: "",
    make: "",
    model: "",
    trim: "",
    engine: "",
    vin: "",
    mileage: "",
    issue: "",
    message: "",
  });

  const t = translations[lang];
  const page = selectedPage !== "home" ? t.serviceData[selectedPage] : null;

  const updateServiceForm = (e) => {
    const { name, value } = e.target;

    setServiceForm((prev) => ({
      ...prev,
      [name]: value,
      model: name === "make" ? "" : prev.model,
    }));
  };

  const buildServiceMessage = () => {
    return `
${page?.title || "Service"} Request

Name: ${serviceForm.name}
Phone: ${serviceForm.phone}
Email: ${serviceForm.email}
Vehicle: ${serviceForm.year} ${serviceForm.make} ${serviceForm.model}
Trim: ${serviceForm.trim}
Engine: ${serviceForm.engine}
VIN: ${serviceForm.vin}
Mileage: ${serviceForm.mileage}
Issue: ${serviceForm.issue}
Message: ${serviceForm.message}
`;
  };

  const sendServiceText = () => {
    window.location.href = `sms:${internalTextNumber}?body=${encodeURIComponent(
      buildServiceMessage()
    )}`;
  };

  const sendServiceEmail = () => {
    window.location.href = `mailto:${shopEmail}?subject=${encodeURIComponent(
      `${page?.title || "Service"} Request`
    )}&body=${encodeURIComponent(buildServiceMessage())}`;
  };

  const goHome = () => {
    setSelectedPage("home");
    setOpenGalleryImage(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const resetFormAndGoHome = () => {
    setSelectedPage("home");
    setServiceForm({
      name: "",
      phone: "",
      email: "",
      year: "",
      make: "",
      model: "",
      trim: "",
      engine: "",
      vin: "",
      mileage: "",
      issue: "",
      message: "",
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openServicePage = (serviceKey) => {
    setSelectedPage(serviceKey);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (selectedPage !== "home") {
    return (
      <>
        <GlobalStyles />

        <div style={styles.page}>
          <header style={styles.header}>
            <button type="button" onClick={goHome} style={styles.logoHomeButton} aria-label="Go Home">
              <img src={logo} alt="L&J Tires" style={styles.logo} />
            </button>

            <nav style={styles.nav}>
              <button style={styles.langBtn} onClick={() => setLang("en")}>EN</button>
              <button style={styles.langBtn} onClick={() => setLang("es")}>ES</button>
              <button style={styles.langBtn} onClick={() => setLang("ht")}>KREYÒL</button>
            </nav>

            <div>
              <a href={`tel:${phone}`} style={styles.darkBtn}>☎ {displayPhone}</a>
              <button onClick={resetFormAndGoHome} style={styles.redBtn}>
                {t.buttons.backHome}
              </button>
            </div>
          </header>

          <section style={styles.servicePageHero}>
            <div style={styles.servicePageOverlay} />
            <div style={styles.servicePageContent}>
              <p style={styles.badge}>L&J Tires & Autocare</p>
              <h1 style={styles.title}>{page.title}</h1>
              <p style={styles.desc}>{page.note}</p>
            </div>
          </section>

          <section style={styles.section}>
            <div style={styles.priceGrid}>
              {page.boxes.map((box) => (
                <div style={styles.priceBox} key={box[1]}>
                  <p style={styles.redSmall}>{box[0]}</p>
                  <h3>{box[1]}</h3>
                  <p style={styles.price}>{box[2]}</p>

                  <ul style={styles.serviceList}>
                    {box[3].map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div style={styles.serviceForm}>
              <h3>
                {t.form.request} {page.title}
              </h3>

              <p style={styles.formNote}>{t.form.note}</p>

              <div style={styles.specNotice}>
                <h4 style={styles.specNoticeTitle}>🔎 {t.form.mitchellTitle}</h4>
                <p style={styles.specNoticeText}>{t.form.mitchellText}</p>
              </div>

              <div style={styles.formGrid}>
                <input name="name" placeholder={t.form.name} value={serviceForm.name} onChange={updateServiceForm} style={styles.input} />
                <input name="phone" placeholder={t.form.phone} value={serviceForm.phone} onChange={updateServiceForm} style={styles.input} />
                <input name="email" placeholder={t.form.email} value={serviceForm.email} onChange={updateServiceForm} style={styles.input} />

                <select name="year" value={serviceForm.year} onChange={updateServiceForm} style={styles.input}>
                  <option value="">{t.form.year}</option>
                  {Array.from({ length: 31 }, (_, i) => 2026 - i).map((year) => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>

                <select name="make" value={serviceForm.make} onChange={updateServiceForm} style={styles.input}>
                  <option value="">{t.form.make}</option>
                  {t.makes.map((make) => (
                    <option key={make} value={make}>{make}</option>
                  ))}
                </select>

                <select
                  name="model"
                  value={serviceForm.model}
                  onChange={updateServiceForm}
                  style={styles.input}
                  disabled={!serviceForm.make}
                >
                  <option value="">
                    {serviceForm.make ? t.form.model : t.form.selectMakeFirst}
                  </option>
                  {(vehicleModels[serviceForm.make] || []).map((model) => (
                    <option key={model} value={model}>{model}</option>
                  ))}
                </select>

                <input name="trim" placeholder={t.form.trim} value={serviceForm.trim} onChange={updateServiceForm} style={styles.input} />
                <input name="engine" placeholder={t.form.engine} value={serviceForm.engine} onChange={updateServiceForm} style={styles.input} />
                <input name="vin" placeholder={t.form.vin} value={serviceForm.vin} onChange={updateServiceForm} style={styles.input} />
                <input name="mileage" placeholder={t.form.mileage} value={serviceForm.mileage} onChange={updateServiceForm} style={styles.input} />

                <select name="issue" value={serviceForm.issue} onChange={updateServiceForm} style={styles.input}>
                  <option value="">{t.form.issue}</option>
                  {page.issues.map((issue) => (
                    <option key={issue} value={issue}>{issue}</option>
                  ))}
                </select>
              </div>

              <textarea
                name="message"
                placeholder={t.form.message}
                value={serviceForm.message}
                onChange={updateServiceForm}
                style={styles.textarea}
              />

              <div style={{ marginTop: 18 }}>
                <button onClick={sendServiceText} style={styles.redBtn}>
                  {t.buttons.sendText}
                </button>

                <button onClick={sendServiceEmail} style={styles.darkBtn}>
                  {t.buttons.sendEmail}
                </button>

                <a href={mapsLink} target="_blank" rel="noreferrer" style={styles.whiteBtn}>
                  {t.buttons.getDirections}
                </a>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }

  return (
    <>
      <GlobalStyles />

      <div style={styles.page}>
        {openGalleryImage && (
          <div
            style={styles.galleryPopupBg}
            onClick={() => setOpenGalleryImage(null)}
          >
            <div
              style={styles.galleryPopup}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={openGalleryImage}
                alt="L&J Shop Preview"
                style={styles.galleryPopupImg}
              />
            </div>
          </div>
        )}

        {showPopup && (
          <div style={styles.popupBg}>
            <div style={styles.popup}>
              <button onClick={() => setShowPopup(false)} style={styles.close}>
                ×
              </button>

              <p style={styles.redSmall}>{t.popup.small}</p>
              <h2>{t.popup.title}</h2>
              <p>{t.popup.text}</p>

              <a href={`tel:${phone}`} style={styles.redBtn}>
                {t.buttons.call}
              </a>

              <a
                href="#promotions"
                onClick={() => setShowPopup(false)}
                style={styles.whiteBtn}
              >
                {t.buttons.viewPromotions}
              </a>
            </div>
          </div>
        )}

        <header style={styles.header}>
          <button type="button" onClick={goHome} style={styles.logoHomeButton} aria-label="Go Home">
              <img src={logo} alt="L&J Tires" style={styles.logo} />
            </button>

          <nav style={styles.nav}>
            <button style={styles.langBtn} onClick={() => setLang("en")}>EN</button>
            <button style={styles.langBtn} onClick={() => setLang("es")}>ES</button>
            <button style={styles.langBtn} onClick={() => setLang("ht")}>KREYÒL</button>

            <a href="#services" style={styles.navBtn}>{t.nav.services}</a>
            <a href="#promotions" style={styles.navBtn}>{t.nav.promotions}</a>
            <a href="#financing" style={styles.navBtn}>{t.nav.financing}</a>
            <a href="#contact" style={styles.navBtn}>{t.nav.contact}</a>
          </nav>

          <a href={`tel:${phone}`} style={styles.redBtn}>
            {t.buttons.call}
          </a>
        </header>

        <section style={styles.hero}>
          <div style={styles.heroBg} />
          <div style={styles.heroOverlay} />
          <div style={styles.lightSweep} />

          <div style={styles.heroContent}>
            <p style={styles.badge}>{t.hero.badge}</p>

            <h1 style={styles.title}>
              <span>{t.hero.hero1}</span>
              <br />
              <span>{t.hero.hero2}</span>
              <br />
              <span style={styles.glowRed}>{t.hero.hero3}</span>
            </h1>

            <p style={styles.mission}>{t.hero.mission}</p>

            <div style={styles.trustBadges}>
              <a href="#reviews" style={styles.trustBadge}>⭐ {t.hero.badgeService}</a>
              <a href="#services" style={styles.trustBadge}>🔧 {t.hero.badgeRepairs}</a>
              <a href="#financing" style={styles.trustBadge}>💳 {t.hero.badgeFinancing}</a>
              <a href={mapsLink} target="_blank" rel="noreferrer" style={styles.trustBadge}>
                📍 {t.hero.badgeTrusted}
              </a>
            </div>

            <p style={styles.oil}>🔥 {t.hero.oil}</p>

            <p style={styles.desc}>
              {t.hero.languageLine}
              <br />
              {t.hero.desc}
            </p>

            <a href={`tel:${phone}`} style={styles.redBtn}>☎ {displayPhone}</a>
            <a href="#promotions" style={styles.darkBtn}>{t.buttons.viewPromotions}</a>
            <a href={mapsLink} target="_blank" rel="noreferrer" style={styles.darkBtn}>
              {t.buttons.getDirections}
            </a>
          </div>

          <img src={logo} alt="L&J logo" style={styles.heroLogo} />
        </section>

        <section id="services" style={styles.section}>
          <h2>{t.sections.services}</h2>

          <div style={styles.cards}>
            {services.map((s) => {
              const isHovered = hoveredService === s.key;
              const serviceText = t.serviceData[s.key];

              return (
                <div
                  key={s.key}
                  onClick={() => openServicePage(s.key)}
                  onMouseEnter={() => setHoveredService(s.key)}
                  onMouseLeave={() => setHoveredService(null)}
                  style={{
                    ...styles.card,
                    transform: isHovered ? "scale(1.06)" : "scale(1)",
                    backgroundImage: `url(${s.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div style={{ ...styles.cardBlurLayer, opacity: isHovered ? 0 : 1 }} />

                  <h3
                    style={{
                      ...styles.serviceTitle,
                      opacity: isHovered ? 0 : 1,
                      transform: isHovered ? "translateY(12px)" : "translateY(0)",
                    }}
                  >
                    <span>{s.icon}</span> {serviceText.menuTitle}
                  </h3>
                </div>
              );
            })}
          </div>
        </section>

        <section id="promotions" style={styles.section}>
          <h2>{t.sections.promotions}</h2>
          <p style={styles.sectionNote}>{t.sections.promotionNote}</p>

          <div style={styles.promoGrid}>
            <a href={instagramPromo} target="_blank" rel="noreferrer" style={styles.promoCard}>
              <img src={mayPromoImage} alt="L&J May Specials" style={styles.promoImg} />

              <div style={styles.promoOverlay}>
                <h3 style={styles.promoTitle}>{t.promoCards.oneTitle}</h3>
                <p style={styles.promoText}>{t.promoCards.oneText}</p>
              </div>
            </a>

            <a href={instagramPromo} target="_blank" rel="noreferrer" style={styles.promoCard}>
              <img src={mayPromoImageTwo} alt="L&J Miami Best Deals This May" style={styles.promoImg} />

              <div style={styles.promoOverlay}>
                <h3 style={styles.promoTitle}>{t.promoCards.twoTitle}</h3>
                <p style={styles.promoText}>{t.promoCards.twoText}</p>
              </div>
            </a>
          </div>
        </section>

        <section id="financing" style={styles.section}>
          <h2>{t.sections.financing}</h2>

          <div style={styles.banner}>{t.financing.banner}</div>

          <div style={styles.financeGrid}>
            <div style={styles.financeBox}>
              <h3>{t.financing.snapTitle}</h3>
              <p>{t.financing.snapText}</p>

              <a href={snapLink} target="_blank" rel="noreferrer">
                <img
                  src="https://merchant-banners-s3.snapfinance.com/Loans/EN/A160x600.jpeg"
                  alt="Snap Finance"
                  style={styles.financeImg}
                />
              </a>
            </div>

            <div style={{ ...styles.financeBox, background: "#067f73" }}>
              <h3>{t.financing.koalafiTitle}</h3>
              <p>{t.financing.koalafiText}</p>
              <img src={koalafiFlyer} alt="Koalafi QR" style={styles.qr} />
              <h4>{t.financing.scan}</h4>
            </div>
          </div>
        </section>

        <section style={styles.section}>
          <h2>{t.sections.shop}</h2>

          <div
            style={styles.floatingGallery}
            onMouseEnter={() => setPauseGallery(true)}
            onMouseLeave={() => setPauseGallery(false)}
          >
            <div
              style={{
                ...styles.floatingTrack,
                animationPlayState: pauseGallery ? "paused" : "running",
              }}
            >
              {galleryImages.map((img, index) => (
                <button
                  type="button"
                  onClick={() => setOpenGalleryImage(img)}
                  style={styles.floatingCardButton}
                  key={`${img}-${index}`}
                >
                  <img src={img} alt="L&J shop" style={styles.floatingImg} />
                </button>
              ))}
            </div>
          </div>
        </section>

        <section id="reviews" style={styles.section}>
          <h2>{t.sections.reviews}</h2>

          <div style={styles.reviewGrid}>
            {t.reviews.map((review, index) => (
              <div style={styles.reviewCard} key={index}>
                <p style={styles.stars}>★★★★★</p>
                <p>“{review}”</p>
                <h4>{t.customer}</h4>
              </div>
            ))}
          </div>

          <a
            href="https://www.google.com/search?q=L%26J+Tires+%26+Autocare+North+Miami+reviews"
            target="_blank"
            rel="noreferrer"
            style={styles.redBtn}
          >
            {t.buttons.readReviews}
          </a>
        </section>

        <section id="contact" style={styles.contact}>
          <h2>{t.sections.contact}</h2>

          <p>
            ☎{" "}
            <a href={`tel:${phone}`} style={styles.contactLink}>
              {displayPhone}
            </a>
          </p>

          <p>
            ✉{" "}
            <a href={`mailto:${email}`} style={styles.contactLink}>
              {email}
            </a>
          </p>

          <p>
            📍{" "}
            <a href={mapsLink} target="_blank" rel="noreferrer" style={styles.contactLink}>
              14831 W Dixie Hwy, North Miami, FL 33181
            </a>
          </p>

          <a href={mapsLink} target="_blank" rel="noreferrer" style={styles.whiteBtn}>
            {t.buttons.openMaps}
          </a>
        </section>
      </div>
    </>
  );
}

function GlobalStyles() {
  return (
    <style>
      {`
        @keyframes floatLogo {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
          100% { transform: translateY(0px); }
        }

        @keyframes heroZoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.08); }
        }

        @keyframes lightSweep {
          0% { transform: translateX(-120%) skewX(-18deg); opacity: 0; }
          20% { opacity: .25; }
          50% { opacity: .18; }
          100% { transform: translateX(140%) skewX(-18deg); opacity: 0; }
        }

        @keyframes logoPulse {
          0% { filter: drop-shadow(0 20px 35px rgba(0,0,0,.7)) drop-shadow(0 0 10px rgba(220,38,38,.25)); }
          50% { filter: drop-shadow(0 25px 45px rgba(0,0,0,.8)) drop-shadow(0 0 28px rgba(220,38,38,.75)); }
          100% { filter: drop-shadow(0 20px 35px rgba(0,0,0,.7)) drop-shadow(0 0 10px rgba(220,38,38,.25)); }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes floatGallery {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @media (max-width: 900px) {
          .hide-on-mobile {
            display: none;
          }
        }
      `}
    </style>
  );
}

const fadeBase = {
  display: "inline-block",
  opacity: 1,
};

const styles = {
  page: {
    background: "#000",
    color: "#fff",
    fontFamily: "Arial, sans-serif",
    minHeight: "100vh",
  },

  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "15px 30px",
    background: "#050505",
    borderBottom: "1px solid #991b1b",
    position: "sticky",
    top: 0,
    zIndex: 10,
    gap: 18,
    flexWrap: "wrap",
  },

  logo: {
    height: 75,
    display: "block",
  },

  logoHomeButton: {
    background: "transparent",
    border: "none",
    padding: 0,
    margin: 0,
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
  },

  nav: {
    display: "flex",
    gap: 14,
    alignItems: "center",
    flexWrap: "wrap",
  },

  langBtn: {
    background: "#111",
    color: "#fff",
    border: "1px solid #dc2626",
    padding: "8px 14px",
    borderRadius: 10,
    cursor: "pointer",
    fontWeight: 700,
  },

  navBtn: {
    background: "#111",
    color: "#fff",
    padding: "10px 18px",
    borderRadius: 12,
    textDecoration: "none",
    fontWeight: 800,
    border: "1px solid #333",
  },

  hero: {
    position: "relative",
    minHeight: 600,
    overflow: "hidden",
    display: "grid",
    gridTemplateColumns: "1.2fr .8fr",
    gap: 30,
    alignItems: "center",
    padding: "70px 50px",
  },

  heroBg: {
    position: "absolute",
    inset: 0,
    backgroundImage: `url(${shopFront})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    animation: "heroZoom 22s ease-in-out infinite alternate",
    zIndex: 0,
  },

  heroOverlay: {
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(circle at center, rgba(0,0,0,0) 40%, rgba(0,0,0,0.65) 100%), linear-gradient(90deg, rgba(0,0,0,.7) 25%, rgba(0,0,0,.35))",
    zIndex: 1,
  },

  lightSweep: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    width: "35%",
    background: "linear-gradient(90deg, transparent, rgba(255,255,255,.18), transparent)",
    animation: "lightSweep 7s ease-in-out infinite",
    zIndex: 2,
    pointerEvents: "none",
  },

  heroContent: {
    position: "relative",
    zIndex: 3,
  },

  badge: {
    display: "inline-block",
    border: "1px solid #dc2626",
    padding: "10px 18px",
    borderRadius: 999,
    color: "#fecaca",
  },

  title: {
    fontSize: 64,
    lineHeight: 1.05,
    fontWeight: 900,
    letterSpacing: "-1px",
  },

  glowRed: {
    ...fadeBase,
    color: "#ef4444",
    textShadow:
      "0 0 8px rgba(239, 68, 68, 0.8), 0 0 18px rgba(239, 68, 68, 0.55), 0 0 30px rgba(239, 68, 68, 0.35)",
  },

  mission: {
    fontSize: 19,
    color: "#e5e7eb",
    marginTop: 18,
    maxWidth: 720,
    lineHeight: 1.5,
    opacity: 0,
    animation: "fadeInUp 0.8s ease forwards",
    animationDelay: "0.45s",
  },

  trustBadges: {
    display: "flex",
    flexWrap: "wrap",
    gap: 12,
    marginTop: 18,
  },

  trustBadge: {
    background: "rgba(255,255,255,.06)",
    color: "#fff",
    border: "1px solid rgba(220,38,38,.55)",
    borderRadius: 999,
    padding: "10px 14px",
    fontWeight: 800,
    boxShadow: "0 0 18px rgba(220,38,38,.18)",
    textDecoration: "none",
    display: "inline-block",
  },

  oil: {
    border: "1px solid #dc2626",
    padding: 18,
    borderRadius: 18,
    maxWidth: 600,
  },

  desc: {
    fontSize: 20,
    maxWidth: 650,
    lineHeight: 1.5,
  },

  heroLogo: {
    position: "absolute",
    right: "6%",
    top: "90px",
    maxWidth: 420,
    width: "100%",
    zIndex: 4,
    animation: "floatLogo 4s ease-in-out infinite, logoPulse 3.5s ease-in-out infinite",
  },

  servicePageHero: {
    position: "relative",
    minHeight: 360,
    overflow: "hidden",
    backgroundImage: `url(${shopFront})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    padding: "70px 50px",
  },

  servicePageOverlay: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(90deg, rgba(0,0,0,.85), rgba(0,0,0,.45))",
  },

  servicePageContent: {
    position: "relative",
    zIndex: 2,
    maxWidth: 800,
  },

  redBtn: {
    display: "inline-block",
    background: "#dc2626",
    color: "#fff",
    padding: "14px 22px",
    borderRadius: 14,
    textDecoration: "none",
    fontWeight: 900,
    margin: 5,
    border: "none",
    cursor: "pointer",
  },

  darkBtn: {
    display: "inline-block",
    background: "#111",
    color: "#fff",
    padding: "14px 22px",
    borderRadius: 14,
    textDecoration: "none",
    fontWeight: 900,
    margin: 5,
    border: "1px solid #555",
    cursor: "pointer",
  },

  whiteBtn: {
    display: "inline-block",
    background: "#fff",
    color: "#000",
    padding: "14px 22px",
    borderRadius: 14,
    textDecoration: "none",
    fontWeight: 900,
    margin: 5,
  },

  section: {
    padding: "70px 50px",
    maxWidth: 1200,
    margin: "0 auto",
  },

  sectionNote: {
    color: "#d1d5db",
    fontSize: 18,
    lineHeight: 1.5,
    maxWidth: 850,
  },

  cards: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: 18,
  },

  card: {
    minHeight: 240,
    border: "1px solid rgba(220,38,38,.55)",
    borderRadius: 22,
    overflow: "hidden",
    position: "relative",
    display: "flex",
    alignItems: "flex-end",
    padding: 0,
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
    boxShadow: "0 0 25px rgba(220,38,38,.20)",
  },

  cardBlurLayer: {
    position: "absolute",
    inset: 0,
    backdropFilter: "blur(1.8px)",
    background: "linear-gradient(180deg, rgba(0,0,0,.05), rgba(0,0,0,.55))",
    transition: "opacity 0.35s ease",
    zIndex: 1,
  },

  serviceTitle: {
    width: "100%",
    margin: 0,
    padding: "14px 12px",
    fontSize: 16,
    fontWeight: 900,
    textAlign: "center",
    background: "rgba(0,0,0,.78)",
    borderTop: "1px solid rgba(220,38,38,.65)",
    borderBottomLeftRadius: 22,
    borderBottomRightRadius: 22,
    textShadow: "0 2px 10px rgba(0,0,0,.9)",
    position: "relative",
    zIndex: 2,
    transition: "opacity 0.35s ease, transform 0.35s ease",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },

  promoGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: 24,
    marginTop: 25,
  },

  promoCard: {
    position: "relative",
    display: "block",
    borderRadius: 24,
    overflow: "hidden",
    border: "1px solid rgba(220,38,38,.65)",
    boxShadow: "0 0 30px rgba(220,38,38,.28)",
    textDecoration: "none",
    color: "#fff",
    background: "#050505",
  },

  promoImg: {
    width: "100%",
    height: 520,
    objectFit: "cover",
    display: "block",
  },

  promoOverlay: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    padding: 22,
    background: "linear-gradient(180deg, rgba(0,0,0,0), rgba(0,0,0,.92))",
  },

  promoTitle: {
    margin: "0 0 8px",
    fontSize: 26,
    fontWeight: 900,
  },

  promoText: {
    margin: 0,
    color: "#e5e7eb",
    fontWeight: 700,
  },

  priceGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: 18,
    marginTop: 25,
  },

  priceBox: {
    background: "#09090b",
    border: "1px solid rgba(220,38,38,.55)",
    borderRadius: 24,
    padding: 24,
    boxShadow: "0 0 25px rgba(220,38,38,.18)",
  },

  price: {
    fontSize: 34,
    fontWeight: 900,
    color: "#ef4444",
    margin: "8px 0 14px",
  },

  serviceList: {
    color: "#e5e7eb",
    lineHeight: 1.8,
    paddingLeft: 20,
  },

  serviceForm: {
    background: "#09090b",
    border: "1px solid rgba(220,38,38,.55)",
    borderRadius: 24,
    padding: 25,
    marginTop: 28,
    boxShadow: "0 0 25px rgba(220,38,38,.18)",
  },

  formNote: {
    color: "#d1d5db",
    marginBottom: 18,
  },

  specNotice: {
    background: "rgba(220,38,38,.08)",
    border: "1px solid rgba(220,38,38,.45)",
    borderRadius: 16,
    padding: "14px 16px",
    marginBottom: 18,
  },

  specNoticeTitle: {
    margin: "0 0 6px",
    color: "#fecaca",
    fontWeight: 900,
  },

  specNoticeText: {
    margin: 0,
    color: "#e5e7eb",
    lineHeight: 1.45,
  },

  formGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: 12,
  },

  input: {
    background: "#000",
    color: "#fff",
    border: "1px solid #333",
    borderRadius: 12,
    padding: "13px 14px",
    fontSize: 15,
  },

  textarea: {
    width: "100%",
    minHeight: 100,
    marginTop: 12,
    background: "#000",
    color: "#fff",
    border: "1px solid #333",
    borderRadius: 12,
    padding: 14,
    fontSize: 15,
    resize: "vertical",
    boxSizing: "border-box",
  },

  banner: {
    background: "#dc2626",
    padding: 15,
    borderRadius: 999,
    textAlign: "center",
    fontWeight: 900,
    marginBottom: 25,
  },

  financeGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: 25,
  },

  financeBox: {
    background: "#050505",
    border: "1px solid #dc2626",
    borderRadius: 25,
    padding: 25,
    textAlign: "center",
  },

  financeImg: {
    maxHeight: 250,
    maxWidth: "100%",
    objectFit: "contain",
    borderRadius: 15,
  },

  qr: {
    width: 220,
    height: 220,
    objectFit: "contain",
    background: "#fff",
    padding: 10,
    borderRadius: 18,
  },

  floatingGallery: {
    width: "100%",
    overflow: "hidden",
    padding: "20px 0",
  },

  floatingTrack: {
    display: "flex",
    gap: 20,
    width: "max-content",
    animation: "floatGallery 22s linear infinite",
  },

  floatingCardButton: {
    flex: "0 0 auto",
    width: 320,
    height: 220,
    borderRadius: 22,
    overflow: "hidden",
    border: "1px solid #dc2626",
    boxShadow: "0 0 25px rgba(220,38,38,.25)",
    display: "block",
    background: "transparent",
    padding: 0,
    cursor: "pointer",
  },

  floatingImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },

  reviewGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: 20,
    marginTop: 25,
  },

  reviewCard: {
    background: "#09090b",
    border: "1px solid rgba(220,38,38,.45)",
    borderRadius: 22,
    padding: 25,
    boxShadow: "0 0 25px rgba(220,38,38,.18)",
  },

  stars: {
    color: "#facc15",
    fontSize: 22,
    marginBottom: 10,
  },

  contact: {
    background: "#b91c1c",
    padding: 50,
    textAlign: "center",
  },

  contactLink: {
    color: "#fff",
    textDecoration: "underline",
    fontWeight: 900,
  },

  popupBg: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,.85)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 99,
    padding: 20,
  },

  popup: {
    background: "#09090b",
    border: "2px solid #dc2626",
    borderRadius: 25,
    padding: 30,
    maxWidth: 500,
    textAlign: "center",
    position: "relative",
  },

  close: {
    position: "absolute",
    right: 15,
    top: 10,
    fontSize: 28,
    background: "transparent",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },

  redSmall: {
    color: "#f87171",
    fontWeight: 900,
  },

  galleryPopupBg: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,.92)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 120,
    padding: 20,
    cursor: "pointer",
  },

  galleryPopup: {
    position: "relative",
    maxWidth: "950px",
    width: "100%",
    background: "#050505",
    border: "1px solid #dc2626",
    borderRadius: 24,
    padding: 12,
    boxShadow: "0 0 40px rgba(220,38,38,.35)",
    cursor: "default",
  },

  galleryPopupImg: {
    width: "100%",
    maxHeight: "82vh",
    objectFit: "contain",
    borderRadius: 18,
    display: "block",
  },
};