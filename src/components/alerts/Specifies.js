 const Specifies = function(props){
    return(
        <div className="specify" style = {{ backgroundColor : props.color }}>
            <h3>{props.text}</h3>
        </div>
    )
}

export default Specifies