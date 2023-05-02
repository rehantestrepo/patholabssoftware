const LabTestModel = require('../models/lab-test');

const getAllTest = async(req, res) => {
	try {
		const getAllTest = await LabTestModel.find()
		res.status(200).json(getAllTest);
		
	} catch (error) {
		res.status(500).json(error)
	}
};


const createTest = async(req, res) => {
	const { name, ...remainingData } = req.body;

	delete remainingData.pathogensData

	const newPathogensData = []

	for (let key in remainingData) {
		newPathogensData.push({pathogensName: key, infected: remainingData[key], image: req?.files[`${key}-img`][0]?.path});
		console.log({image: req?.files[`${key}-img`][0]?.path});
	}

	

	await LabTestModel.create({
		name,
		pathogensData: newPathogensData
	});

	//const data = logic on data
	return res.status(201).json({msg: 'created'});
};


module.exports = {
	getAllTest,
	createTest,
};
