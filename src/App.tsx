import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import GartnerBenchmarks from "./pages/GartnerBenchmarks";
import HypeCycle from "./pages/HypeCycle";
import DecisionMatrices from "./pages/DecisionMatrices";
import "./cursor.css";

const MainLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-[#121212] text-white min-h-screen">
    <Header />
    <main>{children || <Outlet />}</main>
    <Footer />
  </div>
);

function App() {
  useEffect(() => {
    document.title = "Mark Opalski - AI/UX Consultant";

    const cursor = document.createElement("div");
    cursor.classList.add("custom-cursor");
    document.body.appendChild(cursor);

    const moveCursor = (e: MouseEvent) => {
      requestAnimationFrame(() => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      });
    };

    document.addEventListener("mousemove", moveCursor);

    const interactiveElements = document.querySelectorAll("a, button");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", () =>
        cursor.classList.add("cursor-grow")
      );
      el.addEventListener("mouseleave", () =>
        cursor.classList.remove("cursor-grow")
      );
    });

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      cursor.parentNode?.removeChild(cursor);
    };
  }, []);

  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Work />
                <Contact />
              </>
            }
          />
          <Route path="case-study">
            <Route path="gartner-benchmarks" element={<GartnerBenchmarks />} />
            <Route path="hype-cycle" element={<HypeCycle />} />
            <Route path="decision-matrices" element={<DecisionMatrices />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
