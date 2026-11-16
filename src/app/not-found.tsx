import Link from "next/link";
import { Shell } from "@/components/Shell";

export default function NotFound() {
  return (
    <Shell nav={false}>
      <div className="grid min-h-[70dvh] place-items-center text-center">
        <div>
          <p className="jp text-6xl font-bold text-pink">？</p>
          <h1 className="mt-4 text-2xl font-bold">Page not found</h1>
          <Link href="/" className="btn3d btn-dark mt-6">Back to lessons</Link>
        </div>
      </div>
    </Shell>
  );
}
