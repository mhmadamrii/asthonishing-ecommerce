import { ThreeDCardCollections } from "./3d-card-collections";

export default function OurCollections() {
  return (
    <section className="flex w-full flex-col items-center justify-center">
      <h1 className="w-3/4 border-b py-8 text-center text-4xl font-bold">
        Our Collections
      </h1>

      <div className="flex w-3/4 items-center justify-center">
        <ThreeDCardCollections />
      </div>
    </section>
  );
}
