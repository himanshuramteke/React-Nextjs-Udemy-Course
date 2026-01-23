"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSignup = async () => {};

  return (
    <main className="min-h-screen bg-zinc-950 flex items-center justify-center px-4">
      <Card className={"w-full max-w-md p-8 bg-zinc-900 border-zinc-800"}>
        <h1 className="text-3xl font-bold text-emerald-400 mb-6">Signup</h1>

        <form onSubmit={handleSignup} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-2">
              Email
            </label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="bg-zinc-800 border-zinc-700 text-zinc-50"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-2">
              Password
            </label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="bg-zinc-800 border-zinc-700 text-zinc-50"
              required
            />
          </div>

          {error && (
            <div className="p-3 bg-red-900/20 border border-red-800 rounded text-red-400 text-sm">
              {error}
            </div>
          )}

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-emerald-600 hover:bg-emerald-700 hover:cursor-pointer"
          >
            {loading ? "Signing up..." : "Sign up"}
          </Button>
        </form>

        <p className="text-center text-zinc-400 mt-6">
          Already have an account?{" "}
          <Link
            href="/auth/login"
            className="text-emerald-400 hover:text-emerald-300"
          >
            Login
          </Link>
        </p>
      </Card>
    </main>
  );
}

export default SignupPage;
