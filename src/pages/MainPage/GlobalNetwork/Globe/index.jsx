import React, { useEffect, useState } from "react";
import ReactGlobe from "react-globe.gl";
import Earth from "assets/earth_texture.jpg";

export default function Globe({ activeIdx }) {
  const [focus, setFocus] = useState({ lat: 37.541, lng: 126.986 });
  const markers = [
    {
      id: "marker1",
      city: "Singapore",
      color: "blue",
      size: 7 + Math.random() * 40,
      lat: 37.541,
      lng: 126.986,
      value: 50,
    },
    {
      id: "marker2",
      city: "New York",
      color: "#d7000e",
      size: 7 + Math.random() * 30,
      lat: (Math.random() - 0.5) * 180,
      lng: (Math.random() - 0.5) * 360,
      value: 25,
    },
    {
      id: "marker3",
      city: "San Francisco",
      color: "#d7000e",
      size: 7 + Math.random() * 30,
      lat: (Math.random() - 0.5) * 180,
      lng: (Math.random() - 0.5) * 360,
      value: 35,
    },
    {
      id: "marker4",
      city: "Beijing",
      color: "#d7000e",
      size: 7 + Math.random() * 30,
      lat: (Math.random() - 0.5) * 180,
      lng: (Math.random() - 0.5) * 360,
      value: 135,
    },
    {
      id: "marker5",
      city: "London",
      color: "#d7000e",
      size: 7 + Math.random() * 30,
      lat: (Math.random() - 0.5) * 180,
      lng: (Math.random() - 0.5) * 360,
      value: 80,
    },
    {
      id: "marker6",
      city: "Los Angeles",
      color: "#d7000e",
      size: 7 + Math.random() * 30,
      lat: (Math.random() - 0.5) * 180,
      lng: 7 + Math.random() * 30,
      value: 54,
    },
  ];
  useEffect(() => {
    setFocus(markers[activeIdx].coordinates);
    return () => {};
  }, [activeIdx]);
  const markerSvg = `<svg viewBox="-4 0 36 36">
  <path fill="#d7000e" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
  <circle fill="black" cx="14" cy="14" r="7"></circle>
</svg>`;
  //currentColor

  return (
    <>
      <ReactGlobe
        animateIn={false}
        backgroundColor="rgba(0,0,0,0)"
        globeImageUrl={Earth}
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        htmlElementsData={markers}
        htmlElement={(d) => {
          const el = document.createElement("div");
          el.innerHTML = markerSvg;
          el.style.color = d.color;
          el.style.width = `${d.size}px`;

          el.style["pointer-events"] = "auto";
          el.style.cursor = "pointer";
          el.onclick = () => console.log(d);
          return el;
        }}
        onGlobeClick={({ focus }, console.log("gpgp"))}
        htmlTransitionDuration={300}
        focus={focus}
      />
    </>
  );
}
