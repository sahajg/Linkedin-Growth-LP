import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | DAVRO LinkedIn Growth",
  description: "Real results from real clients. See how DAVRO's LinkedIn + Twitter distribution funnel generated measurable growth for B2B founders.",
};

export default function CaseStudiesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
