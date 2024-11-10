import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Code,
  Database,
  Globe,
  Laptop,
  LayoutGrid,
  Rocket,
  Server,
  Smartphone,
  Stethoscope,
  Book,
  Syringe,
  User,
} from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Tailored solutions to meet your unique business needs",
    },
    {
      icon: Globe,
      title: "Web Application Development",
      description:
        "Scalable and responsive web applications for modern businesses",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Cross-platform mobile apps that engage and delight users",
    },
    {
      icon: Database,
      title: "Database Design & Management",
      description:
        "Efficient and secure database solutions for your data needs",
    },
    {
      icon: Server,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services",
    },
    {
      icon: LayoutGrid,
      title: "UI/UX Design",
      description:
        "User-centric design that enhances user experience and engagement",
    },
    {
      icon: Rocket,
      title: "DevOps Services",
      description: "Streamline your development and operations processes",
    },
    {
      icon: Laptop,
      title: "IT Consulting",
      description:
        "Expert advice to align your IT strategy with business goals",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                Our Services
              </h1>
              <p className="mx-auto max-w-[700px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Comprehensive IT solutions tailored to elevate your business in
                the digital landscape
              </p>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="transition-all hover:shadow-lg">
                  <CardHeader>
                    <service.icon className="h-10 w-10 mb-2 text-blue-600" />
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{service.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600">
              Rehman Group of Companies
            </h2>
            <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
              Exalted Systems is proud to be a part of the Rehman Group of
              Companies, a diverse conglomerate committed to excellence across
              multiple industries.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { icon: Globe, name: "Rehman Travels" },
                { icon: Stethoscope, name: "Rehman Medical Center" },
                { icon: Book, name: "Education Consultancy" },
                { icon: Syringe, name: "Rehman Pharmacy" },
                { icon: Laptop, name: "Exalted Systems" },
                { icon: User, name: "Overseas Promoters" },
              ].map((company, index) => (
                <Card key={index} className="text-center p-4">
                  <company.icon className="h-12 w-12 mx-auto mb-4 text-blue-600" />
                  <h3 className="font-semibold text-sm">{company.name}</h3>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
