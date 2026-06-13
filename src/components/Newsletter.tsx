"use client";

import { useState, FormEvent } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email) {
      setStatus("error");
      setErrorMessage("Please enter an email address.");
      return;
    }
    
    // Simple email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Failed to process newsletter subscription.");
      }
    } catch (err) {
      console.error("Subscription error:", err);
      setStatus("error");
      setErrorMessage("An unexpected network error occurred.");
    }
  };

  return (
    <section className="py-24 bg-primary text-white text-center relative overflow-hidden">
      {/* Background Subtle Shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="px-margin-mobile md:px-margin-desktop max-w-2xl mx-auto relative z-10">
        {status === "success" ? (
          <div className="animate-fade-in-up py-8 flex flex-col items-center">
            <span className="material-symbols-outlined text-secondary-fixed text-6xl mb-6 animate-bounce-slow">
              verified
            </span>
            <h2 className="font-display-lg text-display-lg mb-4 text-secondary-fixed">
              Welcome to the Table!
            </h2>
            <p className="font-body-md text-body-md text-white/90 max-w-md mx-auto mb-6">
              Thank you for subscribing. We&apos;ve sent a welcome email with our latest heirloom recipes and agricultural stories.
            </p>
            {/* Spacing spacer for layout */}
            <div className="h-4" />

            <button
              onClick={() => {
                setStatus("idle");
              }}
              className="text-label-md font-bold text-white/60 hover:text-white transition-colors underline underline-offset-4 cursor-pointer"
            >
              Sign up with another email
            </button>
          </div>
        ) : (
          <div>
            <h2 className="font-display-lg text-display-lg mb-6">
              Join Our Table
            </h2>
            <p className="font-body-md text-body-md text-white/80 mb-10 max-w-md mx-auto">
              Get seasonal recipes, health tips, and stories from the farm delivered straight to your inbox.
            </p>
            
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <div className="flex-grow flex flex-col items-start gap-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === "error") setStatus("idle");
                  }}
                  disabled={status === "submitting"}
                  className="w-full bg-white/10 border-none rounded-lg px-6 py-4 focus:ring-2 focus:ring-secondary text-white placeholder:text-white/50 focus:outline-none transition-all"
                  placeholder="Your email address"
                  aria-label="Email Address"
                />
                {status === "error" && (
                  <p className="text-secondary-fixed-dim text-caption mt-1 pl-2">
                    {errorMessage}
                  </p>
                )}
              </div>
              
              <button
                type="submit"
                disabled={status === "submitting"}
                className="bg-secondary-container text-on-secondary-container px-8 py-4 rounded-lg font-label-md text-label-md font-bold whitespace-nowrap hover:bg-secondary-fixed active:scale-95 transition-all duration-200 cursor-pointer disabled:opacity-50 h-[56px] flex items-center justify-center min-w-[140px]"
              >
                {status === "submitting" ? (
                  <span className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                ) : (
                  "Sign Me Up"
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}
