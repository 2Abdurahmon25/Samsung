"use client";

import Image from "next/image";
import {
  FaArrowRight,
  FaCheck,
  FaLightbulb,
  FaLeaf,
  FaUsers,
  FaNetworkWired,
} from "react-icons/fa6";
import {
  FaMobileScreenButton,
  FaHouse,
  FaBrain,
  FaBolt,
  FaCamera,
  FaBatteryFull,
  FaTv,
  FaLaptop,
  FaClock,
  FaHeadphones,
  FaCloud,
  FaShieldHalved,
} from "react-icons/fa6";
import Samsung1 from "../../../images/SamsungHome.png";
import AboutHeroHQ from "../../../images/AboutHero_HQ.jpg";
import AboutHeroDevices from "../../../images/AboutHero_Devices.jpg";
import AboutHeroTech from "../../../images/AboutHero_Tech.jpg";
import SamsungNavlogo from "../../../images/samsungnavlogo.png";
import AboutMissionHome from "../../../images/AboutMission_Home.jpg";
import AboutMissionPeople from "../../../images/AboutMission_People.jpg";
import AboutFutureAppliances from "../../../images/AboutFuture_Appliances.jpg";
import AboutElectronics from "../../../images/SamsungHome.png";
import Aboutbrand from "../../../images/AboutBrand.png";
import AboutMobile from "../../../images/AboutMobile.png";
import AboutTech from "../../../images/AboutTech.png";
import AboutAI from "../../../images/AboutAI.png";
const BLUE = "#1428A0";
const BLUE_SOFT = "#3b5bdb";
const BLUE_LIGHT = "#9db4ff";
const INK = "#0b1020";
const MUTED = "#5b6478";

