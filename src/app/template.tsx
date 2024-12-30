

import { RedirectToast } from "@/components/redirect-toast";

interface IRootTemplateProps {
  children: React.ReactNode;
}

export default function RootTemplate({ children }: IRootTemplateProps) {
  return (
    <>
      <>{children}</>
      <RedirectToast />
    </>
  );
}
