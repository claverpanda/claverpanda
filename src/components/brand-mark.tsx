export function BrandMark({ size = 32 }: { size?: number }) {
  return (
    <img
      src="/CleverPanda%20Tech%20Logo%20copy%20no%20text.png"
      alt="Clever Panda"
      width={size}
      height={size}
      className="shrink-0 object-contain"
      style={{ width: size, height: "auto" }}
    />
  );
}
