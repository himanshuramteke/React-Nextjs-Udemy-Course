import ContactForm from "@/components/contact-form";

export default function Home() {
  return (
    <main className="min-h-screen py-12 px-8">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Server Action Demo</h1>
          <p className="text-xl text-gray-600 max-2xl mx-auto">
            Contact form with Mongodb and revalidation.
          </p>
        </div>
        <ContactForm />
      </div>
    </main>
  );
}
