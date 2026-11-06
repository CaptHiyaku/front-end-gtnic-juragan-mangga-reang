"use client";

import { useRouter } from "next/navigation";
import LoginModal from "../../components/loginModal";

// Show the modal automatically when someone opens /login directly.
// Closing it returns to the home page.
export default function LoginPage() {
  const router = useRouter();

  return (
    <main
      className="min-h-screen"
      style={{ background: "linear-gradient(to bottom, #FFF1D2 0%, #FFD98A 50%, #FFA500 100%)" }}
    >
      <LoginModal open onClose={() => router.push("/")} />
    </main>
  );
}