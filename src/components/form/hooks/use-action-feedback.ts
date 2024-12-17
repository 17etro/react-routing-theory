import { useEffect, useRef } from "react";
import { ActionState } from "../utils/to-action-state";

interface OnArgs {
  actionState: ActionState;
}

interface Options {
  onSuccess?: ({ actionState }: OnArgs) => void;
  onError?: ({ actionState }: OnArgs) => void;
}

const useActionFeedback = (
  actionState: ActionState,
  { onSuccess, onError }: Options
) => {
  const prevTimestamp = useRef(actionState.timestamp);
  const isUpdate = prevTimestamp.current !== actionState.timestamp;

  useEffect(() => {
    if (!isUpdate) return;

    if (actionState.status === "SUCCESS") {
      onSuccess?.({ actionState });
    }

    if (actionState.status === "ERROR") {
      onError?.({ actionState });
    }

    prevTimestamp.current = actionState.timestamp;
  }, [isUpdate, actionState, onSuccess, onError]);
};

export { useActionFeedback };
