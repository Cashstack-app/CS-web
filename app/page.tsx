"use client";
/* eslint-disable @next/next/no-img-element */
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
// import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Home() {
  return (
    <>
      <header className="h-[70vh] flex items-end gap-[75px] bg-white text-dark justify-between pl-[10%] pr-[6%]">
        <div className="w-[50%] h-full flex flex-col">
          <div className="h-full flex justify-center flex-col gap-[30px]">
            <div className="flex justify-center items-start flex-col gap-4">
              <h1 className="text-[50px] font-[800] leading-[120%]">
                Send, Receive, convert <br /> and usage{" "}
                <span className="bg-gradient-to-r from-[#8730FE] via-[#456EFE] to-[#B775D7] text-transparent bg-clip-text">
                  simplified.
                </span>
              </h1>
              <div className="text-[20px]">
                <p>Join the digital revolution and experience the next</p>
                <p>
                  Generation Banking with{" "}
                  <span className="text-[#456EFE] font-[500]">Cashstack</span>
                </p>
              </div>
            </div>
            <div className="py-[18px] flex justify-start items-center gap-[25px]">
              <div className="p-[2px] rounded-[8px] bg-gradient-to-r from-[#8730FE] via-[#456EFE] to-[#B775D7]">
                <div className="bg-white text-[#182759] w-[180px] h-[66px] rounded-[8px] flex justify-center items-center gap-[6px]">
                  <img src="/playstore.svg" alt="" />
                  <div>
                    <p className="text-[14px]">Get it on</p>
                    <p className="text-[20px] font-[500]">Google Play</p>
                  </div>
                </div>
              </div>
              <div className="p-[2px] rounded-[8px] bg-gradient-to-r from-[#8730FE] via-[#456EFE] to-[#B775D7]">
                <div className="bg-white  text-[#182759] w-[180px] h-[66px] rounded-[8px] flex justify-center items-center gap-[6px]">
                  <img src="/apple.svg" alt="" />
                  <div>
                    <p className="text-[14px]">Download on</p>
                    <p className="text-[20px] font-[500]">Apple Store</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[50%]">
          <img src="/hero.png" alt="" />
        </div>
      </header>

      <main>
        <div className="overflow-hidden">
          <div className="bg-[#ECF1FF] relative">
            <img src="/footerPtn.svg" className="absolute z-0 w-full" alt="" />
            <div className="pt-2 pb-4 px-[10%] flex flex-col gap-3 z-10 relative">
              <h2 className="text-[18px] font-[500]">Partnering with;</h2>
              <div className="flex justify-between items-center">
                <div>
                  <img src="/safehaven.svg" alt="" />
                </div>
                <div className="flex justify-end items-center gap-[25px]">
                  <div className="flex justify-start items-center gap-2">
                    <img src="/dot.svg" alt="" />
                    <p className="text-[18p]">Split bills</p>
                  </div>
                  <div className="flex justify-start items-center gap-2">
                    <img src="/dot.svg" alt="" />
                    <p className="text-[18p]">Instant currency conversion</p>
                  </div>
                  <div className="flex justify-start items-center gap-2">
                    <img src="/dot.svg" alt="" />
                    <p className="text-[18p]">
                      Send & Receive money in multiple currency
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="overflow-hidden">
          <div className="bg-[#294298] relative">
            <img src="/section1.svg" className="absolute z-0 w-full" alt="" />
            <div className="relative z-10 pt-[60px] pb-[75px] flex flex-col items-start gap-[22px] px-[10%]">
              <div className="text-[38px] font-[700] text-white leading-[120%]">
                <h2>Send and Receive money in naira</h2>
              </div>
              <div className="flex justify-between items-center gap-[60px] w-full">
                <div className="w-[60%]">
                  <div className="w-full bg-[#182759] border-white/30 border-[2px] rounded-[15px] relative overflow-hidden pt-[10px]">
                    <img
                      src="/applePtn.svg"
                      className="absolute top-0 right-0"
                      alt=""
                    />
                    <div className="flex justify-between items-center pt-[62px] px-[20px]">
                      <div className="w-[50%]">
                        <img src="/phone.png" alt="" className="w-[100%]" />
                      </div>
                      <div className="w-[50%] flex flex-col items-center gap-[35px] pt-[25%]">
                        <p className="text-white text-[18px] text-center">
                          <span className="text-[#456EFE] font-[600]">
                            Send
                          </span>{" "}
                          and{" "}
                          <span className="text-[#456EFE] font-[600]">
                            Receive{" "}
                          </span>
                          money across <br />
                          borders in any currency your choice
                        </p>
                        <button className="bg-white h-[55px] w-[155px] rounded-[6px] text-[#182759] font-[700] text-[20px]">
                          Try now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#ECF1FF] rounded-[20px] px-[28px] pt-[30px] pb-[35px] w-[35%] flex flex-col items-start gap-[32px]">
                  <div className="flex justify-start items-start gap-[10px]">
                    <img src="/sending.svg" alt="" />
                    <div>
                      <h2 className="text-[20px] font-[600]">Sending money</h2>
                      <p className="text-[#182759] text-[18px]">
                        You can <span className="font-[600]">send</span> money
                        to any bank of your choice within Nigeria.
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-start items-start gap-[10px]">
                    <img src="/receiving.svg" alt="" />
                    <div>
                      <h2 className="text-[20px] font-[600]">
                        Receiving money
                      </h2>
                      <p className="text-[#182759] text-[18px]">
                        You can <span className="font-[600]">receive</span>{" "}
                        money to any bank of your choice within Nigeria.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-white px-[10%] pt-[75px] pb-[60px] grid grid-cols-2 h-full gap-[34px] items-start">
          <div className="h-full flex flex-col gap-[25px]">
            <h2 className="text-[40px] font-[700] leading-[120%] text-[#182759]">
              Tasks & Rewards{" "}
            </h2>
            <div className="rounded-[20px] bg-gradient-to-b from-[#D24074] to-[#2748BC] relative overflow-hidden ">
              <div className="relative">
                {/* <img src="/task.png" className="absolute w-full z-0" alt="" /> */}
                <div className="relative z-10">
                  <img
                    src="/coin.png"
                    className="absolute right-[5px] h-[55px] top-[8px]"
                    alt=""
                  />
                  <img
                    src="/ptn.svg"
                    className="absolute left-[0px] bottom-[0px]"
                    alt=""
                  />
                  <div className="relative z-10">
                    <div className="pt-5 pl-5 pr-10 flex justify-start items-center gap-[14px]">
                      <img src="/list.svg" alt="" />
                      <h2 className="text-[28px] font-[700] text-white">
                        Tasks for stack-points
                      </h2>
                    </div>
                    <div className="pt-[15px] px-[60px]">
                      <p className="text-[20px] text-white">
                        Rewards-based platform where users earn stack_points by
                        completing social tasks—like sharing content, engaging
                        with posts, inviting friends, or doing surveys—and then
                        redeem those points for airtime or data.
                      </p>
                    </div>
                    <div className="pt-[50px] flex justify-between items-start">
                      <div className="flex flex-col gap-[60px] pl-[42px] w-[45%]">
                        <div className="flex flex-col gap-[15px]">
                          <div className="flex justify-start items-center gap-2 text-[18px] text-white">
                            <img src="/btn.svg" alt="" />
                            <p>
                              Join <span className="font-[600]">Cashstack</span>{" "}
                              today
                            </p>
                          </div>
                          <div className="flex justify-start items-center gap-2 text-[18px] text-white">
                            <img src="/btn.svg" alt="" />
                            <p>Do social media task</p>
                          </div>
                          <div className="flex justify-start items-center gap-2 text-[18px] text-white">
                            <img src="/btn.svg" alt="" />
                            <p>
                              Earn{" "}
                              <span className="font-[600]">Stack-points</span>
                            </p>
                          </div>
                          <div className="flex justify-start items-center gap-2 text-[18px] text-white">
                            <img src="/btn.svg" alt="" />
                            <p>
                              Converts{" "}
                              <span className="font-[600]">Stack-points </span>{" "}
                              into data and airtime
                            </p>
                          </div>
                        </div>
                        <button className="bg-white h-[55px] w-[155px] rounded-[6px] text-[#182759] font-[700] text-[20px]">
                          Try now
                        </button>
                      </div>
                      <div className="w-[55%]">
                        <img src="/mockup.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-full border-[#C1C1C1B2] border-[2px] rounded-[14px] p-[5px]">
            <div className="bg-[#ECF1FF] rounded-[10px] text-center py-[10px] text-[#456EFE] text-[30px] font-[700]">
              Referral, earning & rewards
            </div>

            <div className="pt-[24px] flex justify-center items-center">
              <div className="w-[50%]">
                <img src="/iphone.png" className="w-full" alt="" />
              </div>
            </div>
            <div className="px-5">
              <div className="flex justify-start items-center gap-[14px]">
                <img src="/refer.svg" alt="" />
                <h2 className="text-[28px] font-[700] text-[#182759]">
                  Refer a friend and earn
                </h2>
              </div>
              <div className="pt-[15px] px-[35px]">
                <p className="text-[20px] text-[#182759]">
                  Refer Friends: These platforms usually give a solid amount of
                  points per referral. Share your code with friends or post it
                  in online communities (if allowed).
                </p>
              </div>

              <div className="flex justify-center items-center py-8">
                <button className="bg-primary h-[55px] w-[155px] rounded-[6px] text-white font-[700] text-[20px]">
                  Try now
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className=" overflow-hidden">
          <div className="bg-[#ECF1FF] px-[10%] relative">
            <img
              src="/blackApple.png"
              className="absolute w-[25%] left-0 top-0 z-0"
              alt=""
            />
            <img
              src="/ellipse.png"
              className="absolute w-[35%] left-[33%] bottom-0 z-20"
              alt=""
            />
            <div className="relative z-10 flex justify-between items-center gap-[20px]">
              <div className="flex flex-col gap-[60px] w-1/2">
                <div className="flex flex-col gap-[40px]">
                  <h2 className="text-[28px] font-[700] text-[#182759]">
                    Purchase your bills services
                  </h2>
                  <p className="text-[#182759] text-[20px]">
                    With <span className="font-[700]">Cashstack</span>, you only
                    have the most suitable way to make purchase your{" "}
                    <span className="font-[700]">
                      data, airtime, electricity
                    </span>{" "}
                    and <span className="font-[700]">TV</span>{" "}
                  </p>
                </div>

                <div className="flex flex-col justify-start items-start gap-[20px]">
                  <div className="flex justify-start items-center gap-[30px]">
                    <img src="/tv.svg" alt="" />
                    <p className="text-[24px] font-[500]">TV subscription</p>
                  </div>
                  <div className="flex justify-start items-center gap-[30px]">
                    <img src="/data.svg" alt="" />
                    <p className="text-[24px] font-[500]">Get data</p>
                  </div>
                  <div className="flex justify-start items-center gap-[30px]">
                    <img src="/airtime.svg" alt="" />
                    <p className="text-[24px] font-[500]">Get airtime</p>
                  </div>
                  <div className="flex justify-start items-center gap-[30px]">
                    <img src="/electricity.svg" alt="" />
                    <p className="text-[24px] font-[500]">
                      Buy Electricity bills
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-1/2 bg-gradient-to-r from-[#142561] to-[#456EFE] py-[90px] px-5 overflow-hidden relative">
                <img
                  src="/aside.png"
                  className="left-0 w-[70%] bottom-0 absolute"
                  alt=""
                />
                <div className="relative z-10 flex flex-col text-white items-center gap-[50px]">
                  <h2 className="font-[700] text-[38px]">
                    Bill Splitting & Services
                  </h2>
                  <div className="border-[#C1C1C166] border-[2px] bg-[#182759] py-11 px-[10px] w-full rounded-[8px] flex flex-col gap-[30px]">
                    <h2 className="font-[700] text-[28px]">Bill splitting</h2>
                    <p className="text-[20px]">
                      This feature allows users to divide the cost of a purchase
                      or expense among a group of people. This feature is
                      designed to simplify the process of settling expenses with
                      friends or colleagues after a shared purchase or activity.
                    </p>

                    <div className="flex justify-center items-center pt-[10px]">
                      <button className="bg-white h-[55px] w-[155px] rounded-[6px] text-[#182759] font-[700] text-[20px]">
                        Try now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-[10%] pt-[75px] pb-[60px] flex justify-between items-start gap-[32px]">
          <div className="w-[40%]">
            <div className="flex flex-col gap-[24px]">
              <h2 className="text-[40px] text-[#182759] font-[700] leading-[120%]">
                Instant multiple <br /> currency conversion
              </h2>
              <p className="text-[#182759] text-[20px]">
                Convert between supported local & International currencies,
                including Naira, Cedis and Dollar, in just a few minute
              </p>

              <div className="bg-[#182759] text-white rounded-[20px] px-[28px] pt-[30px] pb-[40px] flex flex-col items-center gap-[26px]">
                <h2 className="text-[24px] font-[600]">Currency conversion</h2>
                <img src="/swapping.png" className="" alt="" />
                <p>
                  Estimated conversion time{" "}
                  <span className="text-[18px] font-[600]">0-1 mins</span>
                </p>
              </div>

              <div className="flex justify-center items-center">
                <button className="bg-primary h-[55px] w-[185px] rounded-[6px] text-white font-[700] text-[20px]">
                  Try now
                </button>
              </div>
            </div>
          </div>

          <div className="w-[55%] flex flex-col items-center">
            <div className="relative overflow-hidden">
              <div className="absolute top-0 left-0 bg-[#182759] text-white font-[600] text-[18px] py-2 px-14 rounded-tl-[5px] rounded-br-[15px]">
                Coming soon
              </div>
              <img src="/details.png" alt="" />
            </div>

            <div className="bg-white w-[90%] box-shadow px-[10px] shadow-lg -mt-[70px] relative z-20 py-[25px] rounded-[12px]">
              <div className="flex justify-start items-center gap-[14px]">
                <img src="/conversion.svg" alt="" />
                <h2 className="text-[28px] font-[700] text-[#182759]">
                  Inter foreign & Local currency
                  <br /> conversion
                </h2>
              </div>
              <p className="text-[20px] px-[20px] pt-[10px]">
                Easily convert between currencies like; Naira and dollar with
                our seamless multi-currency conversion service. Whether
                you&apos;re handling international payments or managing funds
                across different countries, <br />
                <span className="font-[600] text-[#3E63E5]">
                  Cashstack
                </span>{" "}
                makes it swift and seamless.
              </p>
            </div>
          </div>
        </div>

        <section className="overflow-hidden w-full">
          <div className="bg-[#182759] w-full relative">
            <img
              src="/testimonialPtn.svg"
              className="absolute z-0 w-full"
              alt=""
            />
            <div className="relative z-10 text-white flex w-full flex-col items-center gap-[24px] px-[10%] pt-[50px] pb-[35px]">
              <h1 className="text-[38px] font-[700]">
                Testimonials & Reviews{" "}
              </h1>
              <p className="text-center text-[20px]">
                What our customers have to say <br /> about our outstanding App
              </p>

              <div className="overflow-hidden w-full px-6">
                <Swiper
                  modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                  spaceBetween={24}
                  slidesPerView={1}
                  loop={true}
                  autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: false,
                  }}
                  // Remove loopedSlides or set it to match your actual slide count
                  // loopedSlides={5}
                  // Add these parameters
                  allowTouchMove={true}
                  observer={true}
                  observeParents={true}
                  // breakpoints={{
                  //   640: { slidesPerView: 2 },
                  //   1124: { slidesPerView: 3 },
                  //   1440: { slidesPerView: 4 },
                  // }}
                  navigation={{
                    nextEl: ".custom-nextBB",
                    prevEl: ".custom-prevBB",
                  }}
                  pagination={{
                    el: ".custom-paginationBB",
                    clickable: true,
                    renderBullet: (_index, className) =>
                      `<span class="${className} relative z-[100]  custom-bulletBB"></span>`,
                  }}
                >
                  <SwiperSlide className="px-[10%]">
                    <div className="border-[2px] border-[#FFFFFF66] rounded-t-[75px] overflow-hidden">
                      <img src="/image.png" alt="" />
                      <div className="bg-white py-5 flex justify-center flex-col items-center gap-[15px]">
                        <div className="flex justify-center items-center gap-3">
                          <svg
                            width="28"
                            height="27"
                            viewBox="0 0 28 27"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14 0L17.7175 6.2805L24.9456 5.27114L22.3532 12.0934L27.649 17.1153L20.6987 19.3421L20.0744 26.6136L14 22.568L7.92563 26.6136L7.30127 19.3421L0.351009 17.1153L5.64682 12.0934L3.05436 5.27114L10.2825 6.2805L14 0Z"
                              fill="#FDD015"
                            />
                          </svg>
                          <svg
                            width="28"
                            height="27"
                            viewBox="0 0 28 27"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14 0L17.7175 6.2805L24.9456 5.27114L22.3532 12.0934L27.649 17.1153L20.6987 19.3421L20.0744 26.6136L14 22.568L7.92563 26.6136L7.30127 19.3421L0.351009 17.1153L5.64682 12.0934L3.05436 5.27114L10.2825 6.2805L14 0Z"
                              fill="#FDD015"
                            />
                          </svg>
                          <svg
                            width="28"
                            height="27"
                            viewBox="0 0 28 27"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14 0L17.7175 6.2805L24.9456 5.27114L22.3532 12.0934L27.649 17.1153L20.6987 19.3421L20.0744 26.6136L14 22.568L7.92563 26.6136L7.30127 19.3421L0.351009 17.1153L5.64682 12.0934L3.05436 5.27114L10.2825 6.2805L14 0Z"
                              fill="#FDD015"
                            />
                          </svg>
                          <svg
                            width="28"
                            height="27"
                            viewBox="0 0 28 27"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14 0L17.7175 6.2805L24.9456 5.27114L22.3532 12.0934L27.649 17.1153L20.6987 19.3421L20.0744 26.6136L14 22.568L7.92563 26.6136L7.30127 19.3421L0.351009 17.1153L5.64682 12.0934L3.05436 5.27114L10.2825 6.2805L14 0Z"
                              fill="#C1C1C1"
                            />
                          </svg>
                          <svg
                            width="28"
                            height="27"
                            viewBox="0 0 28 27"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14 0L17.7175 6.2805L24.9456 5.27114L22.3532 12.0934L27.649 17.1153L20.6987 19.3421L20.0744 26.6136L14 22.568L7.92563 26.6136L7.30127 19.3421L0.351009 17.1153L5.64682 12.0934L3.05436 5.27114L10.2825 6.2805L14 0Z"
                              fill="#C1C1C1"
                            />
                          </svg>
                        </div>

                        <p className="w-[45%] text-center text-[#1F3172] font-[600] text-[30px] leading-[100%]">
                          Before now, used to struggle to send money from Ghana
                          to Nigeria. but not anymore
                        </p>

                        <div className="flex justify-center items-center gap-[10px]">
                          <img src="/dot 2.svg" alt="" />
                          <p className="text-[20px] text-[#1F3172]">
                            Asamoa FF
                          </p>
                          <img src="/dot 2.svg" alt="" />
                        </div>

                        <div className="flex justify-center items-center gap-[10px]">
                          <img src="/ghana.svg" alt="" />
                          <p className="text-[18px] font-[600] text-[#1F3172]">
                            Ghana{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="px-[10%]">
                    <div className="border-[2px] border-[#FFFFFF66] rounded-t-[75px] overflow-hidden">
                      <img src="/image.png" alt="" />
                      <div className="bg-white py-5 flex justify-center flex-col items-center gap-[15px]">
                        <div className="flex justify-center items-center gap-3">
                          <svg
                            width="28"
                            height="27"
                            viewBox="0 0 28 27"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14 0L17.7175 6.2805L24.9456 5.27114L22.3532 12.0934L27.649 17.1153L20.6987 19.3421L20.0744 26.6136L14 22.568L7.92563 26.6136L7.30127 19.3421L0.351009 17.1153L5.64682 12.0934L3.05436 5.27114L10.2825 6.2805L14 0Z"
                              fill="#FDD015"
                            />
                          </svg>
                          <svg
                            width="28"
                            height="27"
                            viewBox="0 0 28 27"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14 0L17.7175 6.2805L24.9456 5.27114L22.3532 12.0934L27.649 17.1153L20.6987 19.3421L20.0744 26.6136L14 22.568L7.92563 26.6136L7.30127 19.3421L0.351009 17.1153L5.64682 12.0934L3.05436 5.27114L10.2825 6.2805L14 0Z"
                              fill="#FDD015"
                            />
                          </svg>
                          <svg
                            width="28"
                            height="27"
                            viewBox="0 0 28 27"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14 0L17.7175 6.2805L24.9456 5.27114L22.3532 12.0934L27.649 17.1153L20.6987 19.3421L20.0744 26.6136L14 22.568L7.92563 26.6136L7.30127 19.3421L0.351009 17.1153L5.64682 12.0934L3.05436 5.27114L10.2825 6.2805L14 0Z"
                              fill="#FDD015"
                            />
                          </svg>
                          <svg
                            width="28"
                            height="27"
                            viewBox="0 0 28 27"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14 0L17.7175 6.2805L24.9456 5.27114L22.3532 12.0934L27.649 17.1153L20.6987 19.3421L20.0744 26.6136L14 22.568L7.92563 26.6136L7.30127 19.3421L0.351009 17.1153L5.64682 12.0934L3.05436 5.27114L10.2825 6.2805L14 0Z"
                              fill="#C1C1C1"
                            />
                          </svg>
                          <svg
                            width="28"
                            height="27"
                            viewBox="0 0 28 27"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14 0L17.7175 6.2805L24.9456 5.27114L22.3532 12.0934L27.649 17.1153L20.6987 19.3421L20.0744 26.6136L14 22.568L7.92563 26.6136L7.30127 19.3421L0.351009 17.1153L5.64682 12.0934L3.05436 5.27114L10.2825 6.2805L14 0Z"
                              fill="#C1C1C1"
                            />
                          </svg>
                        </div>

                        <p className="w-[45%] text-center text-[#1F3172] font-[600] text-[30px] leading-[100%]">
                          Before now, used to struggle to send money from Ghana
                          to Nigeria. but not anymore
                        </p>

                        <div className="flex justify-center items-center gap-[10px]">
                          <img src="/dot 2.svg" alt="" />
                          <p className="text-[20px] text-[#1F3172]">
                            Asamoa FF
                          </p>
                          <img src="/dot 2.svg" alt="" />
                        </div>

                        <div className="flex justify-center items-center gap-[10px]">
                          <img src="/ghana.svg" alt="" />
                          <p className="text-[18px] font-[600] text-[#1F3172]">
                            Ghana{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="px-[10%]">
                    <div className="border-[2px] border-[#FFFFFF66] rounded-t-[75px] overflow-hidden">
                      <img src="/image.png" alt="" />
                      <div className="bg-white py-5 flex justify-center flex-col items-center gap-[15px]">
                        <div className="flex justify-center items-center gap-3">
                          <svg
                            width="28"
                            height="27"
                            viewBox="0 0 28 27"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14 0L17.7175 6.2805L24.9456 5.27114L22.3532 12.0934L27.649 17.1153L20.6987 19.3421L20.0744 26.6136L14 22.568L7.92563 26.6136L7.30127 19.3421L0.351009 17.1153L5.64682 12.0934L3.05436 5.27114L10.2825 6.2805L14 0Z"
                              fill="#FDD015"
                            />
                          </svg>
                          <svg
                            width="28"
                            height="27"
                            viewBox="0 0 28 27"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14 0L17.7175 6.2805L24.9456 5.27114L22.3532 12.0934L27.649 17.1153L20.6987 19.3421L20.0744 26.6136L14 22.568L7.92563 26.6136L7.30127 19.3421L0.351009 17.1153L5.64682 12.0934L3.05436 5.27114L10.2825 6.2805L14 0Z"
                              fill="#FDD015"
                            />
                          </svg>
                          <svg
                            width="28"
                            height="27"
                            viewBox="0 0 28 27"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14 0L17.7175 6.2805L24.9456 5.27114L22.3532 12.0934L27.649 17.1153L20.6987 19.3421L20.0744 26.6136L14 22.568L7.92563 26.6136L7.30127 19.3421L0.351009 17.1153L5.64682 12.0934L3.05436 5.27114L10.2825 6.2805L14 0Z"
                              fill="#FDD015"
                            />
                          </svg>
                          <svg
                            width="28"
                            height="27"
                            viewBox="0 0 28 27"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14 0L17.7175 6.2805L24.9456 5.27114L22.3532 12.0934L27.649 17.1153L20.6987 19.3421L20.0744 26.6136L14 22.568L7.92563 26.6136L7.30127 19.3421L0.351009 17.1153L5.64682 12.0934L3.05436 5.27114L10.2825 6.2805L14 0Z"
                              fill="#C1C1C1"
                            />
                          </svg>
                          <svg
                            width="28"
                            height="27"
                            viewBox="0 0 28 27"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14 0L17.7175 6.2805L24.9456 5.27114L22.3532 12.0934L27.649 17.1153L20.6987 19.3421L20.0744 26.6136L14 22.568L7.92563 26.6136L7.30127 19.3421L0.351009 17.1153L5.64682 12.0934L3.05436 5.27114L10.2825 6.2805L14 0Z"
                              fill="#C1C1C1"
                            />
                          </svg>
                        </div>

                        <p className="w-[45%] text-center text-[#1F3172] font-[600] text-[30px] leading-[100%]">
                          Before now, used to struggle to send money from Ghana
                          to Nigeria. but not anymore
                        </p>

                        <div className="flex justify-center items-center gap-[10px]">
                          <img src="/dot 2.svg" alt="" />
                          <p className="text-[20px] text-[#1F3172]">
                            Asamoa FF
                          </p>
                          <img src="/dot 2.svg" alt="" />
                        </div>

                        <div className="flex justify-center items-center gap-[10px]">
                          <img src="/ghana.svg" alt="" />
                          <p className="text-[18px] font-[600] text-[#1F3172]">
                            Ghana{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>

                <div className="pt-5 flex justify-center items-center gap-[20px]">
                  <div className="custom-paginationBB"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
