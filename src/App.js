import { useState } from 'react'
import './input.css'

export default function App() {
  const [colors, SetColors] = useState()
  return (
    <section>
      <div className="w-full h-screen duration-200" style={{ backgroundColor: colors }}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-full">
            <button className="outline-none px-4 rounded-full py-1 bg-red-700  text-white shadow-lg"
              onClick={() => SetColors("red")}>Red</button>
            <button className="outline-none px-4 rounded-full py-1 bg-green-700  text-white shadow-lg"
              onClick={() => SetColors("green")}>Green</button>
            <button className="outline-none px-4 rounded-full py-1 bg-blue-600  text-white shadow-lg"
              onClick={() => SetColors("blue")}>Blue</button>
          </div>
        </div>
      </div>
    </section>
  );
}

