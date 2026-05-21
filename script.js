const askBtn = document.getElementById("askBtn");

askBtn.addEventListener("click", async () => {

    const question =
        document.getElementById("question").value;

    const result =
        document.getElementById("result");

    if(question === ""){
        alert("Please enter question");
        return;
    }

    result.innerText = "Loading...";

    try {

        const response = await fetch("https://ai-minibackend.onrender.com/ask-gemini", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                question: question
            })

        });

        const data = await response.json();

        result.innerText = data.reply;

    }

    catch(error){

        console.log(error);

        result.innerText =
        "Something went wrong";

    }

});