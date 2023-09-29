import React from 'react';

import * as Icon from 'react-feather';
import Link from 'next/link';
import PageBanner from '@/components/Banner/PageBanner';
import Pagination from '../Pagination/Pagination';

const BlogGird2 = () => {
  return (
    <>
      <PageBanner pageTitle='Blog Grid 2' />

      <div className='blog-area ptb-80'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4 col-md-6'>
              <div className='single-blog-post-box'>
                <div className='entry-thumbnail'>
                  <Link href='/blog-details'>
                    <img src='/images/blog-image/blog9.jpg' alt='image' />
                  </Link>
                </div>

                <div className='entry-post-content'>
                  <div className='entry-meta'>
                    <ul>
                      <li>
                        <Link href='#'>Admin</Link>
                      </li>
                      <li>August 15, 2022</li>
                    </ul>
                  </div>

                  <h3>
                    <Link href='/blog-details'>Making Peace With The Feast Or Famine Of Freelancing</Link>
                  </h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...</p>

                  <Link href='/blog-details' className='learn-more-btn'>
                    Read Story <Icon.Plus />
                  </Link>
                </div>
              </div>
            </div>

            {/* Pagination */}
            <Pagination />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogGird2;
