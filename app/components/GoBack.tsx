"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function GoBack() {
  const router = useRouter();
  return (
    <>
      <button
        type="button"
        onClick={() => router.back()}
        className="go-back-button"
      >
        Back to previous page
        <span></span>
      </button>
    </>
  );
}