export default function AboutUs() {
  const eyebrow = {
    display: "inline-block",
    fontSize: "13px",
    fontWeight: 700,
    letterSpacing: "3px",
    textTransform: "uppercase",
    color: BLUE,
    marginBottom: "14px",
  };

  const timeline = [
    {
      year: "1938",
      title: "Samsung asos solindi",
      desc: "Byung-chul Lee tomonidan Koreyada kichik savdo korxonasi sifatida tashkil etildi.",
      img: SamsungNavlogo,
    },
    {
      year: "1969",
      title: "Elektronika davri boshlandi",
      desc: "Samsung Electronics tashkil topdi va televizor, radio hamda maishiy texnikalar ishlab chiqara boshladi.",
      img: AboutElectronics,
    },
    {
      year: "1990",
      title: "Global brendga aylanish",
      desc: "Kompyuter, yarimo'tkazgich va mobil texnologiyalarga sarmoya kiritildi.",
      img: Aboutbrand,
    },
    {
      year: "2000",
      title: "Mobil inqilob",
      desc: "Galaxy telefonlari va smartfonlar bilan dunyo bo'ylab mijozlarga yetib bordi.",
      img: AboutMobile,
    },
    {
      year: "Bugun",
      title: "Dunyoning yetakchi brendi",
      desc: "AI, ekotizim va barqaror texnologiyalar orqali kelajakni shakllantiryapti.",
      img: AboutTech,
    },
  ];

  const pillars = [
    {
      icon: <FaLightbulb />,
      title: "Innovatsiya",
      desc: "Har kuni yangi g'oyalar bilan texnologiyani oldinga suramiz.",
    },
    {
      icon: <FaUsers />,
      title: "Inson markazli dizayn",
      desc: "Mahsulotlar inson ehtiyojidan kelib chiqib yaratiladi.",
    },
    {
      icon: <FaLeaf />,
      title: "Barqarorlik",
      desc: "Kelajak avlodlar uchun toza va energiya tejamkor yechimlar.",
    },
    {
      icon: <FaNetworkWired />,
      title: "Bog'langan tajriba",
      desc: "Barcha qurilmalar bitta ekotizimda uzviy ishlaydi.",
    },
  ];

  const missionRows = [
    {
      img: AboutAI,
      eyebrow: "Galaxy AI",
      title: "Sun'iy intellekt",
      desc: "Galaxy AI tasvirlarni qayta ishlash, real vaqtda tarjima va aqlli yordamchilar orqali kundalik hayotni soddalashtiradi. Texnologiya endi sizga xizmat qiladi.",
      points: ["Real vaqtda tarjima", "Aqlli foto-tahrir", "Shaxsiy yordamchi"],
    },
    {
      img: AboutMissionHome,
      eyebrow: "SmartThings",
      title: "Aqlli va bog'langan uy",
      desc: "SmartThings orqali uyning barcha qurilmalari bitta ilovada birlashadi. Chiroqlar, konditsionerlar va maishiy texnika bir-biri bilan muloqot qiladi.",
      points: [
        "Bir ilova — barcha qurilma",
        "Avtomatik rejimlar",
        "Masofadan boshqarish",
      ],
      reverse: true,
    },
    {
      img: AboutMissionPeople,
      eyebrow: "Insonlar uchun",
      title: "Hayotni yaxshilaydigan texnologiya",
      desc: "Bizning maqsadimiz — texnologiyani har bir inson uchun qulay, foydali va ilhomlantiruvchi qilish. Mahsulotlar odamlar orasidagi masofani yaqinlashtiradi.",
      points: ["Qulay interfeys", "Keng imkoniyatlar", "Ishonchlilik"],
    },
  ];

  const ecoItems = [
    { icon: <FaMobileScreenButton />, label: "Galaxy telefonlar" },
    { icon: <FaLaptop />, label: "Galaxy Book" },
    { icon: <FaClock />, label: "Galaxy Watch" },
    { icon: <FaHeadphones />, label: "Galaxy Buds" },
    { icon: <FaTv />, label: "Smart TV" },
    { icon: <FaHouse />, label: "SmartThings" },
    { icon: <FaCloud />, label: "Bulut xizmatlari" },
    { icon: <FaShieldHalved />, label: "One UI" },
  ];

  return (
    <div style={{ color: INK }}>
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          background:
            "radial-gradient(900px 600px at 80% 0%, rgba(20,40,160,.18), transparent 60%), linear-gradient(180deg,#0a1130 0%, #1428A0 55%, #0a1130 100%)",
          color: "#fff",
          padding: "clamp(70px,10vw,130px) 24px clamp(60px,8vw,100px)",
        }}
      >
        <div
          style={{ maxWidth: "1180px", margin: "0 auto", textAlign: "center" }}
        >
          <div>
            <span style={{ ...eyebrow, color: BLUE_LIGHT }}>Samsung</span>
            <h1
              style={{
                fontSize: "clamp(40px,7vw,78px)",
                fontWeight: 800,
                margin: "0 0 20px",
                letterSpacing: "-2px",
              }}
            >
              Biz haqimizda
            </h1>
            <p
              style={{
                fontSize: "clamp(17px,2.2vw,21px)",
                lineHeight: 1.7,
                color: "rgba(255,255,255,.82)",
                maxWidth: "760px",
                margin: "0 auto 44px",
              }}
            >
              Samsung — dunyoning yetakchi texnologiya kompaniyalaridan biri.
              Biz innovatsiya, sifat va ishonchlilik tamoyillari asosida
              insonlarning kundalik hayotini yaxshilaydigan mahsulotlar
              yaratamiz. Telefonlardan tortib aqlli uy qurilmalarigacha — har
              bir mahsulotimiz orqali kelajakni bugun yaratyapmiz.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.4fr 1fr",
              gap: "20px",
              maxWidth: "1100px",
              margin: "0 auto",
            }}
          >
            <div
              style={{
                position: "relative",
                height: "440px",
                overflow: "hidden",
                borderRadius: "20px",
              }}
            >
              <Image
                src={AboutHeroHQ}
                alt="Samsung bosh qarorgohi"
                fill
                sizes="(max-width: 900px) 100vw, 640px"
                priority
                style={{ objectFit: "cover" }}
              />
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateRows: "1fr 1fr",
                gap: "20px",
              }}
            >
              <div
                style={{
                  position: "relative",
                  height: "210px",
                  overflow: "hidden",
                  borderRadius: "20px",
                }}
              >
                <Image
                  src={AboutHeroDevices}
                  alt="Samsung qurilmalari"
                  fill
                  sizes="(max-width: 900px) 50vw, 300px"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div
                style={{
                  position: "relative",
                  height: "210px",
                  overflow: "hidden",
                  borderRadius: "20px",
                }}
              >
                <Image
                  src={AboutHeroTech}
                  alt="Zamonaviy texnologiya"
                  fill
                  sizes="(max-width: 900px) 50vw, 300px"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: "20px",
              maxWidth: "1000px",
              margin: "54px auto 0",
            }}
          >
            {[
              { b: "1938", s: "Asos solingan yil" },
              { b: "80+", s: "Mamlakatdagi mavjudligi" },
              { b: "#1", s: "Global brendlar orasida" },
            ].map((st) => (
              <div
                key={st.b}
                style={{
                  background: "rgba(255,255,255,.08)",
                  border: "1px solid rgba(255,255,255,.16)",
                  borderRadius: "20px",
                  padding: "26px 20px",
                  backdropFilter: "blur(8px)",
                }}
              >
                <b
                  style={{
                    display: "block",
                    fontSize: "clamp(26px,4vw,38px)",
                    fontWeight: 800,
                    color: "#fff",
                  }}
                >
                  {st.b}
                </b>
                <span
                  style={{ fontSize: "14px", color: "rgba(255,255,255,.7)" }}
                >
                  {st.s}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{ padding: "clamp(64px,9vw,120px) 24px", background: "#f6f8ff" }}
      >
        <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
          <div style={{ textAlign: "center" }}>
            <span style={eyebrow}>Bizning yo'limiz</span>
            <h2
              style={{
                fontSize: "clamp(30px,5vw,52px)",
                fontWeight: 800,
                lineHeight: 1.08,
                margin: "0 0 16px",
                letterSpacing: "-1px",
              }}
            >
              Samsung tarixi
            </h2>
            <p
              style={{
                fontSize: "clamp(16px,2vw,19px)",
                lineHeight: 1.7,
                color: MUTED,
                maxWidth: "720px",
                margin: "0 auto",
              }}
            >
              1938-yildan bugungi kungacha — kichik savdo korxonasidan dunyoning
              eng nufuzli texnologiya brendlaridan biriga qadar bo'lgan safar.
            </p>
          </div>

          <div
            style={{
              maxWidth: "920px",
              margin: "0 auto",
              width: "100%",
            }}
          >
            {timeline.map((t, i) => {
              return (
                <div
                  key={t.year}
                  style={{
                    position: "relative",
                    paddingBottom: i === timeline.length - 1 ? "18px" : "90px",
                  }}
                >
                  {i !== timeline.length - 1 && (
                    <svg
                      style={{
                        position: "absolute",
                        zIndex: 0,
                        left: "50%",
                        transform: "translateX(-50%)",
                        bottom: "-90px",
                        width: "90px",
                        height: "280px",
                        overflow: "visible",
                      }}
                      viewBox="0 0 90 180"
                      fill="none"
                    >
                      <path
                        d="
        M 65 0
        C 25 20, 25 55, 65 75
        C 105 95, 105 130, 65 150
        C 55 155, 50 165, 65 180
      "
                        stroke="#008c9e"
                        strokeWidth="16"
                        strokeLinecap="butt"
                      />
                    </svg>
                  )}

                  <div
                    style={{
                      position: "relative",
                      zIndex: 1,

                      background: "#fff",
                      border: "1px solid #676363",
                      borderRadius: "20px",
                      padding: "22px",
                      boxShadow: "0 20px 50px rgba(4, 6, 20, 0.1)",
                      textAlign: "left",
                      width: "100%",
                      maxWidth: "920px",
                      margin: "0 auto",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "22px",
                        fontWeight: 800,
                        color: BLUE,
                      }}
                    >
                      {t.year}
                    </div>

                    <h4 style={{ margin: "6px 0 8px", fontSize: "18px" }}>
                      {t.title}
                    </h4>

                    <p
                      style={{
                        margin: 0,
                        color: MUTED,
                        fontSize: "15px",
                        lineHeight: 1.6,
                      }}
                    >
                      {t.desc}
                    </p>

                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        aspectRatio: "16 / 9",
                        marginTop: "14px",
                        borderRadius: "14px",
                        overflow: "hidden",
                        background: "#f4f6fb",
                      }}
                    >
                      <Image
                        src={t.img}
                        alt={t.title}
                        fill
                        sizes="(max-width: 1000px) 90vw, 880px"
                        style={{
                          objectFit: "cover",
                          objectPosition: "center",
                        }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section
        style={{
          height: "70vh",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            fontWeight: "900",
            fontSize: "70px",
            paddingLeft: "50px",
            color: "black",
            paddingTop: "100px",
            position: "relative",
            display: "block",
          }}
        >
          Samsung'ni tarixidan eng mashhur
          <br />
          <span style={{ position: "relative", marginLeft: "20px" }}>
            texnologiyalari
          </span>
        </h1>
      </section>

      <section style={{ padding: "clamp(64px,9vw,120px) 24px" }}>
        <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
          {missionRows.map((m) => (
            <div
              key={m.title}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                alignItems: "center",
                gap: "clamp(40px,8vw,100px)",
                marginBottom: "clamp(60px,10vw,140px)",
              }}
            >
              <div style={{ order: m.reverse ? 2 : 1 }}>
                <span style={eyebrow}>{m.eyebrow}</span>
                <h2
                  style={{
                    fontSize: "clamp(30px,5vw,52px)",
                    fontWeight: 800,
                    lineHeight: 1.08,
                    margin: "0 0 20px",
                    letterSpacing: "-1px",
                  }}
                >
                  {m.title}
                </h2>
                <p
                  style={{
                    fontSize: "clamp(16px,2vw,19px)",
                    lineHeight: 1.7,
                    color: MUTED,
                    marginBottom: "28px",
                  }}
                >
                  {m.desc}
                </p>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "grid",
                    gap: "14px",
                  }}
                >
                  {m.points.map((p) => (
                    <li
                      key={p}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        fontSize: "15px",
                        color: "#2b3245",
                        fontWeight: 600,
                      }}
                    >
                      <FaCheck style={{ color: BLUE, fontSize: "18px" }} /> {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div
                style={{
                  position: "relative",
                  height: "400px",
                  overflow: "hidden",
                  borderRadius: "20px",
                  order: m.reverse ? 1 : 2,
                }}
              >
                <Image
                  src={m.img}
                  alt={m.title}
                  fill
                  sizes="(max-width: 900px) 100vw, 560px"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          ))}

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4,1fr)",
              gap: "22px",
              marginTop: "clamp(48px,6vw,80px)",
            }}
          >
            {pillars.map((p) => (
              <div
                key={p.title}
                style={{
                  background: "#fff",
                  border: "1px solid #eef0f6",
                  borderRadius: "22px",
                  padding: "30px 24px",
                  boxShadow: "0 18px 44px rgba(20,40,160,.08)",
                }}
              >
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "26px",
                    color: "#fff",
                    background: `linear-gradient(135deg, ${BLUE}, ${BLUE_SOFT})`,
                    marginBottom: "18px",
                  }}
                >
                  {p.icon}
                </div>
                <h4 style={{ margin: "0 0 8px", fontSize: "18px" }}>
                  {p.title}
                </h4>
                <p
                  style={{
                    margin: 0,
                    color: MUTED,
                    fontSize: "14px",
                    lineHeight: 1.6,
                  }}
                >
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{ padding: "clamp(64px,9vw,120px) 24px", background: "#f6f8ff" }}
      >
        <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
          <div style={{ textAlign: "center" }}>
            <span style={eyebrow}>Oldinga qarab</span>
            <h2
              style={{
                fontSize: "clamp(30px,5vw,52px)",
                fontWeight: 800,
                lineHeight: 1.08,
                margin: "0 0 16px",
                letterSpacing: "-1px",
              }}
            >
              Kelajak maqsadlarimiz
            </h2>
            <p
              style={{
                fontSize: "clamp(16px,2vw,19px)",
                lineHeight: 1.7,
                color: MUTED,
                maxWidth: "720px",
                margin: "0 auto",
              }}
            >
              Mobil texnologiyalar va aqlli maishiy texnika sohasida dunyoni
              o'zgartiradigan yangi yechimlar yaratishga intilamiz.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "28px",
              marginTop: "clamp(44px,6vw,72px)",
            }}
          >
            <div
              style={{
                position: "relative",
                borderRadius: "28px",
                overflow: "hidden",
                minHeight: "520px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                color: "#fff",
                boxShadow: "0 30px 70px rgba(20,40,160,.18)",
              }}
            >
              <div style={{ position: "absolute", inset: 0 }}>
                <Image
                  src={Samsung1}
                  alt="Zamonaviy Galaxy telefon"
                  fill
                  sizes="(max-width: 900px) 100vw, 560px"
                  style={{ objectFit: "cover" }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, rgba(10,17,48,.15) 0%, rgba(10,17,48,.85) 100%)",
                  }}
                />
              </div>
              <div style={{ position: "relative", padding: "34px" }}>
                <h3
                  style={{
                    fontSize: "clamp(24px,3vw,32px)",
                    fontWeight: 800,
                    margin: "0 0 14px",
                  }}
                >
                  Mobile Innovation
                </h3>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "grid",
                    gap: "10px",
                  }}
                >
                  {[
                    {
                      icon: <FaMobileScreenButton />,
                      text: "Galaxy smartfonlar",
                    },
                    { icon: <FaBrain />, text: "Foldable va Galaxy AI" },
                    { icon: <FaCamera />, text: "Kamera innovatsiyalari" },
                    { icon: <FaBolt />, text: "Yuqori unumdorlik" },
                    {
                      icon: <FaBatteryFull />,
                      text: "Batareya va quvvat yutuqlari",
                    },
                  ].map((it) => (
                    <li
                      key={it.text}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        fontSize: "15px",
                        fontWeight: 600,
                      }}
                    >
                      {it.icon} {it.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div
              style={{
                position: "relative",
                borderRadius: "28px",
                overflow: "hidden",
                minHeight: "520px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                color: "#fff",
                boxShadow: "0 30px 70px rgba(20,40,160,.18)",
              }}
            >
              <div style={{ position: "absolute", inset: 0 }}>
                <Image
                  src={AboutFutureAppliances}
                  alt="Samsung aqlli maishiy texnikasi"
                  fill
                  sizes="(max-width: 900px) 100vw, 560px"
                  style={{ objectFit: "cover" }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, rgba(10,17,48,.15) 0%, rgba(10,17,48,.85) 100%)",
                  }}
                />
              </div>
              <div style={{ position: "relative", padding: "34px" }}>
                <h3
                  style={{
                    fontSize: "clamp(24px,3vw,32px)",
                    fontWeight: 800,
                    margin: "0 0 14px",
                  }}
                >
                  Maishiy texnika
                </h3>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "grid",
                    gap: "10px",
                  }}
                >
                  {[
                    { icon: <FaHouse />, text: "Aqlli muzlatkichlar" },
                    { icon: <FaHouse />, text: "Kir yuvish mashinalari" },
                    { icon: <FaBolt />, text: "Konditsionerlar" },
                    {
                      icon: <FaNetworkWired />,
                      text: "SmartThings integratsiyasi",
                    },
                    { icon: <FaLeaf />, text: "Energiya samaradorligi" },
                  ].map((it) => (
                    <li
                      key={it.text}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        fontSize: "15px",
                        fontWeight: 600,
                      }}
                    >
                      {it.icon} {it.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
