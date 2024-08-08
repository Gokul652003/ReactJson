import React from 'react'

function Justinfo({activestate,textcase}){
    console.log("rendering JustInfo")

    return(
        <div>
            Justinfo {activestate},
        </div>
    )
}

export default React.memo(Justinfo)