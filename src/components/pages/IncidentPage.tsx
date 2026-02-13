import { seedIncidents } from "@/data/seedIncidents";
import { incidentReducer } from "@/state/incidentReducer";
import { useEffect, useReducer, useState } from "react";
import { IncidentDetail } from "../incidents/IncidentDetail";
import { IncidentList } from "../incidents/IncidentList";
import { Card } from "../card";
import { Loader } from "lucide-react";

function IncidentPage() {
  const STORAGE_KEY = "incidents";

  /**
   * Global incident state
   * - Initialized from localStorage if available
   * - Falls back to seeded data on first load
   */
  const [incidents, dispatch] = useReducer(
    incidentReducer,
    seedIncidents,
    () => {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : seedIncidents;
    },
  );

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedIncidentId, setSelectedIncidentId] = useState<string | null>(
    null,
  );

  type IncidentFilters = {
    status: string | null;
    severity: string | null;
    service: string | null;
    search: string;
  };

  const DEFAULT_FILTERS: IncidentFilters = {
    status: null,
    severity: null,
    service: null,
    search: "",
  };

  const [filters, setFilters] = useState<IncidentFilters>(DEFAULT_FILTERS);

  // Currently selected incident for the detail panel
  const selectedIncident = incidents.find(
    (incident) => incident?.id === selectedIncidentId,
  );

  /**
   * Apply all active filters before sorting
   * If no filters are active, all incidents are shown
   */
  const filteredIncidents = incidents.filter((incident) => {
    if (filters.status && incident.status !== filters.status) return false;
    if (filters.severity && incident.severity !== filters.severity)
      return false;
    if (filters.service && incident.service !== filters.service) return false;

    if (
      filters.search &&
      !incident.title.toLowerCase().includes(filters.search.toLowerCase())
    ) {
      return false;
    }

    return true;
  });

  const sortedIncidents = [...filteredIncidents].sort((a, b) => {
    const severityOrder = {
      critical: 4,
      high: 3,
      medium: 2,
      low: 1,
    };

    if (severityOrder[b.severity] !== severityOrder[a.severity]) {
      return severityOrder[b.severity] - severityOrder[a.severity];
    }

    return b.createdAt - a.createdAt;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(incidents));
  }, [incidents]);

  /**
   * Simulated real-time system activity
   * Periodically adds comments to unresolved incidents
   */
  useEffect(() => {
    const interval = setInterval(() => {
      const activeIncidents = incidents.filter((i) => i.status !== "RESOLVED");
      if (activeIncidents.length === 0) return;

      const incident =
        activeIncidents[Math.floor(Math.random() * activeIncidents.length)];

      dispatch({
        type: "ADD_COMMENT",
        payload: {
          id: incident.id,
          message: "Automated monitoring detected activity.",
          author: "System",
        },
      });
    }, 10000);

    return () => clearInterval(interval);
  }, [incidents]);

  /**
   * Initial load
   * Handles loading, error, and empty storage cases
   */
  useEffect(() => {
    try {
      const stored = localStorage.getItem("incidents");
      if (stored) {
        dispatch({ type: "LOAD", payload: JSON.parse(stored) });
      } else {
        dispatch({ type: "LOAD", payload: seedIncidents });
      }
    } catch {
      setError("Failed to load incidents");
    } finally {
      setLoading(false);
    }
  }, []);

  const clearFilters = () => {
    setFilters(DEFAULT_FILTERS);
  };

  if (loading)
    return (
      <div className="flex items-center justify-center h-64 gap-2">
        <Loader className="animate-spin" />
        <p className="ml-2">Loading incidents...</p>
      </div>
    );

  if (error) return <p className="text-center">{error}</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card className="bg-gray-200">
        <IncidentList
          incidents={sortedIncidents}
          selectedId={selectedIncidentId}
          onSelect={setSelectedIncidentId}
          clearFilters={clearFilters}
        />
      </Card>

      <IncidentDetail
        incident={selectedIncident}
        onChangeStatus={(id, status, note) =>
          dispatch({
            type: "CHANGE_STATUS",
            payload: { id, status, note },
          })
        }
        onAddComment={(id, message) =>
          dispatch({
            type: "ADD_COMMENT",
            payload: {
              id,
              message,
              author: "On-call Engineer",
            },
          })
        }
      />
    </div>
  );
}

export default IncidentPage;
