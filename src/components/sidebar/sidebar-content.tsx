import { CorenettLogo } from "@/assets/assets";
import {
  InfoIcon,
  ServerIcon,
  PhoneCallIcon,
  Bell,
  UserCog,
} from "lucide-react";
import type { SidebarProps, AppSidebarTab } from "./sidebar";

export default function SidebarContent({
  activeTab,
  onTabChange,
}: SidebarProps) {
  const itemClasses = (tab: AppSidebarTab) =>
    `px-3 py-2 rounded cursor-pointer transition ${
      activeTab === tab ? "bg-white/15" : "opacity-80 hover:bg-white/10"
    }`;

  return (
    <>
      {/* Logo */}
      <div className="px-4 my-6 flex items-center">
        <img
          src={CorenettLogo}
          alt="logo"
          className="object-contain"
          width={80}
          height={80}
        />
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 space-y-6 text-sm">
        <div>
          <p className="uppercase text-xs opacity-70 mb-2">Main</p>
          <ul className="space-y-2">
            <li
              className={`flex items-center gap-2 ${itemClasses("INCIDENTS")}`}
              onClick={() => onTabChange("INCIDENTS")}
            >
              <InfoIcon size={14} />
              Incidents
            </li>

            <li
              className={`flex items-center gap-2 ${itemClasses("SERVICES")}`}
              onClick={() => onTabChange("SERVICES")}
            >
              <ServerIcon size={14} />
              Services
            </li>

            <li
              className={`flex items-center gap-2 ${itemClasses("ON_CALL")}`}
              onClick={() => onTabChange("ON_CALL")}
            >
              <PhoneCallIcon size={14} />
              On-call
            </li>

            <li
              className={`flex items-center gap-2 ${itemClasses("NOTIFICATIONS")}`}
              onClick={() => onTabChange("NOTIFICATIONS")}
            >
              <Bell size={14} />
              Notifications
            </li>

            <li
              className={`flex items-center gap-2 ${itemClasses("PREFERENCES")}`}
              onClick={() => onTabChange("PREFERENCES")}
            >
              <UserCog size={14} />
              Preferences
            </li>
          </ul>
        </div>
      </nav>

      {/* Footer */}
      <div className="px-4 py-4 text-xs opacity-70">Logged in as You</div>
    </>
  );
}
