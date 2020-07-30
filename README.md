<img width="554" alt="Screen Shot 2020-07-30 at 1 26 37 PM" src="https://user-images.githubusercontent.com/54180641/88965698-5c963100-d268-11ea-8608-1e1f98a78cea.png">

# MyFlyBox

## Abstract

 MyFlyBox is a cross-pollination capstone project completed during the final quarter at [Turing School of Software & Design](https://turing.io/). 

MyFlyBox is a modern way for Colorado fly fishers to organize and keep track of their flies. A user can input a new fly into their box, make edits, or remove the fly entirely. Additionally, the user can either take or upload an image of a fish they've caught, add in information regarding the fish (including species, length, weight, location caught, and fly used) and save it to their MyFlyBox app as a convenient way to look back on the fish they've caught. If the user is unsure of the species, MyFlyBox will use the image provided to identify the species for them.

The front-end repository of the app can be found [here](https://github.com/my-fly-box/my-fly-box-ui), and the back-end repository can be found [here](https://github.com/my-fly-box/my-fly-box-api). Additionally, the back-end production site can be found [here](https://my-fly-box-api.herokuapp.com/).


## Technologies Used (Front-End)

* React Native
* Redux
* React Native Testing Library
* Jest
* Expo
* TravisCI


## UI/UX

##### Adding a New Fly
![Adding a new Fly](https://media.giphy.com/media/ie1KHPIPkBJGwpffMa/giphy.gif)

##### Editing a Fly
![Editing a Fly](https://media.giphy.com/media/PlfplGvX4lBX7ugmap/giphy.gif)

##### Deleting a Fly
![Deleting a Fly](https://media.giphy.com/media/KfBgBrfV3zIJbOhs8X/giphy.gif)

##### Adding a New Fish - Image Selector
![Adding a new Fish](https://media.giphy.com/media/Sw6R43UqGDpaL3HQdX/giphy.gif)

##### Adding a New Fish - Species Identifier
The user is unsure what species of fish they have caught, so they enter "Unknown" under the species input field. When submitting the fish, MyFlyBox uses the uploaded image to identify and update the species name for them (in this case, it looks like the user has caught a Rainbow Trout). 
![Adding a new Fish](https://media.giphy.com/media/RhZUDpUJucjGA9RIB7/giphy.gif)

##### Editing a Fish 
![Editing a Fish](https://media.giphy.com/media/eiurTC6QYBl4Kbx97f/giphy.gif)

##### Deleting a Fish
![Deleting a Fish](https://media.giphy.com/media/WQ5l0FQkR8I94dCPo9/giphy.gif)


## Setup

1. Fork this repository.

2. Clone your forked repository.

3. Change into the directory and install the project dependencies by running `npm install`

4. Run the Expo server with the command `expo start` which will open a window on your browser.

5. Select to either run on iOS simulator using an iPhone 11, or if you have the Expo Client app downloaded on your iOS device, scan the QR code to open the app on your device.


## Learning Goals

* Work across programs to create a project that demonstrates our knowledge gained throughout Turing, while also stretching ourselves to self-teach and implement new technologies (we chose React Native and Redux on the front-end).

* Gain experience dividing applications into components and domains of responsibilities to facilitate multi-developer teams.

* Practice an advanced, professional git workflow in a remote environment.

* Focus on communication between front-end and back-end teams in order to complete and deploy features.


## Future Iterations

* Multi-user login functionality.

* Ability for user to favorite specified flies.

* Allow a user to search their flies by name, as well as filter them based on type, size, and number of fish caught.


## Development Team

#### Front-End:
* [Rachael Thomas](https://github.com/rachael-t)
* [Charlie Bandstra](https://github.com/C-Bandstra)
* [Tim Nguyen](https://github.com/TimNguyen21)
#### Back-End:
* [Fred Rondina](https://github.com/fredrondina96)
* [Tyler Tomlinson](https://github.com/tylertomlinson)


