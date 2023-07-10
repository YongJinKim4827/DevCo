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

const convertBoardType = (type) => {
    let convertBoardType = "";
    switch(type){
        case "QUESTION" :
            convertBoardType = "Q&A"; break;
        case "KNOWLEDGE" :
            convertBoardType = "지식공유"; break;
        case "NOTICE" :
            convertBoardType = "공지사항"; break;
        case "COMMUNITY" :
            convertBoardType = "커뮤니티"; break;
        default :
            convertBoardType = "Q&A"; break;
    }
    return convertBoardType;
}