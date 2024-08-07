import { Button } from "../ui/button"

type NavButtonProps = {
  text?: string
  onClick?: () => void
}

export default function NavButton({ text, onClick }: NavButtonProps) {
  return (
    <Button variant={"ghost"} onClick={onClick} className="px-4 py-2 rounded-xl">
      {text}
    </Button>
  )
}