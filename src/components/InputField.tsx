import React from "react";

type InputFieldProps = {
  label: string;
  type: string;
  value: string;
  name: string;
  placeholder: string;
  errorMessage?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  buttonLabel?: string; // 버튼 텍스트
  onButtonClick?: () => void; // 버튼 클릭 이벤트
};

const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  value,
  name,
  placeholder,
  errorMessage,
  onChange,
  onKeyDown,
  buttonLabel,
  onButtonClick,
}) => {
  return (
    <>
      <label className="g_label" htmlFor={name}>
        {label}
      </label>
      <div className="g_input_wrap">
        <input
          type={type}
          value={value}
          name={name}
          onChange={onChange}
          onKeyDown={onKeyDown}
          placeholder={placeholder}
          required
          className="g_input flex-grow" // flex-grow를 사용하여 공간을 차지하도록 설정
        />
        {buttonLabel && (
          <button className="g_btn check" onClick={onButtonClick}>
            {buttonLabel}
          </button>
        )}
      </div>
      {errorMessage && <p className="g_invalid">{errorMessage}</p>}
    </>
  );
};

export default InputField;
