"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaBrain,
  FaImage,
  FaFilm,
  FaVolumeHigh,
  FaLightbulb,
  FaPalette,
  FaMusic,
  FaGamepad,
  FaPaintbrush,
  FaSquare,
  FaSun,
  FaHouse,
  FaGaugeHigh,
  FaBolt,
  FaExpand,
  FaDesktop,
  FaEye,
  FaMobile,
  FaWifi,
  FaMinus,
  FaUsb,
  FaTv,
  FaArrowRight,
} from "react-icons/fa6";
import { HiOutlineTv, HiOutlineComputerDesktop } from "react-icons/hi2";
import { IoSparkles } from "react-icons/io5";

import neo from "../../../images/Neoqled8k.png";
import s95 from "../../../images/Oleds95.png";
import frame from "../../../images/Theframe.png";
import g9 from "../../../images/Odyseseyg9.png";
import view from "../../../images/Viewfinity.png";
import smart from "../../../images/Smartmonitor.png";



const tvProducts = [
  {
    image: neo,
    badge: "8K Flagship",
    name: "Neo QLED 8K",
    tagline: "Kinozal sifatida uyingizda",
    description:
      "8K aniqlik va sun'iy intellekt yordamida har bir kadr jonli va aniq ko'rinadi. Qorong'i sahnalar ham toza, ranglar ham tabiiy.",
    features: [
      { icon: <FaBrain />, text: "AI yordamida tasvirni 8K ga oshiradi" },
      { icon: <FaImage />, text: "Neo Quantum HDR — chuqur va yorqin ranglar" },
      { icon: <FaFilm />, text: "Kinozal darajasidagi sifatli tasvir" },
      { icon: <FaVolumeHigh />, text: "Ovoz harakatni kuzatib boradi" },
    ],
    link: "https://www.samsung.com/us/tvs/all-tvs/",
  },
  {
    image: s95,
    badge: "Eng yaxshi OLED",
    name: "OLED S95",
    tagline: "Haqiqiy qora, haqiqiy ranglar",
    description:
      "Milyonlab o'z-o'zidan yonadigan piksellar cheksiz qorong'ulik va yorug'likni bir ekranda jamlaydi. Ranglar ekrandan chiqib ketyorgandek bo'ladi.",
    features: [
      { icon: <FaLightbulb />, text: "O'z-o'zidan yonadigan piksellar" },
      { icon: <FaPalette />, text: "100% haqiqiy va to'la ranglar" },
      { icon: <FaMusic />, text: "Dolby Atmos bilan atrofdagi ovoz" },
      { icon: <FaGamepad />, text: "Gaming Hub — o'yinlar tayyor" },
    ],
    link: "https://www.samsung.com/us/tvs/all-tvs/",
  },
  {
    image: frame,
    badge: "Lifestyle",
    name: "The Frame",
    tagline: "Televizor emas — uy bezagi",
    description:
      "O'chirilganda rasmga aylanadi va devoringizga san'at olib keladi. Uyingizga mos ramka tanlang, kayfiyatingizga qarab o'zgartiring.",
    features: [
      { icon: <FaPaintbrush />, text: "San'at rejimi — devor rasmga aylanadi" },
      { icon: <FaSquare />, text: "Almashtiriladigan bezak ramka" },
      { icon: <FaSun />, text: "Ko'zni qurmaydigan mat ekran" },
      { icon: <FaHouse />, text: "SmartThings bilan oson boshqarish" },
    ],
    link: "https://www.samsung.com/us/tvs/all-tvs/",
  },
];

