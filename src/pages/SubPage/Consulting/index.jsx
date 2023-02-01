import RadioGroup from 'components/RadioGroup';
import Radio from 'components/RadioGroup/Radio';
import SubPageHeader from 'components/SubPageHeader';
import React, { useState } from 'react';
import styles from './styles.module.css';

const Input = ({ id, value, label }) => {
  return (
    <div className={styles.input_wrap}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        value={value}
        className={styles.input}
        placeholder={`${label}을(를) 입력해주세요.`}
      />
    </div>
  );
};

const ArrayInput = ({ idArray, value, labelArray }) => {
  console.log('id', idArray);
  return idArray.map((id, i) => (
    <Input id={id} value={value[id]} label={labelArray[i]} />
  ));
};

const filed = [
  '투자IR',
  'M&A',
  'IPO',
  '엑셀러레이팅',
  '해외진출',
  '기술거래',
  '기업인증',
  '시스템인증',
  '기업가치평가',
  '기술가치평가',
  'ESG등급평가',
  '기업신용평가',
  'TCB기술평가',
  '경영진단',
  '경영평가',
  '경영전략',
  '성과보상',
  '사업타당성분석',
  '성장전략수립',
  '비즈니스모델',
  '제조혁신바우처사업',
  '수출바우처사업',
  'R&BD지원사업',
  '기업금융',
  '기타분야',
];

export default function Consulting({ pageName }) {
  const [applicant, setApplicant] = useState({
    name: '',
    email: '',
    position: '',
    phoneNum: '',
  });
  const [company, setCompany] = useState({
    name: '',
    year: '',
    website: '',
    employees: '',
  });
  return (
    <div className={styles.content_wrap}>
      <SubPageHeader category={pageName} subCateTitle={pageName} />
      <div className={styles.contents}>
        <section>
          <article className={styles.title}>신청자 정보</article>
          <article className={`${styles.applicant} ${styles.grid_four}`}>
            <ArrayInput
              idArray={['name', 'email', 'position', 'phoneNum']}
              value={applicant}
              labelArray={[
                '신청자 이름',
                '신청자 이메일',
                '신청자 직책',
                '신청자 연락처',
              ]}
            />
          </article>
        </section>
        <div className={styles.boundary}></div>
        <section>
          <article className={styles.title}>신청회사 정보</article>
          <article className={styles.applicant_company}>
            <div className={`${styles.top} ${styles.grid_four}`}>
              <ArrayInput
                idArray={['name', 'email', 'position', 'phoneNum']}
                value={applicant}
                labelArray={['회사명', '설립년도', '웹사이트', '종원원수']}
              />
            </div>
            <div className={`${styles.mid} ${styles.grid_two}`}>
              <Input id="field" value="field" label="사업분야" />
              <Input id="address" value="address" label="회사주소" />
            </div>
            <div className={`${styles.bottom} ${styles.grid_four}`}>
              <ArrayInput
                idArray={['name', 'email', 'position', 'phoneNum']}
                value={applicant}
                labelArray={['자산총계', '부채총계', '매출액', '영업이익']}
              />
            </div>
          </article>
        </section>
        <div className={styles.boundary}></div>
        <section>
          <article className={styles.title}>상담분야</article>
          <RadioGroup className={styles.radio_wrap}>
            {filed.map((f, i) => (
              <Radio name="field" value={i} className={styles.radio}>
                {f}
              </Radio>
            ))}
          </RadioGroup>
        </section>
        <div className={styles.boundary}></div>
        <section>
          <article className={styles.title}>상담신청내용</article>
          <div className={styles.text_wrap}>
            <textarea
              className={styles.apply_text}
              placeholder="상담신청 내용을 입력해주세요."
            />
          </div>
        </section>
      </div>
    </div>
  );
}
