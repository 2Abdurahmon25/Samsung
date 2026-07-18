"use client";
import { BsChatLeftTextFill } from "react-icons/bs";
import { FaHandsHelping } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdAddIcCall, MdTv } from "react-icons/md";
import Supportimg from "../../../images/SupportImage.png";
import PhoneImg from "../../../images/SamsungMobile.png";
import TvImg from "../../../images/SamsungMonitor.png";
import ApplianceImg from "../../../images/SamsungHomeapp.png";
import Image from "next/image";
import { FiSmartphone } from "react-icons/fi";
import { RiFridgeLine } from "react-icons/ri";
export default function Support() {
  const supportOptions = [
    {
      title: "Gaplashish",
      desc: "telefonlar bo'yicha 24/7 yordam xizmat",
      icon: <BsChatLeftTextFill />,
    },
    {
      title: "Telefon qiling",
      desc: "Samsung mutaxassis bilan telefon orqali bog'laning.",
      icon: <MdAddIcCall />,
    },
    {
      title: "Yordam markazi",
      desc: "eng yaqin Samsung servis markazini toping.",
      icon: <FaLocationDot />,
    },
    {
      title: "Texnik yordam",
      desc: "Mutaxassislarimizdan 24/7 jonli yordam oling.",
      icon: <FaHandsHelping />,
    },
  ];

  const categories = [
    {
      title: "Telefon",
      desc: "Galaxy Telefon, Planshet, soat, va headphone",
      icon: <FiSmartphone />,
      img: PhoneImg,
      href: "https://www.samsung.com/us/support/mobile/",
      cta: "Telefon yordam uchun",
    },
    {
      title: "TV & Audio",
      desc: "OLED, QLED, Soundbars, va Projectors",
      icon: <MdTv />,
      img: TvImg,
      href: "https://www.samsung.com/us/support/televisions-home-audio/television-home-audio-accessories/",
      cta: "TV yordam uchun",
    },
    {
      title: "Uy jihozlar",
      desc: "Muzlatgich, kir yuvish, va gaz",
      icon: <RiFridgeLine />,
      img: ApplianceImg,
      href: "https://www.samsung.com/us/support/home-appliances/refrigerators/",
      cta: "Jihozlar yordam uchun",
    },
  ];

  return (
    <div>
      <section
        style={{
          marginBottom: "100px",
          minHeight: "10px",
        }}
      >
        <Image
          loading="lazy"
          src={Supportimg}
          alt="w"
          width={1800}
          height={300}
        />
      </section>
      <section
        style={{
          textAlign: "center",
          position: "absolute",
          top: "100px",
          left: "30px",
        }}
      >
        <h1
          style={{
            fontSize: "90px",
            color: "navy",
            marginTop: "100px",
            marginBottom: "50px",
          }}
        >
          Yordam Kerakmi?{" "}
        </h1>
        <div style={{ marginBottom: "5%" }}>
          <button
            style={{
              border: "3px solid blue",
              borderRadius: "70px",
              width: "250px",
              borderTopRightRadius: "0%",
              borderBottomRightRadius: "0%",
              height: "50px",
              fontSize: "33px",
              textAlign: "center",
            }}
            className="Helpbutton"
          >
            Yordam uchun
          </button>
          <button
            style={{
              border: "3px solid blue",
              borderRadius: "70px",
              width: "250px",
              borderTopLeftRadius: "0%",
              borderBottomLeftRadius: "0%",
              height: "50px",
              fontSize: "33px",
              textAlign: "center",
            }}
            className="Help2button"
          >
            <a href="https://www.samsung.com/us/support/mobile/phones/">
              Tashrif
            </a>
          </button>
        </div>
      </section>
      <section
        style={{
          position: "relative",
          padding: "80px 24px 100px",
          background:
            "radial-gradient(900px 500px at 50% -10%, rgba(20,40,160,0.10), transparent 60%), linear-gradient(180deg, #ffffff 0%, #f5f6fb 100%)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            maxWidth: "1180px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(32px, 5vw, 52px)",
              fontWeight: 800,
              color: "#0B0B0B",
              margin: 0,
              letterSpacing: "-0.5px",
            }}
          >
            Qanday yordam kerak?
          </h2>
          <p
            style={{
              fontSize: "clamp(15px, 2vw, 18px)",
              color: "#5b5b66",
              marginTop: "14px",
              maxWidth: "520px",
              marginLeft: "auto",
              marginRight: "auto",
              lineHeight: 1.6,
            }}
          >
            Samsung mutaxassislaridan 24/7 yordam oling — qayerda va qanday
            qidirishingiz farqi yo'q.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "28px",
              marginTop: "48px",
            }}
          >
            {supportOptions.map((opt, i) => (
              <div
                key={opt.title}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(-8px) scale(1.03)";
                  e.currentTarget.style.boxShadow =
                    "0 20px 50px rgba(20,40,160,0.22)";
                  e.currentTarget.style.borderColor = "rgba(20,40,160,0.45)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 6px 20px rgba(0,0,0,0.06)";
                  e.currentTarget.style.borderColor = "#ECECEC";
                }}
                style={{
                  background:
                    "linear-gradient(180deg, #ffffff 0%, #f7f8fd 100%)",
                  border: "1px solid #ECECEC",
                  borderRadius: "24px",
                  padding: "40px 28px",
                  textAlign: "center",
                  cursor: "pointer",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
                  transition:
                    "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
                }}
              >
                <div
                  style={{
                    width: "76px",
                    height: "76px",
                    margin: "0 auto 22px",
                    borderRadius: "20px",
                    background: "rgba(20,40,160,0.10)",
                    color: "#1428A0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "34px",
                  }}
                >
                  {opt.icon}
                </div>
                <div
                  style={{
                    width: "40px",
                    height: "3px",
                    borderRadius: "2px",
                    background: "#1428A0",
                    margin: "0 auto 18px",
                    opacity: 0.7,
                  }}
                />
                <h3
                  style={{
                    fontSize: "22px",
                    fontWeight: 700,
                    color: "#0B0B0B",
                    margin: 0,
                  }}
                >
                  {opt.title}
                </h3>
                <p
                  style={{
                    fontSize: "15px",
                    color: "#5b5b66",
                    lineHeight: 1.6,
                    marginTop: "12px",
                    marginBottom: 0,
                  }}
                >
                  {opt.desc}
                </p>
              </div>
            ))}
          </div>

          <a
            href="https://www.samsung.com/us/support/"
            style={{ textDecoration: "none" }}
          >
            <button
              style={{
                marginTop: "48px",
                minWidth: "520px",
                maxWidth: "100%",
                height: "64px",
                borderRadius: "999px",
                border: "none",
                background: "#1428A0",
                color: "#fff",
                fontSize: "18px",
                fontWeight: 600,
                cursor: "pointer",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.03)";
                e.currentTarget.style.boxShadow =
                  "0 14px 36px rgba(20,40,160,0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Yordam uchun
            </button>
          </a>
        </div>
      </section>
      <section
        style={{
          position: "relative",
          marginTop: "40px",
          padding: "80px 24px 100px",
          background:
            "radial-gradient(1000px 600px at 50% 0%, rgba(20,40,160,0.12), transparent 60%), linear-gradient(180deg, #f5f6fb 0%, #ffffff 100%)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "120px",
            left: "8%",
            width: "320px",
            height: "320px",
            borderRadius: "50%",
            background: "rgba(20,40,160,0.10)",
            filter: "blur(80px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "60px",
            right: "6%",
            width: "360px",
            height: "360px",
            borderRadius: "50%",
            background: "rgba(20,40,160,0.08)",
            filter: "blur(90px)",
          }}
        />
        <div
          style={{
            position: "relative",
            maxWidth: "1180px",
            margin: "0 auto",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <h2
              style={{
                fontSize: "clamp(32px, 5vw, 52px)",
                fontWeight: 800,
                color: "#0B0B0B",
                margin: 0,
                letterSpacing: "-0.5px",
              }}
            >
              Texnik Yordam Kategoriyalari
            </h2>
            <p
              style={{
                fontSize: "clamp(15px, 2vw, 18px)",
                color: "#5b5b66",
                marginTop: "14px",
                marginBottom: 0,
              }}
            >
              Qurilmangizni tanlang va kerakli yordamni toping.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "28px",
            }}
          >
            {categories.map((cat) => (
              <div
                key={cat.title}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(-8px) scale(1.02)";
                  e.currentTarget.style.boxShadow =
                    "0 24px 60px rgba(20,40,160,0.25)";
                  e.currentTarget.style.borderColor = "rgba(20,40,160,0.5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 24px rgba(0,0,0,0.07)";
                  e.currentTarget.style.borderColor = "#ECECEC";
                }}
                style={{
                  background: "rgb(255, 255, 255)",
                  border: "1px solid #ECECEC",
                  borderRadius: "24px",
                  overflow: "hidden",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  transition: "all 0.35s ease-in-out",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    height: "200px",
                    background:
                      "radial-gradient(circle at 50% 40%, rgba(20,40,160,0.10), transparent 70%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: "16px",
                      left: "16px",
                      width: "44px",
                      height: "44px",
                      borderRadius: "12px",
                      background: "rgba(20,40,160,0.12)",
                      color: "#1428A0",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "20px",
                    }}
                  >
                    {cat.icon}
                  </div>
                  <Image
                    loading="lazy"
                    src={cat.img}
                    alt={cat.title}
                    className="cat-img"
                    width={250}
                    height={170}
                    style={{
                      objectFit: "contain",
                      transition: "transform 0.35s ease-in-out",
                    }}
                  />
                </div>

                <div
                  style={{
                    padding: "24px 24px 28px",
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                  }}
                >
                  <h3
                    style={{
                      fontSize: "22px",
                      fontWeight: 700,
                      color: "#0B0B0B",
                      margin: 0,
                    }}
                  >
                    {cat.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "15px",
                      color: "#5b5b66",
                      lineHeight: 1.6,
                      marginTop: "10px",
                      marginBottom: "20px",
                    }}
                  >
                    {cat.desc}
                  </p>
                  <a
                    href={cat.href}
                    className="cat-arrow"
                    style={{
                      marginTop: "auto",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      color: "#1428A0",
                      fontWeight: 600,
                      fontSize: "16px",
                      textDecoration: "none",
                      transition: "transform 0.35s ease-in-out",
                    }}
                  >
                    Yordam olish →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
