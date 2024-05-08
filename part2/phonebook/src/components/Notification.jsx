const Notification = ({message}) => {

    if (!message) {
        return null;
    }

    const nottificationStyle = {
        color: message.bool? 'green' : 'red',
        backgroundColor: 'lightgray',
        fontSize: '20px',
        borderStyle: 'solid',
        borderRadius: '5px',
        padding: '10px',
        marginBottom: '10px'

    }
   
    
    return (
        <div style={nottificationStyle}>
            {message.initial}
        </div>
    )
    
}

export default Notification