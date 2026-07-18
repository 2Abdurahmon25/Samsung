'use client'
import SmartThings1 from "../../../images/SamsungSmartThings1.png";
import SmartThings2 from "../../../images/SamsungSmartThings2.png";
import Image from "next/image";
export default function SmartHome() {
  return ( 
    <div>
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
            src={SmartThings1}
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
          height: "fit-content",
          background: "#050505",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            position: "relative",
            paddingTop: "30px",
            fontSize: "50px",
          }}
        >
          SmartThings Xususiyatlari
        </h1>
        <div
          style={{
            position: "relative",
            marginTop: "50px",
            maxWidth: "1800px",
            minHeight: "400px",
            borderRadius: "70px",
            backgroundColor: "white",
          }}
        >
          <div style={{ display: "flex" }}>
            <div>
              <h1
                style={{
                  width: "fit-content",
                  height: "fit-content",
                  textAlign: "center",
                  position: "relative",
                  paddingTop: "30px",
                  fontSize: "50px",
                  color: "black",
                  paddingLeft: "180px",
                }}
              >
                1. Avtomatik ishlash
              </h1>
              <div style={{ paddingLeft: "120px", textAlign: "center" }}>
                <p
                  style={{
                    color: "black",
                    fontSize: "30px",
                    lineHeight: "1.8",
                    height: "fit-content",
                    width: "420px",
                  }}
                >
                  SmartThings orqali belgilangan vaqtda belgilangan texnikalar
                  ishlashni boshlaydi
                </p>
              </div>
            </div>
            <div
              style={{
                width: "900px",
                height: "375px",
                border: "1px solid black ",
                overflow: "hidden",
                position: "relative",
                top: "10px",
                borderRadius: "70px",
                marginLeft: "80px",
                borderTopLeftRadius: "0%",
                borderBottomLeftRadius: "0%",
              }}
            >
              <Image
                src={SmartThings2}
                fill
                style={{ objectFit: "cover" }}
                alt="ff"
              />
            </div>
          </div>
        </div>
        <div
          style={{
            position: "relative",
            marginTop: "50px",
            maxWidth: "1800px",
            minHeight: "400px",
            borderRadius: "70px",
            backgroundColor: "white",
          }}
        >
          <div style={{ display: "flex" }}>
            <div>
              <h1
                style={{
                  width: "fit-content",
                  height: "fit-content",
                  textAlign: "center",
                  position: "relative",
                  paddingTop: "30px",
                  fontSize: "50px",
                  color: "black",
                  paddingLeft: "180px",
                }}
              >
                2. To'k tejash
              </h1>
              <div style={{ paddingLeft: "120px", textAlign: "center" }}>
                <p
                  style={{
                    color: "black",
                    fontSize: "30px",
                    lineHeight: "1.8",
                    height: "fit-content",
                    width: "420px",
                  }}
                >
                  Agar elektrik to'k ko'p ishlatilinayotgan bo'lsa. SmartThings
                  sizga "To'k tejash"ni yoqishni ruxsat so'raydi
                </p>
              </div>
            </div>
            <div
              style={{
                width: "900px",
                height: "375px",
                border: "1px solid black ",
                overflow: "hidden",
                position: "relative",
                top: "10px",
                borderRadius: "70px",
                marginLeft: "80px",
                borderTopLeftRadius: "0%",
                borderBottomLeftRadius: "0%",
              }}
            >
              <Image
                src={SmartThings2}
                fill
                style={{ objectFit: "cover" }}
                alt="ff"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
