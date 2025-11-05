"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const UserDropdown = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    await router.push("/sign-in");
  };

  const user = {
    name: "John Doe",
    email: "m0t1u@example.com",
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="lg">
          <Avatar className="h-8 w-8">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>{user.name[0]}</AvatarFallback>
          </Avatar>
          <div className="hidden md:flex flex-col items-start">
            <span className="text-sm font-medium leading-none">
              {user.name}
            </span>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>My Account</DropdownMenuItem>
        <DropdownMenuSeparator />
        <div className="sm:hidden">
          <DropdownMenuItem>Dashboard</DropdownMenuItem>
          <DropdownMenuItem>Search</DropdownMenuItem>
          <DropdownMenuItem>Warchlist</DropdownMenuItem>
        </div>
        <DropdownMenuItem onClick={handleSignOut}>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdown;
