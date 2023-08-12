import Image from 'next/image'
import Together1 from 'img/together1.png'
import Together3 from 'img/Frame 427323063.png'
import Together4 from 'img/together4.png'

export default function Home() {
    return (
        <main className="">
            <div className="w-full">
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
                </div></div>
            <div className="">
                <div className="flex justify-between items-center pt-[100px] px-[82px]">
                    <div className="text-[45px] font-semibold leading-[54px]">현대사회에 적합한 <br />
                        유니폼, 포터리</div>
                    <div className="flex space-x-[12px]">
                        <div className="w-[176px]">
                            <div className="border-r">
                                <div className='text-[14px] font-semibold'>쇼핑 지원이 필요하다면?</div>
                                <div className="text-[12px] text-[#b7b7b7] pt-[4px]">저희 팀원이 도와드릴께요 &#62;</div>
                            </div>
                        </div>
                        <div className="w-[176px]">
                            <div className="border-r">
                                <div className='text-[14px] font-semibold'>쇼핑 지원이 필요하다면?</div>
                                <div className="text-[12px] text-[#b7b7b7] pt-[4px]">저희 팀원이 도와드릴께요 &#62;</div>
                            </div>
                        </div>
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
            <div>
                <div className='font-semibold text-[28px] leading-[34px] mb-[30px] mx-[82px] '>23SS 캠페인과 룩북</div>
                <div className='ml-[82px] overflow-x-auto'>
                    <div className='flex space-x-[20px]'>
                        <div className='relative'>
                            <div className='w-[710px] h-[500px]'>
                                <Image src={Together4} alt="" />
                            </div>
                            <div className='absolute top-0 bottom-0  p-[30px]'>
                                <div className='text-[13px] text-white pb-[12px]'>Comfort Shirt</div>
                                <div className='text-[28px] text-white leading-[34px] font-semibold pb-[16px]'>포터리만의 유려한 <br />
                                    실루엣과 편안함 착용감</div>
                                <div className=' w-full border-b'></div>
                                <div className=' text-white text-[17px] font-regular pt-[16px]'>전에 없던 색상으로 </div>
                            </div>
                        </div>
                        <div className='relative'>
                            <div className='w-[710px] h-[500px]'>
                                <Image src={Together4} alt="" />
                            </div>
                            <div className='absolute top-0 bottom-0  p-[30px]'>
                                <div className='text-[13px] text-white pb-[12px]'>Comfort Shirt</div>
                                <div className='text-[28px] text-white leading-[34px] font-semibold pb-[16px]'>포터리만의 유려한 <br />
                                    실루엣과 편안함 착용감</div>
                                <div className=' w-full border-b'></div>
                                <div className=' text-white text-[17px] font-regular pt-[16px]'>전에 없던 색상으로 </div>
                            </div>
                        </div>
                        <div className='relative'>
                            <div className='w-[710px] h-[500px]'>
                                <Image src={Together4} alt="" />
                            </div>
                            <div className='absolute top-0 bottom-0  p-[30px]'>
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
        </main>
    )
}
