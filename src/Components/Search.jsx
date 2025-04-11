<<<<<<< HEAD
import React from 'react'

const Search = ({ searchTerm,setSearchTerm }) => {
    return (
        <div className="search">
            <div>
                <img src="search.svg" alt="search" />
                <input type="text"
                       placeholder="Search for movies"
                       value={searchTerm}
                       onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
        </div>
    )
}
=======
import React from 'react'

const Search = ({ searchTerm,setSearchTerm }) => {
    return (
        <div className="search">
            <div>
                <img src="search.svg" alt="search" />
                <input type="text"
                       placeholder="Search for movies"
                       value={searchTerm}
                       onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
        </div>
    )
}
>>>>>>> 61d2222f4d95d332a88436b12dfe29f3388ef653
export default Search