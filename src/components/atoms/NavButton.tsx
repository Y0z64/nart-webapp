import { Button } from "../ui/button"

type NavButtonProps = {
  text?: string
  onClick?: () => void
}

export default function NavButton({ text, onClick }: NavButtonProps) {
  return (
    <Button variant={"outline"} onClick={onClick} className="px-4 py-0 rounded-full text-lg" size={"lg"}>
      {text}
    </Button>
  )
}