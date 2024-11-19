import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

const filterOptions = [
    {
        label: "Categories",
        items: ["Attractives", "Active", "Nature"],
    },
    {
        label: "Duration",
        items: ["4 Hours", "8 Hours", "2 Days"],
    },
    {
        label: "Review / Rating",
        items: ["Newest", "Oldest"],
    },
    {
        label: "Price range",
        items: ["$10 - $100", "$100 - $1.000", "$1.000 - $10.000"],
    },
    {
        label: "Language",
        items: ["English", "Japanese", "Chinese", "Vietnamese"],
    },
];

const FilterSectionComp = () => {
    return (
        <div className="flex flex-wrap lg:flex-nowrap items-center gap-2">
            {filterOptions.map((option, index) => (
                <DropdownMenu key={index}>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="rounded-full bg-neutral-100">
                            <span>{option.label}</span>
                            <ChevronDown className="w-6 h-6 text-neutral-500" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                        {option.items.map((item, itemIndex) => (
                            <DropdownMenuItem
                                key={itemIndex}
                                className={`px-2 py-3 ${itemIndex === 0 ? "bg-neutral-700 text-white" : ""}`}
                            >
                                {item}
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            ))}
        </div>
    );
};

export default FilterSectionComp;
