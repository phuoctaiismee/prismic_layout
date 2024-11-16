import React from "react";
import NavigationMenuComponent from "./navigation";
import {Button} from "@/components/ui/button";
import ModeToggle from "../themes/mode-toggle";
import {ChevronDown, Globe, Grip, LayoutGrid} from "lucide-react";

const Header = () => {
    return (
        <header className="px-5 md:px-12 py-2 border-b border-b-neutral-100 sticky top-0 inset-x-0 bg-white dark:bg-neutral-900 z-50">
            <div className="w-full flex justify-between items-center">
                {/* HEADER LEFT */}
                <div className="flex w-full items-center">
                    <img src="/lalala.svg" className="w-14" alt="" />
                    <div className="w-full hidden lg:block">
                        <div className="flex justify-center items-center">
                            <NavigationMenuComponent />
                        </div>
                    </div>
                </div>
                {/* HEADER RIGHT */}
                <div className="flex justify-end items-center gap-3">
                    <div className="hidden md:block">
                        <div className="flex items-center gap-3">
                            <Button variant="ghost" className="h-12 px-1">
                                <Globe className="w-10 h-10" />
                                <span>EN</span>
                                <ChevronDown />
                            </Button>
                            <Button variant="ghost" className="h-12 px-1">
                                <span>USD</span>
                                <ChevronDown />
                            </Button>
                            <ModeToggle />
                            <Button className="rounded-full h-12" variant="outline">
                                Sign In
                            </Button>
                        </div>
                    </div>

                    <button className="rounded p-1 bg-yellow-300 h-11 w-11 flex items-center justify-center text-black hover:text-white">
                        <Grip className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
