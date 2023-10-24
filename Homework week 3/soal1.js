var suhu = ("Inputkan suhu:");


if (-100 <= suhu && suhu <= 0) {
kondisi = "beku";
} else if (1 <= suhu && suhu <= 100) {
kondisi = "cair";
} else if (101 <= suhu && suhu <= 500) {
kondisi = "uap";
} else {
kondisi = "tidak terdefinisi";
}

console.log(`Air pada suhu ${suhu} derajat Celsius dalam kondisi ${kondisi}.`);