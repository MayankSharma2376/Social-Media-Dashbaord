import React, { Component } from 'react'
import { useDispatch } from 'react-redux'
import { setUsers } from '../store'
import PostForm from '../components/PostForm'
import Post from '../components/Post'
import { usePosts } from '../hooks/usePosts'

function FeedContent(){
    const posts = usePosts()
    const dispatch = useDispatch()

    React.useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users?_limit=5")
        .then((res)=> res.json())
        .then((data)=> dispatch(setUsers(data)))

        const handleScroll = ()=>{
            if(window.innerHeight + window.scrollY >= document.body.offsetHeight){
                console.log("Load more posts....")
            }
        }

        window.addEventListener("scroll", handleScroll)
        return ()=> window.removeEventListener("scroll", handleScroll)
    }, [dispatch])


    return(
        <div className='p-4 max-w-2xl mx-auto'>
            <PostForm/>
            <div>
                {posts.map((post)=>(
                    <Post key={post.id} post={post}/>
                ))}
            </div>
        </div>
    )



}



export default class Feed extends Component{
    componentDidMount(){
        this.interval = setInterval(()=>{
            console.log("Checking for new posts....")
        }, 5000)
    }

    componentWillUnmount(){
        clearInterval(this.interval)
    }

    render(){
        return <FeedContent/>
    }
}