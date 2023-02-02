import React from 'react';
import styles from './styles.module.css';
import StepCard from 'components/StepCard';

export default function Program({ programs }) {
  return (
    <section className={styles.cards_wrap}>
      <StepCard
        title_eng="Seed - Pre A"
        title_desc="기업의 설립 / 발굴"
        title="창업, Startup 단계"
        bg_color="#627995"
        program={programs[0]}
      />
      <StepCard
        title_eng="Pre A - Series B"
        title_desc="투자유치 지원, 기업 - 투자자 네트워킹"
        title="벨류 단계"
        bg_color="#517CB1"
        program={programs[1]}
      />
      <StepCard
        title_eng="Seed - Pre A"
        title_desc="후속투자 및 성장지원, 글로벌 진출지원"
        title="스케일업 단계"
        bg_color="#003A80"
        program={programs[2]}
      />
    </section>
  );
}
