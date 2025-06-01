import { useOptimistic, useState, useRef, startTransition } from "react";

function Todo({ tasks, addTaskAction }) {
    const formRef = useRef();
    function formAction(formData) {
        addOptimisticTask(formData.get("task"));
        formRef.current.reset();
        startTransition(async () => {
            await addTaskAction(formData);
        });
    }
    const [optimisticTasks, addOptimisticTask] = useOptimistic(
        tasks,
        (state, newTask) => [
            { task: newTask, sending: true },
            ...state,
        ]
    );

    return (
        <>
            <form action={formAction} ref={formRef}>
                <input type="text" name="task" placeholder="Add Something..." />
                <button type="submit">Add</button>
            </form>
            {optimisticTasks.map((task, index) => (
                <div key={index}>
                    {task}
                    {!!task.sending && <small> (Sending...)</small>}
                </div>
            ))}

        </>
    );
}

export default function UseOptimisticExample() {
    const [tasks, setTasks] = useState([
        { task: "Sending Email" }
    ]);
    async function addTaskAction(formData) {
        await new Promise((res) => setTimeout(res, 3000)); //sending API
        const newTask = formData.get("task");
        startTransition(() => {
            setTasks((tasks) => [{ task: newTask }, ...tasks]);
        })
    }
    return <Todo tasks={tasks} addTaskAction={addTaskAction} />;
}
