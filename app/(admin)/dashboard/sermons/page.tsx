import { buttonVariants } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { MdAdd } from "react-icons/md"


const page = () => {
  return (
    <main className=" p-1 md:p-4">
      <div className="flex items-center justify-between gap-4 border-b border-gray-200 pb-2 sm:flex-row sm:items-center sm:gap-0">
        <h1 className="py-2 font-bold text-xl md:text-3xl text-gray-900 dark:text-white/90">Manage Sermons</h1>
        <Link href="/dashboard/sermons/create" className={cn(buttonVariants({ size: "sm" }))}> <MdAdd className="mr-2 font-bold" />Create</Link>
      </div>
      <Separator className="my-3" />

    </main>
  )
}

export default page
