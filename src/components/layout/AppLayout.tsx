import { useState } from "react";
import IncidentPage from "../pages/IncidentPage";
import { Header } from "../header";
import { Sidebar, type AppSidebarTab } from "../sidebar/sidebar";
import { ConstructionIcon } from "lucide-react";
import { MobileSidebar } from "../sidebar/mobile-sidebar";

export function AppLayout() {
  const [activeTab, setActiveTab] = useState<AppSidebarTab>("INCIDENTS");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const renderContent = () => {
    if (activeTab === "INCIDENTS") {
      return <IncidentPage />;
    }

    return (
      <div className="h-full flex items-center justify-center">
        <div className="flex flex-col justify-center items-center">
          <ConstructionIcon />
          <p className="text-muted-foreground text-lg">
            Page Under construction
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="h-screen flex bg-gray-100">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />

      {sidebarOpen && (
        <MobileSidebar
          activeTab={activeTab}
          onTabChange={(tab) => {
            setActiveTab(tab);
            setSidebarOpen(false);
          }}
          onClose={() => setSidebarOpen(false)}
        />
      )}

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header
          onMenuClick={() => setSidebarOpen(true)}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />
        <main className="flex-1 overflow-y-auto p-6">{renderContent()}</main>
      </div>
    </div>
  );
}
