'use client'

import React from 'react'
import CountUp from 'react-countup'

const stats = [
  { label: "Happy Clients", value: 300 },
  { label: "Active Mutual Fund Folios", value: 1000 },
  { label: "Referral Rate", value: 60 },
  { label: "Years of Experience", value: 7 },
]

const Stats = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/stats-bg.jpg')" }}
      aria-label="Company statistics showing trust and credibility"
    >
      <div className="absolute inset-0 bg-black bg-opacity-60" />
      <div className="relative max-w-6xl mx-auto py-20 px-6 text-white flex flex-col md:flex-row justify-around items-center gap-12">
        {stats.map(({ label, value }, idx) => (
          <div key={idx} className="flex flex-col items-center text-center max-w-xs">
            <CountUp
              end={value}
              enableScrollSpy
              scrollSpyOnce
              duration={2}
              suffix={label === "Referral Rate" ? "%" : "+"}
            >
              {({ countUpRef }) => (
                <span
                  ref={countUpRef}
                  className="block font-bold text-4xl leading-none"
                />
              )}
            </CountUp>
            <h3 className="mt-3 text-lg font-semibold tracking-wide">
              {label}
            </h3>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Stats
