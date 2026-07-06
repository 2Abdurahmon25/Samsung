"use client";
import Image from "next/image";
import Watch_background from "../../../images/SamsungWatches.png";
import WatchUltra from "../../../images/WatchUltra.png";
import Watch8classic from "../../../images/Watch8Classic.png";
import Watch8 from "../../../images/Watch8.png";
import Watch7 from "../../../images/Watch7.png";

export default function Watches() {
  const Watches = [
    {
      Title: "Galaxy Watch Ultra",
      image: WatchUltra,
      description:
        "Eng qiyin hududlarga chiqishga tayyorgarlik ko‘rgan maxsus yordamchi, baland tog‘larda va kuchli to‘lqinlarda chalg‘itilmaydigan asosiy yordamchi",
    },
    {
      Title: "Galaxy Watch 8 Classic",
      image: Watch8classic,
      description:
        "To‘liq funksional maktublar, salomatlik va sport monitoringi uchun mukammal aralash - xurujli aylanmani sevimli asbobingiz bilan toping",
    },
    {
      Title: "Galaxy Watch 8",
      image: Watch8,
      description:
        "Chiziqchi dizayn, zamonaviy kuzatuv va keng funksiyalar - zamonaviy zamonaviy insonlar uchun mustahkam standart",
    },
    {
      Title: "Galaxy Watch 7",
      image: Watch7,
      description:
        "Sifatli taqish uchun juda qulay, eng so‘nggi texnologiyalarga ega va nafis dizayn - qimmatli smart-soat xaridini kengaytirish uchun mukammal tanlov",
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
          src={Watch_background}
          alt="Sa"
          fill
          priority
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
        <h1 style={{ fontSize: "49px", color: "black", marginLeft: "10px" }}>
          Bizning Soatlarimiz bilan tanishing
        </h1>
        <div
          style={{
            display: "flex",
            gap: "11px",
            marginLeft: "10px",
            marginTop: "20px",
          }}
        >
          {Watches.map((e, index) => (
            <div
              key={index}
              style={{
                width: "410px",
                height: "480px",
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
                e.currentTarget.style.transform = "translateY(100px)";
                e.currentTarget.style.boxShadow =
                  "0 30px 80px rgba(59, 130, 246, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 20px 60px rgba(0, 0, 0, 0.3)";
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
                  color: "#ffffff",
                  marginBottom: "15px",
                  textShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
                  position: "relative",
                  marginLeft: e.Title.length >= 15 ? "50px" : "90px",
                }}
              >
                {e.Title}
              </h3>

              <div
                style={{
                  position: "relative",
                  width: "200px",
                  height: "200px",
                  margin: "0 auto",
                  marginBottom: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  src={e.image}
                  alt={e.Title}
                  fill
                  style={{
                    objectFit: "contain",
                    padding: "10px",
                    filter: "drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3))",
                  }}
                />
              </div>

              <p
                style={{
                  fontSize: "0.95rem",
                  color: "rgba(255, 255, 255, 0.9)",
                  position: "relative",
                  textAlign: "left",
                  lineHeight: "1.6",
                  letterSpacing: "0.02em",
                  marginBottom: "20px",
                }}
              >
                {e.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}