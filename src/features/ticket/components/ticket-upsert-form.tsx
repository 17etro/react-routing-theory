"use client";

import { Ticket } from "@prisma/client";
import { useActionState, useRef } from "react";
import { FieldError } from "@/components/form/field-error";
import { Form } from "@/components/form/form";
import { SubmitButton } from "@/components/form/submit-button";
import { EMPTY_ACTION_STATE } from "@/components/form/utils/to-action-state";
import {
  DatePicker,
  ImperativeHandleFromDatePicker,
} from "@/components/ui/date-picker";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { upsertTicket } from "../actions/upsert-ticket";

interface ITicketUpsertFormProps {
  ticket?: Ticket;
}

const TicketUpsertForm = ({ ticket }: ITicketUpsertFormProps) => {
  const datePickerImperativeHandleRef =
    useRef<ImperativeHandleFromDatePicker>(null);

  const [actionState, action] = useActionState(
    upsertTicket.bind(null, ticket?.id),
    EMPTY_ACTION_STATE
  );

  const handleSuccess = () => {
    datePickerImperativeHandleRef.current?.reset();
  };

  return (
    <Form action={action} actionState={actionState} onSuccess={handleSuccess}>
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

      <div className="flex gap-x-2 mb-1">
        <div className="w-1/2">
          <Label htmlFor="deadline">Deadline</Label>
          <DatePicker
            id="deadline"
            name="deadline"
            defaultValue={
              (actionState.payload?.get("deadline") as string) ??
              ticket?.deadline
            }
            imperativeHandleRef={datePickerImperativeHandleRef}
          />
          <FieldError actionState={actionState} name="deadline" />
        </div>
      </div>

      <SubmitButton label={ticket ? "Edit" : "Create"} />

      {actionState.message}
    </Form>
  );
};

export { TicketUpsertForm };
