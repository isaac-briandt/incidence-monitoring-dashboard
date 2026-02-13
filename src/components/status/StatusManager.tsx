import type { Incident } from "../../types/incident";
import { useState } from "react";
import { VALID_TRANSITIONS, type IncidentStatus } from "../../constants";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

interface Props {
  incident: Incident;
  onChangeStatus: (status: IncidentStatus, note: string) => void;
}

export function StatusManager({ incident, onChangeStatus }: Props) {
  const [note, setNote] = useState("");
  const [selectedStatus, setSelectedStatus] = useState<IncidentStatus | "">("");

  const availableStatuses = VALID_TRANSITIONS[incident.status];

  const handleSubmit = () => {
    if (!note || !selectedStatus) return;
    onChangeStatus(selectedStatus, note);
    toast.success(
      `${incident.title} status changed to ${selectedStatus.toUpperCase()}`,
    );
    setNote("");
    setSelectedStatus("");
  };

  return (
    <div className="flex flex-col gap-3">
      <p className="font-medium text-lg">UPDATE STATUS</p>
      <hr className="my-2" />
      <Select
        value={selectedStatus}
        onValueChange={(value) => setSelectedStatus(value as IncidentStatus)}
      >
        <SelectTrigger className="w-full max-w-48 hover:cursor-pointer">
          <SelectValue placeholder="Select status" />
        </SelectTrigger>
        <SelectContent className="z-20">
          <SelectGroup>
            {availableStatuses.map((status) => (
              <SelectItem
                className="hover:cursor-pointer"
                key={status}
                value={status}
              >
                {status}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      <label className="mt-6">
        Note (required)
        <Textarea value={note} onChange={(e) => setNote(e.target.value)} />
      </label>

      <Button
        variant="outline"
        onClick={handleSubmit}
        disabled={!note || !selectedStatus}
        className="hover:cursor-pointer bg-black text-white hover:bg-white hover:text-black"
      >
        Change Status
      </Button>
    </div>
  );
}
