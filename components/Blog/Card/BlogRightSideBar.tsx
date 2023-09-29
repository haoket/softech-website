import React from 'react';
import Footer from '@/components/_App/Footer';
import * as Icon from 'react-feather';
import Link from 'next/link';
import PageBanner from '../../Banner/PageBanner';
import BlogSidebar from '../BlogSidebar/BlogSidebar';
import Pagination from '../Pagination/Pagination';

const BlogRightSideBar = () => {
  return (
    <>
      <PageBanner pageTitle='Blog Right Sidebar' />

      <div className='blog-area ptb-80'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8 col-md-12'>
              <div className='row justify-content-center'>
                <div className='col-lg-6 col-md-6'>
                  <div className='single-blog-post'>
                    <div className='blog-image'>
                      <Link href='/blog-details'>
                        <img src='/images/blog-image/blog1.jpg' alt='image' />
                      </Link>

                      <div className='date'>
                        <Icon.Calendar /> March 15, 2022
                      </div>
                    </div>

                    <div className='blog-post-content'>
                      <h3>
                        <Link href='/blog-details'>The Security Risks of Changing Package Owners</Link>
                      </h3>

                      <span>
                        By <Link href='#'>Admin</Link>
                      </span>

                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>

                      <Link href='/blog-details' className='read-more-btn'>
                        Read More <Icon.ArrowRight />
                      </Link>
                    </div>
                  </div>
                </div>
                {/* Pagination */}
                <Pagination />
              </div>
            </div>

            <div className='col-lg-4 col-md-12'>
              <BlogSidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogRightSideBar;
