const names = ["Halo", "Angel", "Nyoman", "Ketut", "Aisyah"];

// TODO: Fungsi utama
// Menerima 2 parameter: list nama dan callback sort
// Mengembalikan array of string dengan format:
// "1. Nama"
// "2. Nama"
// ...
const sorter = (arr, callback) => {
  const sortedArr = callback(arr);

  for (let index = 0; index < sortedArr.length; index++) {
    sortedArr[index] = `${index + 1}. ${sortedArr[index]}`;
  }

  return sortedArr;
};

// TODO: Fungsi untuk mengurutkan array of string secara ascending
// mengembalikan array yang sudah diurutkan
const sortAscending = (arr) => {
  const newArr = [...arr];

  for (let index = 0; index < newArr.length; index++) {
    for (let deepIndex = index + 1; deepIndex < newArr.length; deepIndex++) {
      if (newArr[deepIndex] < newArr[index]) {
        [newArr[deepIndex], newArr[index]] = [newArr[index], newArr[deepIndex]];
      }
    }
  }
  
  return newArr;
};

// TODO: Fungsi untuk mengurutkan array of string secara descending
// mengembalikan array yang sudah diurutkan
const sortDescending = (arr) => {
  const sorted = sortAscending(arr);
  const newArr = [];

  for (let index = sorted.length - 1; index >= 0; index--) {
    newArr.push(sorted[index]);
  }

  return newArr;
};

// ! JANGAN DIMODIFIKASI
(function main() {
  console.log(sorter?.(names, sortAscending)?.join("\n"));
  console.log(sorter?.(names, sortDescending)?.join("\n"));
})();

module.exports = {
  sorter,
  sortAscending,
  sortDescending,
  names,
};
