"use client";

import { Ticket } from "@prisma/client";
import { useActionState } from "react";
import { toast } from "sonner";
import { FieldError } from "@/components/form/field-error";
import { useActionFeedback } from "@/components/form/hooks/use-action-feedback";
import { SubmitButton } from "@/components/form/submit-button";
import { EMPTY_ACTION_STATE } from "@/components/form/utils/to-action-state";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { upsertTicket } from "../actions/upsert-ticket";

interface ITicketUpsertFormProps {
  ticket?: Ticket;
}

const TicketUpsertForm = ({ ticket }: ITicketUpsertFormProps) => {
  const [actionState, action] = useActionState(
    upsertTicket.bind(null, ticket?.id),
    EMPTY_ACTION_STATE
  );

  useActionFeedback(actionState, {
    onSuccess: ({ actionState }) => {
      if (actionState.message) {
        toast.success(actionState.message);
      }
    },
    onError: ({ actionState }) => {
      if (actionState.message) {
        toast.error(actionState.message);
      }
    },
  });

  return (
    <form action={action} className="flex flex-col gap-y-2">
      <Label htmlFor="title">Title</Label>
      <Input
        id="title"
        type="text"
        name="title"
        defaultValue={
          (actionState.payload?.get("title") as string) ?? ticket?.title
        }
      />
      <FieldError actionState={actionState} name="title" />

      <Label htmlFor="title">Content</Label>
      <Textarea
        id="content"
        name="content"
        defaultValue={
          (actionState.payload?.get("content") as string) ?? ticket?.content
        }
      />
      <FieldError actionState={actionState} name="content" />

      <SubmitButton label={ticket ? "Edit" : "Create"} />

      {actionState.message}
    </form>
  );
};

export { TicketUpsertForm };