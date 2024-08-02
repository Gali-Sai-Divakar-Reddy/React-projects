import React from 'react'
import { countries} from '../utils/countries'
import { categories } from '../utils/categories'

const Filters = ({ country, setCountry, category, setCategory, handleApplyFilters }) => {
  return (
        <form onSubmit={handleApplyFilters} className='max-w-sm mx-auto w-full mt-5'>
            <div>
                <label className='block mb-2 text-sm  font-medium text-gray-900 dark:text-white'>
                
                    <select className='block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' value={country} onChange={(e) => setCountry(e.target.value)}>
                    {countries.map((country) => (
                        <option key={country.code} value={country.code}>
                        {country.name}
                        </option>
                    ))}
                    </select>
                </label>
            </div>
            <div>
                <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                    <select className='block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="">Select Category</option>
                    {categories.map((category) => (
                        <option key={category} value={category}>
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                        </option>
                    ))}
                    </select>
                </label>
            </div>
            <button className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700' type="submit">Apply Filters</button>
        </form>
  )
}

export default Filters