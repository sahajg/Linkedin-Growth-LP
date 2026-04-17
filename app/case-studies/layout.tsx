import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | Davro LinkedIn Growth",
  description: "Real results from real clients. See how Davro's LinkedIn + Twitter distribution funnel generated measurable growth for B2B founders.",
};

export default function CaseStudiesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
