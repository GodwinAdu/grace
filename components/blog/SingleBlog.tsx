import Image from "next/image";
import Link from "next/link";


interface Author {
  name: string;
  image: string;
  designation: string;
}

interface Sermon {
  id: number;
  sermonTopic: string;
  title: string;
  image: string;
  bible: string[];
  sermonBody: string;
  author: Author;
  tags: string[];
  publishDate: string;
}
interface SermonProps {
  blog: Sermon;
}


const SingleBlog: React.FC<SermonProps> = ({ blog }) => {
  const { id, title, image, sermonTopic, author, tags, publishDate } = blog;
  return (
    <>
      <div
        className="wow fadeInUp relative overflow-hidden rounded-md bg-white shadow-one dark:bg-dark mb-4"
        data-wow-delay=".1s"
      >
        <Link href={`/sermon-details/${id}`} className="relative block h-[220px] w-full">
          <span className="absolute top-6 right-6 z-20 inline-flex items-center justify-center rounded-full bg-primary2 py-2 px-4 text-sm font-semibold capitalize text-white">
            {tags[0]}
          </span>
          <Image className="w-full h-full" width={100} height={100} src={image} alt="image" />
        </Link>
        <div className="p-6 sm:p-8 md:py-8 md:px-6 lg:p-8 xl:py-8 xl:px-5 2xl:p-8">
          <h3>
            <Link
              href={`/sermon-details/${id}`}
              className="mb-4 mt-4 block text-xl font-bold text-black hover:text-primary2 dark:text-white dark:hover:text-primary2 sm:text-2xl"
            >
              {sermonTopic}
            </Link>
          </h3>
          <p className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
            {title}
          </p>
          <div className="flex items-center">
            <div className="mr-5 flex items-center border-r border-body-color border-opacity-10 pr-5 dark:border-white dark:border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5">
              <div className="mr-4">
                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                  <Image fill src={author.image} alt="author" />
                </div>
              </div>
              <div className="w-full">
                <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                  By {author.name}
                </h4>
                <p className="text-xs text-body-color">{author.designation}</p>
              </div>
            </div>
            <div className="inline-block">
              <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                Date
              </h4>
              <p className="text-xs text-body-color">{publishDate}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
