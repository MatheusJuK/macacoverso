"use client";
import { usePathname } from "next/navigation";
import Header from "./Header";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const hideHeaderRoutes = ["/login"];

  const showHeader = !hideHeaderRoutes.includes(pathname);

  return (
    <>
      {showHeader && <Header />}
      <div className="mt-[50px]">{children}</div>
    </>
  );
}
