import Header from "@/components/dashboard/Header"
import { Separator } from "@/components/ui/separator"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { BookAudio, Calendar, Users } from "lucide-react"
import { MdMoney } from "react-icons/md"
import { getAllUsers } from "@/lib/actions/user.actions"
import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import HistoryBoard from "@/components/dashboard/HistoryBoard"

const page = async () => {
  const user = await currentUser();

  if (!user) redirect("/");

  const users = (await getAllUsers()) || [];
  return (
    <main className=" p-1 md:p-4">
      <Header name={user?.firstName} />
      <Separator className="mt-2" />

      <div className="mx-auto ">
        <h1 className="font-bold py-2 text-xl  ">Overviews</h1>
        <div className="flex flex-1 gap-4  overflow-x-auto">
          <Card className="flex flex-col flex-0 w-full   transition-all duration-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">No. of Users</CardTitle>
              <Users className="h-5 w-5 font-bold" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{users?.length}</div>
            </CardContent>
          </Card>
          <Card className="flex flex-col flex-0 w-full  transition-all duration-200 ">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Sermons
              </CardTitle>
              <BookAudio className="h-5 w-5 font-bold" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{0}</div>
            </CardContent>
          </Card>
          <Card className="flex flex-col flex-0 w-full  transition-all duration-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Events
              </CardTitle>
              <Calendar className="h-5 w-5 font-bold" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{0}</div>
            </CardContent>
          </Card>
          <Card className="flex flex-col flex-0 w-full transition-all duration-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Donations
              </CardTitle>
              <MdMoney className="h-5 w-5 font-bold" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">0</div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="py-4">
        <HistoryBoard />
      </div>
    </main>
  )
}

export default page
