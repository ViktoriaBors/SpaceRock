# SpaceRock - EXAM PROJECT
**Blog entries**

Beginning of the project I decided to document the journey of this app. Why? There were many reasons.

1. I knew this project is going to be challenging and that I am going to face with many interesting problems and their solutions. I ti is always nice to read it later how I fixed things previously.
2. I actually regret that I did not document some interesting aspects from other projects. So It was time to be proactive and write.
3. As a beginner web developer who would like to break to the industry, it is important to be active online. 
4. Who knows, it might help to other people. I am not necessarily talking about the solutions for a problem, but also motivation.

In all I have made 8 version of this project and some of them had sub-versions. 

All in all I loved to work on this project. In the beginning of this Javascript module and this project I was afraid of Javascript and back end was like a magic. Now I am confident user of JS language and back-end developing is actually something I am looking forward to dig in more. 

**Aim of the Project**

To make a simple CRUD application where the user can add, modify and delete data (which is connected to a database). I also added pagination, a register and login site (using cookies) and a image uploading feature. 

Again I was actually not 100% sure I am going to implement register/login form and image upload was not even in my mind in the beginning. In the end I managed all.

**The Versions**

**JS exam project update – Version 0**

I finished the design for the project. It is a simple design as I am not a designer. I am always struggling to find the right design, color palettes, button style and the right images etc. So normally my design is pretty simple.

Here are some highlights during this phase:
- Finished design with Tailwind CSS and Tailwind elements
- Selected all the necessary DOM elements for alter use, it is in a separate JS file. This also means I am going to use modules.
- I made class for the samples (so I practice OOP a little)
- I made a basic “database” to store the samples. It is in a separate JSON file. I have around 20 samples with images and description.

Challenges during this version:
- The design
- I use Tailwind which can be customized really well, but sometimes it felt overwhelming to see through the lot of styling inside the HTML. Therefore I tried to use some system (for example first writing the basic style then hover effect style then focus style in case of buttons).

**JS exam project update – Version 1**

I set up the server side using Node Js / Express Js. Some highlights:
- Making routes to get and post data. I am working with JSON file still using file system to write, modify and delete samples.
- I made templates function to render the data and added filter and search option.

Challenges and other thoughts:
It was pretty straight forward to set up the routes, but right now I fetch all the data and then I am filtering by the search options on the front end. Doesn't feel right, even though my database contains just 10 samples right now.

But what if.. one day it is going to have 100 and 1000 of samples. Doesn't make sense to send everything to front end and then filter it. So this is a problem needs to be solved later on.

**JS exam project update – Version 2 and 3**

I improved the routes and the search function. Now every search and filter happens in the back end and just the “necessarily” data comes to front end, where its rendered. I also tried to clean my code and decided to follow the MVC model (model, view, controller). Next stop to try some template engine out (EJS).

**JS exam project update – Version 4**

Remember I said I am going to try some template engines?! Sorry EJS, but we are not on the same page this time.

I can explain. I feel a little pressed with exams and deadline plus other things. I cannot spend too much time on template engines right now. Plus anyway everything works fine with the render codes I wrote.

So I am going to see you later EJS , because I am still curious how a template engines works and makes life easier (at least they say).

**JS exam project update - Version 5**

Goal was to implement pagination so just a few data appear per page. This looks good, but does not work as should (after new search the page did not start from the beginning except if the user click on the page number). I can see the problem, which is that the pagination is on the “front-end”. It is rendered after all the data arrived, but different search filter results different amount of data.

Right now I am a little lost how I am going to fix this… We will see.

**JS exam project update – Version 6 and 6b**

Finally I set up the MongoDB database. So no more JSON file. I spent most of the time to rewrite the routes to fit to Mongo DB. Then by learning more and more methods, I can again update the routes with better solutions later.

There is a 6b version, where I finally fixed the pagination. As I mentioned the one of the issue was that we do not know how much data arrives from the server and therefore how much page I need. My solution probably not the nicest, but it works.
The solution is to first fetch just a number,which represents the number of samples is going to be send, then the page numbers are rendered. After one more request is sent, where the actual sample data set comes back and is rendered.

Next stop is login, registration and cookies.

**JS exam project update – Version 7**

It was time to make the register and login form to work. I set up the user class and the routes. I dig into how session and cookies works. Moreover I got a little insight to security with password hashing.

I have all the features now I planned in the beginning. It is ready a project or ... not? We learned about image uploading as well in the last class. So why not implement that one too?! So next stop image upload.

**JS exam project update - Version 8**

Image upload was challenging. Even though at the class I understood how to set up the image upload with multer, in my own project it was not so straight forward thanks to that I already had so much data to send. 

First I wanted to send json data with img and that did not work out. So I found another solution, to have separate root for the img upload. And that work out just fine. I also added that if the data(sample) is deleted the uploaded img should be too. I also manage to cut the html extension from url, just to look prettier. 

**JS exam project update - Final Version online**

I like to have a live site for a project and that is normally pretty easy to host when it is a static webpage. This project is a complex web application. To set up I needed to register on MongoDB Atlas (cloud version) and find another cloud platform, which can host back-end too. I heard about Heruko a lot so I registered there. After many days of trying, Heruko could not find connection to the database. (The error message showed that I was still using MongoDB locally... even though I set up everything to the cloud platform.)

I also realized that Heruko anyway will not be free anymore from november. So I was looking to another hosting platform and luckily I found RENDER. It was not even a struggle to set up on it. 

I am really happy that everything worked out and now go and try SPACEROCK!
https://spacerock.onrender.com/index
