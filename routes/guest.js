module.exports = (express) => {
    let route = express.Router();

    route.get('/', (req,res) =>{
        res.send('Hello World');
    });

    route.get('/course', (req,res) => {
        res.send('hello admin');
    });

    route.get('/coruse/cat/:id', (req,res)=>{
        res.send('hello this is course cat');
    })

    route.get('/admin/auth/login', (req,res) => {
        res.send({data:'this is login'});
    });

    return route;
}