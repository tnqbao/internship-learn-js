const Animal1 = {
    name: 'Dog',
    behavior: {
        eat: function() {
            console.log('Eating...');
        },
        sleep: function() {
            console.log('Sleeping...');
        }
    }
}

const Animal2 = {
    name: 'Fish',
    behavior: {
        swim: function() {
            console.log('Swimming...');
        },
        eat: function() {
            console.log('Eating...');
        }
    }
}

console.log(Animal1.name)
Animal1.behavior.eat();

console.log(Animal2.name)
Animal2.behavior.swim();