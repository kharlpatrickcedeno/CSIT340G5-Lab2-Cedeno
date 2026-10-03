import SectionHeading from './SectionHeading.jsx'
import TimelineItem from './TimelineItem.jsx'

function ExperienceSection() {
  return (
    <section id="experience" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Experience" subtitle="Where I have learned and worked." />
      <ol className="mt-8 space-y-8 border-l border-stone-200">
        <TimelineItem
          period="Nov 2025 – Present"
          title="UI/UX Designer"
          place="Bitwork Solutions (remote)"
          description="Sole designer on a B2B mobile app for vinyl wrap shops. I interview shop owners, design every screen from user flows to Figma prototypes, and help with QA and front-end code."
        />
        <TimelineItem
          period="Jun – Sep 2025"
          title="UI Designer & Developer"
          place="Freelance, UK-based client (remote)"
          description="Designed the front end of a SaaS platform that turns 2D images into animated 3D logos, and wrote a Blender script that cut manual animation time by 50%."
        />
        <TimelineItem
          period="2023 – Present"
          title="UX Designer"
          place="AI Pilipinas Cebu"
          description="Design event and digital materials for workshops reaching 200+ participants, with standard templates that cut revision cycles by about 40%."
        />
      </ol>
    </section>
  )
}

export default ExperienceSection
