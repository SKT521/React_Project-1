//PascalCasing - Whenever a function is created keep it capital
function Message() {
    //JSX: JavaScript XML

    // const name = 'SKT';
    // return <h1>Hello {name}</h1>;
    const name = 'SKT';
    if(name)
        return <h1>Hello {name}</h1>;
    return <h1> Hello World</h1>;
}
export default Message;