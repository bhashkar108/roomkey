"use client";

import { FormEvent, useState } from "react";

export default function InquiryForm({ propertyId, heading }: { propertyId?: string; heading: string }) {
  const [status, setStatus] = useState<"idle" | "saving" | "sent" | "error">("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("saving");

    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, propertyId }),
      });
      if (!response.ok) throw new Error("Request failed");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 bg-[#0c1210] p-7 text-[#f7f3eb]">
      <p className="font-serif text-2xl">{heading}</p>
      <p className="text-sm leading-6 text-[#f7f3eb]/65">
        Share a few details. An advisor will confirm a private viewing within one business day.
      </p>
      <input name="name" required placeholder="Full name" className="field" />
      <input name="email" type="email" required placeholder="Email" className="field" />
      <input name="phone" required placeholder="Phone" className="field" />
      <textarea name="message" rows={4} required placeholder="Preferred dates, budget, or notes" className="field resize-none" />
      <button
        type="submit"
        disabled={status === "saving"}
        className="w-full rounded-full bg-[#c4a574] py-3 text-xs uppercase tracking-[0.22em] text-[#0c1210] disabled:opacity-60"
      >
        {status === "saving" ? "Sending…" : "Request a private tour"}
      </button>
      {status === "sent" ? <p className="text-sm text-[#e8d5b0]">Received. We will be in touch shortly.</p> : null}
      {status === "error" ? <p className="text-sm text-red-300">Unable to send. Please try again.</p> : null}
    </form>
  );
}
