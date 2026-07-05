import Image from "next/image";
import Backgroundc from "../../../images/S26Background.png";
import Cbackground from "../../../images/S26and17cb.png";
import SamsungPen from "../../../images/SamsungPen.png";
import Iphone17promax from "../../../images/promax17.png";
import { FaPenAlt } from "react-icons/fa";
import { MdCameraAlt } from "react-icons/md";
import { BsCpuFill } from "react-icons/bs";
import { IoBatteryCharging } from "react-icons/io5";
import { RiShieldCheckFill } from "react-icons/ri";
import { HiSparkles } from "react-icons/hi2";

import Ultras26 from "../../../images/Ultras26.png";

const features = [
  {
    icon: <FaPenAlt size={28} />,
    title: "Built-in S Pen",
    description:
      "Write, draw and take notes naturally with the integrated S Pen.",
  },
  {
    icon: <MdCameraAlt size={28} />,
    title: "200MP Camera",
    description:
      "Capture stunning detail with Samsung's advanced camera system.",
  },
  {
    icon: <HiSparkles size={28} />,
    title: "Galaxy AI",
    description:
      "Smart AI tools help you search, edit, translate and create faster.",
  },
  {
    icon: <IoBatteryCharging size={28} />,
    title: "All-day Battery",
    description:
      "Stay powered throughout your day with a long-lasting battery.",
  },
  {
    icon: <RiShieldCheckFill size={28} />,
    title: "Privacy Screen",
    description: "Keep your content secure with enhanced privacy features.",
  },
  {
    icon: <BsCpuFill size={28} />,
    title: "Snapdragon 8 Elite",
    description:
      "Flagship performance for gaming, multitasking and AI workloads.",
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
        <Image
          src={Backgroundc}
          alt="Samsung Galaxy S26 Ultra dark background"
        />
      </section>

      <h1
        style={{
          color: "white",
          fontSize: "130px",
          position: "absolute",
          top: "100px",
          left: "610px",
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
                color: "white",
                width: "290px",
                textAlign: "center",
                height: "97px",
                borderRadius: "50px",
                marginTop: "50px",
                backgroundColor: "transparent",
                fontSize: "36px",
                border: "1px solid white",
              }}
              className="S26hover"
            >
              Ko'rib chiqish
            </button>
          </a>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "20px",
            borderRadius: "20px",
            alignItems: "flex-start",
          }}
        >
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
            5G internet
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
            Uzoq batareya hayoti
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
            Premium dizayn
          </button>
        </div>
      </section>

      <div style={{ marginBottom: "55px", height: "fit-content" }}>
        <section
          style={{
            width: "100%",
            display: "flex",
            gap: "30px",
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
              marginLeft: "15px",
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
            <Image
              src={Ultras26}
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
            <Image
              src={Iphone17promax}
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
          minHeight: "100vh",
          background: "#fff",
          padding: "80px 60px",
        }}
      >
        <div
          style={{
            maxWidth: "2200px",
            margin: "0 auto",
          }}
        >
          <p
            style={{
              textAlign: "center",
              color: "#4F46E5",
              fontWeight: "600",
              marginBottom: "10px",
            }}
          >
            Samsung S26 Ultra
          </p>

          <h1
            style={{
              fontSize: "56px",
              fontWeight: "700",
              textAlign: "center",
              marginBottom: "15px",
            }}
          >
            Powerful Features.
            <br />
            Built for Real Life.
          </h1>

          <p
            style={{
              textAlign: "center",
              fontSize: "20px",
              color: "#666",
              maxWidth: "700px",
              margin: "0 auto 70px",
              lineHeight: "1.6",
            }}
          >
            Discover the features that make the Samsung S26 Ultra one of the
            most powerful smartphones ever created.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(390px, 1fr))",
              gap: "25px",
            }}
          >
            {features.map((feature, index) => (
              <div
                key={index}
                style={{
                  background: "#fff",
                  border: "1px solid #E8E8E8",
                  borderRadius: "24px",
                  padding: "35px",
                  minHeight: "290px",
                  boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
                  cursor: "pointer",
                }}
              >
                <div style={{display:"flex", gap:"50px"}}>
                <div
                  style={{
                    width: "65px",
                    height: "65px",
                    borderRadius: "16px",
                    background: "#EEF2FF",
                    display: "flex",
                    marginTop:"0px",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#4F46E5",
                    marginBottom: "25px",
                  }}
                >
                  {feature.icon}
                </div>

                <h2
                  style={{
                    fontSize: "30px",
                    marginBottom: "15px",
                    fontWeight: "700",
                  }}
                >
                  {feature.title}
                </h2>
            </div>
                <p
                  style={{
                    fontSize: "18px",
                    color: "#666",
                    lineHeight: "1.7",
                  }}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
