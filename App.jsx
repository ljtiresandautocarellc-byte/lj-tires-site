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
const mapsLink = "https://maps.app.goo.gl/u41U78RN3dC2opZo8";
const snapLink = "https://snapf.in/PZyHODR";
const instagramPromo = "https://www.instagram.com/p/DW4Dvp_Ebwa/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==";

const vehicleModels = {
  Toyota: ["Camry", "Corolla", "RAV4", "Highlander", "Tacoma", "Tundra", "4Runner", "Sienna", "Prius", "Other"],
  Honda: ["Accord", "Civic", "CR-V", "HR-V", "Pilot", "Odyssey", "Ridgeline", "Passport", "Other"],
  Nissan: ["Altima", "Sentra", "Maxima", "Rogue", "Murano", "Pathfinder", "Armada", "Frontier", "Versa", "Other"],
  Hyundai: ["Elantra", "Sonata", "Tucson", "Santa Fe", "Palisade", "Kona", "Venue", "Other"],
  Kia: ["Forte", "K5", "Soul", "Sportage", "Sorento", "Telluride", "Rio", "Carnival", "Other"],
  Ford: ["F-150", "F-250", "F-350", "Escape", "Explorer", "Edge", "Expedition", "Mustang", "Ranger", "Other"],
  Chevrolet: ["Silverado", "Malibu", "Equinox", "Traverse", "Tahoe", "Suburban", "Camaro", "Colorado", "Trax", "Other"],
  Dodge: ["Charger", "Challenger", "Durango", "Journey", "Ram 1500", "Ram 2500", "Other"],
  Jeep: ["Wrangler", "Grand Cherokee", "Cherokee", "Compass", "Renegade", "Gladiator", "Other"],
  "Mercedes-Benz": ["C-Class", "E-Class", "S-Class", "CLA", "GLA", "GLC", "GLE", "GLS", "Sprinter", "Other"],
  BMW: ["3 Series", "5 Series", "7 Series", "X1", "X3", "X5", "X6", "X7", "Other"],
  Audi: ["A3", "A4", "A5", "A6", "Q3", "Q5", "Q7", "Q8", "Other"],
  Lexus: ["IS", "ES", "LS", "NX", "RX", "GX", "LX", "UX", "Other"],
  Acura: ["ILX", "TLX", "MDX", "RDX", "Integra", "Other"],
  Volkswagen: ["Jetta", "Passat", "Golf", "GTI", "Tiguan", "Atlas", "Taos", "Other"],
  Mazda: ["Mazda3", "Mazda6", "CX-5", "CX-9", "CX-30", "Other"],
  Subaru: ["Impreza", "Legacy", "Outback", "Forester", "Crosstrek", "Ascent", "WRX", "Other"],
  Other: ["Other"],
  Otro: ["Otro"],
  Lòt: ["Lòt"],
};

