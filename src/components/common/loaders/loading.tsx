import React from "react";
import clsx from "clsx";
import { Loader } from "lucide-react";

type LoadingProps = {
    isLoading: boolean;
    color?: string; // Optional: customize the shimmer base color
};

const Loading: React.FC<LoadingProps> = ({ isLoading, color = "bg-slate-100" }) => {
    if (!isLoading) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div
                className={clsx(
                    "relative space-y-5 overflow-hidden rounded-2xl p-4 shadow-xl",
                    "bg-white dark:bg-gray-800",
                    "before:absolute before:inset-0 before:-translate-x-full before:animate-shimmer",
                    "before:border-t before:border-slate-100/10 before:bg-gradient-to-r",
                    "before:from-transparent before:via-white/70 dark:before:via-gray-700 before:to-transparent"
                )}
            >
                <Loader className="w-10 h-10 animate-spin" />
            </div>
        </div>
    );
};

export default Loading;
