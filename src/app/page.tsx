export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            Welcome to <span className="text-yellow-300">PrezaCore</span>
          </h1>
          <p className="text-lg md:text-xl mb-8">
            The all-in-one school management platform to manage finances, students, teachers, 
            attendance, and an online library.
          </p>
          <div className="space-x-4">
            <a
              href="/login"
              className="bg-yellow-400 text-gray-900 font-semibold py-3 px-6 rounded-xl shadow-lg hover:bg-yellow-300 transition"
            >
              Get Started - Log In
            </a>
            <a
              href="#features"
              className="border border-white py-3 px-6 rounded-xl hover:bg-white hover:text-indigo-600 transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">Core Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Finance Management", desc: "Track income, expenses, and generate reports effortlessly." },
              { title: "Student Records", desc: "Manage admissions, performance, and attendance seamlessly." },
              { title: "Teacher Management", desc: "Organize teacher schedules, subjects, and performance tracking." },
              { title: "Attendance", desc: "Smart tools to monitor daily attendance for students & staff." },
              { title: "Online Library", desc: "Access digital books, lesson plans, and academic resources." },
              { title: "Secure Access", desc: "Admins, teachers, and accountants each get their own dashboard." },
            ].map((feature, i) => (
              <div key={i} className="p-6 bg-white rounded-2xl shadow hover:shadow-xl transition">
                <h3 className="text-xl font-semibold text-indigo-600 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why PrezaCore Section */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Why PrezaCore?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Schools waste valuable time juggling multiple systems. PrezaCore simplifies everything with
            a single, powerful platform designed for modern education management.
          </p>
          <a
            href="/signup"
            className="bg-indigo-600 text-white font-semibold py-3 px-8 rounded-xl shadow hover:bg-indigo-500 transition"
          >
            Start Free Trial
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-10 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">PrezaCore</h3>
            <p>Empowering schools with smarter management tools.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/login" className="hover:text-yellow-400">Login</a></li>
              <li><a href="/signup" className="hover:text-yellow-400">Sign Up</a></li>
              <li><a href="#features" className="hover:text-yellow-400">Features</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Contact</h4>
            <p>Email: support@prezacore.com</p>
            <p>Phone: +256 XXX XXX XXX</p>
          </div>
        </div>
        <div className="text-center mt-10 border-t border-gray-700 pt-6">
          © {new Date().getFullYear()} PrezaCore. All rights reserved.
        </div>
      </footer>
    </div>
  );
}