import data from '../data/data.json';

function EmojiGrid(props){
    return(
        <>
            {data.filter((emoji=>emoji.description.includes(props.text))).map((item,index)=>{
                return <div style={{display : props.display}} key={index}>{item.emoji}</div>
            })}
        </>
    )
}
export default EmojiGrid;