function SpecificCommunity(props){
    let param = window.location.pathname.split("/").pop()

    return (
      <div>{param}</div>
    )
}

export default SpecificCommunity