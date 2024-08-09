"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { Autoplay, EffectFade } from 'swiper/modules';
const images = [
    { src: '/assets/blogs/holy-spirit.jpg', alt: 'Large Image 1', type: 'large' },
    { src: '/assets/blogs/god-love.jpg', alt: 'Large Image 2', type: 'large' },
    { src: '/images/large3.jpg', alt: 'Large Image 3', type: 'large' },
    { src: '/1.jpeg', alt: 'Small Image 1', type: 'small' },
    { src: '/2.jpeg', alt: 'Small Image 2', type: 'small' },
    { src: '/3.jpeg', alt: 'Small Image 3', type: 'small' },
    //   { src: '/4.jpeg', alt: 'Small Image 4', type: 'small' },
];

const HeroBanner: React.FC = () => {
    const largeImages = images.filter(image => image.type === 'large');
    const smallImages = images.filter(image => image.type === 'small');

    return (
        <div className="w-full h-screen bg-gray-800 flex items-center justify-center">
            <div className="grid grid-cols-6 gap-4 w-full h-full p-8">
                {/* Static Small Images */}


                {/* Large Image Slider */}
                <div className="col-span-4 row-span-6 rounded-lg overflow-hidden shadow-lg">
                    <Swiper
                        spaceBetween={30}
                        speed={3000}
                        autoplay={{ delay: 6000, disableOnInteraction: false }}
                        effect={"fade"}
                        fadeEffect={{ crossFade: true }}
                        modules={[Autoplay, EffectFade]}
                    >
                        {largeImages.map((image, index) => (
                            <SwiperSlide key={index}>
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                {smallImages.map((image, index) => (
                    <div className="col-span-2 w-full h-full">
                        <div
                            key={index}
                            className="bg-cover bg-center rounded-lg shadow-lg"
                            style={{ backgroundImage: `url(${image.src})` }}
                            aria-label={image.alt}
                        ></div>
                    </div>
                ))}
            </div>

            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <h1 className="text-white text-4xl md:text-6xl font-bold text-center px-4">
                    Welcome to Our Church
                </h1>
            </div>
        </div>
    );
};

export default HeroBanner;
