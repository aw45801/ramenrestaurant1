"use client"

import { Cinzel } from "next/font/google";
import { useState, useEffect } from "react";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "600", "900"] });
const cinzel = Cinzel({ subsets: ["latin"], weight: ["400", "700", "900"] });

const dropdowns = {
  Pages: ["Gallery", "Team", "FAQ", "Contact"],
  Blog: ["Latest Posts", "Categories", "Archives"],
};

export default function Home() {
  const [openMenu, setOpenMenu] = useState(null);
  const [learnHover, setLearnHover] = useState(false);
  const [learnHover2, setLearnHover2] = useState(false);
  const [fbHover, setFbHover] = useState(false);
  const [xHover, setXHover] = useState(false);
  const [igHover, setIgHover] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [section2Hover, setSection2Hover] = useState(false);
  const [section3Hover, setSection3Hover] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const [isSmallMobile, setIsSmallMobile] = useState(false);

  const [isSmallScreen, setIsSmallScreen] = useState(false);

useEffect(() => {
  setTimeout(() => setLoaded(true), 100);
  const checkMobile = () => {
    setIsMobile(window.innerWidth < 1100);
    setIsSmallMobile(window.innerWidth < 400);
    setIsSmallScreen(window.innerWidth < 600);
  };
  checkMobile();
  window.addEventListener("resize", checkMobile);
  return () => window.removeEventListener("resize", checkMobile);
}, []);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1100);
      setIsSmallMobile(window.innerWidth < 400);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <>
      {/* NAV */}
      <nav style={{
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "70px",
  display: "flex",
  alignItems: "center",
  justifyContent: isMobile ? "space-between" : "space-between",
  boxSizing: "border-box",
  zIndex: 10,
  borderBottom: "1px solid rgba(255,255,255,1)",
  backgroundColor: "transparent",
  overflow: "visible",
}}>
        {/* Logo */}
        <div style={{
  display: "flex",
  alignItems: "center",
  width: isMobile ? "60%" : "25%",
  padding: "0 10px",
  justifyContent: isMobile ? "flex-start" : "center",
  borderRight: isMobile ? "none" : "1px solid rgba(255,255,255,1)",
  height: "100%",
  overflow: "hidden",
}}>
  <span className={cinzel.className} style={{
    color: "white",
    fontSize: "22px",
    letterSpacing: "1px",
    whiteSpace: "nowrap",
    textShadow: "2px 2px 8px rgba(0,0,0,0.8)",
    overflow: "hidden",
    textOverflow: "ellipsis",
    maxWidth: "100%",
    display: "block",
    fontWeight: "600"
  }}>
    Miso Ramen House
  </span>
