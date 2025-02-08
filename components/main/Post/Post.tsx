import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import type { PostInfo as props } from "../types/post";

function Post({
  title,
  author,
  content,
  hidden,
  isPoster,
  isAdmin,
  id,
}: props) {
  const [state, setState] = useState(hidden ? "hidden" : "displayed");

  const handleDelete = () => {
    // ここに削除処理を書く
    console.log("Deleted Post:", id);
    setState("deleted");
  };

  const handleDisplay = () => {
    // ここに表示/非表示処理を書く
    console.log(`${state === "displayed" ? "hidden" : "displayed"} Post:`, id);
    setState(state === "displayed" ? "hidden" : "displayed");
  };

  return (
    <div
      className={
        state === "deleted" || (state === "hidden" && !isAdmin) ? "hidden" : ""
      }
    >
      <Card className={state === "hidden" ? "opacity-60" : ""}>
        <CardHeader>
          <CardTitle className={state === "hidden" ? "line-through" : ""}>
            {title}
          </CardTitle>
          <CardDescription className={isPoster ? "text-red-800 font-bold" : ""}>
            @ {author}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>{content}</p>
        </CardContent>
        <CardFooter className="flex justify-end gap-4">
          {/* <Button>Edit</Button> */}
          {!isAdmin && isPoster ? (
            <Button id="user-delete" onClick={handleDisplay}>
              Delete
            </Button>
          ) : null}
          {isAdmin ? (
            <div className="flex items-center space-x-2">
              <Label htmlFor="display">Display</Label>
              <Switch
                id="display"
                checked={state === "displayed"}
                onCheckedChange={handleDisplay}
              />
            </div>
          ) : null}
          {isAdmin ? (
            <Button
              id="admin-delete"
              onClick={handleDelete}
              className="bg-red-500 hover:bg-red-700"
            >
              Delete
            </Button>
          ) : null}
        </CardFooter>
      </Card>
    </div>
  );
}
export default Post;
