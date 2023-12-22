
import useAxiosPublic from "../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import useTask from "../hooks/useTask";
import SingleTask from "./SingleTask/SingleTask";
import { Droppable } from "react-beautiful-dnd";


const TaskTable = ({ task }) => {
    // console.log(task)
    const [, refetch] = useTask();
    const axiosPublic = useAxiosPublic();

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.delete(`/tasks/${id}`)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your task has been deleted.",
                                icon: "success"
                            });
                        }
                    })

            }
        });

    }

    return (
        <div>

            <Droppable droppableId="todoList">
                {
                    (provided) => (
                        <div ref={provided.innerRef} {...provided.droppableProps}>
                            <span>
                                {
                                    task?.map((data, index) => <SingleTask key={data._id} handleDelete={handleDelete} index={index} data={data}></SingleTask>)
                                }
                            </span>
                        </div>
                    )
                }
            </Droppable>
            {/* <Droppable droppableId="ongoingList">
                {
                    (provided) => (
                        <div ref={provided.innerRef} {...provided.droppableProps}>
                            <span>
                                {
                                    task?.map((data, index) => <SingleTask key={data._id} handleDelete={handleDelete} index={index} data={data}></SingleTask>)
                                }
                            </span>
                        </div>
                    )
                }
            </Droppable>
            <Droppable droppableId="completedList">
                {
                    (provided) => (
                        <div ref={provided.innerRef} {...provided.droppableProps}>
                            <span>
                                {
                                    task?.map((data, index) => <SingleTask
                                        key={data._id}
                                        handleDelete={handleDelete}
                                        data={data}
                                        index={index}
                                    ></SingleTask>)
                                }
                            </span>
                        </div>
                    )
                }
            </Droppable> */}

        </div>
    );
};

export default TaskTable;

