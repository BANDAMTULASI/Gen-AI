import React, { useState } from "react";
import PremiumButton from "../components/PremiumButton";
import FounderDetails from "../components/FounderDetails";
import styles from "../styles/Login.module.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Replace with your auth endpoint if available
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (!res.ok) throw new Error("Login failed (mock)");
      alert("Logged in (mock). Replace with real auth.");
    } catch (err: any) {
      console.error(err);
      alert(err.message || "Login error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>Sign in</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label>
            Email
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </label>

          <label>
            Password
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </label>

          <button type="submit" disabled={loading} className={styles.primary}>
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>

        <div style={{ marginTop: 16 }}>
          <p>Or try premium:</p>
          <PremiumButton
            onMockPurchase={() => {
              console.log("Mock premium purchase");
              alert("Premium enabled (mock). Thank you for supporting Gen-AI!");
            }}
            className={styles.premiumButton}
          />
        </div>

        <div style={{ marginTop: 24 }}>
          <h2>About the founder</h2>
          <FounderDetails
            name="BANDAM TULASI"
            title="Founder & CEO"
            bio={`Based in Gullepalli, Anakapalli, India. Contact: bandamtulasi@gmail.com`}
            avatarUrl="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80"
            links={[
              { label: "Website", url: "https://genai-topaz-pi.vercel.app" },
              { label: "Email", url: "mailto:bandamtulasi@gmail.com" },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
