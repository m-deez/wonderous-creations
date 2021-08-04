Welcome to Wondrous Creations: A D&D item creation app created by Matt DeZarn and brian kasten. We wanted to make an app for Dungeons & Dragons, 5th Edition, that would streamline the process of creating a new magic item, weapon, or armor and allow players to converse with one another about the items they made. This database is being stored on the Mongo DB cloud, better known as Atlas.

To get started with Wondrous Creations, you, the user, will need to make sure you have all the proper external programs, middleware, and modules in order to run the application smoothly. Once you have cloned the repository, you will want to cd into the wondrous-creations folder. The first thing you will want to do is install the node package manager (npm), and for facility, accept the default settings. This can be accomplished by typing    $ npm init -y      into the terminal, where the $ is the computer's ending line; you will not want to type the $. Then, install npm by entering     $ npm install request   . Install the following:  dotenv, ejs, express, express-session, method-override, and mongoose.

User stories:

AAU I want to be able to create my own unique item.
AAU I want to be able to update the items I create.
AAU I want to be able to be able to delete the items I create.
AAU I want to be able to view the creations that other users create.
AAU I want to be able to comment with constructive criticism on items other users create.
AAU I want to be able to vote on the items created by other users to say how cool/crappy they are. 