const Hello = (props) => {
    return (
    <div style={{color: props.color, backgroundColor: props.background}}>
        <h1>The word is: {props.hello}</h1>
    </div>
    );
};

export default Hello;