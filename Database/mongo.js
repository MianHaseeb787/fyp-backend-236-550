const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://mian:<password>@236-550-g-database.ljwljap.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection
    .on('open', () => console.log('Database Connected'))
    .on('error', (error) => console.log(error))
    .on('close', () => console.log('Database Closed'));

module.exports = mongoose;

