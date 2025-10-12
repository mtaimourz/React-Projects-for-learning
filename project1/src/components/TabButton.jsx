
export default function TabButton({children}){
    return (
        <li>
            <button>{children}</button>
        </li>
    )
}




// using attributes
// export default function TabButton({label, ...props}){
//     return (
//         <li>
//             <button {...props}>{label}</button>
//         </li>
//     )
// }


