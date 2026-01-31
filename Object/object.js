// let product = {
//     Name: "",
//     Price: 799,
//     Qty: 2,
//     Total: function() {
//         return this.Qty * this.Price
//     },
// }
// product.Name = prompt("Enter product name");
// console.log(product); 

// let date = new Date("2026-01-31 3:36:54.54");
// console.log(date.toLocaleTimeString());

// let d = new Date();

// console.log(d.getFullYear());   // 2026
// console.log(d.getMonth());      // 0–11 (Jan = 0)
// console.log(d.getDate());       // 1–31
// console.log(d.getDay());        // 0–6 (Sun = 0)

// console.log(d.getHours());      // 0–23
// console.log(d.getMinutes());    // 0–59
// console.log(d.getSeconds());    // 0–59
// console.log(d.getMilliseconds());


function calculateAge(dob) {
  let birthDate = new Date(dob);
  let today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();
  return age;
}

console.log(calculateAge("2004-05-10"));

