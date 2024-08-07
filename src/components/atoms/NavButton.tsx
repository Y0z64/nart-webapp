import { Button } from "../ui/button"

type NavButtonProps = {
  text?: string
  onClick?: () => void
}

export default function NavButton({ text, onClick }: NavButtonProps) {
  return (
    <Button variant={"outline"} onClick={onClick} className="px-4 h-10 rounded-full text-xl" size={"lg"}>
      {text}
    </Button>
  )
}