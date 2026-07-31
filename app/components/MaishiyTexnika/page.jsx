"use client";
import { useState } from "react";
import Image from "next/image";
const CATEGORIES = {
  all: "Barchasi",
  kitchen: "Oshxona",
  laundry: "Kir Yuvish Xonasi",
  livingRoom: "Mehmonxona",
  bedroom: "Yotoqxona",
  cleaning: "Tozalash",
  wholeHome: "Butun Uy",
};
const PRODUCTS_DATA = [
  {
    id: "fridge-4door-ai-home",
    category: CATEGORIES.kitchen,
    name: "Bespoke AI 4-Door French Door",
    description:
      "AI Home va AI Hybrid Cooling bilan 4 eshikli frantsuz eshikli muzlatgich.",
    image:
      "https://images.samsung.com/is/image/samsung/p6pim/uz_uz/rm90f67c1wwt/gallery/uz-uz-4-door-french-door-refrigerators-with-ai-home-and-ai-hybrid-cooling-rm90f67c1wwt-thumb-545630317?$Q90_330_330_F_PNG$",
    specs: ["AI Home", "AI Hybrid Cooling", "4-Door French Door"],
    badges: ["AI Texnologiya", "Bespoke"],
  },
  {
    id: "fridge-9inch-ai-home",
    category: CATEGORIES.kitchen,
    name: "Bespoke AI 9-inch AI Home",
    description:
      "9 dyuymli AI Home ekrani bilan aqlli muzlatgich.",
    image:
      "https://images.samsung.com/is/image/samsung/p6pim/uz_uz/rs90f65d1fwt/gallery/uz-uz-rs80f-9-inch-ai-home-rs90f65d1fwt-thumb-545629591?$Q90_330_330_F_PNG$",
    specs: ["9 AI Home Screen", "AI Energy Mode", "SmartThings"],
    badges: ["AI Texnologiya"],
  },
  {
    id: "fridge-aod",
    category: CATEGORIES.kitchen,
    name: "Bespoke AI AOD Refrigerator",
    description:
      "Always On Display bilan zamonaviy muzlatgich.",
    image:
      "https://images.samsung.com/is/image/samsung/p6pim/uz_uz/rs80f65m1bwt/gallery/uz-uz-rs90f-aod-rs80f65m1bwt-thumb-545628874?$Q90_330_330_F_PNG$",
    specs: ["Always On Display", "AI Energy Mode", "Space Max"],
    badges: ["Bespoke"],
  },
  {
    id: "fridge-basic",
    category: CATEGORIES.kitchen,
    name: "Bespoke AI Basic Refrigerator",
    description:
      "Asosiy funksiyalar va zamonaviy dizayn bilan muzlatgich.",
    image:
      "https://images.samsung.com/is/image/samsung/p6pim/uz_uz/rs70f65q1twt/gallery/uz-uz-rs90f-basic-rs70f65q1twt-thumb-545627498?$Q90_330_330_F_PNG$",
    specs: ["AI Cooling", "Digital Inverter", "Space Max"],
    badges: [],
  },
  {
    id: "fridge-tstyle-see-thru",
    category: CATEGORIES.kitchen,
    name: "T-Style See-Thru Door Refrigerator",
    description:
      "Shaffof eshikli T-Style frantsuz eshikli muzlatgich.",
    image:
      "https://images.samsung.com/is/image/samsung/p6pim/uz_uz/rf65db970012wt/gallery/uz-uz-t-style-french-door-see-thru-door-rf65db970012wt-thumb-544366826?$Q90_330_330_F_PNG$",
    specs: ["See-Thru Door", "T-Style Design", "Family Hub"],
    badges: ["Premium"],
  },
  {
    id: "fridge-top-mount-508l",
    category: CATEGORIES.kitchen,
    name: "Top Mount Freezer 508L",
    description:
      "Optimal Fresh+ va Space Max texnologiyalari bilan 508L yuqori muzlatgich.",
    image:
      "https://images.samsung.com/is/image/samsung/p6pim/uz_uz/rt42cg6000s9wt/gallery/uz-uz-top-mount-freezer-optimal-fresh-and-space-max-508715-rt42cg6000s9wt-thumb-541875841?$Q90_330_330_F_PNG$",
    specs: ["Optimal Fresh+", "Space Max", "508L"],
    badges: ["Eco"],
  },
  {
    id: "fridge-top-mount-380l",
    category: CATEGORIES.kitchen,
    name: "Top Mount Freezer 380L",
    description:
      "Optimal Fresh+ va Space Max texnologiyalari bilan 380L yuqori muzlatgich.",
    image:
      "https://images.samsung.com/is/image/samsung/p6pim/uz_uz/rt38cg6000wwwt/gallery/uz-uz-top-mount-freezer-optimal-fresh-and-space-max-508625-rt38cg6000wwwt-thumb-541860759?$Q90_330_330_F_PNG$",
    specs: ["Optimal Fresh+", "Space Max", "380L"],
    badges: ["Eco"],
  },
  {
    id: "dishwasher-dw7500",
    category: CATEGORIES.kitchen,
    name: "Dishwasher DW7500RM",
    description:
      "Yuqori samarali va jim idish yuvish mashinasi.",
    image:
      "https://images.samsung.com/is/image/samsung/p6pim/uz_uz/dw60r7070bb-wt/gallery/uz-uz-dw7500rm-dw60r7070bb-wt-thumb-533034384?$Q90_330_330_F_PNG$",
    specs: ["StormWash+", "Auto Door Open", "SmartThings"],
    badges: ["Bespoke"],
  },
  {
    id: "dishwasher-dw4000",
    category: CATEGORIES.kitchen,
    name: "Dishwasher DW4000RM 46dB",
    description:
      "Atigi 46dB shovqin bilan jim idish yuvish mashinasi.",
    image:
      "https://images.samsung.com/is/image/samsung/kz-ru-dw4000rm-dishwasher-with-less-noise-46db-dw50r4040bb-wt-frontwhite-thumb-169238629?$Q90_330_330_F_PNG$",
    specs: ["46dB Quiet", "Half Load", "SmartThings"],
    badges: ["Quiet"],
  },
  {
    id: "dishwasher-dw5500",
    category: CATEGORIES.kitchen,
    name: "Dishwasher DW5500MM",
    description:
      "Zamonaviy dizayn va yuqori samaradorlik bilan idish yuvish mashinasi.",
    image:
      "https://images.samsung.com/is/image/samsung/kz-ru-dw5500mm-dw60m5050bb-wt-frontwhite-thumb-167549561?$Q90_330_330_F_PNG$",
    specs: ["Half Load", "Express Wash", "SmartThings"],
    badges: [],
  },
  {
    id: "oven-nv7000b-builtin",
    category: CATEGORIES.kitchen,
    name: "Built-in Oven NV7000B",
    description:
      "O'rnatiladigan NV7000B devor pechi, zamonaviy pishirish imkoniyatlari.",
    image:
      "https://images.samsung.com/is/image/samsung/p6pim/uz_uz/nv7b4440vak-wt/gallery/uz-uz-nv7000b-nv7b42503ak-497012-nv7b4440vak-wt-thumb-539990968?$Q90_330_330_F_PNG$",
    specs: ["Dual Cook", "Pyrolytic Cleaning", "SmartThings"],
    badges: ["Bespoke"],
  },
  {
    id: "oven-nv7000b-black",
    category: CATEGORIES.kitchen,
    name: "Built-in Oven NV7000B Black",
    description:
      "Qora rangdagi o'rnatiladigan NV7000B devor pechi.",
    image:
      "https://images.samsung.com/is/image/samsung/p6pim/uz_uz/nv7b4125zak-wt/gallery/uz-uz-nv7000b-nb7b41301as-479540-nv7b4125zak-wt-thumb-538355225?$Q90_330_330_F_PNG$",
    specs: ["Dual Cook", "Pyrolytic Cleaning", "Black Finish"],
    badges: ["Bespoke"],
  },
  {
    id: "oven-nv7000b-white",
    category: CATEGORIES.kitchen,
    name: "Built-in Oven NV7000B White",
    description:
      "Oq rangdagi o'rnatiladigan NV7000B devor pechi.",
    image:
      "https://images.samsung.com/is/image/samsung/p6pim/uz_uz/nv7b4120zaw-wt/gallery/uz-uz-nv7000b-nb7b41301as-479535-nv7b4120zaw-wt-thumb-538355136?$Q90_330_330_F_PNG$",
    specs: ["Dual Cook", "Pyrolytic Cleaning", "White Finish"],
    badges: ["Bespoke"],
  },
  {
    id: "microwave-mw5000t",
    category: CATEGORIES.kitchen,
    name: "Microwave MW5000T",
    description:
      "Grill funksiyasi bilan kuchli mikroto'lqinli pech.",
    image:
      "https://images.samsung.com/is/image/samsung/p6pim/uz_uz/mg23t5018ae-bw/gallery/uz-uz-mw5000t-mg23t5018ae-bw-thumb-535587168?$Q90_330_330_F_PNG$",
    specs: ["Grill Function", "Ceramic Inside", "Quick Defrost"],
    badges: [],
  },
  {
    id: "microwave-ms32f303-silver",
    category: CATEGORIES.kitchen,
    name: "Microwave MS32F303TAS Silver",
    description:
      "Kumush rangdagi zamonaviy mikroto'lqinli pech.",
    image:
      "https://images.samsung.com/is/image/samsung/p6pim/uz_uz/ms23f302taskbw/gallery/uz-uz-ms32f303tas-372847-ms23f302taskbw-thumb-375178246?$Q90_330_330_F_PNG$",
    specs: ["Ceramic Inside", "Quick Defrost", "Silver Finish"],
    badges: [],
  },
  {
    id: "microwave-ms32f303-black",
    category: CATEGORIES.kitchen,
    name: "Microwave MS32F303TAS Black",
    description:
      "Qora rangdagi zamonaviy mikroto'lqinli pech.",
    image:
      "https://images.samsung.com/is/image/samsung/p6pim/uz_uz/ms23f302takkbw/gallery/uz-uz-ms32f303tas-372846-ms23f302takkbw-thumb-375178239?$Q90_330_330_F_PNG$",
    specs: ["Ceramic Inside", "Quick Defrost", "Black Finish"],
    badges: [],
  },
  {
    id: "microwave-ms32f303-white",
    category: CATEGORIES.kitchen,
    name: "Microwave MS32F303TAS White",
    description:
      "Oq rangdagi zamonaviy mikroto'lqinli pech.",
    image:
      "https://images.samsung.com/is/image/samsung/p6pim/uz_uz/ms23f301tawkbw/gallery/uz-uz-ms32f303tas-ms23f301tawkbw-thumb-375178229?$Q90_330_330_F_PNG$",
    specs: ["Ceramic Inside", "Quick Defrost", "White Finish"],
    badges: [],
  },
  {
    id: "ac-ar5000hm",
    category: CATEGORIES.bedroom,
    name: "Wall Mount AC AR5000HM",
    description:
      "Energiya tejash rejimi bilan devorga o'rnatiladigan konditsioner.",
    image:
      "https://images.samsung.com/is/image/samsung/p6pim/uz_uz/ar12txhqasinua/gallery/uz-uz-ar5000hm-wall-mount-ac-with-energy-saving-421928-ar12txhqasinua-thumb-532103001?$Q90_330_330_F_PNG$",
    specs: ["Energy Saving", "Fast Cooling", "WindFree Mode"],
    badges: ["Eco"],
  },
  {
    id: "vacuum-hand-stick",
    category: CATEGORIES.cleaning,
    name: "Hand Stick Vacuum VS6700",
    description:
      "Yengil va kuchli qo'l changyutgich.",
    image:
      "https://images.samsung.com/is/image/samsung/p6pim/uz_uz/vs15a6031r5-ev/gallery/uz-uz-vc-hand-stick-vs6700-vs15a6031r5-ev-thumb-534656170?$Q90_330_330_F_PNG$",
    specs: ["150W Suction", "Lightweight", " washable Filter"],
    badges: [],
  },
  {
    id: "vacuum-container",
    category: CATEGORIES.cleaning,
    name: "Container Vacuum Cleaner",
    description:
      "Konteynerli kuchli changyutgich.",
    image:
      "https://images.samsung.com/is/image/samsung/p6pim/uz_uz/vcc8816v36-uz/gallery/uz-uz-%D0%BA%D0%BE%D0%BD%D1%82%D0%B5%D0%B9%D0%BD%D0%B5%D1%80%D0%BD%D1%8B%D0%B9-%D0%BF%D1%8B%D0%BB%D0%B5%D1%81%D0%BE%D1%81-vcc8836v36xev-429056-vcc8816v36-uz-thumb-540091295?$Q90_330_330_F_PNG$",
    specs: ["Bagless Design", "HEPA Filter", "Large Capacity"],
    badges: [],
  },
  {
    id: "vacuum-jetbot",
    category: CATEGORIES.cleaning,
    name: "JetBot VR8000",
    description:
      "Aqlli robot changyutgich, avtomatik tozalash.",
    image:
      "https://images.samsung.com/is/image/samsung/p6pim/uz_uz/vr30t80313w-ev/gallery/uz-uz-jetbot-vr8000-vr30t80313w-ev-thumb-532452531?$Q90_330_330_F_PNG$",
    specs: ["LiDAR Mapping", "Self-Emptying", "SmartThings"],
    badges: ["AI Texnologiya"],
  },
  {
    id: "washer-ww5100a",
    category: CATEGORIES.laundry,
    name: "Washing Machine WW5100A",
    description:
      "AI Wash bilan aqlli kir yuvish mashinasi.",
    image:
      "https://images.samsung.com/is/image/samsung/p6pim/uz_uz/ww70ag5s21eeld/gallery/uz-uz-ww5100a-413057-ww70ag5s21eeld-thumb-538126837?$Q90_330_330_F_PNG$",
    specs: ["AI Wash", "EcoBubble", "SmartThings"],
    badges: ["AI Texnologiya", "Eco"],
  },
  {
    id: "dryer-dv9400b",
    category: CATEGORIES.laundry,
    name: "Dryer DV9400B",
    description:
      "AI Dry bilan aqlli quritish mashinasi.",
    image:
      "https://images.samsung.com/is/image/samsung/p6pim/uz_uz/dv90bb9445ghlp/gallery/uz-uz-dv9400b-dv90bb9445ghlp-thumb-553161494?$Q90_330_330_F_PNG$",
    specs: ["AI Dry", "Heat Pump", "SmartThings"],
    badges: ["AI Texnologiya", "Eco"],
  },
];
export default function MaishiyTexnikaPage() {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES.all);
  const filteredProducts =
    activeCategory === CATEGORIES.all
      ? PRODUCTS_DATA
      : PRODUCTS_DATA.filter((product) => product.category === activeCategory);
  return (
    <div
      style={{
        backgroundColor: "#000000",
        minHeight: "100vh",
        color: "#ffffff",
        fontFamily: "Segoe UI, Roboto, Helvetica, Arial, sans-serif",
        padding: "60px 20px",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "60px" }}>
        <h1
          style={{
            fontSize: "56px",
            fontWeight: "800",
            letterSpacing: "-1px",
            marginBottom: "15px",
          }}
        >
          Maishiy Texnika
        </h1>
        <p
          style={{
            color: "#888",
            fontSize: "18px",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          Aqlli texnologiyalar yordamida uy hayotingizni yangi bosqichga olib
          chiqing.
        </p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          marginBottom: "60px",
          flexWrap: "wrap",
        }}
      >
        {Object.values(CATEGORIES).map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            style={{
              backgroundColor: activeCategory === category ? "#fff" : "#111",
              color: activeCategory === category ? "#000" : "#888",
              padding: "10px 22px",
              borderRadius: "30px",
              border: "1px solid #222",
              cursor: "pointer",
              fontSize: "14px",
              fontWeight: "600",
              transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            {category}
          </button>
        ))}
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "25px",
          maxWidth: "1300px",
          margin: "0 auto",
        }}
      >
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const [imgError, setImgError] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: "#0a0a0a",
        borderRadius: "24px",
        padding: "25px",
        border: "1px solid #1a1a1a",
        transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
        transform: isHovered ? "translateY(-10px)" : "translateY(0)",
        boxShadow: isHovered
          ? "0 20px 40px rgba(0,0,0,0.4), 0 0 20px rgba(33, 137, 255, 0.1)"
          : "none",
        borderColor: isHovered ? "#333" : "#1a1a1a",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        position: "relative",
      }}
    >
      <div
        style={{ position: "absolute", top: "20px", left: "20px", zIndex: 2, display: "flex", gap: "6px", flexWrap: "wrap" }}
      >
        {product.badges.map((badge) => (
          <span
            key={badge}
            style={{
              fontSize: "10px",
              fontWeight: "800",
              backgroundColor: badge === "Eco" ? "#10b981" : badge === "Flagship" ? "#f59e0b" : badge === "Quiet" ? "#8b5cf6" : "#2189ff",
              color: "#fff",
              padding: "4px 10px",
              borderRadius: "4px",
              textTransform: "uppercase",
              letterSpacing: "0.5px",
            }}
          >
            {badge}
          </span>
        ))}
      </div>
      <div
        style={{
          height: "240px",
          backgroundColor: "#111",
          borderRadius: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          marginBottom: "20px",
          position: "relative",
        }}
      >
        {imgError ? (
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "#444",
            gap: "8px",
          }}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="M21 15l-5-5L5 21" />
            </svg>
            <span style={{ fontSize: "12px", color: "#555" }}>Rasm yuklanmadi</span>
          </div>
        ) : (
          <div
            style={{
              transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
              transform: isHovered ? "scale(1.1)" : "scale(1)",
              width: "80%",
              height: "80%",
              position: "relative",
            }}
          >
            <Image
              src={product.image}
              alt={product.name}
              fill
              style={{ objectFit: "contain" }}
              unoptimized
              onError={() => setImgError(true)}
            />
          </div>
        )}
      </div>
      <div style={{ flexGrow: 1 }}>
        <h3
          style={{
            fontSize: "20px",
            fontWeight: "700",
            marginBottom: "10px",
            color: isHovered ? "#2189ff" : "#fff",
            transition: "color 0.3s",
          }}
        >
          {product.name}
        </h3>
        <p
          style={{
            fontSize: "14px",
            color: "#777",
            lineHeight: "1.5",
            marginBottom: "20px",
          }}
        >
          {product.description}
        </p>
        <div
          style={{
            height: "60px",
            opacity: isHovered ? 1 : 0.4,
            transition: "opacity 0.3s",
            marginBottom: "20px",
          }}
        >
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {product.specs.map((spec) => (
              <li
                key={spec}
                style={{ fontSize: "12px", color: "#999", marginBottom: "4px" }}
              >
                • {spec}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <button
        style={{
          width: "100%",
          padding: "14px",
          borderRadius: "12px",
          border: "none",
          backgroundColor: isHovered ? "#fff" : "#1a1a1a",
          color: isHovered ? "#000" : "#fff",
          fontWeight: "700",
          fontSize: "14px",
          cursor: "pointer",
          transition: "all 0.3s",
        }}
      >
        Batafsil ko'rish
      </button>
    </div>
  );
}