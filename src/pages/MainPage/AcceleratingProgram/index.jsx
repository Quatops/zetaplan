import React, { useState } from 'react';
import AcceleratingTab from './AcceleratingTab';
import styles from './styles.module.css';
import Program from './Program';
import Differentiation from './Differentiation';
import Portfolio from './Portfolio';
import useAccelerating from 'hooks/useAccelerating';

const header_items = [
  '액설러레이팅 프로그램',
  '액설러레이팅 차별성',
  '액설러레이팅 포트폴리오',
];
export default function AcceleratingProgram() {
  const [activeTab, setActiveTab] = useState(0);
  const updateActiveTab = (idx) => {
    setActiveTab(idx);
  };
  const { AccelePortQuery, AcceleDifferentQuery } = useAccelerating();
  const {
    AccelePortQuery: { data: logo_images },
  } = useAccelerating();
  const {
    AcceleDifferentQuery: { data: differentiations },
  } = useAccelerating();

  const programs = [
    [
      {
        title: '사업아이디어&기업진단',
        content: [
          '기업기초자료 수집/분석',
          '경영진 인터뷰 니즈 파악',
          '기업/사업 진단',
        ],
      },
      {
        title: '스타트업 맞춤형 교육 커리큘럼 기획 / 운영',
        content: [
          '산업분야별 동향, 전망, 전문성 강화 교육',
          '경영진 인터뷰 니즈 파악',
          '성장 단계별 역량강화',
        ],
      },
      {
        title: '투자유치 역량강화 전문분야 멘토링',
        content: [
          '기업 IR 및 IM 자료 제작 코칭, IR 디자인',
          '법률/노무/특허/수출/마케팅 등 전문분야 멘토링',
        ],
      },
      {
        title: 'Business Model 진단 사업화 및 제품 제작',
        content: [
          '공간 및 제품 제작 관련 인프라 지원',
          'Business Model 진단',
          '사업 방향성, 전략 수립',
        ],
      },
    ],
    [
      {
        title: '1:1 전담 컨설팅',
        content: ['IR 진행 코칭 및 컨설팅', '투자유치 프로세스'],
      },
      {
        title: '투자 및 시드팁스 팁스 등록 지원',
        content: [
          '투자자 발굴 및 매칭',
          '자체 및 협력기관 투자',
          '시드/팁스 운영사 및 협력기관을 통한 등록 추천',
        ],
      },
      {
        title: 'BIZ & IR 컨설팅 기반 기술개발 및 사업고도화',
        content: [
          '중장기 사업전략 수립',
          '기술개발 R&D 사업지원',
          '지식재산권 확보 및 관리',
        ],
      },
      {
        title: '기업 - VC 및 전략적투자자 네트워킹',
        content: [
          'AC, VC, SI(전략적투자자) 매칭 및 네트워킹 구축',
          '협업 포인트 도출 M&A 추진 검토',
        ],
      },
    ],
    [
      {
        title: '글로벌 진출 네트워킹 확장',
        content: [
          '중국, 싱가포르, 베트남, 인니, 북미 등 네트워크 활용',
          '현지 법인 설립',
          'Jonint - Venture',
        ],
      },
      {
        title: '후속 투자유치 전략 수립 및 데모데이 개최',
        content: [
          '인/아웃바운드 전략 수립',
          '자체 IR 데모데이 개최 및 주관 데모데이 참가 추천',
        ],
      },
      {
        title: 'M&A / IPO',
        content: ['M&A 대상 발굴/매칭', 'IPO 추진 전략 수립/진행'],
      },
    ],
  ];

  return (
    <div className={styles.page_wrapper}>
      <div className={styles.accelerating_wrap}>
        <header className={styles.header}>
          <div className={styles.tab_wrap}>
            {header_items.map((value, index) => (
              <AcceleratingTab
                content={value}
                key={index}
                id={index}
                activeTab={index === activeTab}
                updateActiveTab={updateActiveTab}
              />
            ))}
          </div>
        </header>
        <div className={`${styles.wrap} flex_center`}>
          {activeTab === 0 && programs && <Program programs={programs} />}
          {activeTab === 1 && differentiations && (
            <Differentiation differentiations={differentiations} />
          )}
          {activeTab === 2 && logo_images && (
            <Portfolio logo_images={logo_images} />
          )}
        </div>
      </div>
    </div>
  );
}
