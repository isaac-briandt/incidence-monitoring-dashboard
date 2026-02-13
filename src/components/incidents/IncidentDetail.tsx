import { Card } from "@/components/card";
import { StatusManager } from "../status/StatusManager";
import type { Incident } from "../../types/incident";
import type { IncidentStatus } from "../../constants";
import { ActivityTimeline } from "../activity/ActivityLine";
import { CommentBox } from "../comment/CommentBox";
import { detailsImg } from "@/assets";

interface Props {
  incident?: Incident;
  onChangeStatus: (id: string, status: IncidentStatus, note: string) => void;
  onAddComment: (id: string, message: string) => void;
}

export function IncidentDetail({
  incident,
  onChangeStatus,
  onAddComment,
}: Props) {
  if (!incident) {
    return (
      <Card className="flex flex-col gap-2 justify-center items-center">
        <img
          src={detailsImg}
          alt="Incident details"
          className="w-full h-70 object-cover"
        />
        <p>Select an incident to view details.</p>
      </Card>
    );
  }

  return (
    <section className="space-y-6">
      <h2 className="bg-red-300 p-3 rounded font-medium">
        {incident?.title?.toUpperCase() || "No Title"}
      </h2>
      <hr />
      <ul>
        <li>
          <strong>Status:</strong> {incident?.status || "N/A"}
        </li>
        <li>
          <strong>Severity:</strong> {incident?.severity || "N/A"}
        </li>
        <li>
          <strong>Service:</strong> {incident?.service || "N/A"}
        </li>
      </ul>
      <p>
        <strong>Last Updated:</strong>{" "}
        {new Date(incident?.updatedAt || "-").toLocaleString()}
      </p>

      <Card>
        <StatusManager
          incident={incident}
          onChangeStatus={(status, note) =>
            onChangeStatus(incident?.id, status as IncidentStatus, note)
          }
        />
      </Card>
      <Card title="Activity Timeline">
        <ActivityTimeline entries={incident?.timeline || []} />
      </Card>
      <Card title="Comments">
        <CommentBox
          onSubmit={(message) => onAddComment(incident?.id, message)}
        />
      </Card>
    </section>
  );
}
