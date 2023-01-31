import SubPageHeader from 'components/SubPageHeader';
import React, { useState } from 'react';
import styles from './styles.module.css';

const Input = ({ id, value, className, label }) => {
  return (
    <div className={styles.input_wrap}>
      <label htmlFor={id}>{label}</label>
      <input id={id} value={value} className={`${className} ${styles.input}`} />
    </div>
  );
};

const ArrayInput = ({ idArray, value, labelArray }) => {
  console.log('id', idArray);
  return idArray.map((id, i) => (
    <Input
      id={id}
      value={value[id]}
      className={styles.middle}
      label={labelArray[i]}
    />
  ));
};

export default function Consulting({ pageName }) {
  const [applicant, setApplicant] = useState({
    name: '',
    email: '',
    position: '',
    phoneNum: '',
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
              <Input
                id="field"
                value="field"
                className={styles.big}
                label="사업분야"
              />
              <Input
                id="address"
                value="address"
                className={styles.big}
                label="회사주소"
              />
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
      </div>
    </div>
  );
}
