import React from 'react';
import Navbar from '@/components/_App/Navbar';
import Footer from '@/components/_App/Footer';
import * as Icon from 'react-feather';
import PageBanner from '../../Banner/PageBanner';
import BlogSidebar from '../BlogSidebar/BlogSidebar';
import Image from 'next/image';
import { renderHTML } from '@/libraries/render';
import _ from 'lodash';

const PostDetails = ({ posts }: any) => {
  const mainPost = _.filter(posts, { groupID: 3195 });
  const functionPost = _.filter(posts, { groupID: 3196 });
  const price = _.filter(posts, { groupID: 3197 });
  const support = _.filter(posts, { groupID: 3198 });
  const customer = _.filter(posts, { groupID: 3199 });
  const faq = _.filter(posts, { groupID: 3200 });
  return (
    <>
      <PageBanner pageTitle='test' />

      <div className='blog-details-area ptb-80'>
        <div className='container'>
          <div className='row'>
            {mainPost.map((post: any) => {
              return (
                <div className='col-lg-8 col-md-12' key={post.id}>
                  <div className='blog-details-desc'>
                    <div className='article-image'>
                      <Image src={post.imagePath} alt='image' width={500} height={400} />
                    </div>

                    <div className='article-content'>
                      <div className='entry-meta'>
                        <ul>
                          <li>
                            <Icon.Clock /> September 31, 2022
                          </li>
                          <li>
                            <Icon.User /> <a href='#'>Steven Smith</a>
                          </li>
                        </ul>
                      </div>

                      <h2>{post.title}</h2>
                      {renderHTML(post.body)}
                      {/* ==== Chuc nang ======== */}
                      <div style={{ marginTop: 30 }}>
                        <h3>{functionPost?.[0].title}</h3>
                        {renderHTML(functionPost?.[0].body)}
                      </div>

                      {/* ==== price ======== */}
                      <div style={{ marginTop: 30 }}>
                        {/* <h3>{price?.[0].title}</h3> */}
                        {renderHTML(price?.[0].body)}
                      </div>

                      {/* ==== support ======== */}
                      <div style={{ marginTop: 30 }}>
                        {/* <h3>{price?.[0].title}</h3> */}
                        {renderHTML(support?.[0].body)}
                      </div>

                      {/* ==== customer ======== */}
                      <div style={{ marginTop: 30 }}>
                        {/* <h3>{price?.[0].title}</h3> */}
                        {renderHTML(customer?.[0].body)}
                      </div>

                      {/* ==== faq ======== */}
                      <div style={{ marginTop: 30 }}>
                        {/* <h3>{price?.[0].title}</h3> */}
                        {renderHTML(faq?.[0].body)}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className='col-lg-4 col-md-12'>
              <BlogSidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostDetails;
