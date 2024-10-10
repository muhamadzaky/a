import { Links } from "@/utils/constants";
import Link from "next/link";
import { Card } from "../components/card";
import Footer from "../components/footer";

const LinkPage: React.FC = () => {
  const links = Links;

  return (
    <div className="relative pb-16 h-dvh">
      <Link href="/">
        <img src="/logo-grey.svg" alt="Muhamad Zaky" width={60} className="mx-auto" />
      </Link>

      <div className="flex flex-col justify-center items-center my-10">
        <div>
          {links.map((link) => (
            <Link href={link.url} target="_blank">
              <div className="my-2">
                <Card key={link.slug}>
                  <article className="py-2 px-4 text-center">
                    <h2 className="text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display">{link.name}</h2>
                  </article>
                </Card>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center text-zinc-500">
        <Footer />
      </div>
    </div>
  );
};

export default LinkPage;