import React, {useEffect, useState} from 'react'
import axios from 'axios';


// 0310b2eb
// 15ccf50b5061bb83fbd7907fa4fd1074	

const MainComponents = () => {
  
    const APP_ID = "f643af62";
    const APP_KEY = "2a8e753613ccb01b4d26d9716e1b971d";
    
    const[recipes, setRecipes]=useState([]);
    const[serach, setSearch] = useState('');
    const [query, setQuery]= useState("chicken");
    
    useEffect(()=>{
      axios.get(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`).then((res)=>{
        setRecipes(res.data)
          console.log(res.data)

        })
     
    },[query]);

    // useEffect(()=>{
    //     getRecipes();
    // }, [query])
    
    // const getRecipes = async () => {
    //     const response = await fetch
    //       (`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    //     const data = await response.json();
    //     // setRecipes(data.hits);
    //   };


    const  updateSearch = (e)=>{
      setSearch(e.target.value);
    };

    const getSearch=(e)=>{
      e.preventDefault();
      setQuery(serach);
      setSearch("");
    }


  return (
    <div>
      <from className="from" onSublimt={getSearch}>
        <div className='container'>

          <div className='container-item'>
            <div className='relative'>
              <label for="full-name">Search Recipe</label>
              <input type='text' id='full-name' value={serach} onChange={updateSearch}/>
            </div>
            <button type='submit' className='btn'>Search</button>
          </div>
        </div>
      </from>
      
      <section className=''>
        <div className=''>
          <div className=''>
            {recipes.map((recipes)=>(
               <img className='' src={recipes.image} alt='blog' ></img>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
 
}

export default MainComponents
