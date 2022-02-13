import React from 'react'
import {useRef} from 'react'


//useRef for DOM manipulation

function UseRefEx1() {
    const inputRef = useRef()
    const paraRef = useRef()
    const onSubmit = event => {
        event.preventDefault()
        console.log(inputRef.current.value)
        // inputRef.current.value = 'Hello',
        inputRef.current.style.backgroundColor = 'red'
        paraRef.current.innerText = 'Goodbye'

    }


  return (
    <div>
        <form onSubmit={onSubmit}>

            <label htmlFor="name">Name</label>
            <input ref={inputRef}type="text" className="form-control mb-2" id="name" />
            <button type='submit' className='btn btn-primary'>Submit</button>
            <p onClick={() => inputRef.current.focus()} ref={paraRef}>hello</p>


        </form>
    </div>
  )
}

export default UseRefEx1