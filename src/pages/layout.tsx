import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";
import Header from "../components/Header";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>
          Odontología Integral: Servicios Dentales Para Tu Sonrisa Perfecta
        </title>
        <meta
          name="description"
          content="Odontologia integral: consigue tu mejor sonrisa."
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="bg-transparent">
        {children}
        <Analytics />
      </main>
    </>
  );
}
