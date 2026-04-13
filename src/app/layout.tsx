import { ReactNode } from "react";
import { Metadata } from "next";

import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Providers } from "../components/providers";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Karuna Hospital – Best Hospital in East Delhi | Affordable & Quality Care",
  description:
    "Karuna Hospital, East Delhi – NABH accredited multi-speciality hospital with experienced doctors, 24/7 emergency, quick diagnostics and affordable healthcare since 2011. Call 9873754555.",
  keywords:
    "karuna hospital, best hospital east delhi, hospital mayur vihar, affordable hospital delhi, nabh hospital delhi, multispeciality hospital delhi",
  openGraph: {
    title: "Karuna Hospital – Excellence in Compassionate Healthcare",
    description:
      "NABH accredited hospital in East Delhi offering Internal Medicine, Gynaecology, Surgery, Orthopaedics, and more. Serving since 2011.",
    type: "website",
    url: "https://karunahospital.in",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,300;0,14..32,400;0,14..32,500;0,14..32,600;0,14..32,700;0,14..32,800;0,14..32,900;1,14..32,400&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;0,9..40,800;1,9..40,400&family=Playfair+Display:ital,wght@0,600;0,700;0,800;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="flex min-h-screen flex-col">
        <Providers>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
