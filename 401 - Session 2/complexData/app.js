const school = {
  name: "School A",
  buildings: [
    {
      name: "Building A",
      rooms: [
        {
          name: "Room AA",
        },
        {
          name: "Room AB",
        },
      ],
    },
    {
      name: "Building B",
      rooms: [
        {
          name: "Room BA",
        },
        {
          name: "Room BB",
        },
        {
          name: "Room BC",
        },
      ],
    },
    {
      name: "Building C",
      rooms: [
        {
          name: "Room CA",
        },
        {
          name: "Room CB",
        },
      ],
    },
  ],
};

console.log(school.name);
console.log(school["name"]);

school.buildings.forEach((building) => {
  console.log(building.name);
  building.rooms.forEach((room) => {
    console.log(room.name);
  });
});

const { buildings } = school;

console.log(buildings);
