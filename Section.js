import React from 'react'
import "./Section.css"

function Section({Icon, title, color, selected}) {
  return (
    <div className={`section ${selected && "section_selected"}`}
        style={{
            borderBottom: `3px solid ${color}`,
            color: `${selected && color}`,
        }}
    >
        <Icon/>
        <h2>{title}</h2>
    </div>
  )
}

export default Section