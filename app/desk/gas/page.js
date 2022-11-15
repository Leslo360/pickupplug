import { createClient } from "@supabase/supabase-js";
import Image from "next/image";

export const getGas = async () => {
  const supaAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || "",
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
  );

  const { data } = await supaAdmin.from("Gas").select("*").order("id");

  return data;
};

const Gas = async () => {
  const data = await getGas();
  console.log(data);
  return (
    <div>
      <h1 className="text-2xl">Featured Gas</h1>
      <div className="flex flex-col">
        {data.map(({ id, strain, imageSrc }) => (
          <div key={id} className="m-3 shadow-xl shadow-purple-800">
            <Image
              src={imageSrc}
              alt={strain}
              width={250}
              height={250}
              priority="true"
              blurDataURL="data:..."
              placeholder="blur"
              style={{
                width: "300px",
                height: "300px",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gas;
