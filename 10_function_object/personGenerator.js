
const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,

    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Екатерина",
            "id_2": "Дарья",
            "id_3": "Ирина",
            "id_4": "Елена",
            "id_5": "Оксана",
            "id_6": "Ольга",
            "id_7": "Ульяна",
            "id_8": "Галина",
            "id_9": "Людмила",
            "id_10": "Анна"
        }
    }`,

    patronymicJson: `{
        "count": 10,
        "list": {
            "id_1": "Валерьев",
            "id_2": "Викторов",
            "id_3": "Алексеев",
            "id_4": "Денисов",
            "id_5": "Андреев",
            "id_6": "Михайлов",
            "id_7": "Иванов",
            "id_8": "Александров",
            "id_9": "Сергеев",
            "id_10": "Петров"
        }
    }`,

    professionMaleJson: `{
        "count": 10,
        "list": {
            "id_1": "Кровельщик",
            "id_2": "Сантехник",
            "id_3": "Оператор",
            "id_4": "Юрист",
            "id_5": "Плотник",
            "id_6": "Электрик",
            "id_7": "Программист",
            "id_8": "Охранник",
            "id_9": "Пожарный",
            "id_10": "Инженер"
        }
    }`,

    professionFemaleJson: `{
        "count": 10,
        "list": {
            "id_1": "Воспитатель",
            "id_2": "Учитель",
            "id_3": "Стюардесса",
            "id_4": "Швея",
            "id_5": "Парикмахер",
            "id_6": "Продавец",
            "id_7": "Связистка",
            "id_8": "Актриса",
            "id_9": "Певица",
            "id_10": "Медсестра"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomGender: function() {
        return Math.floor(Math.random()*2) == 1 ? this.GENDER_MALE : this.GENDER_FEMALE;
    },

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`; 
        return obj.list[prop];
    },

    randomFirstName: function() {
        if (this.person.gender == 'Мужчина') {
            return this.randomValue(this.firstNameMaleJson);
        } else {

        return this.randomValue(this.firstNameFemaleJson);
        }

    },

    randomPatronymic: function() { 
        if (this.person.gender == 'Мужчина') {
            return this.randomValue(this.patronymicJson) + "ич";
        } else {
            return this.randomValue(this.patronymicJson) + "на";
        }
    },


     randomSurname: function() {
        if (this.person.gender == 'Мужчина') {
            return this.randomValue(this.surnameJson);
        } else {

        return this.randomValue(this.surnameJson)+"a";
        }

    },



    randomMonth31: function randomMonth() { 
        let months = [`января`, `марта`, `мая`,	`июля`,	`августа`, `октября`, `декабря`];
        let month = months[Math.floor(Math.random() * 7)];
        return month;
    },
    
    randomMonth30: function randomMonth() { 
        let months = [`апреля`, `июня`, `сентября`, `ноября`];
        let month = months[Math.floor(Math.random() * 4)];
        return month;
    },

    randomMonthFeb28: function randomMonth() { 
		let month = `февраля`
		return month;
	},

    rendomYear: function() { // Функция генерации Года
        return this.randomIntNumber(1940, 2000) + " г.р.";
    },

    randomРrofession: function() { 
        if (this.person.gender == 'Мужчина') {
            return this.randomValue(this.professionMaleJson);
        } else {
            return this.randomValue(this.professionFemaleJson);
        }
    },


    getPerson: function () {
        const mon = Math.floor(Math.random() * 3);
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surname = this.randomSurname();
        this.person.patronymic = this.randomPatronymic();
        if (mon === 0) {
            this.person.month = this.randomMonth31();
            this.person.day = this.randomIntNumber(1, 31); 
        } else if (mon === 1) {
            this.person.month = this.randomMonth30();
            this.person.day = this.randomIntNumber(1, 30); 
        } else if (mon === 2) {
            this.person.month = this.randomMonthFeb28();
            this.person.day = this.randomIntNumber(1, 28); 
        }
        this.person.year = this.rendomYear(1940, 2000);
        this.person.profession = this.randomРrofession();
        return this.person;
    }
};
