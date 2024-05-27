"use client"

import React, { useState } from 'react'
import { images } from '../lightbox/imageData';
import Image from 'next/image';
import { MdArrowBackIos, MdArrowForwardIos, MdOutlineClose } from 'react-icons/md';

const GalleryComponent = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const openModal = (index:number) => {
        setCurrentImageIndex(index);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const goNext = () => {
        if (currentImageIndex < images.length - 1) {
            setCurrentImageIndex(currentImageIndex + 1);
        }
    };

    const goPrev = () => {
        if (currentImageIndex > 0) {
            setCurrentImageIndex(currentImageIndex - 1);
        }
    };
    return (
        <section className="p-4">
            <div className="grid grid-col-1 md:grid-cols-3 gap-4">
                {images.map((img, index) => (
                    <Image
                        key={index}
                        width={200}
                        height={200}
                        src={img}
                        alt=""
                        className="cursor-pointer object-cover h-48 w-full rounded"
                        onClick={() => openModal(index)}
                    />
                ))}
            </div>

            {isModalOpen && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="relative p-4 bg-white shadow-xl rounded-l">
                        <Image src={images[currentImageIndex]} width={650} height={500} alt="" className="max-h-[70vh] max-w-[90vw] rounded shadow-lg" />
                        <button type='button' className="absolute top-0 right-0 p-2 bg-white rounded-full shadow-md" onClick={closeModal} aria-label="Close modal"><MdOutlineClose className='text-xl md:text-2xl' /></button>
                        <button type='button' className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-md" onClick={goPrev} aria-label="previous button"><MdArrowBackIos className='text-xl md:text-2xl' /></button>
                        <button type='button' className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-md" onClick={goNext} aria-label="Next button"><MdArrowForwardIos className='text-xl md:text-2xl' /></button>
                    </div>
                </div>
            )}
        </section>
    )
}

export default GalleryComponent
