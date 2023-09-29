import React from 'react';
import Link from 'next/link';
import * as Icon from 'react-feather';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className='footer-area bg-f7fafd'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-3 col-md-6'>
              <div className='single-footer-widget pl-5'>
                <h3>TRỤ SỞ CHÍNH</h3>
                <ul className='footer-contact-info'>
                  <li>
                    <Icon.MapPin />
                    Tòa nhà VNPT, 38 Yên Bái, Quận Hải Châu, Đà Nẵng
                  </li>
                  {/* <li>
                    <Icon.Mail />
                    Email: <a href='mailto:startp@gmail.com'>startp@gmail.com</a>
                  </li> */}
                  <li>
                    <Icon.PhoneCall />
                    Điện thoại: <a href='tel:02363779777'>+84 (0236) 3 779 777</a>
                  </li>
                  <li>
                    <Icon.PhoneCall />
                    Phòng kinh doanh phần mềm <a href='tel:0914086339'>0914 086339</a>
                  </li>
                  <li>
                    <Icon.PhoneCall />
                    Dịch vụ lưu trú trực tuyến <a href='tel:0903535777'>0903 535777</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className='col-lg-3 col-md-6'>
              <div className='single-footer-widget pl-5'>
                <h3>CHI NHÁNH HÀ NỘI</h3>
                <ul className='footer-contact-info'>
                  <li>
                    <Icon.MapPin />
                    96 Nguyễn Khánh Toàn, Cầu Giấy, Hà Nội
                  </li>
                  {/* <li>
                    <Icon.Mail />
                    Email: <a href='mailto:startp@gmail.com'>startp@gmail.com</a>
                  </li> */}
                  <li>
                    <Icon.PhoneCall />
                    Điện thoại: <a href='tel:18002098'>18002098</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className='col-lg-3 col-md-6'>
              <div className='single-footer-widget pl-5'>
                <h3>CHI NHÁNH CẦN THƠ</h3>
                <ul className='footer-contact-info'>
                  <li>
                    <Icon.MapPin />
                    118 Đường 3/2, P. Xuân Khánh, Q. Ninh Kiều
                  </li>
                  {/* <li>
                    <Icon.Mail />
                    Email: <a href='mailto:startp@gmail.com'>startp@gmail.com</a>
                  </li> */}
                  <li>
                    <Icon.PhoneCall />
                    Điện thoại: <a href='tel:02923735155'>0292 3 735 155</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className='col-lg-3 col-md-6'>
              <div className='single-footer-widget'>
                <h3>CHI NHÁNH HUẾ</h3>

                <ul className='footer-contact-info'>
                  <li>
                    <Icon.MapPin />
                    Tầng 3, 18 Lê Lợi, P. Vĩnh Ninh, TP. Huế
                  </li>

                  <li>
                    <Icon.PhoneCall />
                    Điện thoại: <a href='tel:02343688111'>+ 0234 3 688 111</a>
                  </li>
                </ul>

                {/* =========social-========================================== */}
                <ul className='social-links'>
                  <li>
                    <a href='https://www.facebook.com/' className='facebook' target='_blank'>
                      <Icon.Facebook />
                    </a>
                  </li>
                  <li>
                    <a href='https://www.twitter.com/' className='twitter' target='_blank'>
                      <Icon.Twitter />
                    </a>
                  </li>
                  <li>
                    <a href='https://www.instagramcom/' className='instagram' target='_blank'>
                      <Icon.Instagram />
                    </a>
                  </li>
                  <li>
                    <a href='https://www.linkedin.com/' className='linkedin' target='_blank'>
                      <Icon.Linkedin />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className='col-lg-12 col-md-12'>
              <div className='copyright-area'>
                <p>
                  Copyright &copy; {currentYear} StartP. All rights reserved by{' '}
                  <a href='https://envytheme.com/' target='_blank'>
                    Softech
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <img src='/images/map.png' className='map' alt='map' />

        {/* Shape Images */}
        <div className='shape1'>
          <img src='/images/shape1.png' alt='shape' />
        </div>
        <div className='shape8 rotateme'>
          <img src='/images/shape2.svg' alt='shape' />
        </div>
      </footer>
    </>
  );
};

export default Footer;
