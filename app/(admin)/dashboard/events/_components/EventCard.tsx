

import { auth } from '@clerk/nextjs/server'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import moment from 'moment'
import { Calendar, Edit, User } from 'lucide-react'
import { DeleteConfirmation } from '@/components/dashboard/DeleteComfirmation'

type EventCardProps = {
    event: any,
    hasOrderLink?: boolean,
    hidePrice?: boolean
}

const EventCard = ({ event, hidePrice }: EventCardProps) => {

    const { userId } = auth();
    console.log(userId);

    const isEventCreator = userId === event.organizer.clerkId;
    console.log(isEventCreator, `Event`)

    return (
        <div className="group relative flex min-h-[380px] w-full max-w-[400px] flex-col overflow-hidden rounded-xl  border bg-card text-card-foreground  shadow-md transition-all hover:shadow-lg md:min-h-[438px]">
            <Link
                href={`/dashboard/events/${event._id}`}
                style={{ backgroundImage: `url(${event.imageUrl})` }}
                className="flex-center flex-grow bg-gray-50 bg-cover bg-center text-grey-500"
            />
            {/* IS EVENT CREATOR ... */}

            {isEventCreator && (
                <div className="absolute right-2 top-2 flex flex-col gap-4 rounded-xl bg-white p-3 shadow-sm transition-all">
                    <Link href={`/dashboard/events/${event._id}/update`}>
                       <Edit className='w-4 h-4 text-black' />
                    </Link>

                    <DeleteConfirmation eventId={event._id} />
                </div>
            )}

            <div
                className="flex min-h-[230px] flex-col gap-3 p-5 md:gap-4"
            >
                {!hidePrice && <div className="flex gap-2">
                    <span className="p-semibold-14 w-min rounded-full bg-green-100 px-4 py-1 text-green-60 dark:text-black/80">
                        {event.isFree ? 'FREE' : `$${event.price}`}
                    </span>
                    <p className="p-semibold-14 w-min rounded-full bg-grey-500/10 px-4 py-1 text-grey-500 line-clamp-1 underline">
                        {event.categories[0]}
                    </p>
                </div>}

                <div className="flex justify-between items-center">
                    <p className="p-medium-16 p-medium-18 text-grey-500 flex gap-1 items-center dark:text-black/70  bg-gray-200 p-2 rounded-full">
                        <Calendar className='w-4 h-4 text-blue-500' />
                        {moment(event.startDate).format("MMMM Do YYYY")}
                    </p>
                    <span className='font-bold'>-</span>
                    <p className="p-medium-16 p-medium-18 text-grey-500 flex gap-1 items-center dark:text-black/70 bg-gray-200 p-2 rounded-full">
                        <Calendar className='w-4 h-4 text-blue-500' />
                        {moment(event.dueDate).format("MMMM Do YYYY")}
                    </p>

                </div>
                <Link href={`/dashboard/events/${event._id}`}>
                    <p className="p-medium-16 md:p-medium-20 line-clamp-2 flex-1 text-black dark:text-white/70 "><span className="font-extrabold">Title:</span> {event.title}</p>
                </Link>

                <div className="flex-between w-full">
                    <p className="p-medium-14 md:p-medium-16 text-grey-600 flex items-center gap-2">
                        <User className='w-5 h-5 text-blue-500' />
                        <span className="font-extrabold">By-</span>
                        {event.organizer.firstName} {event.organizer.lastName}
                    </p>

                </div>
            </div>
        </div>
    )
}

export default EventCard