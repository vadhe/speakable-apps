import { Navbar } from '../components/Navbar';
import { Sidebar } from '../components/Sidebar';

export default function BackofficeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar/>
      <div className="flex flex-grow">
        <Sidebar />
        <div className="flex-grow bg-gray-100 p-6">
          {children}
        </div>
      </div>
    </div>
  );
}
