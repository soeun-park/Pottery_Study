import Image from 'next/image'
import Together1 from 'img/together1.png'
import Together2 from 'img/together2.png'
import Together3 from 'img/Frame 427323063.png'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="w-full">
        <div className="flex justify-between items-center mx-[82px] py-[10px] border-b border-black">
          <div className="flex space-x-[45px] items-center">
            <div className="font-bold text-[18px]">POTTERY</div>
            <div className="flex space-x-[30px] text-[13px] font-medium">
              <Link href={"/store"}>스토어</Link>
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
            <div>장바구니</div>
            <div>서비스</div>
          </div>
        </div></div>
      <div className="relative pb-[20px]">
        <Image src={Together1} alt="" />
        <div className="absolute top-0 bottom-0 flex-col flex justify-center px-[82px]">
          <div className="flex space-x-[8px] text-white">
            <div>캠페인</div>
            <div>|</div>
            <div>여름 23</div>
          </div>
          <div className="text-white font-medium text-[45px] leading-[55px] pt-[12px]">포터리만의 유려한<br />
            실루엣과 편안한 착용감</div>
          <div className="flex space-x-[30px] pt-[32px]">
            <button className="w-[125px] py-[10px] bg-white rounded-[10px]">구입하기</button>
            <button className="text-white" >더 알아보기 &#62;</button>
          </div>
        </div>
      </div>
      <div className="relative pb-[20px]">
        <Image src={Together2} alt="" />
        <div className="absolute top-0 bottom-0 flex-col flex justify-center px-[82px]">
          <div className="flex space-x-[8px] text-white">
            <div>캠페인</div>
            <div>|</div>
            <div>여름 23</div>
          </div>
          <div className="text-white font-medium text-[45px] leading-[55px] pt-[12px]">포터리만의 유려한<br />
            실루엣과 편안한 착용감</div>
          <div className="flex space-x-[30px] pt-[32px]">
            <button className="w-[125px] py-[10px] bg-white rounded-[10px]">구입하기</button>
            <button className="text-white" >더 알아보기 &#62;</button>
          </div>
        </div>
      </div>
      <div className="w-full py-[38px] bg-[#f2f2f2] mb-[20px]">
        <div className="flex space-x-[40px] mx-[82px] justify-between">
          <div className="flex-col flex justify-center w-[620px]">
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
      <div className="w-full py-[38px] bg-[#f2f2f2] mb-[20px]">
        <div className="flex space-x-[40px] mx-[82px] justify-between">
          <div className="flex-col flex justify-center w-[620px]">
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
      <div className="flex space-x-[20px]">
      <div className="w-full bg-[#f2f2f2] px-[82px] py-[125px]">
          <div className="flex items-center space-y-[32px]">
            <div className="flex-col">
            <div className="flex space-x-[8px]">
              <div>캠페인</div>
              <div>|</div>
              <div>여름 23</div>
            </div>
              <div className="font-medium w-[296px] text-[28px] leading-[36px] pb-[24px]"> 포터리만의 유려한 <br />실루엣과 편안한 착용감
              </div>
              <button className="text-[15px]" >더 알아보기 &#62;</button>
            </div>
            <div className="">
              <Image src={Together3} alt="" />
            </div>
          </div>
        </div>
        <div className="w-full bg-[#f2f2f2] px-[82px] py-[125px]">
          <div className="flex items-center space-y-[32px]">
            <div className="flex-col">
            <div className="flex space-x-[8px] text-[#5B5B5B text-[15px]]">
              <div>캠페인</div>
              <div>|</div>
              <div>여름 23</div>
            </div>
              <div className="font-medium w-[296px] text-[28px] leading-[36px] pt-[8px] pb-[24px]"> 포터리만의 유려한 <br />실루엣과 편안한 착용감
              </div>
              <button className="text-[15px]" >더 알아보기 &#62;</button>
            </div>
            <div>
              <Image src={Together3} alt="" />
            </div>
          </div>
        </div>
      </div>

    </main>
  )
}
