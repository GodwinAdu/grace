
import { NavItem } from "@/components/dashboard/NavItem"
import { BookA, LayoutDashboard, LogOut, Menu, SettingsIcon, User, UsersIcon } from "lucide-react"
import Link from "next/link"
import { ReactNode } from "react"
import { MdEvent } from "react-icons/md"


export default function RootLayout({
    children
}: {
    children: ReactNode
}) {
    return (
        <div className="min-h-screen">
            <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
                <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
                    <div className="flex h-full max-h-screen flex-col gap-2">
                        <div className="flex h-[60px] items-center border-b px-5">
                            <Link
                                className="flex items-center gap-2 font-semibold"
                                href="/"
                            >
                               <span>Admin</span>
                            </Link>
                        </div>
                        <div className="flex-1 overflow-auto py-2">
                            <nav className="grid items-start px-4 text-sm font-medium">
                                <NavItem href="/dashboard">
                                    <LayoutDashboard className="h-4 w-4" />
                                    Dashboard
                                </NavItem>
                                <NavItem href="/dashboard/users">
                                    <UsersIcon className="h-4 w-4" />
                                    Users
                                </NavItem>
                                <NavItem href="/dashboard/sermons">
                                    <BookA className="h-4 w-4" />
                                    Sermons
                                </NavItem>
                                <NavItem href="/dashboard/events">
                                    <MdEvent className="h-4 w-4" />
                                    Events
                                </NavItem>
                                <NavItem href="/dashboard/feedbacks">
                                    <SettingsIcon className="h-4 w-4" />
                                    Feedbacks
                                </NavItem>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <header className="">
                        <Link
                            className="flex items-center gap-2 font-semibold lg:hidden"
                            href="/"
                        >
                            {/* <Logo /> */}
                            <span className="">Admin</span>
                        </Link>
                        <Menu className="block md:hidden" />
                    </header>
                    {children}
                </div>
            </div>
            {/* <Analytics /> */}
        </div>
    )
}