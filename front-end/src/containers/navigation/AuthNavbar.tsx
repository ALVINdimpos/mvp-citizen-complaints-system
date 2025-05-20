import { Link } from "react-router-dom";
import { Heading } from "@/components/inputs/TextInputs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Globe } from "lucide-react";

const AuthNavbar = () => {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="hover:opacity-80">
          <Heading type="h2" className="text-blue-700">
            CivicLink Portal
          </Heading>
        </Link>

        <div>
          <Select defaultValue="en">
            <SelectTrigger className="w-36">
              <Globe className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="fr">Français</SelectItem>
              <SelectItem value="kin">Kinyarwanda</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </header>
  );
};

export default AuthNavbar;