const monitorProducts = [
  {
    image: g9,
    badge: "O'yin uchun",
    name: "Odyssey OLED G9",
    tagline: "O'yin dunyosiga botib keting",
    description:
      "49 dyumli egilgan ekranda 240 Hz yangilanish tezligi bilan harakat silliq va uzilib qolmaydi. Gaming sizni boshqa olamga olib ketadi.",
    features: [
      { icon: <FaGaugeHigh />, text: "240 Hz — juda silliq harakat" },
      { icon: <FaBolt />, text: "0.03 ms — deyarli kechikmaysiz" },
      { icon: <FaExpand />, text: "49 dyumli egilgan keng ekran" },
      { icon: <FaGamepad />, text: "Gaming Hub o'yinlari tayyor" },
    ],
    link: "https://www.samsung.com/us/computing/monitors/",
  },
  {
    image: view,
    badge: "Ish uchun",
    name: "ViewFinity S8",
    tagline: "Ishingiz uchun keng maydon",
    description:
      "5K aniqlik bilan hujjatlar, rasmlar va loyihalar bir ekranda joylashadi. Ko'z charchamasligi uchun maxsus rejim o'rnatilgan.",
    features: [
      { icon: <FaImage />, text: "5K aniq va o'tkir tasvir" },
      { icon: <FaPalette />, text: "99% sRGB — to'g'ri ranglar" },
      { icon: <FaDesktop />, text: "Qulay va balandlik o'zgaruvchi stend" },
      { icon: <FaEye />, text: "Ko'zni asrash rejimi" },
    ],
    link: "https://www.samsung.com/us/computing/monitors/",
  },
  {
    image: smart,
    badge: "Aqlli",
    name: "Smart Monitor M8",
    tagline: "Kompyutersiz ham aqlli",
    description:
      "Ilovalar, video va bulut xizmatlari bir ekranda — boshqa qurilma kerak emas. Yupqa korpusi bilan stolni egallamaydi.",
    features: [
      { icon: <FaMobile />, text: "Ilovalar o'rnatilgan holda keladi" },
      { icon: <FaWifi />, text: "Wireless DeX — simsiz ulanish" },
      { icon: <FaMinus />, text: "Yupqa va zamonaviy dizayn" },
      { icon: <FaUsb />, text: "USB-C bilan bir tegishda quvvat" },
    ],
    link: "https://www.samsung.com/us/computing/monitors/",
  },
];



const tvCompare = [
  { spec: "Turi", a: "Neo QLED", b: "OLED", c: "Lifestyle QLED" },
  { spec: "Aniqlik", a: "8K", b: "4K", c: "4K" },
  { spec: "AI Protsessor", a: "Ha (8K AI)", b: "Ha", c: "Ha" },
  {
    spec: "HDR",
    a: "Neo Quantum HDR",
    b: "Quantum HDR OLED",
    c: "Quantum HDR",
  },
  {
    spec: "Ovoz",
    a: "Object Tracking Sound",
    b: "Dolby Atmos",
    c: "Dolby Atmos",
  },
  { spec: "O'yin", a: "Game Hub", b: "Game Hub", c: "Game Hub" },
  { spec: "San'at rejimi", a: "Yo'q", b: "Yo'q", c: "Ha" },
  { spec: "Ekran o'lchami", a: "65–85 dyum", b: "55–77 dyum", c: "32–85 dyum" },
];

const monitorCompare = [
  { spec: "Turi", a: "O'yin (egilgan)", b: "Ish", c: "Aqlli" },
  { spec: "Aniqlik", a: "Dual QHD", b: "5K", c: "4K UHD" },
  { spec: "Yangilanish", a: "240 Hz", b: "60 Hz", c: "60 Hz" },
  { spec: "Javob tezligi", a: "0.03 ms", b: "5 ms", c: "4 ms" },
  { spec: "Ekran", a: "49 dyum egilgan", b: "27–32 dyum", c: "32 dyum" },
  { spec: "Rang", a: "99% DCI-P3", b: "99% sRGB", c: "99% sRGB" },
  { spec: "Ulanish", a: "HDMI 2.1", b: "USB-C / DP", c: "Wireless DeX" },
  { spec: "Ko'z rejimi", a: "Yo'q", b: "Ha", c: "Ha" },
];

