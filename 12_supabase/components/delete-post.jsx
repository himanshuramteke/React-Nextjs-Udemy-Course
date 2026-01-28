"use client";
import { Button } from "./ui/button";

export default function DeletePostButton({ postId, action }) {
  return (
    <form action={action}>
      <input type="hidden" name="postId" value={postId} />

      <Button
        type="submit"
        variant="destructive"
        onClick={(e) => {
          if (!confirm("Are you sure you want to delete this post?")) {
            e.preventDefault();
          }
        }}
      >
        Delete
      </Button>
    </form>
  );
}
