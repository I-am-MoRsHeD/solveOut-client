import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";


const CreateTask = () => {
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        // console.log(data)
        const tasks = {
            title: data?.title,
            description: data?.description,
            deadline: data?.deadline,
            priority: data?.priority,
            email: user?.email,
        }

        // sned data to database
        axiosPublic.post('/tasks', tasks)
            .then(res => {
                if (res.data.insertedId) {
                    reset();
                    Swal.fire({
                        title: "Added!",
                        text: "Task added into To Do list",
                        icon: "success"
                    });
                }
            })
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                {/* title */}
                <div className="form-control mb-6 border-b-2">
                    <label className="label">
                        <span className="label-text">Title</span>
                    </label>
                    <input
                        type="text"
                        name="text"
                        {...register("title", { required: true })}
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
                        name="text"
                        {...register("description", { required: true })}
                        placeholder="Description" className="textarea textarea-bordered"
                    />
                </div>
                {/* deadline and priority */}
                <div className="flex gap-3">
                    {/* deadline */}
                    <div className="form-control w-full my-1">
                        <label className="label">
                            <span className="label-text">Date*(mm/dd/yyyy)</span>
                        </label>
                        <input
                            {...register("deadline", { required: true })}
                            type="date"
                            placeholder="Date"
                            className="input input-bordered w-full" />
                    </div>
                    {/* priority */}
                    <div className="form-control w-full my-1">
                        <label className="label">
                            <span className="label-text">Priority*</span>
                        </label>
                        <select
                            defaultValue="default"
                            {...register('priority', { required: true })}
                            className="select select-bordered w-full">
                            <option disabled value="default">Select</option>
                            <option value="Low">Low</option>
                            <option value="Moderate">Moderate</option>
                            <option value="High">High</option>
                        </select>
                    </div>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Add</button>
                </div>
            </form>
        </div>
    );
};

export default CreateTask;