import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { twJoin } from "tailwind-merge";

//　バリデーションルール
const formSchema = z.object({
  title: z.string().optional(),
  content: z.string().min(1, "Content is required"),
});

interface Props {
  className?: string;
}

function CreatePostForm({ className }: Props) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { title: "", content: "" },
  });

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    const postData = {
      title: values.title?.trim() || "No Title",
      content: values.content,
    };
    // ここに送信処理を書く
    console.log("Submitted Data:", postData);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          // className={twJoin(
          //   "font-medium text-white bg-black rounded-md py-3 px-4 transition-colors duration-200 hover:bg-gray-800 hover:text-white",
          //   className
          // )}
          className={twJoin(
            "fixed z-50 bottom-10 right-10 py-5 px-5 w-16 h-16 rounded-full cursor-pointer opacity-90 text-white bg-gray-800 hover:text-white  hover:bg-gray-900",
            className
          )}
        >
          ＋
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col gap-4 p-6">
        <SheetHeader>
          <SheetTitle className="text-gray-800 tracking-tighter">
            Create Post
          </SheetTitle>
          <SheetClose asChild />
        </SheetHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="flex flex-col gap-4"
          >
            <SheetDescription className="flex flex-col items-left gap-3">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <Label
                      htmlFor="title"
                      className="font-medium text-gray-500"
                    >
                      Title
                    </Label>
                    <FormControl>
                      <Input
                        id="title"
                        type="text"
                        {...field}
                        placeholder="No Title"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                  <FormItem>
                    <Label
                      htmlFor="content"
                      className="font-medium text-gray-500"
                    >
                      Content
                    </Label>
                    <FormControl>
                      <Textarea
                        id="content"
                        {...field}
                        className="h-40 align-text-top"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </SheetDescription>
            <SheetFooter>
              <SheetClose asChild>
                <Button type="submit">Create</Button>
              </SheetClose>
            </SheetFooter>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  );
}

export default CreatePostForm;
