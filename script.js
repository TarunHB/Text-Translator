function processImage() {
    const imageInput = document.getElementById('imageInput');
    const output = document.getElementById('output');

    if (imageInput.files.length === 0) {
        output.innerText = "Please select an image.";
        return;
    }

    const file = imageInput.files[0];

    Tesseract.recognize(
        file,
        'eng', // We can later change this to other languages
        {
            logger: m => console.log(m)
        }
    ).then(({ data: { text } }) => {
        output.innerText = "Extracted Text: " + text;
        // Translate logic can be added next
    });
}
