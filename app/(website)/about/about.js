import Container from "@/components/container";
import { urlForImage } from "@/lib/sanity/image";
import Image from "next/image";
import Link from "next/link";

export default function About({ authors, settings }) {
  return (
    <Container>
   

      <div className="mb-16 mt-6 grid grid-cols-3 gap-5 md:mb-32 md:mt-16 md:gap-16">
        {authors.slice(0, 3).map(author => {
          const imageProps = urlForImage(author?.image) || null;
          return (
            <div
              key={author._id}
              className="relative aspect-square overflow-hidden rounded-md bg-slate-50 odd:translate-y-10 odd:md:translate-y-16">
              <Link href={`/author/${author?.slug}`}>
                {imageProps && (
                  <Image
                    src={imageProps?.src}
                    alt={author?.name || " "}
                    fill
                    sizes="(max-width: 320px) 100vw, 320px"
                    className="object-cover"
                  />
                )}
              </Link>
            </div>
          );
        })}
      </div>

      <div className="prose mx-auto mt-14 text-center dark:prose-invert">
        <p>
        Conveniently located in Northwest Columbus, our salon has provided professional services to women and men for the past thirty-seven years.
Our staff are trained in all the latest hair trends including The Protein Keratin Smoothing Treatment, Balayage and Ombre.
Dolores & Company is also offering a variety of hair extension products!
        </p>
        <p>
        We are the only salon in Central Ohio trained in the art of color concentration.
This procedure allows us to infuse multiple colors into the hair for a natural effect without fading.
We also offer a unique Japanese treatment that strengthens the hair and lasts up to three months.
Come visit our salon and see what your hair has been missing!

        </p>
        <p>
          <Link href="/contact">Get in touch</Link>
        </p>
      </div>
    </Container>
  );
}
