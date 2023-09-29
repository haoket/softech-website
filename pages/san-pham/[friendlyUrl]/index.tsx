import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { renderHTML } from '@/libraries/render';
import PageBanner from '@/components/Banner/PageBanner';
import ContactForm from '@/components/Form/ContactForm';
import { getPostsByCategories, getPostsByFriendlyUrl } from '@/services/getPosts';

export async function getStaticProps({ params }: Props) {
  const res: any = await getPostsByFriendlyUrl(params?.friendlyUrl);
  const data: any = await getPostsByCategories(res?.[0]?.categoryID.toString());
  return {
    props: {
      data: data,
    },
  };
}

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};
type Props = {
  data?: any[];
  params: any;
};

const ProductsDetailsTabs = ({ data }: Props) => {
  return (
    <>
      <PageBanner pageTitle={data?.[5]?.title} />
      <div className='shop-details-area'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-12 col-md-12'>
              <div className='products-details-tabs pb-5'>
                <Tabs>
                  <TabList>
                    <Tab>Thông tin</Tab>
                    <Tab>Chức năng</Tab>
                    <Tab>Báo giá</Tab>
                    <Tab>Hỗ trợ khách hàng</Tab>
                    <Tab>Khách hàng tiêu biểu</Tab>
                    <Tab>FAQ</Tab>
                  </TabList>

                  <TabPanel>
                    <div className='additional-information'>{renderHTML(data?.[5]?.body)}</div>
                  </TabPanel>
                  <TabPanel>
                    <div className='additional-information'>{renderHTML(data?.[4]?.body)}</div>
                  </TabPanel>
                  <TabPanel>
                    <div className='additional-information'>{renderHTML(data?.[3]?.body)}</div>
                  </TabPanel>
                  <TabPanel>
                    <div className='additional-information'>{renderHTML(data?.[2]?.body)}</div>
                  </TabPanel>
                  <TabPanel>
                    <div className='additional-information'>{renderHTML(data?.[1]?.body)}</div>
                  </TabPanel>
                  <TabPanel>
                    <div className='additional-information'>
                      {renderHTML(data?.[0]?.body)}
                    </div>
                  </TabPanel>
                </Tabs>
                {/* ContactForm */}
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsDetailsTabs;
