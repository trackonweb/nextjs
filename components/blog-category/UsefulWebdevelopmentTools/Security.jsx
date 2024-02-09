import React from 'react'

const Security = () => {
  return (
    <div>
       <div className="flex flex-col justify-start items-start  pt-5 pb-5  p-4  ">
            <span className="lg:text-[20px] text-[18px] font-bold tracking-wide border-b-2 border-b-black pb-2">
            8. Security Tools :-
            </span>
         
           
            <ul className="list-disc">
                  <li className="ml-6 pt-5">
                    <span className="font-semibold">OWASP ZAP: </span>For finding vulnerabilities, OWASP ZAP stands out as a robust security testing tool. Automated scanners further enhance its capabilities in identifying common security issues.
                  </li>
                  <li className="ml-6 pt-3">
                    <span className="font-semibold">ESLint: </span>ESLint, a JavaScript linting tool, enforces coding standards and identifies security issues. Integrating ESLint in the development process ensures code quality and security.
                  </li>
                 
                </ul>
            </div>
    </div>
  )
}

export default Security
