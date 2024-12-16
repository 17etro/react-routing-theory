import { Kanban } from "lucide-react";
import Link from "next/link";
import { homePath, ticketsPath } from "@/path";
import { ThemeSwitcher } from "./theme/theme-switcher";
import { buttonVariants } from "./ui/button";

const Header = () => {
  return (
    <nav
      className="
    animate-header-from-top
    supports-backdrop-blur:bg-background/60
    fixed left-0 right-0 top-0 z-20
    border-b bg-background/95 backdrop-blur
    w-full flex py-2.5 px-5 justify-between
  "
    >
      <div className="flex items-center gap-x-2">
        <Link
          href={homePath()}
          className={buttonVariants({ variant: "ghost" })}
        >
          <Kanban />
          <h1 className="ml-2 text-lg font-semibold">TicketBounty</h1>
        </Link>
      </div>
      <div className="flex items-center gap-x-2">
        <ThemeSwitcher />
        <Link
          href={ticketsPath()}
          className={buttonVariants({ variant: "default" })}
        >
          Tickets
        </Link>
      </div>
    </nav>
  );
};

export { Header };