import { getSermonById } from '@/lib/actions/sermon.actions'
import moment from 'moment'
import Image from 'next/image'
import React from 'react'

const page = async ({params}:{params:{sermonId:string}}) => {
  const sermon = await getSermonById(params.sermonId)
  return (
    <>
      <div className=" shadow-lg rounded-lg overflow-hidden">
      <Image src={sermon?.imageUrl} alt={sermon?.title} width={200} height={200} className="w-full object-cover " />

      <div className="p-4">
        <h3 className="mb-4 mt-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">{sermon?.sermonTopic}</h3>
        <h2 className="mb-4 mt-4 text-xl font-bold !leading-tight text-black dark:text-white ">{sermon?.title}</h2>

        <div className="mt-4">
          <h4 className="mb-4 mt-4 text-lg font-bold !leading-tight text-black dark:text-white ">Bible Verses:</h4>
          <ul className="list-disc list-inside text-gray-500 mt-1">
            {sermon?.bible.map((verse:string) => (
              <li className="text-base font-medium leading-relaxed text-body-color text-md pb-3  sm:leading-relaxed" key={verse}>{verse}</li>
            ))}
          </ul>
        </div>

        <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">{sermon?.sermonBody}</p>

        <div className="flex items-center mt-4">
          <Image width={100} height={100} src={sermon?.author.photo} alt={sermon?.author.firstName} className="w-10 h-10 rounded-full object-cover object-center" />
          <div className="ml-2">
            <p className=" text-sm font-medium leading-relaxed text-body-color sm:leading-relaxed">{sermon?.author.firstName} {sermon.author.lastName}</p>
            <p className=" text-xs font-medium leading-relaxed text-body-color sm:leading-relaxed">{sermon?.author.duty}</p>
          </div>
        </div>

        <div className="flex items-center mt-4">
          {sermon?.tags.map((tag:string, index:number) => (
            <span key={index} className="px-2 py-1 font-medium leading-relaxed text-body-color  sm:leading-relaxed text-sm rounded-full mr-2">
              {tag}
            </span>
          ))}
        </div>

        <p className=" font-medium leading-relaxed text-body-color text-xs sm:leading-relaxed">{`Published on ${moment(sermon?.publishDate).format("MMMM Do YYYY")}`}</p>
      </div>
    </div>
    </>
  )
}

export default page
