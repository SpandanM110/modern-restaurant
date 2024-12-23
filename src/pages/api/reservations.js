import { addReservation, getReservations } from '../../db';

export const get = () => {
  return new Response(JSON.stringify(getReservations()), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
};

export const post = async (context) => {
  const body = await context.request.json();
  const newReservation = addReservation(body);
  
  return new Response(JSON.stringify(newReservation), {
    status: 201,
    headers: {
      'Content-Type': 'application/json'
    }
  });
};