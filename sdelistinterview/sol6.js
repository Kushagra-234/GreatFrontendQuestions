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