const serviceData = {
  tires: {
    icon: "🛞",
    img: "/tires.png",
    menuTitle: { en: "Tires", es: "Gomas", ht: "Kawotchou" },
    title: { en: "Tire Service", es: "Servicio De Gomas", ht: "Sèvis Kawotchou" },
    note: {
      en: "Need new tires, used tires, mounting, balancing, or tire financing? Send us your vehicle info.",
      es: "¿Necesita gomas nuevas, usadas, montaje, balanceo o financiamiento? Envíenos la información de su vehículo.",
      ht: "Ou bezwen kawotchou nouvo, kawotchou itilize, monte, balans, oswa finansman? Voye enfòmasyon machin ou.",
    },
    boxes: [
      ["NEW / USED", "Tire Options", "Quote Required", ["New and used tires", "Mounting available", "Financing available"]],
      ["INSTALL", "Mount + Balance", "Starting at $25.99 + Tax", ["Mounting", "Balancing", "Valve stem check"]],
      ["CHECK", "Tire Inspection", "Starting at $9.99 + Tax Per Tire", ["Tread check", "Pressure check", "Uneven wear check"]],
    ],
    issues: ["Need tires", "Flat tire", "Tire pressure light", "Mount and balance", "Used tires", "New tires", "Not sure"],
  },
  oil: {
    icon: "🛢️",
    img: "/oil-change.png",
    menuTitle: { en: "Oil Changes", es: "Aceite", ht: "Lwil" },
    title: { en: "Oil Change Service", es: "Servicio De Cambio De Aceite", ht: "Sèvis Chanjman Lwil" },
    note: {
      en: "Select the oil change option that fits your vehicle. Final price may depend on vehicle type, oil capacity, and filter.",
      es: "Seleccione el cambio de aceite que se ajuste a su vehículo. El precio final puede depender del vehículo, aceite y filtro.",
      ht: "Chwazi opsyon chanjman lwil ki mache ak machin ou. Pri final la ka depann de machin, lwil ak filtè.",
    },
    boxes: [
      ["GOOD", "Standard Oil Change", "Starting at $65.99 + Tax", ["Oil and filter replacement", "Fluid level check", "Tire pressure check"]],
      ["BETTER", "Full Synthetic Oil Change", "Starting at $85.99 + Tax", ["Full synthetic oil", "Oil filter replacement", "Fluid and tire pressure check"]],
      ["BEST", "Mobil 1 Full Synthetic Oil Change", "Starting at $119.99 + Tax", ["Premium full synthetic oil", "Oil filter replacement", "Basic inspection"]],
    ],
    issues: ["Oil change", "Full synthetic", "High mileage oil", "Oil leak", "Maintenance light", "Not sure"],
  },
  brakes: {
    icon: "🛑",
    img: "/brakes.png",
    menuTitle: { en: "Brakes", es: "Frenos", ht: "Fren" },
    title: { en: "Brake Service", es: "Servicio De Frenos", ht: "Sèvis Fren" },
    note: {
      en: "Brake noise, grinding, shaking, or longer stopping distance? Send us your vehicle information.",
      es: "¿Ruido al frenar, rechinido, vibración o distancia de frenado más larga? Envíenos su información.",
      ht: "Fren ap fè bri, ap grate, machin nan ap tranble oswa pran plis tan pou kanpe? Voye enfòmasyon ou.",
    },
    boxes: [
      ["INSPECTION", "Brake Check", "Priced In Store", ["Brake pad inspection", "Rotor check", "Brake fluid check"]],
      ["SERVICE", "Brake Pads", "Quote Required", ["Front or rear brake pads", "Hardware check", "Road safety inspection"]],
      ["FULL JOB", "Pads + Rotors", "Quote Required", ["Brake pads and rotors", "Noise/vibration diagnosis", "Recommended for worn rotors"]],
    ],
    issues: ["Squeaking noise", "Grinding noise", "Shaking when braking", "Brake light on", "Soft brake pedal", "Need brake pads", "Not sure"],
  },
  alignment: {
    icon: "⚙️",
    img: "/alignment.png",
    menuTitle: { en: "Alignments", es: "Alineación", ht: "Aliyman" },
    title: { en: "Alignment Service", es: "Servicio De Alineación", ht: "Sèvis Aliyman" },
    note: {
      en: "Vehicle pulling, uneven tire wear, or steering wheel off-center? Send us your vehicle info.",
      es: "¿El vehículo se va hacia un lado, desgaste irregular o volante fuera de centro? Envíenos la información.",
      ht: "Machin nan ap rale sou kote, kawotchou ap manje mal, oswa volan pa dwat? Voye enfòmasyon an.",
    },
    boxes: [
      ["CHECK", "Alignment Check", "Starting at $45.99 + Tax", ["Steering check", "Tire wear check", "Suspension look-over"]],
      ["SERVICE", "Wheel Alignment", "Quote Required", ["Alignment service", "Steering correction", "Tire wear prevention"]],
      ["PROTECT", "Tire Wear Help", "Priced In Store", ["Uneven wear diagnosis", "Suspension check", "Road feel review"]],
    ],
    issues: ["Car pulls left/right", "Steering wheel crooked", "Uneven tire wear", "After new tires", "Suspension concern", "Not sure"],
  },
  diagnostics: {
    icon: "🔧",
    img: "/diagnostics.png",
    menuTitle: { en: "Diagnostics", es: "Diagnóstico", ht: "Dyagnostik" },
    title: { en: "Diagnostic Service", es: "Servicio De Diagnóstico", ht: "Sèvis Dyagnostik" },
    note: {
      en: "Diagnostic fee is $49.99 + Tax. If you approve the repair with us, this fee is applied to your final bill.",
      es: "El diagnóstico cuesta $49.99 + impuesto. Si aprueba la reparación con nosotros, se aplica a la factura final.",
      ht: "Frè dyagnostik la se $49.99 + taks. Si ou apwouve reparasyon an avèk nou, li aplike sou fakti final la.",
    },
    boxes: [
      ["CHECK", "Check Engine Light", "$49.99 + Tax", ["Code scan", "System check", "Applied to repair bill"]],
      ["ELECTRICAL", "Battery / Electrical", "Quote Required", ["Battery test", "Charging system check", "Electrical review"]],
      ["ENGINE", "Performance Issue", "Quote Required", ["Rough idle", "No start", "Warning lights"]],
    ],
    issues: ["Check engine light", "Battery light", "Car won’t start", "Rough idle", "Overheating", "Electrical issue", "Not sure"],
  },
  repair: {
    icon: "🚗",
    img: "/repair.png",
    menuTitle: { en: "General Repair", es: "Reparación", ht: "Reparasyon" },
    title: { en: "General Repair", es: "Reparación General", ht: "Reparasyon Jeneral" },
    note: {
      en: "For leaks, suspension, belts, hoses, cooling issues, and general repair needs, send us your vehicle info.",
      es: "Para fugas, suspensión, correas, mangueras, enfriamiento y reparaciones generales, envíenos su información.",
      ht: "Pou flit, sispansyon, senti, kawotchou dlo, refwadisman ak reparasyon, voye enfòmasyon machin ou.",
    },
    boxes: [
      ["INSPECTION", "General Check", "Starting at $119.99 + Tax", ["Visual inspection", "Concern verification", "Repair recommendation"]],
      ["REPAIR", "Mechanical Repair", "Quote Required", ["Suspension", "Cooling system", "Belts and hoses"]],
      ["SERVICE", "Maintenance Help", "Quote Required", ["Fluid checks", "Noise concerns", "Basic repairs"]],
    ],
    issues: ["Noise concern", "Leak", "Overheating", "Suspension issue", "Maintenance", "General repair", "Not sure"],
  },
};

