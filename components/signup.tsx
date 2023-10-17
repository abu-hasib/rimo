"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";

export default function Login() {
  const { register, handleSubmit } = useForm<FormData>();
  const onSubmit = async (data: any) => {
    console.log({ data });
    const response = await fetch("https://wokpa.ddns.net/api/listeners/login", {
      headers: {
        Authorization: `Bearer 276|sOwOaQ94tmBPt9dKuGjzR8VjRbxNBur2v2rc5HDZ`,
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
      method: "POST",
      body: new URLSearchParams({
        email: data.email,
        password: data.password,
      }).toString(),
    });
    const json = await response.json();
    console.log({ json });
  };

  return (
    <form
      className="flex flex-col space-y-4 w-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      <p>Log in with email.</p>
      <input
        className="p-4 rounded-[32px] bg-transparent border border-white outline-none focus:outline-none"
        id="email"
        placeholder="Enter your email"
        {...register("email")}
      />
      <input
        className="p-4 rounded-[32px] bg-transparent border border-white outline-none focus:outline-none"
        type="password"
        placeholder="Enter your password"
        {...register("password")}
      />
      <div className="flex justify-between">
        <button type="submit" className="rounded-[32px] bg-[#7B61FF] px-4 py-2">
          Login
        </button>
        <Link href="/forgot" className="text-[13px] font-light">
          Forgot password?
        </Link>
      </div>
    </form>
  );
}
