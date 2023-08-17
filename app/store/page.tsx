import Image from 'next/image'
import Together1 from 'img/together1.png'
import Together3 from 'img/Frame 427323063.png'
import Together4 from 'img/together4.png'
import Together5 from 'img/together5.png'
import Together6 from 'img/together6.png'
import Together7 from 'img/together7.png'

export default function Home() {
    return (
        <main >
            <div className="w-full fixed top-0 left-0 right-0 bg-white z-20">
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
            <div className="flex justify-between items-center pt-[100px] px-[82px]">
                <div className="text-[45px] font-semibold leading-[54px]">현대사회에 적합한 <br />
                    유니폼, 포터리</div>
                <div className="flex space-x-[12px] rounded-t-xl border border-b-0 p-[16px]">
                    <div className="w-[176px] border-r">
                        <div className='text-[14px] font-semibold'>쇼핑 지원이 필요하다면?</div>
                        <div className="text-[12px] text-[#b7b7b7] pt-[4px]">저희 팀원이 도와드릴께요 &#62;</div>
                    </div>
                    <div className="w-[176px]">
                        <div className='text-[14px] font-semibold'>쇼핑 지원이 필요하다면?</div>
                        <div className="text-[12px] text-[#b7b7b7] pt-[4px]">저희 팀원이 도와드릴께요 &#62;</div>
                    </div>
                </div>
            </div>
            <div className="mx-[82px] pt-[100px]">
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
                <div className="mt-[140px]">
                </div>

            </div>
            <div className='flex '>
                <div className=' pl-[82px] space-y-[42px] pr-[60px]'>
                    <div>01</div>
                    <div className='flex space-x-[16px]'>
                        <div className='h-[12px] border-l'></div>
                        <div className='h-[12px] border-l'></div>
                        <div className='h-[12px] border-l'></div>
                        <div className='h-[12px] border-l'></div>
                        <div className='h-[12px] border-l'></div>
                    </div>
                </div>
                <div className="w-full overflow-hidden">
                    <div className='font-semibold text-[28px] leading-[34px] ml-[82px]'>23SS 캠페인과 룩북</div>
                    <div className='w-full flex space-x-[20px] pt-[30px] overflow-x-auto ml-[82px] pr-[160px]'>
                        <div className='relative '>
                            <div className='w-[710px] h-[500px]'>
                                <Image src={Together4} alt="" className='rounded-[15px] drop-shadow-md' />
                            </div>
                            <div className='absolute top-0 bottom-0 p-[30px] w-full'>
                                <div >
                                    <div className='text-[13px] text-white pb-[12px]'>Comfort Shirt</div>
                                    <div className='text-[28px] text-white leading-[34px] font-semibold pb-[16px]'>포터리만의 유려한 <br />
                                        실루엣과 편안함 착용감</div>
                                    <div className=' w-full border-b'></div>
                                    <div className=' text-white text-[17px] font-regular pt-[16px]'>전에 없던 색상으로 </div>
                                </div>
                            </div>
                        </div>
                        <div className='relative'>
                            <div className='w-[710px] h-[500px]'>
                                <Image src={Together5} alt="" className='rounded-[15px] drop-shadow-md' />
                            </div>
                            <div className='absolute top-0 bottom-0  p-[30px] w-full'>
                                <div className='text-[13px] pb-[12px]'>Comfort Shirt</div>
                                <div className='text-[28px] leading-[34px] font-semibold pb-[16px]'>포터리만의 유려한 <br />
                                    실루엣과 편안함 착용감</div>
                                <div className=' border-b'></div>
                                <div className=' text-[17px] font-regular pt-[16px]'>전에 없던 색상으로 </div>
                            </div>
                        </div>
                        <div className='relative'>
                            <div className='w-[710px] h-[500px]'>
                                <Image src={Together4} alt="" className='rounded-[15px] drop-shadow-md' />
                            </div>
                            <div className='absolute top-0 bottom-0  p-[30px] w-full'>
                                <div className='text-[13px] text-white pb-[12px]'>Comfort Shirt</div>
                                <div className='text-[28px] text-white leading-[34px] font-semibold pb-[16px]'>포터리만의 유려한 <br />
                                    실루엣과 편안함 착용감</div>
                                <div className=' w-full border-b'></div>
                                <div className=' text-white text-[17px] font-regular pt-[16px]'>전에 없던 색상으로 </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-[100px]' >
                <div className='flex overflow-x-auto'>
                    <div className='space-y-[42px] ml-[82px]'>
                        <div>01</div>
                        <div className='flex space-x-[16px]'>
                            <div className='h-[12px] border-l'></div>
                            <div className='h-[12px] border-l'></div>
                            <div className='h-[12px] border-l'></div>
                            <div className='h-[12px] border-l'></div>
                            <div className='h-[12px] border-l'></div>
                        </div>
                    </div>
                    <div className=''>
                        <div className='font-semibold text-[28px] leading-[34px] ml-[82px]'>에디토리얼</div>
                        <div className=''>
                            <div className='flex space-x-[20px] pt-[30px] ml-[82px]'>
                                <div className='relative '>
                                    <div className='w-[375px] h-[500px]'>
                                        <Image src={Together6} alt="" className='rounded-[15px] drop-shadow-md' />
                                    </div>
                                    <div className='absolute top-0 bottom-0 p-[25px] w-full'>
                                        <div className=''>
                                            <div className='text-[13px] text-white pb-[12px]'>Comfort Shirt</div>
                                            <div className='text-[28px] text-white leading-[34px] font-semibold pb-[16px]'>포터리만의 유려한 <br />
                                                실루엣과 편안함 착용감</div>
                                            <div className=' w-full border-b'></div>
                                            <div className=' text-white text-[17px] font-regular pt-[16px]'>전에 없던 색상으로 </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='relative'>
                                    <div className='w-[375px] h-[500px]'>
                                        <Image src={Together7} alt="" className='rounded-[15px] drop-shadow-md' />
                                    </div>
                                    <div className='absolute top-0 bottom-0  p-[25px] w-full'>
                                        <div className='text-[13px] pb-[12px]'>Comfort Shirt</div>
                                        <div className='text-[28px] leading-[34px] font-semibold pb-[16px]'>포터리만의 유려한 <br />
                                            실루엣과 편안함 착용감</div>
                                        <div className=' border-b'></div>
                                        <div className=' text-[17px] font-regular pt-[16px]'>전에 없던 색상으로 </div>
                                    </div>
                                </div>
                                <div className='relative '>
                                    <div className='w-[375px] h-[500px]'>
                                        <Image src={Together6} alt="" className='rounded-[15px] drop-shadow-md' />
                                    </div>
                                    <div className='absolute top-0 bottom-0 p-[25px] w-full'>
                                        <div className=''>
                                            <div className='text-[13px] text-white pb-[12px]'>Comfort Shirt</div>
                                            <div className='text-[28px] text-white leading-[34px] font-semibold pb-[16px]'>포터리만의 유려한 <br />
                                                실루엣과 편안함 착용감</div>
                                            <div className=' w-full border-b'></div>
                                            <div className=' text-white text-[17px] font-regular pt-[16px]'>전에 없던 색상으로 </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='relative'>
                                    <div className='w-[375px] h-[500px]'>
                                        <Image src={Together7} alt="" className='rounded-[15px] drop-shadow-md' />
                                    </div>
                                    <div className='absolute top-0 bottom-0  p-[25px] w-full'>
                                        <div className='text-[13px] pb-[12px]'>Comfort Shirt</div>
                                        <div className='text-[28px] leading-[34px] font-semibold pb-[16px]'>포터리만의 유려한 <br />
                                            실루엣과 편안함 착용감</div>
                                        <div className=' border-b'></div>
                                        <div className=' text-[17px] font-regular pt-[16px]'>전에 없던 색상으로 </div>
                                    </div>
                                </div>
                                <div className='relative '>
                                    <div className='w-[375px] h-[500px]'>
                                        <Image src={Together6} alt="" className='rounded-[15px] drop-shadow-md' />
                                    </div>
                                    <div className='absolute top-0 bottom-0 p-[25px] w-full'>
                                        <div className=''>
                                            <div className='text-[13px] text-white pb-[12px]'>Comfort Shirt</div>
                                            <div className='text-[28px] text-white leading-[34px] font-semibold pb-[16px]'>포터리만의 유려한 <br />
                                                실루엣과 편안함 착용감</div>
                                            <div className=' w-full border-b'></div>
                                            <div className=' text-white text-[17px] font-regular pt-[16px]'>전에 없던 색상으로 </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='mt-[100px]' >
                <div className='flex overflow-x-auto'>
                    <div className='space-y-[42px] ml-[82px]'>
                        <div>01</div>
                        <div className='flex space-x-[16px]'>
                            <div className='h-[12px] border-l'></div>
                            <div className='h-[12px] border-l'></div>
                            <div className='h-[12px] border-l'></div>
                            <div className='h-[12px] border-l'></div>
                            <div className='h-[12px] border-l'></div>
                        </div>
                    </div>
                    <div className=''>
                        <div className='font-semibold text-[28px] leading-[34px] ml-[82px]'>스토리</div>
                        <div className=''>
                            <div className='flex space-x-[20px] pt-[30px] ml-[82px]'>
                                <div className='relative '>
                                    <div className='w-[375px] h-[240px]'>
                                        <Image src={Together4} alt="" className='rounded-[15px] drop-shadow-md' />
                                    </div>
                                    <div className='absolute top-0 bottom-0 p-[25px] w-full'>
                                        <div className=''>
                                            <div className='text-[13px] text-white pb-[12px]'>Comfort Shirt</div>
                                            <div className='text-[28px] text-white leading-[34px] font-semibold pb-[16px]'>포터리만의 유려한 <br />
                                                실루엣과 편안함 착용감</div>
                                            <div className=' w-full border-b'></div>
                                            <div className=' text-white text-[17px] font-regular pt-[16px]'>전에 없던 색상으로 </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='relative'>
                                    <div className='w-[375px] h-[500px]'>
                                        <Image src={Together4} alt="" className='rounded-[15px] drop-shadow-md' />
                                    </div>
                                    <div className='absolute top-0 bottom-0  p-[25px] w-full'>
                                        <div className='text-[13px] text-white pb-[12px]'>Comfort Shirt</div>
                                        <div className='text-[28px] text-white leading-[34px] font-semibold pb-[16px]'>포터리만의 유려한 <br />
                                            실루엣과 편안함 착용감</div>
                                        <div className=' border-b'></div>
                                        <div className=' text-[17px] text-white font-regular pt-[16px]'>전에 없던 색상으로 </div>
                                    </div>
                                </div>
                                <div className='relative '>
                                    <div className='w-[375px] h-[500px]'>
                                        <Image src={Together4} alt="" className='rounded-[15px] drop-shadow-md' />
                                    </div>
                                    <div className='absolute top-0 bottom-0 p-[25px] w-full'>
                                        <div className=''>
                                            <div className='text-[13px] text-white pb-[12px]'>Comfort Shirt</div>
                                            <div className='text-[28px] text-white leading-[34px] font-semibold pb-[16px]'>포터리만의 유려한 <br />
                                                실루엣과 편안함 착용감</div>
                                            <div className=' w-full border-b'></div>
                                            <div className=' text-white text-[17px] font-regular pt-[16px]'>전에 없던 색상으로 </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='relative'>
                                    <div className='w-[375px] h-[500px]'>
                                        <Image src={Together4} alt="" className='rounded-[15px] drop-shadow-md' />
                                    </div>
                                    <div className='absolute top-0 bottom-0  p-[25px] w-full'>
                                        <div className='text-[13px] text-white pb-[12px]'>Comfort Shirt</div>
                                        <div className='text-[28px] text-white leading-[34px] font-semibold pb-[16px]'>포터리만의 유려한 <br />
                                            실루엣과 편안함 착용감</div>
                                        <div className=' border-b'></div>
                                        <div className=' text-[17px] text-white font-regular pt-[16px]'>전에 없던 색상으로 </div>
                                    </div>
                                </div>
                                <div className='relative '>
                                    <div className='w-[375px] h-[500px]'>
                                        <Image src={Together4} alt="" className='rounded-[15px] drop-shadow-md' />
                                    </div>
                                    <div className='absolute top-0 bottom-0 p-[25px] w-full'>
                                        <div className=''>
                                            <div className='text-[13px] text-white pb-[12px]'>Comfort Shirt</div>
                                            <div className='text-[28px] text-white leading-[34px] font-semibold pb-[16px]'>포터리만의 유려한 <br />
                                                실루엣과 편안함 착용감</div>
                                            <div className=' w-full border-b'></div>
                                            <div className=' text-white text-[17px] font-regular pt-[16px]'>전에 없던 색상으로 </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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
