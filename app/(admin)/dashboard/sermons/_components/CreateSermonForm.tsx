"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { useUploadThing } from "@/lib/uploadthing"
import { FileUploader } from "@/components/dashboard/FileUploader"
import { CalendarIcon } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import MultiText from "@/components/dashboard/MultiText"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { Textarea } from "@/components/ui/textarea"
import { createSermon, updateSermon } from "@/lib/actions/sermon.actions"
import { useRouter, usePathname } from "next/navigation"
import { toast } from "@/components/ui/use-toast"

const formSchema = z.object({
    sermonTopic: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    title: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    sermonBody: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    imageUrl: z.string(),
    bible: z.array(z.string()),
    tags: z.array(z.string()),
    publishDate: z.date(),
})


const CreateSermonForm = ({ type, initialData }: { type: string, initialData?: any }) => {
    const [files, setFiles] = useState<File[]>([])
    const { startUpload } = useUploadThing('imageUploader')
    const router = useRouter();
    const path = usePathname()
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: initialData || {
            sermonTopic: "",
            title: "",
            imageUrl: "",
            bible: [],
            tags: [],
            sermonBody: "",
            // publishDate: "",
        },
    })

    const { isSubmitting } = form.formState;

    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof formSchema>) {
        let uploadedImageUrl = values.imageUrl;

        if (files.length > 0) {
            const uploadedImages = await startUpload(files)

            if (!uploadedImages) {
                return
            }

            uploadedImageUrl = uploadedImages[0].url
        }
        if (type === 'Create') {
            try {
                await createSermon({
                    sermon: { ...values, imageUrl: uploadedImageUrl },
                    path
                })

                form.reset();
                router.push(`/dashboard/sermons`);
                toast({
                    title: "Sermon Created Successfully",
                    description: "Please Event was created successfully...",
                    // status:'success'
                })

            } catch (error) {
                console.log(error);
                toast({
                    title: "Something Went Wrong",
                    description: "Please try again later",
                    variant: "destructive",
                });

            }
        }

        if (type === 'Update') {
            if (!initialData) {
                router.back()
                return;
            }

            try {
                const updatedEvent = await updateSermon({
                    sermonId: initialData?._id,
                    sermon: { ...values, imageUrl: uploadedImageUrl },
                    path
                })


                form.reset();
                router.push(`/dashboard/sermons/${updatedEvent._id}`)
                toast({
                    title: "Sermon Updated Successfully",
                    description: "Please Sermon was updated successfully...",
                    // status:'success'
                })
            } catch (error) {
                console.log(error);
                toast({
                    title: "Something Went Wrong",
                    description: "Please try again later",
                    variant: "destructive",
                });
            }
        }
    }
    return (
        <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <FormField
                            control={form.control}
                            name="sermonTopic"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Enter Sermon Topic</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter sermon topic" {...field} />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Enter Title</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Please enter title" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        This is your public display name.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="imageUrl"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Upload Image</FormLabel>
                                    <FormControl>
                                        <FileUploader
                                            onFieldChange={field.onChange}
                                            imageUrl={field.value}
                                            setFiles={setFiles}
                                        />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="bible"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Add Bible Quotes</FormLabel>
                                    <FormControl>
                                        <MultiText
                                            placeholder="Please add Bible quotes here"
                                            value={field.value}
                                            onChange={(bible) =>
                                                field.onChange([...field.value, bible])
                                            }
                                            onRemove={(tagToRemove) =>
                                                field.onChange([
                                                    ...field.value.filter(
                                                        (bible) => bible !== tagToRemove
                                                    ),
                                                ])
                                            }
                                        />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="tags"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Add Tags</FormLabel>
                                    <FormControl>
                                        <MultiText
                                            placeholder="Please add tags here"
                                            value={field.value}
                                            onChange={(tag) =>
                                                field.onChange([...field.value, tag])
                                            }
                                            onRemove={(tagToRemove) =>
                                                field.onChange([
                                                    ...field.value.filter(
                                                        (tag) => tag !== tagToRemove
                                                    ),
                                                ])
                                            }
                                        />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="publishDate"
                            render={({ field }) => (
                                <FormItem className="flex flex-col ">
                                    <FormLabel>Select Start Date</FormLabel>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <FormControl>
                                                <Button
                                                    variant={"outline"}
                                                    className={cn(
                                                        "w-full text-left font-normal",
                                                        !field.value && "text-muted-foreground"
                                                    )}
                                                >
                                                    {field.value ? (
                                                        format(field.value, "PPP")
                                                    ) : (
                                                        <span>Pick a date</span>
                                                    )}
                                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                </Button>
                                            </FormControl>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0" align="start">
                                            <Calendar
                                                mode="single"
                                                selected={field.value}
                                                onSelect={field.onChange}
                                                initialFocus
                                            />
                                        </PopoverContent>
                                    </Popover>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="sermonBody"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Sermon Content</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Tell us a little bit about yourself"
                                            className="resize-none"
                                            {...field}
                                        />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </>
    )
}

export default CreateSermonForm
