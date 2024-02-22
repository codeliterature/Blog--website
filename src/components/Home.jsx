import React, {useContext, useEffect} from 'react';
import StateContext from '../context/context';
import Card from "./Card";
import Skeleton from './Skeleton';

const Home = () => {
  const {fetchBlogs, blog} = useContext(StateContext);
  useEffect(()=>{
   fetchBlogs()
  },[]);
 
  return (
    <>    
      <div className="">
      <h1 className="text-center text-2xl font-bold">Blogs</h1>
        <hr className='my-2 border-secondary'/>
       
    </div>
      <div className="grid gap-4 grid-cols-1 grid-rows-1 md:grid-rows-3 md:grid-cols-3 place-items-center">
        
        {blog.length !== 0 ? ([...blog].reverse().map((item)=>{
            return <Card key={item._id} title={item.title} description={item.description} id={item._id} author={item.author} date={item.date} tag={item.tag} views={item.views} />
          })) : <Skeleton/>
        }
      </div>
      </>

  );
};

export default Home;