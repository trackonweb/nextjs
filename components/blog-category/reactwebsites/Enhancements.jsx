import React from 'react'

const Enhancements = () => {
  return (
    <div className="flex flex-col justify-start items-start  pt-5 pb-5 p-4">
            <span className=" text-[16px] font-[600] tracking-wide border-b-2 border-b-black pb-2">
              3. Key Features and Enhancements :-
            </span>
            <span className="  leading-6  text-[15px]  pt-3">
            React 19 brings a bunch of powerful features to the table, promising a new era of UI development:
            </span>
            <ul className="list-decimal">
                  <li className="ml-6 pt-5 leading-6  text-[15px]">
                    <span className="font-semibold">Concurrency Explained Simply: </span><br/> Imagine you're juggling multiple tasks at once. React's concurrent rendering overhaul is similar. It can handle multiple updates simultaneously, prioritizing urgent ones while keeping the UI responsive. This leads to smoother transitions and a better user experience, even when dealing with complex web applications.
                  </li>
                  <li className="ml-6 pt-5 leading-6  text-[15px]">
                    <span className="font-semibold">Server-Side Rendering (SSR): A Behind-the-Scenes Hero: </span><br/>Think of SSR as preparing a delicious meal for your guests before they arrive. It allows the server to pre-render your website's content, significantly reducing the initial loading time for users. This is especially beneficial for SEO (Search Engine Optimization), as search engines can easily understand and index your content.
                  </li>
                  <li className="ml-6 pt-5 leading-6  text-[15px]">
                    <span className="font-semibold">Actions: Simplifying Interactions: </span><br/>Simplify form handling and data submission with the introduction of Actions. This exciting feature takes a declarative approach to managing user interactions, making workflows smoother and your code easier to maintain.
                    <ul className="list-disc">
                    <li className="ml-6 pt-3 leading-6  text-[15px]">
                    <span className="font-semibold">useFormStatus: </span>Stay in the loop about the form submission process, showing loading indicators, success messages, or error messages accordingly.
                  </li>
                  <li className="ml-6 pt-3 leading-6  text-[15px]">
                    <span className="font-semibold">useFormState: </span>Access the current form data state for pre-filling forms, validating user input, and submitting data to your backend.
                  </li>
                    </ul>
                  </li>
                  <li className="ml-6 pt-5 leading-6  text-[15px]">
                    <span className="font-semibold">Server Components (Experimental):  </span><br/>Explore the potential of server-side rendering for individual components with Server Components. While still in the experimental stage, this feature gives developers a peek into the future of React, combining server-side rendering benefits with the flexibility of React's component-based architecture.
                  </li>
                  <li className="ml-6 pt-5 leading-6  text-[15px]">
                    <span className="font-semibold">Web Components Integration:  </span><br/>Break down the barriers between frameworks by seamlessly integrating Web Components within your React projects. This feature encourages code reusability and creates a more interoperable development landscape.
                  </li>
                  <li className="ml-6 pt-5 leading-6  text-[15px]">
                    <span className="font-semibold">Optimistic UI Updates with useOptimistic:  </span><br/>Deliver a more responsive user experience by implementing optimistic UI updates with the useOptimistic hook. This allows you to define an optimistic state, update the UI immediately, and gracefully handle server responses for frequently performed actions.
                  </li>
                </ul>
            </div>
  )
}

export default Enhancements
