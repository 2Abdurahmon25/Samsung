"use client";
import { useState } from "react";

const FEATURES = [
  {
    id: "universal-control",
    title: "Bitta Paneldan Boshqarish",
    description:
      "Telefon, planshet, aqlli soat yoki TV'ingizdan uyning barcha qurilmalarini bir joydan nazorat qiling.",
    image:
      "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcT5A79-Nj8ZUWKPHp9AxHjvQyNsoKdV66JItS8s0GA0w_1lzf5bPiMnBTO-pWdnaBGaxexKAGviF-XwS7Q",
  },
  {
    id: "ai-energy",
    title: "AI Energy Mode & Tejamkorlik",
    description:
      "Sun'iy intellekt qurilmalaringiz energiya sarfini tahlil qiladi va elektr energiyasini 30% gacha tejaydi.",
    image:
      "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQ3xoSEv4XM4CPwXTQhmwCPwp9xDkG71gn2sf4XV4HcTZSTiMoohw15kW6xCfE44WZZ7umjLIujk84LbE4",
  },
  {
    id: "automation",
    title: "Aqlli Avtomatlashtirish (Routines)",
    description:
      "Uyga kelganingizda chiroqlar yoqilishi, konditsioner yoqilishi yoki uxlash vaqti chiroqlar o'chishini sozlang.",
    image:
      "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcToPyGt_jIRsIrD6FWmkgryPCQYMxEK-Zu0VdJwI7_bt9ziwKMW4ykhEY1Nac34Q9Lo2Swg7y59s5pSWeY",
  },
  {
    id: "security",
    title: "Samsung Knox Xavfsizlik",
    description:
      "Har bir ulangan qurilma va ma'lumotlaringiz Samsung Knox harbiy darajadagi xavfsizlik tizimi bilan himoyalangan.",
    image:
      "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQcyya2BA4oIlYP8ay9NFRuBJwIM2SuO4Z5dUxY4pTbdtniDhqaSgZOCD5SXaNKmz6VDFszKh2TrR77nm8",
  },
  {
    id: "matter-support",
    title: "Matter & Zigbee Ekotizimi",
    description:
      "Nafaqat Samsung, balki 300+ brendlarning (Philips Hue, Nest, Aqara) Matter standartidagi qurilmalarini ulang.",
    image:
      "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcT5A79-Nj8ZUWKPHp9AxHjvQyNsoKdV66JItS8s0GA0w_1lzf5bPiMnBTO-pWdnaBGaxexKAGviF-XwS7Q",
  },
  {
    id: "voice-control",
    title: "Ovozli Yordamchilar",
    description:
      "Bixby, Google Assistant va Amazon Alexa orqali uyingizni faqat ovozli buyruqlar bilan boshqaring.",
    image:
      "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQ3xoSEv4XM4CPwXTQhmwCPwp9xDkG71gn2sf4XV4HcTZSTiMoohw15kW6xCfE44WZZ7umjLIujk84LbE4",
  },
];

const COMPATIBLE_DEVICES = [
  {
    name: "Bespoke AI Muzlatgich",
    img: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcR2ZdkCRWeIDCE6eLDoIjJ6kRdbnGTx1f1LVUC5jesftZqeLfYhfxnseiACWLMZBgL1IPsvD_5ZcItxNxs",
  },
  {
    name: "Bespoke AI Kir Yuvish",
    img: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTjfiQJMngdTWaR1tXh2g5u8IRLp7jCAZG2T-nAzJRCx7LvuulZ9es_vr0kNCmPI2SKFNR12dfg82ktY9o",
  },
  {
    name: "Bespoke Jet Bot AI+",
    img: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcRWsM244Z6-PY_fcnHDy__X7_k8jFZTao2YF3JmzkoudxQ9JPIcVV9vR0BMwBDx8ebVuZ7A7tPFhaLLgAo",
  },
  {
    name: "WindFree Split Konditsioner",
    img: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRRg3F3436-LTSZ6QfX__Ao7fx8pX5XozKLjjC1-J-zRvan9P40JB5j92grkqNkwh2uVMcAOWyeswORA0w",
  },
  {
    name: "Neo QLED 8K Smart TV",
    img: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQMrWBYohXGYy6WBDJjtrqDsLIpCYiTP5FgXHOJvU06iUqo5FMngJ-zUf7Qr9ixy8di3_oN6WU6dGULykY",
  },
  {
    name: "Family Hub Touch Screen",
    img: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcR2ZdkCRWeIDCE6eLDoIjJ6kRdbnGTx1f1LVUC5jesftZqeLfYhfxnseiACWLMZBgL1IPsvD_5ZcItxNxs",
  },
  {
    name: "SmartLock Door System",
    img: "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQcyya2BA4oIlYP8ay9NFRuBJwIM2SuO4Z5dUxY4pTbdtniDhqaSgZOCD5SXaNKmz6VDFszKh2TrR77nm8",
  },
  {
    name: "Smart Lighting System",
    img: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcToPyGt_jIRsIrD6FWmkgryPCQYMxEK-Zu0VdJwI7_bt9ziwKMW4ykhEY1Nac34Q9Lo2Swg7y59s5pSWeY",
  },
];

