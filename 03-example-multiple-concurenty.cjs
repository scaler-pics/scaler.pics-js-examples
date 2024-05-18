const Scaler = require('scaler.pics');

/* 
Perform the tests from location with good upload and downnload speeds,
(for examle from your server environment) to get the best and real performance results.
*/

const apiKey = process.argv[2] || 'YOUR_API_KEY';

const scaler = new Scaler(apiKey);

async function main() {
	const timeStart = Date.now();
	const promises = [];
	const count = 10;
	for (let i = 0; i < count; i++) {
		promises.push(transfromImage(i));
	}
	await Promise.all(promises);
	console.log(
		`Total time for ${count} concurent transfroms :`,
		Date.now() - timeStart
	);
}

async function transfromImage(index) {
	const response = await scaler.transform({
		input: { localPath: `images/test-${index + 1}.heic` },
		output: [
			{
				type: 'jpeg',
				fit: { width: 1280, height: 1280 },
				quality: 0.8,
				imageDelivery: {
					saveToLocalPath: `results/output-${index}-1280.jpeg`,
				},
			},
			{
				type: 'jpeg',
				fit: { width: 1024, height: 1024 },
				quality: 0.8,
				imageDelivery: {
					saveToLocalPath: `results/output-${index}-1024.jpeg`,
				},
			},
			{
				type: 'jpeg',
				fit: { width: 512, height: 512 },
				quality: 0.8,
				imageDelivery: {
					saveToLocalPath: `results/output-${index}-512.jpeg`,
				},
			},
		],
	});
	console.log('response', JSON.stringify(response, null, 3));
}

main();
