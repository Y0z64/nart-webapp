import NavButton from "../atoms/NavButton"
import { Button } from "../ui/button";
import { ModeToggle } from '../mode-toggle.';


export default function Nav() {
  return (
    <div className="mt-1 flex h-14 w-full items-center justify-between px-4">
      {/* Left */}
      <div className="mr-2 flex w-fit items-center justify-center space-x-3">
        <NavButton text="PROJECTS" />
        <NavButton text="CONTACT" />
        <NavButton text="ABOUT US" />
        <ModeToggle />
      </div>
      {/* Right */}
      <div className="flex w-fit items-center justify-center space-x-4">
        <Button variant={"default"} className="rounded-full px-4 text-lg">
          Register
        </Button>
      </div>
    </div>
  );
}