// otp input ka sample i mean how to make otp input form

// decalre a array state usestate
const [otpInput, setOtpInput] = useState(["", "", "", ""]);


function outer(){
    var outer="lexical"

    function inner(){
        return outer
    }

    return inner
}

const count=outer()()


// useEffect runs after render and paint, while useLayoutEffect runs after render but before paint, blocking UI paint.
// useEfect after paint run hota and uselayouteffect before paint run hota and after render 
// useLayoutEffect synchronous and useEffect asynschronous 
// ✔ Measuring DOM size
// ✔ Scroll position fix
// ✔ Prevent flicker