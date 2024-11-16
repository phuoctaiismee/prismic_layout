import {Button} from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {ArrowDownUp} from "lucide-react";

const SortSectionComp = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="rounded-full">
                    <span>Sort from High to Low</span>
                    <ArrowDownUp className="w-6 h-6 text-neutral-500" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
                <DropdownMenuItem className="px-2 py-3 bg-neutral-700 text-white">
                    Default Sorting
                </DropdownMenuItem>
                <DropdownMenuItem className="px-2 py-3">
                    Sort from High to Low
                </DropdownMenuItem>
                <DropdownMenuItem className="px-2 py-3">
                    Comments products
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default SortSectionComp;
