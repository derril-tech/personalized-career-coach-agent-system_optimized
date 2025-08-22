export default function DashboardPage() {
  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
          Dashboard
        </h1>
        <p className="text-neutral-600 dark:text-neutral-300">
          Welcome back! Here's your recruitment overview.
        </p>
      </div>

      {/* TODO: Implement dashboard metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-sm">
          <h3 className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
            Total Candidates
          </h3>
          <p className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
            1,234
          </p>
        </div>
        <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-sm">
          <h3 className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
            Active Requisitions
          </h3>
          <p className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
            45
          </p>
        </div>
        <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-sm">
          <h3 className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
            Interviews This Week
          </h3>
          <p className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
            12
          </p>
        </div>
        <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-sm">
          <h3 className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
            Offers Sent
          </h3>
          <p className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
            8
          </p>
        </div>
      </div>

      {/* TODO: Implement pipeline overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Pipeline Overview</h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-neutral-600 dark:text-neutral-300">New</span>
              <span className="font-semibold">156</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-600 dark:text-neutral-300">Screening</span>
              <span className="font-semibold">89</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-600 dark:text-neutral-300">Interview</span>
              <span className="font-semibold">34</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-600 dark:text-neutral-300">Offer</span>
              <span className="font-semibold">12</span>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-3">
            <div className="text-sm">
              <p className="font-medium">New candidate added</p>
              <p className="text-neutral-500">John Doe - Senior Engineer</p>
              <p className="text-neutral-400">2 hours ago</p>
            </div>
            <div className="text-sm">
              <p className="font-medium">Interview scheduled</p>
              <p className="text-neutral-500">Jane Smith - Product Manager</p>
              <p className="text-neutral-400">4 hours ago</p>
            </div>
            <div className="text-sm">
              <p className="font-medium">Offer sent</p>
              <p className="text-neutral-500">Mike Johnson - Data Scientist</p>
              <p className="text-neutral-400">1 day ago</p>
            </div>
          </div>
        </div>
      </div>

      {/* TODO: Implement quick actions */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
        <div className="flex flex-wrap gap-4">
          <button className="btn btn-primary">
            Add Candidate
          </button>
          <button className="btn btn-secondary">
            Create Requisition
          </button>
          <button className="btn btn-outline">
            Schedule Interview
          </button>
        </div>
      </div>
    </div>
  );
}
