import Link from "next/link";
import { ArrowRight, Hourglass } from "lucide-react";
export const metadata = { title: "About & how to play" };
export default function Page() {
  return (
    <main id="main" className="page-shell about-page">
      <div className="page-heading">
        <Hourglass size={34} />
        <div className="eyebrow">WELCOME TO CHRONOQUEST</div>
        <h1>History is more than a date.</h1>
        <p>
          It’s a collection of choices, connections and lives. ChronoQuest is an
          invitation to explore them, one event at a time.
        </p>
      </div>
      <article className="about-content">
        <section>
          <h2>Your journey, in five steps.</h2>
          <ol>
            <li>
              <strong>Discover.</strong> Set your scope and choose 10, 20 or 30
              rounds. Each round offers three events; choose filters with at
              least three matching records.
            </li>
            <li>
              <strong>Choose.</strong> Select the story that interests you.
              Unseen events appear before repeats whenever your selection
              allows.
            </li>
            <li>
              <strong>Learn.</strong> Read a short brief covering the context
              and significance of the event.
            </li>
            <li>
              <strong>Answer.</strong> Try multiple choice, true or false, or a
              year challenge. Dates are concealed for year challenges. There is
              no timer.
            </li>
            <li>
              <strong>Unlock.</strong> Read the explanation. The event joins
              your archive whether your answer was right or wrong.
            </li>
          </ol>
        </section>
        <section>
          <h2>Scoring rewards understanding.</h2>
          <p>
            Correct answers earn 100 base points. Easy questions use ×1, Medium
            ×1.25 and Hard ×1.5. Each prior consecutive correct answer adds 10
            bonus points, capped at 100. An incorrect answer resets your streak.
          </p>
          <p>
            Year guesses earn 100 for an exact answer, 90 within one year, 70
            within five, 40 within ten, and 20 within twenty-five. Further
            guesses earn zero. Difficulty applies to these points; only an exact
            year counts as correct for accuracy and streaks. Use negative
            numbers for BCE. There is no year zero.
          </p>
        </section>
        <section>
          <h2>An archive that grows with you.</h2>
          <p>
            Progress is automatically saved in this browser, including
            unfinished journeys. Reading a record is always free; answering a
            question collects it. Accuracy measures all attempts, while question
            completion counts distinct questions.
          </p>
          <p>
            Country and region groups narrow each other. Within each filter
            group, any selected option may match. Small collections reuse the
            least-seen events and rotate questions. Counts reflect this curated
            seed collection, not all of world history.
          </p>
        </section>
        <section>
          <h2>History deserves context.</h2>
          <p>
            Each record links to a museum, archive, institution or reference
            work for further reading. Dates and categories are useful ways to
            navigate, not substitutes for historical nuance. Modern country
            labels locate events geographically and do not imply that today’s
            states or borders existed at the time.
          </p>
          <p>
            Era boundaries in this edition are navigational conventions: Ancient
            before 500, Medieval 500–1499, Early Modern 1500–1799, Modern
            1800–1944, and Contemporary from 1945. Some transitions occurred
            differently across regions. Undated artwork is labeled approximately
            and excluded from exact year challenges.
          </p>
        </section>
        <section>
          <h2>Made for a moment of curiosity.</h2>
          <p>
            Keyboard navigation, visible focus, readable contrast and
            reduced-motion preferences are supported. Progress stays on this
            device. Clearing browser data removes locally saved progress.
          </p>
        </section>
        <Link href="/play" className="button primary">
          Start exploring <ArrowRight size={18} />
        </Link>
      </article>
    </main>
  );
}
