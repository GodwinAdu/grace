import EventForm from "@/components/dashboard/EventForm";
import SermonForm from "@/components/dashboard/SermonForm";
import { Separator } from "@/components/ui/separator";
import { getEventById } from "@/lib/actions/event.actions";
import { getSermonById } from "@/lib/actions/sermon.actions";
import { auth } from "@clerk/nextjs/server";
import CreateSermonForm from "../../_components/CreateSermonForm";



const page = async ({ params }: { params: { sermonId: string } }) => {
 
  const initialData = await getSermonById(params.sermonId)

  return (
    <>
      <main className=" p-1 md:p-4">
        <div className="flex items-center justify-between gap-4 border-b border-gray-200 pb-2 sm:flex-row sm:items-center sm:gap-0">
          <h1 className="py-2 font-bold text-xl md:text-3xl text-gray-900 dark:text-white/90">Manage Events</h1>
          {/* <Link href="/dashboard/events/create" className={cn(buttonVariants({ size: "sm" }))}> <MdAdd className="mr-2 font-bold" />Create</Link> */}
        </div>
        <Separator />

        <div className="wrapper my-8">
          <CreateSermonForm
            type="Update"
            initialData={initialData}
          />
        </div>
      </main>
    </>
  )
}

export default page