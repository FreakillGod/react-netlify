import React, { useEffect } from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const{setSearch}=useGlobalContext();

  const searchDrinks=React.useRef('');

  const handleInput=()=>{
    setSearch(searchDrinks.current.value);
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
  }

  useEffect(()=>{
    searchDrinks.current.focus();
  },[])

  return (
    <section className='section search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>search your favourite drinks</label>
          <input type='text' id='name' ref={searchDrinks} onChange={handleInput} />
        </div>
      </form>
      
    </section >
  )
}

export default SearchForm
