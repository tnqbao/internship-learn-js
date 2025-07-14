const arr = [1, 2, 3, 4, 5];

const addr = ["Quang Nam", "Quang Binh", "Da Nang", "Quang Ngai"]

const user = [["Bao", addr[0], 21], ["Tien", addr[1], 21], ["Khoa", addr[1], 21], ["Quan", addr[2], 21], ["Phong", addr[3], 21]]

for (let i = 0; i < arr.length; i++) {
    console.log(user[i]);
}

console.log("-------------------")
user.push(["Dat", addr[0], 17])

for (let i = 0; i < user.length; i++) {
    console.log(user[i]);
}

