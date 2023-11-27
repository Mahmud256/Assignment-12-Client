import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import app from "../../firebase/firebase.config";
import { FcGoogle } from 'react-icons/fc';



const LoginAuth = () => {
    // const [user, setUser] = useState(null);
    const auth = getAuth(app);
    const axiosPublic = useAxiosPublic();
    const provider = new GoogleAuthProvider();
    const location = useLocation();
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName
                }
                console.log('User Info:', userInfo); // Check if the user object is correctly populated

                // setUser(userInfo);

                // Display a success message with SweetAlert2
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log("Done:",res.data);
                        navigate(location?.state ? location.state : '/');

                    })
            })
            .catch((error) => {
                console.error('Error:', error); // Log the error to see if there are any issues
                // Handle the error as needed

                // Display an error message with SweetAlert2
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Google login failed. Please try again later.',
                });
            });
    }



    return (
        <div>
            <p className='text-center'>Or Login with <button onClick={handleGoogleSignIn} className='btn text-[2rem] w-full'><FcGoogle></FcGoogle>
                Google</button></p>
        </div>
    );
};

export default LoginAuth;