import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";


const Banner = () => {
    const {user} = useAuth();

    return (
        <div className="h-[100vh] my-10">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#0099ff" fillOpacity="1" d="M0,32L12.6,58.7C25.3,85,51,139,76,144C101.1,149,126,107,152,101.3C176.8,96,202,128,227,165.3C252.6,203,278,245,303,224C328.4,203,354,117,379,90.7C404.2,64,429,96,455,96C480,96,505,64,531,90.7C555.8,117,581,203,606,240C631.6,277,657,267,682,229.3C707.4,192,733,128,758,96C783.2,64,808,64,834,90.7C858.9,117,884,171,909,165.3C934.7,160,960,96,985,106.7C1010.5,117,1036,203,1061,208C1086.3,213,1112,139,1137,101.3C1162.1,64,1187,64,1213,85.3C1237.9,107,1263,149,1288,186.7C1313.7,224,1339,256,1364,266.7C1389.5,277,1415,267,1427,261.3L1440,256L1440,0L1427.4,0C1414.7,0,1389,0,1364,0C1338.9,0,1314,0,1288,0C1263.2,0,1238,0,1213,0C1187.4,0,1162,0,1137,0C1111.6,0,1086,0,1061,0C1035.8,0,1011,0,985,0C960,0,935,0,909,0C884.2,0,859,0,834,0C808.4,0,783,0,758,0C732.6,0,707,0,682,0C656.8,0,632,0,606,0C581.1,0,556,0,531,0C505.3,0,480,0,455,0C429.5,0,404,0,379,0C353.7,0,328,0,303,0C277.9,0,253,0,227,0C202.1,0,177,0,152,0C126.3,0,101,0,76,0C50.5,0,25,0,13,0L0,0Z"></path>
            </svg>
            <div className="flex justify-between mx-20 items-center">
                <div>
                    <div className="text-4xl font-bold mb-3 hover:underline">
                        <Link to={ user ? '/dashboard/personal' : '/login'}>Let's Explore!</Link>
                    </div>
                    <p>Click here and explore your task in a good way!</p>
                </div>
                <div className=" w-1/2 rounded-bl-full rounded-tl-full">

                </div>
            </div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#0099ff" fillOpacity="1" d="M0,32L12.6,58.7C25.3,85,51,139,76,144C101.1,149,126,107,152,101.3C176.8,96,202,128,227,165.3C252.6,203,278,245,303,224C328.4,203,354,117,379,90.7C404.2,64,429,96,455,96C480,96,505,64,531,90.7C555.8,117,581,203,606,240C631.6,277,657,267,682,229.3C707.4,192,733,128,758,96C783.2,64,808,64,834,90.7C858.9,117,884,171,909,165.3C934.7,160,960,96,985,106.7C1010.5,117,1036,203,1061,208C1086.3,213,1112,139,1137,101.3C1162.1,64,1187,64,1213,85.3C1237.9,107,1263,149,1288,186.7C1313.7,224,1339,256,1364,266.7C1389.5,277,1415,267,1427,261.3L1440,256L1440,320L1427.4,320C1414.7,320,1389,320,1364,320C1338.9,320,1314,320,1288,320C1263.2,320,1238,320,1213,320C1187.4,320,1162,320,1137,320C1111.6,320,1086,320,1061,320C1035.8,320,1011,320,985,320C960,320,935,320,909,320C884.2,320,859,320,834,320C808.4,320,783,320,758,320C732.6,320,707,320,682,320C656.8,320,632,320,606,320C581.1,320,556,320,531,320C505.3,320,480,320,455,320C429.5,320,404,320,379,320C353.7,320,328,320,303,320C277.9,320,253,320,227,320C202.1,320,177,320,152,320C126.3,320,101,320,76,320C50.5,320,25,320,13,320L0,320Z"></path>
                </svg>
            </div>
        </div>
    );
};

export default Banner;