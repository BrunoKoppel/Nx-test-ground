import React, { useEffect, useState } from 'react';

var Counter = function() {
    const[count, setCount] = useState(0);

    return(
        <div >
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    )
}

export default Counter;