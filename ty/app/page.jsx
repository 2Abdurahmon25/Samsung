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
import S26 from "../images/S26o17.png";
import Watch from "../images/Watch8.png";
import GalaxyAi from "../images/Galaxyai1.png";
import Monitorodeyssey from "../images/Samsungodyssey.png";
import Samsungbuds from "../images/Samsungbuds.png";
import Ecosystem from "../images/SamsungEcosystem.png";
import ecoexample from "../images/SamsungEcosystemexample.png";
export default function page() {
  const router = useRouter();
  const categories = [
    {
      title: "Telefonlar va Aksessuarlar",
      img: Mobile,
      route: "./components/Watches",
    },
    {
      title: "Televizorlar va Monitorlar",
      img: Monitor,
      route: "./components/Monitor",
    },
    {
      title: "Maishiy Texnika",
      img: Maish,
      route: "./components/SmartHome",
    },
    {
      title: "Kompyuter Qurilmalari",
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
      name: "Galaxy Watch 8",
      price: "$449",
      img: Watch,
      route: "./components/Watches",
    },
    {
      name: "Odyssey G6",
      price: "$1000",
      img: Monitorodeyssey,
      route: "./components/Monitor",
    },
    {
      name: "Galaxy Buds Pro 4",
      price: "$199",
      img: Samsungbuds,
      route: "./components/Watches",
    },
  ];

  return (
    <div
      style={{ background: "#0B0B0B", color: "#fff", fontFamily: "inherit" }}
    >
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
            maxWidth: "1280px",
            margin: "0 auto",
            width: "100%",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "48px",
            alignItems: "center",
            padding: "96px 24px",
            minHeight: "calc(100vh - 70px)",
          }}
        >
          <div>
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
                  background: "#1428A0",
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

      <section style={{ padding: "96px 24px", background: "#0B0B0B" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", width: "100%" }}>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 800,
              margin: 0,
              textAlign: "center",
            }}
          >
            Texnologiyalar kategoriyasi
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
                  background: "#111827",
                  borderRadius: "28px",
                  overflow: "hidden",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
              >
                <div style={{ padding: "50px" }}>
                  <Image
                    src={c.img}
                    alt="err"
                    style={{
                      objectFit: "contain",
                      borderRadius: "40%",
                      position: "relative",
                      width: "fit-content",
                      height: "fit-content",
                      borderRadius: "30px",
                      border: "1px solid white",
                    }}
                  />
                </div>
                <div style={{ padding: "28px 32px 36px" }}>
                  <h3
                    style={{
                      paddingLeft: "120px",
                      margin: 0,
                      fontSize: "24px",
                      fontWeight: 800,
                    }}
                  >
                    {c.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        style={{
          minHeight: "100vh",
          background: "#050505",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 8%",
          gap: "80px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            flex: "0 0 42%",
            color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h1 style={{ fontSize: "50px" }}>
            Samsung Ecosistemasi <br /> bilan Tanishing
          </h1>
          <p
            style={{
              fontSize: "21px",
              lineHeight: "1.8",
              color: "#CFCFCF",
              maxWidth: "540px",
              marginBottom: "50px",
            }}
          >
            Samsung ekotizimi — bu telefon, soat va uy jihozlarining bir-biri
            bilan avtomatik bogʻlanishidir. Ular fayllarni oson oʻtkazadi,
            quloqchinni oʻzi ulaydi va maishiy texnikadan bildirishnomalar
            yuboradi. Maqsad — hamma mayda-chuyda ishlarni texnikaning oʻzi
            bajarishi va sizga qulay boʻlishidir.
          </p>
          <div style={{ marginTop: "10px", display: "flex" }}>
            <div
              style={{
                display: "flex",
                gap: "18px",
                marginTop: "1px",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <button
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  padding: "14px 28px",
                  backgroundColor: "#fff",
                  color: "#000",
                  border: "1px solid rgba(255,255,255,0.2)",
                  borderRadius: "999px",
                  fontSize: "16px",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.35s ease-in-out",
                  boxShadow: "0 8px 24px rgba(255,255,255,0.08)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#1E88FF";
                  e.currentTarget.style.color = "#fff";
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow =
                    "0 14px 35px rgba(30,136,255,.45)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#fff";
                  e.currentTarget.style.color = "#000";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 24px rgba(255,255,255,.08)";
                }}
              >
                Ko'proq Ma'lumot
              </button>
              <button
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  padding: "14px 28px",
                  background: "transparent",
                  color: "#fff",
                  border: "1px solid rgba(255,255,255,.25)",
                  borderRadius: "999px",
                  fontSize: "16px",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.35s ease-in-out",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,.08)";
                  e.currentTarget.style.border = "1px solid #fff";
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.border =
                    "1px solid rgba(255,255,255,.25)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                Ecosystem Ko'rib chiqish →
              </button>
            </div>
          </div>
        </div>

        <div
          style={{
            flex: "0 0 58%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            overflow: "visible",
          }}
        >
          <Image
            src={Ecosystem}
            alt="Samsung Ecosystem"
            style={{
              width: "100%",
              maxWidth: "1000px",
              height: "auto",
              objectFit: "contain",
              position: "relative",
            }}
          />
        </div>
      </section>

      <section
        style={{
          border:"1px solid white",
          height: "100vh",
          background: "#050505",
        }}
      >
        <h1 style={{fontSize:"40px", marginLeft:"15px", textAlign:"center", marginTop:"20px"}}>
          Samsung Ecosistem orqali hamma Samsung qurilmalaringiz <br /> bitta Telefon
          orqali boshqara olasiz
        </h1>
      </section>

      <section style={{ padding: "96px 24px", background: "#050505" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", width: "100%" }}>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 800,                        
              margin: 0,
            }}
          >
            Eng ko'p sotiladigan texnologiyalarimiz
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
                  background: "#111827",
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
                    color: "white ",
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
                    background: "#1428A0",
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

      <section style={{ padding: "96px 24px", background: "#050505" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", width: "100%" }}>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 800,
              margin: 0,
              textAlign: "center",
            }}
          >
            Nima uchun <span style={{ color: "#1428A0" }}>Samsung?</span>
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
          <div>
            <button
              style={{
                fontSize: "30px",
                padding: "10px",
                transition: "all 0.3s ease-in-out",
                height: "100px",
                marginTop: "10px",
                width: "fit-content",
                backgroundColor: "white",
                color: "black",
                borderRadius: "30px",
                marginLeft: "30px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "black";
                e.currentTarget.style.color = "white";
                e.currentTarget.style.border = "1px solid white";
                e.currentTarget.style.transform = "scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "white";
                e.currentTarget.style.color = "black";
                e.currentTarget.style.border = "1px solid black";
                e.currentTarget.style.transform = "scale(1.0)";
              }}
            >
              Samsung global televizor bozorida ketma-ket 20 yildan beri
              1-oʻrinni hech kimga bermay kelmoqda.
            </button>
            <button
              style={{
                fontSize: "30px",
                padding: "10px",
                height: "100px",
                marginLeft: "70px",
                width: "fit-content",
                marginTop: "10px",
                transition: "all 0.3s ease-in-out",
                backgroundColor: "white",
                color: "black",
                borderRadius: "30px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "black";
                e.currentTarget.style.color = "white";
                e.currentTarget.style.border = "1px solid white";
                e.currentTarget.style.transform = "scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "white";
                e.currentTarget.style.color = "black";
                e.currentTarget.style.border = "1px solid black";
                e.currentTarget.style.transform = "scale(1.0)";
              }}
            >
              Samsungning qurilmalari telefonlardan tortib muzlatgichlargacha
              bir-biri bilan ishlay oladi.
            </button>
            <button
              style={{
                fontSize: "30px",
                padding: "10px",
                height: "100px",
                marginLeft: "150px",
                width: "fit-content",
                marginTop: "10px",
                backgroundColor: "white",
                color: "black",
                transition: "all 0.3s ease-in-out",
                borderRadius: "30px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "black";
                e.currentTarget.style.color = "white";
                e.currentTarget.style.border = "1px solid white";
                e.currentTarget.style.transform = "scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "white";
                e.currentTarget.style.color = "black";
                e.currentTarget.style.border = "1px solid black";
                e.currentTarget.style.transform = "scale(1.0)";
              }}
            >
              1 Milliard 33 million odam Samsungning texnologiyasidan har kuni
              foydalanadi
            </button>
            <button
              style={{
                fontSize: "30px",
                padding: "10px",
                height: "100px",
                width: "fit-content",
                marginTop: "10px",
                backgroundColor: "white",
                color: "black",
                borderRadius: "30px",
                transition: "all 0.3s ease-in-out",
                marginLeft: "210px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "black";
                e.currentTarget.style.color = "white";
                e.currentTarget.style.border = "1px solid white";
                e.currentTarget.style.transform = "scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "white";
                e.currentTarget.style.color = "black";
                e.currentTarget.style.border = "1px solid black";
                e.currentTarget.style.transform = "scale(1.0)";
              }}
            >
              94% foydalanuvchilar Samsungning servisidan qoniqish hosil qiladi
            </button>
            <button
              style={{
                fontSize: "30px",
                padding: "10px",
                height: "100px",
                width: "fit-content",
                backgroundColor: "white",
                color: "black",
                marginTop: "10px",
                borderRadius: "30px",
                marginLeft: "280px",
                transition: "all 0.3s ease-in-out",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "black";
                e.currentTarget.style.color = "white";
                e.currentTarget.style.border = "1px solid white";
                e.currentTarget.style.transform = "scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "white";
                e.currentTarget.style.color = "black";
                e.currentTarget.style.border = "1px solid black";
                e.currentTarget.style.transform = "scale(1.0)";
              }}
            >
              400 Milliondan ortiq odam Galaxy AI dan foydalanadi
            </button>
            <button
              style={{
                fontSize: "30px",
                padding: "10px",
                height: "90px",
                width: "fit-content",
                backgroundColor: "black",
                color: "white",
                marginTop: "10px",
                borderRadius: "30px",
                marginLeft: "370px",
                border: "1px solid white",
                transition: "all 0.3s ease-in-out",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "white";
                e.currentTarget.style.color = "black";
                e.currentTarget.style.border = "1px solid black";
                e.currentTarget.style.transform = "scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "black";
                e.currentTarget.style.color = "white";
                e.currentTarget.style.border = "1px solid white";
                e.currentTarget.style.transform = "scale(1.0)";
              }}
            >
              <a href="https://news.samsung.com/global/fast-facts">
                Ko'proq Ma'lumot Uchun Bu yerga o'ting
              </a>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
