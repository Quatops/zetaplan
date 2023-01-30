import React from 'react';
import useAccelerating from 'hooks/useAccelerating';
import styles from './styles.module.css';

export default function Portfolio() {
  const { AccelePortQuery, modifyAccelePort } = useAccelerating();

  const {
    AccelePortQuery: { data: logo_images },
  } = useAccelerating();
  return (
    <div className={styles.porttab_wrap}>
      {logo_images && (
        <>
          <header className={styles.porttab_header}>
            투자연계 {logo_images.length}건 (총 1,672억)
          </header>
          <div
            className={styles.logo_wrap}
            style={{
              display: 'grid',
              gridTemplateRows: `repeat(${Math.floor(
                Math.sqrt(logo_images.length),
              )}, 1fr)`,
              gridTemplateColumns: `repeat(${Math.floor(
                Math.sqrt(logo_images.length),
              )}, 1fr)`,
            }}>
            {logo_images.map((image, index) => (
              <>
                <div
                  className={`${styles.logo_img} flex_center`}
                  key={index}
                  style={{
                    width: `100%`,
                    height: `100%`,
                  }}>
                  <img src={image} alt="엑설러레이팅 포트폴리오" />
                </div>
              </>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
