const IBMCloudEnv = require('ibm-cloud-env');
IBMCloudEnv.init('/server/config/mappings.json');

// initialize Cloudant
const CloudantSDK = require('@cloudant/cloudant');
const cloudant = new CloudantSDK(IBMCloudEnv.getString('cloudant_url'));

// create waterdb database if it does not already exist
cloudant.db.create('waterdb')
  .then(data => {
    console.log('waterdb database created');
  })
  .catch(error => {
    if (error.error === 'file_exists') {
      console.log('waterdb database already exists');
    } else {
      console.log('Error occurred when creating waterdb database', error.error);
    }
  });
const waterdb = cloudant.db.use('waterdb');

// get names from database
exports.getData = (req, res, next) => {
    console.log('In route - getData');
    return waterdb.attachment.get('4ff058b904949b0d972b28200dbfaba2', 'county_summary.json')
    .then(body => {return res.status(200).json(body);})
      .catch(error => {
        console.log('Get names failed');
        return res.status(500).json({
          message: 'Get names failed.',
          error: error,
        });
      });    
  };