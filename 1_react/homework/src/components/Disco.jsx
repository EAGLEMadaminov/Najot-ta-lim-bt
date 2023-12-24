function Disco({ age }) {
  return (
    <h2
      className={`text-${
        age >= 18 ? "green-600" : age >= 17 ? "rose-400" : "rose-500"
      } `}
    >
      Yoshingiz ${age}da ekan. Kirishingiz{" "}
      {age < 18 && age >= 17
        ? "uchun chekkaroqda 1-2som berishingiz kerak, keyin kirishingiz"
        : ""}{" "}
      mumkin! {age < 17 ? " emas! (Ishdan ketgim kelmayabdi.)" : ""}
    </h2>
  );
}

export default Disco;
