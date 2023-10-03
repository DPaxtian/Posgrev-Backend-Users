const testProgram = (req, res) => {
    res.json(
        {
            "Title": "Prueba program controller"
        }
    );
}

module.exports = {
    testProgram
}