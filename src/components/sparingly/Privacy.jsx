import { PageShell, Section, EmailLink, LAST_UPDATED } from "./Shell.jsx";

export default function Privacy() {
  return (
    <PageShell
      eyebrow={`Privacy Policy · Last updated ${LAST_UPDATED}`}
      title="Sparingly Privacy Policy"
      standfirst="Sparingly does not collect, transmit, or store any personal data. This policy explains what that means in practice."
    >
      <Section title="The app collects nothing">
        <p>
          Sparingly does not collect personal information. There is no account to create, no
          sign-in, no email address to hand over, and no profile.
        </p>
        <p>
          The app contains no networking code whatsoever. It cannot make a network request,
          which means the information you enter cannot leave your device, whether by accident
          or design.
        </p>
      </Section>

      <Section title="What stays on your device">
        <p>The app stores two things locally, inside its own sandboxed container:</p>
        <ul className="list-disc pl-5 space-y-2 marker:text-zinc-600">
          <li>
            <strong className="text-zinc-300">Your items and their history</strong> — the
            names you type, the goals you set, and the dates you log — held in a single file
            on the device.
          </li>
          <li>
            <strong className="text-zinc-300">Your notification preference</strong> — whether
            the daily reminder is on, and what time it should fire.
          </li>
        </ul>
        <p>
          Only Sparingly can read this. Other apps cannot, and neither can I. It is included
          in your device backups if you have those switched on, which is between you and
          Apple.
        </p>
      </Section>

      <Section title="No tracking, no analytics, no advertising">
        <p>
          There are no analytics, no crash-reporting services, no advertising, and no
          third-party SDKs of any kind. Nothing you do in the app is measured or reported.
        </p>
        <p>
          Because nothing is collected, nothing is shared, sold, or disclosed to anyone —
          including law enforcement, because there is nothing held to disclose.
        </p>
      </Section>

      <Section title="Notifications">
        <p>
          The optional daily reminder is scheduled locally by iOS on your device. It is not a
          push notification, no server is involved, and its text is the same every day — it
          contains nothing about you or your data.
        </p>
      </Section>

      <Section title="What Apple reports to me">
        <p>
          The app sends nothing, but downloading it is a transaction between you and Apple,
          and Apple gives every developer some information about their own app. It is worth
          being specific about what that is.
        </p>
        <ul className="list-disc pl-5 space-y-2 marker:text-zinc-600">
          <li>
            <strong className="text-zinc-300">Aggregate statistics</strong> — how many times
            Sparingly was downloaded, in which countries, on which device models and iOS
            versions, and how many people keep using it. These are counts, not people. I
            cannot tell who downloaded the app.
          </li>
          <li>
            <strong className="text-zinc-300">Crash reports</strong>, but only if you have
            turned on <em className="not-italic text-zinc-300">Share with App Developers</em>{" "}
            in Settings → Privacy &amp; Security → Analytics &amp; Improvements. They contain
            the device model, the iOS version, and where in the code the crash happened. They
            do not contain your items or anything you typed.
          </li>
          <li>
            <strong className="text-zinc-300">Reviews</strong> you choose to leave, which are
            public and show the nickname you picked.
          </li>
        </ul>
        <p>
          None of this comes from the app. It comes from Apple, it is governed by Apple's
          privacy policy, and the analytics part is a setting you control.
        </p>
      </Section>

      <Section title="If you email me">
        <p>
          Then I have your email address and whatever you wrote, in my mailbox, for as long
          as I keep the thread. I use it to answer you. It is not added to any list, and it
          is not connected to anything in the app — I have no way to link an email to a
          copy of Sparingly.
        </p>
      </Section>

      <Section title="Children">
        <p>
          Sparingly is not directed at children and collects no data from anyone, of any age.
        </p>
      </Section>

      <Section title="Deleting your data">
        <p>
          Delete an item to erase it and everything logged against it. Delete the app to erase
          all of it at once. There is no copy anywhere else, so there is nothing to request,
          and no deletion form to fill in.
        </p>
      </Section>

      <Section title="Changes to this policy">
        <p>
          If the app ever gains a feature that changes any of this — syncing across devices,
          for example — this policy will be updated before that feature ships, and the date at
          the top will change with it.
        </p>
      </Section>

      <Section title="Contact">
        <p>
          Questions about this policy can go to <EmailLink subject="Sparingly privacy" />.
        </p>
      </Section>
    </PageShell>
  );
}
