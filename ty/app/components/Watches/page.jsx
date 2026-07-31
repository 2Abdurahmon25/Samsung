"use client";
import { useState } from "react";
import Image from "next/image";
import Watch_background from "../../../images/SamsungWatches.png";
import WatchUltra from "../../../images/WatchUltra.png";
import Watch8classic from "../../../images/Watch8Classic.png";
import Watch8 from "../../../images/Watch8.png";
import Watch7 from "../../../images/Watch7.png";
import { FaLightbulb, FaHeartPulse, FaMicrochip } from "react-icons/fa6";
import { BsStars } from "react-icons/bs";
import Link from "next/link";
import { IoShieldCheckmark, IoLocationSharp, IoSparkles } from "react-icons/io5";
import { FaHeartbeat } from "react-icons/fa";
import { FaMoon, FaUser } from "react-icons/fa6";
import { MdDirectionsRun, MdBloodtype } from "react-icons/md";
import { IoWater } from "react-icons/io5";
import faoliyatkuzatuv from "../../../images/faoliyatkuzatuv.png";
import Yurakurish from "../../../images/Yurakurish.png";
import stress from "../../../images/stress.png";
import Uyqutahlili from "../../../images/Uyqutahlili.png";
import qonkislorod from "../../../images/qonkislorod.png";
import qonbosim from "../../../images/Qonbosim.png";

