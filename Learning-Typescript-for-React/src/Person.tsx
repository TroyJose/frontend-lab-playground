// import { useState } from "react";
export interface User {
    name: string;
    age: number;
    isMarried: boolean
}

// export const Person = (props: Person) => {
//     // const [isShowInfo, setShowInfo] = useState<boolean>(false)
//     const [personBio, setPersonBio] = useState<string | null>(null)

//     const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         setPersonBio(event.target.value)
//     }
//     // const toggleInfo = () => {
//     //     setShowInfo((prev) => !prev)
//     // }


//     return (
//         <div>
//             {/* {isShowInfo && (
//                <>
//                    <p>Name: {props.name}</p>
//                    <p>Age: {props.age}</p>
//                    <p>This person {props.isMarried ? "is married" : "is single"}</p>
//                </>
//             )}
//             <button onClick={toggleInfo}>Toggle Info</button> */}
//             <div>
//                 <p>Name: {props.name}</p>
//                 <p>Age: {props.age}</p>
//                 <p>This person {props.isMarried ? "is married" : "is single"}</p>
//                 <p>
//                     {" "}
//                     {props.name} Bio: {!personBio ? "No Bio Available" : personBio}
//                 </p>
//                 <input onChange={handleChange}/>
//             </div>
//         </div>
//     )
// }

export const User = (props: User) => {
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>This person {props.isMarried ? "is married" : "is single"}</p>
        </div>
    )
}