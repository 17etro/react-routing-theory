export interface Ticket {
  id: string;
  title: string;
  content: string;
  status: "OPEN" | "DONE" | "IN_PROGRESS";
}
