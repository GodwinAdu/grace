import { FaFacebook } from 'react-icons/fa';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { buttonVariants } from '../ui/button';
import { Facebook, Youtube } from 'lucide-react';

const StreamingModal = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <button

                    className="rounded-md bg-primary2 py-4 px-8 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary2/80"
                >
                    Online Streaming
                </button>
            </DialogTrigger>
            <DialogContent className="w-[96%]">
                <DialogHeader>
                    <DialogTitle>Join Us Online</DialogTitle>
                    <DialogDescription>
                        We currently stream on <span className='text-blue-500'>facebook</span> and <span className='text-red-400'>Youtube</span>
                    </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col gap-4 py-6">
                    <Link href="#" className={cn(buttonVariants(),"hover:bg-blue-700")}><Facebook className='w-5 h-5 mr-2 text-white' /> Join Facebook Streaming</Link>
                    <Link href="#" className={cn(buttonVariants(),"bg-red-400 hover:bg-red-600")}><Youtube className='w-5 h-5 mr-2 text-white' fill='red' /> Join Youtube Streaming</Link>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default StreamingModal
