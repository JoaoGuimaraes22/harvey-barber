import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "./dictionaries";
import Navbar from "./_components/navbar";
import Hero from "./_components/hero";
import About from "./_components/about";
import Services from "./_components/services";
import BeforeAfter from "./_components/before-after";
import Reviews from "./_components/reviews";
import Team from "./_components/team";
import Gallery from "./_components/gallery";
import Contact from "./_components/contact";
import Footer from "./_components/footer";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang);

  return (
    <>
      <Navbar dict={dict.navbar} lang={lang} />
      <main id="main">
        <Hero dict={dict.hero} />
        <About dict={dict.about} />
        <Services dict={dict.services} />
        <BeforeAfter dict={dict.beforeAfter} />
        <Reviews dict={dict.reviews} />
        <Team dict={dict.team} />
        <Gallery dict={dict.gallery} />
        <Contact dict={dict.contact} />
      </main>
      <Footer dict={dict.footer} />
    </>
  );
}
