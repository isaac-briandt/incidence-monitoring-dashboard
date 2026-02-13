# Incident Management Dashboard

A small incident management dashboard built with **React, TypeScript, and Tailwind CSS**.  
The app allows users to view incidents, update their status through valid transitions, and leave audit notes for each change.

---

## Features

- View a list of incidents
- Select an incident to view details
- Update incident status using predefined valid transitions
- Add mandatory notes when changing status
- Timeline tracking for all status changes
- Persistent state using `localStorage`

---

## Tech Stack

- React
- TypeScript
- Tailwind CSS
- ShadCN

---

## Design Decisions

- **useReducer** was used to centralize incident state management
- Status transitions are enforced using a `VALID_TRANSITIONS` map
- Timeline entries are immutable and appended per change
- Local storage ensures data persistence across refreshes

---

## To-Do

- Properly implement filters and search as it does not currently give expected results.

---

## How to Run

```bash
npm install
npm run dev
```
