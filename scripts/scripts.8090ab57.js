"use strict";angular.module("profileApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/CV",{templateUrl:"views/cv.html",controller:"CvCtrl",controllerAs:"CV"}).when("/Project",{templateUrl:"views/project.html",controller:"ProjectCtrl",controllerAs:"Project"}).otherwise({redirectTo:"/"})}]),angular.module("profileApp").controller("MainCtrl",["$rootScope",function(a){a.backStyle={"border-color":"rgba(255, 255, 255, 0)",background:"rgba(255, 255, 255, 0)"},a.obj1={color:"#72AB00","border-top-color":"#72AB00"},a.obj2={color:"#3E3333","border-top-color":"#3E3333"},a.obj3={color:"#3E3333","border-top-color":"#3E3333"}}]),angular.module("profileApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("profileApp").controller("CvCtrl",["$rootScope",function(a){a.backStyle={"border-color":"rgba(255, 255, 255, 0)",background:"rgba(255, 255, 255, 0.85)"},a.obj1={color:"#3E3333","border-top-color":"#3E3333"},a.obj2={color:"#72AB00","border-top-color":"#72AB00"},a.obj3={color:"#3E3333","border-top-color":"#3E3333"}}]),angular.module("profileApp").controller("ProjectCtrl",["$rootScope",function(a){a.backStyle={"border-color":"rgba(255, 255, 255, 0)",background:"rgba(255, 255, 255, 0.85)"},a.obj1={color:"#3E3333","border-top-color":"#3E3333"},a.obj2={color:"#3E3333","border-top-color":"#3E3333"},a.obj3={color:"#72AB00","border-top-color":"#72AB00"}}]),angular.module("profileApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/cv.html",'<div class="row jumb"> <div class="col-sm-8 text-left"> <h1>CV</h1> <h2>Jialin Liu</h2> <p>Kellyville NSW Australia 2155</p> <p>Email: jialin824@gmail.com</p> <p>Contact:0432663817</p> </div> <div class="col-sm-4"> <div> <img src="images/me1.JPG" height="260"> </div> </div> </div> <div class="row"> <div class="col-sm-8"> <h1 class="borderSolidB">Professional info</h1> <p>Highly organised and detail-oriented Front End Developer acknowledged for sound decision making abilities, expert programming/ coding skills, solid business acuity and problem solving skills. </p> </div> <div class="col-sm-4"> <h1 class="borderSolidB">Languages</h1> <p>HTML5</p> <p>CSS3</p> <p>JAVASCRIPT</p> <p>AngularJS</p> <p>ASP.Net</p> <p>Node.JS</p> </div> </div> <div class="row"> <div class="col-sm-8"> <h1 class="borderSolidB">Work experience</h1> <h4>Projectmate, Homebush 2140 &nbsp;&nbsp;&nbsp;Nov 2015 – Present</h4> <p>Front End Developer</p> <ul> <li>Developing an Online Property Management Tools for Property Developers and Agencies</li> <li>This medium project is built by Ruby on Rails, MySQL, & JQuery Library</li> <li>The MVC Framework embraces a lot of new Front end technologies such as Pusher, I18n, Rails Simple Form and Intercom</li> <li>Linking JIRA and Bitbucket helps us to to do the coding tasks efficiently </li> </ul> <br> <br> <h4>Online Learning Zone, Crows Nest 2065 &nbsp;&nbsp;&nbsp;Nov 2014 – Aug 2015</h4> <p>Front End Developer</p> <ul> <li>Developed website promotional materials, web banners and optimised landing/ home pages of OnlineLearningZone.com.</li> <li>Designed and implemented company’s website, including development and maintenance utilising ASP.net, HTML/ CSS, MySQL, and JavaScript practices.</li> <li>Built a flexible front-end architecture of the simulation system, reducing development time and improving quality.</li> <li>Supported VB Code behind development and customisation of ASP Control such as ASP Tree View Control.</li> </ul> <br><br> <h4>VASP Group, Bella Vista, NSW &nbsp;&nbsp;&nbsp;Dec 2012 – Jun 2013</h4> <p>IT Help Desk</p> <ul> <li>Troubleshot and resolved technical issues pertaining to any hardware or software/ OS problems.</li> <li>Provided dedicated help desk support and performed computer troubleshooting over the phone and face-to-face.</li> <li>Ensured users receive timely resolution on moderate to complex issues pertaining to any hardware, software and network related problems. </li> <li>Adhered to standard help desk procedures; performed fault finding diagnosis and root cause analysis.</li> </ul> <br><br> <h4>Four Seasons Hotel, Sydney, NSW &nbsp;&nbsp;&nbsp;Jul 2011 – Oct 2012</h4> <p>IT Help Desk</p> <ul> <li>Monitored network performance/ implementation, assigned IP addresses/ logical networking groups, designed network performance reports, protected network data, management and optimisation.</li> <li>Performed fault finding diagnosis and root cause analysis. </li> <li>Carried out upgrades, back up, troubleshooting and installation of hardware, software and drivers. </li> <li>Escalated issues as needed and maintained communication with users and technical teams.</li> </ul> <h1 class="borderSolidB">Education</h1> <h6>Master of Computer Science, Major in Network Security & Software Development University of Wollongong, Australia (2010) <br><br> <h6>Bachelor of Computer Science. Harbin University of science and technology China(2007) <br><br> <p class="borderSolidB"></p> </h6></h6></div> <div class="col-sm-4"> <h1 class="borderSolidB">Certificate</h1> <p>CCNA</p> <p>Certified Web Developer</p> </div> </div>'),a.put("views/main.html",'<video controls muted autoplay loop poster="images/cairns.JPG" id="bgvid" class="hidden-xs"> <source src="video/cairns.webm" type="video/webm"> </source><source src="video/cairns.mp4" type="video/mp4"> </source></video> <div class="jumbotron"> <div clss="row"> <img src="images/me.jpg" class="img-responsive col-sm-4"> <div class="col-sm-8"> <h1 class="text-left">Hello,</h1> <h2 class="text-left">I am available to work.</h2> <p class="text-left">Technically sophisticated, creative and multifaceted Web Developer with a solid programming and web development background as well as an impressive academic backdrop in coordinating the creation, testing and deployment of web applications. Adept at building front-end user interfaces; and redesigning/ designing interactive and user-friendly websites, with consideration of client needs functionality, latest technological innovations and programming standards.</p> </div> </div> <p><a class="btn btn-lg btn-success" ng-href="#/CV">My CV!<span class="glyphicon glyphicon-ok"></span></a> <a class="btn btn-lg btn-success" ng-href="#/Project">My Projects!<span class="glyphicon glyphicon-ok"></span></a></p> </div> <div class="row marketing"> <div class="col-sm-4 borderSolidR"> <h4>TESTIMONIAL</h4> <p> Kevin is a coder, developer, and technologist. He has been building Web App across different platforms such as Windows and Mac Os. During one year\'s front end development he can successfully finish the multi tasks independently or in a team. The efficiency and accuracy are the spirit s he is pursuing during his past employment. </p> </div> <div class="col-sm-4 borderSolidR"> <h4>FAVORITE QUOTE</h4> <p> Don\'t cry because it\'s over, smile because it happened </p> </div> <div class="col-sm-4"> <h4>RECENT PROJECT</h4> <p>England Diary</p> <p>Apartment Finder</p> </div> </div>'),a.put("views/project.html",'<div class="jumb"> <div class="text-justify"> <h1>Project</h1> <br><br> <p>I designed and developed some interesting projects for display and practise.</p> </div> </div> <h4>Latest Projects</h4> <div class="row borderSolidT"> <div class="col-sm-4 col-xs-6"> <a href="http://jialin824.github.io/hl/#%2F" target="_blank"><img src="images/london.811bf4e9.jpg" class="image img-responsive" width="200"></a> </div> <div class="col-sm-8 col-xs-6 text-left"> <h4>England Diary</h4> <p>this website introduces some famous attractions include Windsor Castle, Cambridge Colledge, and London Eye, There are also some tips for backpackers. For myself, I am the one who loves to do a lot of research of attraction tickets, restaurants and public transports before bording the flight. This project is developed by AngularJS.</p> <a href="http://jialin824.github.io/hl/#%2F" target="_blank"><img src="images/link.55fe7d0b.png" class="img-responsive" width="50"></a> </div> </div> <br><br> <div class="row borderSolidT"> <div class="col-sm-4 col-xs-6"> <a href="http://jialin824.github.io/apartment-finder/#%2F" target="_blank"><img src="images/apartment.01983a03.jpg" class="image img-responsive" width="200"></a> </div> <div class="col-sm-8 col-xs-6 text-left"> <h4>Aparment Finder</h4> <p>An interesting small project for rent seeker. You can just click which city you want to reside. and there are a big list with locations powered by google maps. you can click the image of house or its location in the map to review the details of each unit. This project is developer by AngularJS</p> <a href="http://jialin824.github.io/apartment-finder/#%2F" target="_blank"><img src="images/link.55fe7d0b.png" class="img-responsive" width="50"></a> </div> </div> <br><br> <div class="row borderSolidT"> <div class="col-sm-4 col-xs-6"> <a href="http://jialin824.github.io/7MinWorkout/#/" target="_blank"><img src="images/7MinWorkout.3e6636ba.jpg" class="image img-responsive" width="200"></a> </div> <div class="col-sm-8 col-xs-6 text-left"> <h4>7 Min Workout</h4> <p>An interesting small project for people who want to spend a few minutes for exercise </p> <a href="http://jialin824.github.io/7MinWorkout/#/" target="_blank"><img src="images/link.55fe7d0b.png" class="img-responsive" width="50"></a> </div> </div> <div class="row"> <div class="col-sm-4"> <img src=""> </div> <div class="col-sm-8"> <p></p> </div> </div>')}]);