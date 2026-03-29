import { SectionTitle, Heading, Paragraph } from "@atoms";
import { FeatureCard } from "@molecules";
import { InfoFeatures } from "@organisms";

export default function AboutPageContent() {
  const teamMembers = [
    {
      name: "John Doe",
      role: "CEO & Founder",
      image: "https://via.placeholder.com/200",
    },
    {
      name: "Jane Smith",
      role: "Head of Design",
      image: "https://via.placeholder.com/200",
    },
    {
      name: "Mike Johnson",
      role: "Lead Developer",
      image: "https://via.placeholder.com/200",
    },
    {
      name: "Sarah Williams",
      role: "Marketing Director",
      image: "https://via.placeholder.com/200",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <div className="bg-gray-50 py-16">
        <div className="max-w-screen-xl mx-auto px-5 sm:px-10">
          <SectionTitle>About Us</SectionTitle>
          <div className="max-w-3xl mx-auto text-center">
            <Paragraph
              text="We are a leading e-commerce platform dedicated to providing high-quality products and exceptional customer service. Our mission is to make online shopping easy, enjoyable, and accessible to everyone."
              className="text-lg text-gray-700 mb-4"
            />
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-5 sm:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <Heading text="Our Story" />
            <Paragraph
              text="Founded in 2020, our company started with a simple idea: to create an online marketplace that connects customers with the best products from around the world. What began as a small startup has grown into a thriving e-commerce platform serving thousands of satisfied customers."
              className="text-gray-600 mb-4"
            />
            <Paragraph
              text="We believe in quality, authenticity, and customer satisfaction. Every product in our catalog is carefully selected and verified to meet our high standards."
              className="text-gray-600"
            />
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://via.placeholder.com/600x400"
              alt="Our Story"
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="mb-16">
          <SectionTitle>Our Values</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<div className="text-4xl mb-4">🎯</div>}
              title="Quality First"
              description="We never compromise on the quality of our products and services."
            />
            <FeatureCard
              icon={<div className="text-4xl mb-4">💎</div>}
              title="Customer Focus"
              description="Your satisfaction is our top priority. We're here to help you every step of the way."
            />
            <FeatureCard
              icon={<div className="text-4xl mb-4">🌟</div>}
              title="Innovation"
              description="We continuously improve our platform to provide the best shopping experience."
            />
          </div>
        </div>

        <div className="mb-16">
          <SectionTitle>Meet Our Team</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="text-center bg-gray-50 rounded-lg p-6 hover:shadow-lg transition"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-semibold text-lg text-gray-800">
                  {member.name}
                </h3>
                <p className="text-gray-600 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-8 text-center">
          <Heading text="Why Choose Us?" />
          <InfoFeatures />
        </div>
      </div>
    </div>
  );
}
