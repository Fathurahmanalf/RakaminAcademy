var plat = prompt("Jenis plat kendaraan (mobil/motor):");
var mobilCC = prompt("Kapasitas mesin kendaraan (dalam CC):");


if (plat === "kuning" || plat === "motor") {
    bahanBakar = "BBM subsidi";
} else if (mobilCC < 1500) {
    bahanBakar = "PERTAMAX";
} else {
    bahanBakar = "PERTAMAX Turbo";
}

document.write(`Jenis kendaraan: ${plat}, Kapasitas mesin: ${mobilCC} CC `);
document.write(`Jenis bahan bakar yang cocok: ${bahanBakar}`);
