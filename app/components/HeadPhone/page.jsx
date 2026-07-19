import Image from "next/image";
import {
  FaHeadphones,
  FaVolumeHigh,
  FaMicrophone,
  FaBatteryFull,
  FaCheck,
  FaArrowRight,
  FaWifi,
  FaBrain,
  FaLanguage,
  FaVolumeXmark,
  FaMusic,
  FaEarListen,
  FaMobileScreen,
  FaLaptop,
  FaTabletScreenButton,
  FaLeaf,
  FaHand,
  FaFeather,
  FaCouch,
  FaStar,
} from "react-icons/fa6";
import { IoSparkles, IoMoon, IoSunny } from "react-icons/io5";
import Samsungbuds from "../../../images/Samsungbuds.png";
import Galaxyai1 from "../../../images/Galaxyai1.png";

const BLUE = "#1428A0";
const DARK = "#0B0B0B";

const featuredIndex = 0;

export default function HeadPhone() {
  const models = [
    {
      name: "Galaxy Buds3 Pro",
      price: "$249",
      tag: "Eng yuqori sifat",
      features: [
        "2 tomonli kengaytirilgan dinamik",
        "Adaptiv ANC + Ovoz aniqlash",
        "IP57 suv va changga chidamli",
        "6 soat (ANC bilan) / 30 soat umumiy",
        "Galaxy AI bilan ishlaydi",
        "Ultra High Quality Audio (24bit/96kHz)",
      ],
      color: "linear-gradient(135deg, #c0c0c0, #e8e8e8)",
    },
    {
      name: "Galaxy Buds3",
      price: "$179",
      tag: "Kundalik foydalanish",
      features: [
        "Ochiq turdagi qulay dizayn",
        "Faol shovqini bekor qilish (ANC)",
        "IP57 suv va changga chidamli",
        "5 soat (ANC bilan) / 30 soat umumiy",
        "Galaxy AI funksiyalari",
        "Zamonaviy Blade dizayn",
      ],
      color: "linear-gradient(135deg, #ffffff, #e0e0e0)",
    },
    {
      name: "Galaxy Buds FE",
      price: "$99",
      tag: "Eng yaxshi narx",
      features: [
        "Kanal tipidagi ergonomic dizayn",
        "Faol shovqini bekor qilish (ANC)",
        "Kuchli bass va aniq tovush",
        "6 soat (ANC bilan) / 30 soat umumiy",
        "IPX2 suvga chidamli",
        "Qulay quloq qanotlari",
      ],
      color: "linear-gradient(135deg, #2c2c2c, #444)",
    },
  ];

  const soundFeatures = [
    {
      icon: <FaVolumeHigh />,
      title: "Immersiv tovush",
      desc: "Atrofingizni qoplaydigan boy, boyitilgan tovush tajribasi. Har bir nota aniq va tiniq eshitiladi.",
    },
    {
      icon: <FaMusic />,
      title: "Kuchli bass",
      desc: "Past chastotali tovushlar chuqur va kuchli seziladi. Musiqa sevuvchilar uchun mukammal tanlov.",
    },
    {
      icon: <FaMicrophone />,
      title: "Tiniq ovoz",
      desc: "Qo'ng'iroqlarda va ovozli xabarlarda hamkoringizning ovozi aniq va tiniq eshitiladi.",
    },
    {
      icon: <FaEarListen />,
      title: "Adaptiv tovush",
      desc: "Tizim atrof-muhitga qarab ovozni avtomatik sozlaydi. Har bir vaziyat uchun optimal eshitish.",
    },
  ];

  const aiFeatures = [
    {
      icon: <FaLanguage />,
      title: "Real vaqtda tarjima",
      desc: "Galaxy AI bilan suhbatdoshingizning gapini darhol tarjima qiling. 10+ tilda ishlaydi.",
    },
    {
      icon: <IoMoon />,
      title: "Intellektual shovqin boshqaruvi",
      desc: "Galaxy AI atrofdagi ovozlarni tahlil qilib, kerakli tovushlarni o'tkazib, keraksizlarini bloklaydi.",
    },
    {
      icon: <IoSparkles />,
      title: "Shaxsiy sozlash",
      desc: "AI sizning eshitish odatlaringizni o'rganadi va vaqt o'tishi bilan tovushni shaxsiylashtiradi.",
    },
    {
      icon: <FaMicrophone />,
      title: "Ovozli buyruqlar",
      desc: "Quloqchingizga gapiring — musiqa qo'shing, qo'ng'iroq qiling yoki sozlamalarni o'zgartiring.",
    },
  ];

  const comfortFeatures = [
    {
      icon: <FaHand />,
      title: "Ergonomic dizayn",
      desc: "Quloq shakliga mos mukammal moslashuv. Uzoq vaqt davomida qulay va yoqimli.",
    },
    {
      icon: <FaFeather />,
      title: "Yengil tuzilish",
      desc: "Bitta quloqchining og'irligi atigi 4-5 grammdan iborat. Uni taqganingizni sezmaysiz.",
    },
    {
      icon: <FaCouch />,
      title: "Qulay ilish",
      desc: "Turli xil quloq o'lchamlari uchun mos keladigan silikon qanotlar va paxta uchlari.",
    },
    {
      icon: <FaLeaf />,
      title: "Uzoq tinglash",
      desc: "Bir martalik zaryadda 6-8 soatgacha tinglash imkoniyati. Zaryad quvvati bilan 30 soatgacha.",
    },
  ];

  const batteryData = [
    { label: "Quloqchilar", value: "6-8", unit: "soat", sub: "ANC bilan" },
    { label: "Jami vaqt", value: "30", unit: "soat", sub: "Zaryad bilan" },
    { label: "Tez zaryad", value: "5", unit: "daqiqa", sub: "1 soat tinglash" },
    {
      label: "Zaryad quti",
      value: "515",
      unit: "mAh",
      sub: "Qo'shimcha quvvat",
    },
  ];

  const sectionStyle = {
    padding: "clamp(80px,10vw,140px) 24px",
    background: DARK,
  };

  return (
    <div style={{ background: DARK, color: "#fff", fontFamily: "inherit" }}>
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: `radial-gradient(900px 600px at 50% 30%, rgba(20,40,160,0.35), transparent 60%),
                       radial-gradient(600px 400px at 80% 80%, rgba(100,60,200,0.15), transparent 60%),
                       linear-gradient(180deg, #0B0B0B 0%, #050505 100%)`,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "10%",
            left: "5%",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "rgba(20,40,160,0.08)",
            filter: "blur(120px)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "10%",
            right: "10%",
            width: "350px",
            height: "350px",
            borderRadius: "50%",
            background: "rgba(100,60,200,0.06)",
            filter: "blur(100px)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            width: "100%",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "60px",
            alignItems: "center",
            padding: "120px 24px 80px",
          }}
        >
          <div>
            <span
              style={{
                display: "inline-block",
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "#9db4ff",
                marginBottom: "16px",
              }}
            >
              Galaxy Buds
            </span>
            <h1
              style={{
                fontSize: "clamp(42px, 6vw, 72px)",
                lineHeight: 1.05,
                fontWeight: 800,
                margin: "0 0 24px",
                letterSpacing: "-1px",
              }}
            >
              Galaxy Buds
            </h1>
            <p
              style={{
                fontSize: "clamp(16px, 2vw, 19px)",
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.65)",
                maxWidth: "480px",
                marginBottom: "36px",
              }}
            >
              Galaxy Buds — bu immersive tovush, qulay dizayn va aqlli
              funksiyalarning mukammal uyg'unligi. Galaxy AI bilan jihozlangan
              quloqchilar hayotingizdagi har bir lahzani boyitadi.
            </p>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <a
                href="#products"
                style={{
                  background: BLUE,
                  color: "#fff",
                  border: "none",
                  borderRadius: "999px",
                  padding: "16px 32px",
                  fontSize: "16px",
                  fontWeight: 600,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  textDecoration: "none",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
              >
                Mahsulotlarni ko'rish <FaArrowRight />
              </a>
              <a
                href="#sound"
                style={{
                  background: "transparent",
                  color: "#fff",
                  border: "1px solid rgba(255,255,255,0.25)",
                  borderRadius: "999px",
                  padding: "16px 32px",
                  fontSize: "16px",
                  fontWeight: 600,
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                }}
              >
                Tovush sifati
              </a>
            </div>
          </div>
          <div
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "500px",
                height: "500px",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle at 50% 40%, rgba(20,40,160,0.4), rgba(11,11,11,0.9))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 40px 100px rgba(20,40,160,0.3)",
              }}
            >
              <Image
                loading="eager"
                src={Samsungbuds}
                alt="Samsung Galaxy Buds3 Pro"
                width={400}
                height={400}
                priority
                style={{
                  objectFit: "contain",
                  position: "relative",
                  zIndex: 1,
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <section id="products" style={sectionStyle}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2
              style={{
                fontSize: "clamp(30px, 5vw, 52px)",
                fontWeight: 800,
                margin: "0 0 16px",
                letterSpacing: "-1px",
              }}
            >
              O'zingizga mos Galaxy Buds'ni tanlang
            </h2>
            <p
              style={{
                fontSize: "clamp(15px, 2vw, 18px)",
                color: "rgba(255,255,255,0.55)",
                maxWidth: "600px",
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              Har bir model o'ziga xos xususiyatlarga ega. Qaysi biri sizga mos
              kelishini bilib oling.
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "28px",
            }}
          >
            {models.map((m, i) => (
              <div
                key={m.name}
                style={{
                  background:
                    i === featuredIndex
                      ? "linear-gradient(180deg, rgba(20,40,160,0.12), rgba(20,40,160,0.04))"
                      : "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))",
                  border: `1px solid ${i === featuredIndex ? "rgba(74,139,255,0.5)" : "rgba(255,255,255,0.08)"}`,
                  borderRadius: "28px",
                  padding: "36px 28px",
                  backdropFilter: "blur(12px)",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                  transition: "all 0.35s ease-in-out",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "20px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "11px",
                      fontWeight: 700,
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      color: "#4A8BFF",
                      background: "rgba(74,139,255,0.12)",
                      padding: "6px 12px",
                      borderRadius: "999px",
                    }}
                  >
                    {m.tag}
                  </span>
                  <FaStar
                    style={{
                      color: i === 0 ? "#FFD700" : "rgba(255,255,255,0.2)",
                      fontSize: "18px",
                    }}
                  />
                </div>
                <div style={{ textAlign: "center", padding: "30px 0" }}>
                  <div
                    style={{
                      width: "120px",
                      height: "120px",
                      borderRadius: "50%",
                      background: m.color,
                      margin: "0 auto 20px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                    }}
                  >
                    <FaHeadphones
                      style={{
                        fontSize: "48px",
                        color: i === 2 ? "#fff" : "#333",
                      }}
                    />
                  </div>
                  <h3
                    style={{
                      fontSize: "22px",
                      fontWeight: 700,
                      margin: "0 0 8px",
                    }}
                  >
                    {m.name}
                  </h3>
                  <p
                    style={{
                      fontSize: "28px",
                      fontWeight: 800,
                      color: "#4A8BFF",
                      margin: 0,
                    }}
                  >
                    {m.price}
                  </p>
                </div>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: "24px 0 0",
                    display: "grid",
                    gap: "12px",
                  }}
                >
                  {m.features.map((f) => (
                    <li
                      key={f}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        fontSize: "14px",
                        color: "rgba(255,255,255,0.65)",
                      }}
                    >
                      <FaCheck
                        style={{
                          color: "#4A8BFF",
                          fontSize: "14px",
                          flexShrink: 0,
                        }}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#compare"
                  style={{
                    display: "inline-flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    marginTop: "28px",
                    padding: "14px",
                    borderRadius: "999px",
                    border:
                      i === featuredIndex
                        ? "none"
                        : "1px solid rgba(255,255,255,0.2)",
                    background: i === featuredIndex ? BLUE : "transparent",
                    color: "#fff",
                    fontSize: "15px",
                    fontWeight: 600,
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                  }}
                >
                  Batafsil ma'lumot
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="sound"
        style={{
          position: "relative",
          overflow: "hidden",
          background: `radial-gradient(800px 500px at 30% 20%, rgba(0,85,255,0.1), transparent 60%), linear-gradient(180deg, #050505 0%, #0a0a20 50%, #050505 100%)`,
          padding: "clamp(80px,10vw,140px) 24px",
        }}
      >
        <div
          style={{ maxWidth: "1280px", margin: "0 auto", position: "relative" }}
        >
          <div
            style={{
              textAlign: "center",
              marginBottom: "clamp(50px,7vw,80px)",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(32px, 5vw, 56px)",
                fontWeight: 800,
                lineHeight: 1.08,
                margin: "0 0 16px",
                letterSpacing: "-1px",
              }}
            >
              Galaxy Buds orqali
              <br />
              mukammal eshiting
            </h2>
            <p
              style={{
                fontSize: "clamp(15px, 2vw, 18px)",
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.55)",
                maxWidth: "640px",
                margin: "0 auto",
              }}
            >
              Galaxy Buds dagi ilg'or akustik tizim sizga studiya sifatidagi
              tovushni qayerda bo'lsangiz ham taqdim etadi.
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "24px",
            }}
          >
            {soundFeatures.map((f) => (
              <div
                key={f.title}
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "24px",
                  padding: "32px 24px",
                  backdropFilter: "blur(12px)",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                  transition: "all 0.35s ease-in-out",
                }}
              >
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "16px",
                    background: "rgba(74,139,255,0.12)",
                    color: "#4A8BFF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "24px",
                    marginBottom: "20px",
                  }}
                >
                  {f.icon}
                </div>
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: 700,
                    margin: "0 0 10px",
                  }}
                >
                  {f.title}
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: 1.7,
                    color: "rgba(255,255,255,0.55)",
                    margin: 0,
                  }}
                >
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={sectionStyle}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "clamp(40px, 8vw, 100px)",
              alignItems: "center",
            }}
          >
            <div style={{ position: "relative" }}>
              <div
                style={{
                  position: "relative",
                  borderRadius: "28px",
                  overflow: "hidden",
                  boxShadow: "0 30px 80px rgba(20,40,160,0.25)",
                }}
              >
                <Image
                  loading="lazy"
                  src={Galaxyai1}
                  alt="Galaxy AI bilan Galaxy Buds"
                  width={600}
                  height={400}
                  sizes="(max-width: 900px) 100vw, 600px"
                  style={{ objectFit: "cover", width: "100%", height: "auto" }}
                />
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "-20px",
                  right: "-20px",
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #0055FF, #1428A0)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 10px 30px rgba(0,85,255,0.4)",
                }}
              >
                <FaBrain style={{ fontSize: "32px", color: "#fff" }} />
              </div>
            </div>
            <div>
              <span
                style={{
                  display: "inline-block",
                  fontSize: "13px",
                  fontWeight: 700,
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  color: "#4A8BFF",
                  marginBottom: "14px",
                }}
              >
                Galaxy AI
              </span>
              <h2
                style={{
                  fontSize: "clamp(28px, 4vw, 44px)",
                  fontWeight: 800,
                  lineHeight: 1.1,
                  margin: "0 0 20px",
                  letterSpacing: "-0.5px",
                }}
              >
                Galaxy Buds & Galaxy
                <br />
                Smartphone bilan
                <br />
                hamkorlik
              </h2>
              <p
                style={{
                  fontSize: "clamp(15px, 2vw, 18px)",
                  lineHeight: 1.7,
                  color: "rgba(255,255,255,0.6)",
                  marginBottom: "32px",
                }}
              >
                Galaxy AI sizning Galaxy smartfoningiz va quloqchilaringiz
                orasida uzluksiz aloqa o'rnatadi. Sun'iy intellekt kuchida
                tovushni boshqaring, tarjima qiling va yangi tajribaga ega
                bo'ling.
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "20px",
                }}
              >
                {aiFeatures.map((f) => (
                  <div
                    key={f.title}
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: "18px",
                      padding: "22px",
                    }}
                  >
                    <div
                      style={{
                        color: "#4A8BFF",
                        fontSize: "22px",
                        marginBottom: "12px",
                      }}
                    >
                      {f.icon}
                    </div>
                    <h4
                      style={{
                        fontSize: "16px",
                        fontWeight: 700,
                        margin: "0 0 8px",
                      }}
                    >
                      {f.title}
                    </h4>
                    <p
                      style={{
                        fontSize: "13px",
                        lineHeight: 1.6,
                        color: "rgba(255,255,255,0.5)",
                        margin: 0,
                      }}
                    >
                      {f.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          position: "relative",
          overflow: "hidden",
          background: `radial-gradient(1000px 600px at 50% 0%, rgba(20,40,160,0.12), transparent 60%), linear-gradient(180deg, #050505 0%, #0a0a18 50%, #050505 100%)`,
          padding: "clamp(80px,10vw,140px) 24px",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "clamp(40px, 8vw, 100px)",
              alignItems: "center",
            }}
          >
            <div>
              <h2
                style={{
                  fontSize: "clamp(28px, 4vw, 48px)",
                  fontWeight: 800,
                  lineHeight: 1.1,
                  margin: "0 0 20px",
                  letterSpacing: "-0.5px",
                }}
              >
                Shovqinni yopish qobiliyati
              </h2>
              <p
                style={{
                  fontSize: "clamp(15px, 2vw, 18px)",
                  lineHeight: 1.7,
                  color: "rgba(255,255,255,0.6)",
                  marginBottom: "32px",
                }}
              >
                Faol shovqinni bekor qilish (ANC) tizimi atrofdagi keraksiz
                ovozlarni aniqlab, ularni darhol bloklaydi. Metroda, samolyotda
                yoki shovqinli kafeda — quloqchingizni taqganingizdan so'ng
                faqat siz istagan tovush qoladi.
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "16px",
                }}
              >
                {[
                  { icon: <IoMoon />, text: "Metrodagi shovqinni bloklaydi" },
                  { icon: <IoSunny />, text: "Tabiiy ovozni saqlab qoladi" },
                  {
                    icon: <FaEarListen />,
                    text: "Adaptiv ANC muhitga moslashadi",
                  },
                  {
                    icon: <FaVolumeXmark />,
                    text: "Bolalarning ovozini ham bloklaydi",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.06)",
                      borderRadius: "14px",
                      padding: "14px 16px",
                    }}
                  >
                    <span
                      style={{
                        color: "#4A8BFF",
                        fontSize: "18px",
                        flexShrink: 0,
                      }}
                    >
                      {item.icon}
                    </span>
                    <span
                      style={{
                        fontSize: "14px",
                        color: "rgba(255,255,255,0.65)",
                      }}
                    >
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div
              style={{
                position: "relative",
                borderRadius: "28px",
                overflow: "hidden",
                boxShadow: "0 30px 80px rgba(20,40,160,0.25)",
                minHeight: "420px",
              }}
            >
              <Image
                loading="lazy"
                src={Samsungbuds}
                alt="Galaxy Buds bilan shovqinni bekor qilish"
                width={600}
                height={420}
                sizes="(max-width: 900px) 100vw, 600px"
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, rgba(5,5,5,0.1) 0%, rgba(5,5,5,0.7) 100%)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "32px",
                  left: "32px",
                  right: "32px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    marginBottom: "16px",
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      background: "rgba(74,139,255,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#4A8BFF",
                      fontSize: "22px",
                    }}
                  >
                    <FaVolumeXmark />
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: "28px",
                        fontWeight: 800,
                        color: "#fff",
                      }}
                    >
                      ANC
                    </div>
                    <div
                      style={{
                        fontSize: "13px",
                        color: "rgba(255,255,255,0.7)",
                      }}
                    >
                      Faol shovqinni bekor qilish
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    height: "4px",
                    borderRadius: "2px",
                    background: "rgba(255,255,255,0.15)",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: "85%",
                      height: "100%",
                      borderRadius: "2px",
                      background: "linear-gradient(90deg, #4A8BFF, #1428A0)",
                    }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "8px",
                  }}
                >
                  <span
                    style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)" }}
                  >
                    Shovqin darajasi
                  </span>
                  <span style={{ fontSize: "12px", color: "#4A8BFF" }}>
                    85% kamaytirildi
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={sectionStyle}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div
            style={{
              textAlign: "center",
              marginBottom: "clamp(50px,7vw,80px)",
            }}
          >
            <span
              style={{
                display: "inline-block",
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "#4A8BFF",
                marginBottom: "14px",
              }}
            >
              Qulaylik va dizayn
            </span>
            <h2
              style={{
                fontSize: "clamp(30px, 5vw, 52px)",
                fontWeight: 800,
                lineHeight: 1.1,
                margin: "0 0 16px",
                letterSpacing: "-1px",
              }}
            >
              Taqishni xohlaganingizda
              <br />
              <span style={{ color: "#4A8BFF" }}>unutib qo'yasiz</span>
            </h2>
            <p
              style={{
                fontSize: "clamp(15px, 2vw, 18px)",
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.55)",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              Har bir tafsilot sizning qulayligingiz uchun ishlab chiqilgan.
              Yengil, ergonomic va premium sifatli materiallar.
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "24px",
            }}
          >
            {comfortFeatures.map((f) => (
              <div
                key={f.title}
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "24px",
                  padding: "32px 24px",
                  backdropFilter: "blur(12px)",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                  transition: "all 0.35s ease-in-out",
                }}
              >
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "16px",
                    background: "rgba(74,139,255,0.12)",
                    color: "#4A8BFF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "24px",
                    marginBottom: "20px",
                  }}
                >
                  {f.icon}
                </div>
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: 700,
                    margin: "0 0 10px",
                  }}
                >
                  {f.title}
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: 1.7,
                    color: "rgba(255,255,255,0.55)",
                    margin: 0,
                  }}
                >
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          position: "relative",
          overflow: "hidden",
          background: `radial-gradient(800px 500px at 50% 50%, rgba(20,40,160,0.1), transparent 60%), linear-gradient(180deg, #050505 0%, #0a0a1a 50%, #050505 100%)`,
          padding: "clamp(80px,10vw,140px) 24px",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div
            style={{
              textAlign: "center",
              marginBottom: "clamp(50px,7vw,80px)",
            }}
          >
            <span
              style={{
                display: "inline-block",
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "#4A8BFF",
                marginBottom: "14px",
              }}
            >
              Samsung ekotizimi
            </span>
            <h2
              style={{
                fontSize: "clamp(30px, 5vw, 52px)",
                fontWeight: 800,
                lineHeight: 1.1,
                margin: "0 0 16px",
                letterSpacing: "-1px",
              }}
            >
              Barcha qurilmalar
              <br />
              <span style={{ color: "#4A8BFF" }}>birlashadi</span>
            </h2>
            <p
              style={{
                fontSize: "clamp(15px, 2vw, 18px)",
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.55)",
                maxWidth: "640px",
                margin: "0 auto",
              }}
            >
              Galaxy Buds sizning barcha Galaxy qurilmalaringiz bilan uzluksiz
              ishlaydi. Telefondan noutbukga, soatdan televizorgacha — hammasi
              bir tizimda.
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "24px",
              marginBottom: "clamp(50px,7vw,80px)",
            }}
          >
            {[
              {
                icon: <FaMobileScreen />,
                label: "Galaxy Smartfon",
                desc: "Tezkor ulanish",
              },
              {
                icon: <FaHeadphones />,
                label: "Galaxy Buds",
                desc: "Avto almashtirish",
              },
              {
                icon: <FaTabletScreenButton />,
                label: "Galaxy Tab",
                desc: "Chegarasiz aloqa",
              },
              { icon: <FaLaptop />, label: "Galaxy Book", desc: "Bir tizimda" },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "24px",
                  padding: "32px 20px",
                  textAlign: "center",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                  transition: "all 0.35s ease-in-out",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "140px",
                    marginBottom: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "16px",
                    background: "rgba(255,255,255,0.03)",
                  }}
                >
                  <div style={{ color: "#4A8BFF", fontSize: "48px" }}>
                    {item.icon}
                  </div>
                </div>
                <h4
                  style={{
                    fontSize: "16px",
                    fontWeight: 700,
                    margin: "0 0 6px",
                  }}
                >
                  {item.label}
                </h4>
                <p
                  style={{
                    fontSize: "13px",
                    color: "rgba(255,255,255,0.5)",
                    margin: 0,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "20px",
            }}
          >
            {[
              {
                title: "Auto Switch",
                desc: "Qurilmalar orasida avtomatik o'tish. Telefondan noutbukga — quloqchilar o'z-o'zidan ulanadi.",
              },
              {
                title: "Quick Switch",
                desc: "Bir tugma bilan qurilmalarni almashtiring. Bluetooth 5.4 tezligida uzluksiz aloqa.",
              },
              {
                title: "SmartThings",
                desc: "Barcha ekotizim qurilmalaringizni SmartThings ilovasidan boshqaring.",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "18px",
                  padding: "24px",
                }}
              >
                <div
                  style={{
                    color: "#4A8BFF",
                    fontSize: "22px",
                    marginBottom: "12px",
                  }}
                >
                  <FaWifi />
                </div>
                <h4
                  style={{
                    fontSize: "18px",
                    fontWeight: 700,
                    margin: "0 0 10px",
                  }}
                >
                  {item.title}
                </h4>
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: 1.6,
                    color: "rgba(255,255,255,0.5)",
                    margin: 0,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={sectionStyle}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div
            style={{
              textAlign: "center",
              marginBottom: "clamp(50px,7vw,80px)",
            }}
          >
            <span
              style={{
                display: "inline-block",
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "#4A8BFF",
                marginBottom: "14px",
              }}
            >
              Quvvat va batareya
            </span>
            <h2
              style={{
                fontSize: "clamp(30px, 5vw, 52px)",
                fontWeight: 800,
                lineHeight: 1.1,
                margin: "0 0 16px",
                letterSpacing: "-1px",
              }}
            >
              Kun bo'yi
              <br />
              <span style={{ color: "#4A8BFF" }}>siz bilan</span>
            </h2>
            <p
              style={{
                fontSize: "clamp(15px, 2vw, 18px)",
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.55)",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              Zaryad quvvati bilan 30 soatgacha tinglash. 5 daqiqalik tez zaryad
              — 1 soatlik tinglash uchun yetarli.
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "24px",
            }}
          >
            {batteryData.map((b) => (
              <div
                key={b.label}
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "24px",
                  padding: "36px 24px",
                  textAlign: "center",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                  transition: "all 0.35s ease-in-out",
                }}
              >
                <FaBatteryFull
                  style={{
                    fontSize: "36px",
                    color: "#4A8BFF",
                    marginBottom: "16px",
                  }}
                />
                <div
                  style={{
                    fontSize: "clamp(36px, 5vw, 52px)",
                    fontWeight: 800,
                    lineHeight: 1,
                  }}
                >
                  {b.value}
                  <span
                    style={{
                      fontSize: "18px",
                      fontWeight: 600,
                      color: "rgba(255,255,255,0.6)",
                    }}
                  >
                    {" "}
                    {b.unit}
                  </span>
                </div>
                <div
                  style={{
                    fontSize: "15px",
                    fontWeight: 600,
                    marginTop: "8px",
                  }}
                >
                  {b.label}
                </div>
                <div
                  style={{
                    fontSize: "13px",
                    color: "rgba(255,255,255,0.45)",
                    marginTop: "4px",
                  }}
                >
                  {b.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="compare"
        style={{
          position: "relative",
          overflow: "hidden",
          background: `radial-gradient(800px 500px at 50% 50%, rgba(20,40,160,0.08), transparent 60%), linear-gradient(180deg, #050505 0%, #0a0a18 50%, #050505 100%)`,
          padding: "clamp(80px,10vw,140px) 24px",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div
            style={{
              textAlign: "center",
              marginBottom: "clamp(50px,7vw,80px)",
            }}
          >
            <span
              style={{
                display: "inline-block",
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "#4A8BFF",
                marginBottom: "14px",
              }}
            >
              Taqqoslash
            </span>
            <h2
              style={{
                fontSize: "clamp(30px, 5vw, 52px)",
                fontWeight: 800,
                lineHeight: 1.1,
                margin: "0 0 16px",
                letterSpacing: "-1px",
              }}
            >
              Qaysi model
              <br />
              <span style={{ color: "#4A8BFF" }}>sizga mos?</span>
            </h2>
          </div>
          <div
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "24px",
              overflow: "hidden",
              backdropFilter: "blur(12px)",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "2fr 1fr 1fr 1fr",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div
                style={{
                  padding: "20px 24px",
                  fontWeight: 700,
                  fontSize: "15px",
                  color: "rgba(255,255,255,0.5)",
                }}
              >
                Xususiyat
              </div>
              <div
                style={{
                  padding: "20px 16px",
                  textAlign: "center",
                  fontWeight: 700,
                  fontSize: "14px",
                  color: "#4A8BFF",
                }}
              >
                Buds3 Pro
              </div>
              <div
                style={{
                  padding: "20px 16px",
                  textAlign: "center",
                  fontWeight: 700,
                  fontSize: "14px",
                  color: "#4A8BFF",
                }}
              >
                Buds3
              </div>
              <div
                style={{
                  padding: "20px 16px",
                  textAlign: "center",
                  fontWeight: 700,
                  fontSize: "14px",
                  color: "#4A8BFF",
                }}
              >
                Buds FE
              </div>
            </div>
            {[
              { spec: "Narx", pro: "$249", std: "$179", fe: "$99" },
              {
                spec: "Dizayn",
                pro: "Kanal (In-Ear)",
                std: "Ochiq turdagi",
                fe: "Kanal (In-Ear)",
              },
              {
                spec: "Dinamik",
                pro: "2 tomonli kengaytirilgan",
                std: "1 tomonli",
                fe: "1 tomonli (Dynamic)",
              },
              { spec: "ANC", pro: "Adaptiv ANC", std: "ANC", fe: "ANC" },
              {
                spec: "Batareya",
                pro: "6 soat (ANC)",
                std: "5 soat (ANC)",
                fe: "6 soat (ANC)",
              },
              {
                spec: "Jami batareya",
                pro: "30 soat",
                std: "30 soat",
                fe: "30 soat",
              },
              {
                spec: "Suv chidamliligi",
                pro: "IP57",
                std: "IP57",
                fe: "IPX2",
              },
              { spec: "Bluetooth", pro: "5.4", std: "5.4", fe: "5.2" },
              { spec: "Galaxy AI", pro: "Ha", std: "Ha", fe: "Yo'q" },
              {
                spec: "Ultra Hi-Q Audio",
                pro: "Ha (24bit/96kHz)",
                std: "Ha",
                fe: "Yo'q",
              },
            ].map((row, i) => (
              <div
                key={row.spec}
                style={{
                  display: "grid",
                  gridTemplateColumns: "2fr 1fr 1fr 1fr",
                  borderBottom:
                    i < 9 ? "1px solid rgba(255,255,255,0.05)" : "none",
                  background:
                    i % 2 === 0 ? "rgba(255,255,255,0.015)" : "transparent",
                }}
              >
                <div
                  style={{
                    padding: "14px 24px",
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.7)",
                  }}
                >
                  {row.spec}
                </div>
                <div
                  style={{
                    padding: "14px 16px",
                    textAlign: "center",
                    fontSize: "13px",
                    color: "rgba(255,255,255,0.8)",
                  }}
                >
                  {row.pro}
                </div>
                <div
                  style={{
                    padding: "14px 16px",
                    textAlign: "center",
                    fontSize: "13px",
                    color: "rgba(255,255,255,0.8)",
                  }}
                >
                  {row.std}
                </div>
                <div
                  style={{
                    padding: "14px 16px",
                    textAlign: "center",
                    fontSize: "13px",
                    color: "rgba(255,255,255,0.8)",
                  }}
                >
                  {row.fe}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          position: "relative",
          overflow: "hidden",
          background: `radial-gradient(900px 600px at 50% 50%, rgba(20,40,160,0.25), transparent 60%), linear-gradient(180deg, #050505 0%, #0a0a20 50%, #050505 100%)`,
          padding: "clamp(100px,12vw,180px) 24px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "20%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "rgba(20,40,160,0.12)",
            filter: "blur(120px)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{ maxWidth: "800px", margin: "0 auto", position: "relative" }}
        >
          <div
            style={{
              position: "relative",
              width: "280px",
              height: "280px",
              margin: "0 auto 48px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle at 50% 40%, rgba(20,40,160,0.4), rgba(11,11,11,0.9))",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 40px 100px rgba(20,40,160,0.3)",
            }}
          >
            <Image
              loading="lazy"
              src={Samsungbuds}
              alt="Galaxy Buds"
              width={220}
              height={220}
              style={{ objectFit: "contain" }}
            />
          </div>
          <h2
            style={{
              fontSize: "clamp(32px, 5vw, 56px)",
              fontWeight: 800,
              lineHeight: 1.1,
              margin: "0 0 20px",
              letterSpacing: "-1px",
            }}
          >
            Tovushning yangi
            <br />
            <span style={{ color: "#4A8BFF" }}>olamini kashf eting</span>
          </h2>
          <p
            style={{
              fontSize: "clamp(16px, 2vw, 20px)",
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.6)",
              maxWidth: "560px",
              margin: "0 auto 40px",
            }}
          >
            Galaxy Buds bilan har bir lahzani boyiting. Immersiv tovush, aqlli
            funksiyalar va premium dizayn — barchasi siz uchun.
          </p>
          <div
            style={{
              display: "flex",
              gap: "16px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <a
              href="#products"
              style={{
                background: "linear-gradient(135deg, #0055FF, #1428A0)",
                color: "#fff",
                border: "none",
                borderRadius: "999px",
                padding: "18px 40px",
                fontSize: "17px",
                fontWeight: 700,
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                textDecoration: "none",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
            >
              Sotib olish <FaArrowRight />
            </a>
            <a
              href="#compare"
              style={{
                background: "transparent",
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.25)",
                borderRadius: "999px",
                padding: "18px 40px",
                fontSize: "17px",
                fontWeight: 700,
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
            >
              Taqqoslash
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
