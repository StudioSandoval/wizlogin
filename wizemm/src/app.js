import { appendFile } from 'fs';
import { pool } from 'pg';



//Routes
app.use('/', require('../routes'))

app.get('/', (req, res) => {
  res.send('Hello Word');
});

//Settings
app.set('post', process.env.PORT );

app.listen(app.get('port'), ()=>{
  console.log('Serve on port' + app.get('port'));
});
