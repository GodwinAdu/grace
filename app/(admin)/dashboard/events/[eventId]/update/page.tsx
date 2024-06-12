import EventForm from "@/components/dashboard/EventForm";
import { Separator } from "@/components/ui/separator";
import { getEventById } from "@/lib/actions/event.actions";
import { auth } from "@clerk/nextjs/server";



const UpdateEvent = async ({ params }: { params: { eventId: string } }) => {
  const { userId } = auth();
  const event = await getEventById(params.eventId)

  return (
    <>
      <main className=" p-1 md:p-4">
        <div className="flex items-center justify-between gap-4 border-b border-gray-200 pb-2 sm:flex-row sm:items-center sm:gap-0">
          <h1 className="py-2 font-bold text-xl md:text-3xl text-gray-900 dark:text-white/90">Manage Events</h1>
          {/* <Link href="/dashboard/events/create" className={cn(buttonVariants({ size: "sm" }))}> <MdAdd className="mr-2 font-bold" />Create</Link> */}
        </div>
        <Separator />

        <div className="wrapper my-8">
          <EventForm
            type="Update"
            event={event}
            eventId={event._id}
            userId={userId as string}
          />
        </div>
      </main>
    </>
  )
}

export default UpdateEvent