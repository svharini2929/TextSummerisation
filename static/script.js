async function summarizeText() {
    const text = document.getElementById("inputText").value;
    const output = document.getElementById("output");

    if (!text.trim()) {
        output.innerText = "Please enter some text.";
        return;
    }

    output.innerText = "Generating summary...";

    try {
        const response = await fetch("/summarize", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ text })
        });

        const data = await response.json();

        if (data.error) {
            output.innerText = "Error: " + data.error;
        } else {
            output.innerText = data.summary;
        }

    } catch {
        output.innerText = "Server not responding.";
    }
}
