const PartyModel = require("../models/Party");

const checkPartyBudget = (budget, services) => {
    
    const priceSum = services.reduce((sum, service) => sum + service.price, 0)

    console.log(priceSum, budget);

    if (priceSum > budget) {
        return false;
    }

    return true;
};

const partyController = {
    create: async(req,res) => {
        try {

            const party = {
                title: req.body.title,
                author: req.body.author,
                description: req.body.description,
                budget: req.body.budget,
                image: req.body.image,
                services: req.body.services,
            };

            //BUDGET < Valor dos serviços != NOVO SERVICO
            if(party.services && !checkPartyBudget(party.budget, services)) {
                res.status(406).json({msg: "O seu orçamento é insuficiente."});
                return;
            }

            const response = await PartyModel.create(party);

            res.status(201).json({response, msg: "Festa criada com sucesso!"});

        } catch (error) {
            console.log(error);
        }
    }
};

module.exports = partyController;