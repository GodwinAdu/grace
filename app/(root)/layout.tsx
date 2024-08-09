
import Footer from "@/components/footer/Footer";
import MainNavbar from "@/components/header/MainNavbar";


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <MainNavbar />
            {children}
            <Footer />
        </>

    );
}
