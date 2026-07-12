"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  FaArrowRight,
  FaMicrochip,
  FaShieldAlt,
  FaHome,
  FaHeadset,
  FaDollarSign,
} from "react-icons/fa";
import { FaBoltLightning } from "react-icons/fa6";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import Samsung1 from "../images/SamsungHome.png";
import Mobile from "../images/SamsungMobile.png";
import Maish from "../images/SamsungHomeapp.png";
import Monitor from "../images/SamsungMonitor.png";
import Hardware from "../images/SamsungHardware.png";
import S26 from "../images/S26.png";
import Watch from "../images/Watch8.png";
import GalaxyAi from "../images/Galaxyai1.png";
import Buds from "../images/SamsungWatches.png";

export default function page() {
  const router = useRouter();

  const BLUE = "#1428A0";
  const DARK = "#0B0B0B";
  const CARD = "#111827";
  const CONTAINER = { maxWidth: "1280px", margin: "0 auto", width: "100%" };

  const categories = [
    {
      title: "Telefonlar va Aksessuarlar",
      desc: "Galaxy smartfonlar, soatlar va quloqchinlar birgalikda ishlash uchun yaratilgan.",
      img: Mobile,
      route: "./components/Watches",
    },
    {
      title: "Televizorlar va Monitorlar",
      desc: "Har bir xona uchun oydin displey va Neo QLED mukammalligi.",
      img: Monitor,
      route: "./components/Monitor",
    },
    {
      title: "Maishiy Texnika",
      desc: "Kundalik hayotni osonlashtiradigan aqlli muzlatgichlar, kir yuvish va pishirish.",
      img: Maish,
      route: "./components/SmartHome",
    },
    {
      title: "Kompyuter Qurilmalari",
      desc: "Uzoq muddatga mo'ljallangan yuqori unumli SSD, xotira va komponentlar.",
      img: Hardware,
      route: "./components/Watches",
    },
  ];

  const featured = [
    {
      name: "Galaxy S26 Ultra",
      price: "$1,299",
      img: S26,
      route: "./components/S26",
    },
    {
      name: "Galaxy Watch8",
      price: "$449",
      img: Watch,
      route: "./components/Watches",
    },
    {
      name: "Galaxy AI Markazi",
      price: "$199",
      img: GalaxyAi,
      route: "./components/Galaxyai",
    },
    {
      name: "Galaxy Buds Pro",
      price: "$229",
      img: Buds,
      route: "./components/Watches",
    },
  ];

  const ecosystem = [
    { label: "Telefon", img: Mobile },
    { label: "Soat", img: Watch },
    { label: "Quloqchin", img: Buds },
    { label: "Planshet", img: S26 },
    { label: "TV", img: Monitor },
    { label: "Aqlli Uy", img: Maish },
  ];

  const whySamsung = [
    {
      title: "Tezlik",
      desc: "Vazifalarni millisekundlarda bajaradi va juda aniq javob beradi.",
      icon: <FaBoltLightning />,
    },
    {
      title: "Ishonchli",
      desc: "Galaxy AI sizdan hech nima hohlamaydi, hech nimani ruxsatingizsiz bajarmaydi",
      icon: <IoShieldCheckmarkSharp />,
    },
    {
      title: "Bepul",
      desc: "Galaxy AI Samsung foydalanuvchilari uchun bepul",
      icon: <FaDollarSign />,
    },
  ];

  return (
    <div style={{ background: DARK, color: "#fff", fontFamily: "inherit" }}>
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          background: `radial-gradient(900px 600px at 80% 20%, rgba(20,40,160,0.35), transparent 60%),
                       radial-gradient(700px 500px at 10% 90%, rgba(20,40,160,0.18), transparent 60%),
                       linear-gradient(180deg, #0B0B0B 0%, #050505 100%)`,
        }}
      >
        <div
          style={{
            ...CONTAINER,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "48px",
            alignItems: "center",
            padding: "96px 24px",
            minHeight: "calc(100vh - 70px)",
          }}
        >
          <div className="fade-up">
            <h1
              style={{
                fontSize: "clamp(40px, 6vw, 68px)",
                lineHeight: 1.05,
                fontWeight: 800,
                margin: 0,
                letterSpacing: "-1px",
              }}
            >
              Samsung'ga xush kelibsiz. Bizning innovatsiyalarimiz bilan
              tanishing
            </h1>
            <div
              style={{
                display: "flex",
                gap: "16px",
                marginTop: "36px",
                flexWrap: "wrap",
              }}
            >
              <button
                onClick={() => router.push("./components/S26")}
                style={{
                  background: BLUE,
                  color: "#fff",
                  border: "none",
                  borderRadius: "999px",
                  padding: "14px 28px",
                  fontSize: "16px",
                  fontWeight: 600,
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 30px rgba(20,40,160,0.5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                Mahsulotlarni Ko'rish <FaArrowRight />
              </button>
              <button
                onClick={() => router.push("./components/Galaxyai")}
                style={{
                  background: "transparent",
                  color: "#fff",
                  border: "1px solid rgba(255,255,255,0.25)",
                  borderRadius: "999px",
                  padding: "14px 28px",
                  fontSize: "16px",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition:
                    "transform 0.3s ease, border-color 0.3s ease, background 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.borderColor = "#fff";
                  e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                Batafsil
              </button>
            </div>
          </div>

          <div
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "650px",
                height: "500px",
                aspectRatio: "1 / 1",
                borderRadius: "30px",
                background:
                  "radial-gradient(circle at 50% 40%, rgba(20,40,160,0.45), rgba(11,11,11,0.9))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 30px 80px rgba(20,40,160,0.35)",
              }}
            >
              <Image
                src={Samsung1}
                alt=" S26"
                fill
                style={{ objectFit: "cover", borderRadius: "30px" }}
              />
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "96px 24px", background: DARK }}>
        <div style={{ ...CONTAINER }}>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 800,
              margin: 0,
              textAlign: "center",
            }}
          >
            Kategoriyalar Bo'yicha
          </h2>
          <p
            style={{
              textAlign: "center",
              color: "rgba(255,255,255,0.6)",
              marginTop: "12px",
              fontSize: "17px",
            }}
          >
            Hayotingizning har bir qismi uchun mukammal qurilmani toping.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "32px",
              marginTop: "48px",
            }}
          >
            {categories.map((c) => (
              <div
                key={c.title}
                onClick={() => router.push(c.route)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.03)";
                  e.currentTarget.style.boxShadow =
                    "0 24px 60px rgba(20,40,160,0.35)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 30px rgba(0,0,0,0.4)";
                }}
                style={{
                  background: CARD,
                  borderRadius: "28px",
                  overflow: "hidden",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "320px",
                    background:
                      "linear-gradient(180deg, rgba(20,40,160,0.12), transparent)",
                  }}
                >
                  <Image
                    src={c.img}
                    alt={c.title}
                    fill
                    style={{ objectFit: "contain", padding: "32px" }}
                  />
                </div>
                <div style={{ padding: "28px 32px 36px" }}>
                  <h3 style={{ margin: 0, fontSize: "24px", fontWeight: 700 }}>
                    {c.title}
                  </h3>
                  <p
                    style={{
                      margin: "12px 0 0",
                      color: "rgba(255,255,255,0.6)",
                      lineHeight: 1.6,
                      fontSize: "15px",
                    }}
                  >
                    {c.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "96px 24px", background: "#050505" }}>
        <div style={{ ...CONTAINER }}>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 800,
              margin: 0,
            }}
          >
            Tanlangan Mahsulotlar
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "32px",
              marginTop: "48px",
            }}
          >
            {featured.map((p) => (
              <div
                key={p.name}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow =
                    "0 24px 60px rgba(20,40,160,0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 30px rgba(0,0,0,0.4)";
                }}
                style={{
                  background: CARD,
                  borderRadius: "24px",
                  padding: "24px",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "200px",
                  }}
                >
                  <Image
                    src={p.img}
                    alt={p.name}
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <h3
                  style={{
                    margin: "20px 0 4px",
                    fontSize: "18px",
                    fontWeight: 700,
                  }}
                >
                  {p.name}
                </h3>
                <p
                  style={{
                    margin: 0,
                    color: BLUE,
                    fontWeight: 700,
                    fontSize: "18px",
                  }}
                >
                  {p.price}
                </p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    router.push(p.route);
                  }}
                  style={{
                    marginTop: "18px",
                    background: BLUE,
                    color: "#fff",
                    border: "none",
                    borderRadius: "999px",
                    padding: "12px",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "transform 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.04)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                >
                  Sotib Olish
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "96px 24px", background: DARK }}>
        <div style={{ ...CONTAINER, textAlign: "center" }}>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 800,
              margin: 0,
            }}
          >
            Samsung Ekotizimlari
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.6)",
              marginTop: "12px",
              fontSize: "17px",
            }}
          >
            Sizga tegishli har bir qurilma uchun yagona uzluksiz tajriba.
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "48px",
              gap: "0",
            }}
          >
            {ecosystem.map((item, i) => (
              <div
                key={item.label}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "160px",
                    height: "160px",
                    borderRadius: "24px",
                    background: CARD,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
                  }}
                >
                  <Image
                    src={item.img}
                    alt={item.label}
                    width={90}
                    height={90}
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <span
                  style={{
                    marginTop: "14px",
                    fontWeight: 600,
                    fontSize: "16px",
                  }}
                >
                  {item.label}
                </span>
                {i < ecosystem.length - 1 && (
                  <div
                    style={{
                      width: "2px",
                      height: "40px",
                      background:
                        "linear-gradient(180deg, rgba(20,40,160,0.8), rgba(20,40,160,0.1))",
                      margin: "10px 0",
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "96px 24px", background: "#050505" }}>
        <div style={{ ...CONTAINER }}>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 800,
              margin: 0,
              textAlign: "center",
            }}
          >
            Nima uchun <span style={{ color: BLUE }}>Samsung?</span>
          </h2>
          <p
            style={{
              textAlign: "center",
              color: "rgba(255,255,255,0.6)",
              marginTop: "12px",
              fontSize: "17px",
            }}
          >
            Dunyo bo'ylab yetakchilik va ishonchli natijalar.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "35px",
              flexWrap: "wrap",
              marginTop: "48px",
            }}
          >
            {whySamsung.map((item) => (
              <div
                key={item.title}
                style={{
                  width: "480px",
                  height: "360px",
                  borderRadius: "30px",
                  textAlign: "center",
                  padding: "40px",
                  background: "rgba(255,255,255,.88)",
                  backdropFilter: "blur(18px)",
                  border: "1px solid rgba(255,255,255,.8)",
                  boxShadow:
                    "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
                }}
              >
                <div
                  style={{
                    width: "82px",
                    height: "82px",
                    margin: "0 auto",
                    borderRadius: "20px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "36px",
                    background: "linear-gradient(135deg,#F0F8FF,#B3D4FF)",
                    color: "#0055FF",
                    boxShadow: "0 15px 30px rgba(0,85,255,.18)",
                  }}
                >
                  {item.icon}
                </div>

                <h2
                  style={{
                    fontSize: "42px",
                    marginTop: "28px",
                  }}
                >
                  {item.title}
                </h2>

                <p
                  style={{
                    marginTop: "18px",
                    fontSize: "24px",
                    color: "#555",
                    lineHeight: "1.7",
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}