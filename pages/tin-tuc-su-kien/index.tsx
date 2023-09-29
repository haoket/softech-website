import Link from 'next/link';
import React, { useState } from 'react';
import PageBanner from '@/components/Banner/PageBanner';
import * as Icon from 'react-feather';
import CATEGORIES from '@/constants/CATEGORIES';
import { getPostsByCategories } from '@/services/getPosts';
import moment from 'moment';
import { Image } from '@nextui-org/react';
import { truncate } from 'lodash';
import ContactForm from '@/components/Form/ContactForm';

export async function getStaticProps() {
    const categoryID = CATEGORIES.News.toString();
    const news = await getPostsByCategories(categoryID);
    console.log(news);

    return {
        props: {
            news
        },
    }
}

export default function Index({ news }: Props) {


    return (
      <>
        <PageBanner pageTitle='TIN TỨC & SỰ KIỆN ' />
        <div className='blog-area ptb-80'>
          <div className='container'>
            <div className='row'>
              <News news={news} />
            </div>
          </div>
        </div>
        <ContactForm />
      </>
    );
}
type Props = {
    news: any
}
const News = ({ news }: Props) => {
    const [currentPage, setCurrentPage] = useState(1);
    const newsPerPage = 9;
    // Tính toán số lượng trang
    const totalPages = Math.ceil(news.length / newsPerPage);
    // Lấy ra danh sách công việc cho trang hiện tại
    const indexOfLastNew = currentPage * newsPerPage;
    const indexOfFirstNew = indexOfLastNew - newsPerPage;
    const currentNews = news.slice(indexOfFirstNew, indexOfLastNew);
    // Điều hướng đến trang mới
    const handlePageClick = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };
    console.log(news);
    return (
        <>
            {currentNews?.map((event: any) => (
                <div className="col-lg-4 col-md-6" key={event?.id}>
                    <div className="single-blog-post-box">
                        <div className="entry-thumbnail">
                            <Link href={`/tin-tuc-su-kien/${event?.friendlyUrl}`}>
                                {!event?.imagePath ? (
                                    <Image
                                        style={{ width: '100%', height: '300px' }}
                                        src="/images/blog-image/blog1.jpg" alt="image" objectFit='fill'
                                    />
                                ) : (
                                    <Image
                                        style={{ width: '100%', height: '300px' }}
                                        src={event?.imagePath} alt="image" objectFit='fill' />
                                )}
                            </Link>
                        </div>

                        <div className="entry-post-content">
                            <div className="entry-meta">
                                <ul>
                                    {/* <li><Link href="#">Admin</Link></li> */}
                                    <li>{moment(event?.createdDate).format("dddd, DD-MM-YYYY")}</li>
                                </ul>
                            </div>

                            <h3>
                                <Link href={`/tin-tuc-su-kien/${event?.friendlyUrl}`}>
                                    {event?.title}
                                </Link>
                            </h3>
                            <p style={{ textAlign: 'justify' }}>{truncate(event?.subTitle, { length: 100, separator: ' ', omission: '...', })}</p>

                            <Link href={`/tin-tuc-su-kien/${event?.friendlyUrl}`} className="learn-more-btn">
                                Xem Thêm <Icon.Plus />
                            </Link>
                        </div>
                    </div>
                </div>
            ))
            }
            {/* Pagination */}
            <div className="col-lg-12 col-md-12">
                <div className="pagination-area">
                    <nav aria-label="Page navigation">
                        <ul className="pagination justify-content-center">
                            {currentPage === 1 ? '' : (
                                <li className='page-item'>
                                    <a className='page-link'
                                        href='#'
                                        onClick={() => handlePageClick(currentPage - 1)}
                                    >
                                        Prev
                                    </a>
                                </li>
                            )}
                            {Array?.from({ length: totalPages }, (_, i) => (
                                <li key={i}
                                    className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
                                    <a className='page-link'
                                        href='#'
                                        onClick={() => handlePageClick(i + 1)}>
                                        {i + 1}
                                    </a>
                                </li>
                            ))}
                            {currentPage === totalPages ? '' : (
                                <li className="page-item">
                                    <a className='page-link'
                                        href='#'
                                        onClick={() => handlePageClick(currentPage + 1)}
                                    >
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
}