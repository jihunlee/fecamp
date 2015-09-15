var numbers = [100, 200, 300];
var nested = [[1, 2, 3], ['a', 'b', 'c']];
    
var 수강생 = {
    이름: '이지훈',
    성별: '남자',
    개발자: true
};
    
function 원소(배열명, 원소순서) {
    return 배열명[원소순서];   
}
    
    
function 세제곱(num){
    return Math.pow(num, 3);
}
    
var today = new Date();

function 날짜(date){
    var day = '일월화수목금토';
    return `${date.getFullYear()}년 ${date.getMonth()}월 ${date.getDate()}일 ${day[date.getDay()]}요일`;
}
   
