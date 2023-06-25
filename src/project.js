const Project = () => {
    tasks = [];

    const addTask = (task) => {
        tasks.push(task);
    }

    return { tasks, addTask };
}

export {Project};