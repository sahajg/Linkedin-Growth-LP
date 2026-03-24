import React from "react";

export function SalesLetter() {
    return (
        <section className="w-full bg-white text-black py-[80px] px-4">
            <div className="max-w-[800px] mx-auto space-y-8 text-[18px] leading-[1.6]">

                {/* Salutation */}
                <p className="font-bold">From the desk of [Your Name]</p>

                {/* Red Subheading */}
                <h3 className="text-[28px] font-bold text-[var(--color-accent-red)] leading-tight border-b-2 border-black pb-4">
                    Why Most Ecom Brands Are One Algorithm Update Away From Extinction...
                </h3>

                <p>
                    Dear Founder,
                </p>

                <p>
                    If you are reading this, chances are you are an ecom founder who is tired of the Meta and Google treadmill.
                    You built your brand with passion, you have a product that people love, and you have seen what growth looks like.
                </p>

                <p className="font-bold bg-yellow-100 inline text-black px-1">
                    But lately, the game has changed.
                </p>

                <p>
                    You find your CPMs rising every single quarter while your ROAS keeps shrinking. You are spending more just to stay in the same place.
                    You are at the mercy of algorithm changes that can wipe out thirty percent of your revenue overnight without warning.
                </p>

                <p>
                    It doesn't have to be this way.
                </p>

                <h3 className="text-[24px] font-bold mt-8">
                    There Is A Better Way To Scale Your Brand
                </h3>

                <p>
                    Imagine having a revenue channel that you actually own. A channel that doesn't depend on how much you pay Meta or Google today.
                    A system that uses creators and influencers to build trust and drive sales on a compounding basis.
                </p>

                <p>
                    And the best part? You only pay when you make sales. No retainers. No upfront fees. No risk.
                    Just a pure revenue share model where our incentives are one hundred percent aligned with yours.
                </p>

                <p>
                    This isn't a fantasy. This is the <b>Davro Influencer System</b>. And today, I want to show you exactly how we can build it for you.
                </p>

            </div>
        </section>
    );
}
