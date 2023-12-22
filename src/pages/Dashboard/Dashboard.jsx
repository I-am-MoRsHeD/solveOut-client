import { RxExit } from "react-icons/rx";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

const Dashboard = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const hadnleLogout = () => {
        Swal.fire({
            title: "Do you want to log out?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes"
        }).then((result) => {
            if (result.isConfirmed) {
                logout()
                    .then(() => {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Logged out successfully",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate('/');
                    })
                // Swal.fire({
                //     title: "Deleted!",
                //     text: "Your file has been deleted.",
                //     icon: "success"
                // });
            }
        });
    }
    return (
        <div className="my-3">
            <div className="flex justify-between items-center mx-14 my-4">
                <div>
                    <a className="text-xl font-thin bg-gradient-to-r from-transparent via-sky-200 to-transparent p-2">SolveOut</a>
                </div>
                <div className="flex gap-4 justify-center items-center">
                    {user?.photoURL ? <img className="w-10 rounded-full" src={user?.photoURL} alt="" /> : <img className="w-10 border-2 rounded-full" src="https://i.ibb.co/xFfZf8f/noPhoto.jpg" alt="" />}
                    <h2 className="text-base font-semibold">{user?.displayName}</h2>
                    <RxExit onClick={hadnleLogout} title="Logout" className="cursor-pointer"></RxExit>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <ul className="w-1/4 px-5 bg-gray-200 mx-5 py-20 space-y-5 menu text-2xl h-screen">
                    <li>
                        <NavLink className="bg-sky-400" to='/dashboard/personal'>Personal Task</NavLink>
                    </li>
                    <li>
                        <NavLink className="bg-sky-400" to='/dashboard/create'>Create Task</NavLink>
                    </li>
                    <li>
                        <NavLink className="bg-sky-400" to='/dashboard/added'>Added Task</NavLink>
                    </li>
                    <div className="divider"></div>
                    <li>
                        <NavLink className="bg-orange-400" to='/'>Home</NavLink>
                    </li>
                </ul>

                <div className="w-3/4 p-5 bg-slate-200 h-screen">
                    <Outlet></Outlet>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;