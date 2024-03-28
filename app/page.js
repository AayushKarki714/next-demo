import Link from "next/link";

export default function Home() {
  return (
    <div className="space-x-4">
      <Link href="/server">Server</Link>
      <Link href="/client">Client</Link>
    </div>
  );
}
