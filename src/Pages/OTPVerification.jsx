import { useEffect, useRef, useState } from "react";
import { RefreshCw, ShieldCheck } from "lucide-react";

export default function OTPVerification({ onVerify }) {
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [timeLeft, setTimeLeft] = useState(300);
  const [canResend, setCanResend] = useState(false);

  const inputsRef = useRef([]);

  // TIMER
  useEffect(() => {
    if (timeLeft <= 0) {
      setCanResend(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const format = (s) =>
    `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, "0")}`;

  const handleChange = (val, i) => {
    if (!/^\d*$/.test(val)) return;

    const copy = [...otp];
    copy[i] = val.slice(-1);
    setOtp(copy);

    if (val && i < 5) {
      inputsRef.current[i + 1]?.focus();
    }
  };

  const handleVerify = () => {
    const code = otp.join("");
    if (code.length !== 6) return;

    onVerify?.(code);
  };

  const handleResend = () => {
    setOtp(Array(6).fill(""));
    setTimeLeft(300);
    setCanResend(false);
    inputsRef.current[0]?.focus();
  };

  useEffect(() => {
    inputsRef.current[0]?.focus();
  }, []);

  return (
    <div className="w-[420px] bg-[#151515] border border-[#2d2d2d] rounded-2xl p-6">
      <div className="text-center mb-6">
        <ShieldCheck className="mx-auto text-[#AA7D36]" size={40} />
        <h1 className="text-white text-xl font-bold mt-2">Xác thực OTP</h1>
      </div>

      {/* OTP */}
      <div className="flex gap-2 justify-between mb-6">
        {otp.map((v, i) => (
          <input
            key={i}
            ref={(el) => (inputsRef.current[i] = el)}
            value={v}
            maxLength={1}
            onChange={(e) => handleChange(e.target.value, i)}
            className="w-12 h-12 text-center bg-[#242424] text-white rounded-lg border border-[#2d2d2d] focus:border-[#AA7D36]"
          />
        ))}
      </div>

      {/* TIMER */}
      <div className="flex justify-between text-sm mb-5">
        <span className="text-gray-400">
          Hết hạn: <span className="text-[#AA7D36]">{format(timeLeft)}</span>
        </span>

        <button
          onClick={handleResend}
          disabled={!canResend}
          className="flex items-center gap-1 text-[#AA7D36] disabled:text-gray-600"
        >
          <RefreshCw size={14} />
          Gửi lại
        </button>
      </div>

      {/* BUTTON */}
      <button
        onClick={handleVerify}
        className="w-full py-3 bg-[#AA7D36] rounded-xl font-bold"
      >
        Xác nhận
      </button>
    </div>
  );
}
