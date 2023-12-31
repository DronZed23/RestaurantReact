import {CofeePicture} from "../pages/main/img/cofee";
import {PastaPicture} from "../pages/main/img/pasta";
import {DrinksPicture} from "../pages/main/img/drinks";
import {DessertPicture} from "../pages/main/img/desserts";
import catering from "../pages/main/img/catering.png"
import birthday from "../pages/main/img/birthday.png"
import wedding from "../pages/main/img/wedding.png"
import event from "../pages/main/img/event.png"
import PersonIcon1 from "../pages/main/img/personIcon1.png";
import PersonIcon2 from "../pages/main/img/personalIcon2.png"
import PersonIcon3 from "../pages/main/img/personIcon3.png"
import Burger from "../pages/main/img/burger.png"
import Friedfish from "../pages/main/img/friedFish.png"
import FriedChicken from "../pages/main/img/friedChicken.png"
import Pancakes from "../pages/main/img/pancakes.png"
import Pizza from "../pages/main/img/pizza.png"
import {MultiCuisine} from "../pages/aboutUs/img/MultiCuisine";
import Egg from "../pages/menuPage/img/Egg.png"
import PizzaFromMenu from "../pages/menuPage/img/pizza.png"
import Martini from "../pages/menuPage/img/Martini.png"
import ButterscotchCake from "../pages/menuPage/img/ButterscotchCake.png"
import MintLemonade from "../pages/menuPage/img/MintLemonade.png"
import ChocolateIcecream from "../pages/menuPage/img/ChoclateIcecream.png"
import CheeseBurger from "../pages/menuPage/img/CheeseBurger.png"
import ClassicWaffles from "../pages/menuPage/img/ClassicWaffles.png"

export const cardToMenuData =[{
    id: 1,
    img: CofeePicture,
    name: 'Breakfast',
    description: 'In the new era of technology we look in the future' +
        ' with certainty and pride for our life.',
    buttonName: "Explore Menu"
}, {
    id: 2,
    img: PastaPicture,
    name: 'Main Dishes',
    description: 'In the new era of technology we look in the future ' +
        'with certainty and pride for our life.',
    buttonName: "Explore Menu"
    },
    {
        id: 3,
        img: DrinksPicture,
        name: 'Drinks',
        description: 'In the new era of technology we look in the ' +
            'future with certainty and pride for our life.',
        buttonName: "Explore Menu"
    },
    {
        id: 4,
        img: DessertPicture,
        name: 'Desserts',
        description: 'In the new era of technology we look in the future with certainty and pride for our life.',
        buttonName: "Explore Menu"
    }]
export const eventCardData = [
    {
        id: 1,
        img: catering,
        eventName: "Caterings",
        description: "In the new era of technology we look in the future with certainty for life.",
    },
    {
        id: 2,
        img: birthday,
        eventName: "Birthdays",
        description: "In the new era of technology we look in the future with certainty for life.",
    },
    {
        id: 3,
        img: wedding,
        eventName: "Weddings",
        description: "In the new era of technology we look in the future with certainty for life.",
    },
    {
        id: 4,
        img: event,
        eventName: "Events",
        description: "In the new era of technology we look in the future with certainty for life.",
    },
    ]

export const ourCustomerData = [
    {
        id: 1,
        title: '"The best restaurant"',
        description: "Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.",
        personIcon: PersonIcon1,
        personName: "Sophire Robson",
        placeOfResidence: "Los Angeles, CA",
    },
    {
        id: 2,
        title: '“Simply delicious”',
        description: "Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented.",
        personIcon: PersonIcon2,
        personName: "Matt Cannon",
        placeOfResidence: "San Diego, CA",
    },
    {
        id: 3,
        title: '“One of a kind restaurant”',
        description: "The culinary experience at place is first to none. The atmosphere is vibrant, the food - nothing short of extraordinary. The food was the highlight of our evening. Highly recommended.",
        personIcon: PersonIcon3,
        personName: "Andy Smith",
        placeOfResidence: "San Francisco, CA",
    },

]

