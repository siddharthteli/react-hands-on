const tasks = [{
        id: 1,
        text: "Go to supermarket",
        day: "Feb 5th at 2:30pm",
        reminder: true,
    },
    {
        id: 2,
        text: "Go to supermarket",
        day: "Feb 5th at 2:30pm",
        reminder: true,
    },
    {
        id: 3,
        text: "Go to supermarket",
        day: "Feb 5th at 2:30pm",
        reminder: true,
    },
];



const Tasks= () => {
    return(
    <>
{
    tasks.map((task) => { return(
        <h1>{task.text}</h1>
        
    )})
}
    </>)
}

export default Tasks;