import { Icon, Heading } from "@atoms";

export default function ContactInfo() {
  const contactDetails = [
    {
      icon: "📍",
      title: "Address",
      content: "123 Main Street, New York, NY 10001",
    },
    {
      icon: "📞",
      title: "Phone",
      content: "+1 (555) 123-4567",
    },
    {
      icon: "✉️",
      title: "Email",
      content: "support@ecommerce.com",
    },
    {
      icon: "🕒",
      title: "Working Hours",
      content: "Mon - Fri: 9:00 AM - 6:00 PM",
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <Heading text="Contact Information" />
      <p className="text-gray-600 mb-8">
        Feel free to reach out to us through any of the following channels.
      </p>

      <div className="space-y-6">
        {contactDetails.map((detail, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="text-3xl">{detail.icon}</div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">
                {detail.title}
              </h3>
              <p className="text-gray-600">{detail.content}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-8 border-t border-gray-200">
        <h3 className="font-semibold text-gray-800 mb-4">Follow Us</h3>
        <div className="flex gap-4">
          <a
            href="#"
            className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition"
          >
            f
          </a>
          <a
            href="#"
            className="w-10 h-10 bg-blue-400 text-white rounded-full flex items-center justify-center hover:bg-blue-500 transition"
          >
            t
          </a>
          <a
            href="#"
            className="w-10 h-10 bg-pink-600 text-white rounded-full flex items-center justify-center hover:bg-pink-700 transition"
          >
            i
          </a>
          <a
            href="#"
            className="w-10 h-10 bg-blue-700 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition"
          >
            in
          </a>
        </div>
      </div>
    </div>
  );
}
