# react-node-blog-app
A simple web app made with React.js, Node.js and SQL I made in my free time to learn React and Node

To test the app:

   - make a MySQL database  
   - open the project and go to "/api/db.js"  
   - change the "mysql.createConnection() info if necessary  
   - copy the script found under the connection function
   - query the script into your local database  
   - cd to "/api", open the terminal and run "npm start" or equivalent  
   - cd to "/client", open the terminal and run "npm run dev" or equivalent  
   - go to your localhost URL where you can test the app  
 
*if you are getting CORS errors you might need to change the origin URL in "/api/index.js" under corsOptions

**if you can't use port 8800 for some reason, when changing it make sure to also change "axios.defaults.baseURL" in /client/src/context/authContext.jsx" to the correct port number or the api routing won't work
