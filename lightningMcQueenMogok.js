// McQueen melaju dengan kecepatan n ( n:float ) per detik, namun akibat mesinnya yang mogok kecepatannya berkurang sebanyak 1.5 perdetik.

// Sisa jarak pertandingan adalah m ( m:float ), maka tentukanlah waktu yang diperlukan agar bisa menempuh jarak tersebut

// jika kecepatan McQueen ( n:float ) mencapai <= 10, maka kecepatannya tidak lagi berkurang

// Input Format

// Baris pertama merupakan n ( n:double ), yaitu kecepatan perdetik McQueen saat mesinnya mulai mogok
// Baris Kedua merupakan m ( m:double), yaitu jarak yang perlu McQueen tempuh.
// Constraints

// ( 0 < n < 10^10 )

// ( 0 < m < 10^20 )

// n < m

// Output Format

// Satu Baris yang berisi jumlah detik yang diperlukan McQueen untuk menyelesaikan pertandingan ( n:integer) dibulatkan ke atas

// Sample Input 0

// 150
// 10000
// Sample Output 0

// 367

lightningMcQueenMogok = (input) => {
  let [kecepatan, jarak] = input.split("\n").map(Number);
  let waktu = 0;

  while (jarak > 0) {
    waktu += 1;
    jarak -= kecepatan;
    if (kecepatan > 10) {
      kecepatan -= 1.5;
    }
  }
  console.log(waktu);
};

// 367
lightningMcQueenMogok(`150
10000
`);

// 1007615
lightningMcQueenMogok(`99999999
99999999999999
`);

// 41
lightningMcQueenMogok(`400
15000
`);

// 2
lightningMcQueenMogok(`1500
1501
`);
