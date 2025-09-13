import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

function Input({ value, onChange, label, placeholder, type }) {
    const [showPassword, setShowPassowrd] = useState();

    const toggleShowPassword = () => {
        setShowPassowrd(!showPassword);
    }
    return (
        <div>
            <label htmlFor={label} className="text-[13px] text-slate-800">
                {label}
            </label>
            <div className="input-box">
                <input
                    type={
                        type == "password" ? (showPassword ? "text" : "password") : "type"
                    }
                    value={value}
                    placeholder={placeholder}
                    onChange={(e) => onChange(e)}
                    className="w-full bg-transparent outline-none"
                />
                {type === "password" && (
                    <>
                        {showPassword ? (
                            <FaRegEye
                                size={22}
                                className="text-primary cursor-pointer"
                                onClick={() => toggleShowPassword()}
                            />  
                        ) : (
                            <FaRegEyeSlash
                                size={22}
                                className="text-slate-400 cursor-pointer"
                                onClick={() => toggleShowPassword()}
                            />
                        )}
                    </>
                )}
            </div>
        </div>
    );
}

export default Input;
