import React from 'react'
import NavBar from '../components/NavBar'
import redNavCircle from "../assests/redNavCircle.svg"
import whiteNavCircle from "../assests/whiteNavCircle.svg"
import { Footer } from '../components/Footer'

export const AboutScreen = () => {
    return (
        <div className='flex flex-col gap-y-20 w-screen '>
            <title>About Screen</title>
            <NavBar />

            <div className='flex px-32 flex-row justify-between items-center gap-x-28'>
                <div className='flex flex-col items-start gap-y-6 text-justify   flex-1'>
                    <h3 className='text-[#686868] text-2xl font-semibold font-montserrat'>
                        From Our Hearts to Your Home
                    </h3>
                    <p className='font-montserrat text-3xl font-normal'>
                        Learn More&nbsp;
                        <span className='font-montserrat font-bold text-3xl'>
                            About Us
                        </span>
                    </p>
                    <p className='text-xl leading-8'>
                        <span className='text-[#F7A738]'>
                            MR Corporation&nbsp;
                        </span>
                        is a premier grocery delivery website operating in Canada. We provide a convenient platform for users to buy coupons and stand a chance to win a year of free grocery delivery. Additionally, users receive a gift coupon every 24 hours

                    </p>
                    <div className='flex flex-row gap-x-4'>
                        <button
                            className='bg-gradient-to-b from-[#F7A738] to-[#F33F41] flex flex-row items-center rounded-full justify-around gap-x-4 py-1 pl-4 pr-2'>
                            <p className='text-white font-semibold text-lg'>
                                Get Coupon
                            </p>
                            <div className='bg-white p-2  rounded-full'>
                                <svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M26.5509 15.1765L18.3066 6.20646M26.5509 15.1765L17.9942 23.8914M26.5509 15.1765L11.85 14.9532M4.14945 14.8362L7.64968 14.8894" stroke="#F33F41" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </button>

                        <button
                            className='bg-white flex flex-row items-center rounded-full py-1 pl-1 pr-4 justify-around gap-x-4 border-2 border-[#F33F41]'>
                            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M25 0C31.6304 0 37.9893 2.63392 42.6777 7.32233C47.3661 12.0107 50 18.3696 50 25C50 31.6304 47.3661 37.9893 42.6777 42.6777C37.9893 47.3661 31.6304 50 25 50C18.3696 50 12.0107 47.3661 7.32233 42.6777C2.63392 37.9893 0 31.6304 0 25C0 18.3696 2.63392 12.0107 7.32233 7.32233C12.0107 2.63392 18.3696 0 25 0ZM25 47.9074C30.6832 47.9074 37.2202 44.839 41.2388 40.8203C45.2575 36.8017 47.6283 30.6832 47.6283 25C47.6283 19.3168 45.1738 12.7519 41.1551 8.73326C37.1365 4.71462 30.6832 1.86942 25 1.86942C19.3168 1.86942 12.6682 4.71462 8.64955 8.73326C4.63092 12.7519 2.31585 19.3168 2.31585 25C2.31585 30.6832 4.63092 36.8017 8.64955 40.8203C12.6682 44.839 19.3168 47.9074 25 47.9074ZM21.5579 34.2821L28.5 29.5L35.24 24.6652L21.5579 15.9319V34.2821ZM22.9143 13.4893L36.8357 22.7714C37.2026 23.016 37.5034 23.3474 37.7114 23.7362C37.9194 24.125 38.0283 24.5591 38.0283 25C38.0283 25.4409 37.9194 25.875 37.7114 26.2638C37.5034 26.6526 37.2026 26.984 36.8357 27.2286L22.9143 36.5107C22.5109 36.7796 22.0421 36.934 21.5579 36.9574C21.0736 36.9808 20.5921 36.8723 20.1647 36.6436C19.7373 36.4148 19.3799 36.0744 19.1308 35.6585C18.8816 35.2426 18.75 34.7669 18.75 34.2821V15.7143C18.75 15.2295 18.8816 14.7538 19.1308 14.3379C19.3799 13.922 19.7373 13.5816 20.1647 13.3528C20.5921 13.1241 21.0736 13.0156 21.5579 13.039C22.0421 13.0624 22.5109 13.2168 22.9143 13.4857V13.4893Z" fill="#F33F41" />
                            </svg>
                            <p className='text-[#F33F41] font-normal text-lg'>
                                Watch Video
                            </p>
                        </button>
                    </div>


                    <div className='flex gap-y-4 flex-col '>
                        <div className='flex flex-row items-start justify-center '>

                            <img src={require("../assests/openingBracket.png")} className='h-6' alt="" />
                            <p className='bg-gradient-to-r from-[#E84A4A] to-[#FEC93E]  text-transparent bg-clip-text text-4xl flex flex-row font-bold'>
                                One year Grocery gift from,&nbsp;
                                <img src={require("../assests/MR.png")} className='h-8' alt="" />
                            </p>
                            <img src={require("../assests/closingBracket.png")} className='h-6' alt="" />

                        </div>


                        <div className='flex flex-row'>
                            <img src={require("../assests/review1.png")} alt='' className='overflow-hidden object-contain h-14 relative ' />
                            <img src={require("../assests/review2.png")} alt='' className='overflow-hidden object-contain h-14 relative right-5 ' />
                            <img src={require("../assests/review3.png")} alt='' className='overflow-hidden object-contain h-14 relative right-10' />

                            <div>
                                <p className='text-base font-semibold text-[#686868]'>
                                    Our Happy Customers
                                </p>
                                <div className='flex flex-row items-center gap-x-1 '>
                                    <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.5 0.5L11.6329 7.06434H18.535L12.9511 11.1213L15.084 17.6857L9.5 13.6287L3.91604 17.6857L6.04892 11.1213L0.464963 7.06434H7.36712L9.5 0.5Z" fill="#FEC93E" />
                                    </svg>
                                    <p>
                                        4.5
                                        <span className='text-[#F33F41]'> (6.7 review)</span>
                                    </p>
                                </div>
                            </div>

                        </div>


                    </div>




                    <div className='flex flex-row justify-between gap-x-8 items-center  '>
                        <img src={require("../assests/playStore.png")} alt="" className='h-20' />
                        <img src={require("../assests/appStore.png")} alt="" className='h-20' />

                        <div className='flex flex-row gap-x-2 '>
                            <div className='border-2 border-[#686868] rounded-full p-2 text-[#686868] items-center'>
                                <p className='flex flex-col text-center font-black text-2xl '>
                                    04
                                    <span className='font-normal text-xs -mt-2'>
                                        Hours
                                    </span>
                                </p>
                            </div>
                            <div className='border-2 border-[#686868] rounded-full p-1.5 text-[#686868] items-center'>
                                <p className='flex flex-col text-center font-black text-2xl '>
                                    45
                                    <span className='font-normal text-xs -mt-2'>
                                        Minutes
                                    </span>
                                </p>
                            </div>
                            <div className='border-2 border-[#686868] rounded-full p-1.5 text-[#686868] items-center'>
                                <p className='flex flex-col text-center font-black text-2xl '>
                                    32
                                    <span className='font-normal text-xs  -mt-2'>
                                        Seconds
                                    </span>
                                </p>
                            </div>
                        </div>


                    </div>

                </div>
                <img src={require("../assests/deliveryBoy.png")}
                    alt=''
                    className='w-[35%] object-contain' />
            </div>



            <div className='flex-row flex justify-center text-[#45A843] font-medium text-xl  bg-[#F6F6F6] p-3 w-full'>
                <div className='flex flex-row  justify-around w-3/4 text-xl '>
                    <div className="">
                        Jack smith just bought 2 coupons(AB)
                    </div>
                    <svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.5 0.5L17.7555 10.5193L28.2903 10.5193L19.7674 16.7115L23.0229 26.7307L14.5 20.5385L5.97711 26.7307L9.23257 16.7115L0.709681 10.5193L11.2445 10.5193L14.5 0.5Z" fill="#F2BC16" />
                    </svg>

                    <div>
                        Jack smith just bought 2 coupons(AB)
                    </div>
                </div>

            </div>




            <div className='px-32 flex flex-col gap-y-12  '>
                <div className='flex-row flex  items-center gap-x-44'>
                    <div className='flex-1 flex '>
                        <img src={require("../assests/vision.png")} alt="" />
                    </div>

                    <div className='text-[#686868] gap-y-2 flex flex-col flex-1'>
                        <div className='font-bold text-4xl text-black'>Vision</div>
                        <div className='text-xl leading-8'>
                            To revolutionize the grocery delivery experience in Canada by offering easy access to coupons and the opportunity to win exciting prizes, while ensuring customer satisfaction and convenience
                        </div>
                    </div>

                </div>

                <div className='flex-row flex gap-x-44 items-center'>
                    <div className='text-[#686868] gap-y-2 flex flex-col flex-1'>
                        <div className='font-bold text-black text-4xl'>
                            Mission
                        </div>
                        <div className='text-xl leading-8'>
                            We envision becoming the go-to destination for grocery delivery services in Canada, setting the standard for convenience, affordability, and customer rewards in the industry
                        </div>
                    </div>

                    <div className='flex flex-1'>
                        <img src={require("../assests/mission.png")} alt="" />
                    </div>

                </div>
            </div>




            <div className='w-full flex flex-row justify-between  bg-[#E84A4A] bg-opacity-10  py-10 px-32'>

                <div className='flex flex-col gap-y-10  '>
                    <div className='text-5xl border-l-2 pl-2  border-[#E84A4A] leading-[4.5rem] '>
                        <div>
                            Unlock Rewards for&nbsp;
                            <span className='font-bold'>
                                You and Your Loved Ones!
                            </span>
                        </div>
                    </div>


                    <div className='text-xl flex-row flex relative  '>
                        <div className='absolute -left-16'>

                            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.8 27C11.8 22.8 13.9 20.7 18.1 20.7C13.9 20.7 11.8 18.6 11.8 14.4C11.8 18.6 9.7 20.7 5.5 20.7C9.7 20.7 11.8 22.8 11.8 27ZM13.4 42.1C13.4 46.3 11.3 48.4 7.1 48.4C11.3 48.4 13.4 50.5 13.4 54.7C13.4 50.5 15.5 48.4 19.6 48.4C15.5 48.4 13.4 46.3 13.4 42.1Z" fill="#07B7EE" />
                                <path d="M35 34.7C24.8 34.7 19.7 29.5999 19.7 19.4C19.7 29.5999 14.6 34.7 4.4 34.7C14.1 34.7 19.1 39.2999 19.7 48.4C19.7 48.9 19.7 49.4 19.7 50C19.7 39.7999 24.8 34.7 35 34.7ZM24.4 13.8C24.4 9.59995 26.5 7.49995 30.7 7.49995C26.5 7.49995 24.4 5.39995 24.4 1.19995C24.4 5.39995 22.3 7.49995 18.1 7.49995C22.3 7.49995 24.4 9.59995 24.4 13.8Z" fill="#FDCF00" />
                                <path d="M53.2 12.6C53.2 8.4 55.3 6.3 59.5 6.3C55.3 6.3 53.2 4.2 53.2 0C53.2 4.2 51.1 6.3 46.9 6.3C51.1 6.3 53.2 8.4 53.2 12.6Z" fill="#FDCF00" />
                            </svg>
                        </div>

                        <div className='w-3/4'>
                            At MR, we believe that sharing joy should be rewarding. That's why we've introduced our "Earn and Refer" program—an exciting opportunity for you to not only enhance the lives of your friends and family but also earn fantastic rewards for yourself!
                        </div>
                    </div>


                    <button className='bg-gradient-to-t from-[#EFB635] to-[#F84145] p-4  rounded-full w-1/4 '>
                        <p className='text-white  font-semibold text-lg'>
                            Share Now
                        </p>
                    </button>
                </div>
                <img src={require("../assests/rewards.png")} alt="" className='h-[10%] w-[30%]' />
            </div>


            <div className='w-full flex flex-row justify-between gap-x-24 px-32'>
                <div className='flex flex-1'>
                    <img src={require("../assests/refer.png")} alt="" />
                </div>

                <div className='flex flex-col gap-y-10 flex-1 '>
                    <div className='gap-y-4 flex flex-col'>
                        <div className='bg-gradient-to-r from-[#FEE8B0] to-[#FEE8B0]/0 w-2/4 py-2 text-2xl font-medium text-[#7C5704] rounded-xl'>
                            🎁 Rewarding
                        </div>

                        <div className='text-5xl leading-[3.5rem] '>
                            <div className='font-bold'>
                                How It Works
                                <span className='font-normal text-[#686868]'>
                                    : Simple, Seamless, and Rewarding
                                </span>
                            </div>
                        </div>
                    </div>


                    <div className='text-lg leading-7 flex-row flex font-medium text-justify text-[#686868]'>
                        At M R Corporation, we're a community-driven organization focused on making a meaningful impact in Canadian families' lives. We offer free grocery delivery and digital coupons to ensure accessibility and affordability for all.
                    </div>

                    <div className='gap-y-4 flex flex-col text-[#3B3B3B]'>
                        <div className='flex flex-row items-center gap-x-6 '>
                            <img src={require("../assests/check.png")} alt="" className='h-8' />
                            <div className='font-bold text-2xl'> Share Your Love</div>
                        </div>

                        <div className='flex flex-row items-center gap-x-6'>
                            <img src={require("../assests/check.png")} alt="" className='h-8' />
                            <div className='font-bold text-2xl'> Earn 10% of the Joy</div>
                        </div>
                    </div>
                </div>

            </div>




            <div className='w-full flex flex-row items-center justify-around gap-x-36  bg-[#E84A4A] bg-opacity-10 px-32 '>

                <div className='flex flex-col gap-y-12 flex-1 '>
                    <div className='text-5xl leading-[3.5rem] text-[#3B3B3B] font-normal flex-wrap'>
                        Why Share the Joy with&nbsp;
                        <span className='font-bold'>
                            MR?
                        </span>

                    </div>


                    <div className='text-xl flex-row flex  text-[#686868] text-justify font-normal leading-7 '>
                        Spread joy with MR! Get instant rewards when your loved ones join, refer others for more benefits, and share the joy with a 10% share when they receive a gift.
                    </div>


                    <button className='bg-gradient-to-t from-[#EFB635] to-[#F84145] py-4 px-4 rounded-full w-2/6'>
                        <p className='text-white  font-semibold text-lg'>
                            Share Now
                        </p>
                    </button>


                </div>
                <div className='flex flex-1  items-center justify-center'>
                    <img src={require("../assests/share.png")} alt="" className='w-[30rem] h-[30rem]' />

                </div>
            </div>



            <div className='flex flex-row justify-between items-center gap-x-32 px-32 '>

                <div className='flex flex-col gap-y-10 flex-1 '>
                    <div className='text-5xl leading-[4.5rem] border-l-2 border-[#F33F41] pl-2 font-bold text-[#3B3B3B] '>
                        Our Presence across Canada
                    </div>


                    <div className=' flex-row flex gap-x-4 w-5/6 font-normal text-[#686868]'>
                        <div className='flex flex-col gap-y-8 items-start flex-1'>
                            <div className='text-4xl font-semibold text-black'>100K</div>
                            <div className='text-xl'>Coupons Sold</div>
                        </div>

                        <div className='border-l-2 border-[#AEAEAE] '></div>
                        <div className='flex flex-col gap-y-8 items-start flex-1'>
                            <div className='text-4xl font-semibold  text-black'>100 +</div>
                            <div className='text-xl'>Families benefited</div>
                        </div>
                        <div className='border-l-2 border-[#AEAEAE]'></div>

                        <div className='flex flex-col gap-y-8 items-start flex-1'>
                            <div className='text-4xl font-semibold  text-black'>10K</div>
                            <div className='text-xl'>Join Us Every Week</div>
                        </div>
                    </div>


                    <button className='bg-gradient-to-t from-[#E84A4A] to-[#F7A738] p-4 rounded-full w-2/6'>
                        <p className='text-white font-montserrat font-semibold text-lg'>
                            Join Now
                        </p>
                    </button>


                </div>

                <div className='flex flex-1'>

                    <img src={require("../assests/map.png")} alt="" />
                </div>
            </div>


            <div
                className=" bg-no-repeat bg-cover  bg-blend-multiply bg-black bg-opacity-80 flex-1 bg-zaika flex flex-col items-start px-32 gap-y-20">
                <div className='flex flex-row gap-x-24 justify-start`  '>



                    <div className='flex flex-col gap-y-8 items-center w-3/5'>
                        <div className='flex items-center max-w-sm flex-col w-[360px] justify-center gap-y-12'>
                            <div className='flex-1 '>
                                <img src={require("../assests/zaika-logo.png")} alt="" />
                            </div>
                            <button className='bg-gradient-to-t from-[#E84A4A] to-[#F7A738] px-6 py-2 rounded-full  mx-14 '>
                                <p className='text-white font-montserrat font-semibold text-base'>
                                    Book your table Now
                                </p>
                            </button>
                        </div>

                    </div>

                    <div className="text-white text-5xl font-semibold text-center self-center max-w-xl leading-[3.5rem]">
                        "<span className='font-bold'>
                            Zaika
                        </span>
                        : Embark on a Culinary Journey with the Taste of India!"
                    </div>

                </div>

                <div className='flex flex-row gap-x-4 h-8 self-center pb-4'>
                    <img src={whiteNavCircle} alt="" />
                    <img src={whiteNavCircle} alt="" />
                    <img src={redNavCircle} alt="" />
                    <img src={whiteNavCircle} alt="" />
                    <img src={whiteNavCircle} alt="" />

                </div>
            </div>




            <div className='flex items-center justify-center  '>

                <div className=' border-2 border-[#9AE5D3B0]/69 rounded-3xl p-8 w-2/4 flex-col gap-y- flex shadow-[#00000040] shadow-md bg-bgFAQs bg-no-repeat bg-contain bg-right'>
                    <div className='text-center text-5xl font-bold text-[#F33F41]'>
                        FAQs
                    </div>


                    <div className='gap-y-6 flex flex-col text-xl font-semibold '>
                        <div className='flex flex-row justify-between items-center'>
                            <div>
                                How does it work?
                            </div>
                            <svg width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.05371 2.56543L12.0537 9.56543L22.0537 2.56543" stroke="#052352" strokeWidth="4" />
                            </svg>

                        </div>
                        <div className='border-b-[1px] border-[#2C8AB1]'></div>
                        <div className='flex flex-row justify-between items-center'>
                            <div>
                                What are the benefits?
                            </div>
                            <svg width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.05371 2.56543L12.0537 9.56543L22.0537 2.56543" stroke="#052352" strokeWidth="4" />
                            </svg>

                        </div>
                        <div className='border-b-[1px]   border-[#2C8AB1]'></div>
                        <div className='flex flex-row justify-between items-center'>
                            <div>
                                How many users can use it?
                            </div>
                            <svg width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.05371 2.56543L12.0537 9.56543L22.0537 2.56543" stroke="#052352" strokeWidth="4" />
                            </svg>

                        </div>
                        <div className='border-b-[1px]  border-[#2C8AB1]'></div>
                        <div className='flex flex-row justify-between items-center'>
                            <div>
                                Can I have custom pricing?
                            </div>
                            <svg width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.05371 2.56543L12.0537 9.56543L22.0537 2.56543" stroke="#052352" strokeWidth="4" />
                            </svg>

                        </div>


                    </div>


                </div>
            </div>
            <Footer />
        </div>

    )
}
