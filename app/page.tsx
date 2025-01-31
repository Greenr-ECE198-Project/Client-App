import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-9xl font-bold"><span className="text-accent">G</span>reenr</h1>
            <p className="py-6 text-3xl">Automated Greenhouses and Weather Mapping</p>
            <button className="btn btn-primary w-40"><p className="text-xl">Log In</p></button>
            <p><Link href="https://www.google.com/" className="text-lg">Sign Up</Link></p>
          </div>
        </div>
      </div>
    </>
  );
}
