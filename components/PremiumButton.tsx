import React from "react";

type Props = {
  onMockPurchase?: () => void;
  className?: string;
};

export default function PremiumButton({ onMockPurchase, className }: Props) {
  const handleClick = () => {
    if (onMockPurchase) return onMockPurchase();
    // default mock behavior
    alert("Premium enabled (mock). Replace with real payment provider to accept payments.");
    console.log("Mock premium purchase completed");
  };

  return (
    <button className={className ?? "premium-button"} onClick={handleClick} type="button">
      Get Premium
    </button>
  );
}
