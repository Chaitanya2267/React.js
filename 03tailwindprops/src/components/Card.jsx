function Card(props) {
    console.log("props", props);

    return (
        <div>
            <h2>{props.username}</h2>
            <p>{props.text}</p>
        </div>
    );
}

export default Card;