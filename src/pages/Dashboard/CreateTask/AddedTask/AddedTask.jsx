import useTask from "../../../../hooks/useTask";
import 'react-tabs/style/react-tabs.css';
import TaskTable from "../../../../components/TaskTable";
import { DragDropContext } from "react-beautiful-dnd";


const AddedTask = () => {
    const [tasks] = useTask();
    const todoTask = tasks?.map(task => task);

    return (
        <DragDropContext onDragEnd={() => { }}>
            <div className="bg-white rounded-xl">
                <h2 className="text-4xl font-bold text-yellow-500 w-52 mx-auto pt-10 pb-5 border-b border-black">~ All Task ~</h2>
                <div className="flex justify-evenly items-center py-10">
                    <div className="">
                        <h2 className="text-2xl font-semibold text-center bg-green-600 text-white py-2 px-5 mb-5 rounded-lg">Todo List</h2>
                        <TaskTable task={todoTask} />
                    </div>
                    <div className="">
                        <h2 className="text-2xl text-center font-semibold bg-yellow-600 text-white py-2 px-5 rounded-lg">Ongoing List</h2>
                    </div>
                    <div className="">
                        <h2 className="text-2xl text-center font-semibold bg-red-600 text-white py-2 px-5 rounded-lg">Completed List</h2>
                    </div>
                </div>
            </div>
        </DragDropContext>

    );
};

export default AddedTask;