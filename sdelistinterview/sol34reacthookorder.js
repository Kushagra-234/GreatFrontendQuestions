// “Hooks ko loop/condition/nested function ke andar isliye nahi likhte kyunki React hooks ko array index se track karta hai. Agar order render-to-render change ho gaya toh React wrong state wrong hook ko bind kar dega. Isliye rule hai: always call hooks at top level, in the same order.

// useEffect(()=>{
    // useffect me cleanup tab call hota hai before component unmounts and before next call happens 
    // useEffect cleanup runs before the next effect execution and when the component unmounts.

    // 
// },[])


// modern react lifecycle of components 
// 1- mounting,updating,unmounting 


// componentdidmount,componentdidupdate,componentwillunmount



