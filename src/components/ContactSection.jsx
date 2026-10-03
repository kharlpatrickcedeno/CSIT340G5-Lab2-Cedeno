import SectionHeading from './SectionHeading.jsx'
import ContactLink from './ContactLink.jsx'

function ContactSection() {
  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Contact" subtitle="Say hi." />
      <ul className="mt-8 space-y-3">
        <ContactLink label="Email" href="mailto:kharlpatrick2@gmail.com" text="kharlpatrick2@gmail.com" />
        <ContactLink label="GitHub" href="https://github.com/kharlpatrickcedeno" text="github.com/kharlpatrickcedeno" />
        <ContactLink label="LinkedIn" href="https://www.linkedin.com/in/kharl-patrick-cedeno-137a97321/" text="linkedin.com/in/kharl-patrick-cedeno-137a97321" />
      </ul>
    </section>
  )
}

export default ContactSection
