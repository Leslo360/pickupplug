import { createClient } from "@supabase/supabase-js";
import Image from "next/image";

export const getGas = async () => {
  const supaAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || "",
    process.env.SUPABASE_SERVICE_ROLE_KEY || ""
  );

  const { data } = await supaAdmin.from("Gas").select("*").order("id");

  return data;
};

const Gas = async () => {
  const data = await getGas();
  console.log(data);
  return (
    <div>
      <h1 className="text-2xl">Gas List</h1>
      <div className="flex flex-col">
        {data.map(({ id, strain, imageSrc }) => (
          <div key={id} className="p-2 m-3 bg-black border">
            <Image
              src={imageSrc}
              alt={strain}
              width={250}
              height={250}
              priority="true"
              blurDataURL="data:..."
              placeholder="blur"
            />
            <h3 className="text-lg">{strain}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gas;
