"use client";

import { useState } from "react";
import { Edit, Eye, MoreHorizontal, Trash } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import { Button } from "@/components/ui/button";


import { toast } from "@/components/ui/use-toast";
import Link from "next/link";

interface CellActionProps {
    data: any;
}

export const CellAction: React.FC<CellActionProps> = ({ data }) => {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const router = useRouter();
    const params = useParams();




    const handleDeleteAdmin = async (id: string) => {
        try {
            setLoading(true);
            // await deleteAdmin({ id })
            toast({
                title: "Deleted Successfully",
                description: "Please Admin was deleted successfully...",

            });
            router.refresh();
        } catch (error) {
            toast({
                title: "Something Went Wrong",
                description: "Please try again later",
                variant: "destructive",
            });
        } finally {
            setOpen(false);
            setLoading(false);
        }
    };



    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>

                    <Link href={`/`}>
                        <DropdownMenuItem >
                            <Eye className="mr-2 h-4 w-4" /> View
                        </DropdownMenuItem>
                    </Link>

                    <Link href={`/`}>
                        <DropdownMenuItem >
                            <Edit className="mr-2 h-4 w-4" /> Update
                        </DropdownMenuItem>
                    </Link>


                    <DropdownMenuItem onClick={() => handleDeleteAdmin(data?._id)}>
                        <Trash className="mr-2 h-4 w-4" /> Delete
                    </DropdownMenuItem>

                </DropdownMenuContent>
            </DropdownMenu>
        </>
    );
};