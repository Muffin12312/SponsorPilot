import Sidebar from "@/components/Sidebar";

const stats = [
  { label: "Total Sponsored Workers", value: "12" },
  { label: "Visa Expiring in 90 Days", value: "3" },
  { label: "Missing Documents", value: "7" },
  { label: "High-Risk Cases", value: "2" },
];

const recentAlerts = [
  "Amandeep Singh visa expires in 43 days",
  "Maria Ivanova missing proof of address",
  "James Carter salary review required",
  "Priya Nair right-to-work check due next week",
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex">
      <Sidebar />

      <main className="flex-1 p-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold">Dashboard</h2>
          <p className="text-gray-600 mt-2">
            Live view of sponsor compliance, worker risk, and upcoming actions.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200"
            >
              <p className="text-sm text-gray-500">{stat.label}</p>
              <p className="mt-3 text-3xl font-bold">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-6 mt-8 lg:grid-cols-2">
          <section className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">Recent Alerts</h3>
            <ul className="space-y-3">
              {recentAlerts.map((alert) => (
                <li
                  key={alert}
                  className="rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-700"
                >
                  {alert}
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">Audit Readiness</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Overall readiness</p>
                <p className="text-2xl font-bold text-amber-600">68%</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Open actions</p>
                <p className="text-2xl font-bold">9</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Workers fully compliant</p>
                <p className="text-2xl font-bold">8 / 12</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
