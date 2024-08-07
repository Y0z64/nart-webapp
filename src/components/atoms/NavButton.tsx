import { Button } from "../ui/button"

type NavButtonProps = {
  text?: string
  link?: string
  onClick?: () => void
}

export default function NavButton({ text, link, onClick }: NavButtonProps) {
  return (
    <a href={link} className="w-fit h-fit">
      <Button variant={"outline"} onClick={onClick} size={"lg"} className="px-4 h-8 md:h-10 rounded-full text-xl">
        {text}
      </Button>
    </a>
  )
}