import React, { useState } from "react";

const logo = "/LJ_Tires_Logo.png";
const shopFront = "/shop-front.jpg";
const lobby = "/lobby.jpeg";
const counter = "/counter.jpeg";
const bay = "/service-bay.jpeg";
const koalafiFlyer = "/koalafi.png";

const phone = "3059745702";
const displayPhone = "305-974-5702";
const mapsLink = "https://maps.app.goo.gl/u41U78RN3dC2opZo8";
const snapLink = "https://snapf.in/PZyHODR";
const instagramPromo =
  "https://www.instagram.com/p/DW4Dvp_Ebwa/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==";

export default function App() {
  const [lang, setLang] = useState("en");
  const [showPopup, setShowPopup] = useState(true);

  const t = {
    en: {
      call: "Call Now",
      hero1: "Engine Light?",
      hero2: "Don’t Delay —",
      hero3: "L&J Gets You On Your Way.",
      oil: "Oil changes start at $79.99 for select vehicles. Come in for tire financing.",
      desc: "L&J Tires & Autocare helps North Miami drivers with tires, oil changes, brakes, alignments, diagnostics, and repair work done right.",
      services: "Our Services",
      financing: "Financing Available",
      shop: "Visit The Shop",
      reviews: "Customer Reviews",
      contact: "Ready to Schedule?",
      promo: "$79.99 Oil Change + Tire Financing",
    },
    es: {
      call: "Llamar Ahora",
      hero1: "¿Luz del motor?",
      hero2: "No esperes —",
      hero3: "L&J te pone en camino.",
      oil: "Cambios de aceite desde $79.99 para vehículos seleccionados. Ven al taller para financiamiento.",
      desc: "L&J Tires & Autocare ayuda a conductores de North Miami con gomas, aceite, frenos, alineación y reparación.",
      services: "Nuestros Servicios",
      financing: "Financiamiento Disponible",
      shop: "Visita El Taller",
      reviews: "Reseñas De Clientes",
      contact: "¿Listo Para Hacer Una Cita?",
      promo: "$79.99 Cambio De Aceite + Financiamiento",
    },
    ht: {
      call: "Rele Kounye a",
      hero1: "Limyè motè limen?",
      hero2: "Pa pran tan —",
      hero3: "L&J ap mete w sou wout la.",
      oil: "Chanjman lwil kòmanse a $79.99 pou kèk machin. Pase pou finansman kawotchou.",
      desc: "L&J Tires & Autocare ede chofè North Miami ak kawotchou, lwil, fren, aliyman ak reparasyon.",
      services: "Sèvis Nou Yo",
      financing: "Finansman Disponib",
      shop: "Vizite Atelye A",
      reviews: "Revizyon Kliyan Yo",
      contact: "Ou Pare Pou Pran Randevou?",
      promo: "$79.99 Chanjman Lwil + Finansman",
    },
  }[lang];

  return (
    <div style={styles.page}>
      {showPopup && (
        <div style={styles.popupBg}>
          <div style={styles.popup}>
            <button onClick={() => setShowPopup(false)} style={styles.close}>
              ×
            </button>
            <p style={styles.redSmall}>MAY SPECIAL</p>
            <h2>{t.promo}</h2>
            <p>Valid for select vehicles. Ask about financing today.</p>
            <a href={`tel:${phone}`} style={styles.redBtn}>
              {t.call}
            </a>
            <a
              href={instagramPromo}
              target="_blank"
              rel="noreferrer"
              style={styles.whiteBtn}
            >
              View Promo
            </a>
          </div>
        </div>
      )}

      <header style={styles.header}>
        <img src={logo} alt="L&J Tires" style={styles.logo} />

        <nav style={styles.nav}>
          <button onClick={() => setLang("en")}>EN</button>
          <button onClick={() => setLang("es")}>ES</button>
          <button onClick={() => setLang("ht")}>KREYÒL</button>
          <a href="#services">Services</a>
          <a href="#financing">Financing</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href={`tel:${phone}`} style={styles.redBtn}>
          {t.call}
        </a>
      </header>

      <section
        style={{
          ...styles.hero,
          backgroundImage: `linear-gradient(90deg, #000 20%, rgba(0,0,0,.7)), url(${shopFront})`,
        }}
      >
        <div>
          <p style={styles.badge}>Tires • Auto Repair • Financing Available</p>

          <h1 style={styles.title}>
            <span style={styles.fade1}>{t.hero1}</span>
            <br />
            <span style={styles.fade2}>{t.hero2}</span>
            <br />
            <span style={styles.glowRed}>{t.hero3}</span>
          </h1>

          <p style={styles.oil}>🔥 {t.oil}</p>

          <p style={styles.desc}>
            Se habla español • Nou pale kreyòl
            <br />
            {t.desc}
          </p>

          <a href={`tel:${phone}`} style={styles.redBtn}>
            ☎ {displayPhone}
          </a>

          <a href={mapsLink} target="_blank" rel="noreferrer" style={styles.darkBtn}>
            📍 Get Directions
          </a>
        </div>

        <img src={logo} alt="L&J logo" style={styles.heroLogo} />
      </section>

      <section id="services" style={styles.section}>
        <h2>{t.services}</h2>

        <div style={styles.cards}>
          {[
            "🛞 Tires",
            "🛢️ Oil Changes",
            "🛑 Brakes",
            "⚙️ Alignments",
            "🔧 Diagnostics",
            "🚗 General Repair",
          ].map((s) => (
            <div style={styles.card} key={s}>
              <h3>{s}</h3>
              <p>Fast, honest service at L&J Tires.</p>
            </div>
          ))}
        </div>
      </section>

      <section id="financing" style={styles.section}>
        <h2>{t.financing}</h2>

        <div style={styles.banner}>
          💳 TWO FINANCING OPTIONS AVAILABLE — APPLY TODAY
        </div>

        <div style={styles.financeGrid}>
          <div style={styles.financeBox}>
            <h3>SNAP FINANCING</h3>
            <p>Click below to apply directly with Snap Finance.</p>

            <a href={snapLink} target="_blank" rel="noreferrer">
              <img
                src="https://merchant-banners-s3.snapfinance.com/Loans/EN/A160x600.jpeg"
                alt="Snap Finance"
                style={styles.financeImg}
              />
            </a>
          </div>

          <div style={{ ...styles.financeBox, background: "#067f73" }}>
            <h3>KOALAFI FINANCING</h3>
            <p>Scan the Koalafi QR code to apply and pay over time.</p>

            <img src={koalafiFlyer} alt="Koalafi QR" style={styles.qr} />

            <h4>SCAN TO APPLY</h4>
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <h2>{t.shop}</h2>

        <div style={styles.gallery}>
          <img src={lobby} alt="Lobby" />
          <img src={bay} alt="Bay" />
          <img src={counter} alt="Counter" />
          <img src={shopFront} alt="Shop front" />
        </div>
      </section>

      <section id="contact" style={styles.contact}>
        <h2>{t.contact}</h2>
        <p>☎ {displayPhone}</p>
        <p>✉ ljtiresandautocarellc@gmail.com</p>
        <p>📍 14831 W Dixie Hwy, North Miami, FL 33181</p>

        <a href={mapsLink} target="_blank" rel="noreferrer" style={styles.whiteBtn}>
          Open Google Maps
        </a>
      </section>
    </div>
  );
}

