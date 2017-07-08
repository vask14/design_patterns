function User(name) {
    this.lastVisitDate = {
        "year":2017,
        "month":7,
        "day":5,
        "time":22
    };
    this.globalDiscount = 0;
    this.nightDiscount = 0;
    this.weekendDiscount = 0;
    this.ordersCount = Random(1,50);
    this.ordersTotalPrice = Random(50,300);
    this.bonus = 0;
}
var user = new User('John');

user.setGlobalDiscount = function(globalDiscount) {
    this.globalDiscount = globalDiscount;
}
user.setNightDiscount = function(nightDiscount) {
    this.nightDiscount = nightDiscount;
}
user.setWeekendDiscount = function(weekendDiscount) {
    this.weekendDiscount = weekendDiscount;
}
user.setBonus = function(bonus) {
    this.bonus = bonus;
}

function getDiscount() {
    var date = new Date();
    var day = date.getDay();
    var hour = date.getHours();
    var dayCheck = 0;
    var hoursCheck = 0;
    var sum = 0;

    if(day === (6||0)) {
        user.setWeekendDiscount(15);
        dayCheck = 1;
        sum = 15;
    }
    else {
        dayCheck = 0;
    }
    if(hour == (23||0||1||2||3||4||5)) {
       user.setNightDiscount(10);
       hoursCheck = 1;
       sum += 10;
    }
    else{
        user.setNightDiscount(0);
        hoursCheck = 0;
    }
    if((dayCheck == 0) && (hoursCheck == 0)) {
        user.setGlobalDiscount(sum);
    }
    if((dayCheck == 1) && (hoursCheck == 0)) {
        user.setGlobalDiscount(sum);
    }
    if((dayCheck == 0) && (hoursCheck == 1)) {
        user.setGlobalDiscount(sum);
    }
    if((dayCheck == 1) && (hoursCheck == 1)) {
        user.setGlobalDiscount(sum);
    }
}

getDiscount();

function getBonus() {
    var MAX_BONUS = 240;
    var DAYS = 10;
    var lastVisitHours= this.lastVisitDate;
    var now = new Date();
    var hourNow  = Math.floor(Math.abs(now - lastVisitHours)/ 36000);
    var result = this.getBonus;
    var activeHours = DAYS * 24;
    if(hourNow <= activeHours) {
        result += MAX_BONUS - hourNow;
        result += this.ordersCount;
    }
}
getBonus();

function page() {
    var $discount = document.getElementById('sale'),
        $bonus = document.getElementById('discount'),
        $orderTotal = document.getElementById('ordersTotal'),
        $ordersCount = document.getElementById('ordersCount')
        
        $discount.innerHTML = user.globalDiscount;
        $bonus.innerHTML = user.bonus;
        $ordersCount.innerHTML = user.ordersCount;

        user.setordersTotal = this.ordersTotalPrice + user.bonus / user.globalDiscount;
        $orderTotal.innerHTML = user.ordersTotalPrice;

}
page();

function Random(min,max) {
    return Math.round(Math.random() * (max - min) + min);
}