const STATS = [
  { label: "Faol Foydalanuvchilar", value: "290M+" },
  { label: "Qo'llab-quvvatlanadigan Brendlar", value: "300+" },
  { label: "Ulangan Qurilmalar", value: "1B+" },
  { label: "Energiya Tejamkorligi", value: "30%" },
];

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "SmartThings Ilovasini Yuklang",
    desc: "Android yoki iOS qurilmangizga rasmiy dasturni o'rnating.",
  },
  {
    step: "02",
    title: "Qurilmalarni Avto-Aniqlash",
    desc: "Ilova yaqindagi Smart qurilmalarni avtomatik ravishda topadi va ulashni taklif qiladi.",
  },
  {
    step: "03",
    title: "Xonalar va Hududlar Bo'yicha Bo'ling",
    desc: "Oshxona, Mehmonxona va Yotoqxona bo'yicha boshqaruv panellarini yarating.",
  },
  {
    step: "04",
    title: "Shaxsiy Avtomatlashtirish Yarating",
    desc: "Vaqt, joylashuv yoki sensorlar triggeriga ko'ra ishlaydigan ssenariylarni sozlang.",
  },
];

export default function SmartThingsPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div
      style={{
        backgroundColor: "#000",
        color: "#fff",
        fontFamily: "system-ui, sans-serif",
        minHeight: "100vh",
      }}
    >
      <section
        style={{
          position: "relative",
          padding: "120px 20px 80px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-10%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "800px",
            height: "400px",
            background:
              "radial-gradient(circle, rgba(33,137,255,0.15) 0%, rgba(0,0,0,0) 70%)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            textAlign: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          <h1
            style={{
              fontSize: "56px",
              fontWeight: "800",
              marginTop: "24px",
              lineHeight: "1.1",
              letterSpacing: "-1px",
            }}
          >
            Uyingizni Kelajak Bilan <br />
            <span style={{ color: "#2189ff" }}>SmartThings</span> Orqali
            Bog'lang
          </h1>

          <p
            style={{
              color: "#888",
              fontSize: "18px",
              maxWidth: "650px",
              margin: "20px auto 40px",
              lineHeight: "1.6",
            }}
          >
            Barcha maishiy texnika, chiroqlar, xavfsizlik kameralari va aqlli
            sensorlarni bitta intuitiv ilova orqali dunyoning istalgan
            nuqtasidan boshqaring.
          </p>

          <div
            style={{
              display: "flex",
              gap: "16px",
              justifyContent: "center",
              marginBottom: "60px",
            }}
          >
            <button
              style={{
                backgroundColor: "#2189ff",
                color: "#fff",
                padding: "16px 36px",
                borderRadius: "30px",
                border: "none",
                fontSize: "16px",
                fontWeight: "700",
                cursor: "pointer",
              }}
            >
              Ilovani Yuklab Olish
            </button>
            <button
              style={{
                backgroundColor: "transparent",
                color: "#fff",
                padding: "16px 36px",
                borderRadius: "30px",
                border: "1px solid #333",
                fontSize: "16px",
                fontWeight: "700",
                cursor: "pointer",
              }}
            >
              Imkoniyatlar Tahlili
            </button>
          </div>

          <div
            style={{
              position: "relative",
              borderRadius: "24px",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.1)",
              maxHeight: "500px",
            }}
          >
            <img
              src="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQ3xoSEv4XM4CPwXTQhmwCPwp9xDkG71gn2sf4XV4HcTZSTiMoohw15kW6xCfE44WZZ7umjLIujk84LbE4"
              alt="Samsung SmartThings Interface"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, #000 0%, transparent 60%)",
              }}
            />
          </div>
        </div>
      </section>

      <section
        style={{
          borderTop: "1px solid #111",
          borderBottom: "1px solid #111",
          padding: "40px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "30px",
            textAlign: "center",
          }}
        >
          {STATS.map((stat, idx) => (
            <div key={idx}>
              <div
                style={{
                  fontSize: "40px",
                  fontWeight: "800",
                  color: "#2189ff",
                }}
              >
                {stat.value}
              </div>
              <div
                style={{ fontSize: "14px", color: "#666", marginTop: "4px" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        style={{ padding: "100px 20px", maxWidth: "1200px", margin: "0 auto" }}
      >
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h2 style={{ fontSize: "38px", fontWeight: "800" }}>
            Aqlli Uy Imkoniyatlari
          </h2>
          <p style={{ color: "#666", marginTop: "10px" }}>
            SmartThings taqdim etadigan zamonaviy funksiyalar bilan tanishing
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            gap: "24px",
          }}
        >
          {FEATURES.map((feat) => (
            <div
              key={feat.id}
              style={{
                backgroundColor: "#0a0a0a",
                borderRadius: "20px",
                overflow: "hidden",
                border: "1px solid #1f1f1f",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  height: "200px",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <img
                  src={feat.image}
                  alt={feat.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div style={{ padding: "24px", flex: 1 }}>
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    marginBottom: "10px",
                  }}
                >
                  {feat.title}
                </h3>
                <p
                  style={{ color: "#777", fontSize: "14px", lineHeight: "1.6" }}
                >
                  {feat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        style={{
          padding: "80px 20px",
          backgroundColor: "#050505",
          borderTop: "1px solid #111",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <h2 style={{ fontSize: "38px", fontWeight: "800" }}>
              Mos Keladigan Smart Qurilmalar
            </h2>
            <p style={{ color: "#666", marginTop: "10px" }}>
              SmartThings bilan uzviy ishlaydigan Samsung va hamkor qurilmalar
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: "20px",
            }}
          >
            {COMPATIBLE_DEVICES.map((dev, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: "#0d0d0d",
                  borderRadius: "16px",
                  overflow: "hidden",
                  border: "1px solid #1a1a1a",
                  transition: "transform 0.3s",
                }}
              >
                <div style={{ height: "180px" }}>
                  <img
                    src={dev.img}
                    alt={dev.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div style={{ padding: "16px" }}>
                  <h4
                    style={{
                      fontSize: "16px",
                      fontWeight: "700",
                      marginTop: "4px",
                    }}
                  >
                    {dev.name}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{ padding: "100px 20px", maxWidth: "1000px", margin: "0 auto" }}
      >
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h2 style={{ fontSize: "38px", fontWeight: "800" }}>
            Qanday Ulash Mumkin?
          </h2>
          <p style={{ color: "#666", marginTop: "10px" }}>
            4 ta oddiy qadamda uyingizni intellektual boshqaruvga o'tkazing
          </p>
        </div>

        <div style={{ display: "grid", gap: "20px" }}>
          {HOW_IT_WORKS.map((hw, idx) => (
            <div
              key={idx}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "24px",
                backgroundColor: "#080808",
                padding: "24px 32px",
                borderRadius: "16px",
                border: "1px solid #141414",
              }}
            >
              <div>
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: "700",
                    marginBottom: "4px",
                  }}
                >
                  {hw.title}
                </h3>
                <p style={{ color: "#666", fontSize: "14px" }}>{hw.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        style={{
          padding: "100px 20px",
          textAlign: "center",
          background: "linear-gradient(180deg, #000 0%, #0a1628 100%)",
          borderTop: "1px solid #111",
        }}
      >
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2
            style={{ fontSize: "40px", fontWeight: "800", lineHeight: "1.2" }}
          >
            Bugundanoq Smart Home Tajribasini Boshlang
          </h2>
          <p style={{ color: "#888", marginTop: "16px", marginBottom: "32px" }}>
            Ilovani bepul yuklab oling va barcha qurilmalaringizni bitta
            tarmoqqa birlashtiring.
          </p>
          <div
            style={{ display: "flex", gap: "16px", justifyContent: "center" }}
          >
            <button
              style={{
                backgroundColor: "#fff",
                color: "#000",
                padding: "14px 28px",
                borderRadius: "12px",
                border: "none",
                fontWeight: "700",
                cursor: "pointer",
              }}
            >
              App Store
            </button>
            <button
              style={{
                backgroundColor: "#fff",
                color: "#000",
                padding: "14px 28px",
                borderRadius: "12px",
                border: "none",
                fontWeight: "700",
                cursor: "pointer",
              }}
            >
              Google Play
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
