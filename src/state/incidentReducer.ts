import type { Incident } from "../types/incident";
import type { IncidentStatus } from "../constants";

type Action =
  | { type: "LOAD"; payload: Incident[] }
  | { type: "UPDATE"; payload: Incident }
  | {
      type: "CHANGE_STATUS";
      payload: {
        id: string;
        status: IncidentStatus;
        note: string;
      };
    }
  | {
      type: "ADD_COMMENT";
      payload: {
        id: string;
        message: string;
        author: string;
      };
    };

export function incidentReducer(state: Incident[], action: Action): Incident[] {
  switch (action.type) {
    case "LOAD":
      return action.payload;

    case "UPDATE":
      return state.map((i) =>
        i.id === action.payload.id ? action.payload : i,
      );

    case "CHANGE_STATUS": {
      const { id, status, note } = action.payload;

      return state.map((incident) => {
        if (incident.id !== id) return incident;

        const entry = {
          id: crypto.randomUUID(),
          type: "status_change" as const,
          message: note,
          timestamp: Date.now(),
        };

        return {
          ...incident,
          status,
          updatedAt: Date.now(),
          timeline: [...incident.timeline, entry],
        };
      });
    }

    case "ADD_COMMENT": {
      const { id, message, author } = action.payload;

      return state.map((incident) => {
        if (incident.id !== id) return incident;

        const entry = {
          id: crypto.randomUUID(),
          type: "comment" as const,
          message,
          author,
          timestamp: Date.now(),
        };

        return {
          ...incident,
          updatedAt: Date.now(),
          timeline: [...incident.timeline, entry],
        };
      });
    }

    default:
      return state;
  }
}