function TabBar({ active, onChange }) {
  const tabs = [
    { id: "tv", label: "Televizorlar", icon: <HiOutlineTv /> },
    { id: "monitor", label: "Monitirlar", icon: <HiOutlineComputerDesktop /> },
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "-32px",
        position: "relative",
        zIndex: 10,
      }}
    >
      <div
        style={{
          display: "inline-flex",
          background: "rgba(15, 15, 30, 0.95)",
          backdropFilter: "blur(20px)",
          borderRadius: "999px",
          padding: "6px",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
        }}
      >
        {tabs.map((tab) => {
          const isActive = active === tab.id;
          const isTv = active === "tv";
          const activeBg = isTv
            ? "linear-gradient(135deg, #B8860B, #E8A838)"
            : "linear-gradient(135deg, #4F46E5, #818CF8)";

          return (
            <button
              key={tab.id}
              onClick={() => onChange(tab.id)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "14px 32px",
                borderRadius: "999px",
                border: "none",
                background: isActive ? activeBg : "transparent",
                color: isActive ? "#fff" : "rgba(255,255,255,0.5)",
                fontSize: "16px",
                fontWeight: isActive ? 700 : 500,
                cursor: "pointer",
                letterSpacing: "0.3px",
              }}
            >
              <span style={{ fontSize: "18px" }}>{tab.icon}</span>
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function ProductCard({ product, gradient, primary, accent }) {
  return (
    <div
      style={{
        borderRadius: "28px",
background: gradient,
        overflow: "hidden",
        boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
        border: "1px solid rgba(255,255,255,0.06)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "240px",
          overflow: "hidden",
          background: "rgba(0,0,0,0.3)",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "16px",
            left: "16px",
            zIndex: 2,
            display: "flex",
            gap: "8px",
          }}
        >
          <span
            style={{
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "1px",
              textTransform: "uppercase",
              color: "#fff",
              background: primary,
              padding: "6px 14px",
              borderRadius: "999px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
            }}
          >
            {product.badge}
          </span>
        </div>
        <Image
          loading="lazy"
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, 560px"
          style={{ objectFit: "contain", padding: "24px" }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "60px",
            background: "linear-gradient(transparent, rgba(0,0,0,0.6))",
          }}
        />
      </div>

      <div
        style={{
          padding: "24px 26px 26px",
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h3
          style={{
            fontSize: "1.5rem",
            fontWeight: "900",
            color: "#ffffff",
            margin: "0 0 4px",
            letterSpacing: "-0.3px",
          }}
        >
          {product.name}
        </h3>
        <p
          style={{
            fontSize: "1rem",
            fontWeight: "700",
            color: accent,
            margin: "0 0 12px",
          }}
        >
          {product.tagline}
        </p>
        <p
          style={{
            fontSize: "0.92rem",
            color: "rgba(255,255,255,0.65)",
            lineHeight: 1.6,
            margin: "0 0 18px",
          }}
        >
          {product.description}
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            marginBottom: "22px",
            flex: 1,
          }}
        >
          {product.features.map((f, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontSize: "0.9rem",
                color: "rgba(255,255,255,0.85)",
                fontWeight: 500,
              }}
            >
              <span
                style={{
                  color: accent,
                  fontSize: "1rem",
                  flexShrink: 0,
                  width: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {f.icon}
              </span>
              <span>{f.text}</span>
            </div>
          ))}
        </div>

        <Link
          href={product.link}
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            width: "100%",
            height: "50px",
            fontSize: "1rem",
            fontWeight: "700",
            color: "#ffffff",
            background: `linear-gradient(135deg, ${primary}, ${accent})`,
            borderRadius: "999px",
            marginTop: "auto",
          }}
        >
          Batafsil <FaArrowRight style={{ fontSize: "12px" }} />
        </Link>
      </div>
    </div>
  );
}

