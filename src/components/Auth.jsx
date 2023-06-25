import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { keepLogin } from "../storage/AuthReducer";

function Auth({children}){
    
    const dispatch = useDispatch();
    const {user} = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(keepLogin());
    }, [dispatch]);

    return <>{children}</>
}

export default Auth;