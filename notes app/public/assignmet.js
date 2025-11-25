document.querySelector(".notebook").addEventListener("click", () => {
    window.location.href = "/";
});
document.querySelector(".Attendancebutt").addEventListener("click", () => {
    window.location.href = "/attendance";
});


document.querySelector(".submit_subject").addEventListener("click", async () => {
    let subject = document.querySelector(".subject").value;
    let total = document.querySelector(".total").value;
    let completed = document.querySelector(".completed").value;
    let Submited = document.querySelector(".Submited").value;
    if (subject == "" || subject == null) {
        alert("invalid subject");
    } else {
        alert(subject + " added. Please refresh to view.")
        //add data to database
        let a = await fetch('/assignment/add_subject_data', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },  // data JSON hai
            body: JSON.stringify({ subject: subject, total: total, completed: completed, Submited: Submited }) // data jo bhejna hai
        });

    }

})

document.querySelector(".add_sunject").addEventListener("click", () => {
    document.querySelector(".subject_form").style.display = "block"
})
document.querySelector(".subject_close").addEventListener("click", () => {
    document.querySelector(".subject_form").style.display = "none"
})
document.querySelector(".clear_all").addEventListener("click", async () => {
    document.querySelector(".subjects").innerHTML = ""
    let a = prompt(`Enter "Delete"  for delete`);
    if (a == 'Delete') {
        let a = await fetch('/assignment/deleteAll');
        alert("All Data deleted")
    } else {
        alert("Process Cancel")
    }
})


document.querySelector(".refresh_sunject").addEventListener("click", async () => {
    let a = await fetch('/assignment/find_subject');
    let data = await a.json();
    // console.log(data[0]._id)
    document.querySelector(".subjects").innerHTML = ""
    Array.from(data).forEach(e => {

        if (e.subject == "" || e.subject == null) {
            alert("invalid data");
        } else {
            let div = document.createElement("div");
            div.className = "subject_div";
            let div_box = document.createElement("div");
            div_box.className = "div_box";

            let div_subject = document.createElement("div");
            div_subject.className = "subject_name"
            div_subject.innerHTML = e.subject + ` Total(${e.total})`;
            div_box.appendChild(div_subject);

            let div_ass_no = document.createElement("div");
            div_ass_no.className = "ass_no"
            for (let i = 1; i <= e.total; i++) {
                let div_ass_no_sub = document.createElement("div");
                div_ass_no_sub.className = "ass_no_sub"
                if (i <= e.Submited) {
                    div_ass_no_sub.style.background = "rgb(102, 255, 102)";
                } else if (i > e.Submited && i <= e.completed) {
                    div_ass_no_sub.style.background = "rgb(255, 255, 0)";
                } else {
                    div_ass_no_sub.style.background = "rgb(255, 51, 0)";
                }
                div_ass_no_sub.innerHTML = i;
                div_ass_no.appendChild(div_ass_no_sub);
            }
            div_box.appendChild(div_ass_no);
            div.appendChild(div_box);

            let div_delete = document.createElement("div");
            div_delete.className = "div_delete"
            div_delete.innerHTML = `<span class="material-symbols-outlined">cancel</span>`
            div.appendChild(div_delete);

            div_delete.addEventListener("click", async () => {
                div.remove();
                // console.log(e._id)
                await fetch('/assignment/delete/' + e._id, { method: "POST" });
            })
            document.querySelector(".subjects").appendChild(div);

        }

    })
})


