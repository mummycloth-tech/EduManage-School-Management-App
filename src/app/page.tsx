export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#D1C4E9]">
      <div className="text-center p-6 max-w-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to EduManage</h1>
        <p className="text-lg text-gray-600 mb-6">Empower your school with seamless management tools for admins, teachers, and accountants.</p>
        <a href="/login" className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
          Get Started - Log In
        </a>
      </div>
    </div>
  );
}