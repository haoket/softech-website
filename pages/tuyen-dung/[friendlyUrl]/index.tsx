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
import { getPosts, getPostsByFriendlyUrl } from '@/services/getPosts';
import _ from 'lodash';
import { GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';
import Link from 'next/link';

export const getStaticPaths = async () => {
    // Get Posts by category and group
    const jobs = await getPosts({
        mode: 'ForStaticPaths',
        categoryId: CATEGORIES.Jobs,
        groupId: GROUPS.Main,
        includeBody: false,
    });

    const paths = jobs.map((job: any) => {
        return {
            params: {
                friendlyUrl: job.friendlyUrl,
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

    const job: any = _.first(await getPostsByFriendlyUrl(friendlyUrl));
    console.log('🚀 ~ post:', job);

    if (!job) {
        return { notFound: true };
    }

    const jobs = await getPosts({
        categoryId: job.categoryID,
        includeBody: true,
    });

    return {
        props: {
            job: job,
            jobs: jobs
        },
        revalidate: URLS.validate,
    };
};

type Props = {
    jobs: any[],
    job: any
}

export default function Job({ job, jobs }: Props) {
    const body: any = ReactHtmlParser(job?.body);
    return (
        <>
            <PageBanner pageTitle={job?.title} />
            <div className="blog-details-area ptb-80" >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="blog-details-desc">
                                <div className="article-image">
                                    <Image
                                        style={{ width: '100%', height: 'auto' }}
                                        src="https://softech.vn/Content/company/images/Tuyen-Dung-Softech.jpg"
                                        alt="Default Image"
                                        objectFit="cover"
                                    />
                                </div>
                                <div className="article-content">
                                    <div className="entry-meta">
                                        <ul>
                                            <li>
                                                <Icon.Clock /> {moment(job?.createdDate).format("dddd, DD-MM-YYYY")}
                                            </li>
                                            <li>
                                                <Icon.User /> <a href="#">Sưu tầm</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        {ReactHtmlParser(body)}
                                    </div>
                                </div>
                                {/* <div className="startp-post-navigation">
                                    <div className="prev-link-wrapper">
                                        <div className="info-prev-link-wrapper">
                                            <a href="#">
                                                <span className="image-prev">
                                                    <img src="/images/blog-image/blog2.jpg" alt="image" />
                                                    <span className="post-nav-title">Prev</span>
                                                </span>
            
                                                <span className="prev-link-info-wrapper">
                                                    <span className="prev-title">Don't buy a tech gift until you read these rules</span>
                                                    <span className="meta-wrapper">
                                                        <span className="date-post">January 21, 2022</span>
                                                    </span>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
            
                                    <div className="next-link-wrapper">
                                        <div className="info-next-link-wrapper">
                                            <a href="#">
                                                <span className="next-link-info-wrapper">
                                                    <span className="next-title">The golden rule of buying a phone as a gift</span>
                                                    <span className="meta-wrapper">
                                                        <span className="date-post">January 21, 2022</span>
                                                    </span>
                                                </span>
            
                                                <span className="image-next">
                                                    <img src="/images/blog-image/blog3.jpg" alt="image" />
                                                    <span className="post-nav-title">Next</span>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <div className="widget-area" id="secondary">
                                <div className="widget widget_search">
                                    <form className="search-form">
                                        <label>
                                            <input type="search" className="search-field" placeholder="Search..." />
                                        </label>
                                        <button type="submit">
                                            <Icon.Search />
                                        </button>
                                    </form>
                                </div>

                                <div className="widget widget_startp_posts_thumb">
                                    <h3 className="widget-title">Popular Posts</h3>
                                    {jobs?.map((job) => (
                                        <article className="item" key={job.id}>
                                            <Link href={`/tuyen-dung/${job?.friendlyUrl}`} className="thumb">
                                                <Image
                                                    style={{ width: '100%', height: '100%' }}
                                                    src="https://softech.vn/Content/company/images/Tuyen-Dung-Softech.jpg"
                                                    alt="Default Image"
                                                />
                                            </Link>

                                            <div className="info">
                                                <time>{moment(job?.createdDate).format("dddd, DD-MM-YYYY")}</time>
                                                <h4 className="title usmall">
                                                    <Link href={`/tuyen-dung/${job?.friendlyUrl}`}>
                                                        {job?.title}
                                                    </Link>
                                                </h4>
                                            </div>

                                            <div className="clear"></div>
                                        </article>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
