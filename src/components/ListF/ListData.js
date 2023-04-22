import React from 'react'
import List from './List'

function ListData(props) {
  return (
    <div>
        { props.input ==='' && 
         <>
            <List/>
            <List/>
            <List/>
        </>}
    </div>
  )
}

export default ListData