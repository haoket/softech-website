import React from 'react';
import Navbar from '@/components/_App/Navbar';
import Footer from '@/components/_App/Footer';
import * as Icon from 'react-feather';
import Link from 'next/link';
import PageBanner from '@/components/Banner/PageBanner';
import Pagination from '../Pagination/Pagination';

const BlogGird3 = () => {
  return (
    <>
      <PageBanner pageTitle='Blog Grid 3' />

      <div className='blog-area ptb-80'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4 col-md-6'>
              <div className='single-blog-post-item'>
                <div className='post-image'>
                  <Link href='/blog-details'>
                    <img src='/images/blog-image/blog1.jpg' alt='image' />
                  </Link>
                </div>

                <div className='post-content'>
                  <ul className='post-meta'>
                    <li>
                      <Link href='#'>Admin</Link>
                    </li>
                    <li>August 15, 2022</li>
                  </ul>
                  <h3>
                    <Link href='/blog-details'>The security risks of changing package owners</Link>
                  </h3>

                  <Link href='/blog-details' className='read-more-btn'>
                    Read More <Icon.PlusCircle />
                  </Link>
                </div>
              </div>
            </div>

            z
          </div>
        </div>

        {/* Shape Images */}
        <div className='shape2 rotateme'>
          <img src='/images/shape2.svg' alt='shape' />
        </div>
        <div className='shape3'>
          <img src='/images/shape3.svg' alt='shape' />
        </div>
        <div className='shape4'>
          <img src='/images/shape4.svg' alt='shape' />
        </div>
        <div className='shape6 rotateme'>
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

export default BlogGird3;
