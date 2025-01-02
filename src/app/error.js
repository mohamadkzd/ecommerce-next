"use client"

const Error = ({error,reset}) => {
    return ( 
      <div>
        <h2 className="w-50 mx-auto " style={{fontSize:"18px"}}>{error.message}</h2>
        <button onClick={()=>reset()}>تلاش دوباره</button>
      </div>
     );
}
 
export default Error;
