import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Link from 'next/link';

const ContactForm = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data : any) => {
        try {
            const response = await axios.post('/api/contact', data);
            console.log(response);
            alert('Your message was successfully send and will back to you soon');
            reset();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div className='contact-area ptb-80'>
                <div className='container'>
                    <div className='section-title'>
                        <h2>MỌI THÔNG TIN CHI TIẾT XIN VUI LÒNG LIÊN HỆ</h2>
                        <div className='bar'></div>
                        <p>Chúng tôi sẽ liên lạc với quý khách sớm nhất thông qua thông tin đăng ký.</p>
                    </div>

                    <div className='row align-items-center'>
                        <div className='col-lg-6 col-md-12'>
                            <img src='/images/contact-img.png' alt='image' />
                        </div>

                        <div className='col-lg-6 col-md-12'>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className='row'>
                                    <div className='col-lg-12 col-md-12'>
                                        <div className='form-group'>
                                            <input type='text' placeholder='Your Name' className='form-control' {...register('name', { required: true })} />
                                        </div>
                                    </div>

                                    <div className='col-lg-12 col-md-12'>
                                        <div className='form-group'>
                                            <input type='text' placeholder='Your email address' className='form-control' {...register('email', { required: true, pattern: /^\S+@\S+$/i })} />
                                        </div>
                                    </div>

                                    <div className='col-lg-6 col-md-6'>
                                        <div className='form-group'>
                                            <input type='text' placeholder='Your phone number' className='form-control' {...register('number', { required: true, pattern: /^[0-9]+$/i })} />
                                        </div>
                                    </div>

                                    <div className='col-lg-6 col-md-6'>
                                        <div className='form-group'>
                                            <input type='text' placeholder='Your Subject' className='form-control' {...register('subject', { required: true })} />
                                        </div>
                                    </div>

                                    <div className='col-lg-12 col-md-12'>
                                        <div className='form-group'>
                                            <textarea cols={30} rows={5} placeholder='Write your message...' className='form-control' {...register('text', { required: true })} />
                                        </div>

                                        <div className='form-check'>
                                            <input className='form-check-input' type='checkbox' value='' id='flexCheckDefault' {...register('terms', { required: true })} />
                                            <label className='form-check-label' htmlFor='flexCheckDefault'>
                                                By checking this, you agree to our <Link href='/term-condition'>Terms</Link> and <Link href='/privacy-policy'>Privacy policy</Link>.
                                            </label>
                                        </div>
                                    </div>

                                    <div className='col-lg-12 col-sm-12'>
                                        <button type='submit' className='btn btn-primary'>
                                            Send Message                    
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactForm;