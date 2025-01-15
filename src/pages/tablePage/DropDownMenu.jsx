import { DropdownMenu, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuContent } from "@/components/ui/dropdown-menu";
import { MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";

const DropdownMenuComponent = ({ rowId }) => {
  const handleView = (id) => {
    console.log("Viewing row with id:", id);
  };

  const handleEdit = (id) => {
    console.log("Editing row with id:", id);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreVertical className="h-4 w-4 font-[700]" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="center"
        className="w-[140px] h-[100px] p-2 bg-white rounded-md"
      >
        <DropdownMenuItem onClick={() => handleView(rowId)}>View</DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleEdit(rowId)}>Edit</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownMenuComponent;
