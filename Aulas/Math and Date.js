//Random number between one and 10
//math.floor = get the float out. (10.3 = 10)
function random_number_1_to_10 () {
    let randomNumber = Math.floor(Math.random() * 10 + 1);
    console.log(randomNumber);
}

//Round to the closer integer number
function round_to_closer_number () {
    let roundedNumber = Math.round(3.7);
    console.log(roundedNumber);
}

//Round to next integer
function round_up () {
    let roundedUpNumber = Math.ceil(4.2)
    console.log(roundedUpNumber);
}

//Simulate throwing a dice
function dice () {
    return Math.floor(Math.random() * 6 + 1);
}

//Dice game
function dice_game () {
    let dice1 = dice();
    let dice2 = dice();

    let total = dice1 + dice2;
    
    console.log('You launched the dices...');
    console.log('1° Dice:', dice1);
    console.log('2° Dice:', dice2);
    console.log('Total:', total);
}

//Date method
function  date_method () {
    let data = new Date();
    let year = data.getFullYear();
    let month = data.getMonth() + 1;
    let day = data.getDate();
    let hour = data.getHours();
    let minutes = data.getMinutes();
    let seconds = data.getSeconds();
    let milisseconds = data.getMilliseconds();

    let daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    let dayOfTheWeek = daysOfTheWeek[data.getDay()]

    console.log('Year:', year)
    console.log('Month:', month)
    console.log('Day:', day)
    console.log('Day of The week:', dayOfTheWeek)
    console.log('Hour:', hour)
    console.log('Minutes:', minutes)
    console.log('Seconds:', seconds)
    console.log('Milisseconds:', milisseconds)
    
}

//Manipulating datas
function manipulating_datas () {
    let data2 = new Date();
    data2.setFullYear(2022);
    data2.setMonth(11);
    data2.setDate(31);
    data2.setHours(23);
    data2.setMinutes(59);
    data2.setSeconds(59);
    data2.setMilliseconds(999);
}

//Adding days
function adding_days () {
    const data3 = new Date();
    data3.setDate(data3.getDate() + 7);
    console.log(data3)
}

