function dateMaker(){
    let d = new Date();
    let t = document.getElementById('today');
    t.innerHTML = d.toLocaleDateString();
}

function localSave(t){
    localStorage.setItem('text', t);
}

function localRestore(t){
    r = localStorage.getItem('text');
    if (r != ""){
        t.value = r;
    }

}

function memTest(){
    console.log(localStorage.getItem('text'));
}

function resTest(){
    let t = document.getElementById('entry');
    let m = localStorage.getItem('text');
    t.value = m;
    updateCount();
}

function localClear(){
    localStorage.clear();
}

function timeRefresh(){
    let h = document.getElementById('h');
    let m = document.getElementById('m');
    let d = new Date();

    let hour = d.getHours();
    let min = d.getMinutes();

    if (hour == 0){
        hour = 12;
    }else if (hour > 12) {
        hour -= 12;
    }

    if (min < 10){
        min = '0' + min;
    }

    h.innerHTML = hour;
    m.innerHTML = min;
}

function updateCount(){
    let t = document.getElementById('entry').value.trim();
    let wc = document.getElementById('wCount');
    let n = t.split(/\s+/).length;
    if(t == ""){
        n = 0;
    }
    wc.innerHTML = n;

    if (n % 3 ==0){
        localSave(t);
    }

}

dateMaker();
timeRefresh();
setInterval(timeRefresh, 1000);
localRestore(document.getElementById('entry'))
updateCount();
