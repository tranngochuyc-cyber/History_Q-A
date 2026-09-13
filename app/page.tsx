import Link from "next/link";
import { ArrowRight, ArrowUpRight, Globe2, Sparkles } from "lucide-react";
import { HomeSections } from "@/components/home-sections";
export default function Home() {
  return (
    <main id="main">
      <section className="hero">
        <div className="hero-image" />
        <div className="hero-content">
          <div className="eyebrow">
            <span className="tiny-line" /> A JOURNEY THROUGH HUMAN HISTORY
          </div>
          <h1>
            The past is vast.
            <br />
            Your next discovery
            <br />
            <em>starts here.</em>
          </h1>
          <p>
            Three events. One choice.
            <br />
            Follow your curiosity through the moments that shaped our world.
          </p>
          <div className="button-row">
            <Link href="/play" className="button primary">
              Start exploring <ArrowRight size={18} />
            </Link>
            <Link href="/archive" className="button ghost">
              View the archive <ArrowUpRight size={17} />
            </Link>
          </div>
          <div className="hero-footnote">
            <Globe2 size={15} /> Across continents. Across centuries. At your
            pace.
          </div>
        </div>
        <div className="hero-caption">
          <span>FIELD NOTES / 001</span>
          <strong>
            One small step.
            <br />
            An entirely new perspective.
          </strong>
          <span>APOLLO 11 · THE MOON · 1969</span>
        </div>
        <div className="hero-coordinates">
          00° 40′ 26.69″ N &nbsp; 23° 28′ 22.69″ E
        </div>
      </section>
      <div className="archive-strip">
        <span>
          <Sparkles size={16} /> CURIOSITY IS YOUR COMPASS
        </span>
        <span>3 events per round</span>
        <span>5 historical eras</span>
        <span>A world of connections</span>
      </div>
      <section className="section">
        <div className="section-heading">
          <div>
            <div className="eyebrow">YOUR EXPEDITION, EXPLAINED</div>
            <h2>A little choice. A wider world.</h2>
          </div>
          <Link href="/about" className="text-link">
            How to play <ArrowUpRight size={16} />
          </Link>
        </div>
        <div className="steps">
          {[
            ["Discover", "Three moments in history. A new set every round."],
            ["Choose", "Go where your curiosity takes you."],
            ["Learn", "Uncover the story behind the event."],
            ["Answer", "Put your newfound knowledge to the test."],
            ["Unlock", "Keep every discovery in your archive."],
          ].map(([title, desc], i) => (
            <div className="step" key={title}>
              <span>0{i + 1}</span>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>
      <HomeSections />
      <section className="section invitation">
        <div>
          <div className="eyebrow">AN OPEN INVITATION TO THE PAST</div>
          <h2>Where will history take you?</h2>
          <p>
            Build your own expedition. Choose a place, an era, or let the whole
            world surprise you.
          </p>
        </div>
        <Link href="/play" className="button primary">
          Choose your journey <ArrowRight size={18} />
        </Link>
      </section>
    </main>
  );
}
