import * as Icon from 'react-feather';
import Link from 'next/link';
import PageBanner from '@/components/Banner/PageBanner';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import { Pagination } from 'swiper';
import ContactForm from '@/components/Form/ContactForm';
const ContactInfo = () => {
  return (
    <>
      <div className='contact-info-area ptb-80'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-4 col-md-6 col-sm-6'>
              <div className='contact-info-box'>
                <div className='icon'>
                  <Icon.Mail />
                </div>
                <h3>Mail</h3>
                <p>
                  <a href='mailto:admin@startp.com'>softech@softech.vn</a>
                </p>
                <p>
                  {/* <a href='mailto:info@startp.com'>info@startp.com</a> */}
                </p>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 col-sm-6'>
              <div className='contact-info-box'>
                <div className='icon'>
                  <Icon.MapPin />
                </div>
                <h3>Trụ sở chính</h3>
                <p>38 Yên Bái, Quận Hải Châu, Đà Nẵng</p>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 col-sm-6'>
              <div className='contact-info-box'>
                <div className='icon'>
                  <Icon.Phone />
                </div>
                <h3>Điện thoại</h3>
                <p>
                  <a href='tel:+84(0236)3779777'>+84 (0236) 3 779 777 (Văn phòng)</a>
                </p>
                <p>
                  {/* <a href='tel:+84(0236)3779555'>+84 (0236) 3 779 555 (Fax)</a> */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
// ===================================GoogleMap=====================================//
const GoogleMap = () => {
  return (
    <>
      <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d414.8003892528553!2d108.22240813044937!3d16.06934512404069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219ca4f97c919%3A0x24a85e2091f793fc!2zVHJ1bmcgVMOibSDEkMOgbyBU4bqhbyBM4bqtcCBUcsOsbmggVmnDqm4gUXXhu5FjIFThur8gLSBTb2Z0ZWNoIEFwdGVjaCAtIMSQw6BvIFThuqFvIE3hu7kgVGh14bqtdCDEkGEgUGjGsMahbmcgVGnhu4duIFF14buRYyBU4bq_IC0gU29mdGVjaCBBcmVuYQ!5e0!3m2!1svi!2s!4v1689042883253!5m2!1svi!2s" 
        width='100%'
        height='450'
        allowFullScreen={true}
        loading='lazy'>
      </iframe>
    </>
  );
};
const Contact = () => {
  return (
    <>
      <PageBanner pageTitle='Liên Hệ' />
      <ContactInfo />
      <GoogleMap />
      <ContactForm />
    </>
  );
};

export default Contact;
