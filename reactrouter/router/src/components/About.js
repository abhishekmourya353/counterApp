import React from 'react';
import { useNavigate } from 'react-router-dom';
const About =()=>{
    const navigate = useNavigate();
    function clickHandler() {
        //move to support page
        navigate("/Labs")
    }
return (
<div>
    This about page
    <button onClick={clickHandler}> move to labs page</button>

</div>
)
}
export default About