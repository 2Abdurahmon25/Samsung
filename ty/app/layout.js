"use client";
import Link from "next/link";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import NavLogo from "../images/samsungnavlogo.png";
import { FaFacebook, FaInstagram, FaYoutube, FaGlobe } from "react-icons/fa";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

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
                gap: "16px",
                alignItems: "center",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <button
                style={{
                  borderRadius: "100px",
                  width: "150px",
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
                  Home
                </Link>
              </button>
              <button
                style={{
                  borderRadius: "100px",
                  width: "150px",
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
                  Haqimizda
            </Link>
              </button>

              <button
                style={{
                  borderRadius: "100px",
                  width: "150px",
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
                  Fold
                </Link>
              </button>

              <button
                style={{
                  borderRadius: "100px",
                  width: "110px",
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
                  AI
                </Link>
              </button>
              <button
                style={{
                  borderRadius: "100px",
                  width: "110px",
                  padding: "8px",
                }}
                className="btnhovercolor"
              >
                <Link
                  href="/components/Ecosystem"
                  style={{
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  Ulanish
                </Link>
              </button>

              <button
                style={{
                  borderRadius: "100px",
                  width: "110px",
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
                  Buds
                </Link>
              </button>

              <button
                style={{
                  borderRadius: "100px",
                  width: "110px",
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
                  width: "110px",
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
                  Jihoz
                </Link>
              </button>

              <button
                style={{
                  borderRadius: "100px",
                  width: "110px",
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
                  Soat
                </Link>
              </button>

              <button
                style={{
                  borderRadius: "100px",
                  width: "110px",
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
                  TV
                </Link>
              </button>

              <button
                style={{
                  borderRadius: "100px",
                  width: "110px",
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
        </div>
      </body>
    </html>
  );
}
