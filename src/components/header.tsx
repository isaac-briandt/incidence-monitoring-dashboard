import { Menu, User2Icon } from "lucide-react";
import { Input } from "./ui/input";

interface Props {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  onMenuClick: () => void;
}

export function Header({ searchQuery, onSearchChange, onMenuClick }: Props) {
  return (
    <header className="w-full h-auto py-4 bg-white border-b border-gray-300 shadow flex flex-wrap items-center justify-between px-6">
      <div className="mb-2">
        <div className="md:hidden flex items-center gap-2">
          <button onClick={onMenuClick}>
            <Menu />
          </button>
          <p className="font-bold text-2xl text-blue-500">CoreNett</p>
        </div>
        <p className="text-lg font-semibold">
          <span className="text-red-500">Incident</span> Dashboard
        </p>
        <p className="text-sm text-muted-foreground">
          System Monitoring & Response
        </p>
      </div>

      <div className="md:w-fit w-full flex items-center justify-between gap-3">
        <div className="w-full">
          <Input
            placeholder="Filter by service, status, severity..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-64"
          />
        </div>
        <User2Icon size={30} className="text-gray-600" />
      </div>
    </header>
  );
}
