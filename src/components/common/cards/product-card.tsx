import * as React from "react";

import {Button} from "@/components/ui/button";
import {Card, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {cn} from "@/lib/utils";
// types/Product.ts
export interface Product {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    isFire: boolean;
    daysAndNights: string;
    rating: number;
    price: number;
    currency: string;
} // components/cards/ProductCard.tsx
interface ProductProps {
    product: Product;
}
const ProductCard = ({product}: ProductProps) => {
    const {isFire, title, description, imageUrl, daysAndNights, rating, price, currency} =
        product;

    return (
        <Card
            className={cn(
                "p-0 flex-1 flex-col rounded-3xl relative overflow-hidden w-full hover:shadow-xl mb-8"
            )}
        >
            <div className={cn("relative aspect-square")}>
                <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
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
                            strokeWidth="1"
                            d="M19.5 12.572L12 20l-7.5-7.428A5 5 0 1 1 12 6.006a5 5 0 1 1 7.5 6.572"
                        />
                    </svg>
                </button>
            </div>
            <div className="relative pt-2 -mt-16 rounded-3xl bg-white">
                <CardHeader>
                    <CardTitle
                        className={cn("line-clamp-2 leading-tight", {"text-3xl": isFire})}
                    >
                        {title}
                    </CardTitle>
                    <div className="flex space-x-2 items-center text-neutral-500">
                        {daysAndNights}
                    </div>
                </CardHeader>

                {isFire && (
                    <div className="absolute -top-5 left-5 px-2 py-[6px] rounded-full shadow text-sm bg-yellow-400">
                        <div className="flex items-center justify-center gap-1 py-1 px-3">
                            <span className="font-semibold">Exceptional</span>
                        </div>
                    </div>
                )}

                {/* Rating display */}
                <div className="absolute -top-5 right-5 px-2 py-[6px] rounded-full shadow text-sm bg-white">
                    <div className="flex items-center justify-center gap-1 py-1 px-3">
                        <span className="font-semibold">{rating.toFixed(2)}</span>
                    </div>
                </div>

                <CardFooter className="mt-5">
                    <div className="flex justify-between w-full items-center">
                        <span className="text-xl font-bold">
                            ${price.toFixed(2)}{" "}
                            <span className="text-sm font-light text-neutral-600">
                                / day
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
