import Image from "next/image";
import Backgroundc from "../../../images/S26Background.png";
import Cbackground from "../../../images/S26and17cb.png";
import SamsungPen from "../../../images/SamsungPen.png";
import Iphone17promax from "../../../images/promax17.png";
import { FaPenAlt } from "react-icons/fa";
import { MdCameraAlt } from "react-icons/md";
import { IoBatteryCharging } from "react-icons/io5";
import { RiShieldCheckFill } from "react-icons/ri";
import { HiSparkles } from "react-icons/hi2";
import { FaHouseSignal } from "react-icons/fa6";
import Ultras26 from "../../../images/Ultras26.png";
import Gridspen from "../../../images/DisplayGridSpen-removebg-preview.png";
import GridCamera from "../../../images/DisplayGridCamera-removebg-preview.png";
import GridAi from "../../../images/DisplayGridAi-removebg-preview.png";
import GridBattery from "../../../images/DisplayGridBattery-removebg-preview.png";
import Gridhome from "../../../images/DisplayGridSmartome-removebg-preview.png";
import GridPrivacy from "../../../images/DisplayGridPrivacy-removebg-preview.png";

const features = [
  {
    icon: <FaPenAlt size={50} />,
    title: "Yengil S Pen",
    description: "S26'ingiz S pen bilan",
    description2: "bemalol yozing-chizing",
    image: Gridspen,
  },
  {
    icon: <MdCameraAlt size={50} />,
    title: "200 MP Kamera",
    description: "S26'ning kamerasi",
    description2: " bilan 4k rasmga oling",
    image: GridCamera,
  },
  {
    icon: <HiSparkles size={50} />,
    title: "Galaxy AI",
    description: "Galaxy AI siz uchun",
    description2: "avtomatik buyruq bajaradi",
    image: GridAi,
  },
  {
    icon: <IoBatteryCharging size={50} />,
    title: "24 soat batareya",
    description: "1 kunga yetarli",
    description2: "batareyani bemalol ishlating",
    image: GridBattery,
  },
  {
    icon: <RiShieldCheckFill size={50} />,
    title: "Maxfiy ekran",
    description: "Telefoningizni ekrani",
    description2: "faqat sizga ko'rinadi",
    image: GridPrivacy,
  },
  {
    icon: <FaHouseSignal size={50} />,
    title: "Ulanish",
    description: "Tez va barqaror",
    description2: "Samsung jihozga ulanish",
    image: Gridhome,
  },
];

const specRowStyle = {
  color: "black",
  fontSize: "41px",
  marginTop: "31px",
  position: "relative",
  padding: "0 40px",
};

