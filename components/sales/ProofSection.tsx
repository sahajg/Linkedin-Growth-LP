import React from "react";
import { ArrowUpRight } from "lucide-react";

export function ProofSection() {
    return (
        <section className="w-full bg-[var(--color-bg-primary)] py-[80px] px-4">
            <div className="max-w-[900px] mx-auto text-center">

                <h2 className="text-[32px] font-bold text-white mb-8">
                    Real Results From Real Ecom Brands
                </h2>

                {/* Highlight Stats */}
                <div className="flex flex-col md:flex-row justify-center gap-8 mb-12">
                    <div className="bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)] p-6 rounded-lg flex-1">
                        <p className="text-[var(--color-text-secondary)] mb-2">Monthly Revenue Added</p>
                        <p className="text-[32px] font-bold text-[var(--color-accent-green)]">+$12,500/mo</p>
                    </div>
                    <div className="bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)] p-6 rounded-lg flex-1">
                        <p className="text-[var(--color-text-secondary)] mb-2">Time Saved Per Week</p>
                        <p className="text-[32px] font-bold text-white">15+ Hours</p>
                    </div>
                    <div className="bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)] p-6 rounded-lg flex-1">
                        <p className="text-[var(--color-text-secondary)] mb-2">Average ROAS Increase</p>
                        <p className="text-[32px] font-bold text-[#FFD700]">3.4×</p>
                    </div>
                </div>

                {/* Screenshot Placeholder */}
                <div className="bg-white rounded-lg p-2 shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500">
                    <div className="aspect-[16/9] bg-gray-100 rounded border border-gray-200 flex flex-col items-center justify-center relative overflow-hidden group">
                        <div className="absolute inset-x-0 top-0 h-8 bg-gray-200 border-b border-gray-300 flex items-center px-4 space-x-2">
                            <div className="w-3 h-3 rounded-full bg-red-400"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                            <div className="w-3 h-3 rounded-full bg-green-400"></div>
                        </div>
                        <p className="text-gray-400 font-medium">Stripe Dashboard Screenshot Placeholder</p>
                        <div className="mt-4 bg-green-100 text-green-800 px-4 py-2 rounded-full font-bold flex items-center">
                            <ArrowUpRight className="w-4 h-4 mr-1" /> Revenue Up 340%
                        </div>
                    </div>
                </div>

                <p className="text-[14px] text-[var(--color-text-muted)] mt-6 italic">
                    *Results not typical. Your results may vary based on your effort and market.
                </p>

            </div>
        </section>
    );
}
