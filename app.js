import React from "react";
import ReactDOM  from "react-dom/client";



const Heading1 =()=>{
    return (
        <h1 id="heading1">
            Wiki
        </h1>
    )  
}

const Heading2 = () =>{
    return(
        <h2 id="heading2">
            Nikhil
        </h2>
    )
}

const Heading3 = () => {
    return(
            <h3 id="heading3">
                Shreekant
            </h3>                  
    )
}


const Container = (
    <div>
        <Heading1 />
        <Heading2 />
        <Heading3 />
    </div>
)    
    

// const heading2 = <h2 key="3">Heading 2</h2>;
    
// const heading3 = <h3 key="4">Heading 3</h3>;

// const heading4 = <h4 key="5">Heading 4</h4>;


    



const root  = ReactDOM.createRoot(document.getElementById('root'));

root.render(Container);