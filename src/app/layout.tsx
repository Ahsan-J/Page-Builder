import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AppGlobalProvider from "./AppGlobalProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Page Builder",
    description: "Build pages in React Tailwind",
};

export default function RootLayout(props: React.PropsWithChildren) {
   
    return (
        <html lang="en">
            <body className={inter.className}> 
                <AppGlobalProvider>
                    {props.children}
                </AppGlobalProvider>   
            </body>
        </html>
    );
}
