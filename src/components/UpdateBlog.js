import React, { Component } from 'react'
import Button from './Button'
import PropTypes from 'prop-types'
class UpdateBlog extends Component{
    constructor(){
        super()
        this.state={
            blog:{title:'',subject:'',author:'',article:'',objectId:new Date().getTime()},
            
        }
    }

    handleChange=(event)=>{
        let  updatedBlog = {...this.state.blog}
        updatedBlog[event.target.name]=event.target.value
        this.setState({blog:updatedBlog},()=>{
            console.log(updatedBlog)
        })
    }

    handleSubmit =(event)=>{
        event.preventDefault()
        this.props.handleUpdateBlogSubmit(event,this.state.blog,this.props.blog._id)
        let emptyBlog = {title:'',author:'',subject:'',article:'',}
        this.setState({blog:emptyBlog})
        event.target.reset()
    }
    render(){
        return(
            
            <div style={{margin:"40px"}}>
                <h1>Update Blog</h1>
                <form onSubmit={this.handleSubmit} className="ui form">
                    <div className="equal width fields">
                        <div className="field">
                            <label >Title</label>
                            <div className="ui fluid input">
                                <input 
                                type="text"
                                
                                name="title"
                                defaultValue={this.props.blog.title}
                                onChange={this.handleChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="equal width fields">
                        <div className="field">
                            <label >Author</label>
                            <div className="ui fluid input">
                                <input 
                                type="text"
                                
                                name="author"
                                defaultValue={this.props.blog.author}
                                onChange={this.handleChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="equal width fields">
                        <div className="field">
                            <label >SUBJECT</label>
                            <div className="ui fluid input">
                                <input 
                                type="text"
                                
                                name="subject"
                                defaultValue={this.props.blog.subject}
                                onChange={this.handleChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="equal width fields">
                        <div className="field">
                            <label >ARTICLE</label>
                            <div className="ui fluid input">
                                <input 
                                type="text"
                                
                                name="article"
                                defaultValue={this.props.blog.article}
                                onChange={this.handleChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="field">
                        <Button 
                        className="ui button" 
                        type="submit">
                            Submit
                        </Button>
                    </div>
                </form>

                <hr/>
                
  

            </div>
        )
    }

}

UpdateBlog.propTypes = {
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

export default UpdateBlog
