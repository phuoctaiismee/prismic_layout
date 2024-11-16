import * as React from "react";

import {Button} from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {cn} from "@/lib/utils";

interface ProductProps {
    isFire?: boolean;
}
const ProductCard = ({isFire}: ProductProps) => {
    return (
        <Card
            className={cn(
                "p-0 flex-1 flex-col rounded-3xl relative overflow-hidden w-full hover:shadow-xl mb-8"
            )}
        >
            <div className={cn("relative aspect-square")}>
                <img
                    src="https://images.pexels.com/photos/28948702/pexels-photo-28948702/free-photo-of-reflection-of-historic-cathedral-in-puddle.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                    className="w-full h-full object-cover"
                />
                <button className="absolute top-5 right-5 w-8 h-8 bg-white flex flex-col items-center justify-center rounded-full ">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        className="w-6 h-6"
                    >
                        <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19.5 12.572L12 20l-7.5-7.428A5 5 0 1 1 12 6.006a5 5 0 1 1 7.5 6.572"
                        />
                    </svg>
                </button>
            </div>
            <div className="relative pt-2 -mt-16 rounded-3xl bg-white">
                <CardHeader>
                    <CardTitle
                        className={cn("line-clamp-2 leading-tight", {
                            "text-3xl": isFire,
                        })}
                    >
                        The High Roller Experience: Tickets for The LINQ Observation
                        Wheel, Las Vegas Strip
                    </CardTitle>
                    <div className="flex space-x-2 items-center text-neutral-500">
                        7 dáy 6 nights - Family
                    </div>
                </CardHeader>
                {isFire && (
                    <div className="absolute -top-5 left-5 px-2 py-[6px] rounded-full shadow text-sm bg-yellow-400">
                        <div className="flex items-center justify-cente gap-1 py-1 px-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    d="m13 2l.018.001l.016.001l.083.005l.011.002h.011l.038.009l.052.008l.016.006l.011.001l.029.011l.052.014l.019.009l.015.004l.028.014l.04.017l.021.012l.022.01l.023.015l.031.017l.034.024l.018.011l.013.012l.024.017l.038.034l.022.017l.008.01l.014.012l.036.041l.026.027l.006.009c.12.147.196.322.218.513l.001.012l.002.041L14 3v6h5a1 1 0 0 1 .868 1.497l-.06.091l-8 11C11.24 22.371 10 21.968 10 21v-6H5a1 1 0 0 1-.868-1.497l.06-.091l8-11l.01-.013l.018-.024l.033-.038l.018-.022l.009-.008l.013-.014l.04-.036l.028-.026l.008-.006a1 1 0 0 1 .402-.199l.011-.001l.027-.005l.074-.013l.011-.001l.041-.002z"
                                />
                            </svg>
                            <span className="font-semibold">Exceptional</span>
                        </div>
                    </div>
                )}

                <div
                    className={cn(
                        "absolute -top-5 right-5 px-2 py-[6px] rounded-full shadow text-sm bg-white"
                    )}
                >
                    <div className="flex items-center justify-cente gap-1 py-1 px-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                            className="text-yellow-500"
                        >
                            <path
                                fill="currentColor"
                                d="m8.243 7.34l-6.38.925l-.113.023a1 1 0 0 0-.44 1.684l4.622 4.499l-1.09 6.355l-.013.11a1 1 0 0 0 1.464.944l5.706-3l5.693 3l.1.046a1 1 0 0 0 1.352-1.1l-1.091-6.355l4.624-4.5l.078-.085a1 1 0 0 0-.633-1.62l-6.38-.926l-2.852-5.78a1 1 0 0 0-1.794 0z"
                            />
                        </svg>
                        <span className="font-semibold">5.00</span>
                    </div>
                </div>

                <CardFooter className="mt-5">
                    <div className="flex justify-between w-full items-center">
                        <span className="text-xl font-bold">
                            $17.32{" "}
                            <span className="text-sm font-light text-neutral-600">
                                / person
                            </span>
                        </span>
                        <Button
                            variant="secondary"
                            className="font-semibold rounded-full hover:bg-primary hover:text-white"
                        >
                            Book now
                        </Button>
                    </div>
                </CardFooter>
            </div>
        </Card>
    );
};

export default ProductCard;
