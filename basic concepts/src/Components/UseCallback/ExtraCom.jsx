import { memo, useMemo } from "react";

const ExtraComp = memo(() => {
    console.log('Render Extra Component')
    const sum = useMemo(() => {
        let total = 0;
        for(let i = 1; i<= 1000000000; i++){
            total += i;
        }
        return total;
    })
    return (
        <>
            <h3>Total : {sum}</h3>
        </>
    )
})

export default ExtraComp;