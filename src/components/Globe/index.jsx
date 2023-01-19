import React, { useEffect, useRef } from 'react';
import ReactGlobe from 'react-globe.gl';
import Earth from 'assets/earth_texture.jpg';
import styles from './styles.module.css';
import { nations } from 'constants/nations';
const markerSvg = `<svg viewBox="-4 0 36 36">
<path fill="#d7000e" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
<circle fill="black" cx="14" cy="14" r="7"></circle>
</svg>`;

export default function Globe({ activeIdx, updateActiveIdx }) {
  const globeRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      // wait for scene to be populated (asynchronously)
      const directionalLight = globeRef.current
        .scene()
        .children.find((obj3d) => obj3d.type === 'DirectionalLight');
      directionalLight && directionalLight.position.set(1, 1, 1); // change light position to see the specularMap's effect
    });
  });

  useEffect(() => {
    globeRef.current.controls().enableZoom = false;
    globeRef.current.controls().enablePointerInteraction = true;
    globeRef.current.pointOfView(
      {
        lat: nations[activeIdx].lat,
        lng: nations[activeIdx].lng,
        altitude: 2.7,
      },
      800,
    );
  }, [activeIdx]);
  const info_modal = (nation) => {
    return `
    <div class=${styles.nationInfo_wrap}>
      <div class=${styles.nation_info}>
        <div class=${styles.flag}>
          <img src=${nation.flag} alt="flag">
        </div>
        <div class=${styles.nation_name}>
          <p>${nation.name_eng}</p>
          <p>${nation.name_kor}</p>
        </div>
      </div>
      <div class=${styles.nation_btn}>협력 네트워크 &nbsp;
        <p class=${styles.nation_network_length}>${nation.networks.length}</p>
      </div>
    </div>
    `;
  };
  return (
    <div className={`${styles.globe_wrap} flex_center`}>
      <ReactGlobe
        ref={globeRef}
        animateIn={true}
        backgroundColor="rgba(0,0,0,0)"
        globeImageUrl={Earth}
        showAtmosphere={true}
        showGraticules={true}
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        htmlElementsData={nations}
        htmlElement={(d) => {
          const el = document.createElement('div');
          if (activeIdx === d.id) el.innerHTML = info_modal(d);
          el.innerHTML += markerSvg;
          el.style.color = '#d7000e';
          el.style.width = '30px';
          el.style['pointer-events'] = 'auto';
          el.style.cursor = 'pointer';
          el.onclick = () => updateActiveIdx(d.id);
          return el;
        }}
      />
    </div>
  );
}
