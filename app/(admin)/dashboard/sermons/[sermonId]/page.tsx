
import { getSermonById } from '@/lib/actions/sermon.actions';
import SermonDisplay from '../_components/SermonDisplay';

const page = async ({ params }: { params: { sermonId: string } }) => {
    const sermon = await getSermonById(params.sermonId);
 
    return (
        <main className=" p-1 md:p-4">
            <div className="flex items-center justify-between gap-4 border-b border-gray-200 pb-2 sm:flex-row sm:items-center sm:gap-0">
                <h1 className="py-2 font-bold text-xl md:text-3xl text-gray-900 dark:text-white/90">Sermon Details</h1>
                {/* <Link href="/dashboard/events/create" className={cn(buttonVariants({ size: "sm" }))}> <MdAdd className="mr-2 font-bold" />Create</Link> */}
            </div>
            <div className="min-h-screen bg-gray-100 p-4">
                <SermonDisplay sermon={sermon} />
            </div>
        </main>
    )
}

export default page
