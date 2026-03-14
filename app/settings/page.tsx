import Sidebar from "@/components/Sidebar";

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex">
      <Sidebar />
      <main className="flex-1 p-8">
        <h2 className="text-3xl font-bold">Settings</h2>
        <p className="text-gray-600 mt-2">Company settings coming next.</p>
      </main>
    </div>
  );
}
