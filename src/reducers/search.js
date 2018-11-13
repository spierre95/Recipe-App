
const initialState = {
  fetching:false,
  recipes: [
    {
      title: "Stephen's Curry",
      image_url:"https://minimalistbaker.com/wp-content/uploads/2018/03/EASY-Pot-Yellow-Chickpea-Cauliflower-Curry-10-ingredients-30-minute-1-pot-curry-vegan-glutenfree-plantbased-minimalistbaker-3.jpg"
    },
    {
      title: "Kevin's Chicken",
      image_url:"https://i.dailymail.co.uk/i/pix/2015/07/14/17/2A8681B300000578-3158953-image-a-48_1436890977225.jpg"
    },
    {
      title: "Draymond",
      image_url:"https://www.mercurynews.com/wp-content/uploads/2017/12/bng-l-warriors-1112-22.jpg?w=620"
    },
    {
      title: "Klay",
      image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrrp4jiNMY38Kd4fu2vD1o1G7TUvBr8pBUEzcORkN4TAG1qfKx"
    },
    {
      title: "Quinn...",
      image_url:"https://www.pillsbury.com/-/media/PB/Images/doughboy/encouragingBalt2.jpg"
    },
    {
      title: "Looney",
      image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Z3YLj_QybUMhqK_M3PgqLE9hfrw9hHZvG6d-a_EE39HL2i2BGQ"
    },
  ]
}


export default function recipes(state = initialState, action) {
  switch (action.type) {

    case "REQUEST_RECIPES":
    return { 
      fetching: true
    }

    case "RECEIVE_RECIPES":
      return {
        fetching: false,
        recipes: action.payload.recipes,
      };

    default:
      return state;
  }
}
