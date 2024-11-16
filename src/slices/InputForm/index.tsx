import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Content} from "@prismicio/client";
import {SliceComponentProps} from "@prismicio/react";

/**
 * Props for `InputForm`.
 */
export type InputFormProps = SliceComponentProps<Content.InputFormSlice>;

/**
 * Component for "InputForm" Slices.
 */
const InputForm = ({slice}: InputFormProps): JSX.Element => {
    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
        >
            <form className="flex items-center border rounded-full bg-white">
                <Input
                    className="border-0 h-16 py-5 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 ml-5 !text-lg "
                    placeholder="Your email"
                />
                <Button className="rounded-full h-16 px-10 py-5">Submit</Button>
            </form>
            <p className="text-sm text-neutral-500 mt-6">
                No ads. No trails. No commitments
            </p>
        </section>
    );
};

export default InputForm;
