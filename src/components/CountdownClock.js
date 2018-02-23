import React from 'react'

export default ({ value, size }) => (
  <svg
    version="1.0"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    width={`${size}rem`}
    height={`${size}rem`}
    viewBox="0 0 500 500"
    enableBackground="new 0 0 500 500"
    xmlSpace="preserve"
  >
    <g id="Body">
      <circle fill="#999999" cx="250" cy="250" r="225"/>
      <circle fill="#003399" cx="250" cy="250" r="215"/>
      <circle fill="#FFFFFF" cx="250" cy="250" r="205"/>
      <line fill="none" stroke="#333333" strokeWidth="6" strokeMiterlimit="10" x1="250" y1="45" x2="250" y2="455"/>
      <line fill="none" stroke="#333333" strokeWidth="6" strokeMiterlimit="10" x1="45" y1="250" x2="455" y2="250"/>
      <line fill="none" stroke="#333333" strokeWidth="6" strokeLinecap="round" strokeMiterlimit="10" x1="157.5" y1="89.786" x2="197.5" y2="159.067"/>
      <line fill="none" stroke="#333333" strokeWidth="6" strokeLinecap="round" strokeMiterlimit="10" x1="89.786" y1="157.5" x2="159.068" y2="197.5"/>
      <line fill="none" stroke="#333333" strokeWidth="6" strokeLinecap="round" strokeMiterlimit="10" x1="89.787" y1="342.499" x2="159.069" y2="302.499"/>
      <line fill="none" stroke="#333333" strokeWidth="6" strokeLinecap="round" strokeMiterlimit="10" x1="157.502" y1="410.213" x2="197.502" y2="340.932"/>
      <line fill="none" stroke="#333333" strokeWidth="6" strokeLinecap="round" strokeMiterlimit="10" x1="342.502" y1="410.213" x2="302.502" y2="340.93"/>
      <line fill="none" stroke="#333333" strokeWidth="6" strokeLinecap="round" strokeMiterlimit="10" x1="410.217" y1="342.498" x2="340.934" y2="302.496"/>
      <line fill="none" stroke="#333333" strokeWidth="6" strokeLinecap="round" strokeMiterlimit="10" x1="410.216" y1="157.497" x2="340.932" y2="197.497"/>
      <line fill="none" stroke="#333333" strokeWidth="6" strokeLinecap="round" strokeMiterlimit="10" x1="342.5" y1="89.782" x2="302.498" y2="159.065"/>
    </g>
    <g id="Hand">
      <path
        fill="#0066CC" stroke="#000000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"
        style={{
          transform: `rotate(${value * 6}deg)`,
          transformOrigin: 'center center'
        }}
        d="M268.79,220.478L250,45l-18.79,175.478C221.467,226.692,215,237.587,215,250c0,19.33,15.67,35,35,35s35-15.67,35-35 C285,237.587,278.533,226.692,268.79,220.478z"
      />
    </g>
  </svg>
)
