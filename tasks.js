
function task1(numbers) {
let cutCem = 0;
let tekCem = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        cutCem += numbers[i];
    } else {
        tekCem += numbers[i];
    }
}
return cutCem * tekCem
}

console.log(task1([12, 45, 22, 31, 8, 17, 29, 40, 55, 90]));


function task2(numbers) {
    let enBoyuk = numbers[0];
    let enKicik = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > enBoyuk) {
            enBoyuk = numbers[i];
        }
        if (numbers[i] < enKicik) {
            enKicik = numbers[i];
        }
    }

    return { enBoyuk, enKicik };
}

const result = task2([45, 3, 12, 78, 4, 90, 23]);
console.log(`en boyuk: ${result.enBoyuk}, en kicik: ${result.enKicik}`);


function task3() { 
    for (let i = 1; i <= 50; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) { 
            console.log ("Fizz");
        } else if (i % 5 === 0) {
            console.log ("Buzz");
        } else {
            console.log(i);
        }
    }      
}
task3();


function task4(qiymet, musteri) {
    let standartQiymet;

    if (musteri === 'VIP') {
        standartQiymet = qiymet * 0.8; 
    } else {
        standartQiymet = qiymet;
    }
    console.log(`Mushteri statusu: ${musteri}`);
    console.log(`Esas qiymet: ${qiymet}`);
    console.log(`Endirimli qiymet: ${standartQiymet}`);
    return standartQiymet;
}

task4(200, 'VIP');
task4(200, 'standart');


function task5(eded1, eded2, operator) {
    let netice;

    switch (operator) {
        case '+':
        netice = eded1 + eded2;
        break;
        case '-':
        netice = eded1 - eded2;
        break;
        case '*':
        netice = eded1 * eded2;
        break;
        case '/':
        netice = eded1 / eded2;
        break;
    }
    console.log(`emeliyyat: ${eded1} ${eded2} ${operator} = ${netice}`);
    return netice;
}
task5(10, 5, '+');
task5(10, 5, '*');
task5(10, 5, '/');
task5(10, 5, '-');


function task6(istifadeciAdi, parol) {
    const dogruAd = 'karim';
    const dogruParol = 'password';

    if (istifadeciAdi !== dogruAd) {
        console.log("Yanlis Istifadeci Adi");
    } else if (parol !== dogruParol) {
        console.log("Yanlis Parol");
    } else {
        console.log("Giris Ugurludur");
    }
}

task6('karim', 'password');
task6('karim', 'salam');
task6('mamed', 'parol');


function task7(temperatur) {
    if (temperatur < 0) {
        console.log("Soyuq Hava");
    } else if (temperatur >= 0 && temperatur <= 25) {
        console.log("Mulayim Hava");
    } else {
        console.log("Isti Hava");
    }
}

task7(-1);
task7(18);
task7(29);


function task8(a, b, c) {
    let enBoyuk;
    if (a > b && a > c) {
        enBoyuk = a;
    } else if (b > a && b > c) {
        enBoyuk = b;
    } else {
        enBoyuk = c
    }
    console.log(`en boyuk ed: ${enBoyuk}`);
    return enBoyuk;
}
task8(36, 58, 70);


function task9(name, duty, salary, experience) {
    let calcSalary = salary;

    if (experience > 5) {
        calcSalary += salary * 0.25;
    } else if (experience >= 3 && experience <= 5) {
        calcSalary += salary * 0.15; 
    }
    console.log(`${name}, Umumi maashiniz ${calcSalary} AZN-dir.`);
    return calcSalary;
}

task9('John Doe', 'Developer', 4000, 6);
task9('Elizabeth Queen', 'Designer', 2000, 4);


function task10(arr) {
    let tersArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        tersArr.push(arr[i]);
    }
    return tersArr;
}
console.log(task10([1,2,3,4,5]));
console.log(task10(['a', 'b', 'c','d']));