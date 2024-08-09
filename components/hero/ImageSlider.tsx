'use client';

import { useState, useEffect, useRef } from 'react';
import StreamingModal from './StreamingModal';

const ImageSlider = () => {
    const [items, setItems] = useState([
        { id: 1, name: 'Youth of Grace', img: '/assets/images/12.jpeg' },
        { id: 2, name: 'Women of Grace', img: '/assets/images/8.jpeg' },
        { id: 3, name: 'Men of Grace', img: '/assets/images/11.jpeg' },
        { id: 4, name: 'Children of Grace', img: '/assets/images/15.jpeg' },
        { id: 5, name: 'Prayer Circle', img: '/assets/images/2.jpeg' },
        { id: 6, name: 'Music Ministry', img: '/assets/images/18.jpeg' },
        // { id: 7, name: 'KINGFISHER', img: 'image/kingfirser2.jpeg' },
        // { id: 8, name: 'PARROT', img: 'image/parrot2.jpg' },
        // { id: 9, name: 'HERON', img: 'image/heron.jpeg' },
        // { id: 10, name: 'BUTTERFLY', img: 'image/butterfly2.jpg' },
        // { id: 11, name: 'PARROT', img: 'image/parrot2.jpg' },
    ]);

    const listRef = useRef(null);
    const [animation, setAnimation] = useState<"next" | "prev" | null>(null);

    const nextSlide = () => {
        setItems((prevItems) => {
            const [first, ...rest] = prevItems;
            return [...rest, first];
        });
        setAnimation('next');
    };

    const prevSlide = () => {
        setItems((prevItems) => {
            const last = prevItems[prevItems.length - 1];
            return [last, ...prevItems.slice(0, -1)];
        });
        setAnimation('prev');
    };

    useEffect(() => {
        const runNextAuto = setTimeout(() => {
            nextSlide();
        }, 7000);

        return () => clearTimeout(runNextAuto);
    }, [items]);

    return (
        <div className="carousel relative w-full h-screen pt-36 lg:pt-0 flex items-center overflow-hidden">
            {items.map((item, index) => (
                <div
                    key={item.id}
                    className={`slide absolute flex flex-col lg:flex-row items-center justify-between w-full h-full transition-transform duration-1000 ${index === 0 ? 'z-20' : 'z-10'}`}
                    style={{
                        transform: `translateX(${index === 0 ? 0 : index > 0 ? '100%' : '-100%'})`,
                        opacity: index === 0 ? 1 : 0,
                    }}
                >
                    {/* Text content on the left */}
                    <div className="text-content w-full lg:w-1/2 p-6 lg:p-10 text-left text-white bg-opacity-60">
                        <div className="title text-xl lg:text-2xl uppercase font-bold leading-tight text-green-400">
                            Altar of Grace Pentecostal Ministry
                        </div>
                        <div className="text-foreground text-2xl py-4 lg:text-[30px] uppercase font-bold leading-tight">
                            {item.name}
                        </div>
                        <div className="text-muted-foreground mt-2 mb-5 text-sm lg:text-lg">
                            At Altar of Grace Ministry, we believe in spreading the love and grace of God to all.
                            Our mission is to create a welcoming and nurturing community where everyone can experience
                            God&apos;s presence, grow in faith, and find purpose in life.
                        </div>
                        <div className="text-center mt-10">
                            <StreamingModal />
                        </div>
                    </div>

                    {/* Image on the right with shadow */}
                    <div
                        className="image-content w-full lg:w-1/2 py-10 h-[70%] rounded-xl bg-cover bg-center mx-10"
                        style={{
                            backgroundImage: `url(${item.img})`,
                            filter: 'brightness(0.9)',
                        }}
                    />
                </div>
            ))}

            {/* Navigation arrows */}
            <div className="arrows absolute bottom-4 lg:bottom-10 left-1/2 transform -translate-x-1/2 flex gap-4 z-50">
                <button onClick={prevSlide} className="prev w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-green-400 text-white font-mono font-bold text-md lg:text-lg transition duration-500 hover:bg-white hover:text-black">
                    &lt;
                </button>
                <button onClick={nextSlide} className="next w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-green-400 text-white font-mono font-bold text-md lg:text-lg transition duration-500 hover:bg-white hover:text-black">
                    &gt;
                </button>
            </div>

            {/* Time running */}
            <div className="timeRunning absolute top-0 left-0 w-0 h-1 bg-green-400 animate-runningTime"></div>
        </div>
    );
};

export default ImageSlider;
