function number(num) {
  if (num % 2 === 0) {
    return "Bilangan Genap";
  } else {
    return "Bilangan Ganjil";
  }
}
console.log(number(11));

function days(day) {
  switch (day) {
    case 1:
      return "Senin";
    case 2:
      return "Selasa";
    case 3:
      return "Rabu";
    case 4:
      return "Kamis";
    case 5:
      return "Jumat";
    case 6:
      return "Sabtu";
    case 7:
      return "Minggu";
    default:
      return "Hari tidak valid";
  }
}
console.log(days(7));
