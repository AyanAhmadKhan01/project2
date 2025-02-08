"use client";

interface ClaimBtn {
  children: React.ReactNode;
}

export default function ClaimNowBtn({ children }: ClaimBtn) {

  return (
    <button
      className="bg-slate-800 px-6 py-2 border-2 shadow-[0px_4px_6px rgba(0,0,0,0.1)] border-[rgba(255,255,255,0.05)] shadow-[0px_0px_150px_#00b7ff] rounded-full hover:scale-105  hover:shadow-[0px_0px_150px_blue]
 transition-all duration-700"
    >
      {children}
    </button>
  );
}
