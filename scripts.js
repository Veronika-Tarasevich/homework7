const plainObject = {
    name: 'John',
    age: 35,
    isMarried: true,
  };
  
  console.log(plainObject);


//Использую полученные знания, реализуйте экземпляр любого объекта. Объект должен иметь, как внутренние, так и доступные для пользователя, свойства и методы. 
//Чайник. Возможные методы: ввод инф. о чайнике (мощность, объем, кол-во воды), вкл./выкл., расчет времени закипания воды.

let Kettle = function(name){
    this.name = name;
    this.status = false; // чайник выключен

    this.watt = +prompt('введите число мощность чайника' + this.name);
    this.volumeWater = +prompt('введите объем воды в чайнике' + this.name);

    this.costEnergy = 0.3; // стоимость электроэнергии за 1Квт;

    const waterHeatCaparate = 0.603; // константа теплопроводности

    this.workTime           //скорость закипания



    this.onOff = function() {
    // определяем время включения чайника
        this.status = !this.status;

        if(this.status) this.timeOn = new Date()
        //this.timeOff = new Date();
    };

    // информация о скорости закипания чайника
    this.get = function () {

        if (this.status = true ) {
            this.workTime = this.volumeWater * waterHeatCaparate * 80 / this.watt; // закипание воды от комнатной температуры до темп кипения
        } else {
            this.workTime = 0;
        };

        //this.operation();
 
    };
 // рассчитываем затраты на электроэнергию

    this.operation = function () {
         this.result = (this.watt / 1000) * this.costEnergy * this.workTime;

         this.show();
};

    this.show = function () {
 
    if (this.workTime == 0 || this.workTime == undefined) {
        console.log('Чайник' + this.name + ' не включен');
    } else {
        console.log('Чайник' + this.name + ' проработал - ' + this.workTime + 'ч, и стоимость потраченой электроэнергии составляет = ' + this.result + 'р.');
    }
};

}





let Kettle1 = new Kettle(1);
let Kettle2 = new Kettle(2);
let Kettle3 = new Kettle(3);
let Kettle4 = new Kettle(4);
let Kettle5 = new Kettle(5);





console.log(Kettle1);
console.log(Kettle2);
console.log(Kettle3);
console.log(Kettle4); 
console.log(Kettle5);