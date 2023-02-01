import SubPageHeader from 'components/SubPageHeader';
import React from 'react';
import styles from './styles.module.css';
import { FaCheckCircle } from 'react-icons/fa';

const Title = ({ title }) => {
  return (
    <div className={styles.title}>
      <FaCheckCircle /> &nbsp;&nbsp;
      {title}
    </div>
  );
};

export default function Location({ pageName }) {
  return (
    <div className={styles.contents_wrap}>
      <SubPageHeader subCateTitle={pageName} />
      <div className={styles.content_wrap}>
        <Title title="서울본사" />
        <p>
          주소 : 서울특별시 금천구 가산디지털2로 101, 한라원앤원 B동 601호
          <br />
          Add : B-601, 101, Gasan digital 2-ro, Geumcheon-gu, Seoul, Republic of
          Korea <br />
          Tel : +82-538-4801 Fax : +82-6008-4779
        </p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3166.3010689922608!2d126.87678981564632!3d37.477221136995176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca15020c8f283%3A0xcc9c31f352b01cdf!2zKOyjvCnsoJztg4DtlIzrnpzsnbjrsqDsiqTtirg!5e0!3m2!1sko!2skr!4v1675225346209!5m2!1sko!2skr"
          id="iframeId"
          width="600"
          height="450"
          style={{ border: '0px', margin: '40px 0' }}></iframe>
        <Title title="China Office" />
        <p>
          Add : 6F, Beiguang Building, No.23, Huangsi Street, Xicheng District,
          Beijing, China
          <br /> Tel : +86-10-8223-4950
        </p>
        <Title title="Vietnam Office" />
        <p>
          Add : No 241, Tang Thiet Giap Apartment, 110 Hoang Quoc Viet Street,
          Cau Giay District, Hanoi City, VietNam <br />
          Tel : +84-4-6281-7522
        </p>
        <Title title="호남본부" />
        <p>
          주소 : 광주광역시 서구 치평로 124 케이원오피스타운 726호
          <br /> Add : #726, 124, Chipyeong-ro Seo-gu Gwangju, Korea
          <br /> Tel : (062)373-4142
        </p>
      </div>
    </div>
  );
}
