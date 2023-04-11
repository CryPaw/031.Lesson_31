    class Student {
    constructor(firstName, lastName, birthDay, marks) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDay = birthDay;
        this.marks = marks;
        this.absence = new Array(25);
        this.absenceIndex = 0;
        this.age = this.getAge(birthDay);
        this.averageMark = this.marks.reduce((r, m) => r + m) / this.marks.length;
        this.presenceFactor = 0.9;
        this.goodMarksMin = 90;
        this.results = {
            BAD: "Редиска!",
            NORMAL: "Добре, але можна краще",
            GOOD: "Молодець!"
        };

        this.getStudentInfo = function () {
            console.group (`${this.firstName + ' ' + this.lastName} info:`);
            console.log ("BirthDay date: " + this.birthDay);
            console.log ("Marks: " + this.marks);
            console.log ("AverageMark: " + this.averageMark);
            console.log ("Results: " + this.summary());
            console.groupEnd();
        };
    }

    absent() {
        if (this.absence.length > this.absenceIndex) {
            this.absence[this.absenceIndex] = false;
            this.absenceIndex++;
        }
    };

    present() {
        if (this.absence.length > this.absenceIndex) {
            this.absence[this.absenceIndex] = true;
            this.absenceIndex++;
        }
    };

    get avaragePresence() {
        let precenceCount = this.absence.slice(0, this.absenceIndex).filter(x => x).length;
        return precenceCount / this.absenceIndex;
    }    

    getAge(dateString) {
        let today = new Date();
        let birthDate = new Date(dateString);
        let age = today.getFullYear() - birthDate.getFullYear();
        let m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

    summary() {
        if (this.averageMark < this.goodMarksMin && this.avaragePresence < this.presenceFactor) {
            console.log(this.results.BAD);
        } else if (this.averageMark < this.goodMarksMin || this.avaragePresence < this.presenceFactor)
            console.log(this.results.NORMAL);
        else
            console.log(this.results.GOOD);
    }
}

let yuriy = new Student('Yuriy', 'Kich', '01/20/1993', [90, 60, 90]);
let bogdan = new Student('Bogdan', 'Xan', '03/28/1986', [90, 90, 90]);

console.log(yuriy.getStudentInfo());
console.log(bogdan.getStudentInfo());