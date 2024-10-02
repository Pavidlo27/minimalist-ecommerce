import React from 'react'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate, useSearchParams } from 'react-router-dom'

const Search = () => {
  const [searchValue, setSearchValue] = React.useState('')
  const navigate = useNavigate()
  function handleSearch(e) {
    e.preventDefault()
    if (searchValue) {
      // Navigate to the products page with the search query as a URL parameter
      navigate(`/categories?search=${searchValue}`);
    }
  }
  return (
    <form onSubmit={handleSearch} className="relative ">
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className="md:w-96 h-12 pl-5 pr-4 bg-gray-200 hover:bg-gray-300 duration-300 rounded-full"
        placeholder="Search..."
      />
      <button type='submit' className='absolute  right-4 top-1/2 transform -translate-y-1/2'>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </form>
  )
}

export default Search