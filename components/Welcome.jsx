import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import Link from "next/link";
import { useState } from "react";
import { IoIosRocket } from "react-icons/io";
import { useRouter } from "next/navigation";
const Welcome = () => {
  const user = useUser();
  const supabase = useSupabaseClient();
  const [inputSecret, setInputSecret] = useState("");
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  async function getProfile() {
    setLoading(true);

    try {
      let { data, error, status } = await supabase
        .from("profiles")
        .select(`secret`)
        .eq("id", user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        console.log(data.secret);
        if (inputSecret === data.secret) {
          console.log("Lets Go!!!");
          router.push("/desk/gas");
        } else {
          alert("That does'nt seem right");
          throw error;
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mt-32 text-center">
      <h1>Congrats on making it this far </h1>
      <div className="flex flex-col items-center">
        <input
          placeholder="Provide a secret phrase"
          className="p-2"
          value={inputSecret}
          onChange={(e) => setInputSecret(e.target.value)}
        />
        <Link href="/desk">
          <span className="text-xs cursor-pointer hover:text-blue-400">
            I don`t have one.
          </span>
        </Link>
        {/* <Link href="/desk/gas"> */}
        <button
          onClick={() => getProfile()}
          className={`flex items-center justify-between p-2 m-3 text-sm text-white border border-white bg-none ${
            loading && "focus:animate-ping"
          }`}
        >
          <IoIosRocket color="white" className="mr-3 " size="20px" />
          Take Flight
        </button>
        {/* </Link> */}
      </div>
    </div>
  );
};

export default Welcome;
