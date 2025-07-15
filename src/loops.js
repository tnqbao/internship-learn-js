const users = [
    {
        name: "Bao",
        position : "Mentee"
    },
    {
        name: "Tung",
        position : "Mentor"
    },
    {
        name: "Huy",
        position : "supporter"
    }
]

for (let i = 0; i < users.length; i++) {
    console.log(users[i]);
}

for (const user of users) {
    console.log(user.name + " is " + user.position);
}

let count = users.length - 1;

while (true) {
    if (users[count--].position === "Mentee") {
        console.log("Found a mentee: " + users[count + 1].name);
        break;
    }
}

const isStop = false
do {
    console.log("Hello, world!");
} while (isStop);