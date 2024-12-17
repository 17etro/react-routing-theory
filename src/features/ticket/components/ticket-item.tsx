"use client";

import { Ticket } from "@prisma/client";
import clsx from "clsx";
import {
  LucideSquareArrowOutUpRight,
  LucideTrash,
  PencilIcon,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ticketEditPath, ticketPath } from "@/path";
import { deleteTicket } from "../actions/delete-ticket";
import { TICKET_ICONS } from "../constants";

interface TicketItemProps {
  ticket: Ticket;
  isDetail?: boolean;
}

const TicketItem: React.FC<TicketItemProps> = ({ ticket, isDetail }) => {
  if (!ticket) return null;

  const detailButton = (
    <Button variant="outline" asChild size="icon">
      <Link href={ticketPath(ticket.id)} className="text-sm">
        <LucideSquareArrowOutUpRight className="w-4 h-4" />
      </Link>
    </Button>
  );

  const editButton = (
    <Button variant="outline" asChild size="icon">
      <Link href={ticketEditPath(ticket.id)}>
        <PencilIcon className="w-4 h-4" />
      </Link>
    </Button>
  );

  const deleteButton = (
    <Button
      variant="outline"
      size="icon"
      onClick={deleteTicket.bind(null, ticket.id)}
    >
      <LucideTrash className="w-4 h-4" />
    </Button>
  );

  return (
    <div
      className={clsx("w-full flex gap-x-1", {
        " max-w-[420px]": !isDetail,
        "max-w-[580px]": isDetail,
      })}
    >
      <Card key={ticket.id} className="w-full">
        <CardHeader>
          <CardTitle className="flex gap-x-2">
            <span>{TICKET_ICONS[ticket.status]}</span>
            <span className="truncate">{ticket.title}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <span
            className={clsx("whitespace-break-spaces", {
              "line-clamp-3": !isDetail,
            })}
          >
            {ticket.content}
          </span>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-y-1">
        {isDetail ? (
          <>
            {deleteButton}
            {editButton}
          </>
        ) : (
          <>
            {detailButton}
            {editButton}
          </>
        )}
      </div>
    </div>
  );
};

export { TicketItem };
