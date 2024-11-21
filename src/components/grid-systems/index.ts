export const GridCol = (col_number: number) =>
    `grid-cols-${Math.min(Math.max(col_number, 1), 24)}`;

export const GridRow = (row_number: number) =>
    `grid-rows-${Math.min(Math.max(row_number, 1), 24)}`;

export const SpanCol = (col_span_number: number) =>
    `col-span-${Math.min(Math.max(col_span_number, 1), 24)}`;

export const SpanRow = (row_span_number: number) =>
    `row-span-${Math.min(Math.max(row_span_number, 1), 24)}`;

export const ColStart = (col_start_number: number) =>
    `col-start-${Math.min(Math.max(col_start_number, 1), 24)}`;

export const RowStart = (row_start_number: number) =>
    `row-start-${Math.min(Math.max(row_start_number, 1), 24)}`;


// Define a single grid or flex item
interface GridItem {
    id?: string; // Optional slice ID for identifying slices
    columns?: string; // Number of columns (for grid layout)
    rows?: string; // Number of rows (for grid layout)
    colspan?: string; // Number of columns to span
    rowspan?: string; // Number of rows to span
    gap?: string; // Gap between items (applies to grid layout)
    type: "grid" | "flex"; // Determines if the container is grid or flex
    justifyContent?: "flex-start" | "center" | "flex-end" | "space-between" | "space-around" | "space-evenly"; // Flexbox alignment on the main axis
    alignItems?: "flex-start" | "center" | "flex-end" | "stretch" | "baseline"; // Flexbox alignment on the cross axis
    style?: React.CSSProperties; // Inline styles for the item
    childs?: GridItem[]; // Nested child components
}

// Define the container configuration for a page
interface ContainerConfig {
    page: string; // The name of the page
    container: GridItem; // The root container for the page layout
}

export type { GridItem, ContainerConfig };


// Map JSON justifyContent to Tailwind classes
export const mapJustifyContent = (value?: string) => {
    switch (value) {
        case "flex-start":
            return "justify-start";
        case "flex-end":
            return "justify-end";
        case "center":
            return "justify-center";
        case "space-between":
            return "justify-between";
        case "space-around":
            return "justify-around";
        case "space-evenly":
            return "justify-evenly";
        default:
            return "";
    }
};
