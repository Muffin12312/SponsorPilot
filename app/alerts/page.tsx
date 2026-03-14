import Sidebar from '@/components/Sidebar';

export default function AlertsPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex">
      <Sidebar />
      <main className="flex-1 p-8">
        <h2 className="text-3xl font-bold">Alerts</h2>
        <p className="text-gray-600 mt-2">Compliance alerts coming next.</p>
      </main>
    </div>
  );
}