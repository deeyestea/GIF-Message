import { React, useState } from "react";
import { GiphyFetch } from "@giphy/js-fetch-api";
import { Carousel } from "@giphy/react-components";

const giphyFetch = new GiphyFetch("sXpGFDGZs0Dv1mmNFvYaGUvYwKX0PWIh");

const SearchGif = () => {
    const [keyword, setKeyword] = useState("");
    // const [gifs, setGifs] = useState([])


    const fetchGifs = async (offset) => {
        // console.log("fun called");
        return await giphyFetch.search(keyword, { offset, limit: 10 })
        // setGifs(res.data)    
        // console.log(res);

    };

    // const handleClick = () => {
    //     fetchGifs()
    // }

    return (
        <div className="gifs">
            <input
                value={keyword}
                type="text"
                onChange={e => setKeyword(e.target.value)}
            />
            {/* <button onClick={handleClick}>Add</button> */}
            <Carousel
                key={keyword}
                fetchGifs={() => fetchGifs(5)}
                gifHeight={200}
                gutter={6}
            />
            {/* <div>
                {
                    gifs.map(gif => (
                        <div style={{ display: 'flex', width: '100px', height: '100px' }}>{gif.data.embed_url}</div>
                    ))
                }
            </div> */}
        </div>
    );
}

export default SearchGif