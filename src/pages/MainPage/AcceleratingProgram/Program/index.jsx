import React from 'react';
import styles from './styles.module.css';
import StepCard from 'components/StepCard';

export default function Program() {
  return (
    <section className={styles.cards_wrap}>
      <StepCard
        title_eng="Seed - Pre A"
        title_desc="기업의 설립 / 발굴"
        title="창업, Startup 단계"
        bg_color="#627995"
      />
      <StepCard
        title_eng="Seed - Pre A"
        title_desc="기업의 설립 / 발굴"
        title="벨루업 단계"
        bg_color="#517CB1"
      />
      <StepCard
        title_eng="Seed - Pre A"
        title_desc="기업의 설립 / 발굴"
        title="스케일업 단계"
        bg_color="#003A80"
      />
    </section>
  );
}
