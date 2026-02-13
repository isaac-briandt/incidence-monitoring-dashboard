export type IncidentStatus =
  | "OPEN"
  | "INVESTIGATING"
  | "MITIGATED"
  | "RESOLVED";

export const VALID_TRANSITIONS: Record<IncidentStatus, IncidentStatus[]> = {
  OPEN: ["INVESTIGATING"],
  INVESTIGATING: ["MITIGATED"],
  MITIGATED: ["RESOLVED"],
  RESOLVED: [],
};
