import Image from "next/image";

import { Button } from "~/components/ui/button";

export default function BannerShopping() {
  return (
    <section className="flex items-center justify-between">
      <section className="w-1/2 px-10">
        <h1 className="text-4xl font-bold">Asthonishing Commerce</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem distinctio porro, nihil laboriosam delectus rem, ut
          nulla quam amet, optio maxime a ratione placeat. Et nulla labore quod
          possimus at!
        </p>
        <Button>Shopping Now</Button>
      </section>

      <section className="flex w-1/2 items-center justify-center border border-red-500">
        <Image
          src="/svg/banner.svg"
          alt="Banner illustration"
          width={600}
          height={600}
        />
      </section>
    </section>
  );
}
