# Refletion for this code experiment

## Title: SocialShape (08/04/2022)

### **Idea**
The basic idea for the project was to generate a shape in a canvas which would change depending on the GPS, longitude and latitude cordinates of all connected divices. Fx 3 different divices generate 3 different points on the canvas which would make up a triangle. The shape and side of the triangle would change depending of the relationship btween each devices in distance. The distance fx 3 people create a trianglular shape which ultimatley reflects a relative distance between the 3 induviduals. maybe 2 are closer to eachother that the last person which would end up in a very pointy traignle. If 4 people was online the shape would tage form as some sort of reactangle. 

#### **Reflection**

(intital version - See different brand. ManyToMany)
Its proven to be quite difficult to create some sort of shared dataBase with the current aricutecture of the code. Currently i am trying to make the code genereric in order to handle as many devices as possible and create any amount of points. However making sure each divice are in sync with the data they show is quite difficult and is proving to be a challange. 

(21/04/2022) - ManyToOne
A new version build on the many-to-one realation ship instead of many-to-many. Many devices will send their data to one application. Imagine multiple telefone cordinates is displayed on an artsy-tv. A line is drawn in the middle of the canvas wich represents equator. A point will be drawn for each device online, created a different shape each time the data is updated. To reset det shape simply just reload all device pages and the socialShape page. For future iterations we should experiment with what kind of shape we can draw and what kinds of variable we might use to change the visual expeirence of the shape