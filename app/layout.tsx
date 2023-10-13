import "./globals.css"
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import { Analytics } from '@vercel/analytics/react';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Home</title>
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />``
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </head>
      <body>
        <NavBar />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
