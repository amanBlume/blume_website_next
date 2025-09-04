import { Card, CardContent } from "./ui/card";

const partners = [
  {
    category: "Electronic Health Records & Billing",
    items: [
      {
        name: "Healthie",
        description:
          "Comprehensive EHR and telehealth platform. Simplify scheduling, charting, and client engagement in one place.",
        image: "/images/sample1.png",
      },
      {
        name: "SimplePractice",
        description:
          "A trusted tool for managing your entire practice. Handle billing, scheduling, notes, and telehealth with ease.",
        image: "/images/sample2.png",
      },
      {
        name: "Optimattra",
        description:
          "Powerful SOAP note and documentation tools. Designed specifically for mental health professionals.",
        image: "/images/sample3.png",
      },
    ],
  },
  {
    category: "Insurance Credentialing",
    items: [
      {
        name: "Headway",
        description:
          "Handles insurance billing, credentialing, and payments. Makes taking insurance simple and profitable.",
        image: "/images/sample4.png",
      },
      {
        name: "Grow Therapy",
        description:
          "Connects therapists with insurance-covered clients. Offers admin support, flexible scheduling, and built-in referrals.",
        image: "/images/sample5.png",
      },
    ],
  },
];

export default function OurPartners() {
  return (
    <section className="px-4 py-12 max-w-7xl mx-auto">
      <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
            Our Partners 
          </h2>
          <div className="w-24 h-1 bg-coral-500 mx-auto rounded-full"></div>
        </div>
      {partners.map((group, idx) => (
        <div key={idx} className="mb-12">
          <h3 className="text-3xl font-semibold mb-6">{group.category}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {group.items.map((partner, i) => (
              <Card key={i} className="rounded-2xl shadow-sm border hover:shadow-md transition">
                <CardContent className="p-4 flex flex-col items-center text-center">
                  <div className="w-32 h-20 relative mb-4">
                    <img
                      src={partner.image}
                      alt={partner.name}
                      className="object-contain"
                    />
                  </div>
                  <h4 className="font-bold text-lg mb-2">{partner.name}</h4>
                  <p className="text-sm text-gray-600">{partner.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
