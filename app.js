const express = require('express');

/* Initializations */
const app = express();

/* Settings */
app.set('port', process.env.PORT || 3000);

/* Middlewares */

/* Routes */
// app.get('/', (req, res) => {
//     res.send('works');
// });

/* Static Files */
app.use(express.static('./public/'));

/* Start Server */
app.listen(app.get('port'), () => {
    console.log(`Server On Port ${app.get('port')}`);
});