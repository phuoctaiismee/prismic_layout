import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import CarouselExploreComp from "@/components/common/carousels/explore";

/**
 * Props for `CarouselExplore`.
 */
export type CarouselExploreProps =
  SliceComponentProps<Content.CarouselExploreSlice>;

/**
 * Component for "CarouselExplore" Slices.
 */
const CarouselExplore = ({ slice }: CarouselExploreProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
    <CarouselExploreComp/>
    </section>
  );
};

export default CarouselExplore;
