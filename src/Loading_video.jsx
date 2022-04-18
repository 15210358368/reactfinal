import { useState } from 'react';
import { useEffect } from "react";


function Loading_video() {

    const [isLoading,setIsLoading] = useState(true);

    useEffect(() =>{
    new Promise(resolve =>
    setTimeout(() => resolve(),5000)).then(
      () => setIsLoading(false)
    )

},[setIsLoading]);


  return (
    <div className="load">
       
       {isLoading ? <div><img className="load_pic" src="ld.gif" alt="a gif shows loading"></img><div className="load_para">Video is loading....</div></div>:<div><iframe src="//player.bilibili.com/player.html?aid=80585971&bvid=BV18J411W7cE&cid=137902788&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
       </div>}
    </div>
  );
}


export default Loading_video;
