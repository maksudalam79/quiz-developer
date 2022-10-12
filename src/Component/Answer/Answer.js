import React from 'react';

const Answer = () => {
    return (
     <div className='m-4'>
          <div className="mockup-window border border-base-300">
  <div className="justify-center px-4 py-16 border-t border-base-300">
    <h1 className='text-5xl p-4'>What is the purpose of react router??</h1>
    <p>ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</p>
  </div>
</div>
          <div className="mockup-window border border-base-300">
  <div className="justify-center px-4 py-16 border-t border-base-300">
    <h1 className='text-5xl p-4'>How does work context api works??</h1>
    <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
  </div>
</div>
          <div className="mockup-window border border-base-300">
  <div className="justify-center px-4 py-16 border-t border-base-300">
    <h1 className='text-5xl p-4'>What is useref hook in react??</h1>
    <p>The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>
  </div>
</div>
          <div className="mockup-window border border-base-300">
  <div className="justify-center px-4 py-16 border-t border-base-300">
    <h1 className='text-5xl p-4'>How does useref work??</h1>
    <p>useRef returns a mutable ref object whose .current property is initialized to the passed argument ( initialValue ). The returned object will persist for the full lifetime of the component. Essentially, useRef is like a “box” that can hold a mutable value in its .current property.</p>
  </div>
</div>
     </div>
     
    );
};

export default Answer;