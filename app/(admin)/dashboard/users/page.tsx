import { columns } from "@/components/dashboard/column"
import { DataTable } from "@/components/dashboard/data-table"
import { Separator } from "@/components/ui/separator"
import { getAllUsers } from "@/lib/actions/user.actions"


const page = async () => {
    const data = (await getAllUsers()) || [];
    return (
        <main className=" p-1 md:p-4">
            <div className="flex items-center justify-between gap-4 border-b border-gray-200 pb-2 sm:flex-row sm:items-center sm:gap-0">
                <h1 className="py-2 font-bold text-xl md:text-3xl text-gray-900 dark:text-white/90">Manage Users</h1>
            </div>
            <Separator />
            <DataTable searchKey="firstName" columns={columns} data={data} />
        </main>
    )
}

export default page
