import Head from "next/head";
import Navbar from "./Navbar";
import Header from "./Header";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>Odontologia Integral</title>
        <meta
          name="description"
          content="Odontologia integral: consigue to mejor sonrisa."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="bg-transparent">{children}</main>
    </>
  );
}
