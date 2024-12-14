import clsx from "clsx";
import { LucideSquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ticketPath } from "@/path";
import { TICKET_ICONS } from "../constants";
import { Ticket } from "../types";

interface TicketItemProps {
  ticket: Ticket;
  isDetail?: boolean;
}

const TicketItem: React.FC<TicketItemProps> = ({ ticket, isDetail }) => {
  const detailButton = (
    <Button variant="outline" asChild size="icon">
      <Link href={ticketPath(ticket.id)} className="text-sm">
        <LucideSquareArrowOutUpRight className="w-4 h-4" />
      </Link>
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

      {!isDetail && <div className="flex flex-col gap-y-1">{detailButton}</div>}
    </div>
  );
};

export { TicketItem };
