import Link from "next/link";
import { Nav } from "../components/Nav";

export default function Home() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <section className="h-screen w-full  ">
          <div className=" mx-50 py-30 my-20 flex flex-col gap-10 w-[800px] ">
            <div className="">
              <h1 className="text-5xl text-primary-300">Take Control of Your Expenses</h1>
              <h2 className="text-3xl">
                GoFunds helps you monitor your spending and categorize your
                expenses—all in one place.
              </h2>
            </div>
            <div>
              <Link href="/register" className="text-2xl px-4 py-3 rounded-2xl bg-primary-800 hover:bg-primary-400 duration-300 hover:text-bg" >Start Tracking</Link>
            </div>
          </div>
        </section>
      </main>
      <footer></footer>
    </>
  );
}
