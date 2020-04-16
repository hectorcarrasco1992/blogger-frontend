import React, { Component } from 'react'
import {searchIt} from '../service/search'
import PropTypes from 'prop-types'
import BlogItem from './BlogItem'
import blogs from '../data/data'


const Blogs = (props)=>{
  return(
    <div>
      {props.blogs.filter(searchIt(props.searchTerm))
        .map((blogs,idx)=>{
          return(
          <BlogItem
          key ={blogs._id}
          onDelete={props.onDelete}
          onUpDate={props.onUpDate}
          blogs = {blogs}
          />
          )
      })}
    </div>
  )
}

Blogs.propTypes = {
  toggle:PropTypes.bool,
  onDelete:PropTypes.func,
  blogs:PropTypes.arrayOf(
    PropTypes.shape({
      author:PropTypes.string.isRequired,
      title:PropTypes.string.isRequired,
      article:PropTypes.string.isRequired,
      subject:PropTypes.string.isRequired,
      _id:PropTypes.string.isRequired
    })
  )
}


export default Blogs
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
 