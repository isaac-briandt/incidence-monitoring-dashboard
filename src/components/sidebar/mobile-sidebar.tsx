import type { SidebarProps } from "./sidebar";
import SidebarContent from "./sidebar-content";

export function MobileSidebar({
  activeTab,
  onTabChange,
  onClose,
}: SidebarProps & { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      <aside className="relative w-64 h-full bg-emerald-950 text-white flex flex-col">
        <SidebarContent
          activeTab={activeTab}
          onTabChange={(tab) => {
            onTabChange(tab);
            onClose();
          }}
        />
      </aside>
    </div>
  );
}
