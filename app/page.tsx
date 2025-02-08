"use client";

import * as main from "@/components/main/index";
import type { PostInfo } from "@/components/main/types/post";
let postList: PostInfo[] = [
  {
    title: "Title",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus esse molestias temporibus, totam perspiciatis cumque voluptatem quam possimus odit corrupti laudantium explicabo sit quo deleniti quod porro quae aliquam. Totam!",
    author: "Author",
    isAdmin: true,
    isPoster: true,
    hidden: false,
    id: "1",
  },
  {
    title: "Title",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus esse molestias temporibus, totam perspiciatis cumque voluptatem quam possimus odit corrupti laudantium explicabo sit quo deleniti quod porro quae aliquam. Totam!",
    author: "Author",
    isAdmin: true,
    isPoster: false,
    hidden: false,
    id: "2",
  },
  {
    title: "Title",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus esse molestias temporibus, totam perspiciatis cumque voluptatem quam possimus odit corrupti laudantium explicabo sit quo deleniti quod porro quae aliquam. Totam!",
    author: "Author",
    isAdmin: true,
    isPoster: false,
    hidden: true,
    id: "3",
  },
  {
    title: "Title",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus esse molestias temporibus, totam perspiciatis cumque voluptatem quam possimus odit corrupti laudantium explicabo sit quo deleniti quod porro quae aliquam. Totam!",
    author: "Author",
    isAdmin: false,
    isPoster: true,
    hidden: false,
    id: "4",
  },
  {
    title: "Title",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus esse molestias temporibus, totam perspiciatis cumque voluptatem quam possimus odit corrupti laudantium explicabo sit quo deleniti quod porro quae aliquam. Totam!",
    author: "Author",
    isAdmin: false,
    isPoster: false,
    hidden: true,
    id: "5",
  },
];
export default function MainPage() {
  return (
    <>
      <main.CreatePostForm />
      <main.PostList PostList={postList} />
    </>
  );
}
