import React from 'react'
// import { transform } from 'typescript'

function Navbar() {
  const services = {
    name: "Services",
    link: "#about",
    classes: "transform translate ease duration-4000"
};
  return (
<div  className='w-[100%] rounded-xl  h-[10vh]  px-10 py-8 font-["NeueMontreal"] flex justify-between items-center bg-[]/30 backdrop-blur-lg'>

        <a href="">
          <div className='logo'>
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="72" height="40"  fill="none" viewBox="0 0 398.000000 131.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,131.000000) scale(0.100000,-0.100000)"
fill="white" stroke="none">
<path d="M166 1288 c-20 -28 -21 -127 -3 -152 28 -38 156 -38 184 0 18 25 17
125 -3 152 -13 19 -24 22 -89 22 -65 0 -76 -3 -89 -22z"/>
<path d="M3760 780 l0 -490 95 0 95 0 0 490 0 490 -95 0 -95 0 0 -490z"/>
<path d="M661 1215 c-107 -30 -159 -101 -169 -227 l-5 -68 97 0 96 0 0 39 c0
28 7 49 24 68 21 24 32 28 76 28 42 0 55 -4 71 -24 52 -64 3 -157 -207 -387
-153 -167 -164 -184 -164 -247 0 -55 28 -90 81 -101 18 -3 139 -6 270 -6 l239
0 0 85 0 85 -170 0 -171 0 136 157 c141 165 187 240 207 340 21 105 -24 197
-120 241 -70 32 -208 40 -291 17z"/>
<path d="M2637 1154 c-4 -4 -7 -38 -7 -76 l0 -68 -35 0 -35 0 0 -75 0 -75 35
0 35 0 0 -209 c0 -209 0 -209 28 -262 40 -76 87 -99 204 -99 l88 0 0 80 0 80
-53 0 c-29 0 -58 5 -65 12 -9 9 -12 68 -12 205 l0 192 58 3 57 3 3 73 3 72
-60 0 -60 0 -3 73 -3 72 -85 3 c-47 1 -89 0 -93 -4z"/>
<path d="M2230 1040 c-259 -9 -289 -20 -342 -128 l-33 -67 0 -170 c0 -204 14
-263 79 -331 33 -34 53 -44 100 -55 l59 -13 86 45 c47 24 88 45 92 47 4 2 18
-15 31 -37 l23 -41 68 0 67 0 -2 377 c-3 328 -5 378 -18 379 -8 0 -103 -2
-210 -6z m40 -340 l0 -160 -60 -30 c-33 -16 -69 -30 -80 -30 -64 0 -90 52 -90
177 0 101 10 147 42 180 19 20 30 23 105 23 l83 0 0 -160z"/>
<path d="M3214 1029 c-77 -24 -134 -78 -166 -157 -19 -49 -22 -76 -22 -192 0
-265 62 -370 238 -401 213 -36 354 54 368 236 l3 40 -84 0 -85 0 -7 -29 c-5
-16 -18 -39 -30 -52 -19 -20 -32 -24 -84 -24 -40 0 -68 6 -84 16 -28 20 -51
72 -51 114 l0 30 205 0 c186 0 206 2 213 18 13 31 6 186 -12 245 -23 78 -83
139 -157 161 -70 21 -170 19 -245 -5z m206 -166 c23 -20 33 -40 37 -70 l6 -43
-127 0 -128 0 7 33 c11 48 23 66 58 87 48 30 110 26 147 -7z"/>
<path d="M1215 1029 c-3 -8 -4 -225 -3 -484 l3 -470 93 -3 92 -3 0 136 c0 74
3 135 8 135 4 0 27 -14 52 -30 52 -35 101 -39 173 -14 128 44 197 207 184 434
-10 166 -47 243 -137 284 -40 18 -69 21 -252 24 -168 3 -209 1 -213 -9z m365
-197 c35 -35 50 -87 50 -172 0 -114 -23 -161 -87 -179 -25 -7 -39 -3 -86 26
l-57 35 0 159 0 159 76 0 c70 0 78 -2 104 -28z"/>
<path d="M160 630 c0 -428 6 -400 -79 -400 l-41 0 0 -80 0 -80 68 0 c93 0 141
16 182 59 58 61 60 78 60 500 l0 381 -95 0 -95 0 0 -380z"/>
</g>
            </svg>
          </div>
        </a>
        <div className='links flex gap-10 services.classes'>
    {[
        { name: "About", link: "#about"  },
        { name: "Project's", link: "https://work-portfolio-drab.vercel.app/" },
        { name: "About us", link: "https://jetal-intro.vercel.app/profile/Profile.html" },
        { name: "Insights", link: "/insights" },
        { name: "Contact", link: "/contact" }
    ].map((item, index) => (
        <a
            key={index}ø
            href={item.link}
            className="text-lg capitalize font-light cursor-pointer"
            style={{ marginLeft: index === 4 ? '10vw' : '5px' }}
        >
            {item.name}
        </a>
    ))}
</div>

    </div>
  )
}

export default Navbar
