import { BiUserCircle } from "react-icons/bi";
import Image from "next/image";
import thumnail from "../../public/new-img.jpg";

export default function PostDetails(){
    return (
        <>
            <div className="post__content w-full lg:w-3/4 shadow-md rounded-2xl bg-white p-4 lg:p-10 mb-10">
            <h2 className="text-3xl mb-4 font-bold">
              Feeding Our Future: Meeting The Food Waste Challenge
            </h2>
            <div className="post__meta flex flex-wrap items-center justify-start gap-x-10 mb-10">
              <div className="author__name flex gap-3 items-center">
                <BiUserCircle /> Saroar Jahan
              </div>
              <h3>Bangladesh • 14 Oct, 2023 • 07:33 PM</h3>
            </div>
            <div>
              <Image
                className="w-full rounded-2xl"
                src={thumnail}
                height={300}
                width={500}
                alt="thumbnail"
              />

              <p className="post__content py-10">
                {`When an unparalleled economic crisis takes its toll on a country, one major struggle, amongst many, begins to dominate the lives of its people: access to food. 

                        At present, around 3.9 million people in Sri Lanka are food insecure; they lack consistent access to adequate food to live an active, healthy life. That’s a whopping 17% of the population that lacks access to basic nutritional needs. 

                        On the other hand, many of us can relate to having too much food on our table and discarding the excess without too much thought. We have all packed up leftovers to go, only to end up throwing them away later. 

                        But the reality is that every morsel on our plates requires a great deal of labour, land, water, and energy to produce, harvest, store, transport, package, and sell; and right now, there are millions of food-insecure people in Sri Lanka who could benefit from food that goes to waste instead

                        But what do we mean when we say ‘food loss and waste’?

                        According to a 2019 United Nations Food and Agriculture Organization (FAO) report, food loss occurs ‘from post-harvest up to – but not including – the retail level of the food supply chain’. Food waste on the other hand occurs at retail, food service and consumer level.

                        Therefore, consumers have a significant role to play in reducing food waste.


                        Therefore, consumers have a significant role to play in reducing food waste. Food waste is not just the leftover food on your plate that finds its way to the bin, but the food in your fridge that gets spoiled, the restaurant-bought food that you end up throwing, and the vegetables you purchase that rot before you get around to cooking them and there is a lot consumers can do to stop food from going to waste.

                        But food waste can’t be that bad in Sri Lanka, right?

                        Think again. According to the UNEP Food Waste Index Report of 2021, our little island is responsible for over 1.6 million tonnes of food waste  — and this is just from our households. 

                        “Sixty-four percent of our solid waste consists of food waste mainly from households, restaurants, meat and vegetable markets. There is a need to create more awareness of food waste management,” said Shahina Mysan, Director of Engineering (Solid Waste Management) of the Colombo Municipal.`}
              </p>
            </div>
          </div>
        </>
    )
}