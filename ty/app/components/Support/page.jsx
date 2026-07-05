import { BsChatLeftTextFill } from "react-icons/bs";
import { FaHandsHelping } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdAddIcCall, MdTv } from "react-icons/md";
import Supportimg from "../../../images/SupportImage.png";
import Image from "next/image";
import { FiSmartphone } from "react-icons/fi";
import { RiFridgeLine } from "react-icons/ri";
export default function Support() {
  return (
    <div>
      <section
        style={{
          marginBottom: "100px",
          minHeight: "10px",
        }}
      >
        <Image src={Supportimg} alt="" width={1600} height={300} />
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
      Yordam Kerakmi?        </h1>
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
      <h1
        style={{ fontSize: "60px", marginLeft: "450px", marginBottom: "40px" }}
      >
      Qanday yordam kerak?
      </h1>

      <section style={{ marginLeft: "210px" }}>
        <div style={{ display: "flex", gap: "60px" }}>
          <div
            id="Chat"
            style={{
              maxWidth: "250px",
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
              maxHeight: "230px",
              borderRadius: "6px",
            }}
          >
            <BsChatLeftTextFill
              style={{
                marginTop: "30px",
                marginLeft: "90px",
                width: "70px",
                height: "60px",
              }}
            />
            <h3 style={{ fontSize: "180%", marginLeft: "47px" }}>Gaplashish</h3>
            <p style={{ fontSize: "18px", marginLeft: "30px" }}>
              telefonlar bo'yicha 24/7 yordam xizmat
            </p>
          </div>
          <div
            id="Call"
            style={{
              maxWidth: "250px",
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
              maxHeight: "230px",
              borderRadius: "6px",
            }}
          >
            <MdAddIcCall
              style={{
                marginLeft: "90px",
                marginTop: "30px",
                width: "70px",
                height: "60px",
              }}
            />
            <h3 style={{ fontSize: "180%", marginLeft: "47px" }}>
              Telefon qiling
            </h3>
            <p style={{ fontSize: "18px", marginLeft: "17px" }}>
              Samsung mutaxassis bilan telefon orqali bog'laning.
               </p>
          </div>
          <div
            id="Location"
            style={{
              maxWidth: "250px",
              maxHeight: "230px",
              textAlign:"center",
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",

              borderRadius: "6px",
            }}
          >
            <FaLocationDot
              style={{
                marginTop: "30px",
                marginLeft: "90px",
                width: "70px",
                height: "60px",
              }}
            />
            <h3 style={{ fontSize: "180%", marginLeft: "23px" }}>
              Yordam markazi  
            </h3>
            <p style={{ fontSize: "18px", marginLeft: "13px" }}>
               eng yaqin Samsung servis markazini toping.
            </p>
          </div>
          <div
            id="Help"
            style={{
              maxWidth: "250px",
              height: "230px",
              textAlign:"center",
              borderRadius: "6px",
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
            }}
          >
            <FaHandsHelping
              style={{
                marginLeft: "90px",
                marginTop: "30px",
                width: "70px",
                height: "60px",
              }}
            />
            <h3
              style={{
                fontSize: "180%",
                marginLeft: "27px",
              }}
            >
              Texnik yordam
            </h3>
            <p style={{ fontSize: "18px", marginLeft: "15px" }}>
             Mutaxassislarimizdan 24/7 jonli yordam oling.
            </p>
          </div>
        </div>
        <button
          style={{
            width: "350px",
            height: "90px",
            marginLeft: "420px",
            marginTop: "60px",
            borderRadius: "30px",
            border: "1px solid black",
            fontSize: "1.7rem",
          }}
        >
          <a href="https://www.samsung.com/us/support/">
            
            <span style={{ color: "green", fontSize:"30px"}}>Yordam uchun</span>
          </a>
        </button>
      </section>
      <section style={{ marginTop: "75px", fontSize: "50px", color: "black" }}>
        <h1
          style={{
            marginLeft: "40px",
            marginTop: "100px",
            marginBottom: "50px",
          }}
        >
          Texnik Yordam kategoriyalar ↴ 
        </h1>
        <div style={{ display: "flex", gap: "29px" }}>
          <div
            id="Cards"
            style={{
              width: "540px",
              height: "350px",
              boxShadow:
                "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
              borderRadius: "30px",
            }}
          >
            <div id="card">
              <div
                style={{
                  width: "70px",
                  height: "70px",
                  display: "flex",
                  backgroundColor: "#DFE0FF",
                  borderRadius: "10px",
                  marginLeft: "50px",
                  marginTop: "20px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FiSmartphone />
              </div>
              <h2 style={{ marginLeft: "45px" }}>Telefon</h2>
              <p style={{ fontSize: "22px", marginLeft: "45px" }}>
                Galaxy Telefon, Planshet, soat, va headphone
              </p>
              <p
                style={{
                  fontSize: "32px",
                  marginLeft: "42px",
                  marginTop: "50px",
                  color: "#2d00b3",
                }}
              >
                <a href="https://www.samsung.com/us/support/mobile/">
                  Telefon yordam uchun →
                </a>
              </p>
            </div>
          </div>
          <div
            id="Cards"
            style={{
              width: "540px",
              height: "350px",
              boxShadow:
                "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
              borderRadius: "30px",
            }}
          >
            <div id="card">
              <div
                style={{
                  width: "70px",
                  height: "70px",
                  display: "flex",
                  backgroundColor: "#DFE0FF",
                  borderRadius: "10px",
                  marginLeft: "50px",
                  marginTop: "20px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <MdTv />
              </div>
              <h2 style={{ marginLeft: "45px" }}>TV & Audio</h2>
              <p style={{ fontSize: "22px", marginLeft: "45px" }}>
                OLED, QLED, Soundbars, va Projectors
              </p>
              <p
                style={{
                  fontSize: "32px",
                  marginLeft: "42px",
                  marginTop: "50px",
                  color: "#2d00b3",
                }}
              >
                {" "}
                <a href="https://www.samsung.com/us/support/televisions-home-audio/television-home-audio-accessories/">
                 TV yordam uchun →
                </a>
              </p>
            </div>
          </div>
          <div
            id="Cards"
            style={{
              width: "540px",
              height: "350px",
              boxShadow:
                "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
              borderRadius: "30px",
            }}
          >
            <div id="card">
              <div
                style={{
                  width: "70px",
                  height: "70px",
                  display: "flex",
                  backgroundColor: "#DFE0FF",
                  borderRadius: "10px",
                  marginLeft: "50px",
                  marginTop: "20px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <RiFridgeLine />
              </div>
              <h2 style={{ marginLeft: "45px" }}>Uy jihozlar</h2>
              <p style={{ fontSize: "22px", marginLeft: "45px" }}>
                Muzlatgich, kir yuvish, va gaz
              </p>
              <p
                style={{
                  fontSize: "32px",
                  marginLeft: "42px",
                  marginTop: "50px",
                  color: "#2d00b3",
                }}
              >
                <a href="https://www.samsung.com/us/support/home-appliances/refrigerators/">
                  Jihozlar yordam uchun →
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
