import { Card } from "@/components/card";
import type { Incident } from "@/types/incident";
import { Button } from "../ui/button";

interface IncidentListProps {
  incidents: Incident[];
  selectedId: string | null;
  onSelect: (id: string) => void;
  clearFilters: () => void;
}

export function IncidentList({
  incidents,
  selectedId,
  onSelect,
  clearFilters,
}: IncidentListProps) {
  if (incidents.length === 0) {
    return <p>No incidents found.</p>;
  }

  return (
    <>
      <div className="flex justify-between items-center">
        <p className="font-bold text-xl">List of Incidents</p>
        <Button
          variant="outline"
          onClick={clearFilters}
          className="hover:cursor-pointer bg-black text-white hover:bg-white hover:text-black"
        >
          Clear Filters
        </Button>
      </div>
      <hr className="my-3" />
      <ul className="w-full flex flex-col justify-center items-start gap-4">
        {incidents &&
          incidents?.map((incident) => (
            <Card
              key={incident.id}
              className={`p-2 w-full cursor-pointer border-gray-600 ${
                selectedId === incident.id ? "bg-blue-200" : ""
              }`}
              onClick={() => onSelect(incident?.id)}
            >
              <div className="font-medium">{incident.title}</div>
              <div className="text-sm">
                Severity: {incident?.severity || "N/A"} | Status:{" "}
                {incident?.status || "N/A"}
              </div>
            </Card>
          ))}
      </ul>
    </>
  );
}
