import Sidebar from "@/components/Sidebar";

const workers = [
  {
    name: "Amandeep Singh",
    role: "Care Worker",
    visaExpiry: "2026-05-28",
    salary: "£27,000",
    location: "Birmingham",
    risk: "Medium",
  },
  {
    name: "Maria Ivanova",
    role: "Restaurant Manager",
    visaExpiry: "2026-10-15",
    salary: "£31,500",
    location: "Manchester",
    risk: "High",
  },
  {
    name: "James Carter",
    role: "Site Supervisor",
    visaExpiry: "2027-01-09",
    salary: "£38,000",
    location: "Leeds",
    risk: "Low",
  },
  {
    name: "Priya Nair",
    role: "Software Engineer",
    visaExpiry: "2026-07-11",
    salary: "£49,000",
    location: "London",
    risk: "Medium",
  },
];

export default function WorkersPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex">
      <Sidebar />

      <main className="flex-1 p-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold">Sponsored Workers</h2>
          <p className="text-gray-600 mt-2">
            Central register of sponsored workers, visa timelines, and risk.
          </p>
        </div>

        <div className="rounded-2xl bg-white shadow-sm border border-gray-200 overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-100">
              <tr className="text-sm text-gray-600">
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Role</th>
                <th className="px-6 py-4">Visa Expiry</th>
                <th className="px-6 py-4">Salary</th>
                <th className="px-6 py-4">Location</th>
                <th className="px-6 py-4">Risk</th>
              </tr>
            </thead>
            <tbody>
              {workers.map((worker) => (
                <tr key={worker.name} className="border-t border-gray-200">
                  <td className="px-6 py-4 font-medium">{worker.name}</td>
                  <td className="px-6 py-4">{worker.role}</td>
                  <td className="px-6 py-4">{worker.visaExpiry}</td>
                  <td className="px-6 py-4">{worker.salary}</td>
                  <td className="px-6 py-4">{worker.location}</td>
                  <td className="px-6 py-4">{worker.risk}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
