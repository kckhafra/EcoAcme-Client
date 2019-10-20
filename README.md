# EcoAcme
EcoAcme is a social media platform that promotes holistic health. Users joining EcoAcme become a part of an online community that encourages healthy eating, strength and conditioning and mental stability. This social networking platform allows users to post events, make comments on post, directly message users, view others profiles and add friends.

### Demo
[Live App](https://ecoacme-app.kckhafra.now.sh/)

To try out the app you can create you own login credentials on the registration page or you can use the following demo login credentials. 
- Username: kckhafra
- Password: studyhard

### Technologies used
Front-end: The front end was built with JavaScript, React, HTML, CSS, AND API GET, POST, PATCH, DELETE REQUEST. API request was also used to get information from the News API. 

[Back-End](https://github.com/kckhafra/EcoAcme-API): The back-end was built with Node.js and PSQL. The login was authenticated through JSON Web Token(JWT). Database stored at Heroku. 

### Description
EcoAcme currently allows you to create a profile; create, delete and edit post; create and delete comments; message other users and add friends.   

## Starter Page
- The header at a certain width allows users to login. Once the header is the size of a ipad users are routed to a login page.   
- The starter page also allows you to sign up. If the user name is already taken an error message will display. If the password you create is not long enough an error message will also display. 
![Starter Page](https://raw.githubusercontent.com/kckhafra/EcoAcme-Client/master/Pictures/Screen%20Shot%202019-10-20%20at%202.19.44%20PM.png)

## Home Page
- The header allows users to move throughout the web app. The title, EcoAcme, is a link that takes you to the home page once you click on it.  
- The homepage list all Post. Users are able to create, delete and edit post. Users can also create and delete comments.
- At the far right of the Home Page are news articles. This news article come from News API, and the articles displayed are top headline health news.  
![Home Page](https://raw.githubusercontent.com/kckhafra/EcoAcme-Client/master/Pictures/Screen%20Shot%202019-10-20%20at%203.07.05%20PM.png)

## Network
- Once you click the Network link in the header you will be directed to the Network page. The network page is a list of all users that have made a profile on EcoAcme. On each users card is a connect button. If you click this button the user will show up on the page entitled friends. To get to friends you must click the friends link of the left hand side. 
- You can seacrh user by first name, last name or user name. 
- If you click the users image or name you will be directed to that users profile page where you will be able to see more information about the user. 
![Network](https://raw.githubusercontent.com/kckhafra/EcoAcme-Client/master/Pictures/Screen%20Shot%202019-10-20%20at%203.08.07%20PM.png)

## Friends Page
- The friends page are a list of users you have added on the sight. If you click a friends name of picture you will be directed to their profile page. 
- If you click message a message text box will pop out. You can write a message to your friend. After you click the submit button you will be directed to the message page.  
![Friends Page](https://raw.githubusercontent.com/kckhafra/EcoAcme-Client/master/Pictures/Screen%20Shot%202019-10-20%20at%203.08.31%20PM.png)

## Message Page
- Once the message page renders the latest conversation you've had is displayed. If you click on the users picture to the left the message displays switches tot he user you clicked on. 
- To create a new message you must click the writing icon that is displayed in the messaging box. Once clicked a text box will be displayed. 
- A user can also reply directly to the messages being displayed. At the bottom of the current message conversation that is displayed is a reply box. If you type a message in and hit send you will send a message to the user you are currently having a conversation with. 
![Message Page](https://raw.githubusercontent.com/kckhafra/EcoAcme-Client/master/Pictures/Screen%20Shot%202019-10-20%20at%203.08.52%20PM.png)

## User Profile
- The user profile page is where users provide information about themselves, how they contribute to the holistic health field and what orginizations they are afilliated with. 
- To edit the about me field, holistic services field and the holistic organization field a user has to simply click the write icon located in each of the corresponding boxes. 
![User Profile Page](https://raw.githubusercontent.com/kckhafra/EcoAcme-Client/master/Pictures/Screen%20Shot%202019-10-20%20at%203.09.07%20PM.png)




