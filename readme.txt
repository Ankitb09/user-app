Welcome to User dashboard App.
I am making a Dashboard which is provided by an e-commerce website to a seller to manage his/her listing of products.

- I am showing a Landing page from where a user can login/Register and a Listing page.
- To prevent installation.I am not using any framework but for consistent behaviour I am using a chrome extension for localhost.
- I am using Plain HTML, SCSS and JS/JQuery.


Index.html Page [Login/Registration page]:- 
- I am creating/storing data on LocalStorage considering it as a db for user.
- On Registration I am setting a cookie and adding user data to LocalStorage.
- On sign-in, validating credentials with localstorage.
- Auto Sign-in with help of cookie.
- Clearing cookie on logout.

Profile page:-
- Data is populated using db.json file [path: data/db.json].
- Grid Header is fixed and middle part is scrollable.
- Click and Drag left-right on Header column to Resize.
- Delete whole row with click of 'X' icon from last column.
- Delete multiple rows by checking checkbox in front of every row.
- Sorting (Asc/Desc) on clicking header.
- Column deletion from icon given in Header.
- Column density adjust.
- columns have a max width but can still handle long text content



Steps to Run Project:-
1) Install Chrome Extension- "Web Server for Chrome" [https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb?utm_source=chrome-app-launcher-info-dialog]
2) open extension and give downloaded assignment folder path  [htmls must be directly within that folder].
3) Run path given by chrome extension.