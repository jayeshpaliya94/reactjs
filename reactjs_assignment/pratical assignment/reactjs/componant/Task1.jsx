import React from 'react'
//functional componant example
const Welcome = () => {
  return (
    <div>
      <>
      <div>
        <h3>Welcome react frist Task.</h3>
      </div>
      </>
    </div>
  )
}

export default Welcome

//functional componant

import React from "react";

function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

export default Greeting;
<Greeting name="Jayesh" />


//Class componant example
// import React from 'react'
// class HelloComponant extends React.Component {
//   render() {
//     return <h1>Hello!</h1>;
//   }
// }

// export default HelloComponant
