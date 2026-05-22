export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          AI-Powered Local SEO
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Reply to Google Reviews<br />
          <span className="text-[#58a6ff]">That Actually Sound Like You</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Generate personalized, on-brand responses to every Google My Business review in seconds. Stop copy-pasting generic replies — let AI match your voice and address each customer concern.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors duration-150"
        >
          Start for $12/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No credit card required for trial &middot; Cancel anytime</p>

        {/* Social proof strip */}
        <div className="mt-14 grid grid-cols-3 gap-6 border border-[#21262d] rounded-xl bg-[#161b22] p-6">
          <div>
            <p className="text-2xl font-bold text-white">2 min</p>
            <p className="text-sm text-[#8b949e] mt-1">Average response time</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">4.9★</p>
            <p className="text-sm text-[#8b949e] mt-1">Avg. review score lift</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">500+</p>
            <p className="text-sm text-[#8b949e] mt-1">Businesses using it</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="border border-[#58a6ff] rounded-2xl bg-[#161b22] p-8 text-center shadow-lg shadow-[#58a6ff]/10">
          <p className="text-sm font-semibold text-[#58a6ff] uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-extrabold text-white mb-1">$12</p>
          <p className="text-[#8b949e] text-sm mb-6">/month &middot; billed monthly</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited AI review responses",
              "Google My Business integration",
              "Custom tone & voice settings",
              "Bulk import & respond",
              "Response history & analytics",
              "Priority email support"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">&#10003;</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors duration-150"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does the AI match my business voice?",
              a: "During onboarding you provide a short description of your business tone and a few example responses. The AI uses these as a style guide for every reply it generates."
            },
            {
              q: "Do I need to connect Google My Business?",
              a: "You can paste reviews manually or connect your Google My Business account for automatic import. Both workflows are fully supported."
            },
            {
              q: "Can I edit responses before posting?",
              a: "Yes. Every AI-generated response is fully editable before you publish. You stay in control — the AI just does the heavy lifting."
            }
          ].map(({ q, a }) => (
            <div key={q} className="border border-[#21262d] rounded-xl bg-[#161b22] p-5">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-sm text-[#8b949e] leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#6e7681]">
        &copy; {new Date().getFullYear()} ReviewReply AI &middot; All rights reserved
      </footer>
    </main>
  );
}
