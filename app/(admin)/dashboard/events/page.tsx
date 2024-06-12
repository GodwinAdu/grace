import { buttonVariants } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { MdAdd } from "react-icons/md"
import EventCard from "./_components/EventCard"
import { fetchEvents } from "@/lib/actions/event.actions"
import { Loader2 } from "lucide-react"

const page = async () => {
  const data = await fetchEvents();
  console.log(data, "data")
  return (
    <main className=" p-1 md:p-4">
      <div className="flex items-center justify-between gap-4 border-b border-gray-200 pb-2 sm:flex-row sm:items-center sm:gap-0">
        <h1 className="py-2 font-bold text-xl md:text-3xl text-gray-900 dark:text-white/90">Manage Events</h1>
        <Link href="/dashboard/events/create" className={cn(buttonVariants({ size: "sm" }))}> <MdAdd className="mr-2 font-bold" />Create</Link>
      </div>
      <Separator />

      <div className="py-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {data && data.map((event:any) => (
            <>
              <EventCard key={event?._id} event={event} />
            </>
          ))}
        </div>
        {data.length <= 0 && (
          <div className='w-full mt-24 flex justify-center'>
            <div className='flex flex-col items-center gap-2'>
              <Loader2 className='h-8 w-8 animate-spin text-zinc-800' />
              <h3 className='font-semibold text-xl'>
                Oops!. No Event yet
              </h3>
              <p>Start creating new Events to display at the home page.</p>
            </div>
          </div>
        )}
      </div>

    </main>
  )
}

export default page
