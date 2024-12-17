"use client";

import { LucideLoaderCircle } from "lucide-react";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";

interface SubmitButtonProps {
  label?: string;
}

const SubmitButton = ({ label }: SubmitButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending}>
      {pending && <LucideLoaderCircle className="mr-2 w-4 h-4 animate-spin" />}
      {label}
    </Button>
  );
};

export { SubmitButton };
