import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'

import moment from 'moment'
import { Button } from '../ui/button'
import { getAllUsers } from '@/lib/actions/user.actions'
import { fetchAllFeedbacks } from '@/lib/actions/feedback.actions'


const HistoryBoard = async () => {
    const users = await getAllUsers() || []
    const messages = await fetchAllFeedbacks() || []
    return (
        <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
            <Card className="xl:col-span-2" x-chunk="dashboard-01-chunk-4">
                <CardHeader className="flex flex-row items-center">
                    <div className="grid gap-2">
                        <CardTitle>Members</CardTitle>
                        <CardDescription>
                            Recent Recent Users Registered
                        </CardDescription>
                    </div>
                    <Button asChild size="sm" className="ml-auto gap-1">
                        <Link href="#">
                            View All
                            <ArrowUpRight className="h-4 w-4" />
                        </Link>
                    </Button>
                </CardHeader>
                <CardContent className="max-h-80 overflow-y-auto">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Name</TableHead>
                                <TableHead className="text-right">Date</TableHead>
                                <TableHead className="text-right">Is Admin</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {users.length === 0 && (
                                <div className="flex justify-center items-center h-56 w-full">
                                    <p className='text-center font-medium '>No users found.</p>
                                </div>
                            )}
                            {[...users]?.reverse()?.map((transaction) => (
                                <TableRow key={transaction._id}>
                                    <TableCell>
                                        <div className="font-medium">{transaction.firstName}</div>
                                    </TableCell>
                                    <TableCell className="text-right">{moment(transaction.created).fromNow()}</TableCell>
                                    <TableCell className="text-right">{transaction.admin ? "Admin" : "User"}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
            <Card x-chunk="dashboard-01-chunk-5">
                <CardHeader>
                    <CardTitle>Recent Message</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-8 max-h-80 overflow-y-auto">
                    {[...messages]?.reverse()?.map((history) => (
                        <Link href={``} key={history._id} className="flex gap-2 items-center">
                            <div className="flex-1">
                                <p className="text-sm font-medium leading-none">
                                    {history.name}
                                </p>
                            </div>
                            <p className="text-xs text-muted-foreground">
                                {moment(history.timestamp).fromNow()}
                            </p>
                        </Link>
                    ))}
                </CardContent>
            </Card>
        </div>
    )
}

export default HistoryBoard
