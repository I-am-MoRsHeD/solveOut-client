import { Draggable } from "react-beautiful-dnd";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const SingleTask = ({ data, handleDelete, index }) => {
    const { title, description, priority, deadline, _id } = data;

    return (
        <Draggable draggableId={_id} index={index}>
            {
                (provided) => (
                    <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                        <div className="my-2 rounded-xl bg-slate-100 shadow-xl">
                            <div className="h-32 px-4">
                                <h2 className="card-title">{title}!</h2>
                                <p>{description.length > 20 ? description.slice(0, 20) + '.....' : description}</p>
                                <p>Deadline: {deadline}</p>
                                <p>Priority: {priority}</p>
                                <div className="card-actions justify-end">
                                    <FaTrash onClick={() => handleDelete(_id)} title="Delete" />
                                    <Link to={`/dashboard/update/${_id}`}> <FaEdit title="Edit" /> </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </Draggable>
    );
};

export default SingleTask;