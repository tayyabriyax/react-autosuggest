import React, { useState } from 'react'

const AutoSuggest = ({setSuggestionValue,suggestions}) => {
    const [inputValue, setInputValue] = useState("")
    const [selectedItem, setSelectedItem] = useState(-1)
    const onSearch = (searchItem) => {
        setInputValue(searchItem)
    }

    const handleKeyDown = (e) => {
        if(e.key == "ArrowUp" && selectedItem > 0){
            setSelectedItem((prev) => prev - 1)
        }
        else if(e.key == "ArrowDown" && selectedItem < suggestions.length - 1){
            setSelectedItem((prev) => prev + 1)
        }
        else if(e.key == "Enter"){
            setSuggestionValue(suggestions[selectedItem].id)
           setInputValue(suggestions[selectedItem].name)
        }
    }


    return (
        <div>
            <input
                type="text"
                id="first_name"
                className="bg-gray-50 border w-56 border-gray-300 text-gray-900 text-sm rounded-md 
                    focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 
                    dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                placeholder="John"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                required />
            <div className='bg-gray-50 rounded-md text-gray-400 flex absolute w-56
            flex-col'>
                {
                    suggestions.filter((items) => {
                        let searchTerm = inputValue.toLowerCase()
                        let fullName = items.name.toLowerCase()

                        return searchTerm && fullName.startsWith(searchTerm) && fullName != searchTerm
                    }).map((items, index) => (
                        <span className={`${selectedItem === index ? "bg-gray-200" : "bg-transparent"} hover:bg-gray-200 px-2.5 p-1.5 rounded-md`} 
                        key={Math.random()} onClick={() => onSearch(items.name)}>
                            {items.name}
                        </span>
                    ))
                }
            </div>
        </div>
    )
}

export default AutoSuggest