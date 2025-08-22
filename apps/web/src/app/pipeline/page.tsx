export default function PipelinePage() {
  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
          Pipeline
        </h1>
        <p className="text-neutral-600 dark:text-neutral-300">
          Manage your recruitment pipeline with drag-and-drop ease.
        </p>
      </div>

      {/* TODO: Implement pipeline filters */}
      <div className="mb-6 flex flex-wrap gap-4">
        <select className="input w-48">
          <option>All Requisitions</option>
          <option>Software Engineer</option>
          <option>Product Manager</option>
          <option>Data Scientist</option>
        </select>
        <select className="input w-48">
          <option>All Locations</option>
          <option>San Francisco</option>
          <option>New York</option>
          <option>Remote</option>
        </select>
        <button className="btn btn-outline">
          Clear Filters
        </button>
      </div>

      {/* TODO: Implement Kanban board */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* New Column */}
        <div className="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">
              New
            </h3>
            <span className="badge badge-secondary">24</span>
          </div>
          <div className="space-y-3">
            {/* TODO: Implement candidate cards */}
            <div className="bg-white dark:bg-neutral-700 p-4 rounded-lg shadow-sm">
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-medium text-neutral-900 dark:text-neutral-100">
                  John Doe
                </h4>
                <span className="badge badge-status-new">New</span>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-2">
                Senior Software Engineer
              </p>
              <div className="flex items-center text-xs text-neutral-500 dark:text-neutral-400">
                <span>San Francisco, CA</span>
                <span className="mx-2">•</span>
                <span>2 hours ago</span>
              </div>
            </div>
          </div>
        </div>

        {/* Screening Column */}
        <div className="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">
              Screening
            </h3>
            <span className="badge badge-secondary">12</span>
          </div>
          <div className="space-y-3">
            <div className="bg-white dark:bg-neutral-700 p-4 rounded-lg shadow-sm">
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-medium text-neutral-900 dark:text-neutral-100">
                  Jane Smith
                </h4>
                <span className="badge badge-status-screening">Screening</span>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-2">
                Product Manager
              </p>
              <div className="flex items-center text-xs text-neutral-500 dark:text-neutral-400">
                <span>New York, NY</span>
                <span className="mx-2">•</span>
                <span>1 day ago</span>
              </div>
            </div>
          </div>
        </div>

        {/* Interview Column */}
        <div className="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">
              Interview
            </h3>
            <span className="badge badge-secondary">8</span>
          </div>
          <div className="space-y-3">
            <div className="bg-white dark:bg-neutral-700 p-4 rounded-lg shadow-sm">
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-medium text-neutral-900 dark:text-neutral-100">
                  Mike Johnson
                </h4>
                <span className="badge badge-status-interview">Interview</span>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-2">
                Data Scientist
              </p>
              <div className="flex items-center text-xs text-neutral-500 dark:text-neutral-400">
                <span>Remote</span>
                <span className="mx-2">•</span>
                <span>3 days ago</span>
              </div>
            </div>
          </div>
        </div>

        {/* Offer Column */}
        <div className="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">
              Offer
            </h3>
            <span className="badge badge-secondary">3</span>
          </div>
          <div className="space-y-3">
            <div className="bg-white dark:bg-neutral-700 p-4 rounded-lg shadow-sm">
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-medium text-neutral-900 dark:text-neutral-100">
                  Sarah Wilson
                </h4>
                <span className="badge badge-status-offer">Offer</span>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-2">
                UX Designer
              </p>
              <div className="flex items-center text-xs text-neutral-500 dark:text-neutral-400">
                <span>San Francisco, CA</span>
                <span className="mx-2">•</span>
                <span>1 week ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TODO: Implement bulk actions */}
      <div className="mt-8 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <button className="btn btn-outline">
            Select All
          </button>
          <button className="btn btn-outline">
            Bulk Move
          </button>
          <button className="btn btn-outline">
            Export
          </button>
        </div>
        <button className="btn btn-primary">
          Add Candidate
        </button>
      </div>
    </div>
  );
}
