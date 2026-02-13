import SidebarContent from "./sidebar-content";

export type AppSidebarTab =
  | "INCIDENTS"
  | "SERVICES"
  | "ON_CALL"
  | "NOTIFICATIONS"
  | "PREFERENCES";

export interface SidebarProps {
  activeTab: AppSidebarTab;
  onTabChange: (tab: AppSidebarTab) => void;
}

export function Sidebar({ activeTab, onTabChange }: SidebarProps) {
  return (
    <aside className="hidden md:flex w-64 bg-emerald-950 text-white flex-col h-screen">
      <SidebarContent activeTab={activeTab} onTabChange={onTabChange} />
    </aside>
  );
}
