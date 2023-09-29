import PageBanner from '@/components/Banner/PageBanner';
import ContactForm from '@/components/Form/ContactForm';
import CATEGORIES from '@/constants/CATEGORIES';
import { renderHTML } from '@/libraries/render';
import { getPostsByCategories } from '@/services/getPosts';
import moment from 'moment';
import Link from 'next/link';
import { useState } from 'react';
import * as Icon from 'react-feather';

export async function getServerSideProps({ params }: Props) {
  switch (params.friendlyUrl) {
    case 'phat-trien-phan-mem':
      const WEB = await getPostsByCategories(CATEGORIES.WEB.toString());
      const QTDN = await getPostsByCategories(CATEGORIES.QTDN.toString());
      const CPDT = await getPostsByCategories(CATEGORIES.CPDT.toString());
      const THHT = await getPostsByCategories(CATEGORIES.THHT.toString());
      return {
        props: {
          data: [WEB?.[0], QTDN?.[0], CPDT?.[0], THHT?.[0]],
          titlePage: 'Phát triển phần mềm',
        },
      };
    case 'dao-tao-nguon-nhan-luc':
      const GIT = await getPostsByCategories(CATEGORIES.GIT.toString());
      const MDPT = await getPostsByCategories(CATEGORIES.MDPT.toString());
      const MIT = await getPostsByCategories(CATEGORIES.MIT.toString());
      const DTNN = await getPostsByCategories(CATEGORIES.DTNN.toString());
      const DTYC = await getPostsByCategories(CATEGORIES.DTYC.toString());
      return {
        props: {
          data: [GIT?.[0], MDPT?.[0], MIT?.[0], DTNN?.[0], DTYC?.[0]],
          titlePage: 'Đào tạo nguồn nhân lực',
        },
      };
    case 'gia-cong-phan-mem':
      const GCPM = await getPostsByCategories(CATEGORIES.GCPM.toString());
      return {
        props: {
          data: GCPM?.[0],
          titlePage: 'Gia công phần mềm',
        },
      };
    case 'nang-luc-va-chuyen-mon':
      const NLCM = await getPostsByCategories(CATEGORIES.NLCM.toString());
      return {
        props: {
          data: NLCM?.[0],
          titlePage: 'Năng lực & chuyên môn',
        },
      };
    case 'dam-bao-chat-luong':
      const DBCL = await getPostsByCategories(CATEGORIES.DBCL.toString());
      return {
        props: {
          data: DBCL?.[0],
          titlePage: 'Đảm bảo chất lượng',
        },
      };
    default:
      return {
        props: {
          data: [],
          titlePage: [],
        },
      };
  }
}

interface ServiceDetail {
    id?: number;
    title?: string;
    body?: string;
    createdDate?: string;
    friendlyUrl?: string;
}
type Props = {
  data: any[];
  params: any;
  titlePage: any;
};
export default function Index({ data, titlePage }: Props) {
  console.log(data);
  const [selectedLink, setSelectedLink] = useState(Array.isArray(data) ? data[0]?.friendlyUrl : (data as ServiceDetail)?.friendlyUrl);
  console.log(selectedLink);
  
  return (
    <>
      <PageBanner pageTitle={titlePage} />
      <div className='blog-details-area pt-80'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8 col-md-12'>
              {Array.isArray(data)
                ? data?.map(
                    (item) =>
                      selectedLink === item?.friendlyUrl && (
                        <div className='blog-details-desc' key={item?.id}>
                          <h3>{item?.title}</h3>
                          <div className='article-content'>
                            <div className='entry-meta'>
                              <ul>
                                <li>
                                  <Icon.Clock /> {moment(item?.createdDate).format('dddd, DD-MM-YYYY')}
                                </li>
                              </ul>
                            </div>
                            {renderHTML(item?.body)}
                          </div>
                        </div>
                      ),
                  )
                : selectedLink === (data as ServiceDetail)?.friendlyUrl && (
                    <div className='blog-details-desc' key={(data as ServiceDetail)?.id}>
                      <h3>{(data as ServiceDetail)?.title}</h3>
                      <div className='article-content'>
                        <div className='entry-meta'>
                          <ul>
                            <li>
                              <Icon.Clock /> {moment((data as ServiceDetail)?.createdDate).format('dddd, DD-MM-YYYY')}
                            </li>
                          </ul>
                        </div>
                        {renderHTML((data as ServiceDetail)?.body)}
                      </div>
                    </div>
                  )}
            </div>

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
                  <h3 className='widget-title'>{titlePage}</h3>
                  {Array.isArray(data) ? (
                    data?.map((item) => (
                      <>
                        <article className='item' key={item.id}>
                          <div className='info'>
                            <h4 className='title usmall'>
                              <Link href='#' className={selectedLink === item?.friendlyUrl ? 'active' : ''} onClick={() => setSelectedLink(item?.friendlyUrl)}>
                                {item?.title}
                              </Link>
                            </h4>
                            <div className='clear'></div>
                          </div>
                        </article>
                      </>
                    ))
                  ) : (
                    <>
                      <article className='item'>
                        <div className='info'>
                          <h4 className='title usmall'>
                            <Link href='#' className={selectedLink === (data as ServiceDetail)?.friendlyUrl ? 'active' : ''} onClick={() => setSelectedLink((data as ServiceDetail)?.friendlyUrl)}>
                              {(data as ServiceDetail)?.title}
                            </Link>
                          </h4>
                          <div className='clear'></div>
                        </div>
                      </article>
                    </>
                  )}
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
