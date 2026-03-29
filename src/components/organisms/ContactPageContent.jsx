import { SectionTitle } from "@atoms";
import { ContactForm, ContactInfo } from "@organisms";

export default function ContactPageContent() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-screen-xl mx-auto px-5 sm:px-10">
        <SectionTitle>Contact Us</SectionTitle>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
          <ContactForm />
          <ContactInfo />
        </div>

        <div className="mt-12 rounded-lg overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9476519598093!2d-73.99185368459395!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Location Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
