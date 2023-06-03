import react,{createContext,useContext,useState} from "react";

export const AuthData = createContext({
   
});

function AuthContext({children}){

    const [date,setDate] = useState();
    const [totalPerDay,setTotal] = useState();

    return <AuthData.Provider value={ { value1:[date,setDate] , value2: [totalPerDay,setTotal] }}>
        {children}
    </AuthData.Provider>
}

export default AuthContext ;