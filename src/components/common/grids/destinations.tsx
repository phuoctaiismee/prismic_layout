import {Button} from "@/components/ui/button";
import Bounded from "../containers/bounded";
import {ArrowRight} from "lucide-react";

const destinations = [
    {
        name: "Venice",
        image: "https://travila-nextjs.vercel.app/assets/imgs/page/homepage1/popular.png",
        info: {
            tour: 356,
            active: 248,
        },
    },
    {
        name: "Venice",
        image: "https://travila-nextjs.vercel.app/assets/imgs/page/homepage1/popular2.png",
        info: {
            tour: 356,
            active: 248,
        },
    },
    {
        name: "Venice",
        image: "https://travila-nextjs.vercel.app/assets/imgs/page/homepage1/popular3.png",
        info: {
            tour: 356,
            active: 248,
        },
    },
    {
        name: "Venice",
        image: "https://travila-nextjs.vercel.app/assets/imgs/page/homepage1/popular4.png",
        info: {
            tour: 356,
            active: 248,
        },
    },
    {
        name: "Venice",
        image: "https://travila-nextjs.vercel.app/assets/imgs/page/homepage1/popular5.png",
        info: {
            tour: 356,
            active: 248,
        },
    },
    {
        name: "Venice",
        image: "https://travila-nextjs.vercel.app/assets/imgs/page/homepage1/popular6.png",
        info: {
            tour: 356,
            active: 248,
        },
    },
    {
        name: "Venice",
        image: "https://travila-nextjs.vercel.app/assets/imgs/page/homepage1/popular7.png",
        info: {
            tour: 356,
            active: 248,
        },
    },
];
const Destinations = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
            {destinations.map((des, index) => (
                <div
                    className="border p-4 rounded-3xl hover:-translate-y-1 transition-transform duration-150"
                    key={index}
                >
                    <div className="w-full rounded-3xl overflow-hidden">
                        <img src={des.image} alt="" className="pointer-events-none" />
                    </div>
                    <h3 className="font-bold text-xl mt-5">{des.name}</h3>
                    <div className="flex justify-between items-center">
                        <p className="mt-2 text-sm">
                            {des.info.tour} Tours, {des.info.active} Actives
                        </p>
                        <Button size="icon" variant="secondary" className="rounded-full">
                            <ArrowRight className="text-neutral-600" />
                        </Button>
                    </div>
                </div>
            ))}
            <div className="border p-4 rounded-3xl flex flex-col justify-between">
                <h3 className="font-bold text-2xl mt-5 w-2/3">
                    Crafting Your Perfect Travel Experience
                </h3>
                <div className="w-full rounded-2xl overflow-hidden py-3 bg-black flex items-center justify-between px-5">
                    <p className="text-white font-bold text-lg">
                        Browse <br />
                        All destinations
                    </p>
                    <Button size="icon" variant="secondary" className="rounded-full">
                        <ArrowRight className="text-neutral-600" />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Destinations;