</div>

        {/* Mobile hamburger */}
        {isMobile ? (
         <div style={{ paddingRight: "20px", cursor: "pointer", userSelect: "none", WebkitUserSelect: "none" }} onClick={() => setMenuOpen(!menuOpen)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M3 6h18M3 12h18M3 18h18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
        ) : (
          <>
            {/* Desktop links */}
            <div style={{
  display: "flex",
  gap: "20px",
  flex: 1,
  justifyContent: "center",
  borderRight: "1px solid rgba(255,255,255,1)",
  height: "100%",
  alignItems: "center",
}}> 
              {["Home", "About", "Menu", "Reservation"].map((link) => (
                <a key={link} href="#" style={{
                  color: "white",
                  textDecoration: "none",
                  fontSize: "18px",
                  letterSpacing: "2px",
                  fontWeight: "700",
                  paddingBottom: "12px",
                  borderBottom: "1px solid rgba(255,255,255,0.1)",
                  userSelect: "none",
                  WebkitUserSelect: "none",
                }}>
    {link}
  </a>
))}
              {Object.keys(dropdowns).map((label) => (
                <div key={label} style={{ position: "relative" }}
                  onMouseEnter={() => setOpenMenu(label)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <span style={{
  color: "white",
  fontSize: "20px",
  letterSpacing: "1px",
  fontWeight: "700",
  cursor: "pointer",
  userSelect: "none",
  display: "inline-flex",
  alignItems: "center",
}}>
                    {label}
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ marginLeft: "6px" }}>
                      <path d="M1 3 L5 7 L9 3" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </span>
                  <div style={{
                    position: "absolute",
                    top: "100%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    backgroundColor: "rgba(20, 20, 20, 0.95)",
                    border: "1px solid rgba(255,255,255,0.3)",
                    minWidth: "160px",
                    zIndex: 100,
                    marginTop: "24px",
                    overflow: "hidden",
                    maxHeight: openMenu === label ? "300px" : "0px",
                    opacity: openMenu === label ? 1 : 0,
                    transition: "max-height 0.3s ease, opacity 0.3s ease",
                  }}>
                    {dropdowns[label].map((item) => (
                      <a key={item} href="#" style={{
                        display: "block",
                        color: "white",
                        textDecoration: "none",
                        padding: "10px 20px",
                        fontSize: "14px",
                        letterSpacing: "1px",
                        fontWeight: "600",
                      }}
                      onMouseEnter={e => e.target.style.color = "#e8a87c"}
                      onMouseLeave={e => e.target.style.color = "white"}
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop learn more */}
            <div style={{ width: "25%", display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
              <a href="#"
                onMouseEnter={() => setLearnHover(true)}
                onMouseLeave={() => setLearnHover(false)}
                style={{
                  position: "relative",
                  color: learnHover ? "white" : "#ff4444",
                  backgroundColor: "white",
                  border: "1px solid white",
                  padding: "10px 24px",
                  textDecoration: "none",
                  fontSize: "14px",
                  fontWeight: "bold",
                  letterSpacing: "2px",
                  display: "inline-flex",
                  alignItems: "center",
                  overflow: "hidden",
                  transition: "color 0.3s ease",
                  zIndex: 0,
                }}
              >
                <span style={{
                  position: "absolute", top: 0, left: 0, height: "100%",
                  width: learnHover ? "100%" : "0%",
                  backgroundColor: "#ff4444",
                  transition: "width 0.3s ease", zIndex: -1,
                }}/>
                <span style={{ position: "relative", zIndex: 1, display: "inline-flex", alignItems: "center" }}>
                  LEARN MORE
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ marginLeft: "8px" }}>
                    <circle cx="9" cy="9" r="8" stroke={learnHover ? "white" : "#ff4444"} strokeWidth="1.5"/>
                    <path d="M6 9 L12 9 M9.5 6.5 L12 9 L9.5 11.5" stroke={learnHover ? "white" : "#ff4444"} strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </span>
              </a>
            </div>
          </>
        )}
      </nav>

      {/* Mobile menu dropdown */}
      {isMobile && menuOpen && (
  <div style={{
    position: "absolute",
    top: "70px",
    left: 0,
    width: "100%",
    height: "auto",
    backgroundColor: "rgba(20,20,20,0.97)",
    zIndex: 20,
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    boxSizing: "border-box",
    gap: "16px",
  }}>
          {["Home", "About", "Menu", "Reservation", ...Object.keys(dropdowns)].map((link) => (
            <a key={link} href="#" style={{
              color: "white",
              textDecoration: "none",
              fontSize: "18px",
              letterSpacing: "2px",
              fontWeight: "700",
              paddingBottom: "12px",
              borderBottom: "1px solid rgba(255,255,255,0.1)",
            }}>
              {link}
            </a>
          ))}
        </div>
      )}

      {/* Section 1 - Hero */}
      <div style={{ position: "relative", width: "100%", height: "100vh", overflow: "hidden" }}>

      <img src="/ramenmain.jpg" alt="background" style={{ 
  width: "100%", 
  height: "100%", 
  objectFit: "cover",
  userSelect: "none",
  pointerEvents: "none",
  WebkitUserSelect: "none",
}}/>

        {/* Center Text */}
        <div style={{
  position: "absolute",
  top: "45%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  textAlign: "center",
  zIndex: 5,
  opacity: loaded ? 1 : 0,
  transition: "opacity 1.2s ease",
  width: "90vw",
  maxWidth: "90vw",
}}>
          <span className={playfair.className} style={{
            color: "white",
            fontSize: isMobile ? "6vw" : "5.5vw",
            fontWeight: "400",
            letterSpacing: "2px",
            textShadow: "2px 2px 12px rgba(0,0,0,0.9)",
            lineHeight: "1.3",
            whiteSpace: isMobile ? "normal" : "nowrap",
            display: "block",
          }}>
            Where Tradition Meets<br/>Innovation In Ramen
          </span>

          <p className={playfair.className} style={{
            color: "white",
            fontSize: isMobile ? "2.5vw" : "1.1vw",
            fontWeight: "600",
            letterSpacing: "1px",
            textAlign: "center",
            marginTop: "20px",
            textShadow: "2px 2px 15px rgba(0,0,0,1), 0px 0px 20px rgba(0,0,0,1)",
            lineHeight: "1.8",
          }}>
            Rooted in centuries of Japanese culinary tradition,
            we craft every bowl with handmade noodles,{isMobile ? " " : <br/>} slow-simmered broths,
            and the finest seasonal ingredients.
          </p>

          <div style={{ marginTop: "30px", display: "flex", justifyContent: "center" }}>
            <a href="#"
              onMouseEnter={() => setLearnHover2(true)}
              onMouseLeave={() => setLearnHover2(false)}
              style={{
                position: "relative",
                color: learnHover2 ? "white" : "#ff4444",
                backgroundColor: "white",
                border: "1px solid white",
                padding: "10px 24px",
                textDecoration: "none",
                fontSize: isMobile ? "12px" : "14px",
                fontWeight: "bold",
                letterSpacing: "2px",
                display: "inline-flex",
                alignItems: "center",
                overflow: "hidden",
                transition: "color 0.3s ease",
                zIndex: 0,
              }}
            >
              <span style={{
                position: "absolute", top: 0, left: 0, height: "100%",
                width: learnHover2 ? "100%" : "0%",
                backgroundColor: "#ff4444",
                transition: "width 0.3s ease", zIndex: -1,
              }}/>
              <span style={{ position: "relative", zIndex: 1, display: "inline-flex", alignItems: "center" }}>
                LEARN MORE
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ marginLeft: "8px" }}>
                  <circle cx="9" cy="9" r="8" stroke={learnHover2 ? "white" : "#ff4444"} strokeWidth="1.5"/>
                  <path d="M6 9 L12 9 M9.5 6.5 L12 9 L9.5 11.5" stroke={learnHover2 ? "white" : "#ff4444"} strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </span>
            </a>
          </div>
        </div>

        {/* Line */}
        <div style={{
          position: "absolute",
          bottom: "140px",
          left: "5%",
          width: "90%",
          height: "2px",
          backgroundColor: "rgba(255,255,255,0.8)",
          zIndex: 5,
        }}/>

        {/* Social Icons */}
        <div style={{
          position: "absolute",
          bottom: "40px",
          right: "40px",
          display: "flex",
          gap: "12px",
          zIndex: 5,
        }}>
          {[
            { hover: fbHover, setHover: setFbHover, icon: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="white"/> },
            { hover: xHover, setHover: setXHover, icon: <path d="M4 4l16 16M20 4L4 20" stroke="white" strokeWidth="2" strokeLinecap="round"/> },
            { hover: igHover, setHover: setIgHover, icon: <><rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="white" strokeWidth="2" fill="none"/><circle cx="12" cy="12" r="4" stroke="white" strokeWidth="2" fill="none"/><circle cx="17.5" cy="6.5" r="1" fill="white"/></> },
          ].map((s, i) => (
            <a key={i} href="#"
              onMouseEnter={() => s.setHover(true)}
              onMouseLeave={() => s.setHover(false)}
              style={{
                width: isMobile ? "32px" : "38px",
                height: isMobile ? "32px" : "38px",
                border: `1px solid ${s.hover ? "#ff4444" : "white"}`,
                backgroundColor: s.hover ? "#ff4444" : "transparent",
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "all 0.3s ease",
              }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">{s.icon}</svg>
            </a>
          ))}
        </div>
{/* Stats */}
<div style={{
  position: "absolute",
  bottom: "40px",
  left: "40px",
  display: "flex",
  gap: isMobile ? "20px" : "50px",
  zIndex: 5,
}}>
  {[
    { number: "10K+", label: "Customers Served" },
    { number: "25+", label: "Signature Dishes" },
    { number: "15+", label: "Years of Experience" },
  ].map((stat) => (
<div key={stat.label} style={{ textAlign: "center" }}>
  <p className={playfair.className} style={{ color: "white", fontSize: isMobile ? "clamp(10px, 3vw, 20px)" : "40px", fontWeight: "700", margin: 0, textShadow: "2px 2px 8px rgba(0,0,0,0.9)", letterSpacing: "0px" }}>
    {stat.number}
  </p>
  <p className={cinzel.className} style={{ color: "rgba(255,255,255,0.8)", fontSize: isMobile ? "clamp(6px, 1.5vw, 10px)" : "10px", fontWeight: "600", margin: 0, marginTop: "4px", letterSpacing: "0px", textShadow: "1px 1px 6px rgba(0,0,0,0.9)", textTransform: "uppercase" }}>
    {stat.label}
  </p>
</div>
  ))}
</div>
      </div>

      {/* Section 2 */}
      <div style={{
        width: "100%",
        minHeight: isMobile ? "auto" : "110vh",
        backgroundColor: "#f9f5f0",
        padding: isMobile ? "50px 6%" : "80px 6%",
        boxSizing: "border-box",
      }}>
        <h2 className={playfair.className} style={{
          color: "#1a1a1a",
          fontSize: isSmallScreen ? "6vw" : isMobile ? "3vw" : "2.8vw",
          fontWeight: "700",
          maxWidth: isSmallScreen ? "100%" : "50%",
          lineHeight: "1.4",
          margin: 0,
          marginBottom: "50px",
        }}>
          Experience Authentic Japanese Flavors In The Heart Of Your Neighborhood
        </h2>

        <div style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          gap: "60px",
          alignItems: "flex-start",
        }}>
          {/* Images */}
          <div style={{ display: "flex", flexDirection: isMobile ? "row" : "column", gap: "16px", flex: 1, overflow: "hidden" }}>
  <img src="/ramenmain.jpg" alt="ramen dish" style={{ width: "100%", height: isMobile ? "160px" : "280px", objectFit: "cover", minWidth: 0 }}/>
  <img src="/ramen2.webp" alt="ramen dish" style={{ width: "100%", height: isMobile ? "160px" : "280px", objectFit: "cover", minWidth: 0 }}/>
</div>

          {/* Text */}
          <div style={{ flex: 1.2, display: "flex", flexDirection: "column", gap: "24px" }}>
            <h3 className={playfair.className} style={{ color: "#1a1a1a", fontSize: isSmallScreen ? "5vw" : isMobile ? "2.5vw" : "2vw", fontWeight: "700", margin: 0, lineHeight: "1.3" }}>
              Making your guest more delighted with our food.
            </h3>
            <p className={playfair.className} style={{ color: "#777", fontSize: isSmallScreen ? "3.5vw" : isMobile ? "1.8vw" : "0.95vw", fontWeight: "400", margin: 0, lineHeight: "1.9" }}>
              Every bowl we serve is a labor of love — crafted from scratch using time-honored techniques passed down through generations.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {["Handmade noodles prepared fresh every morning", "Broths slow-simmered for over 12 hours", "Locally sourced seasonal ingredients"].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: "14px", paddingBottom: "14px", borderBottom: "1px solid rgba(0,0,0,0.1)" }}>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <circle cx="9" cy="9" r="8" stroke="#ff4444" strokeWidth="1.5"/>
                    <path d="M5 9 L8 12 L13 6" stroke="#ff4444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className={cinzel.className} style={{ color: "#333", fontSize: isSmallScreen ? "3vw" : isMobile ? "1.5vw" : "0.8vw", letterSpacing: "1px", fontWeight: "400" }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "10px" }}>
              <a href="#"
                onMouseEnter={() => setSection2Hover(true)}
                onMouseLeave={() => setSection2Hover(false)}
                style={{
                  position: "relative",
                  color: section2Hover ? "white" : "#ff4444",
                  backgroundColor: "white",
                  border: "1px solid #ff4444",
                  padding: "12px 28px",
                  textDecoration: "none",
                  fontSize: "14px",
                  fontWeight: "bold",
                  letterSpacing: "2px",
                  display: "inline-flex",
                  alignItems: "center",
                  overflow: "hidden",
                  transition: "color 0.3s ease",
                  zIndex: 0,
                }}
              >
                <span style={{ position: "absolute", top: 0, left: 0, height: "100%", width: section2Hover ? "100%" : "0%", backgroundColor: "#ff4444", transition: "width 0.3s ease", zIndex: -1 }}/>
                <span style={{ position: "relative", zIndex: 1, display: "inline-flex", alignItems: "center" }}>
                  LEARN MORE
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ marginLeft: "8px" }}>
                    <circle cx="9" cy="9" r="8" stroke={section2Hover ? "white" : "#ff4444"} strokeWidth="1.5"/>
                    <path d="M6 9 L12 9 M9.5 6.5 L12 9 L9.5 11.5" stroke={section2Hover ? "white" : "#ff4444"} strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div style={{
        width: "100%",
        backgroundColor: "#f0e6d3",
        padding: isMobile ? "50px 6%" : "80px 6%",
        boxSizing: "border-box",
        display: "flex",
        justifyContent: "center",
        position: "relative",
      }}>
        <div style={{
          backgroundColor: "#2d4a4e",
          width: "100%",
          padding: isMobile ? "40px 6%" : "70px 5%",
          boxSizing: "border-box",
          position: "relative",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: isMobile ? "flex-start" : "center",
          justifyContent: "space-between",
          gap: isMobile ? "40px" : "0",
        }}>
          <div style={{ position: "absolute", top: "12px", left: "12px", right: "12px", bottom: "12px", border: "1px solid rgba(255,255,255,0.2)", pointerEvents: "none" }}/>
          <div style={{ position: "absolute", top: "22px", left: "22px", right: "22px", bottom: "22px", border: "1px solid rgba(255,255,255,0.1)", pointerEvents: "none" }}/>

          <div style={{ flex: 1, maxWidth: isMobile ? "100%" : "50%", zIndex: 2 }}>
            <h2 className={playfair.className} style={{ color: "white", fontSize: isMobile ? "7vw" : "3.5vw", fontWeight: "700", margin: 0, marginBottom: "24px", lineHeight: "1.3" }}>
              Reserve Your Table, Savor The Experience.
            </h2>
            <p className={playfair.className} style={{ color: "rgba(255,255,255,0.7)", fontSize: isMobile ? "3.5vw" : "0.95vw", fontWeight: "400", margin: 0, marginBottom: "36px", lineHeight: "1.9", maxWidth: "80%" }}>
              Every visit is a journey through the rich culinary traditions of Japan. Book your table today and let us take care of the rest.
            </p>
            <a href="#"
              onMouseEnter={() => setSection3Hover(true)}
              onMouseLeave={() => setSection3Hover(false)}
              style={{
                position: "relative",
                color: section3Hover ? "white" : "#ff4444",
                backgroundColor: "transparent",
                border: "1px solid #ff4444",
                padding: "12px 28px",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: "bold",
                letterSpacing: "2px",
                display: "inline-flex",
                alignItems: "center",
                overflow: "hidden",
                transition: "color 0.3s ease",
                zIndex: 0,
              }}
            >
              <span style={{ position: "absolute", top: 0, left: 0, height: "100%", width: section3Hover ? "100%" : "0%", backgroundColor: "#ff4444", transition: "width 0.3s ease", zIndex: -1 }}/>
              <span style={{ position: "relative", zIndex: 1, display: "inline-flex", alignItems: "center" }}>
                LEARN MORE
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ marginLeft: "8px" }}>
                  <circle cx="9" cy="9" r="8" stroke={section3Hover ? "white" : "#ff4444"} strokeWidth="1.5"/>
                  <path d="M6 9 L12 9 M9.5 6.5 L12 9 L9.5 11.5" stroke={section3Hover ? "white" : "#ff4444"} strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </span>
            </a>
          </div>

          {/* Hours box */}
          <div style={{
            backgroundColor: "white",
            padding: isMobile ? "30px 24px" : "40px 50px",
            boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
            position: isMobile ? "relative" : "absolute",
            right: isMobile ? "auto" : "-4%",
            top: isMobile ? "auto" : "50%",
            transform: isMobile ? "none" : "translateY(-50%)",
            width: isMobile ? "100%" : "38%",
            zIndex: 10,
            boxSizing: "border-box",
          }}>
            <h3 className={playfair.className} style={{ color: "#1a1a1a", fontSize: isMobile ? "5vw" : "1.8vw", fontWeight: "700", margin: 0, marginBottom: "8px", textAlign: "center" }}>
              Open Hours
            </h3>
            <p className={playfair.className} style={{ color: "#999", fontSize: isMobile ? "3vw" : "0.85vw", margin: 0, marginBottom: "24px", textAlign: "center" }}>
              We are open every day of the week
            </p>
            {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day) => (
              <div key={day} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: "12px", marginBottom: "12px", borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
                <span className={playfair.className} style={{ color: "#1a1a1a", fontSize: isMobile ? "3.5vw" : "1vw", fontWeight: "600" }}>{day}</span>
                <span className={playfair.className} style={{ color: "#888", fontSize: isMobile ? "3vw" : "0.85vw", fontWeight: "400" }}>08:00 AM – 09:00 PM</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}