import Footer from "@/components/common/footers/footer";
import Header from "@/components/common/headers";
import AppProvider from "@/providers";

export default function AppLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <AppProvider>
            <Header />
            {children}
            <Footer />
        </AppProvider>
    );
}
