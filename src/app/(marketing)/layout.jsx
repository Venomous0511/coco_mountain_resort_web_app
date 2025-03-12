import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";
import ScrollUp from "@/components/ui/ScrollUp";

export default function MarketingLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <ScrollUp />
      <Footer />
    </>
  );
}
