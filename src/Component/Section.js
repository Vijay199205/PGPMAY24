import React from 'react'
import Footer from './Footer'

export default function Section({rollNo, marks, subject,children}) {
  return (
    <div>
     {/* <h1> {rollNo}, {marks}, {subject}</h1> */}
     {children}
      <Footer roll ={rollNo}  mark={marks} subj={subject}/>
    </div>
  )
}
