import * as React from 'react';
import Image from 'next/image';
import Icon from '@/components/atoms/Icon';
import Card from '@/components/molecules/Card';
import Typography from '@/components/atoms/Typography';

const Footer: React.FC = () => (
  <footer className="bg-secondaryBackground py-16">
    <div className="container">
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 items-start">
        <div className="col-span-2 text-secondaryText">
          <Image src="/images/logo-colorful.svg" alt="Hyperhire" width={185} height={35} className="mb-4" />
          <Typography className="text-lg font-semibold text-primaryText max-w-[25ch] mb-4">
            우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다.
          </Typography>
          <Typography className="font-bold mb-1">010-0000-0000</Typography>
          <Typography className="font-bold">aaaaa@naver.com</Typography>
        </div>

        <div className="grid grid-cols-4 col-span-4 gap-4">
          <Card
            icon={<Icon size={26} name="code" className="text-[#7A8FAD]" />}
            title="해외 개발자 원격 채용"
            description=""
            link="#"
          />
          <Card
            icon={<Icon size={26} name="avatar" className="text-[#7A8FAD]" />}
            title="외국인 원격 채용 (비개발)"
            description=""
            link="#"
          />
          <Card
            icon={<Icon size={26} name="kor" className="text-[#7A8FAD]" />}
            title="한국어 가능 외국인 채용"
            description=""
            link="#"
          />
          <Card
            icon={<Icon size={26} name="gear" className="text-[#7A8FAD]" />}
            title="해외 개발자 활용 서비스"
            description=""
            link="#"
          />
        </div>

        <div className="font-semibold text-secondaryText">
          <Typography className="text-primaryText">상호명</Typography>
          <Typography className="mt-0.5">하이퍼하이어</Typography>
          <Typography className="mt-0.5">Hyperhire India Private Limited</Typography>
        </div>
        <div className="font-semibold text-secondaryText">
          <Typography className="text-primaryText">대표 CEO</Typography>
          <Typography className="mt-0.5">김주현</Typography>
          <Typography className="mt-0.5">Juhyun Kim</Typography>
        </div>
        <div className="font-semibold text-secondaryText">
          <Typography className="text-primaryText">사업자등록번호 CIN</Typography>
          <Typography className="mt-0.5">427-86-01187</Typography>
          <Typography className="mt-0.5 break-words">U74110DL2016PTC290812</Typography>
        </div>
        <div className="font-semibold text-secondaryText col-span-3">
          <Typography className="text-primaryText">주소 ADDRESS</Typography>
          <Typography className="mt-0.5">서울특별시 강남대로 479, 지하 1층 238호 </Typography>
          <Typography className="mt-0.5">
            D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi, 110053 India
          </Typography>
        </div>
        <div className="font-semibold text-secondaryText">
          <Typography>© 2023 Hyperhire</Typography>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
