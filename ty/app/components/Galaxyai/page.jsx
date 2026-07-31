import Image from "next/image";
import Galaxy1 from "../../../images/Galaxyai1.png";
import { FaDollarSign } from "react-icons/fa";
import { FaBoltLightning } from "react-icons/fa6";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import {
  FaMagnifyingGlass,
  FaLanguage,
  FaNoteSticky,
  FaWandMagicSparkles,
} from "react-icons/fa6";
import GalaxyAIvideo from "../../../Galaxyaivideo/GalaxyAIvideo.mp4";
export default function Galaxyai() {
  const featureCardStyle = {
    width: "270px",
    height: "340px",
    borderRadius: "30px",
    textAlign: "center",
    padding: "38px 28px",
    background: "rgba(255,255,255,.88)",
    backdropFilter: "blur(18px)",
    border: "1px solid rgba(255,255,255,.8)",
    boxShadow:
      "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
  };

  const featureIconBox = {
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
  };

  const features = [
    {
      icon: <FaWandMagicSparkles />,
      title: "Photo Assist",
      desc: "Rasmlaringizni aqlli tahrirlash, obyektlarni olib tashlash va sifatni oshirish imkoniyati.",
    },
    {
      icon: <FaMagnifyingGlass />,
      title: "Circle to Search",
      desc: "Ekranida aylana chizing va qiziqqan narsangiz haqida darhol ma'lumot oling.",
    },
    {
      icon: <FaLanguage />,
      title: "Live Translate",
      desc: "Qo'ng'iroqlar va suhbatlarda real vaqtda tarjima qiling, tilda to'siq bo'lmasin.",
    },
    {
      icon: <FaNoteSticky />,
      title: "Note Assist",
      desc: "Eslatmalaringizni avtomatik tartibga soling, xulosa chiqaring va sarlavha qo'ying.",
    },
  ];

  const floatDurations = ["4s", "4.4s", "4.8s", "5.2s"];
  const cardStyle = {
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
  };

  const iconBox = {
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
  };

  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        Height: "100vh",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          background: "rgba(0,85,255,.28)",
          filter: "blur(170px)",
          top: "-250px",
          right: "-180px",
        }}
      />

      <div
        style={{
          position: "absolute",
          width: "850px",
          height: "850px",
          borderRadius: "50%",
          background: "rgba(0,123,255,.22)",
          filter: "blur(180px)",
          bottom: "-400px",
          left: "-250px",
        }}
      />

      <section
        style={{
          position: "relative",
          backgroundColor: "#090909",
          color: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100vh",
          padding: "90px 100px",
          minHeight: "700px",
        }}
      >
        <div style={{ maxWidth: "700px" }}>
          <h1
            style={{
              fontSize: "68px",
              lineHeight: "1.1",
              fontWeight: 800,
              letterSpacing: "-2px",
            }}
          >
            Eng <span style={{ color: "#0055FF" }}>Tez, Aqlli</span>
            <br />
            Suniy Intellekt
            <br />
            Telefoningizda
            <br />
            Yashaydi.
          </h1>

          <p
            style={{
              marginTop: "35px",
              color: "#cfcfcf",
              fontSize: "22px",
              lineHeight: "1.8",
            }}
          >
            Galaxy AI Samsung qurilmalariga o'rnatilgan suniy intellekt bo'lib,
            sizning buyruqlaringizni soniyalar ichida bajaradi.
          </p>

          <button
            style={{
              marginTop: "45px",
              padding: "18px 36px",
              border: "none",
              borderRadius: "16px",
              backgroundColor: "#0055FF",
              color: "white",
              fontSize: "20px",
              fontWeight: "bold",
              cursor: "pointer",
              boxShadow: "0 20px 40px rgba(0,85,255,.5)",
            }}
          >
            Galaxy AI ni Sinab Ko'rish
          </button>
        </div>

        <div
          style={{
            width: "650px",
            height: "500px",
            position: "relative",
            borderRadius: "35px",
            overflow: "hidden",
            boxShadow: "0 40px 100px rgba(0,85,255,.4)",
          }}
        >
          <Image
            loading="lazy"
            src={Galaxy1}
            alt="Galaxy AI"
            fill
            sizes="(max-width: 768px) 100vw, 1200px"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </section>

      <section
        style={{
          position: "relative",
          padding: "100px 60px",
        }}
      >
        <h1
          style={{
            fontSize: "58px",
            textAlign: "center",
            color: "black",
            marginBottom: "70px",
            letterSpacing: "-2px",
          }}
        >
          Nima uchun <span style={{ color: "#0055FF" }}>Galaxy AI?</span>
        </h1>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "35px",
            flexWrap: "nowrap",
          }}
        >
          <div style={cardStyle}>
            <div style={iconBox}>
              <FaBoltLightning />
            </div>

            <h2
              style={{
                fontSize: "42px",
                marginTop: "28px",
              }}
            >
              Tezlik
            </h2>

            <p
              style={{
                marginTop: "18px",
                fontSize: "24px",
                color: "#555",
                lineHeight: "1.7",
              }}
            >
              Vazifalarni millisekundlarda bajaradi va juda aniq javob beradi.
            </p>
          </div>
          <div style={cardStyle}>
            <div style={iconBox}>
              <IoShieldCheckmarkSharp />
            </div>

            <h2
              style={{
                fontSize: "42px",
                marginTop: "28px",
              }}
            >
              Ishonchli
            </h2>

            <p
              style={{
                marginTop: "18px",
                fontSize: "24px",
                color: "#555",
                lineHeight: "1.7",
              }}
            >
              Galaxy AI sizdan hech nima hohlamaydi, hech nimani ruxsatingizsiz
              bajarmaydi
            </p>
          </div>

          <div style={cardStyle}>
            <div style={iconBox}>
              <FaDollarSign />
            </div>

            <h2
              style={{
                fontSize: "42px",
                marginTop: "28px",
              }}
            >
              Bepul
            </h2>

            <p
              style={{
                marginTop: "18px",
                fontSize: "24px",
                color: "#555",
                lineHeight: "1.7",
              }}
            >
              Galaxy AI Samsung foydalanuvchilari uchun bepul
            </p>
          </div>
        </div>
      </section>

      <section
        style={{
          position: "relative",
          padding: "110px 60px 120px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "700px",
            height: "700px",
            borderRadius: "50%",
            background: "rgba(0,85,255,.18)",
            filter: "blur(170px)",
            top: "-200px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />

        <h1
          className="ga-anim"
          style={{
            position: "relative",
            fontSize: "58px",
            textAlign: "center",
            color: "black",
            marginBottom: "24px",
            letterSpacing: "-2px",
          }}
        >
          Galaxy AI <span style={{ color: "#0055FF" }}>Imkoniyatlari</span>
        </h1>

        <p
          className="ga-anim"
          style={{
            position: "relative",
            textAlign: "center",
            color: "#555",
            fontSize: "22px",
            lineHeight: "1.7",
            maxWidth: "760px",
            margin: "0 auto 70px",
            animationDelay: "0.1s",
          }}
        >
          Galaxy AI ning eng muhim aqlli funksiyalari bilan tanishing — ular har
          kuni sizga vaqtni tejash va ijodkorlikni oshirishda yordam beradi.
        </p>

        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            flexWrap: "wrap",
          }}
        >
          {features.map((f, i) => (
            <div
              key={f.title}
              style={{
                ...featureCardStyle,
                animationDelay: `${i * 0.12}s`,
              }}
            >
              <div
                className="ga-float"
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  animationDuration: floatDurations[i],
                }}
              >
                <div style={featureIconBox}>{f.icon}</div>

                <h2
                  style={{
                    fontSize: "30px",
                    marginTop: "26px",
                    color: "#0a0a0a",
                  }}
                >
                  {f.title}
                </h2>

                <p
                  style={{
                    marginTop: "16px",
                    fontSize: "18px",
                    color: "#555",
                    lineHeight: "1.6",
                  }}
                >
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        style={{
          position: "relative",
          padding: "0 60px 90px",
          textAlign: "center",
        }}
      >
        <h1
          className="ga-anim"
          style={{
            fontSize: "54px",
            color: "black",
            marginBottom: "22px",
            letterSpacing: "-2px",
          }}
        >
          Galaxy AI Rasmlaringizni Qanday{" "}
          <span style={{ color: "#0055FF" }}>O'zgartirishini Ko'ring</span>
        </h1>

        <p
          className="ga-anim"
          style={{
            color: "#555",
            fontSize: "22px",
            lineHeight: "1.7",
            maxWidth: "820px",
            margin: "0 auto 60px",
            animationDelay: "0.1s",
          }}
        >
          Quyidagi video Galaxy AI ning aqlli tahrirlash imkoniyatlarini — Photo
          Assist orqali rasmlaringizni qanday mukammallashtirishini namoyish
          etadi.
        </p>
      </section>
      <section
        style={{
          position: "relative",
          height: "fit-content",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <video
          controls
          preload="none"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        >
          <source src="/Videos/GalaxyAIvideo.mp4" type="video/mp4" />
        </video>
      </section>
    </div>
  );
}
