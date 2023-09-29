import Link from 'next/link';
import React, { useState } from 'react';
import Navbar from '@/components/_App/Navbar';
import Footer from '@/components/_App/Footer';
import PageBanner from '@/components/Banner/PageBanner';
import * as Icon from 'react-feather';
import CATEGORIES from '@/constants/CATEGORIES';
import { getPostsByCategories, getPostsByFriendlyUrl } from '@/services/getPosts';
import moment from 'moment';
import { Image } from '@nextui-org/react';
import { renderHTML } from '@/libraries/render';
import ContactForm from '@/components/Form/ContactForm';

export async function getStaticProps({ params }: Props) {
  switch (params.categoryID) {
    case '128006789':
      const upcom = await getPostsByCategories(params.categoryID.toString());
      return {
        props: {
          news: upcom,
          titlePage: 'Hồ sơ đăng ký giao dịch Upcom',
        },
      };
    case '128006790':
      const dhcd = await getPostsByCategories(params.categoryID.toString());
      return {
        props: {
          news: dhcd,
          titlePage: 'Đại hội cổ đông',
        },
      };
    case '128006791':
      const bctc = await getPostsByCategories(params.categoryID.toString());
      return {
        props: {
          news: bctc,
          titlePage: 'Báo cáo tài chính',
        },
      };
    case '128006792':
      const dlct = await getPostsByCategories(params.categoryID.toString());

      return {
        props: {
          news: dlct,
          titlePage: 'Điều lệ công ty',
        },
      };
    case '128006793':
      const qcqt = await getPostsByCategories(params.categoryID.toString());

      return {
        props: {
          news: qcqt,
          titlePage: 'Quy chế QT nội bộ',
        },
      };
    case '128006794':
      const bctn = await getPostsByCategories(params.categoryID.toString());

      return {
        props: {
          news: bctn,
          titlePage: 'Báo cáo thường niên',
        },
      };
    case '128006795':
      const bcth = await getPostsByCategories(params.categoryID.toString());

      return {
        props: {
          news: bcth,
          titlePage: 'Báo cáo tình hình quản trị công ty',
        },
      };
    case '128006796':
      const cttk = await getPostsByCategories(params.categoryID.toString());

      return {
        props: {
          news: cttk,
          titlePage: 'Các thông tin khác',
        },
      };
    default:
      return {
        props: {
          news: [],
          titlePage: [],
        },
      };
  }
}

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};
type Props = {
  news: any[];
  params: any;
  titlePage: any;
};

export default function Index({ news, titlePage }: Props) {
  return (
    <>
      <PageBanner pageTitle={titlePage} />
      <div className='blog-area ptb-80'>
        <div className='container'>
          <div className='row'>
            <News news={news} params={undefined} titlePage={undefined} />
          </div>
        </div>
      </div>
      <ContactForm />
    </>
  );
}
const News = ({ news }: Props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const newsPerPage = 12;
  const totalPages = Math.ceil(news?.length / newsPerPage);
  const indexOfLastNew = currentPage * newsPerPage;
  const indexOfFirstNew = indexOfLastNew - newsPerPage;
  const currentNews = news?.slice(indexOfFirstNew, indexOfLastNew);
  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  console.log(news);
  return (
    <>
      {currentNews?.map((event) => (
        <div className='col-lg-6 col-md-12' key={event?.id}>
          <div className='single-blog-post-box'>
            <div className='entry-post-content'>
              <div className='entry-meta'>
                <ul>
                  <li>
                    <Link href='#'>Softech</Link>
                  </li>
                  <li>{moment(event?.createdDate).format('dddd, DD-MM-YYYY')}</li>
                </ul>
              </div>
              <h3 style={{ textAlign: 'justify' }}>{event?.title}</h3>
              <p style={{ textAlign: 'justify', wordBreak: 'break-word' }}>{renderHTML(event?.body)}</p>
            </div>
          </div>
        </div>
      ))}
      {/* Pagination */}
      <div className='col-lg-12 col-md-12'>
        <div className='pagination-area'>
          <nav aria-label='Page navigation'>
            <ul className='pagination justify-content-center'>
              {currentPage === 1 ? (
                ''
              ) : (
                <li className='page-item'>
                  <a className='page-link' href='#' onClick={() => handlePageClick(currentPage - 1)}>
                    Prev
                  </a>
                </li>
              )}
              {Array?.from({ length: totalPages }, (_, i) => (
                <li key={i} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
                  <a className='page-link' href='#' onClick={() => handlePageClick(i + 1)}>
                    {i + 1}
                  </a>
                </li>
              ))}
              {currentPage === totalPages ? (
                ''
              ) : (
                <li className='page-item'>
                  <a className='page-link' href='#' onClick={() => handlePageClick(currentPage + 1)}>
                    Next
                  </a>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};
