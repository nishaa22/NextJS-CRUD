import { Geist, Geist_Mono } from "next/font/google";
import { useSession, signIn, signOut } from 'next-auth/react'
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const session = useSession()
  console.log(session)

  if (session.data == null) {
    return (
      <>
        <div
          className={`${geistSans.className} ${geistMono.className} flex flex-col justify-center items-center bg-gray-100 h-screen p-5`}
        >
          <h1 className="text-4xl font-bold mt-5 bg-black text-white">WELCOME TO THE HOMEPAGE !!</h1>
          <div className="flex flex-col justify-between items-center w-full my-5">
            <h3 className="text-2xl my-2">Hello, Please login...</h3>
            <button onClick={signIn} className="px-5 py-2 bg-black text-white rounded-xl cursor-pointer">Log In</button>
          </div>

        </div >
      </>
    )
  }
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} flex flex-col justify-center items-center bg-gray-100 p-5 h-screen`}
    >
      <h1 className="text-4xl font-bold mt-5 bg-pink-900 text-white">WELCOME TO THE DASHBOARD !!</h1>
      <div className="flex justify-between items-center w-full my-5">
        <h3 className="text-2xl my-2">Hello !!<span className="font-bold text-pink-900"> {session?.data?.user?.name}</span></h3>
        <button onClick={signOut} className="px-5 py-2 bg-pink-900 text-white rounded-xl cursor-pointer">Logout</button>
      </div>
      <div className="mt-5 flex flex-col text-xl">
        <Link href={"/notes-app"} className="hover:text-green-600">- Notes App using CRUD</Link>
        <Link href={"/counter-context-api"} className="hover:text-green-600">- Counter App using Context API</Link>
        <div className="flex flex-col">
          <h2 className="font-bold">Data fetching</h2>
          <Link href={"/data-fetching/csr"} className="hover:text-green-600">- Client Side Rendering</Link>
          <Link href={"/data-fetching/ssr"} className="hover:text-green-600">- Server Side Rendering</Link>
          <Link href={"/data-fetching/ssg"} className="hover:text-green-600">- Static Site Generation</Link>
        </div>
      </div>
    </div>
  );
}

