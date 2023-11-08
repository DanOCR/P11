import {useState, useEffect} from "react"
import {useSelector, useDispatch} from "react-redux"
import {useNavigate} from "react-dom"
import {register, reset} from "../features/auth/authSlice"

export default function Register() {

    const [formData, setFormData] = useState( {
        // name: "",
        email: "",
        password: "",
    }) 

    const {email, password} = formData

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user, isLoading, isError, isSuccess, message} = 
    useSelector((state) => state.auth)

    useEffect(() => {
        if(isSuccess || user) {
            navigate("/")
        }
        dispatch(reset())
        
    }, [user, isError, isSuccess, message, navigate, dispatch])



    const onChange = () => {
        setFormData((prevState) => ( {
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }
    const onSubmit = (e) => {
        e.preventDefault()

        const userData = {
            email,
            password,
        }
        dispatch(register(userData))
    }

    return (
    <div> 
        <h1>Register </h1>
        <section className="form">
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <input type="text" id="name" 
                    name="name" value={name} onChange={onChange}/>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-dash"> Submit </button>
                </div>
            </form>

        </section>
    </div>

    )

}

