import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
const Footer = () => {
  return (
    <>
      <footer className="overflow-hidden">
        <div className="bg-[#fff] py-[5px] px-[12%] flex justify-between items-center">
          <div className="flex flex-col items-center text-white">
            <div className="flex justify-center items-center gap-2 py-10">
              <button className="flex justify-center items-center gap-2 w-[150px] h-[50px] font-[500] text-[20px] bg-[#FF0000] rounded-full">
                <span>Send</span>
                <img src="/send.svg" alt="" />
              </button>
              <button className="flex justify-center items-center gap-2 w-[150px] h-[50px] font-[500] text-[20px] bg-[#456EFE] rounded-full">
                <span>Receive</span>
                <img src="/receive.svg" alt="" />
              </button>
              <button
                className="flex justify-center items-center gap-2 w-[150px] h-[50px] font-[500] text-white text-[20px] bg-[#182759] rounded-full"
              >
                <span>Tasks</span>
                <img src="/task.svg" alt="" />
              </button>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex justify-center items-center gap-[25px] py-3">
              <h2 className="text-[18px] font-[500] py-4">
                Download app here{" "}
              </h2>
              <div className="bg-black text-[#fff] w-[180px] h-[66px] rounded-[8px] flex justify-center items-center gap-[6px]">
                <img src="/playstore.svg" alt="" />
                <div>
                  <p className="text-[14px]">Get it on</p>
                  <p className="text-[20px] font-[500]">Google Play</p>
                </div>
              </div>
              <div className="bg-black text-[#fff] w-[180px] h-[66px] rounded-[8px] flex justify-center items-center gap-[6px]">
                <img src="/apple.svg" alt="" />
                <div>
                  <p className="text-[14px]">Download on</p>
                  <p className="text-[20px] font-[500]">Apple Store</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#ECF1FF] relative">
          <img src="/footerPtn.svg" className="absolute z-0 w-full" alt="" />
          <div className="relative z-10 flex px-[10%] pb-[50px] pt-4 justify-between items-start">
            <div className="flex flex-col items-start gap-[50px]">
              <img src="/cashLogo.svg" alt="" />
              <div className="flex flex-col gap-[30px]">
                <Link
                  href={"tel:+234 802 3648 8746"}
                  target="_blank"
                  rel="noreferrer"
                  className="flex justify-start items-center gap-[6px]"
                >
                  <img src="/call.svg" alt="" />
                  <p className="text-[16px]">+234 802 3648 8746</p>
                </Link>
                <Link
                  href={"mailto:hello@cashstack.app"}
                  target="_blank"
                  rel="noreferrer"
                  className="flex justify-start items-center gap-[6px]"
                >
                  <img src="/mail.svg" alt="" />
                  <p className="text-[16px]">hello@cashstack.app</p>
                </Link>
                <div className="flex justify-start items-center gap-[6px]">
                  <p className="text-[16px]">
                    © 2025 Cashstack Tech Ltd. All rights reserved.
                  </p>
                </div>
                <div className="flex justify-start items-center gap-[6px]">
                  <p className="text-[16px]">
                    Cashstack Tech Limited is a licensed financial services
                    provider{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-[30px] items-start pt-[30px]">
              <div className="flex flex-col gap-[30px] text-[18px] font-[500]">
                <Link href="/policies">Privacy & Policies</Link>
                <Link href="/support">Support</Link>
              </div>
              <button className="bg-primary px-[20px] py-[10px] text-white font-[600] text-[18px] rounded-[8px]">
                Chat with support{" "}
              </button>
              <div className="flex justify-start gap-4 items-center">
                <Link href={"/"}>
                  <img src="/insta.svg" alt="" />
                </Link>
                <Link href={"/"}>
                  <img src="/x.svg" alt="" />
                </Link>
                <Link href={"/"}>
                  <img src="/fb.svg" alt="" />
                </Link>
                <Link href={"/"}>
                  <img src="/tiktok.svg" alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
