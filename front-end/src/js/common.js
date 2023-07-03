const calcuationTime = (date) => {
    let writeDate = new Date(date);
    let currentDate = new Date();
}

const convertDate = (date) => {
    let convertDateType = new Date(date);
    if(!date){
        return;
    }
    let convertDate = `${convertDateType.getFullYear()}-${addZero(convertDateType.getMonth() + 1)}-${addZero(convertDateType.getDate())}`
    let convertTime = `${addZero(convertDateType.getUTCHours())}:${addZero(convertDateType.getUTCMinutes())}:${addZero(convertDateType.getUTCSeconds())}`
    return `${convertDate} ${convertTime}`;
}

const addZero = (number) => {
    let addZeroNum = number;
    if(number < 10){
        addZeroNum = `0${number}`;
    }
    return addZeroNum;
}