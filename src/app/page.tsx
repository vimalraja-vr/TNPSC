"use client";

import Link from "next/link";
import { FaBell, FaBook, FaFileAlt, FaBookOpen, FaLaptopCode, FaNewspaper, FaCalendarAlt, FaChartLine, FaKey, FaCalculator, FaClipboardCheck, FaIdCard, FaTrophy, FaUserTie, FaClipboardList, FaTasks, FaBookReader, FaLandmark, FaPlayCircle, FaQuestionCircle, FaUsers, FaEnvelope, FaQuestion, FaMoneyBillWave, FaUserMd } from "react-icons/fa";

const Home = () => {
  const sections = [
    { icon: <FaBell className="text-blue-500" />, title: "Exam Notifications", link: "/examnotifications" },
    { icon: <FaBook className="text-green-500" />, title: "Syllabus", link: "/syllabus" },
    { icon: <FaFileAlt className="text-purple-500" />, title: "Previous Papers", link: "/previous-papers" },
    { icon: <FaBookOpen className="text-orange-500" />, title: "Study Materials", link: "/study-materials" },
    { icon: <FaLaptopCode className="text-red-500" />, title: "Online Tests", link: "/online-tests" },
    { icon: <FaNewspaper className="text-teal-500" />, title: "Current Affairs", link: "/current-affairs" },
    { icon: <FaCalendarAlt className="text-pink-500" />, title: "Exam Calendar", link: "/exam-calendar" },
    { icon: <FaChartLine className="text-indigo-500" />, title: "Cut-off Marks", link: "/cutoff-marks" },
    { icon: <FaKey className="text-yellow-500" />, title: "Answer Keys", link: "/answer-keys" },
    { icon: <FaCalculator className="text-blue-400" />, title: "Eligibility", link: "/eligibility-calculator" },
    { icon: <FaClipboardCheck className="text-green-400" />, title: "Application Status", link: "/application-status" },
    { icon: <FaIdCard className="text-purple-400" />, title: "Admit Card", link: "/admit-card" },
    { icon: <FaTrophy className="text-orange-400" />, title: "Result", link: "/results" },
    { icon: <FaUserTie className="text-red-400" />, title: "Interview Tips", link: "/interview-tips" },
    { icon: <FaClipboardList className="text-teal-400" />, title: "Exam Pattern", link: "/exam-pattern" },
    { icon: <FaTasks className="text-pink-400" />, title: "Study Plan", link: "/study-plan" },
    { icon: <FaBookReader className="text-indigo-400" />, title: "Recommended Books", link: "/recommended-books" },
    { icon: <FaLandmark className="text-yellow-400" />, title: "Tamil Nadu GK", link: "/tn-gk" },
    { icon: <FaUsers className="text-blue-300" />, title: "Group Resources", link: "/group-resources" },
    { icon: <FaPlayCircle className="text-green-300" />, title: "Video Lessons", link: "/video-lessons" },
    { icon: <FaQuestionCircle className="text-purple-300" />, title: "Quizzes", link: "/quizzes" },
    { icon: <FaUsers className="text-orange-300" />, title: "Discussion Forum", link: "/forum" },
    { icon: <FaEnvelope className="text-red-300" />, title: "Contact Officials", link: "/contact" },
    { icon: <FaQuestion className="text-teal-300" />, title: "FAQs", link: "/faqs" },
    { icon: <FaMoneyBillWave className="text-pink-300" />, title: "Salary Structure", link: "/salary-structure" },
    { icon: <FaUserMd className="text-indigo-300" />, title: "Job Profile", link: "/job-profile" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-center"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Ace Your <span className="text-yellow-300">TNPSC</span> Exams
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 opacity-90">
            Comprehensive resources, expert guidance, and smart tools for Tamil Nadu Public Service Commission aspirants
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/notifications">
              <button className="px-8 py-3 bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold rounded-lg transition-all transform hover:scale-105 shadow-lg">
                Latest Notifications
              </button>
            </Link>
            <Link href="/online-tests">
              <button className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white hover:text-blue-800 font-bold rounded-lg transition-all transform hover:scale-105">
                Free Mock Test
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-6 rounded-xl bg-blue-50">
              <div className="text-3xl font-bold text-blue-600 mb-2">10K+</div>
              <div className="text-gray-600">Active Users</div>
            </div>
            <div className="p-6 rounded-xl bg-green-50">
              <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-gray-600">Study Materials</div>
            </div>
            <div className="p-6 rounded-xl bg-purple-50">
              <div className="text-3xl font-bold text-purple-600 mb-2">100+</div>
              <div className="text-gray-600">Mock Tests</div>
            </div>
            <div className="p-6 rounded-xl bg-orange-50">
              <div className="text-3xl font-bold text-orange-600 mb-2">50+</div>
              <div className="text-gray-600">Success Stories</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Everything You Need for <span className="text-blue-600">TNPSC</span> Success
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From syllabus to results - weve got all your exam preparation needs covered
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {sections.map((item, index) => (
              <Link key={index} href={item.link}>
                <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 hover:border-blue-100 flex flex-col items-center text-center h-full cursor-pointer">
                  <div className="text-2xl mb-3">{item.icon}</div>
                  <h3 className="font-medium text-gray-800 text-sm md:text-base">{item.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Highlight Sections */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Personalized <span className="text-blue-600">Study Plans</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Get customized study schedules based on your exam date, strengths, and weaknesses to maximize your preparation efficiency.
              </p>
              <Link href="/study-plan">
                <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all">
                  Create Your Study Plan
                </button>
              </Link>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl border border-blue-200">
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <FaBookOpen className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Smart Syllabus Coverage</h3>
                    <p className="text-sm text-gray-600">Track your syllabus completion progress</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <FaChartLine className="text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Performance Analytics</h3>
                    <p className="text-sm text-gray-600">Detailed insights on your mock tests</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <FaCalendarAlt className="text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Daily Targets</h3>
                    <p className="text-sm text-gray-600">Achievable daily goals to keep you on track</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your TNPSC Journey?</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Join thousands of aspirants who are preparing with our platform
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/register">
              <button className="px-8 py-3 bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold rounded-lg transition-all transform hover:scale-105 shadow-lg">
                Register for Free
              </button>
            </Link>
            <Link href="/online-tests">
              <button className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white hover:text-blue-800 font-bold rounded-lg transition-all transform hover:scale-105">
                Try Free Test
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;