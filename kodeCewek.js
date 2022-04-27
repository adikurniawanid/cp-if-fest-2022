// Bermaksud mempersulit hidup sang pacar, Putri mengirim pesan berupa kode rahasia yang harus dipecahkan Putra. Setelah Putra memohon meminta keringanan, putri memberikan petunjuk sebagai berikut :

// Kata pertama merupakan sandi Atbash yaitu sandi yang menukar urutan huruf dari depan ke belakang dan dari belakang ke depan.
// ABCDEFGHIJKLMNOPQRSTUVWXYZ menjadi ZYXWVUTSRQPONMLKJIHGFEDCBA

// kata berikutnya merupakan sandi AN yaitu sandi yang mengelompokkan masing-masing huruf abjad menjadi pengganti huruf lain. Lebih tepatnya, huruf A – M digantikan secara berurutan dengan huruf N – Z.
// ABCDEFGHIJKLMNOPQRSTUVWXYZ menjadi NOPQRSTUVWXYZABCDEFGHIJKLM

// kata berikutnya kembali mengikuti petunjuk pertama
// Bantu Putra menerjemahkan kode rahasia dari putri agar hubungan mereka tetap damai

// Input Format

// input berupa Kalimat (Bisa lebih dari satu kata)

// Constraints

// String hanya berisi Alphabet(Huruf kapitla) dan tanda spasi( ) untuk memisahkan kata

// Output Format

// Sebuah String hasil terjemahan yang berisi Alphabet(Huruf kapitla) dan tanda spasi( ) untuk memisahkan kata

// Sample Input 0

// KVHZM ZNXNANA WLMT
// Sample Output 0

// PESAN MAKANAN DONG
// Explanation 0

// Kata "PESAN" dan "DONG" menggunakan sandi atbash. Sedangkan kata "MAKANAN" menggunakan sandi AN
const sumber = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const penerjemahAtbash = (sandiParam) => {
  const tujuanAtBash = "ZYXWVUTSRQPONMLKJIHGFEDCBA";
  let result = "";
  for (let i = 0; i < sandiParam.length; i++) {
    result += tujuanAtBash[sumber.indexOf(sandiParam[i])];
  }
  return result;
};

const penerjemahAN = (sandiParam) => {
  const tujuanAN = "NOPQRSTUVWXYZABCDEFGHIJKLM";
  let result = "";
  for (let i = 0; i < sandiParam.length; i++) {
    result += tujuanAN[sumber.indexOf(sandiParam[i])];
  }
  return result;
};

const kodeCewek = (sandiParam) => {
  const sandi = sandiParam.split(" ");

  for (let i = 0; i < sandi.length; i++) {
    if (i % 2 == 0) {
      sandi[i] = penerjemahAtbash(sandi[i]);
    } else {
      sandi[i] = penerjemahAN(sandi[i]);
    }
  }

  return sandi.join(" ");
};

//  PESAN MAKANAN DONG
console.log(kodeCewek("KVHZM ZNXNANA WLMT"));
//  TERSERAH
console.log(kodeCewek("GVIHVIZS"));
//  AKU LAPAR
console.log(kodeCewek("ZPF YNCNE"));
//  JANGAN LUPA BELI SEBLAK
console.log(kodeCewek("QZMTZM YHCN YVOR FROYNX"));
//  AKU MAU MAKAN PECEL LELE
console.log(kodeCewek("ZPF ZNH NZPZM CRPRY OVOV"));
//  KITA PUTUS
console.log(kodeCewek("PRGZ CHGHF"));
