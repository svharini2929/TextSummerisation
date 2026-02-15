async function summarizeText() {
    const text = document.getElementById("inputText").value;
    const output = document.getElementById("output");

    output.innerText = "Generating summary...";

    try {
        const response = await fetch("/summarize", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ text: text })
        });

        const data = await response.json();

        if (data.error) {
            output.innerText = "Error: " + data.error;
        } else {
            output.innerText = data.summary;
        }

    } catch (error) {
        output.innerText = "Server error";
    }
}

