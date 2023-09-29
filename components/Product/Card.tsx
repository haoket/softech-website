import React from 'react'
import Link from 'next/link';
import * as Icon from 'react-feather';
type Props = {
    title: string,
    price?: any,
    description?: string,
    image?: string,
}

const Card = ({
    title,
    price,
    description,
    image,
}: Props) => {

    return (
        // <div className="col-lg-4 col-md-6">
        //     <div className="single-blog-post">
        //         <div className="blog-image">

        //             <Link href="/blog-details">
        //                 <img src="/images/blog-image/blog2.jpg" alt="image" />
        //             </Link>
        //             <div className="date" >
        //                 <Icon.DollarSign /> {price == null ? 'Liên hệ' : price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
        //             </div>
        //         </div>

        //         <div className="blog-post-content" >
        //             <h3>
        //                 <Link href="/blog-details">
        //                     {title}
        //                 </Link>
        //             </h3>

        //             <p >{description}</p>

        //             <Link href="/blog-details" className="read-more-btn" >
        //                 Xem chi tiết <Icon.ArrowRight />
        //             </Link>
        //         </div>
        //     </div>
        // </div>

        <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="single-services-box-item">
                <div className="icon">
                    <img src="/images/bigdata-analytics/icon1.png" alt="image" />
                </div>

                <h3>
                    <Link href="/service-details">
                        {title}
                    </Link>
                </h3>
                <p>{description}</p>

                {/* <div className="date" >
                    <Icon.DollarSign /> {price == null ? 'Liên hệ' : price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                </div> */}

                <Link href="/service-details" className="learn-more-btn">
                    <Icon.ArrowRight /> Xem thêm
                </Link>

                <div className="shape">
                    <img src="/images/bigdata-analytics/rectangle.png" alt="image" />
                </div>
            </div>
        </div>
    )
}

export default Card