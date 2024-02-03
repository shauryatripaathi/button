import './style.css'

function Nav(props){
    return (
    <>
        <div onClick={props.action}>{props.icon}</div>
    </>
    )
}
export default Nav;