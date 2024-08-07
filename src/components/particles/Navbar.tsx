import NavButton from "../atoms/NavButton"
import { Button } from "../ui/button";
import { ModeToggle } from '../mode-toggle.';


export default function Nav() {
  return (
    <div className="flex h-14 w-full items-center justify-between px-4 mt-1">
      {/* Left */}
      <div className="flex w-fit items-center justify-center space-x-4 mr-2">
        <NavButton text="PROJECTS" />
        <NavButton text="CONTACT" />
        <NavButton text="ABOUT US" />
        <ModeToggle/>
      </div>
      {/* Right */}
      <div className="flex w-fit items-center justify-center space-x-4">
        <Button variant={"default"} >
          Register
        </Button>
      </div>
    </div>
  );
}