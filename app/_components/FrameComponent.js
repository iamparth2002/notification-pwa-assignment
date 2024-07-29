'use client';

import { useCallback, useEffect } from 'react';

const FrameComponent = () => {
  const sendNotification = () => {
    if (Notification.permission !== 'granted') {
      alert('Kindly Grant permission to send Notification');
    }
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification('Hi There!!! 👋', {
        body: 'Thank you for this opportunity',
      });
    }
  };
  const requestNotificationPermission = useCallback(() => {
    if ('Notification' in window) {
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          // sendNotification();
          console.log('permission has been granted');
        }
      });
    }
  });
  useEffect(() => {
    if ('Notification' in window) {
      requestNotificationPermission();
    }
  }, [requestNotificationPermission]);
  return (
    <section
      className={`self-stretch flex flex-col items-center justify-center py-0 px-6 box-border max-w-full text-center text-10xl text-white font-inter lg:-mt-36 `}
    >
      <div className="flex-1 flex flex-col items-center justify-center gap-[60px] max-w-full">
        <div className="self-stretch flex flex-col items-center justify-center py-0 px-px gap-[16px]">
          <h2 className="m-0 relative text-inherit leading-[32px] font-bold font-inherit text-3xl">
            Lorem Ipsum...
          </h2>
          <div className="self-stretch relative text-lg text-[#FFFFFF]/60">
            Lorem ipsum dolor sit amet.
          </div>
        </div>
        <button
          className="cursor-pointer bg-[#1D103A]  [border:none] p-0 self-stretch h-[42px] flex flex-col items-center justify-start w-[350px] hover:bg-opacity-20"
          onClick={sendNotification}
        >
          <div className="self-stretch h-[46px] border-[#6434CE] shadow-[0px_1px_2px_rgba(0,_0,_0,_0.12)] rounded-lg bg-midnightblue box-border flex flex-row items-center justify-center py-[13px] px-5 whitespace-nowrap border-[2px] border-solid border-blueviolet">
            <div className="relative text-base tracking-[0.03em] leading-[100%] font-semibold font-inter text-white text-center">
              Send Notification
            </div>
          </div>
        </button>
      </div>
    </section>
  );
};

export default FrameComponent;
