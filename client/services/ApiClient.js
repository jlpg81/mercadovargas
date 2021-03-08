const BASE_URL = "https://pokeapi.co/api/v2/";

const FetchGraphQLRequest = (url) => {
  return fetch(`${BASE_URL}/${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((err) => {
      console.log("fetch request error", err);
    });
};

// const FetchGetRequest = (url) => {
//   return fetch(`${BASE_URL}/${url}?v=${now}`)
//   .then(res => res.json())
//   .catch((err) => {
//     console.log("fetch request error", err)
//   })
// }

// const FetchPostRequest = (url) => {
//   return fetch(`${BASE_URL}/${url}`,{
//     method: 'POST',
//     headers : {
//       'Content-Type': 'application/json',
//       'Accept': 'application/json',
//     }})
//   .then(res => res.json())
//   .catch((err) => {
//     console.log("fetch request error", err)
//   })
// }

// const getEvents = async () => {
//   return FetchGetRequest('events')
//   .then(
//     (res) => {
//       let result = organizeEvents(res)
//       return result
//     }
//   )
// }

// function postEvents (title, venue, date){
//   return FetchPostRequest(`events?title=${title}&venue=${venue}&date=${date}`)
// }

export default { getEvents, postEvents, organizeEvents };
