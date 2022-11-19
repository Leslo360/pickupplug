"use client";
import { useState, useEffect } from "react";
import {
  useUser,
  useSession,
  useSupabaseClient,
} from "@supabase/auth-helpers-react";
import randomWords from "random-words";
import { useRouter } from "next/navigation";

export default function Account() {
  const supabase = useSupabaseClient();
  const user = useUser();
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState(null);
  const [fullName, setFullName] = useState(null);
  const [secret, setSecret] = useState(null);
  const [avatar_url, setAvatarUrl] = useState(null);
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    getProfile();
    // console.log(randomWords({ exactly: 2, wordsPerString: 2 }));
  }, [session]);

  const genSecret = () => {
    setSecret(randomWords({ exactly: 2, wordsPerString: 2, join: " " }));
  };

  async function getProfile() {
    try {
      setLoading(true);

      let { data, error, status } = await supabase
        .from("profiles")
        .select(`username, full_name, secret, avatar_url`)
        .eq("id", user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setUsername(data.username);
        setSecret(data.secret);
        setAvatarUrl(data.avatar_url);
        setFullName(data.full_name);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function updateProfile({ username, secret, full_name, avatar_url }) {
    try {
      setLoading(true);

      const updates = {
        id: user.id,
        username,
        secret,
        full_name,
        avatar_url,
        updated_at: new Date().toISOString(),
      };

      let { error } = await supabase.from("profiles").upsert(updates);
      if (error) throw error;
      alert("Profile updated!");
    } catch (error) {
      alert("Error updating the data!");
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-between mb-2">
        <label className="mr-10" htmlFor="email">
          Email
        </label>
        <input
          className="w-[250px] p-2 mb-2 border"
          id="email"
          type="text"
          value={session?.user.email}
          disabled
        />
      </div>
      <div className="flex justify-between mb-2">
        <label className="mr-4" htmlFor="fullName">
          Full Name
        </label>
        <input
          className="w-[250px] p-2 mb-2 border"
          id="FullName"
          type="text"
          value={fullName || ""}
          onChange={(e) => setFullName(e.target.value)}
        />
      </div>
      <div className="flex justify-between mb-2">
        <label className="mr-4" htmlFor="username">
          Username
        </label>
        <input
          className="w-[250px] p-2 mb-2 border"
          id="username"
          type="text"
          value={username || ""}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="flex justify-between mb-2">
        <label className="mr-10" htmlFor="secret">
          Secret
        </label>
        <div className="flex flex-col">
          <input
            className="w-[250px] p-2 mb-2 border"
            id="secret"
            type="secret"
            value={secret || ""}
            onChange={(e) => setSecret(e.target.value)}
            disabled
          />

          {!secret && (
            <button onClick={() => genSecret()} className="text-xs">
              Generate Secret
            </button>
          )}
        </div>
      </div>

      <div className="flex ">
        <button
          className="flex items-center justify-between p-2 m-3 text-sm text-white transition ease-linear border border-white bg-none focus:bg-white focus:text-black"
          onClick={() =>
            updateProfile({ username, secret, fullName, avatar_url })
          }
          disabled={loading}
        >
          {loading ? "Loading ..." : "Update"}
        </button>

        <button
          className="flex items-center justify-between p-2 m-3 text-sm text-white transition ease-linear border border-white bg-none focus:bg-white focus:text-black"
          onClick={() => {
            supabase.auth.signOut();
            router.push("/");
          }}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}
