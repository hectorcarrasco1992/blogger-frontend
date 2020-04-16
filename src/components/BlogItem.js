import React from 'react'
import Button from './Button'
import PropTypes from 'prop-types'
let BlogItem = ({onDelete,onUpDate,blogs:{title,author,subject,article,_id:id}})=>{
    return(
        <div key={id} className="ui card" style={{width:"75%",padding:"20px"}}>
            <div className="content">
                <div className="header">Title: {title}</div>
                <br/>
                <div className="meta">Author:{author}</div>
                <div className="meta">Subject: {subject}</div>
                <hr/>
                <div className="description">{article}</div>
               
                <Button 
                className='ui primary button' 
                onClick={()=>{
                    return onDelete(id)
                        }} 
                style={{margin:"10px 15px"}}
                >Delete
                </Button>
                
                <Button 
                className='ui primary button' 
                onClick={()=>{
                    return onUpDate(id)
                        }} 
                style={{margin:"10px 15px",backgroundColor:"green"}}
                >update
                </Button>
            </div>
        </div>
       
    )
}

// BlogItem.propTypes = {
//     toggle:PropTypes.bool,
//     onDelete:PropTypes.func,
//     onUpDate:PropTypes.func,
//     blogs:PropTypes.arrayOf(
//       PropTypes.shape({
//         author:PropTypes.string.isRequired,
//         title:PropTypes.string.isRequired,
//         article:PropTypes.string.isRequired,
//         subject:PropTypes.string.isRequired,
//         _id:PropTypes.string.isRequired
//       })
//     )
//   }

export default BlogItem