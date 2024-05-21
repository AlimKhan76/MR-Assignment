import React from 'react'

export const Footer = () => {
    return (
        <div className='bg-[#7C7C7B] py-14 items-center justify-center flex '>
            <div className='py-8 px-12 bg-white flex flex-col w-4/5 rounded-2xl  justify-center gap-y-8'>

                <div className='flex flex-row gap-x-12  justify-center w-full'>
                    <div className='flex flex-col gap-y-8 items-start  flex-wrap flex-1'>
                        <img src={require("../assests/logo.png")} alt="" className=' h-16 object-contain' />
                        <div className='flex-wrap text-left text-base font-normal text-[#686868] '>
                            Join Mr. Corporation on this exciting journey, where innovation and community converge for a shopping experience like no other.
                        </div>
                    </div>



                    <div className='flex flex-col gap-y-4 flex-1'>
                        <div className='text-2xl font-bold'>
                            Sales
                        </div>
                        <div className='flex flex-col gap-y-4 text-base font-normal '>
                            <div className='font-medium'>sales@mrcorporation.@mail.com</div>
                            <div>MON-FRI 9AM-6PM</div>
                        </div>
                        <div className='flex flex-row gap-x-4'>
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M26.7188 6.59068C26.7188 4.76294 25.2371 3.28125 23.4093 3.28125H6.59068C4.76294 3.28125 3.28125 4.76294 3.28125 6.59068V23.4093C3.28125 25.2371 4.76294 26.7188 6.59068 26.7188H23.4093C25.2371 26.7188 26.7188 25.2371 26.7188 23.4093V6.59068ZM22.698 13.5034C21.1859 13.5203 19.7768 13.0632 18.5397 12.2165V18.16C18.5397 20.8016 16.7315 23.0708 14.1746 23.6634C10.6862 24.4593 7.73323 21.9362 7.36078 18.9221C6.97131 15.908 8.89365 13.2664 11.84 12.6737C12.4158 12.5552 13.2817 12.5552 13.7285 12.6568V15.8402C13.591 15.8064 13.4623 15.7725 13.3268 15.7556C12.1753 15.5524 11.0601 16.1281 10.6029 17.178C10.1457 18.2279 10.4517 19.447 11.383 20.1583C12.1619 20.7679 13.0262 20.8525 13.9067 20.4461C14.7872 20.0567 15.2605 19.3455 15.362 18.3803C15.379 18.2449 15.378 18.0924 15.378 17.94V6.50994C15.378 6.18823 15.3805 6.20227 15.7023 6.20227H18.2253C18.4117 6.20227 18.4794 6.22907 18.4963 6.44933C18.6317 8.41359 20.1231 10.0864 22.0365 10.3405C22.2397 10.3743 22.4575 10.3877 22.698 10.4046V13.5034Z" fill="#909090" />
                            </svg>

                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M26.125 2.5H3.875C3.51033 2.5 3.16059 2.64487 2.90273 2.90273C2.64487 3.16059 2.5 3.51033 2.5 3.875V26.125C2.5 26.4897 2.64487 26.8394 2.90273 27.0973C3.16059 27.3551 3.51033 27.5 3.875 27.5H15.85V17.8125H12.6V14.0625H15.85V11.25C15.7827 10.5897 15.8606 9.92266 16.0784 9.29567C16.2962 8.66868 16.6485 8.09693 17.1106 7.62051C17.5727 7.1441 18.1335 6.77455 18.7535 6.5378C19.3736 6.30104 20.038 6.20281 20.7 6.25C21.6729 6.24401 22.6454 6.2941 23.6125 6.4V9.775H21.625C20.05 9.775 19.75 10.525 19.75 11.6125V14.025H23.5L23.0125 17.775H19.75V27.5H26.125C26.3056 27.5 26.4844 27.4644 26.6512 27.3953C26.818 27.3262 26.9696 27.225 27.0973 27.0973C27.225 26.9696 27.3262 26.818 27.3953 26.6512C27.4644 26.4844 27.5 26.3056 27.5 26.125V3.875C27.5 3.69443 27.4644 3.51563 27.3953 3.34881C27.3262 3.18199 27.225 3.03041 27.0973 2.90273C26.9696 2.77505 26.818 2.67377 26.6512 2.60467C26.4844 2.53557 26.3056 2.5 26.125 2.5Z" fill="#909090" />
                            </svg>
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_1_564)">
                                    <path d="M17.2336 3C18.5835 3.0036 19.2687 3.0108 19.8603 3.0276L20.0931 3.036C20.3619 3.0456 20.627 3.0576 20.9474 3.072C22.2242 3.132 23.0953 3.33359 23.8597 3.62999C24.6516 3.93478 25.3188 4.34757 25.986 5.01355C26.5961 5.61341 27.0683 6.33903 27.3695 7.1399C27.6659 7.90428 27.8675 8.77546 27.9275 10.0534C27.9419 10.3726 27.9539 10.6378 27.9635 10.9078L27.9707 11.1406C27.9887 11.731 27.9959 12.4162 27.9983 13.7661L27.9995 14.6613V16.2333C28.0024 17.1086 27.9932 17.9838 27.9719 18.8588L27.9647 19.0916C27.9551 19.3616 27.9431 19.6268 27.9287 19.946C27.8687 21.224 27.6647 22.094 27.3695 22.8595C27.0691 23.6608 26.5969 24.3866 25.986 24.9859C25.386 25.5959 24.6604 26.068 23.8597 26.3695C23.0953 26.6658 22.2242 26.8674 20.9474 26.9274C20.6627 26.9408 20.3779 26.9528 20.0931 26.9634L19.8603 26.9706C19.2687 26.9874 18.5835 26.9958 17.2336 26.9982L16.3385 26.9994H14.7677C13.8921 27.0025 13.0165 26.9933 12.1411 26.9718L11.9083 26.9646C11.6234 26.9538 11.3386 26.9415 11.0539 26.9274C9.7772 26.8674 8.90604 26.6658 8.14048 26.3695C7.33972 26.0687 6.61442 25.5965 6.01539 24.9859C5.40467 24.3862 4.93211 23.6606 4.63066 22.8595C4.33428 22.0952 4.13269 21.224 4.07269 19.946C4.05932 19.6613 4.04732 19.3765 4.03669 19.0916L4.03069 18.8588C4.00858 17.9838 3.99858 17.1086 4.00069 16.2333V13.7661C3.99734 12.8909 4.00614 12.0156 4.02709 11.1406L4.03549 10.9078C4.04509 10.6378 4.05709 10.3726 4.07149 10.0534C4.13149 8.77546 4.33308 7.90549 4.62946 7.1399C4.93078 6.33821 5.40428 5.61237 6.01659 5.01355C6.61547 4.40334 7.34029 3.93116 8.14048 3.62999C8.90604 3.33359 9.776 3.132 11.0539 3.072C11.3731 3.0576 11.6395 3.0456 11.9083 3.036L12.1411 3.0288C13.0161 3.00748 13.8913 2.99828 14.7665 3.0012L17.2336 3ZM16.0001 8.99986C14.4089 8.99986 12.8828 9.63199 11.7577 10.7572C10.6325 11.8824 10.0004 13.4085 10.0004 14.9997C10.0004 16.591 10.6325 18.1171 11.7577 19.2423C12.8828 20.3675 14.4089 20.9996 16.0001 20.9996C17.5913 20.9996 19.1173 20.3675 20.2425 19.2423C21.3677 18.1171 21.9998 16.591 21.9998 14.9997C21.9998 13.4085 21.3677 11.8824 20.2425 10.7572C19.1173 9.63199 17.5913 8.99986 16.0001 8.99986ZM16.0001 11.3998C16.4728 11.3997 16.9409 11.4928 17.3777 11.6736C17.8145 11.8544 18.2114 12.1195 18.5457 12.4538C18.88 12.788 19.1453 13.1848 19.3262 13.6215C19.5072 14.0583 19.6004 14.5264 19.6005 14.9991C19.6006 15.4719 19.5075 15.94 19.3267 16.3768C19.1459 16.8136 18.8808 17.2105 18.5466 17.5448C18.2123 17.8792 17.8155 18.1444 17.3788 18.3254C16.9421 18.5064 16.474 18.5996 16.0013 18.5996C15.0465 18.5996 14.1309 18.2204 13.4558 17.5452C12.7807 16.8701 12.4015 15.9545 12.4015 14.9997C12.4015 14.045 12.7807 13.1293 13.4558 12.4542C14.1309 11.7791 15.0465 11.3998 16.0013 11.3998M22.301 7.1999C21.9032 7.1999 21.5216 7.35793 21.2403 7.63923C20.9591 7.92053 20.801 8.30205 20.801 8.69987C20.801 9.09768 20.9591 9.4792 21.2403 9.7605C21.5216 10.0418 21.9032 10.1998 22.301 10.1998C22.6988 10.1998 23.0803 10.0418 23.3616 9.7605C23.6429 9.4792 23.8009 9.09768 23.8009 8.69987C23.8009 8.30205 23.6429 7.92053 23.3616 7.63923C23.0803 7.35793 22.6988 7.1999 22.301 7.1999Z" fill="#909090" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_564">
                                        <rect width="24" height="24" fill="white" transform="translate(4 3)" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.0956 3.74805H15.2625C16.8037 3.75367 24.6131 3.80992 26.7187 4.37617C27.3553 4.54899 27.9353 4.88584 28.4009 5.35306C28.8665 5.82029 29.2013 6.40152 29.3719 7.03867C29.5612 7.75117 29.6944 8.6943 29.7844 9.66742L29.8031 9.86242L29.8444 10.3499L29.8594 10.5449C29.9812 12.2587 29.9962 13.8637 29.9981 14.2143V14.3549C29.9962 14.7187 29.9794 16.4324 29.8444 18.2174L29.8294 18.4143L29.8125 18.6093C29.7187 19.6818 29.58 20.7468 29.3719 21.5306C29.2013 22.1677 28.8665 22.7489 28.4009 23.2162C27.9353 23.6834 27.3553 24.0202 26.7187 24.1931C24.5437 24.778 16.2769 24.8193 15.1312 24.8212H14.865C14.2856 24.8212 11.8894 24.8099 9.37687 24.7237L9.05812 24.7124L8.895 24.7049L8.57437 24.6918L8.25375 24.6787C6.1725 24.5868 4.19062 24.4387 3.2775 24.1912C2.64118 24.0185 2.06128 23.682 1.59572 23.2151C1.13016 22.7482 0.795231 22.1674 0.624375 21.5306C0.41625 20.7487 0.2775 19.6818 0.18375 18.6093L0.16875 18.4124L0.15375 18.2174C0.0606814 16.947 0.00940372 15.6738 0 14.3999L0 14.1693C0.00375 13.7662 0.01875 12.373 0.12 10.8355L0.133125 10.6424L0.13875 10.5449L0.15375 10.3499L0.195 9.86242L0.21375 9.66742C0.30375 8.6943 0.436875 7.7493 0.62625 7.03867C0.79682 6.40152 1.13162 5.82029 1.5972 5.35306C2.06278 4.88584 2.64283 4.54899 3.27937 4.37617C4.1925 4.13242 6.17437 3.98242 8.25562 3.88867L8.57437 3.87555L8.89687 3.8643L9.05812 3.85867L9.37875 3.84555C11.1632 3.78818 12.9484 3.7563 14.7337 3.74992L15.0956 3.74805ZM12 9.7668V18.8006L19.7944 14.2855L12 9.7668Z" fill="#909090" />
                            </svg>


                        </div>
                    </div>



                    <div className='flex flex-col gap-y-4 flex-1'>
                        <div className='text-2xl font-bold'>
                            Call
                        </div>
                        <div className='flex flex-col gap-y-4 text-base font-normal'>
                            <div className='text-xl font-semibold'>
                                +1 (672) 588-1590

                            </div>
                            <div>MON-FRI 9AM-6PM</div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-4 flex-1'>
                        <div className='text-2xl font-bold'>
                            MR Apps
                        </div>
                        <div className='flex flex-col '>
                            <img src={require("../assests/playStore.png")} alt="" className='object-contain w-3/5' />
                            <img src={require("../assests/appStore.png")} alt="" className='object-contain w-3/5' />
                        </div>
                    </div>


















                </div>

                <div className='border-b-[0.5px] border-black '></div>

                <div className='flex  flex-col gap-y-4 justify-center items-center text-base font-normal'>
                    <div>
                        Copyright © MR Corporation, 2023. All Rights Reserved.

                    </div>
                    <div className=''>
                        <img src={require("../assests/cards.png")} alt="" className='object-contain h-5 ' />

                    </div>
                </div>
            </div>

        </div>


        // <div className='bg-[#7C7C7B] py-14 flex items-center justify-center'>
        //     <div className='py-8 px-12 bg-white flex flex-col w-4/5 rounded-2xl items-center justify-start gap-y-4'>
        //         <div className='flex flex-row gap-x-8 justify-between w-full'>
        //             <div className='flex flex-col gap-y-8 items-start flex-1 w-2/4'>
        //                 <img src={require("../assests/logo.png")} alt="" className='h-16 object-contain' />
        //                 <div className='text-left text-base font-normal text-[#686868]'>
        //                     Join Mr. Corporation on this exciting journey, where innovation and community converge for a shopping experience like no other.
        //                 </div>
        //             </div>
        //             <div className='flex flex-col gap-y-4 flex-1'>
        //                 <div className='text-2xl font-bold'>Sales</div>
        //                 <div className='flex flex-col gap-y-4 text-base font-normal'>
        //                     <div className='font-medium'>sales@mrcorporation.@mail.com</div>
        //                     <div>MON-FRI 9AM-6PM</div>
        //                 </div>
        //                 <div className='flex flex-row gap-x-4'>
        //                     {/* Social media icons */}
        //                     {/* Add SVG icons here */}
        //                 </div>
        //             </div>
        //             <div className='flex flex-col gap-y-4 flex-1'>
        //                 <div className='text-2xl font-bold'>Call</div>
        //                 <div className='flex flex-col gap-y-4 text-base font-normal'>
        //                     <div className='text-xl font-semibold'>+1 (672) 588-1590</div>
        //                     <div>MON-FRI 9AM-6PM</div>
        //                 </div>
        //             </div>
        //             <div className='flex flex-col gap-y-4 flex-1'>
        //                 <div className='text-2xl font-bold'>MR Apps</div>
        //                 <div className='flex flex-col'>
        //                     <img src={require("../assests/playStore.png")} alt="" className='object-contain w-3/5' />
        //                     <img src={require("../assests/appStore.png")} alt="" className='object-contain w-3/5' />
        //                 </div>
        //             </div>
        //         </div>
        //         <div className='border-b-[0.5px] border-black w-full'></div>
        //         <div className='flex flex-col gap-y-4 justify-center items-center text-base font-normal'>
        //             <div>Copyright © MR Corporation, 2023. All Rights Reserved.</div>
        //             <div>
        //                 <img src={require("../assests/cards.png")} alt="" className='object-contain h-5' />
        //             </div>
        //         </div>
        //     </div>
        // </div>

    )
}
