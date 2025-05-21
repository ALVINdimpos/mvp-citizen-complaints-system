import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User } from "lucide-react";
import { useMemo } from "react";
import { Link } from "react-router-dom";

const PublicNavbar = () => {
  const navItems = useMemo(
    () => [
      { to: "#features", label: "Features" },
      { to: "#workflow", label: "Process" },
      { to: "#partners", label: "Partners" },
      { to: "#help", label: "Help Center" },
    ],
    []
  );

  return (
    <nav className="sticky top-0 z-50 bg-blue-50/90 backdrop-blur border-b border-blue-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link
            to="/"
            className="text-blue-800 text-2xl font-extrabold tracking-tight"
          >
            Citizen Complaints System
          </Link>

          <div className="hidden sm:flex gap-6">
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.to}
                className="text-gray-700 hover:text-blue-700 text-sm font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/auth/login"
              className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Report Now
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-10 w-10 p-0">
                  <User className="w-6 h-6 text-blue-800" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>Welcome to CivicLink</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/auth/login">Citizen Login</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/auth/login">Agency Login</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/auth/login">Admin Login</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  asChild
                  className="text-blue-700 font-semibold"
                >
                  <Link to="/auth/register">Create Account</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default PublicNavbar;
