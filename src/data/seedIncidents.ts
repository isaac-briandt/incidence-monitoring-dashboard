import type { Incident } from "../types/incident";

const now = Date.now();
const minutes = (m: number) => m * 60 * 1000;
const hours = (h: number) => h * 60 * 60 * 1000;

export const seedIncidents: Incident[] = [
  {
    id: "1",
    title: "Payments failing for EU users",
    service: "Payments",
    severity: "critical",
    status: "OPEN",
    createdAt: now - hours(2),
    updatedAt: now - hours(2),
    timeline: [],
  },
  {
    id: "2",
    title: "Elevated API latency",
    service: "API",
    severity: "high",
    status: "INVESTIGATING",
    createdAt: now - hours(1),
    updatedAt: now - minutes(45),
    timeline: [
      {
        id: crypto.randomUUID(),
        type: "status_change",
        message: "Incident acknowledged and under investigation",
        timestamp: now - minutes(45),
      },
    ],
  },
  {
    id: "3",
    title: "Email notifications delayed",
    service: "Notifications",
    severity: "medium",
    status: "OPEN",
    createdAt: now - minutes(50),
    updatedAt: now - minutes(50),
    timeline: [],
  },
  {
    id: "4",
    title: "User login failures on mobile",
    service: "Auth",
    severity: "high",
    status: "INVESTIGATING",
    createdAt: now - minutes(40),
    updatedAt: now - minutes(20),
    timeline: [
      {
        id: crypto.randomUUID(),
        type: "comment",
        message: "Mobile app users experiencing login issues",
        timestamp: now - minutes(20),
      },
    ],
  },
  {
    id: "5",
    title: "Dashboard reporting incorrect metrics",
    service: "Analytics",
    severity: "low",
    status: "MITIGATED",
    createdAt: now - hours(3),
    updatedAt: now - hours(1),
    timeline: [
      {
        id: crypto.randomUUID(),
        type: "status_change",
        message: "Rolled back recent analytics pipeline changes",
        timestamp: now - hours(1),
      },
    ],
  },
  {
    id: "6",
    title: "Webhook deliveries intermittently failing",
    service: "Integrations",
    severity: "medium",
    status: "OPEN",
    createdAt: now - minutes(25),
    updatedAt: now - minutes(25),
    timeline: [],
  },
  {
    id: "7",
    title: "Search service returning stale results",
    service: "Search",
    severity: "low",
    status: "RESOLVED",
    createdAt: now - hours(6),
    updatedAt: now - hours(4),
    timeline: [
      {
        id: crypto.randomUUID(),
        type: "status_change",
        message: "Cache invalidation issue fixed",
        timestamp: now - hours(4),
      },
    ],
  },
];
