import Image from 'next/image'
import Product from 'img/product.png'
import Together3 from 'img/Frame 427323063.png'

export default function Home() {
    return (
        <main >
            <div className="w-full fixed top-0 left-0 right-0 bg-white">
                <div className="flex justify-between items-center mx-[82px] py-[10px] border-b border-black ">
                    <div className="flex space-x-[45px] items-center">
                        <div className="font-bold text-[18px]">POTTERY</div>
                        <div className="flex space-x-[30px] text-[13px] font-medium">
                            <div>스토어</div>
                            <div>제품</div>
                            <div>셔츠</div>
                            <div>데님</div>
                            <div>셋업</div>
                            <div>가이드</div>
                        </div>
                    </div>
                    <div className="flex space-x-[30px] text-[13px] font-medium">
                        <div>검색</div>
                        <div>로그인</div>
                        <div>카트</div>
                        <div>고객지원</div>
                    </div>
                </div>
            </div>

            <div className="mx-[82px] pt-[80px]">
                <div className='flex justify-between'>
                    <div className='flex items-center'>
                        <div className='border-l h-[60px]'></div>
                        <div className='flex-col w-[148px] mr-[12px] ml-[24px]'>
                            <div className='text-[17px]'>아우터</div>
                            <div className='text-[12px] text-[#b7b7b7] pt-[8px]'>올겨울에도 따뜻하게</div>
                        </div>
                        <div className="w-[70px]">
                            <Image src={Together3} alt="" />
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <div className='border-l h-[60px]'></div>
                        <div className='flex-col w-[148px] mr-[12px] ml-[24px]'>
                            <div className='text-[17px]'>상의</div>
                            <div className='text-[12px] text-[#b7b7b7] pt-[8px]'>쾌적하고 상쾌하게</div>
                        </div>
                        <div className="w-[70px]">
                            <Image src={Together3} alt="" />
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <div className='border-l h-[60px]'></div>
                        <div className='flex-col w-[148px] mr-[12px] ml-[24px]'>
                            <div className='text-[17px]'>하의</div>
                            <div className='text-[12px] text-[#b7b7b7] pt-[8px]'>기본에 충실한</div>
                        </div>
                        <div className="w-[70px]">
                            <Image src={Together3} alt="" />
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <div className='border-l h-[60px]'></div>
                        <div className='flex-col w-[148px] mr-[12px] ml-[24px]'>
                            <div className='text-[17px]'>액세서리</div>
                            <div className='text-[12px] text-[#b7b7b7] pt-[8px]'>포인트로 주기에 좋은</div>
                        </div>
                        <div className="w-[70px]">
                            <Image src={Together3} alt="" />
                        </div>
                    </div>
                    <div className='border-r h-[60px]'></div>
                </div>
                <div className="mt-[32px]">
                </div>

            </div>

            <div className='mx-[82px]'>
                <div className="bg-[#f2f2f2] rounded-2xl">
                    <div className="flex justify-between space-x-[40px] px-[60px] py-[78px]">
                        <div className="flex-col flex justify-center">
                            <div className="flex space-x-[8px]">
                                <div>캠페인</div>
                                <div>|</div>
                                <div>여름 23</div>
                            </div>
                            <div className="font-medium text-[45px] leading-[55px] pt-[12px]">포터리만의 유려한<br />
                                실루엣과 편안한 착용감</div>
                            <div className="flex space-x-[30px] pt-[32px]">
                                <button className="w-[125px] py-[10px] bg-black rounded-[10px] text-white">구입하기</button>
                                <button className="" >더 알아보기 &#62;</button>
                            </div>
                        </div>
                        <div className="w-[620px] h-[424px]">
                            <Image src={Together3} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='mx-[82px] mt-[120px] pb-24'>
                <div className='grid grid-cols-4 gap-x-[20px] gap-y-[60px]'>
                    <div className='flex-col'>
                        <Image src={Product} alt="" />
                        <div className='flex space-x-2 justify-center mt-12'>
                            <div className='w-5 h-5 rounded-full border p-[1px]  mb-8'>
                                <div className="rounded-full w-full h-full bg-[#B9BFD3]"></div>
                            </div>
                            <div className='w-5 h-5 rounded-full border p-[1px]  mb-8'>
                                <div className="rounded-full w-full h-full bg-[#000000]"></div>
                            </div>
                            <div className='w-5 h-5 rounded-full border p-[1px]  mb-8'>
                                <div className="rounded-full w-full h-full bg-[#EBE8E4]"></div>
                            </div>
                            <div className='w-5 h-5 rounded-full border p-[1px]  mb-8'>
                                <div className="rounded-full w-full h-full bg-[#D9C1C9]"></div>
                            </div>
                            <div className='w-5 h-5 rounded-full border p-[1px]  mb-8'>
                                <div className="rounded-full w-full h-full bg-[#E1D8AF]"></div>
                            </div>
                            <div className='w-5 h-5 rounded-full border p-[1px]  mb-8'>
                                <div className="rounded-full w-full h-full bg-[#B9BFD3]"></div>
                            </div>
                        </div>
                        <div className='border-t'></div>
                        <div className='text-[15px] font-medium mt-[10px]'>Comfort Shirt</div>
                        <div className='text-[12px] text-[#333333] mb-[8px]'>Superior Wool 100's Washable Gabardine Cloth</div>
                        <div className='text-[11px] mb-[20px]'>포터리 시그니처, 컴포트 셔츠</div>
                        <div className='text-[12px] mb-[22px]'>KRW 189,000</div>
                        <div className='text-[12px] w-fit bg-[#ebebeb] rounded-md px-[8px] py-[2px]'>New Arrivals</div>
                    </div>
                    <div className='flex-col'>
                        <Image src={Product} alt="" />
                        <div className='flex space-x-2 justify-center mt-12'>
                            <div className='w-5 h-5 rounded-full border p-[1px]  mb-8'>
                                <div className="rounded-full w-full h-full bg-[#B9BFD3]"></div>
                            </div>
                            <div className='w-5 h-5 rounded-full border p-[1px]  mb-8'>
                                <div className="rounded-full w-full h-full bg-[#000000]"></div>
                            </div>
                            <div className='w-5 h-5 rounded-full border p-[1px]  mb-8'>
                                <div className="rounded-full w-full h-full bg-[#EBE8E4]"></div>
                            </div>
                            <div className='w-5 h-5 rounded-full border p-[1px]  mb-8'>
                                <div className="rounded-full w-full h-full bg-[#D9C1C9]"></div>
                            </div>
                            <div className='w-5 h-5 rounded-full border p-[1px]  mb-8'>
                                <div className="rounded-full w-full h-full bg-[#E1D8AF]"></div>
                            </div>
                            <div className='w-5 h-5 rounded-full border p-[1px]  mb-8'>
                                <div className="rounded-full w-full h-full bg-[#B9BFD3]"></div>
                            </div>
                        </div>
                        <div className='border-t'></div>
                        <div className='text-[15px] font-medium mt-[10px]'>Comfort Shirt</div>
                        <div className='text-[12px] text-[#333333] mb-[8px]'>Superior Wool 100's Washable Gabardine Cloth</div>
                        <div className='text-[11px] mb-[20px]'>포터리 시그니처, 컴포트 셔츠</div>
                        <div className='text-[12px] mb-[22px]'>KRW 189,000</div>
                        <div className='text-[12px] w-fit bg-[#ebebeb] rounded-md px-[8px] py-[2px]'>New Arrivals</div>
                    </div>
                    <div className='flex-col'>
                        <Image src={Product} alt="" />
                        <div className='flex space-x-2 justify-center mt-12'>
                            <div className='w-5 h-5 rounded-full border p-[1px]  mb-8'>
                                <div className="rounded-full w-full h-full bg-[#B9BFD3]"></div>
                            </div>
                            <div className='w-5 h-5 rounded-full border p-[1px]  mb-8'>
                                <div className="rounded-full w-full h-full bg-[#000000]"></div>
                            </div>
                            <div className='w-5 h-5 rounded-full border p-[1px]  mb-8'>
                                <div className="rounded-full w-full h-full bg-[#EBE8E4]"></div>
                            </div>
                            <div className='w-5 h-5 rounded-full border p-[1px]  mb-8'>
                                <div className="rounded-full w-full h-full bg-[#D9C1C9]"></div>
                            </div>
                            <div className='w-5 h-5 rounded-full border p-[1px]  mb-8'>
                                <div className="rounded-full w-full h-full bg-[#E1D8AF]"></div>
                            </div>
                            <div className='w-5 h-5 rounded-full border p-[1px]  mb-8'>
                                <div className="rounded-full w-full h-full bg-[#B9BFD3]"></div>
                            </div>
                        </div>
                        <div className='border-t'></div>
                        <div className='text-[15px] font-medium mt-[10px]'>Comfort Shirt</div>
                        <div className='text-[12px] text-[#333333] mb-[8px]'>Superior Wool 100's Washable Gabardine Cloth</div>
                        <div className='text-[11px] mb-[20px]'>포터리 시그니처, 컴포트 셔츠</div>
                        <div className='text-[12px] mb-[22px]'>KRW 189,000</div>
                        <div className='text-[12px] w-fit bg-[#ebebeb] rounded-md px-[8px] py-[2px]'>New Arrivals</div>
                    </div>
                    <div className='flex-col'>
                        <Image src={Product} alt="" />
                        <div className='flex space-x-2 justify-center mt-12'>
                            <div className='w-5 h-5 rounded-full border p-[1px]  mb-8'>
                                <div className="rounded-full w-full h-full bg-[#B9BFD3]"></div>
                            </div>
                            <div className='w-5 h-5 rounded-full border p-[1px]  mb-8'>
                                <div className="rounded-full w-full h-full bg-[#000000]"></div>
                            </div>
                            <div className='w-5 h-5 rounded-full border p-[1px]  mb-8'>
                                <div className="rounded-full w-full h-full bg-[#EBE8E4]"></div>
                            </div>
                            <div className='w-5 h-5 rounded-full border p-[1px]  mb-8'>
                                <div className="rounded-full w-full h-full bg-[#D9C1C9]"></div>
                            </div>
                            <div className='w-5 h-5 rounded-full border p-[1px]  mb-8'>
                                <div className="rounded-full w-full h-full bg-[#E1D8AF]"></div>
                            </div>
                            <div className='w-5 h-5 rounded-full border p-[1px]  mb-8'>
                                <div className="rounded-full w-full h-full bg-[#B9BFD3]"></div>
                            </div>
                        </div>
                        <div className='border-t'></div>
                        <div className='text-[15px] font-medium mt-[10px]'>Comfort Shirt</div>
                        <div className='text-[12px] text-[#333333] mb-[8px]'>Superior Wool 100's Washable Gabardine Cloth</div>
                        <div className='text-[11px] mb-[20px]'>포터리 시그니처, 컴포트 셔츠</div>
                        <div className='text-[12px] mb-[22px]'>KRW 189,000</div>
                        <div className='text-[12px] w-fit bg-[#ebebeb] rounded-md px-[8px] py-[2px]'>New Arrivals</div>
                    </div>
                    <div className='flex-col'>
                        <Image src={Product} alt="" />
                        <div className='flex space-x-2 justify-center mt-12'>
                            <div className='w-5 h-5 rounded-full border p-[1px]  mb-8'>
                                <div className="rounded-full w-full h-full bg-[#B9BFD3]"></div>
                            </div>
                            <div className='w-5 h-5 rounded-full border p-[1px]  mb-8'>
                                <div className="rounded-full w-full h-full bg-[#000000]"></div>
                            </div>
                            <div className='w-5 h-5 rounded-full border p-[1px]  mb-8'>
                                <div className="rounded-full w-full h-full bg-[#EBE8E4]"></div>
                            </div>
                            <div className='w-5 h-5 rounded-full border p-[1px]  mb-8'>
                                <div className="rounded-full w-full h-full bg-[#D9C1C9]"></div>
                            </div>
                            <div className='w-5 h-5 rounded-full border p-[1px]  mb-8'>
                                <div className="rounded-full w-full h-full bg-[#E1D8AF]"></div>
                            </div>
                            <div className='w-5 h-5 rounded-full border p-[1px]  mb-8'>
                                <div className="rounded-full w-full h-full bg-[#B9BFD3]"></div>
                            </div>
                        </div>
                        <div className='border-t'></div>
                        <div className='text-[15px] font-medium mt-[10px]'>Comfort Shirt</div>
                        <div className='text-[12px] text-[#333333] mb-[8px]'>Superior Wool 100's Washable Gabardine Cloth</div>
                        <div className='text-[11px] mb-[20px]'>포터리 시그니처, 컴포트 셔츠</div>
                        <div className='text-[12px] mb-[22px]'>KRW 189,000</div>
                        <div className='text-[12px] w-fit bg-[#ebebeb] rounded-md px-[8px] py-[2px]'>New Arrivals</div>
                    </div>
                    <div className='flex-col'>
                        <Image src={Product} alt="" />
                        <div className='flex space-x-2 justify-center mt-12'>
                            <div className='w-5 h-5 rounded-full border p-[1px]  mb-8'>
                                <div className="rounded-full w-full h-full bg-[#B9BFD3]"></div>
                            </div>
                            <div className='w-5 h-5 rounded-full border p-[1px]  mb-8'>
                                <div className="rounded-full w-full h-full bg-[#000000]"></div>
                            </div>
                            <div className='w-5 h-5 rounded-full border p-[1px]  mb-8'>
                                <div className="rounded-full w-full h-full bg-[#EBE8E4]"></div>
                            </div>
                            <div className='w-5 h-5 rounded-full border p-[1px]  mb-8'>
                                <div className="rounded-full w-full h-full bg-[#D9C1C9]"></div>
                            </div>
                            <div className='w-5 h-5 rounded-full border p-[1px]  mb-8'>
                                <div className="rounded-full w-full h-full bg-[#E1D8AF]"></div>
                            </div>
                            <div className='w-5 h-5 rounded-full border p-[1px]  mb-8'>
                                <div className="rounded-full w-full h-full bg-[#B9BFD3]"></div>
                            </div>
                        </div>
                        <div className='border-t'></div>
                        <div className='text-[15px] font-medium mt-[10px]'>Comfort Shirt</div>
                        <div className='text-[12px] text-[#333333] mb-[8px]'>Superior Wool 100's Washable Gabardine Cloth</div>
                        <div className='text-[11px] mb-[20px]'>포터리 시그니처, 컴포트 셔츠</div>
                        <div className='text-[12px] mb-[22px]'>KRW 189,000</div>
                        <div className='text-[12px] w-fit bg-[#ebebeb] rounded-md px-[8px] py-[2px]'>New Arrivals</div>
                    </div>
                    <div className='flex-col'>
                        <Image src={Product} alt="" />
                        <div className='flex space-x-2 justify-center mt-12'>
                            <div className='w-5 h-5 rounded-full border p-[1px]  mb-8'>
                                <div className="rounded-full w-full h-full bg-[#B9BFD3]"></div>
                            </div>
                            <div className='w-5 h-5 rounded-full border p-[1px]  mb-8'>
                                <div className="rounded-full w-full h-full bg-[#000000]"></div>
                            </div>
                            <div className='w-5 h-5 rounded-full border p-[1px]  mb-8'>
                                <div className="rounded-full w-full h-full bg-[#EBE8E4]"></div>
                            </div>
                            <div className='w-5 h-5 rounded-full border p-[1px]  mb-8'>
                                <div className="rounded-full w-full h-full bg-[#D9C1C9]"></div>
                            </div>
                            <div className='w-5 h-5 rounded-full border p-[1px]  mb-8'>
                                <div className="rounded-full w-full h-full bg-[#E1D8AF]"></div>
                            </div>
                            <div className='w-5 h-5 rounded-full border p-[1px]  mb-8'>
                                <div className="rounded-full w-full h-full bg-[#B9BFD3]"></div>
                            </div>
                        </div>
                        <div className='border-t'></div>
                        <div className='text-[15px] font-medium mt-[10px]'>Comfort Shirt</div>
                        <div className='text-[12px] text-[#333333] mb-[8px]'>Superior Wool 100's Washable Gabardine Cloth</div>
                        <div className='text-[11px] mb-[20px]'>포터리 시그니처, 컴포트 셔츠</div>
                        <div className='text-[12px] mb-[22px]'>KRW 189,000</div>
                        <div className='text-[12px] w-fit bg-[#ebebeb] rounded-md px-[8px] py-[2px]'>New Arrivals</div>
                    </div>
                    <div className='flex-col'>
                        <Image src={Product} alt="" />
                        <div className='flex space-x-2 justify-center mt-12'>
                            <div className='w-5 h-5 rounded-full border p-[1px]  mb-8'>
                                <div className="rounded-full w-full h-full bg-[#B9BFD3]"></div>
                            </div>
                            <div className='w-5 h-5 rounded-full border p-[1px]  mb-8'>
                                <div className="rounded-full w-full h-full bg-[#000000]"></div>
                            </div>
                            <div className='w-5 h-5 rounded-full border p-[1px]  mb-8'>
                                <div className="rounded-full w-full h-full bg-[#EBE8E4]"></div>
                            </div>
                            <div className='w-5 h-5 rounded-full border p-[1px]  mb-8'>
                                <div className="rounded-full w-full h-full bg-[#D9C1C9]"></div>
                            </div>
                            <div className='w-5 h-5 rounded-full border p-[1px]  mb-8'>
                                <div className="rounded-full w-full h-full bg-[#E1D8AF]"></div>
                            </div>
                            <div className='w-5 h-5 rounded-full border p-[1px]  mb-8'>
                                <div className="rounded-full w-full h-full bg-[#B9BFD3]"></div>
                            </div>
                        </div>
                        <div className='border-t'></div>
                        <div className='text-[15px] font-medium mt-[10px]'>Comfort Shirt</div>
                        <div className='text-[12px] text-[#333333] mb-[8px]'>Superior Wool 100's Washable Gabardine Cloth</div>
                        <div className='text-[11px] mb-[20px]'>포터리 시그니처, 컴포트 셔츠</div>
                        <div className='text-[12px] mb-[22px]'>KRW 189,000</div>
                        <div className='text-[12px] w-fit bg-[#ebebeb] rounded-md px-[8px] py-[2px]'>New Arrivals</div>
                    </div>

                </div>
            </div>


            <div className="w-full bg-white">
                <div className="mx-[82px] py-[8px] border-t border-[#B7B7B7] ">
                    <div className="grid grid-cols-4 gap-4">
                        <div className='flex-col space-y-[12px]'>
                            <div className="font-bold text-[16px] pb-[20px]">POTTERY</div>
                            <div className='text-[12px] text-[#333333] leading-[15px]'>회사명 : 주식회사 포터리</div>
                            <div className='text-[12px] text-[#333333] leading-[15px]'>대표이사 : 김건우</div>
                            <div className='text-[12px] text-[#333333] leading-[15px]'>주소 : 서울특별시 마포구 양화로 73, 체리스빌딩 2/3층</div>
                            <div className='text-[12px] text-[#333333] leading-[15px]'>사업자 등록번호 : 504-88-01834</div>
                            <div className='text-[12px] text-[#333333] leading-[15px]'>통신판매업번호 : 2021-서울마포-1570</div>
                        </div>
                        <div className='flex-col space-y-[4px]'>
                            <div className="font-bold text-[18px] pb-[45px]"></div>
                            <div className='text-[12px] text-[#333333] leading-[15px]'>온라인 고객센터</div>
                            <div className='text-[12px] text-[#333333] leading-[15px]'>운영시간 : 10:00-17:00 (주말/공휴일 휴무)</div>
                            <div className='text-[12px] text-[#333333] leading-[15px]'>연락처 : 02-332-9934</div>
                        </div>
                        <div className='flex'>
                            <div className="text-[12px] text-[#333333] leading-[15px] w-[88px] mr-[20px] font-semibold">위치 및 언어 설정</div>
                            <div className='flex-col'>
                                <div className="text-[12px] text-[#333333] leading-[15px] border-b border-[#B7B7B7] w-[196px] pb-[13px]">배송</div>
                                <div className="text-[12px] text-[#333333] leading-[15px] border-b border-[#B7B7B7] w-[196px] pb-[13px ">언어</div>
                            </div>
                        </div>
                        <div className="font-bold text-[18px]">POTTERY</div>
                    </div>
                </div>
            </div>
        </main >
    )
}
