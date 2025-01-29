export const incr = () =>{
    return {
        type:"INCREMENT"
    }
}

export const decr = () =>{
    return {
        type:"DECREMENT"
    }
}

export const setBgColor = (color) =>{
    return {
        type:"change",
        payload:color
    }
}