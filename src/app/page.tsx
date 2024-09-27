import BannerShopping from "./_components/banner-shopping";
import OurCollections from "./_components/our-collections";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-10 pb-10">
      <BannerShopping />
      <OurCollections />
    </main>
  );
}
