import moment from "moment";
import Image from "next/image";

// types.ts
interface Author {
    firstName: string;
    lastName: string;
    photo: string;
    duty: string;
}

interface Sermon {
    id: number;
    sermonTopic: string;
    title: string;
    imageUrl: string;
    bible: string[];
    sermonBody: string;
    author: Author;
    tags: string[];
    publishDate: string;
}

interface SermonCardProps {
    sermon: Sermon;
}


const SermonDisplay = ({ sermon }: SermonCardProps) => {
    return (
        <div className="max-w-full mx-auto bg-white shadow-md rounded-lg overflow-hidden">
            <Image quality={100} unoptimized width={100} height={100} className="w-full h-72 object-cover" src={sermon.imageUrl} alt={sermon.title} />
            <div className="p-6">
                <h2 className="text-xl font-bold mb-2">{sermon.title}</h2>
                <p className="text-gray-600 mb-4">{sermon.sermonBody}</p>
                <div className="mb-4">
                    <h3 className="text-lg font-semibold">Bible Verses:</h3>
                    <ul className="list-disc list-inside">
                        {sermon.bible.map((verse, index) => (
                            <li key={index}>{verse}</li>
                        ))}
                    </ul>
                </div>
                <div className="flex items-center mb-4">
                    <Image quality={100} width={100} unoptimized height={100} className="w-10 h-10 rounded-full mr-4" src={sermon.author.photo} alt={sermon.author.firstName} />
                    <div>
                        <p className="text-sm font-semibold">{sermon.author.firstName} {sermon.author.lastName}</p>
                        <p className="text-sm text-gray-600">{sermon.author?.duty}</p>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-gray-600">PublishAt: {moment(sermon.publishDate).format("MMMM Do YYYY")}</span>
                    <span className="bg-gray-200 text-gray-800 text-sm px-2 py-1 rounded">{sermon.tags.join(', ')}</span>
                </div>
            </div>
        </div>
    )
}

export default SermonDisplay
