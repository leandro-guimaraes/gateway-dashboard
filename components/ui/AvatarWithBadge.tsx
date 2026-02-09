import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/ui/avatar"

export function AvatarWithBadge() {
  return (
    <Avatar>
      <AvatarImage src="https://avatars.githubusercontent.com/u/85081592?v=4&size=64" alt="@shadcn" />
      <AvatarFallback>LG</AvatarFallback>
      <AvatarImage className="bg-green-600 dark:bg-green-800" />
    </Avatar>
  )
}

