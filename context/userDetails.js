import { createContext, useContext, useState } from 'react'

const userContext = createContext()
export const useUserDets = useContext(userContext)

const userDetails = ({childern}) =>
{
    const [userName, setuserName] = useState('')

    return(
        <userContext.Provider
            value={{ userName, setuserName }}
        >
            {childern}
        </userContext.Provider>
    )
}

export default userDetails