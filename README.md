# FriendFinder

Compatibility-based "FriendFinder" application. This full-stack site takes in results from the users' surveys, then compare their answers with those from other users. The app then displays the name and picture of the user with the best overall match.

To run this app, open the following link:

https://aqueous-journey-85291.herokuapp.com/

It will direct you to the home page of the Friend Finder app which contains only a Jumbotron with the title, a button to take the survey, and a link showing json data of the user's so far, which will be the friends to match.

![home-page](/screenshots/home_page.PNG)

When the user "clicks" on "Take the Survey", a get request is send and the person is redirected to the Survey page which requires the user's name and picture link and displays 10 personality questions with an assigned Drop-down menu. 

![survey](/screenshots/survey.png)

Once the user has selected their answers, they will click the "Submit" button that will pake a post request. In the server-side, the post request will trigger an algorithm that finds the best match by adding the absolute values of the differences between the user's and each one of the profile's scores.

Once the app has found the current user's most compatible friend, it displays the resulting person's image and name as a modal pop-up and saves the user's profile to the list and make it available to be matched with other users.

![best-match](/screenshots/best-match.PNG)

