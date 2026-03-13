// closure is formed when a function can remember and access its lexical scope even when the function is executing outside its lexical scope.,
// it can access variables from outer function scope

const ArrowUp = () => {
  let count = 0;

  function ArrowDown() {
    count++;
    console.log(count);
  }

  return ArrowDown;
};

const val = ArrowUp();

val();

const handleCLick = useCallback(() => {
  console.log("hello");
}, []);

// 1:25 se 2:25 tk machine coding revise

function removeDuplicate(arr) {
  let map = {};
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (!map[arr[i]]) {
      map[arr[i]] = true;
      result.push(arr[i]);
    }
  }

  return result;



}

str.split("").reverse().join("")




