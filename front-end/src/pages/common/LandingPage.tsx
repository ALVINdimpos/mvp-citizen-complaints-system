import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import PublicNavbar from "@/containers/navigation/PublicNavbar";

const LandingPage = () => {
  return (
    <main className="bg-sky-50 min-h-screen text-gray-900">
      <PublicNavbar />

      {/* Welcome Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-24">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-1/2">
            <h1 className="text-5xl font-extrabold leading-tight mb-6">
              Engage. Report. Resolve.
            </h1>
            <p className="text-lg mb-8">
              Streamlining how citizens connect with public institutions. Fast,
              accountable, and transparent.
            </p>
            <Button className="bg-white text-blue-600 hover:bg-blue-100 font-semibold">
              Start a Report
            </Button>
          </div>
          <div className="md:w-1/2">
            <div className="aspect-video bg-blue-300 rounded-lg shadow-md"></div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">
            What You Can Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Quick Complaint Submission",
                desc: "Log issues in under 2 minutes through a mobile-friendly form.",
              },
              {
                title: "Smart Routing",
                desc: "Automatically direct your complaint to the right authority.",
              },
              {
                title: "Status Dashboard",
                desc: "Track every stage of your complaint until resolution.",
              },
              {
                title: "Official Feedback",
                desc: "Receive updates and resolutions directly from the concerned office.",
              },
              {
                title: "Secure & Private",
                desc: "Your data stays protected with encrypted handling.",
              },
              {
                title: "Analytics Ready",
                desc: "Visualize complaint trends and agency responsiveness.",
              },
            ].map((item, idx) => (
              <Card key={idx} className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Need to Raise an Issue?</h2>
          <p className="mb-8 text-lg">
            We're here to ensure your voice is heard. Connect with the right
            people now.
          </p>
          <Button className="bg-white text-blue-700 font-semibold hover:bg-blue-100">
            Submit a Complaint
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Platform</h3>
            <ul className="space-y-2">
              <li>About Us</li>
              <li>Features</li>
              <li>Updates</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>Help Center</li>
              <li>Contact</li>
              <li>Guides</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>Privacy Policy</li>
              <li>Terms of Use</li>
              <li>Cookies</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>Twitter</li>
              <li>LinkedIn</li>
              <li>Email Us</li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-12 text-sm text-gray-500">
          © {new Date().getFullYear()} CivicLink. All rights reserved.
        </div>
      </footer>
    </main>
  );
};

export default LandingPage;
