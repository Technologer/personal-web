import { PageShell, Section, EmailLink } from "./Shell.jsx";

function Question({ q, children }) {
  return (
    <div className="bg-zinc-900 border border-white/8 rounded-2xl p-6">
      <h3 className="text-white font-semibold text-base mb-2 leading-snug">{q}</h3>
      <div className="text-zinc-400 text-sm leading-relaxed space-y-3">{children}</div>
    </div>
  );
}

/* The app's own colour language. This is the thing people are most likely to
   write in confused about, so it earns a place above the questions. */
function Verdict({ tone, label, children }) {
  const tones = {
    over: "text-red-400 bg-red-400/10 border-red-400/20",
    under: "text-blue-400 bg-blue-400/10 border-blue-400/20",
    ok: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
    quiet: "text-zinc-400 bg-zinc-400/10 border-zinc-400/20",
  };
  return (
    <div className="flex items-baseline gap-4">
      <span
        className={`text-xs font-medium px-2.5 py-1 rounded-full border whitespace-nowrap ${tones[tone]}`}
      >
        {label}
      </span>
      <span className="text-sm text-zinc-400">{children}</span>
    </div>
  );
}

export default function Support() {
  return (
    <PageShell
      eyebrow="Support"
      title="Sparingly"
      standfirst="Tracks how often you do the things you only want to do occasionally, and tells you when you drift from the frequency you set — in both directions."
    >
      <Section title="Get in touch">
        <p>
          Questions, bugs, or an idea for the app — email me and I'll reply. There's no
          ticket system and no bot; it's just me.
        </p>
        <p>
          <EmailLink subject="Sparingly" />
        </p>
        <p className="text-sm text-zinc-500">
          If you're reporting something that looks wrong, it helps enormously to include the
          item's goal (for example <span className="text-zinc-400">Up to 1×/week</span>),
          what the app said, and what you expected instead.
        </p>
      </Section>

      <Section label="Reference" title="What the colours mean">
        <p>
          Red and blue are not good and bad. Red means too often, blue means not often
          enough, and grey means the app doesn't have enough history to say anything honest
          yet.
        </p>
        <div className="space-y-3 pt-2">
          <Verdict tone="ok" label="on track">
            You're inside the goal you set.
          </Verdict>
          <Verdict tone="over" label="6 in 4 weeks">
            Over a ceiling — it states the count rather than a percentage.
          </Verdict>
          <Verdict tone="under" label="50% under">
            Below a floor or a band.
          </Verdict>
          <Verdict tone="quiet" label="too early to tell">
            The item is too new for its average to mean anything yet.
          </Verdict>
        </div>
      </Section>

      <Section label="Questions" title="Common questions">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-none">
          <Question q="What's the difference between Do less, Keep steady and Do more?">
            <p>
              They decide which direction the app speaks up about.{" "}
              <strong className="text-zinc-300">Do less</strong> is a ceiling — going under
              is fine and never flagged. <strong className="text-zinc-300">Do more</strong> is
              a floor, and going over is fine.{" "}
              <strong className="text-zinc-300">Keep steady</strong> is a band around your
              number, with a tolerance you choose, and it flags drift both ways.
            </p>
          </Question>

          <Question q="Where does the percentage come from?">
            <p>
              From your rate over a measurement window, compared with the goal. The window
              isn't a setting — it's derived from the goal itself, roughly four times the
              interval your goal describes. A daily item is judged over weeks; a
              once-every-two-months item over many months.
            </p>
          </Question>

          <Question q="Why does one extra entry show such a large percentage?">
            <p>
              Because a young item has a short window. An item that's eight days old is
              judged over eight days, so one extra is one eighth. The figure settles as the
              item ages, and a single quiet day brings it back down.
            </p>
          </Question>

          <Question q="I logged something by mistake.">
            <p>
              Press and hold the row and choose{" "}
              <strong className="text-zinc-300">Undo last entry</strong> — it removes the one
              you just added, not the most recent by date. You can also open the item and
              hold any day in its calendar to clear that day.
            </p>
          </Question>

          <Question q="I forgot to log something yesterday.">
            <p>
              Press and hold the row and choose{" "}
              <strong className="text-zinc-300">Log yesterday</strong>, or open the item and
              tap any day in the calendar. Backdating counts as real history and the average
              takes it into account.
            </p>
          </Question>

          <Question q="How do I log quickly?">
            <p>
              Swipe a row to the right on the main list. That records today without opening
              anything. There's also a <strong className="text-zinc-300">Log Today</strong>{" "}
              button on each item's own screen.
            </p>
          </Question>

          <Question q="Will it nag me?">
            <p>
              Only if you ask it to. Notifications are off by default. Turning them on gives
              you one reminder a day, at a time you choose, asking whether there's anything
              to log. There is no alert for going over your limit.
            </p>
          </Question>

          <Question q="Can I sync between devices, or back up?">
            <p>
              Not yet. Everything lives on the device it was entered on. There's no iCloud
              sync, no export, and no account — so if you delete the app, the history goes
              with it.
            </p>
          </Question>

          <Question q="How do I delete everything?">
            <p>
              Delete an item to remove it and its history, or delete the app to remove
              everything at once. Nothing is stored anywhere else, so there's nothing left
              behind and nothing to ask me to erase.
            </p>
          </Question>

          <Question q="What does it run on?">
            <p>
              iPhone, iOS 18 or later. There's no iPad or Apple Watch version, and the app is
              portrait only.
            </p>
          </Question>
        </div>
      </Section>

      <Section label="Privacy" title="The short version">
        <p>
          Sparingly collects nothing. It has no account, no analytics, and no networking code
          at all — it cannot send your data anywhere, because it cannot connect to anything.
        </p>
        <p>
          <a
            href="/sparingly/privacy-policy/"
            className="text-white underline underline-offset-4 decoration-white/20 hover:decoration-white/60 transition-colors duration-200"
          >
            Read the full privacy policy
          </a>
        </p>
      </Section>
    </PageShell>
  );
}
