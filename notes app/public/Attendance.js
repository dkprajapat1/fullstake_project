document.querySelector(".notebook").addEventListener("click", () => {
    window.location.href = "/";
});
document.querySelector(".assignment").addEventListener("click", () => {
    window.location.href = "/assignment";
});

let output = document.querySelector(".display");
let submit = document.querySelector(".submit_att");
submit.addEventListener("click", () => {
    output.innerHTML = "";
    let total = parseInt(document.querySelector(".total").value);
    let current = parseInt(document.querySelector(".current").value);
    let req = parseInt(document.querySelector(".req").value);

    let a = (current * 100) / total;
    let current_att = a.toFixed(2)

    if (total > 100 || current > 100 || req > 100) {
        alert("Numbers are too high");
    } else {
        let div = document.createElement('div');
        div.className = 'dcurrent';
        let div_child = document.createElement('div');
        div_child.style.fontSize = "x-large"
        div.innerHTML = current_att + "%";
        if (current_att >= req) {
            div.style.color = 'green'
            div_child.innerHTML =  `<br/> Very good! You already have ${current_att}% attendance.`;
        } else {
            div.style.color = 'red'
            div_child.innerHTML = `<br/> You need to attend more classes to reach ${req}% attendance.`;

        }
        div.append(div_child);
        output.append(div);

        if (current_att < req) {
            let b = (100 * current - req * total) / (req - 100);
            let needed_class = b.toFixed(0)

            let div1 = document.createElement('div');
            div1.className = 'dcurrent';
            div1.style.color= "red";
            let div_child1 = document.createElement('div');
            div_child1.style.fontSize = "x-large"
            div_child1.innerHTML = `You need to attend ${needed_class} more classes to reach ${req}% attendance.`;
            div1.innerHTML = needed_class;
            div1.append(div_child1);
            output.append(div1);
        }else{
            let c = (100 *current - req * total) / (req);
            let extra_class = c.toFixed(0)

            let div2 = document.createElement('div');
            div2.style.color='green'
            div2.className = 'dcurrent';
            let div_child2 = document.createElement('div');
            div_child2.style.fontSize = "x-large"
            div_child2.innerHTML = `You can leave ${extra_class} more classes to reach ${req}% attendance.`;
            div2.innerHTML = extra_class;
            div2.append(div_child2);
            output.append(div2);
        }
    }
})

