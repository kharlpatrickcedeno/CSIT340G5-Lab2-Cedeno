import SectionHeading from './SectionHeading.jsx'
import ProjectCard from './ProjectCard.jsx'

function ProjectsSection() {
  return (
    <section id="projects" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Projects" subtitle="Things I have built." />
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <ProjectCard
          year="2026"
          title="VeriSafe"
          description="A campus safety reporting prototype built with two classmates. I built the security console where officers review reports, see similar reports nearby on a map, and confirm or dismiss them."
          tech="React · TypeScript · Tailwind CSS · Leaflet"
          link="https://github.com/kharlpatrickcedeno/VeriSafe"
        />
        <ProjectCard
          year="2026"
          title="Sigurado"
          description="A bilingual mobile app prototype that tells Filipino residents what to bring, how much it costs, and where to go to get barangay documents."
          tech="HTML · CSS · JavaScript"
          link="https://github.com/kharlpatrickcedeno/Sigurado"
        />
        <ProjectCard
          year="2026"
          title="Deeply"
          description="An Android app for deep-work sessions. You log your setting and energy before each one, rate it after, and see which conditions help you focus."
          tech="Kotlin · Android SDK"
          link="https://github.com/kharlpatrickcedeno/Deeply"
        />
        <ProjectCard
          year="2025"
          title="SnapIt Cebu"
          description="A website for a pop-up photobooth service in Cebu City, with a photo carousel, gallery, pricing packages, and a booking page."
          tech="HTML · CSS · JavaScript"
          link="https://github.com/kharlpatrickcedeno/SnapIt"
        />
      </div>
    </section>
  )
}

export default ProjectsSection