export default function S26() {
  return (
    <div>
      <section style={{ position: "relative" }}>
        <Image          loading="lazy"          src={Backgroundc}
          alt="Samsung Galaxy S26 Ultra dark background"
        />
      </section>

      <h1
        style={{
          color: "white",
          fontSize: "130px",
          position: "absolute",
          top: "100px",
          left: "510px",
          fontWeight:"500"
        }}
      >
        S26 Ultra
      </h1>

      <section
        style={{
          position: "absolute",
          top: "350px",
          left: "60px",
          width: "calc(100% - 120px)",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: "50px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "600px",
            marginTop: "50px",
            gap: "30px",
          }}
        >
          <p
            style={{
              fontSize: "32px",
              color: "white",
              textAlign: "left",
            }}
          >
            Eng yaxshi kamera va uzoq <br /> batareya hayoti Oddiy ishlatish,{" "}
            <br /> 5G tezligi va premium dizayn
          </p>
          <a href="https://www.samsung.com/us/smartphones/galaxy-s26-ultra/">
            <button
              style={{
                color: "black",
                width: "290px",
                textAlign: "center",
                height: "97px",
                borderRadius: "50px",
                marginTop: "10px",
                backgroundColor: "transparent",
                fontSize: "36px",
                border: "3px solid black",
              }}
              className="S26hover"
            >
              <span style={{color:"white"}}>Ko'r</span>ib chiqish
            </button>
          </a>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "20px",
            borderRadius: "20px",
          }}
        >
          <button
            style={{
              color: "white",
              width: "370px",
              textAlign: "center",
              height: "97px",
              borderRadius: "50px",
              backgroundColor: "transparent",
              fontSize: "36px",
              border: "1px solid white",
            }}
          >
            5G internet
          </button>
          <button
            style={{
              color: "white",
              width: "370px",
              textAlign: "center",
              height: "97px",
              borderRadius: "50px",
              marginTop: "20px",
              backgroundColor: "transparent",
              fontSize: "36px",
              border: "1px solid white",
            }}
          >
            Uzoq batareya hayot
          </button>
          <button
            style={{
              color: "white",
              width: "370px",
              textAlign: "center",
              height: "97px",
              borderRadius: "50px",
              marginTop: "50px",
              backgroundColor: "transparent",
              fontSize: "36px",
              border: "1px solid white",
            }}
          >
            ekslusiz dizayn
          </button>
        </div>
      </section>

      <div style={{ marginBottom: "55px", height: "fit-content" }}>
        <section
          style={{
            width: "100%",
            display: "flex",
            gap: "20px",
          }}
        >
          <div
            id="Samsung"
            style={{
              border: "3px solid black",
              position: "relative",
              width: "48%",
              flex: "1",
              backgroundColor: "transparent",
              boxShadow:
                "0 0 30px rgba(49, 179, 255, 0.6), 0 0 60px rgba(23, 186, 250, 0.4), 0 10px 30px rgba(23, 124, 255, 0.3)",
              height: "700px",
              marginLeft: "5px",
              marginTop: "30px",
              borderRadius: "70px",
              overflow: "hidden",
            }}
          >
            <button
              style={{
                border: "3px solid black",
                marginLeft: "10px",
                marginTop: "10px",
                borderRadius: "50px",
                position: "relative",
                width: "56%",
              }}
            >
              <h1
                style={{
                  color: "black",
                  fontWeight: "900",
                  fontSize: "65px",
                  marginLeft: "40px",
                }}
              >
                S26 Ultra
              </h1>
            </button>

            <h1 style={{ ...specRowStyle, textAlign: "left" }}>512 Gigabayt</h1>
            <h1 style={{ ...specRowStyle, textAlign: "left" }}>
              215 gram og'irlik
            </h1>
            <h1 style={{ ...specRowStyle, textAlign: "left" }}>S pen bor</h1>
            <h1 style={{ ...specRowStyle, textAlign: "left" }}>200MP kamera</h1>
            <h1 style={{ ...specRowStyle, textAlign: "left" }}>
              2600N yorug'lik
            </h1>
            <h1 style={{ ...specRowStyle, textAlign: "left" }}>
              maxfiylik ekran
            </h1>
            <Image              loading="lazy"              src={Ultras26}
              alt="S"
              style={{
                position: "absolute",
                right: "-20px",
                bottom: "-20px",
                height: "620px",
                width: "auto",
                objectFit: "contain",
                pointerEvents: "none",
                userSelect: "none",
              }}
            />
          </div>

          <div
            id="Phone"
            style={{
              border: "3px solid black",
              position: "relative",
              width: "48%",
              flex: "1",
              backgroundColor: "transparent",
              boxShadow:
                "0 0 30px rgba(89, 7, 189, 0.6), 0 0 60px rgba(147, 46, 255, 0.4), 0 10px 30px rgba(0, 195, 255, 0.3)",
              height: "700px",
              marginLeft: "15px",
              marginTop: "30px",
              borderRadius: "70px",
              overflow: "hidden",
            }}
          >
            <button
              style={{
                border: "3px solid black",
                marginLeft: "12px",
                marginRight: "30px",
                marginTop: "15px",
                borderRadius: "50px",
                position: "relative",
                width: "56%",
                display: "block",
              }}
            >
              <h1
                style={{
                  color: "black",
                  fontWeight: "850",
                  fontSize: "65px",
                  marginLeft: "10px",
                }}
              >
                17 Pro max
              </h1>
            </button>

            <h1 style={{ ...specRowStyle, textAlign: "left" }}>256 Gigabayt</h1>
            <h1 style={{ ...specRowStyle, textAlign: "left" }}>
              233 gram og'irlik
            </h1>
            <h1
              style={{
                ...specRowStyle,
                textAlign: "left",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              S pen yo'q
            </h1>
            <h1 style={{ ...specRowStyle, textAlign: "left" }}>48MP kamera</h1>
            <h1 style={{ ...specRowStyle, textAlign: "left" }}>
              3000N yorug'lik
            </h1>
            <h1 style={{ ...specRowStyle, textAlign: "left" }}>
              maxfiylik ekran yo'q
            </h1>
            <Image              loading="lazy"              src={Iphone17promax}
              alt="za"
              style={{
                position: "absolute",
                left: "350px",
                bottom: "-20px",
                height: "620px",
                width: "auto",
                objectFit: "contain",
              }}
            />
          </div>
        </section>
      </div>

      <section
        style={{
          Height: "100vh",
          background: "#fff",
          padding: "80px 60px",
        }}
      >
        <div
          style={{
            maxWidth: "2200px",
          }}
        >
        

          <h1
            style={{
              fontSize: "56px",
              fontWeight: "700",
              textAlign: "center",
              marginBottom: "15px",
            }}
          >
            Samsung S26 Xususiyatlari
          </h1>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(420px, 1fr))",
              gap: "15px",
            }}
          >
            {features.map((feature, index) => (
              <div
                key={index}
                style={{
                  position: "relative",
                  background: "#fff",
                  border: "1px solid #ECECEC",
                  borderRadius: "24px",
                  minHeight: "220px",
                  overflow: "hidden",
                  padding: "28px",
                  boxShadow: "0 8px 25px rgba(0,0,0,.06)",
                }}
              >
                <div
                  style={{
                    width: "52%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "16px",
                      background: "#EEF2FF",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "#3F46E8",
                      marginBottom: "22px",
                      fontSize: "26px",
                    }}
                  >
                    {feature.icon}
                  </div>

                  <h2
                    style={{
                      fontSize: "32px",
                      fontWeight: "700",
                      marginBottom: "14px",
                      color: "#111",
                    }}
                  >
                    {feature.title}
                  </h2>

                  <p
                    style={{
                      fontSize: "18px",
                      lineHeight: "1.7",
                      color: "#666",
                      maxWidth: "260px",
                    }}
                  >
                    {feature.description}
                    <br />
                    {feature.description2}
                  </p>
                </div>

                <Image                  loading="lazy"                  src={feature.image}
                  alt={feature.title}
                  width={220}
                  height={120}
                  style={{
                    position: "absolute",
                    right: "20px",
                    bottom: "-20px",
                    width: "200px",
                    height: "auto",
                    objectFit: "contain",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
