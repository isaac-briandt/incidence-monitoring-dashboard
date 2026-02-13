import { useState } from "react";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

interface Props {
  onSubmit: (message: string) => void;
}

export function CommentBox({ onSubmit }: Props) {
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (!message.trim()) return;
    onSubmit(message.trim());
    setMessage("");
  };

  return (
    <div className="flex flex-col gap-3">
      <label>
        Add Comment
        <Textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </label>

      <Button
        variant="outline"
        onClick={handleSubmit}
        disabled={!message.trim()}
        className="hover:cursor-pointer bg-black text-white hover:bg-white hover:text-black"
      >
        Submit
      </Button>
    </div>
  );
}
