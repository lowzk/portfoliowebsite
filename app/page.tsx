import Link from "next/link";

import "./globals.css"

export default function Page() {
  return (
    <>
      <h1>Hello, Next.js!</h1>
      <Link href="/aboutme">About me</Link>
    </>
  );
}