export default function Watches() {
  const xususiyat = [
    {
      reactIcon: FaHeartbeat,
      h1: "Yurak So'gligi",
      desc: "Yuragingiz holatini kuzating",
      desc2: "real vaqtda doim",
      desc3: "nazorat ostida saqlang",
      image: Yurakurish,
    },
    {
      reactIcon: MdBloodtype,
      h1: "Davleniya o'lchash",
      desc: "Qon bosimingizni o‘lchang",
      desc2: "har kuni muntazam",
      desc3: "sog‘lig‘ingizni himoya qiling",
      image: qonbosim,
    },
    {
      reactIcon: FaMoon,
      h1: "Uxlash tahlili",
      desc: "Uyqu sifatini kuzating",
      desc2: "har tun batafsil",
      desc3: "yaxshiroq dam oling",
      image: Uyqutahlili,
    },
    {
      reactIcon: FaUser,
      h1: "Gormon So'gligi",
      desc: "Stress darajasini kuzating",
      desc2: "kun davomida muntazam",
      desc3: "xotirjam hayot kechiring",
      image: stress,
    },
    {
      reactIcon: MdDirectionsRun,
      h1: "Tana faoliyati",
      desc: "Faolligingizni doim kuzating",
      desc2: "kunlik maqsad bajaring",
      desc3: "sog‘lom hayot kechiring",
      image: faoliyatkuzatuv,
    },
    {
      reactIcon: IoWater,
      h1: "Qon quyuq/suyuq",
      desc: "Kislorod darajasini kuzating",
      desc2: "har doim muntazam",
      desc3: "nafasingizni nazorat qiling",
      image: qonkislorod,
    },
  ];

  const avatarGrads = [
    "linear-gradient(135deg, #3b82f6, #8b5cf6)",
    "linear-gradient(135deg, #f59e0b, #ef4444)",
    "linear-gradient(135deg, #10b981, #3b82f6)",
    "linear-gradient(135deg, #8b5cf6, #ec4899)",
    "linear-gradient(135deg, #06b6d4, #3b82f6)",
    "linear-gradient(135deg, #f43f5e, #f59e0b)",
  ];

  const reviews = [
    {
      name: "Diyorbek",
      model: "Galaxy Watch Ultra",
      image: WatchUltra,
      l: "D",
      badge: { icon: FaLightbulb, label: "3000 Nit Ekran", color: "#f3b55a" },
      text: "Ishim to'g'ridan-to'g'ri quyosh ostida. Ultra'nig 3000 nit ekrani tufayli endi soyani qidirib yurmayman — xabarnomalarni yorug'likda ham o'qiyaman.",
    },
    {
      name: "Nigora",
      model: "Galaxy Watch 8",
      image: Watch8,
      l: "N",
      badge: { icon: MdBloodtype, label: "Qon Bosimi", color: "#ff7043" },
      text: "Shifokorim qon bosimimni tez-tez tekshirishni maslahat bergan edi. Endi hafta davomida tendentsiyalarni kuzatib, qabulga hisobot bilan boraman. Klinikaga borishim 3 martadan 1 taga tushdi.",
    },
    {
      name: "Jasur",
      model: "Galaxy Watch 8 Classic",
      image: Watch8classic,
      l: "J",
      badge: { icon: FaMicrochip, label: "Aylanuvchi Bezel", color: "#d4d4d4" },
      text: "Velosipedda aylanuvchi bezeldan doim foydalanaman — qo'lqop bilan ekranni silarishdan ko'ra boshqarish ancha oson. Musiqa va navigatsiyani to'xtamasdan almashtirdim.",
    },
    {
      name: "Malika",
      model: "Galaxy Watch 7",
      image: Watch7,
      l: "M",
      badge: { icon: FaMoon, label: "Uyqu Tahlili", color: "#8b5cf6" },
      text: "Har kuni ertalab uyqu ballimga e'tibor beraman. Uxlash vaqtimni o'zgartirgach, endi ancha dam bilan uyg'onaman. Ertalabki charchoq 70% ga kamaydi.",
    },
    {
      name: "Sardor",
      model: "Galaxy Watch Ultra",
      image: WatchUltra,
      l: "S",
      badge: { icon: IoLocationSharp, label: "Dual GPS", color: "#34d399" },
      text: "Deyarli har dam olish kuni tog'ga chiqaman. Dual-frequency GPS bir necha marta noto'g'ri yo'lga tushib qolishimdan saqladi. 30 km lik marshrutda faqat 1 marta chetdalashdim.",
    },
    {
      name: "Aziz",
      model: "Galaxy Watch 8",
      image: Watch8,
      l: "A",
      badge: { icon: FaHeartbeat, label: "Heart Rate", color: "#ff5a52" },
      text: "Faoliyat kuzatuvi meni doimiylikka undadi. 3 oy davomida dam olishsiz yurak urish tezligim pasaydi. Sport zaliga borishim haftasiga 2 martadan 5 martaga ko'paydi.",
    },
  ];

  return (
    <div>
      <section
        style={{
          width: "100%",
          maxWidth: "100%",
          height: "820px",
          margin: "0 auto",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Image
          loading="lazy"
          src={Watch_background}
          alt="Samsung Watches Background"
          fill
          sizes="(max-width: 768px) 100vw, 1200px"
          style={{
            objectFit: "cover",
          }}
        />

        <div
          style={{
            position: "absolute",
            display: "flex",
            textAlign: "center",
            marginLeft: "480px",
            marginTop: "230px",
            flexDirection: "column",
            justifyContent: "center",
            color: "white",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(1.7rem, 3.2vw, 3rem)",
              fontWeight: "900",
              maxWidth: "690px",
              marginBottom: "42px",
            }}
          >
            Endi Galaxy Smart watch'lari <br /> bilan Sog'lig'ingizni tekshiring
          </h1>
          <p
            style={{
              maxWidth: "500px",
              marginLeft: "90px",
              color: "rgba(255,255,255,0.9)",
            }}
          >
            Samsung Watch bilan salomatlikni kuzatish, xabarnomalarni boshqarish
            va kundalik faoliyatni yanada osonroq qilish — barchasi bir joyda.
          </p>
          <button
            style={{
              borderRadius: "999px",
              padding: "0.8rem 1.4rem",
              background: "#ffffff",
              color: "#0f172a",
              fontWeight: 700,
              cursor: "pointer",
              boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
            }}
          >
            Batafsil ko‘rish
          </button>
        </div>
      </section>

      <section style={{ height: "100vh" }}>
        <h1 style={{ fontSize: "49px", color: "black", marginLeft: "450px" }}>
          Bizning Soatlarimiz bilan tanishing
        </h1>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto auto",
            marginLeft: "20px",
            marginTop: "5px",
          }}
        >
          {/* Card 1: Galaxy Watch Ultra */}
          <div
            style={{
              width: "810px",
              height: "365px",
              borderRadius: "20px",
              background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
              padding: "25px",
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(56, 56, 56, 0.3)",
              transition: "transform 0.3s ease",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateX(12px)";
              e.currentTarget.style.boxShadow =
                "0 30px 80px rgba(59, 130, 246, 0.3)";
              e.currentTarget.style.background =
                "linear-gradient(135deg, #2222b4 25%, #2f6bf7 75%)";
              e.currentTarget.style.border = "4px solid #ffffff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateX(0)";
              e.currentTarget.style.boxShadow =
                "0 20px 60px rgba(0, 0, 0, 0.3)";
              e.currentTarget.style.background =
                "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)";
              e.currentTarget.style.border =
                "1px solid rgba(255, 255, 255, 0.1)";
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "0",
                right: "0",
                width: "100px",
                height: "100px",
                background:
                  "radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%)",
                borderRadius: "50%",
                transform: "translate(30%, -30%)",
              }}
            ></div>
            <h3
              style={{
                fontSize: "1.7rem",
                fontWeight: "900",
                color: "#f3b55a",
                marginBottom: "15px",
                textShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
                position: "relative",
                marginLeft: "60px",
              }}
            >
              Galaxy Watch Ultra
            </h3>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "20px",
                height: "calc(100% - 80px)",
                paddingRight: "10px",
              }}
            >
              <div
                style={{
                  flex: 1,
                  maxWidth: "380px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  zIndex: 2,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontSize: "1.05rem",
                    color: "#f3b55a",
                    fontWeight: 700,
                    lineHeight: 1.4,
                  }}
                >
                  <IoShieldCheckmark style={{ flexShrink: 0 }} />
                  <span>
                    Titan ramka va mustahkam cushion dizayn bilan eng chidamli
                    tanlov
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontSize: "1.05rem",
                    color: "#f3b55a",
                    fontWeight: 700,
                    lineHeight: 1.4,
                  }}
                >
                  <FaLightbulb style={{ flexShrink: 0 }} />
                  <span>
                    3000 nit yorqinlik bilan quyosh nurida ham aniq ko‘rinadi
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontSize: "1.05rem",
                    color: "#f3b55a",
                    fontWeight: 700,
                    lineHeight: 1.4,
                  }}
                >
                  <IoLocationSharp style={{ flexShrink: 0 }} />
                  <span>
                    L1/L5 GPS bilan aniq navigatsiya va joylashuvni kuzatish
                  </span>
                </div>
                <button
                  style={{
                    marginTop: "8px",
                    maxWidth: "220px",
                    height: "54px",
                    fontSize: "1.1rem",
                    textAlign: "center",
                    color: "#111827",
                    borderRadius: "999px",
                    backgroundColor: "#f3b55a",
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                >
                  <Link href="https://www.samsung.com/us/watches/galaxy-watch-ultra/">
                    Batafsil
                  </Link>
                </button>
              </div>
              <div
                style={{
                  position: "relative",
                  width: "260px",
                  height: "260px",
                  flexShrink: 0,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  loading="lazy"
                  src={WatchUltra}
                  alt="Galaxy Watch Ultra"
                  fill
                  sizes="260px"
                  style={{
                    objectFit: "contain",
                    padding: "10px",
                    filter: "drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3))",
                    borderRadius: "30%",
                    background: "linear-gradient(315deg, #E29961, #C59629)",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Card 2: Galaxy Watch 8 Classic */}
          <div
            style={{
              width: "810px",
              height: "365px",
              borderRadius: "20px",
              background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
              padding: "25px",
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateX(-12px)";
              e.currentTarget.style.boxShadow =
                "0 30px 80px rgba(59, 130, 246, 0.3)";
              e.currentTarget.style.background =
                "linear-gradient(135deg, #2222b4 25%, #2f6bf7 75%)";
              e.currentTarget.style.border = "4px solid #ffffff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateX(0)";
              e.currentTarget.style.boxShadow =
                "0 20px 60px rgba(0, 0, 0, 0.3)";
              e.currentTarget.style.background =
                "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)";
              e.currentTarget.style.border =
                "1px solid rgba(255, 255, 255, 0.1)";
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "0",
                right: "0",
                width: "100px",
                height: "100px",
                background:
                  "radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%)",
                borderRadius: "50%",
                transform: "translate(30%, -30%)",
              }}
            ></div>
            <h3
              style={{
                fontSize: "1.7rem",
                fontWeight: "900",
                color: "#d4d4d4",
                marginBottom: "15px",
                textShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
                position: "relative",
                marginLeft: "50px",
              }}
            >
              Galaxy Watch 8 Classic
            </h3>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "20px",
                height: "calc(100% - 80px)",
                paddingRight: "10px",
              }}
            >
              <div
                style={{
                  flex: 1,
                  maxWidth: "380px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  zIndex: 2,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontSize: "1.05rem",
                    color: "#d4d4d4",
                    fontWeight: 700,
                    lineHeight: 1.4,
                  }}
                >
                  <BsStars style={{ flexShrink: 0 }} />
                  <span>
                    Rotating bezel bilan interfeysni tez va qulay boshqarish
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontSize: "1.05rem",
                    color: "#d4d4d4",
                    fontWeight: 700,
                    lineHeight: 1.4,
                  }}
                >
                  <FaMicrochip style={{ flexShrink: 0 }} />
                  <span>
                    64 GB ichki xotira bilan offline audio va xaritalar uchun
                    qulay
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontSize: "1.05rem",
                    color: "#d4d4d4",
                    fontWeight: 700,
                    lineHeight: 1.4,
                  }}
                >
                  <FaHeartPulse style={{ flexShrink: 0 }} />
                  <span>
                    Vascular load va ilg'or salomatlik algoritmlari bilan sport
                    tahlili
                  </span>
                </div>
                <button
                  style={{
                    marginTop: "8px",
                    maxWidth: "220px",
                    height: "54px",
                    fontSize: "1.1rem",
                    textAlign: "center",
                    color: "#111827",
                    borderRadius: "999px",
                    backgroundColor: "#d4d4d4",
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                >
                  <Link href="https://www.samsung.com/us/watches/galaxy-watch-ultra/">
                    Batafsil
                  </Link>
                </button>
              </div>

              <div
                style={{
                  position: "relative",
                  width: "260px",
                  height: "260px",
                  flexShrink: 0,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  loading="lazy"
                  src={Watch8classic}
                  alt="Galaxy Watch 8 Classic"
                  fill
                  sizes="260px"
                  style={{
                    objectFit: "contain",
                    padding: "10px",
                    borderRadius: "30%",
                    filter: "drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3))",
                    background: "linear-gradient(315deg, #666666, #898989)",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Card 3: Galaxy Watch 8 */}
          <div
            style={{
              width: "810px",
              height: "365px",
              borderRadius: "20px",
              background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
              padding: "25px",
              position: "relative",
              marginTop: "1px",
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateX(12px)";
              e.currentTarget.style.boxShadow =
                "0 30px 80px rgba(59, 130, 246, 0.3)";
              e.currentTarget.style.background =
                "linear-gradient(135deg, #2222b4 25%, #2f6bf7 75%)";
              e.currentTarget.style.border = "4px solid #ffffff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateX(0)";
              e.currentTarget.style.boxShadow =
                "0 20px 60px rgba(0, 0, 0, 0.3)";
              e.currentTarget.style.background =
                "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)";
              e.currentTarget.style.border =
                "1px solid rgba(255, 255, 255, 0.1)";
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "0",
                right: "0",
                width: "100px",
                height: "100px",
                background:
                  "radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%)",
                borderRadius: "50%",
                transform: "translate(30%, -30%)",
              }}
            ></div>
            <h3
              style={{
                fontSize: "1.4rem",
                fontWeight: "900",
                color: "#d4d4d4",
                marginBottom: "15px",
                textShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
                position: "relative",
                marginLeft: "90px",
              }}
            >
              Galaxy Watch 8
            </h3>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "20px",
                height: "calc(100% - 80px)",
                paddingRight: "10px",
              }}
            >
              <div
                style={{
                  flex: 1,
                  maxWidth: "380px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  zIndex: 2,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontSize: "1.05rem",
                    color: "#d4d4d4",
                    fontWeight: 700,
                    lineHeight: 1.4,
                  }}
                >
                  <FaLightbulb style={{ flexShrink: 0 }} />
                  <span>
                    3000 nit yorqinlik bilan kunduzgi quyoshda ham oson o‘qiladi
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontSize: "1.05rem",
                    color: "#d4d4d4",
                    fontWeight: 700,
                    lineHeight: 1.4,
                  }}
                >
                  <FaHeartPulse style={{ flexShrink: 0 }} />
                  <span>
                    Qon tomir yuk indeksi va stress monitoringi bilan sog‘liq
                    kuzatuvi kuchayadi
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontSize: "1.05rem",
                    color: "#d4d4d4",
                    fontWeight: 700,
                    lineHeight: 1.4,
                  }}
                >
                  <IoSparkles style={{ flexShrink: 0 }} />
                  <span>
                    Gemini va One UI bilan kundalik yordami yanada aqlli bo‘ladi
                  </span>
                </div>
                <button
                  style={{
                    marginTop: "8px",
                    maxWidth: "220px",
                    height: "54px",
                    fontSize: "1.1rem",
                    textAlign: "center",
                    color: "#111827",
                    borderRadius: "999px",
                    backgroundColor: "#d4d4d4",
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                >
                  <Link href="https://www.samsung.com/us/watches/galaxy-watch-ultra/">
                    Batafsil
                  </Link>
                </button>
              </div>

              <div
                style={{
                  position: "relative",
                  width: "260px",
                  height: "260px",
                  flexShrink: 0,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  loading="lazy"
                  src={Watch8}
                  alt="Galaxy Watch 8"
                  fill
                  sizes="260px"
                  style={{
                    objectFit: "contain",
                    padding: "10px",
                    borderRadius: "30%",
                    filter: "drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3))",
                    background: "linear-gradient(315deg, #666666, #898989)",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Card 4: Galaxy Watch 7 */}
          <div
            style={{
              width: "810px",
              height: "365px",
              borderRadius: "20px",
              background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
              padding: "25px",
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              marginTop: "1px",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateX(-12px)";
              e.currentTarget.style.boxShadow =
                "0 30px 80px rgba(59, 130, 246, 0.3)";
              e.currentTarget.style.background =
                "linear-gradient(135deg, #2222b4 25%, #2f6bf7 75%)";
              e.currentTarget.style.border = "4px solid #ffffff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateX(0)";
              e.currentTarget.style.boxShadow =
                "0 20px 60px rgba(0, 0, 0, 0.3)";
              e.currentTarget.style.background =
                "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)";
              e.currentTarget.style.border =
                "1px solid rgba(255, 255, 255, 0.1)";
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "0",
                right: "0",
                width: "100px",
                height: "100px",
                background:
                  "radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%)",
                borderRadius: "50%",
                transform: "translate(30%, -30%)",
              }}
            ></div>
            <h3
              style={{
                fontSize: "1.4rem",
                fontWeight: "900",
                color: "#7eea1b",
                marginBottom: "15px",
                textShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
                position: "relative",
                marginLeft: "90px",
              }}
            >
              Galaxy Watch 7
            </h3>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "20px",
                height: "calc(100% - 80px)",
                paddingRight: "10px",
              }}
            >
              <div
                style={{
                  flex: 1,
                  maxWidth: "380px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  zIndex: 2,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontSize: "1.05rem",
                    color: "#7eea1b",
                    fontWeight: 700,
                    lineHeight: 1.4,
                  }}
                >
                  <BsStars style={{ flexShrink: 0 }} />
                  <span>
                    An'anaviy yumaloq dizayn va klassik ko‘rinishi bilan qulay
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontSize: "1.05rem",
                    color: "#7eea1b",
                    fontWeight: 700,
                    lineHeight: 1.4,
                  }}
                >
                  <FaHeartPulse style={{ flexShrink: 0 }} />
                  <span>
                    Ilg'or sensorlar va har kungi salomatlik kuzatuvi
                  </span>
                </div>
                <button
                  style={{
                    marginTop: "8px",
                    maxWidth: "220px",
                    height: "54px",
                    fontSize: "1.1rem",
                    textAlign: "center",
                    color: "#111827",
                    borderRadius: "999px",
                    backgroundColor: "#7eea1b",
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                >
                  <Link href="https://www.samsung.com/us/watches/galaxy-watch7/">
                    Batafsil
                  </Link>
                </button>
              </div>

              <div
                style={{
                  position: "relative",
                  width: "260px",
                  height: "260px",
                  flexShrink: 0,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  loading="lazy"
                  src={Watch7}
                  alt="Galaxy Watch 7"
                  fill
                  sizes="260px"
                  style={{
                    objectFit: "contain",
                    padding: "10px",
                    borderRadius: "30%",
                    filter: "drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3))",
                    background: "linear-gradient(315deg, #519013, #7eea1b)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}