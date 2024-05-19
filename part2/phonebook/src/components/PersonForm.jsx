import React from 'react'

const PersonForm = (props) => {
    // console.log(props)
  return (
    <div>
        <form onSubmit={props.handleSubmit}> 

            <div>
            name: <input 
            value={props.nameValue}
            onChange={props.handleNewNameChange}
            
            />
            </div>

            <div>
            number: <input 
            value={props.numberValue}
            onChange={props.handleNewNumberChange}
            />


            </div>
            <div>
            <button type='submit'>add</button>
            </div>
        </form>
      </div>
  )
}

export default PersonForm