import Link from "next/link";
import { ModeToggle } from "../theme/toggle-theme";

export function Navbar() {
  return (
    <nav className="flex h-20 items-center justify-between px-10">
      <div>
        <Link href="/">
          <h1>Asthonishing Commerce</h1>
        </Link>
      </div>

      <div>
        <ModeToggle />
      </div>
    </nav>
  );
}
