'use client'

import { ChangeEvent, useState } from "react"

const FLIP_EMOJI = "🤸‍♂️";

export default function Home() {
  const [query, setQuery] = useState('Bakit malungkot ang beshy ko?')

  const transformedText = query.trim()
    ? query.split(/\s+/).join(` ${FLIP_EMOJI} `)
    : `${FLIP_EMOJI}${FLIP_EMOJI}${FLIP_EMOJI}`

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value ?? '')
  }

  return (
    <main className="flex min-h-screen flex-col items-center gap-16 p-20 pt-0 max-md:p-5 max-md:gap-5 place-content-center bg-court-image bg-no-repeat bg-center">
      <div className="relative flex flex-col place-items-center">
        <p className="text-[100px]">{FLIP_EMOJI}</p>
        <p className="text-4xl max-md:text-2xl text-red-400 font-bold uppercase drop-shadow-[3px_2px_0_rgba(0,0,0,0.25)]">
          Add <span className="text-white">cartwheels</span> to your sentence!
        </p>
      </div>

      <div className="text-black bg-white rounded w-7/12 max-md:w-11/12 hover:scale-[1.01] p-10 transition-all drop-shadow-sm hover:drop-shadow-lg">
        <div>
          <label className="text-grey font-bold text-xs" htmlFor="query">
            Type in your sentence below
          </label>
          <input
            id="query"
            className="border-b border-black w-full p-0.5 outline-none"
            type="text"
            value={query}
            onChange={handleChange}
          />
        </div>
        <div className="p-0.5 pt-10">
          <i>
          &lsquo;{transformedText}&rsquo;
          </i>
        </div>
      </div>

      <span className="fixed bottom-5 right-5 text-white opacity-20">
        Photo by {" "}
        <a href="https://unsplash.com/@jcmerollin?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Juan Carlos Bayocot
        </a>
        on {" "}
        <a href="https://unsplash.com/photos/1dv6HlzhGwE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Unsplash
        </a>
      </span>
    </main>
  )
}
