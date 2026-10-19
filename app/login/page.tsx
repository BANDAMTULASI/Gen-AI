import PremiumButton from "@/components/PremiumButton";
import FounderDetails from "@/components/FounderDetails";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-4 py-12">
      <div className="w-full max-w-xl rounded-2xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/70">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">Gen-AI</p>
          <h1 className="mt-3 text-3xl font-bold text-slate-900">Sign in</h1>
        </div>

        <form className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email</label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium text-slate-700">Password</label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 px-4 py-3 font-medium text-white transition hover:bg-blue-700"
          >
            Login
          </button>
        </form>

        <div className="mt-6 border-t border-slate-200 pt-5">
          <p className="mb-3 text-sm font-medium text-slate-600">Unlock premium access</p>
          <PremiumButton
            onMockPurchase={() => {
              console.log("Premium purchase triggered");
              alert("Premium enabled (mock). Replace with a real payment provider later.");
            }}
            className="inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-orange-500 to-pink-500 px-4 py-3 font-semibold text-white shadow-md shadow-orange-200 transition hover:opacity-95"
          />
        </div>

        <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <h2 className="text-lg font-semibold text-slate-900">About the founder</h2>
          <FounderDetails
            name="BANDAM TULASI"
            title="Founder & CEO"
            bio="Based in Gullepalli, Anakapalli, India. Contact: bandamtulasi@gmail.com"
            avatarUrl="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80"
            links={[
              { label: "Website", url: "https://genai-topaz-pi.vercel.app" },
              { label: "Email", url: "mailto:bandamtulasi@gmail.com" },
            ]}
            className="mt-0"
          />
        </div>
      </div>
    </main>
  );
}
