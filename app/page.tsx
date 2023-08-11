import Image from 'next/image'
import Together1 from 'img/together1.png'
import Together2 from 'img/together2.png'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="w-full">
        <div className="flex justify-between items-center mx-[82px] py-[10px] border-b border-black ">
          <div className="flex space-x-[45px] items-center">
            <div className="font-bold text-[18px]">POTTERY</div>
            <div className="flex space-x-[30px] text-[13px] font-medium">
              <div>Store</div>
              <div>Product</div>
              <div>Shirts</div>
              <div>Denim</div>
              <div>Setup</div>
              <div>Guide</div>
            </div>
          </div>
          <div className="flex space-x-[30px] text-[13px] font-medium">
            <div>Search</div>
            <div>Login</div>
            <div>Cart</div>
            <div>Services</div>
          </div>
        </div></div>
      <div className="relative pb-[12px]">
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
      <div className="relative pb-[12px]">
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
      <div className="relative bg-[#f2f2f2] h-[500px]">
        <div className="absolute top-0 bottom-0 flex-col flex justify-center px-[82px]">
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
      </div>
    </main>
  )
}