export const blogData =[
    {
        id:1,
        img: Burger,
        date: "January 3, 2023",
        articleName: "The secret tips & tricks to prepare a perfect burger & pizza for our customers",
        articleDescription: "Lorem ipsum dolor sit amet consectetur of a adipiscing elitilmim semper adipiscing massa gravida nisi cras enim quis nibholm varius amet gravida ut facilisis neque egestas."
    },
    {
        id:2,
        img: Friedfish,
        date: "January 3, 2023",
        articleName: "How to prepare the perfect french fries in an air fryer",
        articleDescription: ""
    },
    {
        id:3,
        img: FriedChicken,
        date: "January 3, 2023",
        articleName: "How to prepare delicious chicken tenders",
        articleDescription: ""
    },
    {
        id:4,
        img: Pancakes,
        date: "January 3, 2023",
        articleName: "7 delicious cheesecake recipes you can prepare",
        articleDescription: ""
    },
    {
        id:5,
        img: Pizza,
        date: "January 3, 2023",
        articleName: "5 great pizza restaurants you should visit this city",
        articleDescription: ""
    },
]

export const HeaderActiveData = [
    {
       id: 1,
        button1: 1,
        button2: 0,
        button3: 0,
        button4: 0,
        button5: 0,
    },
    {
        id: 2,
        button1: 0,
        button2: 1,
        button3: 0,
        button4: 0,
        button5: 0,
    },
    {
        id: 3,
        button1: 0,
        button2: 0,
        button3: 1,
        button4: 0,
        button5: 0,
    },
    {
        id: 4,
        button1: 0,
        button2: 0,
        button3: 0,
        button4: 1,
        button5: 0,
    },
    {
        id: 5,
        button1: 0,
        button2: 0,
        button3: 0,
        button4: 0,
        button5: 1,
    },
]

export const FeelTheAuthenticData = [
    {
        id: 1,
        img: MultiCuisine,
        name: "Multi Cuisine",
        description: "In the new era of technology we look in the future with certainty life."
    },
    {
        id: 2,
        img: MultiCuisine,
        name: "Easy To Order",
        description: "In the new era of technology we look in the future with certainty life."
    },
    {
        id: 3,
        img: MultiCuisine,
        name: "Fast Delivery",
        description: "In the new era of technology we look in the future with certainty life."
    }
]
export const ALittleInfoSlideData = [
    {
        id: 1,
        int: "3",
        name: "Locations"
    },
    {
        id: 2,
        int: "1995",
        name: "Founded"
    },
    {
        id: 3,
        int: "65+",
        name: "Staff Members"
    },
    {
        id: 4,
        int: "100%",
        name: "Satisfied Customers"
    },
]

export const menuCardData = [
    {
        id: 1,
        category: "Breakfast",
        img: Egg,
        pricez: "9.99",
        name: "Fried Eggs",
        description: "Made with eggs, lettuce, salt, oil and other ingredients."
    },
    {
        id: 2,
        category: "Drinks",
        img: PizzaFromMenu,
        pricez: "15.99",
        name: "Martinez Cocktail",
        description: "Made with eggs, lettuce, salt, oil and other ingredients."
    },
    {
        id: 3,
        category: "Main Dishes",
        img: Martini,
        pricez: "7.25",
        name: "Martinez Cocktail",
        description: "Made with eggs, lettuce, salt, oil and other ingredients."
    },
    {
        id: 4,
        category: "Desserts",
        img: ButterscotchCake,
        pricez: "20.99",
        name: "Butterscotch Cake",
        description: "Made with eggs, lettuce, salt, oil and other ingredients."
    },
    {
        id: 5,
        category: "Drinks",
        img: MintLemonade,
        pricez: "5.89",
        name: "Mint Lemonade",
        description: "Made with eggs, lettuce, salt, oil and other ingredients."
    },
    {
        id: 6,
        category: "Desserts",
        img: ChocolateIcecream,
        pricez: "18.05",
        name: "Chocolate Icecream",
        description: "Made with eggs, lettuce, salt, oil and other ingredients."
    },
    {
        id: 7,
        category: "Main Dishes",
        img: CheeseBurger,
        pricez: "12.55",
        name: "Cheese Burger",
        description: "Made with eggs, lettuce, salt, oil and other ingredients."
    },
    {
        id: 7,
        category: "Breakfast",
        img: ClassicWaffles,
        pricez: "12.99",
        name: "Classic Waffles",
        description: "Made with eggs, lettuce, salt, oil and other ingredients."
    },
]