function CompareTable({ data, names, accent }) {
  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))",
        border: "1px solid rgba(255,255,255,0.06)",
        borderRadius: "24px",
        overflow: "hidden",
        backdropFilter: "blur(12px)",
        boxShadow: "0 10px 40px rgba(0,0,0,0.3)",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "120px 1fr 1fr 1fr",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div
          style={{
            padding: "18px 20px",
            fontWeight: 700,
            fontSize: "14px",
            color: "rgba(255,255,255,0.35)",
            textTransform: "uppercase",
            letterSpacing: "1px",
          }}
        >
          Xususiyat
        </div>
        {names.map((n, i) => (
          <div
            key={i}
            style={{
              padding: "18px 12px",
              textAlign: "center",
              fontWeight: 700,
              fontSize: "15px",
              color: accent,
              borderLeft: "1px solid rgba(255,255,255,0.04)",
            }}
          >
            {n}
          </div>
        ))}
      </div>

      {data.map((row, i) => (
        <div
          key={row.spec}
          style={{
            display: "grid",
            gridTemplateColumns: "120px 1fr 1fr 1fr",
            borderBottom:
              i < data.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
            background: i % 2 === 0 ? "rgba(255,255,255,0.015)" : "transparent",
          }}
        >
          <div
            style={{
              padding: "13px 20px",
              fontSize: "14px",
              fontWeight: 600,
              color: "rgba(255,255,255,0.5)",
              whiteSpace: "nowrap",
            }}
          >
            {row.spec}
          </div>
          {["a", "b", "c"].map((key) => (
            <div
              key={key}
              style={{
                padding: "13px 12px",
                textAlign: "center",
                fontSize: "14px",
                color: "rgba(255,255,255,0.75)",
                borderLeft: "1px solid rgba(255,255,255,0.04)",
                fontWeight: 500,
              }}
            >
              {row[key]}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default function TVmonitor() {
  const [activeTab, setActiveTab] = useState("tv");
  
  const isTv = activeTab === "tv";
  const primary = isTv ? "#B8860B" : "#4F46E5";
  const accent = isTv ? "#E8A838" : "#818CF8";
  const gradient = isTv
    ? "linear-gradient(180deg, rgba(184,134,11,0.15), rgba(232,168,56,0.05))"
    : "linear-gradient(180deg, rgba(79,70,229,0.15), rgba(129,140,248,0.05))";
  const theme = {
    accent,
    glow: isTv ? "rgba(184,134,11,0.3)" : "rgba(79,70,229,0.3)",
    badgeBg: isTv ? "rgba(184,134,11,0.2)" : "rgba(79,70,229,0.2)",
  };
  
  const products = activeTab === "tv" ? tvProducts : monitorProducts;
  const compareData = activeTab === "tv" ? tvCompare : monitorCompare;
  const compareNames =
    activeTab === "tv"
      ? ["Neo QLED 8K", "OLED S95", "The Frame"]
      : ["Odyssey OLED G9", "ViewFinity S8", "Smart Monitor M8"];
  const sectionLabel = activeTab === "tv" ? "Televizorlar" : "Monitirlar";
  const sectionDesc =
    activeTab === "tv"
      ? "Kinozal sifati, chuqur qora rang va aqlli imkoniyatlar — uyingizdagi dam olish vaqtini yangi darajaga olib chiqing."
      : "Ish, o'yin yoki ijod — Samsung monitirlari bilan har narsa silliq va aniq. Ko'zingiz ham charchamaydi.";
  const compareLabel =
    activeTab === "tv"
      ? "Televizorlarni taqqoslang"
      : "Monitirlarni taqqoslang";
  const compareQuestion =
    activeTab === "tv"
      ? "Qaysi televizor sizga mos?"
      : "Qaysi monitor sizga mos?";

  return (
    <div
      style={{
        background: "#08080F",
        minHeight: "100vh",
        color: "#fff",
        fontFamily: "inherit",
      }}
    >
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          minHeight: "85vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: `radial-gradient(1000px 700px at 50% 20%, rgba(20,40,160,0.3), transparent 60%),
                       radial-gradient(700px 500px at 80% 80%, rgba(100,60,200,0.12), transparent 60%),
                       linear-gradient(180deg, #08080F 0%, #0a0a20 50%, #08080F 100%)`,
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            textAlign: "center",
            padding: "0 24px",
            position: "relative",
            zIndex: 2,
          }}
        >

          <h1
            style={{
              fontSize: "clamp(2.6rem, 6vw, 4.5rem)",
              fontWeight: 900,
              lineHeight: 1.05,
              margin: "0 0 20px",
              letterSpacing: "-2px",
            }}
          >
            {activeTab === "tv" ? (
              <>
                Kinozal{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #E8A838, #FFD700)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  tajribasi
                </span>
                <br />
                uyingizda
              </>
            ) : (
              <>
                Professional{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #818CF8, #A5B4FC)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  ekranlar
                </span>
                <br />
                har bir vazifa uchun
              </>
            )}
          </h1>

          <p
            style={{
              fontSize: "clamp(1rem, 1.5vw, 1.15rem)",
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.55)",
              maxWidth: "600px",
              margin: "0 auto 36px",
            }}
          >
            {activeTab === "tv"
              ? "8K aniqlik, OLED chuqurlik va sun'iy intellekt — Samsung televizorlari bilan har bir sahna yangi hayotga kiradi."
              : "240 Hz gaming, 5K aniqlik va aqlli imkoniyatlar — Samsung monitirlari bilan ish va o'yin yangi darajaga ko'tariladi."}
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "14px",
              flexWrap: "wrap",
            }}
          >
            <a
              href="#products"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "16px 32px",
                background: `linear-gradient(135deg, ${
                  activeTab === "tv" ? "#B8860B" : "#4F46E5"
                }, ${activeTab === "tv" ? "#E8A838" : "#818CF8"})`,
                color: "#fff",
                border: "none",
                borderRadius: "999px",
                fontSize: "16px",
                fontWeight: 700,
                textDecoration: "none",
                cursor: "pointer",
                boxShadow: `0 8px 30px ${
                  activeTab === "tv"
                    ? "rgba(232,168,56,0.3)"
                    : "rgba(99,102,241,0.3)"
                }`,
              }}
            >
              <FaTv style={{ fontSize: "18px" }} />
              Mahsulotlarni ko'rish
            </a>
            <a
              href="#compare"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "16px 32px",
                background: "transparent",
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: "999px",
                fontSize: "16px",
                fontWeight: 600,
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              <IoSparkles style={{ fontSize: "18px" }} />
              Taqqoslash
            </a>
          </div>
        </div>
      </section>

      <TabBar active={activeTab} onChange={setActiveTab} />

      <section id="products" style={{ padding: "60px 24px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              fontWeight: 900,
              color: "#ffffff",
              marginBottom: "8px",
              letterSpacing: "-0.5px",
            }}
          >
            {sectionLabel}
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: "rgba(255,255,255,0.5)",
              marginBottom: "40px",
              maxWidth: "640px",
              lineHeight: 1.6,
            }}
          >
            {sectionDesc}
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "28px",
              justifyContent: "center",
            }}
          >
            {products.map((p, i) => (
              <ProductCard key={p.name} product={p}
                gradient={gradient}
                primary={primary}
                accent={accent}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        id="compare"
        style={{
          position: "relative",
          overflow: "hidden",
          padding: "clamp(60px, 8vw, 100px) 24px",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            position: "relative",
            zIndex: 2,
          }}
        >
          <div
            style={{
              textAlign: "center",
              marginBottom: "clamp(40px, 6vw, 60px)",
            }}
          >
            <span
              style={{
                display: "inline-block",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: activeTab === "tv" ? "#E8A838" : "#818CF8",
                marginBottom: "14px",
                background: activeTab === "tv" ? "rgba(184,134,11,0.2)" : "rgba(79,70,229,0.2)",
                padding: "6px 16px",
                borderRadius: "999px",
              }}
            >
              {compareLabel}
            </span>
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 44px)",
                fontWeight: 800,
                lineHeight: 1.1,
                margin: "0",
                letterSpacing: "-1px",
                color: "#ffffff",
              }}
            >
              {compareQuestion.split(" ").slice(0, -1).join(" ")}{" "}
              <span style={{ color: activeTab === "tv" ? "#E8A838" : "#818CF8" }}>
                {compareQuestion.split(" ").pop()}
              </span>
            </h2>
          </div>

          <div
            style={{
              overflowX: "auto",
              WebkitOverflowScrolling: "touch",
              paddingBottom: "8px",
            }}
          >
            <CompareTable
              data={compareData}
              names={compareNames}
              accent={activeTab === "tv" ? "#E8A838" : "#818CF8"}
            />
          </div>
        </div>
      </section>

      {activeTab === "tv" && (
        <section
          style={{
            position: "relative",
            overflow: "hidden",
            padding: "clamp(40px, 6vw, 80px) 24px",
          }}
        >
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <span
                style={{
                  display: "inline-block",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  marginBottom: "14px",
                  padding: "6px 16px",
                  borderRadius: "999px",
                }}
              >
                Nega aynan Samsung?
              </span>
              <h2
                style={{
                  fontSize: "clamp(28px, 4vw, 42px)",
                  fontWeight: 800,
                  lineHeight: 1.15,
                  margin: "0",
                  letterSpacing: "-1px",
                  color: "#ffffff",
                }}
              >
                Nima uchun Samsung televizorlari{" "}
            eng sifatli?
              </h2>
              <p
                style={{
                  fontSize: "1.05rem",
                  color: "rgba(255,255,255,0.5)",
                  maxWidth: "600px",
                  margin: "14px auto 0",
                  lineHeight: 1.6,
                }}
              >
                Samsung 15 yildan beri dunyodagi eng ko'p sotiladigan televizor
                brendi. Buning siri — sifat, innovatsiya va narxning mukammal
                uyg'unligida.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "24px",
              }}
            >
              <div
                style={{
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "24px",
                  padding: "32px 28px",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = theme.accent;
                  e.currentTarget.style.boxShadow = `0 0 30px ${theme.glow}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "16px",
                    background: "rgba(184,134,11,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "26px",
                    color: "#E8A838",
                    marginBottom: "18px",
                  }}
                >
                  🏆
                </div>
                <h3
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: 700,
                    color: "#fff",
                    margin: "0 0 10px",
                  }}
                >
                  Dunyoda 1-sotuvchi
                </h3>
                <p
                  style={{
                    fontSize: "1rem",
                    lineHeight: 1.7,
                    color: "rgba(255,255,255,0.6)",
                    margin: 0,
                  }}
                >
                  Samsung 15 yil ketma-ket eng ko'p sotilgan televizor brendi.
                  Bu degani — millionlab odamlar Samsung'ni tanlagan va sifatiga
                  ishonadi.
                </p>
              </div>

              <div
                style={{
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "24px",
                  padding: "32px 28px",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#E8A838";
                  e.currentTarget.style.boxShadow = "0 0 30px rgba(184,134,11,0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "16px",
                    background: "rgba(184,134,11,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "26px",
                    color: "#E8A838",
                    marginBottom: "18px",
                  }}
                >
                  🖼️
                </div>
                <h3
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: 700,
                    color: "#fff",
                    margin: "0 0 10px",
                  }}
                >
                  Rasm sifati ajoyib
                </h3>
                <p
                  style={{
                    fontSize: "1rem",
                    lineHeight: 1.7,
                    color: "rgba(255,255,255,0.6)",
                    margin: 0,
                  }}
                >
                  Qora ranglar chuqur, ranglar esa yorqin va tabiiy. Qorong'i
                  xonada ham, yorug' xonada ham tasvir baribir aniq va chiroyli
                  ko'rinadi.
                </p>
              </div>

              <div
                style={{
                  background: gradient,
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "24px",
                  padding: "32px 28px",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = theme.accent;
                  e.currentTarget.style.boxShadow = `0 0 30px ${theme.glow}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "16px",
                    background: "rgba(184,134,11,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "26px",
                    color: "#E8A838",
                    marginBottom: "18px",
                  }}
                >
                  🧠
                </div>
                <h3
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: 700,
                    color: "#fff",
                    margin: "0 0 10px",
                  }}
                >
                  Sun'iy intellekt bilan ishlaydi
                </h3>
                <p
                  style={{
                    fontSize: "1rem",
                    lineHeight: 1.7,
                    color: "rgba(255,255,255,0.6)",
                    margin: 0,
                  }}
                >
                  Samsung'ning AI protsessori eski filmlarni ham 8K sifatiga
                  oshiradi, ovozni xonangizga moslab sozlaydi va hatto
                  energiyani tejaydi.
                </p>
              </div>

              <div
                style={{
                  background: gradient,
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "24px",
                  padding: "32px 28px",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = theme.accent;
                  e.currentTarget.style.boxShadow = `0 0 30px ${theme.glow}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "16px",
                    background: "rgba(184,134,11,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "26px",
                    color: "#E8A838",
                    marginBottom: "18px",
                  }}
                >
                  🎮
                </div>
                <h3
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: 700,
                    color: "#fff",
                    margin: "0 0 10px",
                  }}
                >
                  O'yin va kino uchun tayyor
                </h3>
                <p
                  style={{
                    fontSize: "1rem",
                    lineHeight: 1.7,
                    color: "rgba(255,255,255,0.6)",
                    margin: 0,
                  }}
                >
                  Game Hub bilan hech qanday konsol kerak emas — o'yinlarni
                  bulut orqali o'ynang. Dolby Atmos esa uyingizni kinozalga
                  aylantiradi.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {activeTab === "monitor" && (
        <section
          style={{
            position: "relative",
            overflow: "hidden",
            padding: "clamp(40px, 6vw, 80px) 24px",
          }}
        >
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <span
                style={{
                  display: "inline-block",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  color: accent,
                  marginBottom: "14px",
                  background: theme.badgeBg,
                  padding: "6px 16px",
                  borderRadius: "999px",
                }}
              >
                Nega aynan Samsung?
              </span>
              <h2
                style={{
                  fontSize: "clamp(28px, 4vw, 42px)",
                  fontWeight: 800,
                  lineHeight: 1.15,
                  margin: "0",
                  letterSpacing: "-1px",
                  color: "#ffffff",
                }}
              >
                Nima uchun Samsung monitirlari{" "}
                <span style={{ color: theme.accent }}>sifatliroq?</span>
              </h2>
              <p
                style={{
                  fontSize: "1.05rem",
                  color: "rgba(255,255,255,0.5)",
                  maxWidth: "600px",
                  margin: "14px auto 0",
                  lineHeight: 1.6,
                }}
              >
                Samsung o'zining ekran panellarini o'zi ishlab chiqaradi — bu
                sifatni boshidan oxirigacha nazorat qilish imkonini beradi.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "24px",
              }}
            >
              <div
                style={{
                  background: gradient,
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "24px",
                  padding: "32px 28px",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = theme.accent;
                  e.currentTarget.style.boxShadow = `0 0 30px ${theme.glow}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "16px",
                    background: theme.badgeBg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "26px",
                    color: "#818CF8",
                    marginBottom: "18px",
                  }}
                >
                  🎨
                </div>
                <h3
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: 700,
                    color: "#fff",
                    margin: "0 0 10px",
                  }}
                >
                  Ranglar tabiiy va jonli
                </h3>
                <p
                  style={{
                    fontSize: "1rem",
                    lineHeight: 1.7,
                    color: "rgba(255,255,255,0.6)",
                    margin: 0,
                  }}
                >
                  Samsung monitirlaridagi ranglar haqiqiy hayotdagidek chiroyli.
                  Dizayner va fotograf bo'lsangiz, ekranda ko'rganingiz
                  haqiqatda ham shunday chiqadi.
                </p>
              </div>

              <div
                style={{
                  background: gradient,
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "24px",
                  padding: "32px 28px",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = theme.accent;
                  e.currentTarget.style.boxShadow = `0 0 30px ${theme.glow}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "16px",
                    background: theme.badgeBg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "26px",
                    color: "#818CF8",
                    marginBottom: "18px",
                  }}
                >
                  🏭
                </div>
                <h3
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: 700,
                    color: "#fff",
                    margin: "0 0 10px",
                  }}
                >
                  O'z ekranini o'zi yasaydi
                </h3>
                <p
                  style={{
                    fontSize: "1rem",
                    lineHeight: 1.7,
                    color: "rgba(255,255,255,0.6)",
                    margin: 0,
                  }}
                >
                  Boshqa kompaniyalar panelni boshqa joydan sotib oladi. Samsung
                  esa o'z panellarini o'zi ishlab chiqaradi. Nonni do'kondan
                  sotib olish bilan uyda pishirishning farqidek.
                </p>
              </div>

              <div
                style={{
                  background: gradient,
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "24px",
                  padding: "32px 28px",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = theme.accent;
                  e.currentTarget.style.boxShadow = `0 0 30px ${theme.glow}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "16px",
                    background: theme.badgeBg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "26px",
                    color: "#818CF8",
                    marginBottom: "18px",
                  }}
                >
                  👁️
                </div>
                <h3
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: 700,
                    color: "#fff",
                    margin: "0 0 10px",
                  }}
                >
                  Ko'zingizni himoya qiladi
                </h3>
                <p
                  style={{
                    fontSize: "1rem",
                    lineHeight: 1.7,
                    color: "rgba(255,255,255,0.6)",
                    margin: 0,
                  }}
                >
                  Ekran miltillamaydi va ko'k nurni kamaytiradi. Kun bo'yi
                  kompyuterda ishlasangiz, kechqurun ko'zlaringiz charchab
                  qolmaydi.
                </p>
              </div>

              <div
                style={{
                  background: gradient,
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "24px",
                  padding: "32px 28px",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = theme.accent;
                  e.currentTarget.style.boxShadow = `0 0 30px ${theme.glow}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "16px",
                    background: theme.badgeBg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "26px",
                    color: "#818CF8",
                    marginBottom: "18px",
                  }}
                >
                  ⚡
                </div>
                <h3
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: 700,
                    color: "#fff",
                    margin: "0 0 10px",
                  }}
                >
                  Telefon bilan simsiz ulanadi
                </h3>
                <p
                  style={{
                    fontSize: "1rem",
                    lineHeight: 1.7,
                    color: "rgba(255,255,255,0.6)",
                    margin: 0,
                  }}
                >
                  Wireless DeX orqali telefoningizni simsiz monitorga ulang va
                  katta ekranda ishlang. USB-C bilan bir kabel orqali zaryad va
                  tasvir uzatasiz.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      <section style={{ padding: "20px 24px 60px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "20px",
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))",
              border: "1px solid rgba(255,255,255,0.05)",
              borderRadius: "24px",
              padding: "40px 32px",
              backdropFilter: "blur(12px)",
            }}
          >
            {[
              {
                value: activeTab === "tv" ? "8K" : "240Hz",
                label:
                  activeTab === "tv"
                    ? "Maksimal aniqlik"
                    : "Maksimal yangilanish",
              },
              { value: "99%", label: "Rang aniqligi" },
              {
                value: activeTab === "tv" ? '85"' : '49"',
                label: "Eng katta ekran",
              },
              {
                value: activeTab === "tv" ? "AI" : "0.03ms",
                label: activeTab === "tv" ? "Protsessor" : "Javob tezligi",
              },
            ].map((stat, i) => (
              <div
                key={i}
                style={{
                  textAlign: "center",
                  padding: "0 8px",
                  borderRight:
                    i < 3 ? "1px solid rgba(255,255,255,0.06)" : "none",
                }}
              >
                <div
                  style={{
                    fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                    fontWeight: 900,
                    background: `linear-gradient(135deg, ${primary}, ${accent})`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    lineHeight: 1.2,
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: "0.85rem",
                    color: "rgba(255,255,255,0.45)",
                    fontWeight: 500,
                    marginTop: "4px",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
