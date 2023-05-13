import react,{createContext,useContext,useState} from "react";

export const SwipeContext = createContext({
    state : false,
    setState : () => { }
});

function AuthContext({children}){

    const [swiped,setSwipe ] = useState(false)

    const value = {swiped,setSwipe}

    return <SwipeContext.Provider value={value}>
        {children}
    </SwipeContext.Provider>
}

export default AuthContext ;