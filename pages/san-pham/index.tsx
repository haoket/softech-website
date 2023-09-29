import React from 'react';
import Link from 'next/link';
import CATEGORIES from '@/constants/CATEGORIES';
import { getPostsByCategories } from '@/services/getPosts';
import { Image } from '@nextui-org/react';
import moment from 'moment';
import PageBanner from '@/components/Banner/PageBanner';
import ContactForm from '@/components/Form/ContactForm';

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
export default function ProductsComponent({ HRS, EGOV, SXXK, GC, KDDT }: Props) {
  return (
    <>
      <Products HRS={HRS} EGOV={EGOV} SXXK={SXXK} GC={GC} KDDT={KDDT} />
      <ContactForm />
    </>
  );
}

export function Products({ HRS, EGOV, SXXK, GC, KDDT }: Props) {
  return (
    <>
      <PageBanner pageTitle='CÁC SẢN PHẨN NỔI BẬT'/>
      <div className='ml-services-area ptb-80'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-4 col-sm-6'>
              <div className='single-blog-post-item'>
                <div className='post-image' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <Link href='/san-pham/thuong-mai-dien-tu'>
                    <Image
                      style={{ width: 'auto', height: '200px' }}
                      src='https://office-softech.cdn.vccloud.vn/Modules/ASPNETVN.PORTAL.Modules.CMS/Uploads/2a56b2cf-f9fb-4e47-80b7-ab048b91d355/thumbThuongMaiDienTu.png'
                      alt='Default Image'
                      objectFit='fill'
                    />
                  </Link>
                </div>
                <div className='post-content'>
                  <h3>
                    <Link href='/san-pham/thuong-mai-dien-tu'>Hệ thống thương mại điện tử Softech</Link>
                  </h3>
                  <h5>Giá bán: Liên Hệ</h5>
                  <p style={{ textAlign: 'justify' }}>Softech eCommerce System - Giải pháp các tính năng toàn diện được áp dung cho tất cả các loại hình doanh nghiệp trực tuyến.</p>

                  <Link href='/san-pham/thuong-mai-dien-tu' className='read-more-btn'>
                    Xem chi tiết
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-sm-6'>
              <div className='single-blog-post-item'>
                <div className='post-image' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <Link href={`/san-pham/${HRS?.friendlyUrl}`}>
                    <Image style={{ width: 'auto', height: '200px' }} src={HRS?.imagePath} alt='Default Image' objectFit='fill' />
                  </Link>
                </div>
                <div className='post-content'>
                  <h3>
                    <Link href={`/san-pham/${HRS?.friendlyUrl}`}>{HRS?.title}</Link>
                  </h3>
                  <h5>Giá bán: Liên Hệ</h5>
                  <p style={{ textAlign: 'justify' }}>{HRS?.subTitle}</p>

                  <Link href={`/san-pham/${HRS?.friendlyUrl}`} className='read-more-btn'>
                    Xem chi tiết
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-sm-6'>
              <div className='single-blog-post-item'>
                <div className='post-image' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <Link href={`/san-pham/${EGOV?.friendlyUrl}`}>
                    <Image style={{ width: 'auto', height: '200px' }} src={EGOV?.imagePath} alt='Default Image' objectFit='fill' />
                  </Link>
                </div>
                <div className='post-content'>
                  <h3>
                    <Link href={`/san-pham/${EGOV?.friendlyUrl}`}>{EGOV?.title}</Link>
                  </h3>
                  <h5>Giá bán: Liên Hệ</h5>
                  <p style={{ textAlign: 'justify' }}>{EGOV?.subTitle}</p>

                  <Link href={`/san-pham/${EGOV?.friendlyUrl}`} className='read-more-btn'>
                    Xem chi tiết
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-sm-6'>
              <div className='single-blog-post-item'>
                <div className='post-image' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <Link href={`/san-pham/${SXXK?.friendlyUrl}`}>
                    <Image style={{ width: 'auto', height: '200px' }} src={SXXK?.imagePath} alt='Default Image' objectFit='fill' />
                  </Link>
                </div>
                <div className='post-content'>
                  <h3>
                    <Link href={`/san-pham/${SXXK?.friendlyUrl}`}>{SXXK?.title}</Link>
                  </h3>
                  <h5>Giá bán: 3.990.000 ₫</h5>
                  <p style={{ textAlign: 'justify' }}>{SXXK?.subTitle}</p>

                  <Link href={`/san-pham/${SXXK?.friendlyUrl}`} className='read-more-btn'>
                    Xem chi tiết
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-sm-6'>
              <div className='single-blog-post-item'>
                <div className='post-image' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <Link href={`/san-pham/${GC?.friendlyUrl}`}>
                    <Image style={{ width: 'auto', height: '200px' }} src={GC?.imagePath} alt='Default Image' objectFit='fill' />
                  </Link>
                </div>
                <div className='post-content'>
                  <h3>
                    <Link href={`/san-pham/${GC?.friendlyUrl}`}>{GC?.title}</Link>
                  </h3>
                  <h5>Giá bán: 3.990.000 ₫</h5>
                  <p style={{ textAlign: 'justify' }}>{GC?.subTitle}</p>

                  <Link href={`/san-pham/${GC?.friendlyUrl}`} className='read-more-btn'>
                    Xem chi tiết
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-sm-6'>
              <div className='single-blog-post-item'>
                <div className='post-image' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <Link href={`/san-pham/${KDDT?.friendlyUrl}`}>
                    <Image style={{ width: 'auto', height: '200px' }} src={KDDT?.imagePath} alt='Default Image' objectFit='fill' />
                  </Link>
                </div>
                <div className='post-content'>
                  <h3>
                    <Link href={`/san-pham/${KDDT?.friendlyUrl}`}>{KDDT?.title}</Link>
                  </h3>
                  <h5>Giá bán: 1.200.000 ₫</h5>
                  <p style={{ textAlign: 'justify' }}>{KDDT?.subTitle}</p>

                  <Link href={`/san-pham/${KDDT?.friendlyUrl}`} className='read-more-btn'>
                    Xem chi tiết
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <>
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
        </>
      </div>
    </>
  );
}
