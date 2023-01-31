import React from 'react';
import styles from '../styles.module.css';
import { useInverstPortfolio } from 'hooks/useItems';

export default function InvestmentLogo({}) {
  const {
    InvestmentLogoQuery: { data: logo_images },
  } = useInverstPortfolio();
  return (
    <div className={styles.page_wrapper}>
      {logo_images && (
        <>
          <div className={styles.investport_logo_wrap}>
            <>
              <header className={styles.logo_header}>
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
                  <div
                    className={`${styles.logo_img} flex_center`}
                    key={index}
                    style={{
                      width: `100%`,
                      height: `100%`,
                    }}>
                    <img src={image} alt="엑설러레이팅 포트폴리오" />
                  </div>
                ))}
              </div>
            </>
          </div>
        </>
      )}
    </div>
  );
}
