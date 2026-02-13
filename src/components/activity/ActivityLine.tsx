import type { TimelineEntry } from "../../types/incident";

interface Props {
  entries: TimelineEntry[];
}

export function ActivityTimeline({ entries }: Props) {
  if (!entries || entries.length === 0) {
    return <p>No activity recorded yet.</p>;
  }

  const sortedEntries = [...entries].sort((a, b) => b.timestamp - a.timestamp);

  return (
    <ul>
      {sortedEntries.map((entry) => (
        <li key={entry.id}>
          <hr className="my-4" />

          <p>
            <strong>
              {entry.type === "status_change"
                ? "Status Update"
                : entry.type === "system"
                  ? "System"
                  : "Comment"}
            </strong>
          </p>

          <p>{entry.message}</p>

          <small>{new Date(entry.timestamp).toLocaleString()}</small>
        </li>
      ))}
    </ul>
  );
}
