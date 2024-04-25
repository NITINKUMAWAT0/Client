import React from 'react'
import './Lists.scss'
import Card from '../Card/Card'
const Lists = () => {
    // const data =[
    //     {
    //         id:1,
    //         img1:"https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1711444351_3682693.jpg?format=webp&w=480&dpr=1.3",
    //         img2:"https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1711444351_3029557.jpg?format=webp&w=480&dpr=1.3",
    //         title:"Naruto: Yellow Flash",
    //         oldprice:'₹ 999',
    //         price:'₹ 799',
    //     },
    //     {
    //         id:2,
    //         img1:"https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1711445834_7512840.jpg?format=webp&w=480&dpr=1.3",
    //         img2:"https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1711445834_5393883.jpg?format=webp&w=480&dpr=1.3",
    //         title:"Naruto: Drunken Fist",
    //         oldprice:'₹ 999',
    //         price:'₹ 799',
    //     },
    //     {
    //         id:3,
    //         img1:"https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1711013609_8490801.jpg?format=webp&w=480&dpr=1.3",
    //         img2:"https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1711013609_9957204.jpg?format=webp&w=480&dpr=1.3",
    //         title:"Pennywise: Time To Float",
    //         oldprice:'₹ 999',
    //         price:'₹ 799',
    //     },
    //     {
    //         id:4,
    //         img1:"https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1711434746_5255162.jpg?format=webp&w=480&dpr=1.3",
    //         img2:"https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1711434746_3156593.jpg?format=webp&w=480&dpr=1.3",
    //         title:"Dungeons & Dragons: Vintage",
    //         oldprice:'₹ 999',
    //         price:'₹ 799',
    //     },
    //     {
    //         id:5,
    //         img1:"https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1711002242_3913259.jpg?format=webp&w=480&dpr=1.3",
    //         img2:"https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1710586236_4798900.jpg?format=webp&w=480&dpr=1.3",
    //         title:"The Boys: Only Man In The Sky",
    //         oldprice:'₹ 999',
    //         price:'₹ 799',
    //     },
    //     {
    //         id:6,
    //         img1:"https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1711437604_6031928.jpg?format=webp&w=480&dpr=1.3",
    //         img2:"https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1711437604_2427370.jpg?format=webp&w=480&dpr=1.3",
    //         title:"Spider-Man: Plaid Power",
    //         oldprice:'₹ 999',
    //         price:'₹ 899',
    //     },
    //     {
    //         id:7,
    //         img1:"https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1667644726_8653784.jpg?format=webp&w=480&dpr=1.3",
    //         img2:"https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1667644726_6316268.jpg?format=webp&w=480&dpr=1.3",
    //         title:"Solids: Pastel Pink Colour Block",
    //         oldprice:'₹ 999',
    //         price:'₹ 799',
    //     },
    //     {
    //         id:8,
    //         img1:"https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1710915257_2453511.jpg?format=webp&w=480&dpr=1.3",
    //         img2:"https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1688213575_2147508.jpg?format=webp&w=480&dpr=1.3",
    //         title:"Batman: Supervillain",
    //         oldprice:'₹ 999',
    //         price:'₹ 799',
    //     },
    //     {
    //         id:9,
    //         img1:"https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1710603466_1846062.jpg?format=webp&w=480&dpr=1.3",
    //         img2:"https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1710603466_9345429.jpg?format=webp&w=480&dpr=1.3",
    //         title:"Disney: Carpenheimer",
    //         oldprice:'₹ 999',
    //         price:'₹ 799',
    //     },
    //     {
    //         id:10,
    //         img1:"https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1710517908_5650177.jpg?format=webp&w=480&dpr=1.3",
    //         img2:"https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1684499338_1910084.jpg?format=webp&w=480&dpr=1.3",
    //         title:"Solids: White & Berry Colourblock",
    //         oldprice:'₹ 999',
    //         price:'₹ 799',
    //     },
    //     {
    //         id:11,
    //         img1:"https://images.bewakoof.com/t1080/men-s-black-all-over-printed-half-sleeve-oversized-shirt-624422-1710152243-4.jpg",
    //         img2:"https://images.bewakoof.com/t1080/men-s-black-all-over-printed-half-sleeve-oversized-shirt-624422-1710152238-3.jpg",
    //         title:"Men's Black All Over Printed Oversized Shirt",
    //         oldprice:'₹ 999',
    //         price:'₹ 599',
    //     },
    //     {
    //         id:12,
    //         img1:"https://images.bewakoof.com/t1080/men-s-blue-striped-oversized-shirt-597301-1704957705-1.jpg",
    //         img2:"https://images.bewakoof.com/t1080/men-s-blue-striped-oversized-shirt-597301-1704957715-3.jpg",
    //         title:"Men's Blue Striped Oversized Shirt",
    //         oldprice:'₹ 999',
    //         price:'₹ 799',
    //     },
    //     {
    //         id:13,
    //         img1:"https://images.bewakoof.com/t1080/men-s-white-all-over-mickey-printed-oversized-shirt-586191-1698919188-1.jpg",
    //         img2:"https://images.bewakoof.com/t1080/men-s-white-all-over-mickey-printed-oversized-shirt-586191-1698919199-3.jpg",
    //         title:"Men's White All Over Mickey Printed Oversized Shirt",
    //         oldprice:'₹ 999',
    //         price:'₹ 799',
    //     },
    //     {
    //         id:14,
    //         img1:"https://images.bewakoof.com/t1080/men-s-multicolor-aop-all-over-printed-oversized-shirt-624408-1709558900-1.jpg",
    //         img2:"https://images.bewakoof.com/t1080/men-s-multicolor-aop-all-over-printed-oversized-shirt-624408-1709558911-3.jpg",
    //         title:"Men's Black All Over Printed Oversized Shirt",
    //         oldprice:'₹ 999',
    //         price:'₹ 799',
    //     },
    //     {
    //         id:15,
    //         img1:"https://images.bewakoof.com/t1080/women-s-aop-crop-top-605114-1702296567-5.jpg",
    //         img2:"https://images.bewakoof.com/t1080/women-s-aop-crop-top-605114-1702296551-2.jpg",
    //         title:"Women's White & Black All Over Printed Oversized Crop Top",
    //         oldprice:'₹ 999',
    //         price:'₹ 799',
    //     },
    //     {
    //         id:16,
    //         img1:"https://images.bewakoof.com/t1080/women-s-white-tunes-printed-oversized-t-shirt-615089-1707311569-1.jpg",
    //         img2:"https://images.bewakoof.com/t1080/women-s-white-tunes-printed-oversized-t-shirt-615089-1707311580-4.jpg",
    //         title:"Women's White Looney Tunes Graphic Printed Oversized Polo Short Top",
    //         oldprice:'₹ 999',
    //         price:'₹ 799',
    //     } ,
    //     {
    //         id:17,
    //         img1:"https://images.bewakoof.com/t1080/women-s-white-all-over-printed-oversized-short-top-615106-1704717352-1.jpg",
    //         img2:"https://images.bewakoof.com/t1080/women-s-white-all-over-printed-oversized-short-top-615106-1704717357-2.jpg",
    //         title:"Women's White All Over Printed Oversized Short Top",
    //         oldprice:'₹ 999',
    //         price:'₹ 699',
    //     },
    //     {
    //         id:18,
    //         img1:"https://images.bewakoof.com/t1080/women-s-black-best-of-frenimies-graphic-printed-oversized-short-top-624726-1705905844-2.jpg",
    //         img2:"https://images.bewakoof.com/t1080/women-s-black-best-of-frenimies-graphic-printed-oversized-short-top-624726-1705905859-5.jpg",
    //         title:"Women's Black & Red Smiling Mickey Graphic Printed Short Top",
    //         oldprice:'₹ 999',
    //         price:'₹ 599',
    //     },
    //     {
    //         id:19,
    //         img1:"https://images.bewakoof.com/t1080/women-s-blue-round-in-bugs-graphic-printed-oversized-short-top-589789-1707221362-1.jpg",
    //         img2:"https://images.bewakoof.com/t1080/women-s-blue-round-in-bugs-graphic-printed-oversized-short-top-589789-1707221362-1.jpg",
    //         title:"Women's Blue Round in Bugs Graphic Printed Oversized Short Top",
    //         oldprice:'₹ 999',
    //         price:'₹ 499',
    //     },
    //     {
    //         id:20,
    //         img1:"https://images.bewakoof.com/t1080/women-s-black-uchiha-s-nightmare-graphic-printed-oversized-t-shirt-630878-1707367668-1.jpg",
    //         img2:"https://images.bewakoof.com/t1080/women-s-black-uchiha-s-nightmare-graphic-printed-oversized-t-shirt-630878-1707367673-2.jpg",
    //         title:"Women's Black Uchiha's Nightmare Graphic Printed Oversized T-shirt",
    //         oldprice:'₹ 999',
    //         price:'₹ 799',
    //     }
    // ]
  return (
    <div className='lists'>
      {/* {data?.map(item=>(
        <Card item={item} key={item.id}/>
      ))} */}
    </div>
  )
}

export default Lists
