let istrue;
document.querySelector(".submit").addEventListener("click", async () => {
    let text = document.querySelector(".form-control").value;
    let title = document.querySelector(".title>input").value;
    let date = document.querySelector(".date").value;
    // console.log(title, date)
    if (text == "" || text == null) {
        alert("Please enter some data")
    }
    else if (title == "" || title == null) {
        alert("Please enter a valid title")
    }
    else {
        alert("Data saved");
        await fetch("/submit", {
            method: 'POST',
            headers: { "Content-Type": "application/json" },  // data JSON hai
            body: JSON.stringify({ data: text, title: title, date: date }) // data jo bhejna hai
        });
    }
})


document.querySelector(".Refresh").addEventListener("click", async () => {
    document.querySelector(".databox").innerHTML = ''; //clean div before refreshing

    let a = await fetch("/find");
    data = await a.json();
    if(data.length==0){
        alert("Nothing to show");
    }
    Array.from(data).forEach(e => {
        let div = document.createElement("div");
        div.className = "dataplate"
        div.innerHTML = "<b>" + e.title + "</b>";
        if (e.date != "" && e.date != null) {
            div.innerHTML = div.innerHTML + "&nbsp; <b>(" + e.date + ")</b>";
        }
        div.innerHTML = div.innerHTML + "<br>" + e.data;

        let btn = document.createElement("button");
        btn.className = "deletbutton";
        btn.textContent = "Delete";
        btn.addEventListener("click", async () => {
            div.remove();  // frontend se bhi remove
            await fetch("/delete/" + e._id, { method: "POST" });
        });

        div.appendChild(btn);

        document.querySelector(".databox").appendChild(div)

        istrue = document.querySelector(".dataplate").innerHTML;


    });

})


document.querySelector(".delet").addEventListener("click", () => {

    let v = prompt("Type 'delete' to delete all the data. Once deleted, it cannot be restored.");
    if (v == "delete") {
        alert("All the data has been deleted")
        let a = fetch("/delet");
    } else {
        alert("Cancelled. No data was deleted")
    }
})

document.querySelector(".callHomeButton").addEventListener("click", () => {
    window.location.href = "/assignment"; // browser directly navigate karega
});
document.querySelector(".callAttButton").addEventListener("click", () => {
    window.location.href = "/attendance"; // browser directly navigate karega
});
