import React, { useEffect, useReducer, useState } from 'react'
import './Usage.css'
function valuereducer(state,arg){
    if(arg=="incre"){
        return state+1
    }
    else{
        return state-1
    }
    

}

function Usage() {
    let [value, dispacth] = useReducer(valuereducer,0)
    let [color, setcolor] = useState("white")
    let [boom, setboom] = useState(false)

    useEffect(() => {
        setboom(false)
        const id = setTimeout(() => {
            setboom(true)
        }, value * 1000);

        return () => {
            clearTimeout(id)
        }
    },[value])

    function Increment() {
        // setvalue(value + 1)
    }


    return (
        <div>
            <div className='usage'>
                <div className='ut' style={{ background: color }}>
                    <button onClick={()=>dispacth('incre')}>Increment</button>
                    <label>{value}</label>
                    <button onClick={() => dispacth("decre")}>Decrement </button>
                    <button onClick={() => setcolor("green")}>Green</button>
                    <button onClick={() => setcolor("red")}>Red</button>
                    <button onClick={() => setcolor("blue")}>Blue</button>
                </div>

            </div>

            {
                boom && value ?(
                    <div className='boom'>
                        <h1>Booom</h1>
                    </div>

                ):null
            }



        </div>
    )
}

export default Usage