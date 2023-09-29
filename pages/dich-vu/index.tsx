import Link from 'next/link';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import PageBanner from '@/components/Banner/PageBanner';
import * as Icon from 'react-feather';
import CATEGORIES from '@/constants/CATEGORIES';
import { getPostsByCategories } from '@/services/getPosts';
import { Image } from '@nextui-org/react';
import ContactForm from '@/components/Form/ContactForm';
import Products from 'pages/san-pham/index';

export async function getStaticProps() {
  const HRS = await getPostsByCategories(CATEGORIES.HRS.toString());
  const EGOV = await getPostsByCategories(CATEGORIES.EGOV.toString());
  const SXXK = await getPostsByCategories(CATEGORIES.SXXK.toString());
  const GC = await getPostsByCategories(CATEGORIES.GC.toString());
  const KDDT = await getPostsByCategories(CATEGORIES.KDDT.toString());
  return {
    props: {
      HRS: HRS[5],
      EGOV: EGOV[5],
      SXXK: SXXK[5],
      GC: GC[5],
      KDDT: KDDT[5],
    },
  };
}
type Props = {
  HRS: any;
  EGOV: any;
  SXXK: any;
  GC: any;
  KDDT: any;
};

export default function Index({ HRS, EGOV, SXXK, GC, KDDT }: Props) {
  return (
    <>
      <PageBanner pageTitle='CÁC DỊCH VỤ CỦA CHÚNG TÔI' />
      <OurFeatures />
      <Products HRS={HRS} EGOV={EGOV} SXXK={SXXK} GC={GC} KDDT={KDDT} />
    </>
  );
}

const OurFeatures = () => {
  return (
    <>
      <div className='ml-services-area ptb-80'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-4 col-md-12 services-content'>
              <div className='row'>
                <div className='col-lg-12 col-sm-12'>
                  <div className='single-ml-services-box'>
                    <Link href='dich-vu/phat-trien-phan-mem'>
                      <div className='image'>
                        <img src='/images/services-image/service-image5.png' alt='image' />
                      </div>
                    </Link>
                    <h3>
                      <Link href='dich-vu/phat-trien-phan-mem'>Phát triển phần mềm</Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-12 services-content'>
              <div className='row'>
                <div className='col-lg-12 col-sm-12'>
                  <div className='single-ml-services-box'>
                    <Link href='dich-vu/dao-tao-nguon-nhan-luc'>
                      <div className='image'>
                        <img src='/images/services-image/service-image6.png' alt='image' />
                      </div>
                    </Link>
                    <h3>
                      <Link href='dich-vu/dao-tao-nguon-nhan-luc'>Đào tạo nguồn nhân lực</Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-12 services-content'>
              <div className='row'>
                <div className='col-lg-12 col-sm-12'>
                  <div className='single-ml-services-box'>
                    <Link href='dich-vu/gia-cong-phan-mem'>
                      <div className='image'>
                        <img src='/images/services-image/service-image1.png' alt='image' />
                      </div>
                    </Link>
                    <h3>
                      <Link href='dich-vu/gia-cong-phan-mem'>Gia công phần mềm</Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-12 services-content'>
              <div className='row'>
                <div className='col-lg-12 col-sm-12'>
                  <div className='single-ml-services-box'>
                    <Link href='dich-vu/nang-luc-va-chuyen-mon'>
                      <div className='image'>
                        <img src='/images/services-image/service-image2.png' alt='image' />
                      </div>
                    </Link>
                    <h3>
                      <Link href='dich-vu/nang-luc-va-chuyen-mon'>Năng lực và chuyên môn</Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-12 services-content'>
              <div className='row'>
                <div className='col-lg-12 col-sm-12'>
                  <div className='single-ml-services-box'>
                    <Link href='dich-vu/dam-bao-chat-luong'>
                      <div className='image'>
                        <img src='/images/services-image/service-image4.png' alt='image' />
                      </div>
                    </Link>
                    <h3>
                      <Link href='dich-vu/dam-bao-chat-luong'>Đảm bảo chất lượng</Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className='shape1'>
          <img src='/images/shape1.png' alt='shape' />
        </div>
        <div className='shape2 rotateme'>
          <img src='/images/shape2.svg' alt='shape' />
        </div>
        <div className='shape3'>
          <img src='/images/shape3.svg' alt='shape' />
        </div>
        <div className='shape4'>
          <img src='/images/shape4.svg' alt='shape' />
        </div>
        <div className='shape7'>
          <img src='/images/shape4.svg' alt='shape' />
        </div>
        <div className='shape8 rotateme'>
          <img src='/images/shape2.svg' alt='shape' />
        </div>
      </div>
    </>
  );
};
