'use client';

import { useForm } from "react-hook-form";

export default function Login() {
    const { register, handleSubmit } = useForm<FormData>()
    const onSubmit = async (data: any) => {
        const response = await fetch("https://wokpa.ddns.net/api/listeners/login", {
            headers: { 'Authorization': `Bearer 276|sOwOaQ94tmBPt9dKuGjzR8VjRbxNBur2v2rc5HDZ`},
            method: "POST",

            body: JSON.stringify({
                email: data.email,
                password: data.password
            })
        })
        const json = await response.json()
        console.log({ json })
    }

    return (
        <form action="" onSubmit={handleSubmit(onSubmit)}>
            <p>Login with your email</p>
            <input className="text-white bg-transparent border border-white" type="email" id="email" placeholder="enter your email" {...register("email")} />
            <input className="text-white bg-transparent border border-white" type="password" placeholder="enter your password" {...register("password")} />
            <button type="submit">Login</button>
        </form>
    )
}


