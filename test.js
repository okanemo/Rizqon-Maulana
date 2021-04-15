test = (input) => {
  let result = "";
  let current;
  let count = 1;

  for (let i = 0; i <= input.length; i++) {
    if (input[i] == current) {
      count++;

      if (input[i + 1] !== current) {
        result += count.toString() + input[i];

        if (i + 1 < input.length && input[i + 2] != input[i + 1]) {
          result += input[i + 1];
        }
        count = 1;
      }
    }
    current = input[i];
  }

  console.log(result);
};

test("aaaabcccaaa");
