import React, { useState } from 'react';
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
        let [keyword, setKeyword] = useState(props.defaultKeyword);
        let [results, setResults] = useState(null);
        let [loaded, setLoaded] = useState(false);
        let [photos, setPhotos] = useState(null);

        function handleDictionaryResponse(response) {
         setResults(response.data[0]);
    }

    function handlePexelsResponse(response) {
        setPhotos(response.data.photos);
    }

    function search() {
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
            axios.get(apiUrl).then(handleDictionaryResponse);

        let pexelsApiKey = "563492ad6f91700001000001167af95a71d4405d84a04531c2cc0136";
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=3`;
        let headers = { Authorization: `Bearer ${pexelsApiKey}` };
        axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
    }
    
    function handleSubmit(event) {
            event.preventDefault();
            search();    
    }

    
   function handleKeywordChange(event) {
       setKeyword(event.target.value);
   }

   function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
  return (
        <div className="Dictionary">
            <section className="box1">
            <form onSubmit={handleSubmit}>
                <input 
                type="search" 
                onChange={handleKeywordChange} 
                autoFocus={true} 
                defaultValue={props.defaultKeyword}
                />
            </form>
            <div className="hint">
                enter a word, any word
                </div>
            </section>
            <section className="box2">
            <Results results={results} />
            <Photos photos={photos} />
            </section>
        </div>
    );
} else {
    load();
    return "Loading";
  }
}  
