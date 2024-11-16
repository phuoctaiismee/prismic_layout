"use client";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Search} from "lucide-react";

const SearchContainer = () => {
    return (
        <form className="grid grid-cols-12 rounded-full border border-neutral-200 w-full overflow-hidden">
            <div className="col-span-7 pl-6 bg-neutral-100 w-full h-full">
                <div className="flex items-center h-full">
                    <Search className="w-6 h-6 text-neutral-700" />
                    <Input
                        placeholder="What are you looking for?"
                        className="block border-none focus:outline-none text-base xl:text-lg font-semibold truncate w-full py-6 h-full focus:ring-0 focus-visible:ring-0 bg-transparent focus-visible:ring-offset-0 focus-visible:ring-transparent focus-within:ring-0 border-2"
                    />
                </div>
            </div>
            <div className="col-span-5">
                <div className="flex items-center space-x-3 self-center h-full justify-center">
                    <Button className="rounded-full">Tours</Button>
                    <Button className="rounded-full" variant="ghost">
                        Hotel
                    </Button>
                    <Button className="rounded-full" variant="ghost">
                        Tickets
                    </Button>
                    <Button className="rounded-full" variant="ghost">
                        Rental
                    </Button>
                    <Button className="rounded-full" variant="ghost">
                        Activities
                    </Button>
                </div>
            </div>
        </form>
    );
};

export default SearchContainer;
