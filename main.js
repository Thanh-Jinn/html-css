

let tongNut = 9;
let nutHover = 5;

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    let nut = i * 3 + j + 1;

    let mau = "tối";

    if ((i <= Math.floor((nutHover - 1) / 3)) && (j <= (nutHover - 1) % 3)) {
      mau = "sáng";
    }

    console.log(`Ô số ${nut}: ${mau}`);
  }
}
