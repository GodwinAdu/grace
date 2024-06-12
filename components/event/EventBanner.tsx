import Link from 'next/link'
import React from 'react'

const EventBanner = ({ event }) => {
    const bgImage = event?.imageUrl
    return (

        <section
            className="relative bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            <div className="relative z-10 max-w-4xl mx-auto text-center text-white px-4 py-24 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-extrabold sm:text-5xl mb-4 py-6">
                    Current Events
                </h1>
                <h2 className="text-3xl font-bold sm:text-4xl mb-6">
                    {event?.title}
                </h2>
                <p className="max-w-2xl mx-auto text-lg sm:text-xl mb-8">
                    {event?.description}
                </p>
                <Link href={`/events/${event?._id}`} className="inline-block rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500">
                    Read More
                </Link>
            </div>
        </section>
    )
}

export default EventBanner
