import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-neutral-900 dark:to-neutral-800">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
            Welcome to TalentFlux
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-300 mb-8">
            Intelligent HR Recruitment Platform
          </p>
          
          <div className="space-y-4">
            <Link
              href="/dashboard"
              className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              Go to Dashboard
            </Link>
          </div>
        </div>
        
        {/* TODO: Add feature highlights */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-2">AI-Powered Matching</h3>
            <p className="text-neutral-600 dark:text-neutral-300">
              Intelligent candidate-job matching with explainable AI
            </p>
          </div>
          <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Pipeline Management</h3>
            <p className="text-neutral-600 dark:text-neutral-300">
              Visual pipeline with drag-and-drop candidate management
            </p>
          </div>
          <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Analytics & Reports</h3>
            <p className="text-neutral-600 dark:text-neutral-300">
              Comprehensive analytics and diversity insights
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
