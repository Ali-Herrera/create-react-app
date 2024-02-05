import Post from './Post';
import NewPost from './NewPost';
import classes from './PostList.module.css';

function PostList(props) {
    return (
    <>
        <NewPost />
        <ul className={classes.posts}>
            <Post author ='Ali' body= 'react.js is awesome!' />
            <Post author='Seth' body='learning is fun!' />
        </ul>
    </>
    )
}

export default PostList;