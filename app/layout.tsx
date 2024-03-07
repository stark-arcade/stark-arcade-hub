import DefaultLayout from "@/components/DefaultLayout";
import ChakraProvider from "@/providers/ChakraProvider";
import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";

const nunitoSans = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StarkArcade Hub | DecolgenLabs",
  description: "Keep Building Work Hard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </head>
      <body className={nunitoSans.className}>
        <ChakraProvider>
          <DefaultLayout>{children}</DefaultLayout>
        </ChakraProvider>
      </body>
    </html>
  );
}
