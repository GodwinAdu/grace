
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/header/Navbar";


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>

    );
}