const translations = {
  en: {
    nav: { services: "Services", promotions: "Promotions", financing: "Financing", contact: "Contact" },
    buttons: { call: "Call Now", backHome: "← Back Home", viewPromotions: "🔥 View May Promotions", getDirections: "📍 Get Directions", openMaps: "Open Google Maps", sendText: "Send Request", sendEmail: "Send by Email", readReviews: "⭐ Read More Google Reviews" },
    hero: { badge: "Tires • Auto Repair • Financing Available", one: "Engine Light?", two: "Don’t Delay —", three: "L&J Gets You On Your Way.", mission: "Honest service, quality work, and every customer driving away confident.", oil: "Oil changes starting at $79.99 for select vehicles. Come in for tire financing.", lang: "Se habla español • Nou pale kreyòl", desc: "L&J Tires & Autocare helps North Miami drivers with tires, oil changes, brakes, alignments, diagnostics, and repair work done right." },
    sections: { services: "Our Services", promotions: "May Promotions", promoNote: "Click below to view our current May specials. Offers are limited and may vary by vehicle.", financing: "Financing Available", shop: "Visit The Shop", reviews: "Customer Reviews", contact: "Ready to Schedule?" },
    popup: { small: "MAY SPECIAL", title: "Oil Changes Starting At $79.99 + Tire Financing", text: "Valid for select vehicles. Ask about financing today." },
    form: { request: "Request", note: "Enter your contact and vehicle information. We’ll contact you shortly.", name: "Your Name", phone: "Phone Number", email: "Email Address", year: "Year", make: "Make", model: "Model", selectMakeFirst: "Select Make First", trim: "Trim (Optional)", engine: "Engine Size (Optional)", vin: "VIN (Optional)", mileage: "Mileage", issue: "Service Issue", message: "Anything else we should know?", mitchellTitle: "Specs Confirmed With Mitchell", mitchellText: "Not sure what oil, tire size, or fluid your vehicle needs? Send us your year, make, model, trim, engine size, or VIN. L&J will verify the correct specs using Mitchell before service." },
    makes: ["Toyota", "Honda", "Nissan", "Hyundai", "Kia", "Ford", "Chevrolet", "Dodge", "Jeep", "Mercedes-Benz", "BMW", "Audi", "Lexus", "Acura", "Volkswagen", "Mazda", "Subaru", "Other"],
  },
  es: {
    nav: { services: "Servicios", promotions: "Promociones", financing: "Financiamiento", contact: "Contacto" },
    buttons: { call: "Llamar Ahora", backHome: "← Volver Al Inicio", viewPromotions: "🔥 Ver Promociones De Mayo", getDirections: "📍 Cómo Llegar", openMaps: "Abrir Google Maps", sendText: "Enviar Solicitud", sendEmail: "Enviar Por Email", readReviews: "⭐ Ver Más Reseñas En Google" },
    hero: { badge: "Gomas • Reparación De Autos • Financiamiento Disponible", one: "¿Luz del motor?", two: "No esperes —", three: "L&J te pone en camino.", mission: "Servicio honesto, trabajo de calidad y clientes manejando con confianza.", oil: "Cambios de aceite desde $79.99 para vehículos seleccionados. Ven para financiamiento de gomas.", lang: "Se habla español • Nou pale kreyòl", desc: "L&J Tires & Autocare ayuda a conductores de North Miami con gomas, aceite, frenos, alineación, diagnóstico y reparación." },
    sections: { services: "Nuestros Servicios", promotions: "Promociones De Mayo", promoNote: "Haz clic abajo para ver nuestras promociones actuales de Mayo.", financing: "Financiamiento Disponible", shop: "Visita El Taller", reviews: "Reseñas De Clientes", contact: "¿Listo Para Hacer Una Cita?" },
    popup: { small: "ESPECIAL DE MAYO", title: "Cambio De Aceite Desde $79.99 + Financiamiento", text: "Válido para vehículos seleccionados. Pregunta por financiamiento hoy." },
    form: { request: "Solicitar", note: "Ingrese su información y le contactaremos pronto.", name: "Su Nombre", phone: "Número De Teléfono", email: "Correo Electrónico", year: "Año", make: "Marca", model: "Modelo", selectMakeFirst: "Seleccione Marca Primero", trim: "Trim (Opcional)", engine: "Motor (Opcional)", vin: "VIN (Opcional)", mileage: "Millaje", issue: "Servicio", message: "¿Algo más que debamos saber?", mitchellTitle: "Especificaciones Confirmadas Con Mitchell", mitchellText: "Envíenos año, marca, modelo, trim, motor o VIN. L&J verificará las especificaciones correctas usando Mitchell antes del servicio." },
    makes: ["Toyota", "Honda", "Nissan", "Hyundai", "Kia", "Ford", "Chevrolet", "Dodge", "Jeep", "Mercedes-Benz", "BMW", "Audi", "Lexus", "Acura", "Volkswagen", "Mazda", "Subaru", "Otro"],
  },
  ht: {
    nav: { services: "Sèvis", promotions: "Pwomosyon", financing: "Finansman", contact: "Kontak" },
    buttons: { call: "Rele Kounye a", backHome: "← Tounen Lakay", viewPromotions: "🔥 Gade Pwomosyon Me Yo", getDirections: "📍 Jwenn Direksyon", openMaps: "Louvri Google Maps", sendText: "Voye Demann", sendEmail: "Voye Pa Imèl", readReviews: "⭐ Gade Plis Revizyon Google" },
    hero: { badge: "Kawotchou • Reparasyon Machin • Finansman Disponib", one: "Limyè motè limen?", two: "Pa tann —", three: "L&J ap mete w sou wout la.", mission: "Sèvis onèt, bon kalite travay, epi kliyan ale ak konfyans.", oil: "Chanjman lwil kòmanse a $79.99 pou kèk machin. Pase pou finansman kawotchou.", lang: "Se habla español • Nou pale kreyòl", desc: "L&J Tires & Autocare ede chofè North Miami ak kawotchou, lwil, fren, aliyman, dyagnostik ak reparasyon." },
    sections: { services: "Sèvis Nou Yo", promotions: "Pwomosyon Me Yo", promoNote: "Klike anba a pou wè espesyal nou yo pou mwa Me.", financing: "Finansman Disponib", shop: "Vizite Atelye A", reviews: "Revizyon Kliyan Yo", contact: "Ou Pare Pou Pran Randevou?" },
    popup: { small: "ESPESYAL ME", title: "Chanjman Lwil Kòmanse A $79.99 + Finansman", text: "Valab pou kèk machin. Mande enfòmasyon sou finansman jodi a." },
    form: { request: "Mande", note: "Antre enfòmasyon ou epi n ap kontakte w byen vit.", name: "Non Ou", phone: "Nimewo Telefòn", email: "Adrès Imèl", year: "Ane", make: "Mak", model: "Modèl", selectMakeFirst: "Chwazi Mak La Avan", trim: "Trim (Opsyonèl)", engine: "Motè (Opsyonèl)", vin: "VIN (Opsyonèl)", mileage: "Kilometraj", issue: "Sèvis", message: "Gen lòt bagay nou dwe konnen?", mitchellTitle: "N ap Konfime Ak Mitchell", mitchellText: "Voye ane, mak, modèl, trim, motè oswa VIN. L&J ap verifye bon espesifikasyon yo ak Mitchell anvan sèvis la." },
    makes: ["Toyota", "Honda", "Nissan", "Hyundai", "Kia", "Ford", "Chevrolet", "Dodge", "Jeep", "Mercedes-Benz", "BMW", "Audi", "Lexus", "Acura", "Volkswagen", "Mazda", "Subaru", "Lòt"],
  },
};

