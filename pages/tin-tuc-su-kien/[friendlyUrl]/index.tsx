import { useRouter } from 'next/router';
import PageBanner from '@/components/Banner/PageBanner';
import BlogSidebar from '@/components/Blog/BlogSidebar/BlogSidebar';
import * as Icon from 'react-feather';
import { Image } from "@nextui-org/react";
import ReactHtmlParser from 'react-html-parser';
import moment from 'moment';
import CATEGORIES from '@/constants/CATEGORIES';
import GROUPS from '@/constants/GROUPS';
import URLS from '@/constants/URLS';
import { getPosts, getPostsByFriendlyUrl, getPostsByPostId } from '@/services/getPosts';
import _ from 'lodash';
import { GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';
import Link from 'next/link';
import { renderHTML } from '@/libraries/render';
import ContactForm from '@/components/Form/ContactForm';

export const getStaticPaths = async () => {
  // Get Posts by category and group
  const news = await getPosts({
    mode: 'ForStaticPaths',
    categoryId: CATEGORIES.News,
    groupId: GROUPS.Main,
    includeBody: false,
  });

  const paths = news.map((event: any) => {
    return {
      params: {
        friendlyUrl: event.friendlyUrl,
      },
    };
  });
  return { paths, fallback: true };
};

interface IParams extends ParsedUrlQuery {
  friendlyUrl: string;
}
// ------------------------------------------------------------------------------------------------
export const getStaticProps: GetStaticProps = async (context) => {
  const { friendlyUrl } = context.params as IParams;
  console.log('🚀 ~ friendlyUrl:', friendlyUrl);

  const event: any = _.first(await getPostsByFriendlyUrl(friendlyUrl));
  console.log('🚀 ~ post:', event);

  if (!event) {
    return { notFound: true };
  }

  const news = await getPosts({
    categoryId: event.categoryID,
    includeBody: true,
  });

  const prevPost = await getPostsByPostId(event?.id + 1);
  const nextPost = await getPostsByPostId(event?.id - 1);

  return {
    props: {
      eventDetail: event,
      news: news,
      prevPost: prevPost[0] || null,
      nextPost: nextPost[0] || null,
    },
    revalidate: URLS.validate,
  };
};
type Props = {
  eventDetail: any,
  prevPost: any,
  nextPost: any,
  news: any[]
}


export default function Event({ eventDetail, news, prevPost, nextPost }: Props) {
  return (
    <>
      <PageBanner pageTitle={eventDetail?.title} />
      <div className='blog-details-area ptb-80'>
        <div className='container'>
          <div className='row'>
            {/* chi itet */}
            <div className='col-lg-8 col-md-12'>
              <div className='blog-details-desc'>
                <div className='article-image'>{!eventDetail?.imagePath ? '' : <Image style={{ width: '100%', height: 'auto' }} src={eventDetail?.imagePath} alt='Default Image' objectFit='cover' />}</div>
                <div className='article-content'>
                  <div className='entry-meta'>
                    <ul>
                      <li>
                        <Icon.Clock /> {moment(eventDetail?.createdDate).format('dddd, DD-MM-YYYY')}
                      </li>
                      <li>
                        <Icon.User />
                        {/* <a href="#">Admin</a> */}
                      </li>
                    </ul>
                  </div>
                  <div>{renderHTML(eventDetail?.body)}</div>
                </div>
                {/* prevPost and nextPost */}
                <div className='startp-post-navigation'>
                  {!prevPost ? (
                    ''
                  ) : (
                    <div className='prev-link-wrapper'>
                      <div className='info-prev-link-wrapper'>
                        <a href={`/tin-tuc-su-kien/${prevPost?.friendlyUrl}`}>
                          <span className='image-prev'>
                            {!prevPost?.imagePath ? <img src='/images/blog-image/blog2.jpg' alt='image' /> : <Image style={{ width: '100px', height: '81px' }} src={prevPost?.imagePath} alt='image' objectFit='fill' />}
                            <span className='post-nav-title'>Prev</span>
                          </span>

                          <span className='prev-link-info-wrapper'>
                            <span className='prev-title'>{prevPost?.title}</span>
                            <span className='meta-wrapper'>
                              <span className='date-post'>{moment(prevPost?.createdDate).format('dddd, DD-MM-YYYY')}</span>
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>
                  )}

                  {!nextPost ? (
                    ''
                  ) : (
                    <div className='next-link-wrapper'>
                      <div className='info-next-link-wrapper'>
                        <a href={`/tin-tuc-su-kien/${nextPost?.friendlyUrl}`}>
                          <span className='next-link-info-wrapper'>
                            <span className='next-title'>{nextPost?.title}</span>
                            <span className='meta-wrapper'>
                              <span className='date-post'>{moment(nextPost?.createdDate).format('dddd, DD-MM-YYYY')}</span>
                            </span>
                          </span>

                          <span className='image-next'>
                            {!nextPost?.imagePath ? <img src='/images/blog-image/blog2.jpg' alt='image' /> : <Image style={{ width: '100px', height: '81px' }} src={nextPost?.imagePath} alt='image' objectFit='fill' />}
                            <span className='post-nav-title'>Next</span>
                          </span>
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* sidebar */}
            <div className='col-lg-4 col-md-12'>
              <div className='widget-area' id='secondary'>
                <div className='widget widget_search'>
                  <form className='search-form'>
                    <label>
                      <input type='search' className='search-field' placeholder='Search...' />
                    </label>
                    <button type='submit'>
                      <Icon.Search />
                    </button>
                  </form>
                </div>

                <div className='widget widget_startp_posts_thumb'>
                  <h3 className='widget-title'>Popular Posts</h3>
                  {news
                    ?.slice(-8)
                    .reverse()
                    .map((event: any) => (
                      <article className='item' key={event.id}>
                        <Link href={`/tin-tuc-su-kien/${event?.friendlyUrl}`} className='thumb'>
                          {!event?.imagePath ? <span className='fullimage cover bg1' role='img'></span> : <Image style={{ width: '80px', height: '80px' }} src={event?.imagePath} alt='Default Image' objectFit='fill' />}
                        </Link>
                        <div className='info'>
                          <time>{moment(event?.createdDate).format('dddd, DD-MM-YYYY')}</time>
                          <h4 className='title usmall'>
                            <Link href={`/tin-tuc-su-kien/${event?.friendlyUrl}`}>{event?.title}</Link>
                          </h4>
                        </div>
                        <div className='clear'></div>
                      </article>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactForm />
    </>
  );
}
