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
      Gas List
      {data.map(({ id, strain, imageSrc }) => (
        <div key={id}>
          <Image
            src={imageSrc}
            alt={strain}
            width={150}
            height={150}
            priority="true"
            blurDataURL="data:..."
            placeholder="blur"
          />
          {strain}
        </div>
      ))}
    </div>
  );
};

export default Gas;
