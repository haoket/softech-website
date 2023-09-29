import React from 'react';
import Navbar from '@/components/_App/Navbar';
import * as Icon from 'react-feather';
import PageBanner from '@/components/Banner/PageBanner';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion';
import ContactForm from '@/components/Form/ContactForm';

const About1 = () => {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle='GIỚI THIỆU CÔNG TY' />

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
                  <h2>VỀ SOFTECH</h2>
                  <div className='bar'></div>
                  <p>Công ty cổ phần Softech, tiền thân là Trung tâm Công nghệ Phần mềm Đà Nẵng, được thành lập ngày 08/11/2000..</p>
                </div>

                <p>
                  Trải qua hơn 15 năm hoạt động, Công ty cổ phần Softech đã trở thành đơn vị tiên phong trong lĩnh vực sản xuất, gia công phần mềm, đào tạo và phát triển nguồn nhân lực, cung cấp các giải pháp và dịch vụ công nghệ thông tin
                  ở khu vực miền Trung và cả nước.
                </p>

                <p>
                  Với lợi thế về địa lý như nằm trong vùng kinh tế trọng điểm miền Trung - cửa ngõ quan trọng của Đông Nam Á nối các nước Lào, Campuchia, Thái Lan và Myanma với các nước Đông Bắc Á thông qua hành lang kinh tế Đông Tây,
                  Softech thực sự có nhiều thuận lợi trong việc phát triển và hợp tác với các nhà đầu tư trong và ngoài nước.
                </p>
              </div>
            </div>
          </div>

          <div className='about-inner-area'>
            <div className='row justify-content-center'>
              <div className='col-lg-4 col-md-6 col-sm-6'>
                <div className='about-text'>
                  <h3>Các lĩnh vực hoạt động</h3>
                  <p>Đào tạo và phát triển nguồn nhân lực CNTT Tổ chức hợp tác sản xuất và gia công sản phẩm phần mềm Thực hiện các liên kết trong nước và quốc tế trong lĩnh vực CNTT Thực hiện tích hợp các hệ thống về CNTT</p>
                </div>
              </div>

              <div className='col-lg-4 col-md-6 col-sm-6'>
                <div className='about-text'>
                  <h3>Tầm nhìn - Sứ mệnh</h3>
                  <p>Xây dựng Softech thành một trong những công ty phần mềm hàng đầu tại Việt Nam. Đảm bảo đời sống của người lao động, xây dựng môi trường làm việc thân thiện và phát huy tối đa năng lực của từng nhân viên. </p>
                  <p>
                    Tối đa hóa lợi nhuận trên cơ sở sử dụng một cách hợp lý nguồn tài nguyên của công ty nhằm đem lại lợi ích tối đa cho các nhà đầu tư. Softech là hạt nhân thúc đẩy sự phát triển nền công nghiệp phần mềm của Đà Nẵng và khu
                    vực miền Trung.
                  </p>
                </div>
              </div>

              <div className='col-lg-4 col-md-6 col-sm-6'>
                <div className='about-text'>
                  <h3>Sản phẩm và dịch vụ</h3>
                  <p>Dịch vụ đào tạo với chất lượng tốt nhất, theo chuẩn quốc tế, giáo trình tiếng Anh và luôn hướng vào ngành công nghiệp để tạo ra việc làm tốt nhất cho học viên. </p>
                  <p>Softech cung cấp những phần mềm, hệ thống mang tính chiến lược cao phù hợp với lộ trình phát triển các cơ quan chính phủ và doanh nghiệp.</p>
                  <p>Với nền tảng kinh nghiệm gia công cho thị trường Nhật và Mỹ sẽ giúp Softech dễ dàng tiếp cận thêm các thị trường mới Cung ứng dịch vụ CNTT, bảo trì và hỗ trợ kỹ thuật chuyên nghiệp.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const PartnerStyleTwo = () => {
  return (
    <>
      <div className='repair-partner-area bg-f9fafb '>
        <div className='container'>
          <Swiper
            spaceBetween={30}
            autoplay={{
              delay: 6000,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              576: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 5,
              },
              1200: {
                slidesPerView: 6,
              },
            }}
            modules={[Autoplay]}
            className='repair-partner-slides'
          >
            <SwiperSlide>
              <div className='single-repair-partner'>
                <a href='#' target='_blank'>
                  <img src='/images/partner-img/partner-1.png' alt='image' />
                  <img src='/images/partner-img/partner-hover1.png' alt='image' />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='single-repair-partner'>
                <a href='#' target='_blank'>
                  <img src='/images/partner-img/partner-2.png' alt='image' />
                  <img src='/images/partner-img/partner-hover2.png' alt='image' />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='single-repair-partner'>
                <a href='#' target='_blank'>
                  <img src='/images/partner-img/partner-3.png' alt='image' />
                  <img src='/images/partner-img/partner-hover3.png' alt='image' />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='single-repair-partner'>
                <a href='#' target='_blank'>
                  <img src='/images/partner-img/partner-10.png' alt='image' />
                  <img src='/images/partner-img/partner-hover10.png' alt='image' />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='single-repair-partner'>
                <a href='#' target='_blank'>
                  <img src='/images/partner-img/partner-5.png' alt='image' />
                  <img src='/images/partner-img/partner-hover5.png' alt='image' />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='single-repair-partner'>
                <a href='#' target='_blank'>
                  <img src='/images/partner-img/partner-6.png' alt='image' />
                  <img src='/images/partner-img/partner-hover6.png' alt='image' />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='single-repair-partner'>
                <a href='#' target='_blank'>
                  <img src='/images/partner-img/partner-7.png' alt='image' />
                  <img src='/images/partner-img/partner-hover7.png' alt='image' />
                </a>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

const DetailIntrodue = () => {
  return (
    <>
      <div className='features-details-area ptb-80'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-6 features-details-image'>
              <img src='/images/features-details-image/feature1.png' className='animate__animated animate__fadeInUp' alt='image' />
            </div>

            <div className='col-lg-6 features-details'>
              <div className='features-details-desc'>
                <h3>LỊCH SỬ HÌNH THÀNH</h3>

                <ul className='features-details-list'>
                  <li>Năm 2018: Hệ thống Anh ngữ AMES ENGLISH đã có 23 trung tâm trên cả nước</li>
                  <li>Tháng 11/2011 thành lập chi nhánh Trung tâm đào tạo Ngoại ngữ AMES ENGLISH tại Hà Nội</li>
                  <li>Tháng 7 năm 2011 thành lập chi nhánh tại thành phố Hồ Chí Minh và Hà Nội</li>
                  <li>Tháng 04 năm 2011 đổi tên Công ty cổ phần công nghệ phần mềm Đà Nẵng thành Công ty cổ phần Softech</li>
                  <li>Tháng 8 năm 2008 thành lập Trung tâm đào tạo Mỹ thuật đa phương tiện Softech Arena</li>
                  <li>Tháng 02 năm 2008 nhận đơn hàng đầu tiên gia công phần mềm với thị trường Mỹ</li>
                  <li>Tháng 12 năm 2007, cổ phần hóa Công ty cổ phần công nghệ phần mềm Đà Nẵng trên nền tảng Trung tâm công nghệ phần mềm Đà Nẵng</li>
                  <li>Tháng 8 năm 2007 đạt chứng nhận hệ thống quản lý chất lượng qui trình phát triển phần mềm CMMi – Mức 3</li>
                  <li>Tháng 5 năm 2006 nhận đơn hàng đầu tiên về gia công phần mềm với thị trường Nhật Bản</li>
                  <li>Tháng 11 năm 2005 đón nhận huy chương lao động hạng 3 do Chủ tịch nước trao tặng</li>
                  <li>Năm 2003 đón nhận chứng nhận hệ thống quản lý chất lượng theo tiêu chuẩn ISO 9001:2008</li>
                  <li>2001 ra mắt Trung tâm Đào tạo lập trình viên quốc tế và Trung tâm Đào tạo Anh ngữ</li>
                  <li>Ngày 08 tháng 11 năm 2000, UBND thành phố Đà Nẵng ký quyết định thành lập Trung tâm công nghệ phần mềm Đà Nẵng – Tiền thân của Softech ngày nay.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className='separate'></div>
        </div>
      </div>
      <div className='services-details-area'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-6 services-details'>
              <div className='services-details-desc'>
                <h3>BAN LÃNH ĐẠO</h3>
                <h6>HỘI ĐỒNG QUẢN TRỊ:</h6>
                <ol>
                  <li>Bà Hà Ngọc Anh - Chủ tịch HĐQT</li>
                  <p>
                    Trình độ chuyên môn: Tốt nghiệp Đại học Luật Hà Nội chuyên ngành Luật Quốc tế năm 1995. Năm 2003: Thạc sĩ Chính sách quốc tế Đại học UBC - Canada. Năm 2015: BMA Đại học Hawaii - Hoa Kỳ
                    <br />
                    Kinh nghiệm công tác: Có 20 năm kinh nghiệm xúc tiến thương mại Mỹ-Việt Nam
                  </p>

                  <li>Ông Nguyễn Mạnh Hào - Thành viên HĐQT -Tổng giám đốc</li>
                  <p>
                    Trình độ chuyên môn: Tốt nghiệp Đại học Kinh tế Quốc dân – Hà Nội chuyên ngành Tài chính - Ngân hàng năm 1995. Năm 2003: Thạc sĩkhoa học về quản trị kinh doanh - chuyên ngành tài chính tại Đại học UBC Canada. <br />
                    Kinh nghiệm công tác: Có 20 năm kinh nghiệm trong các lĩnh vực IT, giáo dục.
                  </p>

                  <li>Ngô Thanh Tùng: Thành viên HĐQT</li>
                  <p>
                    Trình độ chuyên môn: Cử nhân Công nghệ thông tin.
                    <br />
                    Kinh nghiệm công tác: Có trên 15 năm kinh nghiệm trong lĩnh vực CNTT và truyền thông.
                  </p>
                </ol>
                <h6>HỘI ĐỒNG QUẢN TRỊ:</h6>
                <ol>
                  <li>Ông Nguyễn Mạnh Hào - Thành viên HĐQT -Tổng giám đốc</li>
                  <p>
                    Trình độ chuyên môn: Tốt nghiệp Đại học Kinh tế Quốc dân – Hà Nội chuyên ngành Tài chính - Ngân hàng năm 1995. Năm 2003: Thạc sĩkhoa học về quản trị kinh doanh - chuyên ngành tài chính tại Đại học UBC Canada.
                    <br />
                    Kinh nghiệm công tác: Có 20 năm kinh nghiệm trong các lĩnh vực IT, giáo dục.
                  </p>
                  <li>Ông Ngô Thanh Tùng: Phó Tổng Giám đốc thường trực</li>
                  <p>
                    Trình độ chuyên môn: Cử nhân Công nghệ thông tin. <br />
                    Kinh nghiệm công tác: Có trên 15 năm kinh nghiệm trong lĩnh vực CNTT và truyền thông
                  </p>
                  <li>Bà Lê Mai Hương: Kế toán trưởng</li>
                  <p>
                    Trình độ chuyên môn: Cử nhân Kinh tế chuyên ngành Tài chính kế toán <br />
                    Kinh nghiệm công tác: Có 15 năm kinh nghiệm làm việc trong lĩnh vực tài chính kế toán và có 7 kinh nghiệm làm kế toán trưởng.
                  </p>
                </ol>

                <p></p>

                <p></p>
              </div>
            </div>

            <div className='col-lg-6 services-details-image'>
              {/* <img src='/images/services-details-image/services-details1.png' className='animate__animated animate__fadeInUp' alt='image' /> */}
              <div className="why-choose-us-image">
                <img
                  src="/images/why-choose-us-image/man-stand.png"
                  className="animate__animated animate__fadeInLeft"
                  alt="image"
                />

                <img
                  src="/images/why-choose-us-image/database.png"
                  className="animate__animated animate__fadeInRight"
                  alt="image"
                />

                <img
                  src="/images/services-left-image/cercle-shape.png"
                  className="rotateme"
                  alt="image"
                />

                <img
                  src="/images/why-choose-us-image/main-static.png"
                  className="main-pic animate__animated animate__fadeInUp"
                  alt="image"
                />
              </div>
            </div>
          </div>

          <div className='separate'></div>

          <div className='row align-items-center'>
            <div className='col-lg-6 features-details-image'>
              <img src='/images/features-details-image/feature1.png' className='animate__animated animate__fadeInUp' alt='image' />
            </div>

            <div className='col-lg-6 features-details'>
              <div className='features-details-desc'>
                <h3>NHÂN TỐ THÀNH CÔNG</h3>
                <p>
                  Thỏa mãn khách hàng Thông qua hệ thống quản lý chất lượng ISO 9001:2008 và Hệ thống đảm bảo chất lượng quy trình phát triển sản phẩm phần mềm CMMi cấp 3, Softech cam kết đem lại cho khách hàng những sản phẩm – dịch vụ với
                  chất lượng cao nhất, đảm bảo thỏa mãn tất cả những yêu cầu của khách hàng.
                </p>
                <p>
                  Nguồn lực Với tâm niệm nguồn nhân lực là tài sản chiến lược đối với sự phát triển của tổ chức, Softech luôn đầu tư thích đáng cho quá trình phát triển nguồn nhân lực. Hiện nay, Softech sở hữu đội ngũ nhân viên trẻ, năng
                  động, trí tuệ và tràn đầy nhiệt huyết. Bên cạnh đó, Softech còn sở hữu hệ thống cơ sở hạ tầng CNTT và truyền thông hiện đại, được trang bị theo tiêu chuẩn quốc tế với độ ổn định, an toàn cao. Tất cả những yếu tố trên đem
                  lại cho Softech một môi trường hoạt động tối ưu với nhiều lợi thế cạnh tranh.
                </p>
              </div>
            </div>
          </div>

          <div className='separate'></div>

          <div className='row align-items-center'>
            <div className='col-lg-6 services-details'>
              <div className='services-details-desc'>
                <h3>THÀNH TỰU NỔI BẬT</h3>
                <ul>
                  <li>Giải thưởng Sao Khuê do VINASA trao tặng cho giải pháp đào tạo CNTT tiêu biểu & ưu việt năm 2016 (Hệ thống đào tạo Softech Aptech).</li>
                  <li>Giải thưởng Sao Khuê do VINASA trao tặng cho giải pháp đào tạo CNTT tiêu biểu & ưu việt năm 2015 (Hệ thống đào tạo Softech Aptech).</li>
                  <li>Giải thưởng Sao Khuê do VINASA trao tặng cho sản phẩm phần mềm tiêu biểu năm 2012 (Phần mềm Khai báo Hải quan điện tử Softech – ECS).</li>
                  <li>Bằng khen của Chủ tịch UBND thành phố Đà Nẵng vì đã có thành tích xuất sắc tiêu biểu trong lĩnh vực bưu chính viễn thông và Công nghệ thông tin năm 2010 .</li>
                  <li>Huân chương lao động Hạng Ba do Chủ tịch nước trao tặng theo Quyết định số QĐ 433/2006/QĐ-CT ngày 29/3/2006.</li>
                  <li>Bằng khen của Thủ tướng Chính phủ vì đã có nhiều thành tích trong công tác từ năm 2002 dến năm 2004 góp phần vào sự nghiệp xây dựng Chủ nghĩa xã hội và bảo vệ Tổ quốc.</li>
                  <li>Bằng khen của Bộ Bưu chính Viễn thông do đã có thành tích tốt trong xây dựng quy trình quản lý chất lượng phần mềm.</li>
                  <li>Bằng khen của Bộ Bưu chính Viễn thông do đã có thành tích xuất sắc đóng góp cho sự nghiệp phát triển ngành công nghiệp phần mềm Việt Nam giai đoạn từ năm 2002 đến 2005.</li>
                  <li>Bằng khen của Bộ Bưu chính Viễn thông do đã có thành tích xuất sắc trong hoạt động sản xuất, kinh doanh, phát triển công nghiệp phần mềm năm 2005.</li>
                  <li>Bằng khen của Bộ Lao động-Thương binh-Xã hội về Website đào tạo trực tuyến tại Hội thi Thiết bị tay nghề từ làm toàn quốc lần thứ 2 năm 2005.</li>
                  <li>Bằng khen của Hội Tin học Việt Nam do đã có thành tích xuất sắc trong hoạt động chuyên môn và công tác Hội năm 2004.</li>
                  <li>Cờ thi đua xuất sắc của UBND thành phố Đà Nẵng.</li>
                  <li>Bằng khen của Chủ tịch UBND thành phố Đà Nẵng vì có thành tích trong việc bồi dưỡng học sinh tham dự kỳ thi tin học trẻ không chuyên toàn quốc năm 2003, 2004.</li>
                  <li>Bằng khen của Chủ tịch UBND thành phố Đà Nẵng vì đã hoàn thành tốt công tác năm 2002, 2003, 2006.</li>
                  <li>Giải thưởng Sao Khuê do VINASA trao tặng cho doanh nghiệp phần mềm tiêu biểu Việt Nam có tốc độ tăng trưởng tiêu biểu năm 2003, 2005, 2006.</li>
                  <li>Giải thưởng Sao Khuê do VINASA trao tặng cho sản phẩm phần mềm triển vọng năm 2005.</li>
                  <li>Giải thưởng Sao Khuê do VINASA trao tặng cho sản phẩm phần mềm tiêu biểu năm 2006, năm 2007.</li>
                  <li>Huy chương vàng dành cho sản phẩm Website điều hành tại Hội chợ Công nghệ - thiết bị quốc gia năm 2003</li>
                  <li>Cờ lưu niệm “Aptech Việt Nam về chất lượng đào tạo năm 2003”.</li>
                  <li>Cup “Trung tâm xuất sắc nhất năm 2003 của Aptech, Việt Nam”.</li>
                  <li>Cup “Đơn vị đào tạo CNTT hàng đầu” 3 năm liền 2002, 2003, 2004 (Hội Tin học Việt Nam trao tặng cho hệ thống Aptech Việt Nam) (TOP ICT VN 2004 – Aptech Vietnam)</li>
                  <li>Huy chương vàng 2004 cho đơn vị đào tạo Công nghệ thông tin do Hội Tin học thành phố Hồ Chí Minh trao tặng.</li>
                  <li>Huy chương vàng ICT Việt Nam 2006 cho đơn vị đào tạo CNTT.</li>
                  <li>Cup Top ICT VN 2005, 2006.</li>
                  <li>Huy chương vàng về Hoạt động Đào tạo CNTT 2004 do Aptech-Ấn Độ trao tặng tại Hội nghị tổng kết hoạt động 2004 ngày 09/01/2005. (Gold Award ICT – EDU 2004).</li>
                  <li>Kỷ niệm chương Techmart năm 2005, 2007.</li>
                </ul>
              </div>
            </div>
            <div className='col-lg-6 services-details-image'>
              {/* <img src='/images/services-details-image/services-details1.png' className='animate__animated animate__fadeInUp' alt='image' /> */}
                <img
                  src="/images/banner-image/main-pic.png"
                  className="animate__animated animate__fadeInUp animate__delay-0.1"
                  alt="main-pic"
                />
            </div>
          </div>
          <div className='separate'></div>
        </div>
      </div>
    </>
  );
};

const Team = () => {
  return (
    <>
      <div className='team-area ptb-80 bg-f9f6f6'>
        <div className='container'>
          <div className='section-title'>
            <h2>Our Awesome Team</h2>
            <div className='bar'></div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>

        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 6000,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            576: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            },
            1500: {
              slidesPerView: 5,
            },
          }}
          modules={[Pagination, Autoplay]}
          className='team-slider'
        >
          <SwiperSlide>
            <div className='single-team'>
              <div className='team-image'>
                <img src='/images/team-image/team1.jpg' alt='image' />
              </div>

              <div className='team-content'>
                <div className='team-info'>
                  <h3>Josh Buttler</h3>
                  <span>CEO & Founder</span>
                </div>

                <ul>
                  <li>
                    <a href='https://www.facebook.com/' target='_blank'>
                      <Icon.Facebook />
                    </a>
                  </li>
                  <li>
                    <a href='https://www.twitter.com/' target='_blank'>
                      <Icon.Twitter />
                    </a>
                  </li>
                  <li>
                    <a href='https://www.linkedin.com/' target='_blank'>
                      <Icon.Linkedin />
                    </a>
                  </li>
                  <li>
                    <a href='https://www.gitlab.com/' target='_blank'>
                      <Icon.Gitlab />
                    </a>
                  </li>
                </ul>

                <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='single-team'>
              <div className='team-image'>
                <img src='/images/team-image/team2.jpg' alt='image' />
              </div>

              <div className='team-content'>
                <div className='team-info'>
                  <h3>Alex Maxwel</h3>
                  <span>Marketing Manager</span>
                </div>

                <ul>
                  <li>
                    <a href='https://www.facebook.com/' target='_blank'>
                      <Icon.Facebook />
                    </a>
                  </li>
                  <li>
                    <a href='https://www.twitter.com/' target='_blank'>
                      <Icon.Twitter />
                    </a>
                  </li>
                  <li>
                    <a href='https://www.linkedin.com/' target='_blank'>
                      <Icon.Linkedin />
                    </a>
                  </li>
                  <li>
                    <a href='https://www.gitlab.com/' target='_blank'>
                      <Icon.Gitlab />
                    </a>
                  </li>
                </ul>

                <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='single-team'>
              <div className='team-image'>
                <img src='/images/team-image/team3.jpg' alt='image' />
              </div>

              <div className='team-content'>
                <div className='team-info'>
                  <h3>Janny Cotller</h3>
                  <span>Web Developer</span>
                </div>

                <ul>
                  <li>
                    <a href='https://www.facebook.com/' target='_blank'>
                      <Icon.Facebook />
                    </a>
                  </li>
                  <li>
                    <a href='https://www.twitter.com/' target='_blank'>
                      <Icon.Twitter />
                    </a>
                  </li>
                  <li>
                    <a href='https://www.linkedin.com/' target='_blank'>
                      <Icon.Linkedin />
                    </a>
                  </li>
                  <li>
                    <a href='https://www.gitlab.com/' target='_blank'>
                      <Icon.Gitlab />
                    </a>
                  </li>
                </ul>

                <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='single-team'>
              <div className='team-image'>
                <img src='/images/team-image/team4.jpg' alt='image' />
              </div>

              <div className='team-content'>
                <div className='team-info'>
                  <h3>Jason Statham</h3>
                  <span>UX/UI Designer</span>
                </div>

                <ul>
                  <li>
                    <a href='https://www.facebook.com/' target='_blank'>
                      <Icon.Facebook />
                    </a>
                  </li>
                  <li>
                    <a href='https://www.twitter.com/' target='_blank'>
                      <Icon.Twitter />
                    </a>
                  </li>
                  <li>
                    <a href='https://www.linkedin.com/' target='_blank'>
                      <Icon.Linkedin />
                    </a>
                  </li>
                  <li>
                    <a href='https://www.gitlab.com/' target='_blank'>
                      <Icon.Gitlab />
                    </a>
                  </li>
                </ul>

                <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='single-team'>
              <div className='team-image'>
                <img src='/images/team-image/team5.jpg' alt='image' />
              </div>

              <div className='team-content'>
                <div className='team-info'>
                  <h3>Corey Anderson</h3>
                  <span>Project Manager</span>
                </div>

                <ul>
                  <li>
                    <a href='https://www.facebook.com/' target='_blank'>
                      <Icon.Facebook />
                    </a>
                  </li>
                  <li>
                    <a href='https://www.twitter.com/' target='_blank'>
                      <Icon.Twitter />
                    </a>
                  </li>
                  <li>
                    <a href='https://www.linkedin.com/' target='_blank'>
                      <Icon.Linkedin />
                    </a>
                  </li>
                  <li>
                    <a href='https://www.gitlab.com/' target='_blank'>
                      <Icon.Gitlab />
                    </a>
                  </li>
                </ul>

                <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='single-team'>
              <div className='team-image'>
                <img src='/images/team-image/team1.jpg' alt='image' />
              </div>

              <div className='team-content'>
                <div className='team-info'>
                  <h3>Josh Buttler</h3>
                  <span>CEO & Founder</span>
                </div>

                <ul>
                  <li>
                    <a href='https://www.facebook.com/' target='_blank'>
                      <Icon.Facebook />
                    </a>
                  </li>
                  <li>
                    <a href='https://www.twitter.com/' target='_blank'>
                      <Icon.Twitter />
                    </a>
                  </li>
                  <li>
                    <a href='https://www.linkedin.com/' target='_blank'>
                      <Icon.Linkedin />
                    </a>
                  </li>
                  <li>
                    <a href='https://www.gitlab.com/' target='_blank'>
                      <Icon.Gitlab />
                    </a>
                  </li>
                </ul>

                <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='single-team'>
              <div className='team-image'>
                <img src='/images/team-image/team2.jpg' alt='image' />
              </div>

              <div className='team-content'>
                <div className='team-info'>
                  <h3>Alex Maxwel</h3>
                  <span>Marketing Manager</span>
                </div>

                <ul>
                  <li>
                    <a href='https://www.facebook.com/' target='_blank'>
                      <Icon.Facebook />
                    </a>
                  </li>
                  <li>
                    <a href='https://www.twitter.com/' target='_blank'>
                      <Icon.Twitter />
                    </a>
                  </li>
                  <li>
                    <a href='https://www.linkedin.com/' target='_blank'>
                      <Icon.Linkedin />
                    </a>
                  </li>
                  <li>
                    <a href='https://www.gitlab.com/' target='_blank'>
                      <Icon.Gitlab />
                    </a>
                  </li>
                </ul>

                <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='single-team'>
              <div className='team-image'>
                <img src='/images/team-image/team3.jpg' alt='image' />
              </div>

              <div className='team-content'>
                <div className='team-info'>
                  <h3>Janny Cotller</h3>
                  <span>Web Developer</span>
                </div>

                <ul>
                  <li>
                    <a href='https://www.facebook.com/' target='_blank'>
                      <Icon.Facebook />
                    </a>
                  </li>
                  <li>
                    <a href='https://www.twitter.com/' target='_blank'>
                      <Icon.Twitter />
                    </a>
                  </li>
                  <li>
                    <a href='https://www.linkedin.com/' target='_blank'>
                      <Icon.Linkedin />
                    </a>
                  </li>
                  <li>
                    <a href='https://www.gitlab.com/' target='_blank'>
                      <Icon.Gitlab />
                    </a>
                  </li>
                </ul>

                <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='single-team'>
              <div className='team-image'>
                <img src='/images/team-image/team4.jpg' alt='image' />
              </div>

              <div className='team-content'>
                <div className='team-info'>
                  <h3>Jason Statham</h3>
                  <span>UX/UI Designer</span>
                </div>

                <ul>
                  <li>
                    <a href='https://www.facebook.com/' target='_blank'>
                      <Icon.Facebook />
                    </a>
                  </li>
                  <li>
                    <a href='https://www.twitter.com/' target='_blank'>
                      <Icon.Twitter />
                    </a>
                  </li>
                  <li>
                    <a href='https://www.linkedin.com/' target='_blank'>
                      <Icon.Linkedin />
                    </a>
                  </li>
                  <li>
                    <a href='https://www.gitlab.com/' target='_blank'>
                      <Icon.Gitlab />
                    </a>
                  </li>
                </ul>

                <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='single-team'>
              <div className='team-image'>
                <img src='/images/team-image/team5.jpg' alt='image' />
              </div>

              <div className='team-content'>
                <div className='team-info'>
                  <h3>Corey Anderson</h3>
                  <span>Project Manager</span>
                </div>

                <ul>
                  <li>
                    <a href='https://www.facebook.com/' target='_blank'>
                      <Icon.Facebook />
                    </a>
                  </li>
                  <li>
                    <a href='https://www.twitter.com/' target='_blank'>
                      <Icon.Twitter />
                    </a>
                  </li>
                  <li>
                    <a href='https://www.linkedin.com/' target='_blank'>
                      <Icon.Linkedin />
                    </a>
                  </li>
                  <li>
                    <a href='https://www.gitlab.com/' target='_blank'>
                      <Icon.Gitlab />
                    </a>
                  </li>
                </ul>

                <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default function AboutUs() {
  return (
    <>
      <About1 />
      <PartnerStyleTwo />
      <DetailIntrodue />
      <Team />
      <ContactForm />
    </>
  );
}
