import React, { useEffect, useRef } from "react";
import ReactGlobe from "react-globe.gl";
import Earth from "assets/earth_texture.jpg";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
const markers = [
  {
    id: 0,
    city: "France",
    color: "#d7000e",
    size: 10 + Math.random() * 30,
    lat: 46.227638,
    lng: 2.213749,
    value: 50,
  },
  {
    id: 1,
    city: "United Kingdom",
    color: "#d7000e",
    size: 10 + Math.random() * 30,
    lat: 55.378051,
    lng: -3.435973,
    value: 25,
  },
  {
    id: 2,
    city: "Spain",
    color: "#d7000e",
    size: 10 + Math.random() * 30,
    lat: 40.463667,
    lng: -3.74922,
    value: 35,
  },
  {
    id: 3,
    city: "Germany",
    color: "#d7000e",
    size: 10 + Math.random() * 30,
    lat: 51.165691,
    lng: 10.451526,
    value: 135,
  },
  {
    id: 4,
    city: "China",
    color: "#d7000e",
    size: 10 + Math.random() * 30,
    lat: 35.86166,
    lng: 104.195397,
    value: 80,
  },
  {
    id: 5,
    city: "Vietnam",
    color: "#d7000e",
    size: 15 + Math.random() * 30,
    lat: 14.058324,
    lng: 108.277199,
    value: 54,
  },
  {
    id: 6,
    city: "Singapore",
    color: "blue",
    size: 15 + Math.random() * 30,
    lat: 1.352083,
    lng: 103.819836,
    value: 50,
  },
  {
    id: 7,
    city: "Malaysia",
    color: "blue",
    size: 15 + Math.random() * 30,
    lat: 4.210484,
    lng: 101.975766,
    value: 50,
  },
  {
    id: 8,
    city: "Japan",
    color: "blue",
    size: 15 + Math.random() * 30,
    lat: 36.204824,
    lng: 138.252924,
    value: 50,
  },
  {
    id: 9,
    city: "Indonesia",
    color: "blue",
    size: 15 + Math.random() * 30,
    lat: -0.789275,
    lng: 113.921327,
    value: 50,
  },
];
export default function Globe({ activeIdx, updateActiveIdx }) {
  const globeRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      // wait for scene to be populated (asynchronously)
      const directionalLight = globeRef.current
        .scene()
        .children.find((obj3d) => obj3d.type === "DirectionalLight");
      directionalLight && directionalLight.position.set(1, 1, 1); // change light position to see the specularMap's effect
    });
  });

  useEffect(() => {
    globeRef.current.controls().enableZoom = false;
    globeRef.current.controls().enablePointerInteraction = true;
    globeRef.current.pointOfView(
      {
        lat: markers[activeIdx].lat,
        lng: markers[activeIdx].lng,
        altitude: 2.8,
      },
      800
    );
  }, [activeIdx]);
  const markerSvg = `<svg viewBox="-4 0 36 36">
  <path fill="#d7000e" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
  <circle fill="black" cx="14" cy="14" r="7"></circle>
</svg>`;
  //currentColor

  return (
    <div
      style={{ width: "100%", height: "650px", overflow: "hidden" }}
      className="flex_center"
    >
      <ReactGlobe
        ref={globeRef}
        animateIn={true}
        backgroundColor="rgba(0,0,0,0)"
        globeImageUrl={Earth}
        showAtmosphere={true}
        showGraticules={true}
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        htmlElementsData={markers}
        htmlElement={(d) => {
          const el = document.createElement("div");
          el.innerHTML = markerSvg;
          el.style.color = d.color;
          el.style.width = `${d.size}px`;

          el.style["pointer-events"] = "auto";
          el.style.cursor = "pointer";
          el.onclick = () => updateActiveIdx(d.id);
          return el;
        }}
      />
    </div>
  );
}
