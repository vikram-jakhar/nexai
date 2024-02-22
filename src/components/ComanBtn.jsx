import React from 'react'

const ComanBtn = (props) => {
    return (
        <>

            <button onClick={props.fun} className={` ${props.padding}  isolation-auto z-10 hover:text-black duration-500 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-0  before:bg-[white] before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700
relative text-nowrap bg-[#02CDCF] border border-solid border-[#02CDCF] rounded-[12px] recharge text-[18px]  text-[#000] font-bold p-[18px_32px_18px_32px]`}>
                {props.text}
            </button>
        </>
    )
}

export default ComanBtn