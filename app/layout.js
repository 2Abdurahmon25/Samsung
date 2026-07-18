"use client";
import Link from "next/link";
import { Jost } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import NavLogo from "../images/samsungnavlogo.png";
import { FaFacebook, FaInstagram, FaYoutube, FaGlobe } from "react-icons/fa";

const inter = Jost({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const footerLink = {
  color: "rgba(255,255,255,0.7)",
  textDecoration: "none",
  transition: "color 0.3s ease",
};

export default function RootLayout({ children }) {
    return (
    <html lang="en">
      <body className={inter.variable} style={{ margin: 0 }}>
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            background: "#fff",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "40px",
              background: "#2d00b3",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                fontSize: "18px",
                fontWeight: "900",
                letterSpacing: "2px",
                textTransform: "uppercase",
              }}
            >
              Samsung'ga xush kelibsiz
            </span>
          </div>

          <nav
            style={{
              width: "100%",
              height: "70px",
              background: "#2d00b3",
              color: "white",
              display: "flex",
              gap: "1px",
              alignItems: "center",
              justifyContent: "center",
              padding: "0 2rem",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "31px",
                alignItems: "center",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <button
                style={{
                  borderRadius: "100px",
                  width: "fit-content",
                  padding: "8px",
                }}
                className="btnhovercolor"
              >
                <Link
                  href="/"
                  style={{
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  Bosh Sahifa
                </Link>
              </button>
              <button
                style={{
                  borderRadius: "100px",
                  width: "fit-content",
                  padding: "8px",
                }}
                className="btnhovercolor"
              >
                <Link
                    href="/components/AboutUs"
                  style={{
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  Biz Haqimizda
            </Link>
              </button>

              <button
                style={{
                  borderRadius: "100px",
                  width: "fit-content",
                  padding: "8px",
                }}
                className="btnhovercolor"
              >
                <Link
                  href="/components/Foldables"
                  style={{
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  Fold & Flip
                </Link>
              </button>

              <button
                style={{
                  borderRadius: "100px",
                  width: "fit-content",
                  padding: "8px",
                }}
                className="btnhovercolor"
              >
                <Link
                  href="/components/Galaxyai"
                  style={{
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  Galaxy AI 
                </Link>
              </button>
              <button
                style={{
                  borderRadius: "100px",
                  width: "fit-content",
                  padding: "8px",
                }}
                className="btnhovercolor"
              >
                <Link
                  href="/components/SmartHome"
                  style={{
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  SmartThings
                </Link>
              </button>

              <button
                style={{
                  borderRadius: "100px",
                  width: "fit-content",
                  padding: "8px",
                }}
                className="btnhovercolor"
              >
                <Link
                  href="/components/HeadPhone"
                  style={{
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  Airbuds
                </Link>
              </button>

              <button
                style={{
                  borderRadius: "100px",
                  width: "fit-content",
                  padding: "8px",
                }}
                className="btnhovercolor"
              >
                <Link
                  href="/components/S26"
                  style={{
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  S26
                </Link>
              </button>

              <button
                style={{
                  borderRadius: "100px",
                  width: "fit-content",
                  padding: "8px",
                }}
                className="btnhovercolor"
              >
                <Link
                  href="/components/SmartHome"
                  style={{
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  Maishiy texnika
                </Link>
              </button>

              <button
                style={{
                  borderRadius: "100px",
                  width: "fit-content",
                  padding: "8px",
                }}
                className="btnhovercolor"
              >
                <Link
                  href="/components/Watches"
                  style={{
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  Smart Watch
                </Link>
              </button>

              <button
                style={{
                  borderRadius: "100px",
                  width: "fit-content",
                  padding: "8px",
                }}
                className="btnhovercolor"
              >
                <Link
                  href="/components/Television"
                  style={{
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  Televizor
                </Link>
              </button>

              <button
                style={{
                  borderRadius: "100px",
                  width: "fit-content",
                  padding: "8px",
                }}
                className="btnhovercolor"
              >
                <Link
                  href="/components/Monitor"
                  style={{
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  Monitor
                </Link>
              </button>

              <button
                style={{
                  borderRadius: "100px",
                  width: "fit-content",
                  padding: "8px",
                }}
                className="btnhovercolor"
              >
                <Link
                  href="/components/Support"
                  style={{
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  Yordam
                </Link>
              </button>
            </div>
          </nav>

          <main style={{ flex: 1 }}>{children}</main>

          <footer
            style={{
              background: "#0B0B0B",
              color: "rgba(255,255,255,0.7)",
              borderTop: "1px solid rgba(255,255,255,0.08)",
              padding: "64px 24px 32px",
            }}
          >
            <div
              style={{
                maxWidth: "1280px",
                margin: "0 auto",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "40px",
              }}
            >
              <div>
                <Image
                  src={NavLogo}
                  alt="Samsung"
                  height={28}
                  style={{ objectFit: "contain", marginBottom: "16px" }}
                />
                <p style={{ fontSize: "14px", lineHeight: 1.6, maxWidth: "260px" }}>
                  Samsung'ga xush kelibsiz. Eng zamonaviy texnologiyalar va
                  qurilmalar hayotingizni yaxshilaydi.
                </p>
              </div>

              <div>
                <h4 style={{ color: "#fff", fontSize: "15px", margin: "0 0 16px", letterSpacing: "0.5px" }}>
                  Mahsulotlar
                </h4>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "14px" }}>
                  <Link href="/components/S26" style={footerLink}>Telefonlar</Link>
                  <Link href="/components/Television" style={footerLink}>Televizorlar</Link>
                  <Link href="/components/Monitor" style={footerLink}>Monitorlar</Link>
                  <Link href="/components/SmartHome" style={footerLink}>Maishiy texnika</Link>
                </div>
              </div>

              <div>
                <h4 style={{ color: "#fff", fontSize: "15px", margin: "0 0 16px", letterSpacing: "0.5px" }}>
                  Qo'llab-quvvatlash
                </h4>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "14px" }}>
                  <Link href="/components/Support" style={footerLink}>Yordam</Link>
                  <Link href="/components/Galaxyai" style={footerLink}>Sun'iy intellekt</Link>
                  <Link href="/components/Ecosystem" style={footerLink}>SmartThings</Link>
                  <Link href="/components/Watches" style={footerLink}>Smart Watch</Link>
                </div>
              </div>

              <div>
                <h4 style={{ color: "#fff", fontSize: "15px", margin: "0 0 16px", letterSpacing: "0.5px" }}>
                  Bizni kuzatib boring
                </h4>
                <div style={{ display: "flex", gap: "18px", fontSize: "22px", color: "#fff" }}>
                  <a href="#" style={{ color: "inherit" }}><FaFacebook /></a>
                  <a href="#" style={{ color: "inherit" }}><FaInstagram /></a>
                  <a href="#" style={{ color: "inherit" }}><FaYoutube /></a>
                  <a href="#" style={{ color: "inherit" }}><FaGlobe /></a>
                </div>
              </div>
            </div>

            <div
              style={{
                maxWidth: "1280px",
                margin: "48px auto 0",
                paddingTop: "24px",
                borderTop: "1px solid rgba(255,255,255,0.08)",
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "12px",
                fontSize: "13px",
              }}
            >
              <span>© 2026 Samsung Demo. Barcha huquqlar himoyalangan.</span>
              <span style={{ display: "flex", gap: "20px" }}>
                <a href="#" style={footerLink}>Maxfiylik</a>
                <a href="#" style={footerLink}>Shartlar</a>
                <a href="#" style={footerLink}>Qo'llab-quvvatlash</a>
              </span>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
