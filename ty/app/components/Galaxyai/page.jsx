import Image from "next/image";
import Galaxy1 from "../../../images/Galaxyai1.png";
import { FaDollarSign } from "react-icons/fa";
import { FaBoltLightning } from "react-icons/fa6";
import { IoShieldCheckmarkSharp } from "react-icons/io5";

export default function Galaxyai() {
  const cardStyle = {
    width: "480px",
    height: "360px",
    borderRadius: "30px",
    textAlign: "center",
    padding: "40px",
    background: "rgba(255,255,255,.88)",
    backdropFilter: "blur(18px)",
    border: "1px solid rgba(255,255,255,.8)",
    boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
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
        minHeight: "100vh",
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
            Eng <span style={{ color:  "#0055FF" }}>Tez, Aqlli</span>
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
              backgroundColor:"#0055FF",
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
            src={Galaxy1}
            alt="Galaxy AI"
            fill
            priority
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
            color:"black",
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
            flexWrap: "wrap",
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

            <a
              href="https://www.samsung.com/us/galaxy-ai/"
              style={{
                 marginTop: "85px",
                border: "1px solid #0055FF",
                display: "inline-block",
                textDecoration: "none",
                width: "250px",
                borderRadius: "30px",
                backgroundColor: "#0055FF",
                color: "white",
                paddingTop: "5px",
                fontSize: "20px",
                height: "40px",
                fontWeight: "bold",
              }}
            >
              Ko'proq ma'lumot →
            </a>
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
              Galaxy AI sizdan hech nima hohlamaydi, hech nimani ruxsatingizsiz bajarmaydi
            </p>

            <a
              href="https://www.samsung.com/us/galaxy-ai/"
              style={{
                marginTop: "45px",
                border: "1px solid #0055FF",
                display: "inline-block",
                textDecoration: "none",
                width: "250px",
                borderRadius: "30px",
                backgroundColor: "#0055FF",
                color: "white",
                paddingTop: "5px",
                fontSize: "20px",
                height: "40px",
                fontWeight: "bold",
              }}
            >
              Ko'proq ma'lumot →
            </a>
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
              Galaxy AI funksiyalarining asosiy qismi Samsung foydalanuvchilari
              uchun bepul taqdim etiladi.
            </p>

            <a
              href="https://www.samsung.com/us/galaxy-ai/"
              style={{
                marginTop: "45px",
                borderRadius: "30px",
                display: "inline-block",
                textDecoration: "none",
                backgroundColor: "#0055FF",
                color: "white",
                paddingTop: "5px",
                border: "1px solid #0055FF",
                fontSize: "20px",
                fontWeight: "bold",
                width: "250px",
                height: "40px",
              }}
            >
              Ko'proq ma'lumot →
            </a>
          </div>
        </div>
      </section>

      <section
        style={{
          position: "relative",
          padding: "120px 100px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "58px",
            fontWeight: 800,
            color:"black",
            letterSpacing: "-2px",
          }}
        >
          
          <span style={{ color: "#0055FF" }}> Galaxy AI</span> haqida savollingiz bormi?
        </h2>

        <p
          style={{
            maxWidth: "900px",
            margin: "30px auto 0",
            color: "#666",
            fontSize: "24px",
            lineHeight: "1.8",
          }}
        >
          Galaxy AI sizning kundalik vazifalaringizni tezlashtiradi, qidiradi,
          tarjima qiladi, yozadi va yordam beradi. Hammasi telefoningizning
          o'zida ishlaydi.
        </p>

        <button
          style={{
            marginTop: "50px",
            padding: "20px 45px",
            border: "none",
            borderRadius: "18px",
            background: " #0055FF",
            color: "white",
            fontSize: "22px",
            fontWeight: "bold",
            cursor: "pointer",
            boxShadow: "0 20px 50px rgba(0,85,255,.35)",
          }}
        >
          <a href="https://ru.trygalaxy.com/" style={{ color: "white", textDecoration: "none" }}>
            Bu yerga o'ting 
          </a>
        </button>
      </section>
    </div>
  );
}