import React, { Component } from 'react'
import axios from 'axios'
import blogs from '../data/data'
import Search from './Search'
import CreateBlog from './CreateBlog'
import Blogs from './Blogs'
import UpdateBlog from './UpdateBlog'




// let searchIt = (term)=>(item)=> item.subject.toLowerCase().includes(term.toLowerCase())
class App extends Component{
    constructor(){
        super()
        this.state = {
            blogs:[],
            searchTerm:'',
            toggle:true,
            blog:[]
        }

        // this.onDelete = this.onDelete.bind(this)
    }

    loadBlogs =()=>{
        const url = 'blogs' // sets our backend file to the url
        axios.get(url).then((blogs)=>{
            return this.setState({blogs:blogs.data})
        })
    }

    loadBlog =(id)=>{
        axios.get(`/blog/${id}`).then((blog)=>{
            this.setState({
                toggle:false,
                blog:blog.data

            })
        })
    }

    onDelete=(id)=>{
        axios.delete(`/blog/${id}`).then(()=>
        this.loadBlogs())
        // const updatedBlogs = this.state.blogs.filter((item)=>item.objectId !== id)
        // this.setState({blogs:updatedBlogs})//use setState to update state
        // console.log('delete item with id',id)
    };

    onUpDate=(id)=>{
        return this.loadBlog(id)
        // console.log(id)
    }

    handleChange=(event)=>{
        this.setState({searchTerm:event.target.value},()=>{
            console.log(this.state.searchTerm)
        })
    };

    handleCreateBlogSubmit=(event,blog)=>{
        event.preventDefault()
        let axiosConfig = {
            headers:{
                'Content-Type':'application/json;charset=UTF-8',
                'Access-Control-Allow-Origin':'*'

            }
        }

        axios.post('/blog',blog,axiosConfig).then(()=>{
            this.loadBlogs()
        })
        
        // let updatedBlogs = [blog,...this.state.blogs]

        // this.setState({blogs:updatedBlogs})
    }

    handleUpdateBlogSubmit=(event,blog,id)=>{
        event.preventDefault()
        this.setState({
            toggle:true
        })

        let axiosConfig = {
            headers:{
                'Content-Type':'application/json;charset=UTF-8',
                'Access-Control-Allow-Origin':'*'

            }
        }

        axios.put(`/blog/${id}`,blog,axiosConfig).then(()=>{
            return this.loadBlogs()
        })
    }

    componentDidMount(){
        this.loadBlogs()
    }

    
    
    render(){
        console.log('api data....',this.state.blog)
        // console.log('original array ' ,blogs)
        return(
            <div style={{marginTop:'100px',display:'flex',justifyContent:"center",alignItems:'center',flexDirection:"column"}}>
                <Search 
                handleChange = {this.handleChange}
                searchTerm = {this.state.searchTerm}
                />
            
                <hr style={{width:'75%', color:'#3b3b3b',margin:'50px 0'}}/>

                {this.state.toggle?(<CreateBlog handleCreateBlogSubmit = {this.handleCreateBlogSubmit}/>)
                :(<UpdateBlog blog={this.state.blog} handleUpdateBlogSubmit={this.handleUpdateBlogSubmit}/>)}
                

                <hr style={{width:'75%', color:'#3b3b3b',margin:'50px 0'}}/>

                <Blogs
                blogs= {this.state.blogs}
                searchTerm = {this.state.searchTerm}
                onDelete = {this.onDelete}
                onUpDate={this.onUpDate}
                toggle ={this.state.toggle}
                />
            </div>
        )
    }
}
                        




export default App

