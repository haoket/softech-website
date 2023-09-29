import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import * as Icon from 'react-feather';
import { useSelector } from 'react-redux';
import baseUrl from '../../utils/baseUrl';
import CATEGORIES from '@/constants/CATEGORIES';
const Navbar = () => {
  // Add active class
  const [currentPath, setCurrentPath] = useState('');
  const router = useRouter();
  // console.log(router.asPath)

  useEffect(() => {
    setCurrentPath(router.asPath);
  }, [router]);

  // const cart = useSelector((state: any) => state.cart);
  const [menu, setMenu] = React.useState(true);

  const toggleNavbar = () => {
    setMenu(!menu);
  };

  React.useEffect(() => {
    let elementId = document.getElementById('header');
    document.addEventListener('scroll', () => {
      if (window.scrollY > 170) {
        elementId?.classList.add('is-sticky');
      } else {
        elementId?.classList.remove('is-sticky');
      }
    });
  });

  const classOne = menu ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
  const classTwo = menu ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

  return (
    <>
      <header id='header' className='headroom'>
        <div className='startp-nav'>
          <div className='container'>
            <nav className='navbar navbar-expand-md navbar-light'>
              <Link href='/' className='navbar-brand'>
                <img src='/images/logo.png' alt='logo' />
              </Link>

              <button onClick={toggleNavbar} className={classTwo} type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
                <span className='icon-bar top-bar'></span>
                <span className='icon-bar middle-bar'></span>
                <span className='icon-bar bottom-bar'></span>
              </button>

              <div className={classOne} id='navbarSupportedContent'>
                <ul className='navbar-nav ms-auto'>
                  <li className='nav-item'>
                    <Link href='/' onClick={toggleNavbar} className={`nav-link ${currentPath == '/' && 'active'}`}>
                      Trang chủ
                    </Link>
                  </li>

                  <li className='nav-item'>
                    <Link href='/gioi-thieu' onClick={toggleNavbar} className={`nav-link ${currentPath == '/gioi-thieu' && 'active'}`}>
                      Giới thiệu
                    </Link>
                  </li>

                  <li className='nav-item'>
                    <Link href='/san-pham' onClick={toggleNavbar} className={`nav-link ${currentPath == '/san-pham' && 'active'}`}>
                      Sản phẩm
                    </Link>
                  </li>

                  <li className='nav-item'>
                    <Link href='/dich-vu' onClick={toggleNavbar} className={`nav-link ${currentPath == '/dich-vu' && 'active'}`}>
                      Dịch vụ 
                      {/* <Icon.ChevronDown /> */}
                    </Link>
                    {/* <ul className='dropdown-menu'>
                      <li className='nav-item'>
                        <Link href='/dich-vu/phat-trien-phan-mem' onClick={toggleNavbar} className={`nav-link ${currentPath == '/dich-vu/phat-trien-phan-mem' && 'active'}`}>
                          Phát triển phần mềm
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link href='/dich-vu/dao-tao-nguon-nhan-luc' onClick={toggleNavbar} className={`nav-link ${currentPath == '/dich-vu/dao-tao-nguon-nhan-luc' && 'active'}`}>
                          Đào tạo nguồn nhân lực
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link href={`/dich-vu/gia-cong-phan-mem`} onClick={toggleNavbar} className={`nav-link ${currentPath == 'dich-vu/gia-cong-phan-mem' && 'active'}`}>
                          Gia công phần mềm
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link href={`/dich-vu/nang-luc-va-chuyen-mon`} onClick={toggleNavbar} className={`nav-link ${currentPath == 'dich-vu/nang-luc-va-chuyen-mon' && 'active'}`}>
                          Năng lực và chuyên môn
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link href={`/dich-vu/dam-bao-chat-luong`} onClick={toggleNavbar} className={`nav-link ${currentPath == 'dich-vu/dam-bao-chat-luong' && 'active'}`}>
                          Đảm bảo chất lượng
                        </Link>
                      </li>
                    </ul> */}
                  </li>
                  <li className='nav-item'>
                    <Link href='/tin-tuc-su-kien' onClick={toggleNavbar} className={`nav-link ${currentPath == '/tin-tuc-su-kien' && 'active'}`}>
                      Tin tức & Sự kiện
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link href='/quan-he-co-dong' onClick={toggleNavbar} className={`nav-link ${currentPath == '/quan-he-co-dong' && 'active'}`}>
                      Quan hệ cổ đông
                      <Icon.ChevronDown />
                    </Link>
                    <ul className='dropdown-menu'>
                      <li className='nav-item'>
                        <Link href={`/quan-he-co-dong/${CATEGORIES.GDUC}/`} onClick={toggleNavbar} className={`nav-link ${currentPath == `/quan-he-co-dong/${CATEGORIES.GDUC}` && 'active'}`}>
                          Hồ sơ đăng ký giao dịch Upcom
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link href={`/quan-he-co-dong/${CATEGORIES.DHCD}/`} onClick={toggleNavbar} className={`nav-link ${currentPath == `/quan-he-co-dong/${CATEGORIES.DHCD}` && 'active'}`}>
                          Đại hội cổ đông
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link href={`/quan-he-co-dong/${CATEGORIES.BCTC}/`} onClick={toggleNavbar} className={`nav-link ${currentPath == `/quan-he-co-dong/${CATEGORIES.BCTC}` && 'active'}`}>
                          Báo cáo tài chính
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link href={`/quan-he-co-dong/${CATEGORIES.DLCT}/`} onClick={toggleNavbar} className={`nav-link ${currentPath == `/quan-he-co-dong/${CATEGORIES.DLCT}` && 'active'}`}>
                          Điều lệ công ty
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link href={`/quan-he-co-dong/${CATEGORIES.QCQT}/`} onClick={toggleNavbar} className={`nav-link ${currentPath == `/quan-he-co-dong/${CATEGORIES.QCQT}` && 'active'}`}>
                          Quy chế QT nội bộ
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link href={`/quan-he-co-dong/${CATEGORIES.BCTN}/`} onClick={toggleNavbar} className={`nav-link ${currentPath == `/quan-he-co-dong/${CATEGORIES.BCTN}` && 'active'}`}>
                          Báo cáo thường niên
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link href={`/quan-he-co-dong/${CATEGORIES.BCTH}/`} onClick={toggleNavbar} className={`nav-link ${currentPath == `/quan-he-co-dong/${CATEGORIES.BCTH}` && 'active'}`}>
                          Báo cáo tình hình quản trị công ty
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link href={`/quan-he-co-dong/${CATEGORIES.CTTK}/`} onClick={toggleNavbar} className={`nav-link ${currentPath == `/quan-he-co-dong/${CATEGORIES.CTTK}` && 'active'}`}>
                          Các thông tin khác
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className='nav-item'>
                    <Link href='/tuyen-dung' onClick={toggleNavbar} className={`nav-link ${currentPath == '/tuyen-dung' && 'active'}`}>
                      Tuyển dụng
                    </Link>
                  </li>

                  <li className='nav-item'>
                    <Link href='/lien-he' onClick={toggleNavbar} className={`nav-link ${currentPath == '/lien-he' && 'active'}`}>
                      Liên hệ
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Others option */}
              {/* <div className='others-option'>
                <Link href='/cart/' className='cart-wrapper-btn'>
                  <Icon.ShoppingCart />
                  <span>{cart.length}</span>
                </Link>

                <Link href='/contact/' className='btn btn-light'>
                  Support
                </Link>

                <Link href='/login/' className='btn btn-primary'>
                  Login
                </Link>
              </div> */}
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
