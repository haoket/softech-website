import React from 'react';
import Navbar from '@/components/_App/Navbar';
import Footer from '@/components/_App/Footer';
import * as Icon from 'react-feather';

const BlogDetails = () => {
  return (
    <>
      <div className='blog-details-area ptb-80'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 col-md-12'>
              <div className='blog-details-desc'>
                <div className='article-image'>
                  <img src='https://softech.vn/content/company/images/thuongmaidientu/PC.jpg' alt='image' />
                </div>
                <div className='article-content'>
                  <div className='about-area ptb-80'>
                    <div className='container'>
                      <div className='row align-items-center'>
                        <div className='col-lg-6 col-md-12'>
                          <div className='about-image'>
                            <img src='/images/about-one.png' alt='image' />
                          </div>
                        </div>

                        <div className='col-lg-6 col-md-12'>
                          <div className='about-content'>
                            <div className='section-title'>
                              <h2>TỔNG QUAN HỆ THỐNG THƯƠNG MẠI ĐIỆN TỬ - SOFTECH</h2>
                              <div className='bar'></div>
                            </div>
                            <ul>
                            <li>Một nền tảng thương mại điện tử an toàn, có thể mở rộng.</li>
                            <li> Các công cụ quản trị để quản lý tiền mặt cửa hàng, khách hàng, danh sách mong muốn, giảm giá và phiếu giảm giá.</li>
                            <li> Hỗ trợ đa cửa hàng, đa nhà cung cấp, đa kho, đa ngôn ngữ, đa tiền tệ và đa thuế</li>
                            <li> Hỗ trợ cho các cổng phổ biến nhất: Paypal, Google Checkout, v.v.</li>
                            <li> Thiết kế linh hoạt đáp ứng cho các thiết bị di động.</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className='features-area pt-80 pb-50'>
                        <div className='container'>
                          <div className='section-title'>
                            <h2>Tính năng sản phẩm</h2>
                            <div className='bar'></div>
                          </div>

                          <div className='row'>
                            <div className='col-lg-6 col-md-6'>
                              <div className='row'>
                                <div className='col-lg-12 col-md-12'>
                                  <div className='single-features'>
                                    <div className='icon'>
                                      <Icon.Settings />
                                    </div>
                                    <h3>Thuộc tính -Product:</h3>
                                    <p className='text-black'>Tạo nhiều thuộc tính cho sản phẩm của bạn khi bạn cần, chẳng hạn như kích thước và màu sắc - mỗi thuộc tính có SKU, giá, trọng lượng, hình ảnh và mức độ cổ phiếu riêng của mình.</p>
                                  </div>
                                </div>
                                <div className='col-lg-12 col-md-12'>
                                  <div className='single-features'>
                                    <div className='icon'>
                                      <Icon.Mail />
                                    </div>
                                    <h3>Quản lý kho:</h3>
                                    <p className='text-black'>
                                      Quản lý khoảng không quảng cáo cho phép chủ sở hữu cửa hàng phân biệt cổ phiếu vật lý và số lượng có sẵn. Bạn có thể dễ dàng quản lý tình trạng đặt hàng và đặt hàng trước cho mỗi sản phẩm. Nhiều kho,
                                      giao hàng một phần, quản lý chứng khoán theo thuộc tính sản phẩm (như màu sắc và kích thước) được hỗ trợ.
                                    </p>
                                  </div>
                                </div>
                                <div className='col-lg-12 col-md-12'>
                                  <div className='single-features'>
                                    <div className='icon bg-c679e3'>
                                      <Icon.Grid />
                                    </div>
                                    <h3>Giá:</h3>
                                    <p className='text-black'>
                                      Công cụ giá vượt quá mức tạo thẻ đơn giản. Chủ cửa hàng có thể đặt các mức giá khác nhau cho các nhóm khách hàng khác nhau của họ, ẩn giá cho các mặt hàng có giá trị và khiến khách hàng liên hệ với nhóm
                                      bán hàng bằng cách bật "gọi cho giá".
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className='col-lg-6 col-md-6'>
                              <div className='single-features'>
                                <div className='icon bg-eb6b3d'>
                                  <Icon.Box />
                                </div>
                                <h3>Có nhiều tính năng sản phẩm khác, chẳng hạn như:</h3>
                                <ul style={{ lineHeight: '35px' }}>
                                <li> Sản phẩm cho thuê</li>
                                <li>Sản phẩm định kỳ</li>
                                <li>Thẻ sản phẩm</li>
                                <li>Quản lý trở lại</li>
                                <li>Nhiều hình ảnh cho mỗi sản phẩm</li>
                                <li>Sản phẩm đặc trưng, sản phẩm bán hoặc sản phẩm mới</li>
                                <li>Gói (ví dụ: Xây dựng máy tính của riêng bạn) và các sản phẩm được nhóm</li>
                                <li>Thuộc tính sản phẩm có điều kiện</li>
                                <li>Đặc điểm sản phẩm (ví dụ: bộ xử lý, bộ nhớ, card đồ họa)</li>
                                <li>Bảo vệ. ACL (danh sách kiểm soát truy cập) trên sản phẩm, danh mục và nhà sản xuất</li>
                                <li>Trọng lượng và kích thước đo có thể định cấu hình</li>
                                <li>Nhập khẩu và xuất khẩu</li>
                                <li>Chỉnh sửa hàng loạt, v.v.</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='row align-items-center'>
                      <div className='col-lg-6 col-md-12'>
                        <div className='ml-about-img'>
                          <img src='/images/about4.png' alt='image' />
                        </div>
                      </div>

                      <div className='col-lg-6 col-md-12'>
                        <div className='ml-about-content'>
                          <h2>Tính năng đa dạng</h2>
                          <div className='bar'></div>
                          <ul>
                          <li>Danh mục và nhà sản xuất trên mỗi cửa hàng</li>
                          <li>Sản phẩm cho mỗi cửa hàng</li>
                          <li>Nội dung (tin tức, blog, bài viết) trên mỗi cửa hàng</li>
                          <li>Thanh toán cho mỗi cửa hàng</li>
                          <li>Phương thức giao hàng cho mỗi cửa hàng</li>
                          <li>Quy tắc thuế cho mỗi cửa hàng</li>
                          <li>Giá sản phẩm cho mỗi cửa hàng</li>
                          <li>Bản tin cho mỗi cửa hàng</li>
                          <li>Chủ đề đồ họa cho mỗi cửa hàng</li>
                          <li>Đặt hàng lọc và báo cáo cho mỗi cửa hàng</li>
                          <li>Hầu như mỗi cài đặt cấu hình có thể được đặt cho mỗi cửa hàng</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='section-title'>
                <h2>THANH TOÁN, TÍNH NĂNG GIAO HÀNG</h2>
                <div className='bar'></div>
              </div>

              <div className='row'>
                <div className='col-lg-6 col-md-6'>
                  <div className='single-features'>
                    <div className='icon'>
                      <Icon.Settings />
                    </div>
                    <h3>Hơn 50 phương thức thanh toán và cổng</h3>
                    <ul>
                    <li>Tất cả các thẻ tín dụng và thẻ ghi nợ chính</li>
                    <li>Tiền mặt khi giao hàng hoặc Thanh toán tại cửa hàng</li>
                    <li>Đặt mua, Kiểm tra / lệnh chuyển tiền</li>
                    <li>Paypal, Authorize.NET, Stripe, v.v.</li>
                    </ul>
                  </div>
                </div>

                <div className='col-lg-6 col-md-6'>
                  <div className='single-features'>
                    <div className='icon'>
                      <Icon.Mail />
                    </div>
                    <h3>Hỗ trợ các yêu cầu và cài đặt giao hàng khác nhau:</h3>
                    <ul>
                    <li>Tính toán: hỗ trợ các cơ chế tính toán linh hoạt</li>
                    <li> Địa chỉ: cho phép khách hàng cung cấp hai địa chỉ để thanh toán và giao hàng</li>
                    <li>Ước tính phí vận chuyển: giúp khách hàng ước tính chi phí vận chuyển</li>
                    <li>Điểm Pickup: Cho phép chủ cửa hàng định cấu hình các vị trí đón</li>
                    <li>Phiếu đóng gói: Nhiều lô hàng cho mỗi đơn đặt hàng và số theo dõi được hỗ trợ. Khách hàng có thể dễ dàng theo dõi các chuyến hàng của họ ngay bây giờ.</li>
                    <li>Phương thức giao hàng: Có thể xác định phương thức giao hàng tùy chỉnh (ví dụ: Mặt đất, Ngày tiếp theo, Ngày thứ 2, v.v ...) hoặc sử dụng các hãng vận chuyển phổ biến (ví dụ: UPS, USPS, FedEx, v.v.).</li>
                    </ul>
                  </div>
                </div>

                <div className='section-title'>
                  <h2>CÁC TÍNH NĂNG KHÁC</h2>
                  <div className='bar'></div>
                </div>

                <div className='col-lg-12 col-md-12'>
                  <div className='single-features'>
                    <h3>SEO:</h3>
                    <p>
                      Tối ưu hóa công cụ tìm kiếm là quá trình tăng khả năng hiển thị của trang web trong kết quả tìm kiếm. Công cụ tối ưu hóa công cụ tìm kiếm của chúng tôi giúp bạn có được thứ hạng tìm kiếm cao hơn, có nghĩa là lưu lượng
                      truy cập không phải trả tiền nhiều hơn đến cửa hàng của bạn.
                    </p>
                    <h3>Tiếp thị:</h3>
                    <p>
                      Nó có nhiều tính năng cho chiến dịch tiếp thị: Hệ thống điểm thưởng, Sản phẩm liên quan, Giảm giá và phiếu giảm giá, Đăng ký bản tin, Thẻ quà tặng, Đánh giá sản phẩm và xếp hạng, Chương trình liên kết, Tiện ích bổ sung
                      (Facebook, SMS)
                    </p>
                    <h3>Dịch vụ khách hàng:</h3>
                    <p>Tích hợp trò chuyện trực tiếp, Thứ tự tùy chỉnh</p>

                    <h3>Thương mại điện thoại di động:</h3>
                    <p>
                      Webstore đáp ứng di động là điều bắt buộc đối với bất kỳ chủ doanh nghiệp trực tuyến nào trong những ngày này, vì 82% người dùng điện thoại thông minh đưa ra quyết định mua khi lướt Internet trên điện thoại thông minh
                      của họ. Nó hỗ trợ một phiên bản di động của trang web của bạn với một cửa hàng hấp dẫn, giàu tính năng và đồ họa làm hài lòng và có nghĩa là cho các nhà bán lẻ ngay lập tức cung cấp các ưu đãi, khuyến mãi và sản phẩm
                      có liên quan. Phiên bản đáp ứng trên thiết bị di động hoạt động trên bất kỳ thiết bị được kết nối nào mà không yêu cầu phát triển hoặc bổ sung thêm. Nó là miễn phí và có sẵn ra khỏi hộp.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
