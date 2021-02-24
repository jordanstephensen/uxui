import { Link } from "gatsby"
import React from "react"

import './footer.scss'

const Footer = ({ children }) => (
  <div className="footer">
    {/* <div class="footercontents"> */}
      {/* <h4 class="copyright">
        © {new Date().getFullYear()}
      </h4> */}
      <svg id="footer__flare" width="1190" height="123" viewBox="0 0 1190 123" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.8" filter="url(#filter0_f)">
        <ellipse cx="595" cy="123" rx="525" ry="53" fill="#D45550"/>
        {/* <ellipse cx="595" cy="123" rx="525" ry="53" fill="#000000"/> */}
        {/* <ellipse cx="595" cy="123" rx="525" ry="53" fill="#0000ff"/> */}
        </g>
        <defs>
        <filter id="filter0_f" x="0" y="0" width="1190" height="246" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="35" result="effect1_foregroundBlur"/>
        </filter>
        </defs>
      </svg>
      {/* <svg id="footer__flare" width="1250" height="124" viewBox="0 0 1250 124" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_bf)">
        <ellipse cx="625" cy="122" rx="565" ry="62" fill="#D45550" fill-opacity="0.3"/>
        </g>
        <defs>
        <filter id="filter0_bf" x="0" y="0" width="1250" height="244" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feGaussianBlur in="BackgroundImage" stdDeviation="0.5"/>
        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur" result="shape"/>
        <feGaussianBlur stdDeviation="30" result="effect2_foregroundBlur"/>
        </filter>
        </defs>
      </svg> */}
    {/* </div> */}
  </div>
)

export default Footer
