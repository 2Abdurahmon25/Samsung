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
import {
  FaBoltLightning,
  FaBrain,
  FaWandMagicSparkles,
  FaLanguage,
  FaMobileScreenButton,
  FaClock,
  FaHeadphones,
  FaTv,
  FaCamera,
} from "react-icons/fa6";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import SmartThings from "../images/SamsungSmartThings.png";
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
                loading="eager"
                src={Samsung1}
                alt=" S26"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 650px"
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
                    loading="lazy"
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
            loading="lazy"
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
          minHeight: "100vh",
          backgroundColor: "#050505",
          backgroundImage: `url(${ecoexample.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
          padding: "40px",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "520px",
            border: "3px",
            borderRadius: "24px",
            textAlign: "center",
            padding: "36px 28px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <h1
            style={{
              color: "rgb(3, 31, 173)",
              fontSize: "30px",
              lineHeight: 1.3,
              width: "fit-content",
              height: "fit-content",
              borderRadius: "16px",
              backgroundColor: "white",
              padding: "16px 20px",
              margin: 0,
            }}
          >
            Ecosistema orqali Ulanishsiz Ma'lumot almashish imkoniyati bor
          </h1>

          <h2
            style={{
              color: "rgb(3, 31, 173)",
              fontSize: "20px",
              lineHeight: 1.6,
              borderRadius: "16px",
              backgroundColor: "white",
              padding: "20px 22px",
              margin: 0,
              textAlign: "left",
              fontWeight: "normal",
            }}
          >
            • Chegarasiz aloqa: Telefoningizdagi rasm va hujjatlarni
            noutbukingizga bir zumda o'tkazing.
          </h2>

          <h2
            style={{
              color: "rgb(3, 31, 173)",
              fontSize: "20px",
              lineHeight: 1.6,
              borderRadius: "16px",
              backgroundColor: "white",
              padding: "20px 22px",
              margin: 0,
              textAlign: "left",
              fontWeight: "normal",
            }}
          >
            • Simsiz qulaylik: Hech qanday kabellarsiz, shunchaki tanlang va
            yuboring.
          </h2>

          <h2
            style={{
              color: "rgb(3, 31, 173)",
              fontSize: "20px",
              lineHeight: 1.6,
              borderRadius: "16px",
              backgroundColor: "white",
              padding: "20px 22px",
              margin: 0,
              textAlign: "left",
              fontWeight: "normal",
            }}
          >
            • Mukammal ekotizim: Barcha Galaxy qurilmalaringiz o'rtasida
            ma'lumotlarni xavfsiz va tez uzating.
          </h2>
        </div>
      </section>

      <section style={{ background: "#050505", height: "100dvh" }}>
        <div style={{ display: "flex", gap: "130px" }}>
          <div
            id="Smarthingiki"
            style={{
              border: "1px ",
              overflow: "hidden",
              width: "750px",
              position: "relative",
              top: "30px",
              borderRadius: "100px",
              borderTopLeftRadius: "0%",
              borderBottomRightRadius: "0%",
              marginLeft: "40px",
            }}
          >
            <Image src={SmartThings} alt="fee" />
          </div>
          <div
            id="textsamsungbir"
            style={{
              flex: "0 0 42%",
              color: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h1 style={{ fontSize: "50px" }}>
              Samsung SmartThings Bilan Tanishing
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
              Samsung SmartThings — bu telefon, televizor va uy jihozlarini{" "}
              bitta ilovada boshqarish imkonini beruvchi platformadir. U
              qurilmalarni avtomatik bog‘laydi, kundalik vazifalarni
              avtomatlashtiradi va ularning holatini real vaqtda kuzatadi.{" "}
              Maqsad — aqlli uyni sodda boshqarish va hayotingizni yanada qulay{" "}
              qilish.
            </p>
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
                SmartThings Ko'rib chiqish →
              </button>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          position: "relative",
          overflow: "hidden",
          background: `
            radial-gradient(900px 600px at 30% 20%, rgba(0,85,255,0.12), transparent 60%),
            radial-gradient(700px 500px at 80% 80%, rgba(20,40,160,0.10), transparent 60%),
            linear-gradient(180deg, #050505 0%, #0a0a20 50%, #050505 100%)
          `,
          padding: "clamp(80px,10vw,140px) 24px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "8%",
            left: "3%",
            width: "450px",
            height: "450px",
            borderRadius: "50%",
            background: "rgba(0,85,255,0.07)",
            filter: "blur(120px)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "2%",
            right: "8%",
            width: "380px",
            height: "380px",
            borderRadius: "50%",
            background: "rgba(20,40,160,0.06)",
            filter: "blur(100px)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: "1180px",
            margin: "0 auto",
            position: "relative",
          }}
        >
          <div
            style={{
              textAlign: "center",
              marginBottom: "clamp(50px,7vw,80px)",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(34px,5vw,56px)",
                fontWeight: 800,
                lineHeight: 1.08,
                margin: 0,
                letterSpacing: "-1px",
              }}
            >
              Galaxy AI orqali SmartThings bilan Ekotizimni Boshqara olasiz
            </h2>
            <p
              style={{
                fontSize: "clamp(16px,2vw,19px)",
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.65)",
                maxWidth: "720px",
                margin: "16px auto 0",
              }}
            >
              Galaxy AI va SmartThings — bir-birini to'ldiruvchi ikki kuch.
              Galaxy AI ma'lumotlarni tahlil qiladi va aqlli qarorlar qabul
              qiladi, SmartThings esa bu qarorlarni uy jihozlaringizga
              yetkazadi. Telefon, TV, soat va maishiy texnika — barchasi bir
              tizimda, sun'iy intellekt bilan boshqariladi.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: "28px",
              marginBottom: "clamp(50px,7vw,80px)",
            }}
          >
            {[
              {
                icons: [<FaMobileScreenButton />, <FaBrain />, <FaClock />],
                title: "Mobil & Soat",
                desc: "Galaxy AI sog'lig'ingizni real vaqtda tahlil qiladi, uyqu rejimingizni optimallashtiradi va mashg'ulotlaringiz bo'yicha shaxsiy maslahatlar beradi.",
                features: [
                  "AI sog'liq tahlili",
                  "Real vaqtda tarjima",
                  "Aqlli bildirishnomalar",
                ],
              },
              {
                icons: [<FaHeadphones />, <FaBrain />, <FaTv />],
                title: "Quloqchin & TV",
                desc: "AI ovozni atrof-muhitga moslaydi, qurilmalar o'rtasida avtomatik ulanishni ta'minlaydi va kinoteatr sifatidagi tovush tajribasini yaratadi.",
                features: ["360 Audio", "Auto Switch", "AI sound optimization"],
              },
              {
                icons: [<FaHome />, <FaBrain />, <FaMicrochip />],
                title: "Aqlli Uy",
                desc: "SmartThings AI energiya sarfini kuzatadi, kunlik rejimlarni avtomatlashtiradi va uy jihozlaringizni sizning odatlaringizga moslab boshqaradi.",
                features: [
                  "Energiya optimizatsiyasi",
                  "Avtomatik rejimlar",
                  "AI sensorlar",
                ],
              },
            ].map((e, ee) => (
              <div
                key={e.title}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow =
                    "0 24px 60px rgba(0,85,255,0.25)";
                  e.currentTarget.style.borderColor = "rgba(0,85,255,0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 30px rgba(0,0,0,0.3)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                }}
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "28px",
                  padding: "34px 28px 28px",
                  backdropFilter: "blur(12px)",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                  transition:
                    "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "12px",
                    fontSize: "26px",
                    color: "#4A8BFF",
                    marginBottom: "22px",
                  }}
                >
                  {e.icons.map((icon, i) => (
                    <span key={i}>
                      {i === 1 ? (
                        <span
                          style={{
                            display: "inline-flex",
                            width: "48px",
                            height: "48px",
                            borderRadius: "50%",
                            background:
                              "linear-gradient(135deg, #0055FF, #1428A0)",
                            color: "#fff",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "22px",
                            boxShadow: "0 0 20px rgba(0,85,255,0.3)",
                          }}
                        >
                          {icon}
                        </span>
                      ) : (
                        <span
                          style={{
                            display: "inline-flex",
                            width: "44px",
                            height: "44px",
                            borderRadius: "14px",
                            background: "rgba(0,85,255,0.1)",
                            color: "#4A8BFF",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "20px",
                          }}
                        >
                          {icon}
                        </span>
                      )}
                    </span>
                  ))}
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "6px",
                    marginBottom: "20px",
                  }}
                >
                  <span
                    style={{
                      flex: 1,
                      height: "2px",
                      background:
                        "linear-gradient(90deg, transparent, rgba(0,85,255,0.3), transparent)",
                    }}
                  />
                  <FaBoltLightning
                    style={{ color: "#4A8BFF", fontSize: "18px" }}
                  />
                  <span
                    style={{
                      flex: 1,
                      height: "2px",
                      background:
                        "linear-gradient(90deg, transparent, rgba(0,85,255,0.3), transparent)",
                    }}
                  />
                </div>

                <h3
                  style={{
                    fontSize: "22px",
                    fontWeight: 700,
                    margin: "0 0 10px",
                    textAlign: "center",
                  }}
                >
                  {e.title}
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: 1.7,
                    color: "rgba(255,255,255,0.6)",
                    margin: "0 0 18px",
                    textAlign: "center",
                  }}
                >
                  {e.desc}
                </p>

                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "grid",
                    gap: "8px",
                  }}
                >
                  {e.features.map((f) => (
                    <li
                      key={f}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        fontSize: "13px",
                        color: "rgba(255,255,255,0.5)",
                      }}
                    >
                      <span
                        style={{
                          width: "6px",
                          height: "6px",
                          borderRadius: "50%",
                          background: "#4A8BFF",
                          flexShrink: 0,
                        }}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center" }}>
            <button
              onClick={() => router.push("./components/Galaxyai")}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow =
                  "0 16px 40px rgba(0,85,255,0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "none";
              }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                background: "linear-gradient(135deg, #0055FF, #1428A0)",
                color: "#fff",
                border: "none",
                borderRadius: "999px",
                padding: "16px 32px",
                fontSize: "16px",
                fontWeight: 700,
                cursor: "pointer",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
            >
              Galaxy AI ni kashf eting <FaArrowRight />
            </button>
          </div>
        </div>
      </section>

      <section
        style={{
          padding: "96px 24px",
          background: "#050505",
          height: "100dvh",
        }}
      >
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
                    loading="lazy"
                    src={p.img}
                    alt={p.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 624px"
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

      <section
        style={{
          padding: "96px 24px",
          background: "#050505",
          height: "110dvh",
        }}
      >
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
