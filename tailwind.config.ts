import type { Config } from "tailwindcss";

const generateGridColsClasses = (breakpoints: string[], maxCols: number) => {
    return breakpoints.flatMap((bp) =>
        Array.from({ length: maxCols }, (_, i) => `${bp}:grid-cols-${i + 1}`)
    );
};

const generateGapClasses = (breakpoints: string[], maxGap: number) => {
    return breakpoints.flatMap((bp) =>
        Array.from({ length: maxGap }, (_, i) => `${bp}:gap-${i + 1}`)
    );
};
export default {
    darkMode: ["class"],
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx,json}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx,json}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx,json}",
        "./src/slices/**/*.{js,ts,jsx,tsx,mdx,json}",
        "./src/**/*.{js,ts,jsx,tsx,mdx,json}",
    ],
    safelist: [
        // Grid columns
        ...Array.from({ length: 24 }, (_, i) => `grid-cols-${i + 1}`),
        // Grid rows
        ...Array.from({ length: 24 }, (_, i) => `grid-rows-${i + 1}`),
        // Col span
        ...Array.from({ length: 24 }, (_, i) => `col-span-${i + 1}`),
        // Row span
        ...Array.from({ length: 24 }, (_, i) => `row-span-${i + 1}`),
        // Col start
        ...Array.from({ length: 24 }, (_, i) => `col-start-${i + 1}`),
        // Row start
        ...Array.from({ length: 24 }, (_, i) => `row-start-${i + 1}`),
        // Flexbox classes
        "flex", // Base flex container
        "inline-flex", // Inline flex container
        ...[
            "flex-row",
            "flex-row-reverse",
            "flex-col",
            "flex-col-reverse",
        ], // Flex directions
        ...[
            "justify-start",
            "justify-end",
            "justify-center",
            "justify-between",
            "justify-around",
            "justify-evenly",
        ], // Justify content
        ...[
            "items-start",
            "items-end",
            "items-center",
            "items-baseline",
            "items-stretch",
        ], // Align items
        ...[
            "content-start",
            "content-end",
            "content-center",
            "content-between",
            "content-around",
            "content-evenly",
        ], // Align content
        ...[
            "self-auto",
            "self-start",
            "self-end",
            "self-center",
            "self-stretch",
        ], // Align self
        ...Array.from({ length: 24 }, (_, i) => `gap-${i + 1}`), // Gap utilities
        // Add dynamic grid cols classes
        ...generateGridColsClasses(["sm", "md", "lg", "xl", "2xl"], 24),
        // Add dynamic gap classes
        ...generateGapClasses(["sm", "md", "lg", "xl", "2xl"], 12),
    ],
    theme: {
        extend: {
            colors: {
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))'
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))'
                },
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))'
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))'
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))'
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))'
                },
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                chart: {
                    '1': 'hsl(var(--chart-1))',
                    '2': 'hsl(var(--chart-2))',
                    '3': 'hsl(var(--chart-3))',
                    '4': 'hsl(var(--chart-4))',
                    '5': 'hsl(var(--chart-5))'
                }
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            container: {
                padding: {
                    DEFAULT: "1rem",
                    // "2xl": "8rem",
                },
            },
            gridTemplateColumns: {
                '13': 'repeat(13, minmax(0, 1fr))',
                '14': 'repeat(14, minmax(0, 1fr))',
                '15': 'repeat(15, minmax(0, 1fr))',
                '16': 'repeat(16, minmax(0, 1fr))',
                '17': 'repeat(17, minmax(0, 1fr))',
                '18': 'repeat(18, minmax(0, 1fr))',
                '19': 'repeat(19, minmax(0, 1fr))',
                '20': 'repeat(20, minmax(0, 1fr))',
                '21': 'repeat(21, minmax(0, 1fr))',
                '22': 'repeat(22, minmax(0, 1fr))',
                '23': 'repeat(23, minmax(0, 1fr))',
                '24': 'repeat(24, minmax(0, 1fr))',
            },
            gridColumn: {
                'span-13': 'span 13 / span 13',
                'span-14': 'span 14 / span 14',
                'span-15': 'span 15 / span 15',
                'span-16': 'span 16 / span 16',
                'span-17': 'span 17 / span 17',
                'span-18': 'span 18 / span 18',
                'span-19': 'span 19 / span 19',
                'span-20': 'span 20 / span 20',
                'span-21': 'span 21 / span 21',
                'span-22': 'span 22 / span 22',
                'span-23': 'span 23 / span 23',
                'span-24': 'span 24 / span 24',
            },
            gridRow: {
                'span-13': 'span 13 / span 13',
                'span-14': 'span 14 / span 14',
                'span-15': 'span 15 / span 15',
                'span-16': 'span 16 / span 16',
                'span-17': 'span 17 / span 17',
                'span-18': 'span 18 / span 18',
                'span-19': 'span 19 / span 19',
                'span-20': 'span 20 / span 20',
                'span-21': 'span 21 / span 21',
                'span-22': 'span 22 / span 22',
                'span-23': 'span 23 / span 23',
                'span-24': 'span 24 / span 24',
            },
            gridColumnStart: {
                "14": "14",
                "15": "15",
                "16": "16",
                "17": "17",
                "18": "18",
                "19": "19",
                "20": "20",
                "21": "21",
                "22": "22",
                "23": "23",
                "24": "24",
            },
            gridRowStart: {
                "14": "14",
                "15": "15",
                "16": "16",
                "17": "17",
                "18": "18",
                "19": "19",
                "20": "20",
                "21": "21",
                "22": "22",
                "23": "23",
                "24": "24",
            },
            keyframes: {
                shimmer: {
                    '100%': {
                        transform: 'translateX(100%)',
                    },
                },
            },
        }
    },
    plugins: [require("tailwindcss-animate")],
} satisfies Config;
