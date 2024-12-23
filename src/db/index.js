// Simple in-memory database for development
const db = {
    menuItems: [
      {
        id: 1,
        name: "Grilled Salmon",
        description: "Fresh Atlantic salmon with herbs",
        price: 24.99,
        category: "Main Course"
      }
    ],
    reservations: [],
    users: []
  };
  
  export const getMenuItems = () => db.menuItems;
  export const addMenuItem = (item) => {
    const newItem = { ...item, id: db.menuItems.length + 1 };
    db.menuItems.push(newItem);
    return newItem;
  };
  
  export const addReservation = (reservation) => {
    const newReservation = { 
      ...reservation, 
      id: db.reservations.length + 1,
      status: 'pending'
    };
    db.reservations.push(newReservation);
    return newReservation;
  };
  
  export const getReservations = () => db.reservations;