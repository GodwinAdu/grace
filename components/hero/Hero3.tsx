"use client"
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { buttonVariants } from '../ui/button';
import StreamingModal from './StreamingModal';

// Install modules


const Hero: React.FC = () => {
    return (
        <section className="bg-transparent py-12 mt-10">
            <div className="container mx-auto flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 text-center md:text-left md:pr-8">
                    <h1 className="text-4xl font-bold mb-4 text-center"> Welcome to Altar of Grace Pentecostal Ministry</h1>
                    <p className="text-lg mb-6 text-start leading-7 "> At Altar of Grace Ministry, we believe in spreading the love and grace of God to all.
                        Our mission is to create a welcoming and nurturing community where everyone can experience
                        God&apos;s presence, grow in faith, and find purpose in life.</p>
                    <div className="flex items-center justify-center text-center">
                        <StreamingModal />
                    </div>
                </div>
                <div className="md:w-1/2">
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                        spaceBetween={50}
                        slidesPerView={1}
                        autoplay
                        loop
                        navigation
                        pagination={{ clickable: true }}
                        // scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                        <SwiperSlide>
                            <div className="relative">
                                <img src="https://via.placeholder.com/600x400" alt="Slide 1" className="rounded shadow-md" />
                                <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-4 rounded-b">
                                    <p>Image Description 1</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="relative">
                                <img src="https://via.placeholder.com/600x400" alt="Slide 2" className="rounded shadow-md" />
                                <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-4 rounded-b">
                                    <p>Image Description 2</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="relative">
                                <img src="https://via.placeholder.com/600x400" alt="Slide 3" className="rounded shadow-md" />
                                <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-4 rounded-b">
                                    <p>Image Description 3</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Hero;
