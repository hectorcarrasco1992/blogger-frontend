import React from 'react'



export let searchIt = (term)=>(item)=> item.subject.toLowerCase().includes(term.toLowerCase())