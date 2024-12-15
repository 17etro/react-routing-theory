import { initialTickets } from "@/data";
import { Ticket } from "../types";

export const getTicket = async (ticketId: string): Promise<Ticket | null> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const ticket = initialTickets.find((ticket) => ticket.id === ticketId);

      resolve(ticket || null);
    }, 2000);
  });
};
