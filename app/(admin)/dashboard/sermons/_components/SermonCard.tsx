

import { auth } from '@clerk/nextjs/server'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import moment from 'moment'
import { Calendar, Edit, User } from 'lucide-react'
import { DeleteConfirmation } from '@/components/dashboard/DeleteComfirmation'
import { DeleteSermon } from './DeleteSermon'
import { cn, truncateText } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'

type EventCardProps = {
    sermon: any,
}

const SermonCard = ({ sermon }: EventCardProps) => {

    const { userId } = auth();

    const isSermonCreator = userId === sermon.author.clerkId;
    console.log(isSermonCreator, `sermon`)

    return (
        <div className="group relative flex min-h-[380px] w-full max-w-[400px] flex-col overflow-hidden rounded-xl  border bg-card text-card-foreground  shadow-md transition-all hover:shadow-lg md:min-h-[438px]">
            <Link
                href={`/dashboard/sermons/${sermon._id}`}
                style={{ backgroundImage: `url(${sermon.imageUrl})` }}
                className="flex-center flex-grow bg-gray-50 bg-cover bg-center text-grey-500"
            />
            {/* IS EVENT CREATOR ... */}

            {isSermonCreator && (
                <div className="absolute right-2 top-2 flex flex-col gap-4 rounded-xl bg-white p-3 shadow-sm transition-all">
                    <Link href={`/dashboard/sermons/${sermon._id}/update`}>
                        <Edit className='w-4 h-4 text-black' />
                    </Link>

                    <DeleteSermon sermonId={sermon._id} />
                </div>
            )}

            <div
                className="flex min-h-[230px] flex-col gap-3 p-5 md:gap-4"
            >
                <div className="">
                    <p className="font-extrabold text-xl">{sermon.sermonTopic}</p>
                    <p className="text-gray-600 mb-4">{sermon.title}</p>
                </div>
                <div className="">
                    <p className="text-gray-400 mb-4">{truncateText(sermon.sermonBody, 16)}</p>

                </div>
                <div className="flex justify-between items-center">

                   <div className="flex items-center mb-4">
                   <Image quality={100} width={100} unoptimized height={100} className="w-10 h-10 rounded-full mr-4" src={sermon.author.photo} alt={sermon.author.firstName} />
                    <div>
                        <p className="text-sm font-semibold">{sermon.author.firstName} {sermon.author.lastName}</p>
                        <p className="text-sm text-gray-600">{sermon.author?.duty}</p>
                    </div>
                   </div>
                    <Link href={`/dashboard/sermons/${sermon._id} `} className={cn(buttonVariants({ variant: "outline" }))}>Read more</Link>
                </div>
                <div className="">
                   
                    <p className=' text-sm'><span className='italic '>Publish At:</span> {moment(sermon.publishDate).format("MMMM Do YYYY")}</p>
                </div>

            </div>
        </div>
    )
}

export default SermonCard