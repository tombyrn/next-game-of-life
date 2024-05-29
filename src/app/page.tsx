import CellGrid from "@/components/CellGrid";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Header />
      <CellGrid />
      <Footer />
    </main>
  );
}
