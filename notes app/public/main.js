let istrue;
document.querySelector(".submit").addEventListener("click", async () => {
    let text = document.querySelector(".form-control").value;
    let title = document.querySelector(".title>input").value;
    let date = document.querySelector(".date").value;
    console.log(title, date)
    if (text == "" || text == null) {
        alert("Please enter some data")
    }
    else if (title == "" || title == null) {
        alert("Please enter a valid title")
    }
    else {
        await fetch("/submit", {
            method: 'POST',
            headers: { "Content-Type": "application/json" },  // data JSON hai
            body: JSON.stringify({ data: text, title: title, date: date }) // data jo bhejna hai
        });
        alert("data saved")
        istrue = "";
    }
})


document.querySelector(".Refresh").addEventListener("click", async () => {
    document.querySelector(".databox").innerHTML=''; //clean div before refreshing
    
        let a = await fetch("/find");
        data = await a.json();
        Array.from(data).forEach(e => {
            
            let div = document.createElement("div");
            div.className = "dataplate"
            div.innerHTML = "<b>" + e.title + "</b>";
            if (e.date != "" && e.date != null) {
                div.innerHTML = div.innerHTML + "&nbsp; <b>(" + e.date + ")</b>";
            }
            div.innerHTML = div.innerHTML + "<br>" + e.data;

            let btn = document.createElement("button");
            btn.className="deletbutton";
            btn.textContent = "Delete";
            btn.addEventListener("click", async () => {
                alert("Deleted!");
                div.remove();  // frontend se bhi remove
                console.log("its working")
                await fetch("/delete/" + e._id, { method: "POST" });
            });

            div.appendChild(btn);

            document.querySelector(".databox").appendChild(div)

            istrue = document.querySelector(".dataplate").innerHTML;


        });
    
})


document.querySelector(".delet").addEventListener("click", () => {
    alert("delete")
    let a = fetch("/delet");
})
