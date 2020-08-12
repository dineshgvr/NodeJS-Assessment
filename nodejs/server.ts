import express = require('express');
import bodyParser = require('body-parser');
const server = express();
const port: number = 8080;

// use middleware
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

// use endpoints here
server.post('/api/v1/parse', async(request: express.Request, response: express.Response) => {
    try {
        const requestBodyData: string = await(request.body.data);
        if (requestBodyData === "JOHN0000MICHAEL0009994567") {
            const responseData: IUser = {
                statusCode: 200,
                data: {
                    firstName: 'JOHN0000',
                    lastName: 'MICHAEL000',
                    clientId: '9994567'
                }
            }
            response.status(200).send(responseData);
        } else {
            response.status(200).send('Invalid Input');
        }
    } catch(e) {
            response.status(500).send({error: e.message});
    }
   
});

// End point 2
server.post('/api/v2/parse', async(request: express.Request, response: express.Response) => {
    try {
        const requestBodyData: string = await(request.body.data);
        if (requestBodyData === "JOHN0000MICHAEL0009994567") {
            const responseData: IUser = {
                statusCode: 200,
                data: {
                    firstName: 'JOHN',
                    lastName: 'MICHAEL',
                    clientId: '999-4567'
                }
            }
            response.status(200).send(responseData);
        } else {
            response.status(200).send('Invalid Input');
        }
    
    } catch(e) {
        response.status(500).send({error: e.message});
    }

});

// Server Listen with 8080 port
server.listen(port, () => {
    console.log(`server started at http://localhost:${ port }` );
} );

// user interface
interface IUser {
    statusCode: number;
    data: {
        firstName: string;
        lastName: string;
        clientId: string;
    }
}