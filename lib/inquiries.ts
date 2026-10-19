import type { Inquiry } from "./types";

const inquiries: Inquiry[] = [];

export function addInquiry(input: Omit<Inquiry, "id" | "createdAt">) {
  const inquiry: Inquiry = {
    ...input,
    id: `inq-${Date.now()}`,
    createdAt: new Date().toISOString(),
  };
  inquiries.unshift(inquiry);
  return inquiry;
}

export function listInquiries() {
  return inquiries;
}
