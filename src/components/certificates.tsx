import { certificates } from "@/data/certificates.data";
import Image from "next/image";

const Certificates = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="bg-gradient-to-r from-zinc-300/60 to-zinc-200 bg-clip-text text-3xl font-semibold tracking-tight text-transparent ">
        Certificates
      </h1>
      <div className="grid grid-cols-3 gap-3">
        {certificates.map((cet) => (
          <Image
            key={cet.name}
            src={`/${cet.image}`}
            alt={cet.name}
            width={300}
            height={300}
            className="relative cursor-pointer"
          />
        ))}
      </div>
    </div>
  );
};

export default Certificates;
