const mongoose = require("mongoose");

async function main() {

    try {

        mongoose.set("strictQuery", true);

        await mongoose.connect(
            "mongodb+srv://raquelgoulart:htqiBT5hjr79IfxT@cluster0.3i79d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
        );

        console.log("Conectado ao banco de dados");

    } catch (error) {
        console.log(`Erro: ${error}`);
    };
};

module.exports = main;