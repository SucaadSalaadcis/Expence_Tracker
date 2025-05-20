import expenceModel from "../models/expenseModel.js";

// get all expences
const allExpences = async (req, res) => {
    try {
        const expence = await expenceModel.find();
        res.send({
            count: expence.length,
            data: expence
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message })
    }
};

// get one expence by id 
const getById = async (req, res) => {
    try {
        const { id } = req.params;
        const expence = await expenceModel.findById(id);
        res.send({
            expence
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message })
    }
};


// create a new expence
const createExpence = async (req, res) => {
    try {
        const { amount, category, description } = req.body;
        // checking if required fields is same as model
        if (!req.body.amount || !req.body.category || !req.body.description) {
            return res.status(400).send({
                message: "Send all required fields : amount, category, description"
            });
        } // end if

        const newExpence = {
            amount: amount,
            category: category,
            description: description
        }

        const expence = await expenceModel.create(newExpence);
        return res.status(201).send(expence);


    } catch (error) {
        console.log(error);
        response.status(500).send({ message: error.message })
    }
};


// update expence
const updateExpence = async (req, res) => {
    try {
        // checking if required fields is same as model
        if (!req.body.amount || !req.body.category || !req.body.description) {
            return res.status(400).send({
                message: "Send all required fields : amount, category, description"
            });
        } // end if

        const { id } = req.params;
        const result = await expenceModel.findByIdAndUpdate(id, req.body);
        if (!result) {
            return res.status(404).send({
                message: "Expence not found"
            });
        } else {
            return res.status(200).send({
                message: "Expence updated successfully..."
            });
        }


    } catch (error) {
        console.log(error);
        response.status(500).send({ message: error.message })
    }
};


// delete expence
const deleteExpence = async (req, res) => {
    try {

        const { id } = req.params;
        const result = await expenceModel.findByIdAndDelete(id);

        if (!result) {
            return res.status(404).send({
                message: "Exoence not found"
            });
        } else {
            return res.status(200).send({
                message: "Expence deleted successfully..."
            });
        }


    } catch (error) {
        console.log(error);
        response.status(500).send({ message: error.message })
    }
};



export const expenceController = { allExpences, getById, createExpence, updateExpence, deleteExpence };