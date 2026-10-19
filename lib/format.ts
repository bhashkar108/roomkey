function formatINR(value: number) {
  const digits = Math.round(value).toString();
  const lastThree = digits.slice(-3);
  const other = digits.slice(0, -3);
  const grouped = other ? `${other.replace(/\B(?=(\d{2})+(?!\d))/g, ",")},${lastThree}` : lastThree;
  return `₹${grouped}`;
}

export function formatPrice(price: number, status: "For Sale" | "For Rent") {
  const formatted = formatINR(price);
  return status === "For Rent" ? `${formatted}/mo` : formatted;
}

export function formatArea(area: number) {
  const digits = Math.round(area).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return `${digits} sq.ft`;
}
