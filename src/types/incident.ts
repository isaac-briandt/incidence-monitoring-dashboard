import type { IncidentStatus } from "../constants";

export type Severity = "low" | "medium" | "high" | "critical";

export type TimelineEntry = {
  id: string;
  type: "status_change" | "comment" | "system";
  message: string;
  timestamp: number;
  author?: string;
};

export type Incident = {
  id: string;
  title: string;
  service: string;
  severity: Severity;
  status: IncidentStatus;
  createdAt: number;
  updatedAt: number;
  timeline: TimelineEntry[];
};
