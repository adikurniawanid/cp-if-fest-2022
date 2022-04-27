// Alif adalah seorang yang gabut. Saat tidak ada kerjaan dia suka melipat kertas yang dia punya. Dia mempunyai kebiasaan melipat kertas pada sisi yang lebih panjang terlebih dahulu. Misalnya jika dia mempunyai kertas berukuran 120 x 80, maka dia akan melipat sisi dengan panjang 120 terlebih dahulu, sehingga ukuran kertasnya menjadi 60 x 80. Pada berikutnya dia kembali melipat kertas pada sisi dengan panjang 80, sehingga sekarang ukuran kertasnya menjadi 60 × 40.

// Jika diberikan sebuah kertas gambar dengan ukuran 𝑃 × Q, tugas Anda adalah menentukan ukuran kertas setelah dilakukan pelipatan sebanyak M kali. Jika panjang sisi yang akan dilipat adalah bilangan ganjil, maka hasil pelipatan adalah berupa pembulatan ke bawah. Misalnya jika ukuran panjang yang akan dilipat adalah 11, maka setelah lipatan ukuran tersebut menjadi 5.

const lipatKertas = (input) => {
  input = input.split("\n");

  for (let i = 0; i < input[0]; i++) {
    const data = input[i + 1].split(" ");
    let P = data[0];
    let Q = data[1];
    let M = data[2];
    loop: for (let i = 0; i < M; i++) {
      if (P == 0 && Q == 0) {
        break loop;
      }
      if (P > Q || P == Q) {
        P = Math.floor(P / 2);
      } else if (P < Q) {
        Q = Math.floor(Q / 2);
      }
    }

    if (P > Q) {
      console.log(P, Q);
    } else {
      console.log(Q, P);
    }
  }
};

// Input Format

// Baris pertama masukan adalah bilangan bulat 𝑁 yang menyatakan banyaknya kertas yang dimiliki oleh Alif. Kemudian 𝑁 baris berikutnya masing-masing terdiri dari tiga buah bilangan positif 𝑃, 𝑄, dan M. dimana P dan Q adalah ukuran kertas dan M adalah jumlah banyak lipatan.

// Constraints

// 1 <= P,Q,M <= 1000

// P,Q,dan M adalah bilangan bulat positif

// Output Format

// Untuk setiap ukuran kertas yang diberikan, program Anda harus mengeluarkan ukuran kertas setelah dilakukan 𝑀 kali pelipatan dengan ketentuan ukuran yang lebih besar dicetak terlebih dahulu.

// Sample Input 0

// 3
// 120 80 3
// 3 2 50
// 3 7 2
// Sample Output 0

// 40 30
// 0 0
// 3 1
lipatKertas(`3
120 80 3
3 2 50
3 7 2`);

//3 2
// 0 0
lipatKertas(`2
287 933 15
493 777 30`);

// 124 101
// 5 4
// 1 1
// 4 2
lipatKertas(`4
997 813 6
721 633 14
728 294 17
526 732 15`);

// 122 66
// 1 1
// 97 59
// 0 0
// 13 7
// 66 52
// 0 0
// 123 79
// 1 1
lipatKertas(`9
264 979 5
560 759 18
118 779 4
137 625 27
939 429 12
417 534 6
921 801 27
636 985 6
504 63 13`);

// 124 108
// 542 401
// 19 10
// 160 98
// 157 119
// 2 1
// 3 3
// 1 0
lipatKertas(`8
865 993 6
542 803 1
322 79 7
785 642 5
315 478 3
214 661 15
793 414 15
104 451 15`);
