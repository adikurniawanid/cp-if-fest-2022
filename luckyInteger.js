// Diberi sebuah array bilangan bulat acak , lucky integer adalah bilangan bulat yang memiliki frekuensi dalam array sama dengan nilainya.

// Return lucky integer terbesar dalam array. Jika tidak ada pengembalian lucky integer Return -1.

// Input Format

// sebuah n untuk menentukan panjang array sebuah array integer

// Constraints

// 1 <= arr.length <= 500
// 1 <= arr[i] <= 500
// Output Format

// lucky integer terbesar dalam array.ika tidak ada , maka pengembalian lucky integer yaitu -1.

// Sample Input 0

// 4
// 2 2 3 4
// Sample Output 0

// 2
// Explanation 0

// Satu-satunya lucky integer dalam array adalah 2 karena frekuensi [2] == 2.

const luckyInteger = (input) => {
  input = input.split("\n");
  let arr = input[1].split(" ").map(Number).splice(0, input[0]);
  let checked = false;
  const counts = {};
  const selected = [];

  for (const num of arr) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }

  loop: for (const num of Object.keys(counts)) {
    if (num == counts[num]) {
      selected.push(num);
      checked = true;
    }
  }

  if (!checked) {
    console.log(-1);
  } else {
    console.log(Math.max(...selected));
  }
};

// 2
luckyInteger(`4
2 2 3 4 `);
// 3
luckyInteger(`6
1 2 2 3 3 3`);
// -1
luckyInteger(`5
2 2 2 3 3`);
// 1
luckyInteger(`4
4 3 1 5`);
// -1
luckyInteger(`5
6 6 6 6 6`);
// -1
luckyInteger(`4
7 8 3 5`);
