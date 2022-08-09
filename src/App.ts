//converintg to ts

function App () {

    const comments = [
        {id: 3, text: 'Three'},
        {id: 2, text: 'Two'},
        {id: 1, text: 'One'},

    ]

    const showComments = true;
    const commentBlocks= ( <ul>
        {comments.map((comment,index) => (
            <li key={index}> {comment.text} </li>
        ))}
        </ul>)

    
    return (
        <div className="div"> 
        <h1>Hello from the app component</h1>

        {showComments && commentBlocks }

        </div>
    )
}

export default App
