import AutoSuggest from "./components/AutoSuggest"

function App() {
  function setSuggestionValue(val){
    console.log(val)
  }

  const options = [
    {
        name: "Tayyab Riaz",
        id: 1
    },
    {
        name: "Tahir Ilyas",
        id: 2
    }
]
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <AutoSuggest setSuggestionValue={setSuggestionValue} suggestions={options} />
    </div>
  )
}

export default App
