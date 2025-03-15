import React from 'react'

export default function Form({onSubmit}) {
  return (
    <form onSubmit={onSubmit}>
          <input onChange={(e) => console.log(e.target.value)} type="text"/>
          <button>Submit!</button>
        </form>
  )
}
