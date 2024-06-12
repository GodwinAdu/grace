import EventForm from "@/components/dashboard/EventForm";
import { Separator } from "@/components/ui/separator";
import { auth } from "@clerk/nextjs/server";
import CreateSermonForm from "../_components/CreateSermonForm";


const CreateEvent = () => {
    const { userId } = auth();

    return (
        <>
            <main className=" p-1 md:p-4">
                <div className="flex items-center justify-between gap-4 border-b border-gray-200 pb-2 sm:flex-row sm:items-center sm:gap-0">
                    <h1 className="py-2 font-bold text-xl md:text-3xl text-gray-900 dark:text-white/90">Create Sermons</h1>
                    {/* <Link href="/dashboard/events/create" className={cn(buttonVariants({ size: "sm" }))}> <MdAdd className="mr-2 font-bold" />Create</Link> */}
                </div>
                <Separator className="my-3" />
                <div className="py-5">
                    <CreateSermonForm type="Create"/>
                </div>
            </main>
        </>
    )
}

export default CreateEvent