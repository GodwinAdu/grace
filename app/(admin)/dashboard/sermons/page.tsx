import { buttonVariants } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { fetchSermons } from "@/lib/actions/sermon.actions"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { MdAdd } from "react-icons/md"
import SermonCard from "./_components/SermonCard"
import { Loader2 } from "lucide-react"


const page = async () => {
  const sermons = await fetchSermons();
  console.log(sermons, "sermons")
  return (
    <main className=" p-1 md:p-4">
      <div className="flex items-center justify-between gap-4 border-b border-gray-200 pb-2 sm:flex-row sm:items-center sm:gap-0">
        <h1 className="py-2 font-bold text-xl md:text-3xl text-gray-900 dark:text-white/90">Manage Sermons</h1>
        <Link href="/dashboard/sermons/create" className={cn(buttonVariants({ size: "sm" }))}> <MdAdd className="mr-2 font-bold" />Create</Link>
      </div>
      <div className="py-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {sermons && sermons.map((sermon:any) => (
            <>
              <SermonCard key={sermon?._id} sermon={sermon} />
            </>
          ))}
        </div>
        {sermons.length <= 0 && (
          <div className='w-full mt-24 flex justify-center'>
            <div className='flex flex-col items-center gap-2'>
              <Loader2 className='h-8 w-8 animate-spin text-zinc-800' />
              <h3 className='font-semibold text-xl'>
                Oops!. No Sermons yet
              </h3>
              <p>Start creating new sermons to display at the home page.</p>
            </div>
          </div>
        )}
      </div>


    </main>
  )
}

export default page
