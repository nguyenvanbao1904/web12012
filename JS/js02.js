let month = Number(prompt("Nhập tháng"));
let year = Number(prompt("Nhập năm"));
let days = document.getElementById("days");

days.innerHTML = `Tháng ${month} năm ${year} có ${calculateDay(month,year)} Ngày`

function isLeapYear(year)
{
    return ( year % 400 == 0 ) || ( year % 4 == 0  &&  year % 100 != 0 );
}
function calculateDay(month, year)
{
    switch(month)
    {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            return 31;
        case 4:
        case 6:
        case 9:
        case 11:
            return 30;
        case 2:
            if(isLeapYear(year))
            {
                return 29;
            }
            else
            {
                return 28;     
            }
        default: return 0;
    }
}

function showDate()
{
    var d = new Date();
    var day = d.getDate();
    var m = d.getMonth() + 1;
    var y = d.getFullYear();
    var thu = d.getDay() + 1;

    document.getElementById("date").innerHTML="Hôm nay , "+ (thu==1 ?"Chủ nhật " : "Thứ "+thu)+ " ngày "+ day + " tháng " + m + " năm " + y;
    setInterval(showTime,1000);
}
    function showTime()
{
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    document.getElementById("time").innerHTML = h + ":" + ( m < 10 ? "0" + m : m ) + ":"+ ( s < 10 ? "0" + s : s );
}


