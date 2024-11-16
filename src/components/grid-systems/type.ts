
interface GridItem {
    sliceId?: string; // sliceId is optional
    col: number; // Position within the container
    row: number; // Position within the container
    colspan?: number; // Spanning columns in the container
    rowspan?: number; // Spanning rows in the container'
    colStart?: number,
    rowStart?: number,
    gap?: number; // Length of
    childs?: GridItem[]; // Child components (can be recursively nested)
    style?: CSSStyleDeclaration

}

interface ContainerConfig {
    page: string;
    container: GridItem;
}

export type { GridItem, ContainerConfig };


//-------------------------V2------------------------
interface Page {
    page: string;
    sections: Section[]; // Điều chỉnh thành mảng của Section
}

interface Section {
    id: string;
    background?: Background; // Đối tượng background
    layout?: Layout; // Đối tượng layout

}

interface Background {
    className: string; // Class cho nền
}

interface Layout {
    className: string; // Class cho layout
    childs?: Section[];
}

export type { Page, Section };