const serviceKeys = Object.keys(serviceData);
const galleryImages = [lobby, shopFront, counter, bay, lobby, shopFront, counter, bay];

export default function App() {
  const [lang, setLang] = useState("en");
  const [showPopup, setShowPopup] = useState(new Date().getMonth() === 4);
  const [selectedPage, setSelectedPage] = useState("home");
  const [hoveredService, setHoveredService] = useState(null);
  const [pauseGallery, setPauseGallery] = useState(false);
  const [openGalleryImage, setOpenGalleryImage] = useState(null);
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);
  const [serviceForm, setServiceForm] = useState({ name: "", phone: "", email: "", year: "", make: "", model: "", trim: "", engine: "", vin: "", mileage: "", issue: "", message: "" });

  const t = translations[lang];
  const page = selectedPage !== "home" ? serviceData[selectedPage] : null;

  const updateServiceForm = (e) => {
    const { name, value } = e.target;
    setServiceForm((prev) => ({ ...prev, [name]: value, model: name === "make" ? "" : prev.model }));
  };

  const resetForm = () => setServiceForm({ name: "", phone: "", email: "", year: "", make: "", model: "", trim: "", engine: "", vin: "", mileage: "", issue: "", message: "" });

  const buildServiceMessage = () => `
${page?.title?.[lang] || "Service"} Request

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

  const sendServiceText = async () => {
    setStatus("");
    if (!serviceForm.name || !serviceForm.phone) {
      setStatus("Please enter name and phone number first.");
      return;
    }
    setSending(true);
    try {
      const response = await fetch("/api/send-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: buildServiceMessage() }),
      });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error("failed");
      setStatus("Message Sent. L&J Tires received your request.");
      resetForm();
    } catch (error) {
      setStatus("Message failed. Please call the shop or send request by email.");
    } finally {
      setSending(false);
    }
  };

  const sendServiceEmail = () => {
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(`${page?.title?.[lang] || "Service"} Request`)}&body=${encodeURIComponent(buildServiceMessage())}`;
  };

  const goHome = () => {
    setSelectedPage("home");
    setOpenGalleryImage(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openServicePage = (serviceKey) => {
    setSelectedPage(serviceKey);
    setStatus("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (selectedPage !== "home") {
    return (
      <>
        <GlobalStyles />
        <div style={styles.page}>
          <Header t={t} lang={lang} setLang={setLang} goHome={goHome} simple />
          <section style={styles.servicePageHero}>
            <div style={styles.servicePageOverlay} />
            <div style={styles.servicePageContent}>
              <p style={styles.badge}>L&J Tires & Autocare</p>
              <h1 style={styles.title}>{page.title[lang]}</h1>
              <p style={styles.desc}>{page.note[lang]}</p>
            </div>
          </section>
          <section style={styles.section}>
            <div style={styles.priceGrid}>
              {page.boxes.map((box) => (
                <div style={styles.priceBox} key={box[1]}>
                  <p style={styles.redSmall}>{box[0]}</p>
                  <h3>{box[1]}</h3>
                  <p style={styles.price}>{box[2]}</p>
                  <ul style={styles.serviceList}>{box[3].map((item) => <li key={item}>{item}</li>)}</ul>
                </div>
              ))}
            </div>
            <div style={styles.serviceForm}>
              <h3>{t.form.request} {page.title[lang]}</h3>
              <p style={styles.formNote}>{t.form.note}</p>
              <div style={styles.specNotice}>
                <h4 style={styles.specNoticeTitle}>🔎 {t.form.mitchellTitle}</h4>
                <p style={styles.specNoticeText}>{t.form.mitchellText}</p>
              </div>
              <div style={styles.formGrid}>
                <input name="name" placeholder={t.form.name} value={serviceForm.name} onChange={updateServiceForm} style={styles.input} />
                <input name="phone" placeholder={t.form.phone} value={serviceForm.phone} onChange={updateServiceForm} style={styles.input} />
                <input name="email" placeholder={t.form.email} value={serviceForm.email} onChange={updateServiceForm} style={styles.input} />
                <select name="year" value={serviceForm.year} onChange={updateServiceForm} style={styles.input}><option value="">{t.form.year}</option>{Array.from({ length: 31 }, (_, i) => 2026 - i).map((year) => <option key={year} value={year}>{year}</option>)}</select>
                <select name="make" value={serviceForm.make} onChange={updateServiceForm} style={styles.input}><option value="">{t.form.make}</option>{t.makes.map((make) => <option key={make} value={make}>{make}</option>)}</select>
                <select name="model" value={serviceForm.model} onChange={updateServiceForm} style={styles.input} disabled={!serviceForm.make}><option value="">{serviceForm.make ? t.form.model : t.form.selectMakeFirst}</option>{(vehicleModels[serviceForm.make] || []).map((model) => <option key={model} value={model}>{model}</option>)}</select>
                <input name="trim" placeholder={t.form.trim} value={serviceForm.trim} onChange={updateServiceForm} style={styles.input} />
                <input name="engine" placeholder={t.form.engine} value={serviceForm.engine} onChange={updateServiceForm} style={styles.input} />
                <input name="vin" placeholder={t.form.vin} value={serviceForm.vin} onChange={updateServiceForm} style={styles.input} />
                <input name="mileage" placeholder={t.form.mileage} value={serviceForm.mileage} onChange={updateServiceForm} style={styles.input} />
                <select name="issue" value={serviceForm.issue} onChange={updateServiceForm} style={styles.input}><option value="">{t.form.issue}</option>{page.issues.map((issue) => <option key={issue} value={issue}>{issue}</option>)}</select>
              </div>
              <textarea name="message" placeholder={t.form.message} value={serviceForm.message} onChange={updateServiceForm} style={styles.textarea} />
              <div style={styles.buttonRow}>
                <button onClick={sendServiceText} style={styles.redBtn} disabled={sending}>{sending ? "Sending..." : t.buttons.sendText}</button>
                <button onClick={sendServiceEmail} style={styles.darkBtn}>{t.buttons.sendEmail}</button>
                <a href={mapsLink} target="_blank" rel="noreferrer" style={styles.whiteBtn}>{t.buttons.getDirections}</a>
              </div>
              {status && <div style={status.includes("Sent") ? styles.statusSuccess : styles.statusError}>{status}</div>}
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
        {openGalleryImage && <div style={styles.galleryPopupBg} onClick={() => setOpenGalleryImage(null)}><div style={styles.galleryPopup} onClick={(e) => e.stopPropagation()}><img src={openGalleryImage} alt="L&J Shop Preview" style={styles.galleryPopupImg} /></div></div>}
        {showPopup && <div style={styles.popupBg}><div style={styles.popup}><button onClick={() => setShowPopup(false)} style={styles.close}>×</button><p style={styles.redSmall}>{t.popup.small}</p><h2>{t.popup.title}</h2><p>{t.popup.text}</p><a href={`tel:${phone}`} style={styles.redBtn}>{t.buttons.call}</a><a href="#promotions" onClick={() => setShowPopup(false)} style={styles.whiteBtn}>{t.buttons.viewPromotions}</a></div></div>}
        <Header t={t} lang={lang} setLang={setLang} goHome={goHome} />
        <section style={styles.hero}>
          <div style={styles.heroBg} /><div style={styles.heroOverlay} /><div style={styles.lightSweep} />
          <div style={styles.heroContent}>
            <p style={styles.badge}>{t.hero.badge}</p>
            <h1 style={styles.title}><span>{t.hero.one}</span><br /><span>{t.hero.two}</span><br /><span style={styles.glowRed}>{t.hero.three}</span></h1>
            <p style={styles.mission}>{t.hero.mission}</p>
            <div style={styles.trustBadges}><a href="#reviews" style={styles.trustBadge}>⭐ 5-Star Service</a><a href="#services" style={styles.trustBadge}>🔧 Honest Repairs</a><a href="#financing" style={styles.trustBadge}>💳 Financing Available</a><a href={mapsLink} target="_blank" rel="noreferrer" style={styles.trustBadge}>📍 North Miami Trusted</a></div>
            <p style={styles.oil}>🔥 {t.hero.oil}</p>
            <p style={styles.desc}><strong>{t.hero.lang}</strong><br />{t.hero.desc}</p>
            <div style={styles.buttonRow}><a href={`tel:${phone}`} style={styles.redBtn}>☎ {displayPhone}</a><a href="#promotions" style={styles.darkBtn}>{t.buttons.viewPromotions}</a><a href={mapsLink} target="_blank" rel="noreferrer" style={styles.darkBtn}>{t.buttons.getDirections}</a></div>
          </div>
          <img src={logo} alt="L&J logo" style={styles.heroLogo} />
        </section>
        <section id="services" style={styles.section}><h2>{t.sections.services}</h2><div style={styles.cards}>{serviceKeys.map((key) => { const s = serviceData[key]; const isHovered = hoveredService === key; return <div key={key} onClick={() => openServicePage(key)} onMouseEnter={() => setHoveredService(key)} onMouseLeave={() => setHoveredService(null)} style={{ ...styles.card, transform: isHovered ? "scale(1.03)" : "scale(1)", backgroundImage: `url(${s.img})` }}><div style={styles.cardBlurLayer} /><h3 style={styles.serviceTitle}><span>{s.icon}</span> {s.menuTitle[lang]}</h3></div>; })}</div></section>
        <section id="promotions" style={styles.section}><h2>{t.sections.promotions}</h2><p style={styles.sectionNote}>{t.sections.promoNote}</p><div style={styles.promoGrid}><PromoCard img={mayPromoImage} title="View May Specials" text="Oil changes, tire deals, and Mother’s Month offers" /><PromoCard img={mayPromoImageTwo} title="Miami’s Best Deals This May" text="Click to view the full promotion" /></div></section>
        <section id="financing" style={styles.section}><h2>{t.sections.financing}</h2><div style={styles.banner}>💳 TWO FINANCING OPTIONS AVAILABLE — APPLY TODAY</div><div style={styles.financeGrid}><div style={styles.financeBoxSnap}><h3>SNAP FINANCING</h3><p>Click below to apply directly with Snap Finance.</p><a href={snapLink} target="_blank" rel="noreferrer"><img src="https://merchant-banners-s3.snapfinance.com/Loans/EN/A160x600.jpeg" alt="Snap Finance" style={styles.financeImg} /></a></div><div style={styles.financeBoxKoalafi}><h3>KOALAFI FINANCING</h3><p>Scan the Koalafi QR code to apply and pay over time.</p><img src={koalafiFlyer} alt="Koalafi QR" style={styles.qr} /><h4>SCAN TO APPLY</h4></div></div></section>
        <section style={styles.section}><h2>{t.sections.shop}</h2><div style={styles.floatingGallery} onMouseEnter={() => setPauseGallery(true)} onMouseLeave={() => setPauseGallery(false)}><div style={{ ...styles.floatingTrack, animationPlayState: pauseGallery ? "paused" : "running" }}>{galleryImages.map((img, index) => <button type="button" onClick={() => setOpenGalleryImage(img)} style={styles.floatingCardButton} key={`${img}-${index}`}><img src={img} alt="L&J shop" style={styles.floatingImg} /></button>)}</div></div></section>
        <section id="reviews" style={styles.section}><h2>{t.sections.reviews}</h2><div style={styles.reviewGrid}>{["Great price and fast service. Amazing place, friendly people and fast turnaround.", "Very honest, friendly, and professional. They made the whole process smooth.", "They helped me get financed and took care of everything without stress."].map((review, index) => <div style={styles.reviewCard} key={index}><p style={styles.stars}>★★★★★</p><p>“{review}”</p><h4>- L&J Customer</h4></div>)}</div><a href="https://www.google.com/search?q=L%26J+Tires+%26+Autocare+North+Miami+reviews" target="_blank" rel="noreferrer" style={styles.redBtn}>{t.buttons.readReviews}</a></section>
        <section id="contact" style={styles.contact}><h2>{t.sections.contact}</h2><p>☎ <a href={`tel:${phone}`} style={styles.contactLink}>{displayPhone}</a></p><p>✉ <a href={`mailto:${email}`} style={styles.contactLink}>{email}</a></p><p>📍 <a href={mapsLink} target="_blank" rel="noreferrer" style={styles.contactLink}>14831 W Dixie Hwy, North Miami, FL 33181</a></p><a href={mapsLink} target="_blank" rel="noreferrer" style={styles.whiteBtn}>{t.buttons.openMaps}</a></section>
        <a href={`tel:${phone}`} style={styles.mobileCall}>☎ Call</a>
      </div>
    </>
  );
}

function Header({ t, lang, setLang, goHome, simple }) {
  return <header style={styles.header}><button type="button" onClick={goHome} style={styles.logoHomeButton}><img src={logo} alt="L&J Tires" style={styles.logo} /></button><nav style={styles.nav}><button style={lang === "en" ? styles.langBtnActive : styles.langBtn} onClick={() => setLang("en")}>EN</button><button style={lang === "es" ? styles.langBtnActive : styles.langBtn} onClick={() => setLang("es")}>ES</button><button style={lang === "ht" ? styles.langBtnActive : styles.langBtn} onClick={() => setLang("ht")}>KREYÒL</button>{!simple && <><a href="#services" style={styles.navBtn}>{t.nav.services}</a><a href="#promotions" style={styles.navBtn}>{t.nav.promotions}</a><a href="#financing" style={styles.navBtn}>{t.nav.financing}</a><a href="#contact" style={styles.navBtn}>{t.nav.contact}</a></>}</nav><a href={`tel:${phone}`} style={styles.redBtn}>{t.buttons.call}</a></header>;
}

function PromoCard({ img, title, text }) {
  return <a href={instagramPromo} target="_blank" rel="noreferrer" style={styles.promoCard}><img src={img} alt={title} style={styles.promoImg} /><div style={styles.promoOverlay}><h3 style={styles.promoTitle}>{title}</h3><p style={styles.promoText}>{text}</p></div></a>;
}

function GlobalStyles() {
  return <style>{`
    *{box-sizing:border-box} html{scroll-behavior:smooth} body{margin:0;overflow-x:hidden;background:#000} button,a{-webkit-tap-highlight-color:transparent}
    @keyframes heroZoom{0%{transform:scale(1)}100%{transform:scale(1.08)}} @keyframes lightSweep{0%{transform:translateX(-120%) skewX(-18deg);opacity:0}20%{opacity:.25}100%{transform:translateX(140%) skewX(-18deg);opacity:0}} @keyframes floatGallery{from{transform:translateX(0)}to{transform:translateX(-50%)}}
    @media(max-width:760px){body{overflow-x:hidden} h2{font-size:28px!important} h3{font-size:20px!important}}
  `}</style>;
}

const styles = {
  page: { background: "#000", color: "#fff", fontFamily: "Arial, sans-serif", minHeight: "100vh", overflowX: "hidden" },
  header: {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "10px 12px",
  background: "#050505",
  borderBottom: "1px solid #991b1b",
  position: "relative",
  zIndex: 10,
  gap: 10,
  flexWrap: "wrap",
},logo: { height: "clamp(52px, 12vw, 75px)", display: "block" },
  logoHomeButton: { background: "transparent", border: "none", padding: 0, margin: 0, cursor: "pointer", display: "inline-flex", alignItems: "center" },
  nav: {
  display: "flex",
  gap: 8,
  alignItems: "center",
  justifyContent: "center",
  flexWrap: "wrap",
  width: "100%",
},
  langBtnActive: { background: "#dc2626", color: "#fff", border: "1px solid #dc2626", padding: "8px 11px", borderRadius: 10, cursor: "pointer", fontWeight: 900, fontSize: 12 },
  navBtn: { background: "#111", color: "#fff", padding: "9px 12px", borderRadius: 12, textDecoration: "none", fontWeight: 800, border: "1px solid #333", fontSize: 13 },
  hero: {
  position: "relative",
  minHeight: "600px",
  overflow: "hidden",
  display: "grid",
  gridTemplateColumns: "1.2fr .8fr",
  gap: 30,
  alignItems: "center",
  padding: "50px 30px",
},
  heroBg: { position: "absolute", inset: 0, backgroundImage: `url(${shopFront})`, backgroundSize: "cover", backgroundPosition: "center", animation: "heroZoom 22s ease-in-out infinite alternate", zIndex: 0 },
  heroOverlay: { position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(0,0,0,.86), rgba(0,0,0,.50)), radial-gradient(circle, rgba(0,0,0,0) 35%, rgba(0,0,0,.75) 100%)", zIndex: 1 },
  lightSweep: { position: "absolute", top: 0, bottom: 0, left: 0, width: "35%", background: "linear-gradient(90deg, transparent, rgba(255,255,255,.14), transparent)", animation: "lightSweep 7s ease-in-out infinite", zIndex: 2, pointerEvents: "none" },
  heroContent: { position: "relative", zIndex: 3, maxWidth: 760 },
  badge: { display: "inline-block", border: "1px solid #dc2626", padding: "10px 16px", borderRadius: 999, color: "#fecaca", background: "rgba(0,0,0,.45)", fontWeight: 800, fontSize: "clamp(12px, 3.5vw, 15px)" },
  title: {
  fontSize: "clamp(38px, 7vw, 64px)",
  lineHeight: 1.02,
  fontWeight: 900,
  letterSpacing: "-1px",
  margin: "22px 0",
},
  glowRed: { color: "#ef4444", textShadow: "0 0 10px rgba(239,68,68,.8), 0 0 24px rgba(239,68,68,.45)" },
  mission: { fontSize: "clamp(16px, 4vw, 20px)", color: "#e5e7eb", marginTop: 18, maxWidth: 720, lineHeight: 1.5 },
  trustBadges: { display: "flex", flexWrap: "wrap", gap: 10, marginTop: 18 },
  trustBadge: { background: "rgba(255,255,255,.08)", color: "#fff", border: "1px solid rgba(220,38,38,.55)", borderRadius: 999, padding: "9px 12px", fontWeight: 800, textDecoration: "none", fontSize: 13 },
  oil: { border: "1px solid #dc2626", padding: 16, borderRadius: 18, maxWidth: 650, lineHeight: 1.45, background: "rgba(0,0,0,.58)" },
  desc: { fontSize: "clamp(16px, 4vw, 20px)", maxWidth: 650, lineHeight: 1.5 },
  heroLogo: {
  position: "relative",
  zIndex: 4,
  maxWidth: 300,
  width: "100%",
  justifySelf: "center",
  filter: "drop-shadow(0 0 24px rgba(220,38,38,.45))",
},
  servicePageHero: { position: "relative", minHeight: 320, overflow: "hidden", backgroundImage: `url(${shopFront})`, backgroundSize: "cover", backgroundPosition: "center", display: "flex", alignItems: "center", padding: "clamp(45px, 9vw, 70px) clamp(16px, 5vw, 50px)" },
  servicePageOverlay: { position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(0,0,0,.88), rgba(0,0,0,.55))" },
  servicePageContent: { position: "relative", zIndex: 2, maxWidth: 850 },
  redBtn: { display: "inline-flex", alignItems: "center", justifyContent: "center", background: "#dc2626", color: "#fff", padding: "13px 20px", borderRadius: 14, textDecoration: "none", fontWeight: 900, margin: 4, border: "none", cursor: "pointer", minHeight: 48 },
  darkBtn: { display: "inline-flex", alignItems: "center", justifyContent: "center", background: "#111", color: "#fff", padding: "13px 20px", borderRadius: 14, textDecoration: "none", fontWeight: 900, margin: 4, border: "1px solid #555", cursor: "pointer", minHeight: 48 },
  whiteBtn: { display: "inline-flex", alignItems: "center", justifyContent: "center", background: "#fff", color: "#000", padding: "13px 20px", borderRadius: 14, textDecoration: "none", fontWeight: 900, margin: 4, minHeight: 48 },
  buttonRow: { display: "flex", flexWrap: "wrap", gap: 8, marginTop: 18 },
  section: { padding: "clamp(46px, 9vw, 72px) clamp(16px, 5vw, 50px)", maxWidth: 1200, margin: "0 auto" },
  sectionNote: { color: "#d1d5db", fontSize: "clamp(16px, 4vw, 18px)", lineHeight: 1.5, maxWidth: 850 },
  cards: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 190px), 1fr))", gap: 16 },
  card: { minHeight: "clamp(180px, 45vw, 240px)", border: "1px solid rgba(220,38,38,.55)", borderRadius: 22, overflow: "hidden", position: "relative", display: "flex", alignItems: "flex-end", padding: 0, transition: "transform .25s ease", cursor: "pointer", boxShadow: "0 0 25px rgba(220,38,38,.20)", backgroundSize: "cover", backgroundPosition: "center" },
  cardBlurLayer: { position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,.05), rgba(0,0,0,.62))", zIndex: 1 },
  serviceTitle: { width: "100%", margin: 0, padding: "14px 12px", fontSize: "clamp(15px, 4vw, 18px)", fontWeight: 900, textAlign: "center", background: "rgba(0,0,0,.82)", position: "relative", zIndex: 2 },
  promoGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 290px), 1fr))", gap: 20, marginTop: 25 },
  promoCard: { position: "relative", display: "block", borderRadius: 24, overflow: "hidden", border: "1px solid rgba(220,38,38,.65)", textDecoration: "none", color: "#fff", background: "#050505" },
  promoImg: { width: "100%", height: "clamp(300px, 70vw, 520px)", objectFit: "cover", display: "block" },
  promoOverlay: { position: "absolute", left: 0, right: 0, bottom: 0, padding: 22, background: "linear-gradient(180deg, rgba(0,0,0,0), rgba(0,0,0,.95))" },
  promoTitle: { margin: "0 0 8px", fontSize: "clamp(22px, 6vw, 30px)", fontWeight: 900 },
  promoText: { margin: 0, color: "#e5e7eb", fontWeight: 700 },
  priceGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 250px), 1fr))", gap: 18, marginTop: 25 },
  priceBox: { background: "#09090b", border: "1px solid rgba(220,38,38,.55)", borderRadius: 24, padding: "clamp(18px, 5vw, 24px)", boxShadow: "0 0 25px rgba(220,38,38,.18)" },
  price: { fontSize: "clamp(26px, 7vw, 34px)", fontWeight: 900, color: "#ef4444", margin: "8px 0 14px" },
  serviceList: { color: "#e5e7eb", lineHeight: 1.8, paddingLeft: 20 },
  serviceForm: { background: "#09090b", border: "1px solid rgba(220,38,38,.55)", borderRadius: 24, padding: "clamp(18px, 5vw, 25px)", marginTop: 28, boxShadow: "0 0 25px rgba(220,38,38,.18)" },
  formNote: { color: "#d1d5db", marginBottom: 18 },
  specNotice: { background: "rgba(220,38,38,.08)", border: "1px solid rgba(220,38,38,.45)", borderRadius: 16, padding: "14px 16px", marginBottom: 18 },
  specNoticeTitle: { margin: "0 0 6px", color: "#fecaca", fontWeight: 900 },
  specNoticeText: { margin: 0, color: "#e5e7eb", lineHeight: 1.45 },
  formGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 180px), 1fr))", gap: 12 },
  input: { width: "100%", background: "#000", color: "#fff", border: "1px solid #333", borderRadius: 12, padding: "13px 14px", fontSize: 15, minHeight: 48 },
  textarea: { width: "100%", minHeight: 120, marginTop: 12, background: "#000", color: "#fff", border: "1px solid #333", borderRadius: 12, padding: 14, fontSize: 15, resize: "vertical" },
  statusSuccess: { marginTop: 16, padding: 14, borderRadius: 14, background: "rgba(22,163,74,.18)", border: "1px solid rgba(22,163,74,.75)", color: "#bbf7d0", fontWeight: 900, textAlign: "center" },
  statusError: { marginTop: 16, padding: 14, borderRadius: 14, background: "rgba(220,38,38,.18)", border: "1px solid rgba(220,38,38,.75)", color: "#fecaca", fontWeight: 900, textAlign: "center" },
  redSmall: { color: "#f87171", fontWeight: 900, letterSpacing: 1 },
  banner: { background: "#dc2626", padding: "14px 18px", borderRadius: 999, textAlign: "center", fontWeight: 900, marginBottom: 25, fontSize: "clamp(15px, 4vw, 20px)" },
  financeGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: 22 },
  financeBoxSnap: { background: "#050505", border: "1px solid #dc2626", borderRadius: 25, padding: "clamp(18px, 5vw, 25px)", textAlign: "center", boxShadow: "0 0 35px rgba(220,38,38,.35)" },
  financeBoxKoalafi: { background: "#067f73", border: "1px solid #0f766e", borderRadius: 25, padding: "clamp(18px, 5vw, 25px)", textAlign: "center" },
  financeImg: { maxHeight: 250, maxWidth: "100%", objectFit: "contain", borderRadius: 15 },
  qr: { width: "min(220px, 75vw)", height: "min(220px, 75vw)", objectFit: "contain", background: "#fff", padding: 10, borderRadius: 18 },
  floatingGallery: { width: "100%", overflow: "hidden", padding: "20px 0" },
  floatingTrack: { display: "flex", gap: 16, width: "max-content", animation: "floatGallery 24s linear infinite" },
  floatingCardButton: { flex: "0 0 auto", width: "min(320px, 78vw)", height: "210px", borderRadius: 22, overflow: "hidden", border: "1px solid #dc2626", display: "block", background: "transparent", padding: 0, cursor: "pointer" },
  floatingImg: { width: "100%", height: "100%", objectFit: "cover", display: "block" },
  galleryPopupBg: { position: "fixed", inset: 0, background: "rgba(0,0,0,.86)", zIndex: 100, display: "flex", alignItems: "center", justifyContent: "center", padding: 14 },
  galleryPopup: { maxWidth: 980, width: "100%", borderRadius: 24, overflow: "hidden", border: "1px solid #dc2626" },
  galleryPopupImg: { width: "100%", maxHeight: "85vh", objectFit: "contain", background: "#000", display: "block" },
  reviewGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))", gap: 18 },
  reviewCard: { background: "#09090b", border: "1px solid #27272a", borderRadius: 22, padding: 24 },
  stars: { color: "#ef4444", letterSpacing: 2 },
  contact: { background: "#b91c1c", padding: "clamp(42px, 9vw, 60px) clamp(16px, 5vw, 50px)", textAlign: "center" },
  contactLink: { color: "#fff", fontWeight: 900 },
  popupBg: { position: "fixed", inset: 0, background: "rgba(0,0,0,.85)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 99, padding: 16 },
  popup: { background: "#09090b", border: "2px solid #dc2626", borderRadius: 25, padding: "clamp(22px, 6vw, 32px)", maxWidth: 520, width: "100%", textAlign: "center", position: "relative" },
  close: { position: "absolute", right: 15, top: 10, fontSize: 28, background: "transparent", color: "#fff", border: "none", cursor: "pointer" },
  mobileCall: { position: "fixed", bottom: 14, right: 14, zIndex: 50, background: "#dc2626", color: "#fff", borderRadius: 999, padding: "14px 18px", textDecoration: "none", fontWeight: 900, boxShadow: "0 0 20px rgba(220,38,38,.55)" },
};
