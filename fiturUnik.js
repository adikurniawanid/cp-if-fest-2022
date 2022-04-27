// Eren, Armin, dan Mikasa adalah seorang Software Developer dari Perusahaan Survey Corps. Setiap perangkat lunak yang dibuat oleh Survey Corps diberi nomor seri yang setiap digitnya merupakan bilangan bulat antara 0 hingga 1000 (inklusif).

// Eren, Armin, dan Mikasa memiliki kebiasaan unik pada perangkat lunak yang mereka buat untuk perusahaan mereka. Beberapa perangkat lunak yang dirilis untuk pengguna bisa jadi memiliki fitur tambahan yang unik. Pemberian fitur unik ini dijelaskan sebagai berikut. Eren, Armin, dan Mikasa memilih tiga bilangan berbeda, sebutlah 𝐴, 𝐵, dan 𝐶. Eren memberikan fitur tambahan unik pada produk yang nomor serinya habis dibagi 𝐴 saja (namun tidak habis dibagi oleh 𝐵 maupun 𝐶), Armin memberikan fitur tambahan unik pada produk yang nomor serinya habis dibagi 𝐵 saja (namun tidak habis dibagi oleh 𝐴 maupun 𝐶), dan Mikasa memberikan fitur tambahan unik pada produk yang nomor serinya habis dibagi oleh 𝐶 saja (namun tidak habis dibagi oleh 𝐴 maupun 𝐵).

// Suatu ketika, Boss mereka bernama Erwin Smith ingin mengetahui ada berapa banyak maksimal produk dengan fitur tambahan unik untuk sekumpulan perangkat lunak yang nomor serinya di antara 𝑀𝑖𝑛 dan 𝑀𝑎𝑥 (inklusif, termasuk 𝑀𝑖𝑛 dan 𝑀𝑎𝑥 itu sendiri, dengan 𝑀𝑖𝑛 ≤ 𝑀𝑎𝑥) apabila dia juga mengetahui bilangan berbeda 𝐴, 𝐵, dan C

// Input Format

// Masukan terdiri dua baris, baris pertama adalah dua bilangan 𝑀𝑖𝑛 dan 𝑀𝑎𝑥 dengan 0 ≤ 𝑀𝑖𝑛 ≤ 𝑀𝑎𝑥 ≤ 1000 yang dipisahkan dengan spasi. Baris kedua adalah tiga bilangan berbeda 𝐴, 𝐵, dan 𝐶 dengan 2 ≤ 𝐴,𝐵, 𝐶 ≤ 1000 dengan 𝐴 ≠ 𝐵 ≠ 𝐶 yang dipisahkan dengan spasi.

// Constraints

// 0 ≤ 𝑀𝑖𝑛 ≤ 𝑀𝑎𝑥 ≤ 1000

// 2 ≤ 𝐴,𝐵, 𝐶 ≤ 1000

// Output Format

// Keluaran adalah banyaknya produk dengan fitur tambahan unik berdasarkan nomor serinya yang berada di antara 𝑀𝑖𝑛 dan 𝑀𝑎𝑥 (inklusif, termasuk 𝑀𝑖𝑛 dan 𝑀𝑎𝑥), sebagaimana dijelaskan pada deskripsi soal.

// Sample Input 0

// 1 20
// 9 4 6
// Sample Output 0

// 6
// Sample Input 1

// 20 40
// 8 9 6
// Sample Output 1

// 4

const fiturUnik = (input) => {
  input = input.split("\n");
  let [min, max] = input[0].split(" ").map(Number);
  let [a, b, c] = input[1].split(" ").map(Number);

  let count = 0;
  for (let i = min; i <= max; i++) {
    // eren
    if (i % a == 0 && i % b > 0 && i % c > 0) {
      count++;
    }
    // armin
    if (i % b == 0 && i % a > 0 && i % c > 0) {
      count++;
    }
    // mikasa
    if (i % c == 0 && i % a > 0 && i % b > 0) {
      count++;
    }
  }
  console.log(count);
};

// 6
fiturUnik(`1 20
9 4 6`);
// 4
fiturUnik(`20 40
8 9 6`);
// 4
fiturUnik(`253 843
449 908 173`);
// 29
fiturUnik(`616 871
9 421 441`);
// 2
fiturUnik(`173 671
757 459 338`);
// 0
fiturUnik(`428 494
791 871 204`);
// 12
fiturUnik(`158 271
819 28 15`);
