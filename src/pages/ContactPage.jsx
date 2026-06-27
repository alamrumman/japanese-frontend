import ContactHero from '../components/contact/ContactHero';
import ContactInfo from '../components/contact/ContactInfo';
import ContactMap from '../components/contact/ContactMap';
import ContactInvitation from '../components/contact/ContactInvitation';
import ContactForm from '../components/contact/ContactForm';

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactInfo />
      <ContactMap />
      <ContactInvitation />
      <ContactForm />
    </>
  );
}
