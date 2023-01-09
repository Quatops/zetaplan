import React, { useEffect, useRef, useState } from "react";
import ReactGlobe from "react-globe.gl";
import Earth from "assets/earth_texture.jpg";
import styles from "../../GlobalNetwork/styles.module.css";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
const markers = [
  {
    id: 0,
    city: "Korea",
    color: "blue",
    size: 7 + Math.random() * 40,
    lat: 37.541,
    lng: 126.986,
    value: 50,
  },
  {
    id: 1,
    city: "Singapore",
    color: "#d7000e",
    size: 7 + Math.random() * 30,
    lat: 1.3521,
    lng: 103.8198,
    value: 25,
  },
  {
    id: 2,
    city: "New York",
    color: "#d7000e",
    size: 7 + Math.random() * 30,
    lat: 40.73061,
    lng: -73.935242,
    value: 35,
  },
  {
    id: 3,
    city: "San Francisco",
    color: "#d7000e",
    size: 7 + Math.random() * 30,
    lat: 37.773972,
    lng: -122.431297,
    value: 135,
  },
  {
    id: 4,
    city: "London",
    color: "#d7000e",
    size: 7 + Math.random() * 30,
    lat: 51.5074,
    lng: 0.1278,
    value: 80,
  },
  {
    id: 5,
    city: "Los Angeles",
    color: "#d7000e",
    size: 7 + Math.random() * 30,
    lat: 29.7604,
    lng: -95.3698,
    value: 54,
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
    console.log(globeRef.current.scene());
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

  const shiftAmmount = 0.2 * window.innerWidth;
  return (
    <div className={styles.globe_wrap}>
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
