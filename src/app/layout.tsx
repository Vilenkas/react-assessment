import type { Metadata } from "next";
import './globals.css';

export const metadata: Metadata = {
    title: "Auxo - Home",
    description: "Auxo Platform",
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
}

export default RootLayout;