import { useParams } from "react-router-dom";
import useTask from "../../hooks/useTask";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";


const UpdateTask = () => {
    const [tasks, refetch] = useTask();
    const { id } = useParams();
    const [task, setTask] = useState([]);
    const axiosPublic = useAxiosPublic();

    useEffect(() => {
        const findTask = tasks.filter(task => task._id === id)
        setTask(findTask);
    }, [id, tasks])

    // console.log(task[0]);

    const handleEdit = e => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const description = form.description.value;
        const deadline = form.deadline.value;
        const priority = form.priority.value;
        const updatedTask = {
            title,
            description,
            deadline,
            priority
        }
        console.log(updatedTask)

        // updated request sent to server
        axiosPublic.patch(`/tasks/${id}`, updatedTask)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Edited successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    return (
        <div>
            <form onSubmit={handleEdit} className="card-body">
                {/* title */}
                <div className="form-control mb-6 border-b-2">
                    <label className="label">
                        <span className="label-text">Title</span>
                    </label>
                    <input
                        type="text"
                        name="title"
                        defaultValue={task[0]?.title}
                        placeholder="Title" className="input"
                    />
                </div>
                {/* description */}
                <div className="form-control mb-6 border-b-2 ">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea
                        type="text"
                        name="description"
                        defaultValue={task[0]?.description}
                        placeholder="Description" className="textarea textarea-bordered"
                    />
                </div>
                {/* deadline and priority */}
                <div className="flex gap-3">
                    {/* deadline */}
                    <div className="form-control w-full my-1">
                        <label className="label">
                            <span className="label-text">Deadline*(mm/dd/yyyy)</span>
                        </label>
                        <input
                            defaultValue={task[0]?.deadline}
                            type="date"
                            name="deadline"
                            placeholder="Date"
                            className="input input-bordered w-full" />
                    </div>
                    {/* priority */}
                    <div className="form-control w-full my-1">
                        <label className="label">
                            <span className="label-text">Priority*</span>
                        </label>
                        <select
                            defaultValue={task[0]?.priority}
                            name="priority"
                            className="select select-bordered w-full">
                            <option disabled value="default">Select</option>
                            <option value="Low">Low</option>
                            <option value="Moderate">Moderate</option>
                            <option value="High">High</option>
                        </select>
                    </div>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Save</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateTask;