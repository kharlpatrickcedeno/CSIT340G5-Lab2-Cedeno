import SectionHeading from './SectionHeading.jsx'
import Fact from './Fact.jsx'

function AboutSection() {
  return (
    <section id="about" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="About" subtitle="A little about who I am." />
      <p className="mt-6 max-w-2xl leading-relaxed text-stone-700">
        I'm from Talisay City and study IT at CIT-U. Most of my time goes into designing a
        B2B mobile app for automotive vinyl wrap shops: talking with shop owners, learning how
        they work, and turning a technical product into something they can pick up without a
        manual. When it helps a design ship the way it was meant to, I jump into the React code too.
      </p>
      <dl className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
        <Fact label="Course" value="BS Information Technology" />
        <Fact label="Year level" value="Third year" />
        <Fact label="School" value="CIT-U" />
        <Fact label="Based in" value="Talisay City" />
      </dl>
    </section>
  )
}

export default AboutSection
