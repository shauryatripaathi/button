function SearchBar(props){
    return(
        <>
        <input type="text" placeholder="Search" value={props.value} onChange={props.handleChange}/>
        </>
    )
}
export default SearchBar;