const fadeBase = {
  display: "inline-block",
  opacity: 0,
  animation: "fadeInUp 0.7s ease forwards",
};

const styles = {
  page: {
    background: "#000",
    color: "#fff",
    fontFamily: "Arial, sans-serif",
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
  },

  logo: {
    height: 75,
  },

  nav: {
    display: "flex",
    gap: 14,
    alignItems: "center",
  },

  hero: {
    minHeight: 600,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "grid",
    gridTemplateColumns: "1.2fr .8fr",
    gap: 30,
    alignItems: "center",
    padding: "70px 50px",
    animation: "bgFade 1.2s ease forwards",
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

  fade1: {
    ...fadeBase,
  },

  fade2: {
    ...fadeBase,
    animationDelay: "0.15s",
  },

  glowRed: {
    ...fadeBase,
    animationDelay: "0.3s",
    color: "#ef4444",
    textShadow:
      "0 0 8px rgba(239, 68, 68, 0.8), 0 0 18px rgba(239, 68, 68, 0.55), 0 0 30px rgba(239, 68, 68, 0.35)",
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
    maxWidth: 430,
    width: "100%",
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

  cards: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: 18,
  },

  card: {
    background: "#09090b",
    border: "1px solid #27272a",
    padding: 25,
    borderRadius: 22,
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

  gallery: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: 16,
  },

  contact: {
    background: "#b91c1c",
    padding: 50,
    textAlign: "center",
  },

  popupBg: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,.85)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 99,
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
  },

  redSmall: {
    color: "#f87171",
    fontWeight: 900,
  },
};
