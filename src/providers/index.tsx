import { ThemeProvider } from "next-themes";

const AppProvider = ({children}: {children: React.ReactNode}) => {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            {children}
        </ThemeProvider>
    );
};

export default AppProvider;
